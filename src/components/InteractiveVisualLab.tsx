import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { ChevronDown, ChevronUp, RotateCcw } from 'lucide-react';
import { Language, VisualizerType } from '../types/nimcet';
import {
  classifyConicByPlaneAngle,
  compute3DVectorMetrics,
  convertNumberSystemBreakdown,
} from '../utils/nimcetEngine';

interface InteractiveVisualLabProps {
  lang: Language;
  initialMode?: VisualizerType;
}

const LAB_MODES: {
  id: VisualizerType;
  labelEn: string;
  labelHi: string;
  badge: string;
}[] = [
  {
    id: 'conic_3d',
    labelEn: '3D Conic Sections Slicer',
    labelHi: '3D शांकव परिच्छेद (Conic Slicer)',
    badge: '3D WebGL',
  },
  {
    id: 'vector_3d',
    labelEn: '3D Vectors Cross & Dot Lab',
    labelHi: '3D सदिश डॉट और क्रॉस लैब',
    badge: '3D WebGL',
  },
  {
    id: 'venn_prob_3d',
    labelEn: '3D Set & Conditional Probability',
    labelHi: '3D समुच्चय और प्रायिकता स्पेस',
    badge: '3D WebGL',
  },
  {
    id: 'calculus_2d',
    labelEn: '2D Calculus Tangent & Integral',
    labelHi: '2D कलन स्पर्श रेखा और समाकलन',
    badge: '2D Interactive',
  },
  {
    id: 'logic_ieee_2d',
    labelEn: '2D Logic Gates & 2’s Complement',
    labelHi: '2D लॉजिक गेट्स और बाइनरी ALU',
    badge: '2D Hardware',
  },
  {
    id: 'seating_2d',
    labelEn: '2D Circular Seating Arrangement',
    labelHi: '2D वृत्तीय बैठक व्यवस्था सॉल्वर',
    badge: '2D Reasoning',
  },
];

export const InteractiveVisualLab: React.FC<InteractiveVisualLabProps> = ({
  lang,
  initialMode = 'conic_3d',
}) => {
  const [activeMode, setActiveMode] = useState<VisualizerType>(initialMode);
  const [dockCollapsed, setDockCollapsed] = useState(false);

  // Sync when parent selects a chapter with a specific visualizer
  useEffect(() => {
    setActiveMode(initialMode);
  }, [initialMode]);

  // 3D Conic state
  const [planeTiltDeg, setPlaneTiltDeg] = useState<number>(22);
  const [planeOffsetY, setPlaneOffsetY] = useState<number>(0.8);

  // 3D Vector state
  const [vecAngleDeg, setVecAngleDeg] = useState<number>(60);
  const [vecMagA, setVecMagA] = useState<number>(3.0);
  const [vecMagB, setVecMagB] = useState<number>(4.0);

  // 3D Probability Venn state
  const [probA, setProbA] = useState<number>(0.5);
  const [probB, setProbB] = useState<number>(0.4);
  const [probIntersect, setProbIntersect] = useState<number>(0.2);

  // 2D Calculus state
  const [calcTangentX, setCalcTangentX] = useState<number>(1.2);
  const [riemannBins, setRiemannBins] = useState<number>(12);

  // 2D Logic & Binary state
  const [bitA, setBitA] = useState<0 | 1>(1);
  const [bitB, setBitB] = useState<0 | 1>(0);
  const [gateType, setGateType] = useState<'NAND' | 'NOR' | 'XOR' | 'XNOR' | 'AND' | 'OR'>('NAND');
  const [decimalInput, setDecimalInput] = useState<number>(-42);

  // 2D Circular Seating state
  const [facingCenter, setFacingCenter] = useState<boolean>(true);
  const [anchorSeat, setAnchorSeat] = useState<number>(0);
  const [stepOffset, setStepOffset] = useState<number>(3);

  // Three.js mount ref and mutable state ref
  const canvasMountRef = useRef<HTMLDivElement | null>(null);
  const requestRenderRef = useRef<(() => void) | null>(null);
  const resetCameraRef = useRef<(() => void) | null>(null);
  const simParamsRef = useRef({
    activeMode,
    planeTiltDeg,
    planeOffsetY,
    vecAngleDeg,
    vecMagA,
    vecMagB,
    probA,
    probB,
    probIntersect,
  });

  useEffect(() => {
    simParamsRef.current = {
      activeMode,
      planeTiltDeg,
      planeOffsetY,
      vecAngleDeg,
      vecMagA,
      vecMagB,
      probA,
      probB,
      probIntersect,
    };
    if (requestRenderRef.current) {
      requestRenderRef.current();
    }
  }, [
    activeMode,
    planeTiltDeg,
    planeOffsetY,
    vecAngleDeg,
    vecMagA,
    vecMagB,
    probA,
    probB,
    probIntersect,
  ]);

  const is3DMode =
    activeMode === 'conic_3d' || activeMode === 'vector_3d' || activeMode === 'venn_prob_3d';

  // Mount Three.js WebGLRenderer once when in 3D mode
  useEffect(() => {
    const container = canvasMountRef.current;
    if (!container) return;

    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 480;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);
    scene.fog = new THREE.FogExp2(0x0f172a, 0.045);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(5.2, 3.6, 5.8);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isSoftwareGl,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // Studio Warm/Cool Lighting Rig
    const hemiLight = new THREE.HemisphereLight(0x7dd3fc, 0x1e293b, 0.85);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xfff7ed, 2.2);
    keyLight.position.set(6, 9, 6);
    keyLight.castShadow = !isSoftwareGl;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.1);
    rimLight.position.set(-6, 4, -5);
    scene.add(rimLight);

    // Ground & Contact Shadow Plane (disjoint Y offsets to prevent Z-fighting)
    const floorGeo = new THREE.CircleGeometry(7, 48);
    floorGeo.rotateX(-Math.PI / 2);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.85,
      metalness: 0.15,
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.position.y = -2.2;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);

    const shadowDiscGeo = new THREE.CircleGeometry(2.6, 36);
    shadowDiscGeo.rotateX(-Math.PI / 2);
    const shadowDiscMat = new THREE.MeshBasicMaterial({
      color: 0x020617,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
    });
    const shadowDisc = new THREE.Mesh(shadowDiscGeo, shadowDiscMat);
    shadowDisc.position.y = -2.18;
    scene.add(shadowDisc);

    const gridHelper = new THREE.GridHelper(10, 20, 0x334155, 0x1e293b);
    gridHelper.position.y = -2.17;
    scene.add(gridHelper);

    // ==================== GROUP 1: 3D CONIC SECTIONS (7-part composite group) ====================
    const conicGroup = new THREE.Group();
    scene.add(conicGroup);

    const pedestalGeo = new THREE.CylinderGeometry(1.75, 1.95, 0.24, 36);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.35,
      metalness: 0.8,
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = -2.05;
    conicGroup.add(pedestal);

    const axisRodGeo = new THREE.CylinderGeometry(0.035, 0.035, 4.2, 16);
    const axisRodMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.25,
      metalness: 0.9,
    });
    const axisRod = new THREE.Mesh(axisRodGeo, axisRodMat);
    conicGroup.add(axisRod);

    const coneMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      roughness: 0.25,
      metalness: 0.1,
      transparent: true,
      opacity: 0.52,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const lowerConeGeo = new THREE.ConeGeometry(1.65, 1.85, 48, 1, true);
    const lowerCone = new THREE.Mesh(lowerConeGeo, coneMat);
    lowerCone.position.y = -0.925;
    conicGroup.add(lowerCone);

    const upperConeGeo = new THREE.ConeGeometry(1.65, 1.85, 48, 1, true);
    upperConeGeo.rotateX(Math.PI);
    const upperCone = new THREE.Mesh(upperConeGeo, coneMat);
    upperCone.position.y = 0.925;
    conicGroup.add(upperCone);

    const vertexSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.09, 20, 20),
      new THREE.MeshStandardMaterial({ color: 0xfbbf24, roughness: 0.2, metalness: 0.85 })
    );
    conicGroup.add(vertexSphere);

    const slicePlaneGroup = new THREE.Group();
    const planeMesh = new THREE.Mesh(
      new THREE.BoxGeometry(3.5, 0.04, 3.5),
      new THREE.MeshPhysicalMaterial({
        color: 0xf43f5e,
        roughness: 0.2,
        metalness: 0.1,
        transparent: true,
        opacity: 0.45,
        depthWrite: false,
      })
    );
    const planeRim = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(3.5, 0.04, 3.5)),
      new THREE.LineBasicMaterial({ color: 0xfda4af })
    );
    const intersectionRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.85, 0.045, 16, 48),
      new THREE.MeshStandardMaterial({
        color: 0xfbbf24,
        roughness: 0.2,
        metalness: 0.85,
        emissive: 0xb45309,
        emissiveIntensity: 0.35,
      })
    );
    intersectionRing.rotation.x = Math.PI / 2;
    slicePlaneGroup.add(planeMesh, planeRim, intersectionRing);
    conicGroup.add(slicePlaneGroup);

    // ==================== GROUP 2: 3D VECTORS CROSS & DOT LAB (6-part composite group) ====================
    const vectorGroup = new THREE.Group();
    scene.add(vectorGroup);

    const originHub = new THREE.Mesh(
      new THREE.SphereGeometry(0.16, 24, 24),
      new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.3, metalness: 0.8 })
    );
    originHub.position.set(0, -1.0, 0);
    vectorGroup.add(originHub);

    function createArrowGroup(hexColor: number) {
      const g = new THREE.Group();
      const shaft = new THREE.Mesh(
        new THREE.CylinderGeometry(0.055, 0.055, 1, 16),
        new THREE.MeshStandardMaterial({ color: hexColor, roughness: 0.3, metalness: 0.6 })
      );
      shaft.position.y = 0.5;
      const head = new THREE.Mesh(
        new THREE.ConeGeometry(0.14, 0.32, 20),
        new THREE.MeshStandardMaterial({ color: hexColor, roughness: 0.2, metalness: 0.75 })
      );
      head.position.y = 1.05;
      g.add(shaft, head);
      g.position.set(0, -1.0, 0);
      return g;
    }

    const arrowA = createArrowGroup(0x38bdf8); // Vector A (Sky)
    const arrowB = createArrowGroup(0xf59e0b); // Vector B (Amber)
    const arrowCross = createArrowGroup(0x10b981); // A x B (Emerald)
    vectorGroup.add(arrowA, arrowB, arrowCross);

    const paraGeo = new THREE.BufferGeometry();
    const paraVertices = new Float32Array(18);
    paraGeo.setAttribute('position', new THREE.BufferAttribute(paraVertices, 3));
    const paraMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.32,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const parallelogramMesh = new THREE.Mesh(paraGeo, paraMat);
    parallelogramMesh.position.set(0, -1.0, 0);
    vectorGroup.add(parallelogramMesh);

    // ==================== GROUP 3: 3D SET & PROBABILITY SPACE (6-part composite group) ====================
    const vennGroup = new THREE.Group();
    scene.add(vennGroup);

    const vennBase = new THREE.Mesh(
      new THREE.BoxGeometry(5.2, 0.2, 3.6),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.6, metalness: 0.3 })
    );
    vennBase.position.y = -2.05;
    vennGroup.add(vennBase);

    const cylMatA = new THREE.MeshPhysicalMaterial({
      color: 0x0284c7,
      roughness: 0.25,
      metalness: 0.15,
      transparent: true,
      opacity: 0.68,
    });
    const cylMatB = new THREE.MeshPhysicalMaterial({
      color: 0xd97706,
      roughness: 0.25,
      metalness: 0.15,
      transparent: true,
      opacity: 0.68,
    });
    const cylMatInter = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.2,
      metalness: 0.5,
    });

    const cylA = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.15, 1.4, 36), cylMatA);
    const cylB = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.15, 1.4, 36), cylMatB);
    const cylInter = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 1.65, 32), cylMatInter);
    vennGroup.add(cylA, cylB, cylInter);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = !isSoftwareGl;
    controls.dampingFactor = 0.08;
    controls.target.set(0, -0.2, 0);
    controls.minDistance = 3;
    controls.maxDistance = 14;

    let frameId = 0;
    let renderBusy = false;
    let renderDirty = false;

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      if (!gl || typeof gl.fenceSync !== 'function') {
        frameId = window.setTimeout(cb, 80);
        return;
      }
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          if (sync) gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 80);
        }
      };
      frameId = window.setTimeout(poll, 5);
    }

    function updateSceneFromParams() {
      const p = simParamsRef.current;
      conicGroup.visible = p.activeMode === 'conic_3d';
      vectorGroup.visible = p.activeMode === 'vector_3d';
      vennGroup.visible = p.activeMode === 'venn_prob_3d';

      if (p.activeMode === 'conic_3d') {
        const rad = THREE.MathUtils.degToRad(p.planeTiltDeg);
        slicePlaneGroup.position.y = p.planeOffsetY;
        slicePlaneGroup.rotation.z = rad;
        const scaleR = Math.max(0.35, Math.abs(p.planeOffsetY) * 0.88);
        intersectionRing.scale.set(
          scaleR * (1 + Math.sin(rad) * 0.45),
          scaleR,
          1
        );
      } else if (p.activeMode === 'vector_3d') {
        const theta = THREE.MathUtils.degToRad(p.vecAngleDeg);
        const lenA = p.vecMagA * 0.55;
        const lenB = p.vecMagB * 0.55;

        // Vector A along +X in XZ plane
        arrowA.rotation.set(0, 0, -Math.PI / 2);
        arrowA.scale.set(1, lenA, 1);

        // Vector B at angle theta in XZ plane
        arrowB.rotation.set(0, -theta, -Math.PI / 2);
        arrowB.scale.set(1, lenB, 1);

        // Cross product A x B along +Y
        const crossLen = Math.max(0.15, lenA * lenB * Math.sin(theta) * 0.75);
        arrowCross.rotation.set(0, 0, 0);
        arrowCross.scale.set(1, crossLen, 1);

        // Update parallelogram vertices in XZ plane
        const ax = lenA;
        const az = 0;
        const bx = lenB * Math.cos(theta);
        const bz = lenB * Math.sin(theta);
        const pos = paraGeo.attributes.position.array as Float32Array;
        // Triangle 1: 0, A, B
        pos[0] = 0; pos[1] = 0.02; pos[2] = 0;
        pos[3] = ax; pos[4] = 0.02; pos[5] = az;
        pos[6] = bx; pos[7] = 0.02; pos[8] = bz;
        // Triangle 2: A, A+B, B
        pos[9] = ax; pos[10] = 0.02; pos[11] = az;
        pos[12] = ax + bx; pos[13] = 0.02; pos[14] = az + bz;
        pos[15] = bx; pos[16] = 0.02; pos[17] = bz;
        paraGeo.attributes.position.needsUpdate = true;
        paraGeo.computeVertexNormals();
      } else if (p.activeMode === 'venn_prob_3d') {
        const sep = Math.max(0.35, 1.35 - p.probIntersect * 2.1);
        const rA = 0.75 + p.probA * 0.7;
        const rB = 0.75 + p.probB * 0.7;
        cylA.scale.set(rA, 1 + p.probA, rA);
        cylB.scale.set(rB, 1 + p.probB, rB);
        cylA.position.set(-sep, -1.1, 0);
        cylB.position.set(sep, -1.1, 0);
        const rInt = Math.max(0.2, p.probIntersect * 1.4);
        cylInter.scale.set(rInt, 1.25, rInt);
        cylInter.position.set(0, -1.0, 0.15);
      }
    }

    function requestRender() {
      if (renderBusy) {
        renderDirty = true;
        return;
      }
      renderBusy = true;
      frameId = requestAnimationFrame(() => {
        renderDirty = false;
        updateSceneFromParams();
        controls.update();
        renderer.render(scene, camera);
        const done = () => {
          renderBusy = false;
          if (renderDirty) requestRender();
        };
        if (isSoftwareGl) afterDraw(done);
        else done();
      });
    }

    requestRenderRef.current = requestRender;
    resetCameraRef.current = () => {
      camera.position.set(5.2, 3.6, 5.8);
      controls.target.set(0, -0.2, 0);
      controls.update();
      requestRender();
    };

    controls.addEventListener('change', requestRender);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 800;
      const h = container.clientHeight || 480;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      requestRender();
    };
    window.addEventListener('resize', handleResize);

    if (!isSoftwareGl) {
      renderer.compile(scene, camera);
    }
    requestRender();

    return () => {
      window.removeEventListener('resize', handleResize);
      controls.removeEventListener('change', requestRender);
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      controls.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [is3DMode]);

  // Derived Calculations for Live Annotations
  const conicInfo = classifyConicByPlaneAngle(planeTiltDeg, 45);
  const radVec = (vecAngleDeg * Math.PI) / 180;
  const vecMetrics = compute3DVectorMetrics(
    [vecMagA, 0, 0],
    [vecMagB * Math.cos(radVec), 0, vecMagB * Math.sin(radVec)]
  );
  const safeIntersect = Math.min(probA, probB, probIntersect);
  const probUnion = Math.round((probA + probB - safeIntersect) * 100) / 100;
  const probCondAB = probB > 0 ? Math.round((safeIntersect / probB) * 100) / 100 : 0;

  // 2D Calculus metrics
  const fCalc = (x: number) => 0.35 * x * x + Math.sin(x) + 1.2;
  const dfCalc = (x: number) => 0.7 * x + Math.cos(x);
  const exactIntegral0To3 = 0.35 * 9 + (1 - Math.cos(3)) + 1.2 * 3; // ∫₀³ (0.35x² + sin x + 1.2) dx
  let riemannSum = 0;
  const dx = 3 / riemannBins;
  for (let i = 0; i < riemannBins; i++) {
    const midX = (i + 0.5) * dx;
    riemannSum += fCalc(midX) * dx;
  }

  // 2D Logic Gate output
  const evaluateGate = (a: 0 | 1, b: 0 | 1, g: typeof gateType): 0 | 1 => {
    switch (g) {
      case 'AND':
        return (a & b) as 0 | 1;
      case 'OR':
        return (a | b) as 0 | 1;
      case 'NAND':
        return ((a & b) ^ 1) as 0 | 1;
      case 'NOR':
        return ((a | b) ^ 1) as 0 | 1;
      case 'XOR':
        return (a ^ b) as 0 | 1;
      case 'XNOR':
        return ((a ^ b) ^ 1) as 0 | 1;
    }
  };
  const gateOut = evaluateGate(bitA, bitB, gateType);
  const numSys = convertNumberSystemBreakdown(decimalInput);

  // 2D Circular Seating metrics
  const seatNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const leftTargetSeat = facingCenter
    ? (anchorSeat + stepOffset) % 8
    : (anchorSeat - stepOffset + 8) % 8;
  const rightTargetSeat = facingCenter
    ? (anchorSeat - stepOffset + 8) % 8
    : (anchorSeat + stepOffset) % 8;
  const oppositeSeat = (anchorSeat + 4) % 8;

  return (
    <section className="space-y-6" aria-label="Interactive 2D and 3D Concept Visual Lab">
      {/* Mode Selector Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            {lang === 'en'
              ? 'Interactive 2D & 3D Concept Visual Sandbox'
              : 'इंटरएक्टिव 2D और 3D कॉन्सेप्ट विज़ुअल प्रयोगशाला'}
          </h2>
          <p className="text-sm text-slate-600 mt-0.5">
            {lang === 'en'
              ? 'Manipulate angles, vectors, calculus curves, binary logic gates, and circular seating arrangements in real time.'
              : 'कोणों, सदिशों, कलन वक्रों, लॉजिक गेट्स और बैठक व्यवस्था को वास्तविक समय में बदलकर कठिन सिद्धांतों को आसानी से समझें।'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl">
          {LAB_MODES.map((m) => {
            const active = activeMode === m.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setActiveMode(m.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-white hover:text-slate-900'
                }`}
              >
                {lang === 'en' ? m.labelEn : m.labelHi}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Sandbox Container */}
      {is3DMode ? (
        <div
          key="stage-3d"
          className="relative w-full h-[540px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950"
        >
          {/* Isolated WebGL Canvas Mount */}
          <div
            ref={canvasMountRef}
            data-testid="threejs-visual-stage"
            className="w-full h-full"
          />

          {/* Top-Left Minimal Spec Header Overlay (No backdrop-filter over WebGL per Three.js skill) */}
          <div className="absolute top-4 left-4 z-10 pointer-events-auto rounded-xl bg-slate-900/90 border border-slate-700 px-4 py-3 text-white max-w-md">
            {activeMode === 'conic_3d' && (
              <div>
                <div className="text-xs text-sky-400 font-semibold">
                  {lang === 'en' ? '3D Double-Nappe Cone Slicer' : '3D द्विशंकु परिच्छेद सिमुलेटर'} ·{' '}
                  <span className="font-mono tabular-nums">θ = {planeTiltDeg}°</span>
                </div>
                <div className="text-base font-bold mt-0.5">
                  {lang === 'en' ? conicInfo.conicTypeEn : conicInfo.conicTypeHi}
                </div>
                <div className="text-xs text-slate-300 mt-1 font-mono tabular-nums">
                  {conicInfo.standardEquation} · {conicInfo.eccentricity}
                </div>
              </div>
            )}

            {activeMode === 'vector_3d' && (
              <div>
                <div className="text-xs text-sky-400 font-semibold">
                  {lang === 'en' ? '3D Vector Dot & Cross Product' : '3D सदिश अदिश एवं सदिश गुणनफल'} ·{' '}
                  <span className="font-mono tabular-nums">θ = {vecAngleDeg}°</span>
                </div>
                <div className="text-base font-bold mt-0.5 font-mono tabular-nums">
                  a · b = {vecMetrics.dotProduct} · |a × b| = {vecMetrics.parallelogramArea}
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  {lang === 'en'
                    ? 'Sky = Vector a · Amber = Vector b · Emerald = Normal (a × b)'
                    : 'नीला = सदिश a · पीला = सदिश b · हरा = लंबवत (a × b)'}
                </div>
              </div>
            )}

            {activeMode === 'venn_prob_3d' && (
              <div>
                <div className="text-xs text-sky-400 font-semibold">
                  {lang === 'en'
                    ? '3D Inclusion-Exclusion & Conditional Probability'
                    : '3D समुच्चय और सप्रतिबंध प्रायिकता'}
                </div>
                <div className="text-base font-bold mt-0.5 font-mono tabular-nums">
                  P(A ∪ B) = {probUnion.toFixed(2)} · P(A | B) = {probCondAB.toFixed(2)}
                </div>
                <div className="text-xs text-slate-300 mt-1 font-mono tabular-nums">
                  P(A)={probA.toFixed(2)} · P(B)={probB.toFixed(2)} · P(A∩B)={safeIntersect.toFixed(2)}
                </div>
              </div>
            )}
          </div>

          {/* Unified Collapsible Bottom Control Dock (Zero Side-Panel Clutter) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-[min(920px,94%)] pointer-events-auto">
            <div className="flex justify-center mb-1.5">
              <button
                type="button"
                onClick={() => setDockCollapsed((prev) => !prev)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900/95 border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-200 hover:text-white cursor-pointer"
              >
                {dockCollapsed ? (
                  <>
                    <ChevronUp className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Show 3D Controls' : '3D नियंत्रण दिखाएं'}</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Hide Controls (Cinema View)' : 'नियंत्रण छिपाएं'}</span>
                  </>
                )}
              </button>
            </div>

            {!dockCollapsed && (
              <div className="rounded-xl bg-slate-900/95 border border-slate-700 p-4 text-white shadow-xl">
                {activeMode === 'conic_3d' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div>
                      <label
                        htmlFor="slider-conic-tilt"
                        className="flex justify-between text-xs font-medium text-slate-300 mb-1"
                      >
                        <span>
                          {lang === 'en' ? 'Cutting Plane Angle (θ)' : 'समतल का झुकाव कोण (θ)'}
                        </span>
                        <span className="font-mono tabular-nums text-sky-400">{planeTiltDeg}°</span>
                      </label>
                      <input
                        id="slider-conic-tilt"
                        type="range"
                        min={0}
                        max={75}
                        step={1}
                        value={planeTiltDeg}
                        onChange={(e) => setPlaneTiltDeg(Number(e.target.value))}
                        className="w-full accent-sky-400 cursor-pointer"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="slider-conic-offset"
                        className="flex justify-between text-xs font-medium text-slate-300 mb-1"
                      >
                        <span>
                          {lang === 'en' ? 'Plane Vertical Height (Y)' : 'समतल की ऊंचाई (Y)'}
                        </span>
                        <span className="font-mono tabular-nums text-amber-400">
                          {planeOffsetY.toFixed(2)}
                        </span>
                      </label>
                      <input
                        id="slider-conic-offset"
                        type="range"
                        min={-1.4}
                        max={1.4}
                        step={0.05}
                        value={planeOffsetY}
                        onChange={(e) => setPlaneOffsetY(Number(e.target.value))}
                        className="w-full accent-amber-400 cursor-pointer"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5">
                      {[
                        { label: 'Circle (0°)', angle: 0 },
                        { label: 'Ellipse (22°)', angle: 22 },
                        { label: 'Parabola (45°)', angle: 45 },
                        { label: 'Hyperbola (68°)', angle: 68 },
                      ].map((preset) => (
                        <button
                          key={preset.label}
                          type="button"
                          onClick={() => setPlaneTiltDeg(preset.angle)}
                          className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer whitespace-nowrap ${
                            Math.abs(planeTiltDeg - preset.angle) <= 2
                              ? 'bg-sky-500 text-slate-950'
                              : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => resetCameraRef.current?.()}
                        aria-label="Reset 3D Camera"
                        className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {activeMode === 'vector_3d' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div>
                      <label
                        htmlFor="slider-vec-angle"
                        className="flex justify-between text-xs font-medium text-slate-300 mb-1"
                      >
                        <span>
                          {lang === 'en' ? 'Angle θ Between a and b' : 'सदिश a और b के बीच कोण θ'}
                        </span>
                        <span className="font-mono tabular-nums text-sky-400">{vecAngleDeg}°</span>
                      </label>
                      <input
                        id="slider-vec-angle"
                        type="range"
                        min={0}
                        max={180}
                        step={5}
                        value={vecAngleDeg}
                        onChange={(e) => setVecAngleDeg(Number(e.target.value))}
                        className="w-full accent-sky-400 cursor-pointer"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="slider-vec-maga"
                        className="flex justify-between text-xs font-medium text-slate-300 mb-1"
                      >
                        <span>{lang === 'en' ? 'Magnitude |a|' : 'सदिश परिमाण |a|'}</span>
                        <span className="font-mono tabular-nums text-sky-400">
                          {vecMagA.toFixed(1)}
                        </span>
                      </label>
                      <input
                        id="slider-vec-maga"
                        type="range"
                        min={1}
                        max={5}
                        step={0.5}
                        value={vecMagA}
                        onChange={(e) => setVecMagA(Number(e.target.value))}
                        className="w-full accent-sky-400 cursor-pointer"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="slider-vec-magb"
                        className="flex justify-between text-xs font-medium text-slate-300 mb-1"
                      >
                        <span>{lang === 'en' ? 'Magnitude |b|' : 'सदिश परिमाण |b|'}</span>
                        <span className="font-mono tabular-nums text-amber-400">
                          {vecMagB.toFixed(1)}
                        </span>
                      </label>
                      <input
                        id="slider-vec-magb"
                        type="range"
                        min={1}
                        max={5}
                        step={0.5}
                        value={vecMagB}
                        onChange={(e) => setVecMagB(Number(e.target.value))}
                        className="w-full accent-amber-400 cursor-pointer"
                      />
                    </div>
                  </div>
                )}

                {activeMode === 'venn_prob_3d' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div>
                      <label
                        htmlFor="slider-prob-a"
                        className="flex justify-between text-xs font-medium text-slate-300 mb-1"
                      >
                        <span>{lang === 'en' ? 'Event Probability P(A)' : 'घटना प्रायिकता P(A)'}</span>
                        <span className="font-mono tabular-nums text-sky-400">
                          {probA.toFixed(2)}
                        </span>
                      </label>
                      <input
                        id="slider-prob-a"
                        type="range"
                        min={0.1}
                        max={0.85}
                        step={0.05}
                        value={probA}
                        onChange={(e) => setProbA(Number(e.target.value))}
                        className="w-full accent-sky-400 cursor-pointer"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="slider-prob-b"
                        className="flex justify-between text-xs font-medium text-slate-300 mb-1"
                      >
                        <span>{lang === 'en' ? 'Event Probability P(B)' : 'घटना प्रायिकता P(B)'}</span>
                        <span className="font-mono tabular-nums text-amber-400">
                          {probB.toFixed(2)}
                        </span>
                      </label>
                      <input
                        id="slider-prob-b"
                        type="range"
                        min={0.1}
                        max={0.85}
                        step={0.05}
                        value={probB}
                        onChange={(e) => setProbB(Number(e.target.value))}
                        className="w-full accent-amber-400 cursor-pointer"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="slider-prob-int"
                        className="flex justify-between text-xs font-medium text-slate-300 mb-1"
                      >
                        <span>
                          {lang === 'en' ? 'Overlap Intersection P(A ∩ B)' : 'सर्वनिष्ठ प्रायिकता P(A ∩ B)'}
                        </span>
                        <span className="font-mono tabular-nums text-emerald-400">
                          {safeIntersect.toFixed(2)}
                        </span>
                      </label>
                      <input
                        id="slider-prob-int"
                        type="range"
                        min={0}
                        max={0.5}
                        step={0.05}
                        value={probIntersect}
                        onChange={(e) => setProbIntersect(Number(e.target.value))}
                        className="w-full accent-emerald-400 cursor-pointer"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* ==================== 2D INTERACTIVE SANDBOXES ==================== */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left 7-col Interactive Visual Canvas */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 flex flex-col justify-between">
            {activeMode === 'calculus_2d' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {lang === 'en'
                        ? 'Derivative Tangent Slope & Riemann Integral Area'
                        : 'अवकलन स्पर्श रेखा प्रवणता और रीमान समाकलन क्षेत्रफल'}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      f(x) = 0.35x² + sin(x) + 1.2 on [0, 3]
                    </p>
                  </div>
                  <div className="text-right font-mono text-xs tabular-nums">
                    <div className="text-sky-700 font-semibold">
                      Slope f&apos;({calcTangentX.toFixed(1)}) = {dfCalc(calcTangentX).toFixed(2)}
                    </div>
                    <div className="text-emerald-700 font-semibold">
                      Riemann Area ≈ {riemannSum.toFixed(3)} (Exact: {exactIntegral0To3.toFixed(3)})
                    </div>
                  </div>
                </div>

                <svg
                  viewBox="0 0 520 280"
                  className="w-full h-64 bg-slate-50 rounded-xl border border-slate-200"
                  role="img"
                  aria-label="Calculus tangent and Riemann integral curve"
                >
                  {/* Coordinate Grid */}
                  {[60, 110, 160, 210].map((y) => (
                    <line
                      key={y}
                      x1={45}
                      y1={y}
                      x2={490}
                      y2={y}
                      stroke="#e2e8f0"
                      strokeDasharray="4 4"
                    />
                  ))}
                  <line x1={45} y1={240} x2={495} y2={240} stroke="#334155" strokeWidth={2} />
                  <line x1={45} y1={20} x2={45} y2={245} stroke="#334155" strokeWidth={2} />

                  {/* Riemann Rectangles */}
                  {Array.from({ length: riemannBins }).map((_, idx) => {
                    const xStart = idx * (3 / riemannBins);
                    const xMid = (idx + 0.5) * (3 / riemannBins);
                    const yVal = fCalc(xMid);
                    const svgX = 45 + (xStart / 3) * 420;
                    const rectW = (1 / riemannBins) * 420;
                    const rectH = yVal * 42;
                    return (
                      <rect
                        key={idx}
                        x={svgX}
                        y={240 - rectH}
                        width={Math.max(1, rectW - 1)}
                        height={rectH}
                        fill="rgba(16, 185, 129, 0.22)"
                        stroke="#10b981"
                        strokeWidth={1}
                      />
                    );
                  })}

                  {/* Smooth Function Curve */}
                  <path
                    d={Array.from({ length: 61 })
                      .map((_, i) => {
                        const x = (i / 60) * 3;
                        const y = fCalc(x);
                        const sx = 45 + (x / 3) * 420;
                        const sy = 240 - y * 42;
                        return `${i === 0 ? 'M' : 'L'} ${sx.toFixed(1)} ${sy.toFixed(1)}`;
                      })
                      .join(' ')}
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth={3}
                  />

                  {/* Tangent Line at calcTangentX */}
                  {(() => {
                    const x0 = calcTangentX;
                    const y0 = fCalc(x0);
                    const m = dfCalc(x0);
                    const xLeft = Math.max(0, x0 - 0.75);
                    const xRight = Math.min(3, x0 + 0.75);
                    const yLeft = y0 + m * (xLeft - x0);
                    const yRight = y0 + m * (xRight - x0);
                    const sx0 = 45 + (x0 / 3) * 420;
                    const sy0 = 240 - y0 * 42;
                    return (
                      <g>
                        <line
                          x1={45 + (xLeft / 3) * 420}
                          y1={240 - yLeft * 42}
                          x2={45 + (xRight / 3) * 420}
                          y2={240 - yRight * 42}
                          stroke="#e11d48"
                          strokeWidth={2.5}
                        />
                        <circle cx={sx0} cy={sy0} r={6} fill="#e11d48" />
                        <text
                          x={sx0 + 10}
                          y={sy0 - 10}
                          fill="#be123c"
                          fontSize="11"
                          fontWeight="bold"
                        >
                          P({x0.toFixed(1)}, {y0.toFixed(2)})
                        </text>
                      </g>
                    );
                  })()}
                </svg>
              </div>
            )}

            {activeMode === 'logic_ieee_2d' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {lang === 'en'
                        ? 'Digital Logic Gate Bench & 8-Bit 2’s Complement Register'
                        : 'डिजिटल लॉजिक गेट बेंच और 8-बिट 2’s कॉम्प्लीमेंट रजिस्टर'}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {lang === 'en'
                        ? 'Click Input Bits A & B or enter any signed integer (-128 to +127)'
                        : 'इनपुट बिट्स A और B को टॉगल करें या कोई पूर्णांक (-128 से +127) दर्ज करें'}
                    </p>
                  </div>
                  <div className="font-mono text-xs font-bold px-3 py-1 rounded-lg bg-slate-900 text-white tabular-nums">
                    {gateType}({bitA}, {bitB}) = {gateOut}
                  </div>
                </div>

                {/* Interactive Logic Gate Circuit SVG */}
                <svg
                  viewBox="0 0 520 175"
                  className="w-full h-44 bg-slate-950 rounded-xl border border-slate-800"
                  role="img"
                  aria-label="Digital logic gate simulator"
                >
                  {/* Input A Wire */}
                  <line
                    x1={75}
                    y1={55}
                    x2={210}
                    y2={55}
                    stroke={bitA ? '#38bdf8' : '#475569'}
                    strokeWidth={4}
                  />
                  {/* Input B Wire */}
                  <line
                    x1={75}
                    y1={120}
                    x2={210}
                    y2={120}
                    stroke={bitB ? '#38bdf8' : '#475569'}
                    strokeWidth={4}
                  />
                  {/* Gate Body */}
                  <rect
                    x={210}
                    y={32}
                    width={110}
                    height={110}
                    rx={18}
                    fill="#1e293b"
                    stroke="#38bdf8"
                    strokeWidth={2.5}
                  />
                  <text
                    x={265}
                    y={92}
                    textAnchor="middle"
                    fill="#f8fafc"
                    fontSize="16"
                    fontWeight="bold"
                  >
                    {gateType}
                  </text>
                  {/* Output Wire */}
                  <line
                    x1={320}
                    y1={87}
                    x2={430}
                    y2={87}
                    stroke={gateOut ? '#10b981' : '#475569'}
                    strokeWidth={4}
                  />
                  {/* Output LED Node */}
                  <circle
                    cx={450}
                    cy={87}
                    r={22}
                    fill={gateOut ? '#10b981' : '#1e293b'}
                    stroke={gateOut ? '#34d399' : '#64748b'}
                    strokeWidth={3}
                  />
                  <text
                    x={450}
                    y={93}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="16"
                    fontWeight="bold"
                  >
                    {gateOut}
                  </text>
                  {/* Input Labels */}
                  <text x={35} y={60} fill="#e2e8f0" fontSize="14" fontWeight="bold">
                    A = {bitA}
                  </text>
                  <text x={35} y={125} fill="#e2e8f0" fontSize="14" fontWeight="bold">
                    B = {bitB}
                  </text>
                </svg>

                {/* 8-Bit Register Breakdown */}
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-200">
                    <div className="text-slate-500">8-Bit Binary</div>
                    <div className="font-mono font-bold text-slate-900 mt-0.5 tabular-nums">
                      {numSys.binary8Bit}
                    </div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-200">
                    <div className="text-slate-500">2&apos;s Complement (-N)</div>
                    <div className="font-mono font-bold text-sky-700 mt-0.5 tabular-nums">
                      {numSys.twosComplement8Bit}
                    </div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-200">
                    <div className="text-slate-500">Octal (Base 8)</div>
                    <div className="font-mono font-bold text-slate-900 mt-0.5 tabular-nums">
                      ({numSys.octal})₈
                    </div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-200">
                    <div className="text-slate-500">Hex (Base 16)</div>
                    <div className="font-mono font-bold text-amber-700 mt-0.5 tabular-nums">
                      0x{numSys.hexadecimal}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeMode === 'seating_2d' && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {lang === 'en'
                        ? '8-Person Circular Table Direction & Offset Solver'
                        : '8-व्यक्ति वृत्तीय मेज दिशा और स्थान सॉल्वर'}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {facingCenter
                        ? lang === 'en'
                          ? 'Facing CENTER: Clockwise = LEFT · Counter-Clockwise = RIGHT'
                          : 'केंद्र की ओर मुख: घड़ी की दिशा = बायां (Left) · विपरीत = दायां (Right)'
                        : lang === 'en'
                        ? 'Facing OUTSIDE: Counter-Clockwise = LEFT · Clockwise = RIGHT'
                        : 'बाहर की ओर मुख: घड़ी के विपरीत = बायां (Left) · घड़ी की दिशा = दायां (Right)'}
                    </p>
                  </div>
                </div>

                <svg
                  viewBox="0 0 460 265"
                  className="w-full h-64 bg-slate-50 rounded-xl border border-slate-200"
                  role="img"
                  aria-label="8 person circular seating arrangement diagram"
                >
                  <circle
                    cx={230}
                    cy={132}
                    r={82}
                    fill="#ffffff"
                    stroke="#0f172a"
                    strokeWidth={2.5}
                  />
                  <text
                    x={230}
                    y={136}
                    textAnchor="middle"
                    fill="#475569"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    {facingCenter ? 'FACING CENTER' : 'FACING OUTSIDE'}
                  </text>

                  {seatNames.map((name, i) => {
                    // Seat 0 at bottom (90 deg), going clockwise
                    const angleDeg = 90 + i * 45;
                    const rad = (angleDeg * Math.PI) / 180;
                    const cx = 230 + 104 * Math.cos(rad);
                    const cy = 132 + 104 * Math.sin(rad);

                    const isAnchor = i === anchorSeat;
                    const isLeft = i === leftTargetSeat;
                    const isRight = i === rightTargetSeat;
                    const isOpp = i === oppositeSeat;

                    let fill = '#f1f5f9';
                    let textCol = '#0f172a';
                    if (isAnchor) {
                      fill = '#0284c7';
                      textCol = '#ffffff';
                    } else if (isLeft) {
                      fill = '#10b981';
                      textCol = '#ffffff';
                    } else if (isRight) {
                      fill = '#f59e0b';
                      textCol = '#ffffff';
                    } else if (isOpp) {
                      fill = '#6366f1';
                      textCol = '#ffffff';
                    }

                    return (
                      <g
                        key={name}
                        onClick={() => setAnchorSeat(i)}
                        className="cursor-pointer"
                      >
                        <circle
                          cx={cx}
                          cy={cy}
                          r={18}
                          fill={fill}
                          stroke="#0f172a"
                          strokeWidth={1.5}
                        />
                        <text
                          x={cx}
                          y={cy + 4}
                          textAnchor="middle"
                          fill={textCol}
                          fontSize="12"
                          fontWeight="bold"
                        >
                          {name}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            )}
          </div>

          {/* Right 5-col Control & Concept Deck */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 flex flex-col justify-between space-y-5">
            {activeMode === 'calculus_2d' && (
              <>
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-900">
                    {lang === 'en' ? 'Calculus Interactive Parameters' : 'कलन नियंत्रण पैरामीटर'}
                  </h4>
                  <div>
                    <label
                      htmlFor="calc-x-slider"
                      className="flex justify-between text-xs font-semibold text-slate-700 mb-1"
                    >
                      <span>{lang === 'en' ? 'Tangent Point x₀' : 'स्पर्श बिंदु x₀'}</span>
                      <span className="font-mono tabular-nums text-sky-700">
                        x₀ = {calcTangentX.toFixed(1)}
                      </span>
                    </label>
                    <input
                      id="calc-x-slider"
                      type="range"
                      min={0.2}
                      max={2.8}
                      step={0.1}
                      value={calcTangentX}
                      onChange={(e) => setCalcTangentX(Number(e.target.value))}
                      className="w-full accent-sky-600 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="calc-bins-slider"
                      className="flex justify-between text-xs font-semibold text-slate-700 mb-1"
                    >
                      <span>
                        {lang === 'en'
                          ? 'Riemann Partitions (N Rectangles)'
                          : 'रीमान आयतों की संख्या (N)'}
                      </span>
                      <span className="font-mono tabular-nums text-emerald-700">
                        N = {riemannBins}
                      </span>
                    </label>
                    <input
                      id="calc-bins-slider"
                      type="range"
                      min={4}
                      max={48}
                      step={2}
                      value={riemannBins}
                      onChange={(e) => setRiemannBins(Number(e.target.value))}
                      className="w-full accent-emerald-600 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-xs text-slate-700 space-y-1.5">
                  <div className="font-bold text-slate-900">
                    {lang === 'en' ? 'NIMCET Exam Insight' : 'NIMCET परीक्षा शॉर्टकट'}
                  </div>
                  <p>
                    {lang === 'en'
                      ? 'As N → ∞, the sum of rectangle areas Σ f(xᵢ)Δx converges to the exact Definite Integral ∫₀³ f(x) dx. At local extrema, the red tangent line becomes horizontal (f′(x₀) = 0).'
                      : 'जैसे-जैसे आयतों की संख्या N → ∞ बढ़ती है, उनका कुल क्षेत्रफल सटीक निश्चित समाकलन ∫₀³ f(x) dx के बराबर हो जाता है। उच्चिष्ठ या निम्निष्ठ बिंदु पर स्पर्श रेखा क्षैतिज (f′(x₀) = 0) हो जाती है।'}
                  </p>
                </div>
              </>
            )}

            {activeMode === 'logic_ieee_2d' && (
              <>
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-900">
                    {lang === 'en'
                      ? 'Hardware Inputs & Base Converter'
                      : 'हार्डवेयर इनपुट और आधार रूपांतरण'}
                  </h4>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setBitA((prev) => (prev === 1 ? 0 : 1))}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold cursor-pointer ${
                        bitA === 1
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-100 text-slate-800 border border-slate-300'
                      }`}
                    >
                      Toggle Bit A = {bitA}
                    </button>
                    <button
                      type="button"
                      onClick={() => setBitB((prev) => (prev === 1 ? 0 : 1))}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold cursor-pointer ${
                        bitB === 1
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-100 text-slate-800 border border-slate-300'
                      }`}
                    >
                      Toggle Bit B = {bitB}
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {(['NAND', 'NOR', 'XOR', 'XNOR', 'AND', 'OR'] as const).map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setGateType(g)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                          gateType === g
                            ? 'bg-slate-900 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>

                  <div>
                    <label
                      htmlFor="decimal-conv-input"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      {lang === 'en'
                        ? 'Decimal Integer (-128 to +127) for 2’s Complement:'
                        : '2’s कॉम्प्लीमेंट के लिए दशमलव संख्या (-128 से +127):'}
                    </label>
                    <input
                      id="decimal-conv-input"
                      type="number"
                      min={-128}
                      max={127}
                      value={decimalInput}
                      onChange={(e) => setDecimalInput(Number(e.target.value))}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-mono tabular-nums"
                    />
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-xs text-slate-700">
                  <div className="font-bold text-slate-900 mb-1">
                    {lang === 'en' ? 'Universal Gate Rule (1-2-3-4-5)' : 'सार्वत्रिक गेट नियम (1-2-3-4-5)'}
                  </div>
                  <p>
                    {lang === 'en'
                      ? 'Minimum 2-input NAND gates needed: NOT = 1, AND = 2, OR = 3, XOR = 4, XNOR = 5.'
                      : 'न्यूनतम 2-इनपुट NAND गेट: NOT = 1, AND = 2, OR = 3, XOR = 4, XNOR = 5।'}
                  </p>
                </div>
              </>
            )}

            {activeMode === 'seating_2d' && (
              <>
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-900">
                    {lang === 'en' ? 'Seating Arrangement Controls' : 'बैठक व्यवस्था नियंत्रण'}
                  </h4>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setFacingCenter(true)}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold cursor-pointer ${
                        facingCenter
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-700 border border-slate-300'
                      }`}
                    >
                      {lang === 'en' ? 'Facing Center' : 'केंद्र की ओर मुख'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFacingCenter(false)}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold cursor-pointer ${
                        !facingCenter
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-700 border border-slate-300'
                      }`}
                    >
                      {lang === 'en' ? 'Facing Outside' : 'बाहर की ओर मुख'}
                    </button>
                  </div>

                  <div>
                    <label
                      htmlFor="seating-step-slider"
                      className="flex justify-between text-xs font-semibold text-slate-700 mb-1"
                    >
                      <span>{lang === 'en' ? 'Offset Step (Nth Left/Right)' : 'बाएं/दाएं स्थान अंतर'}</span>
                      <span className="font-mono tabular-nums text-sky-700">{stepOffset}</span>
                    </label>
                    <input
                      id="seating-step-slider"
                      type="range"
                      min={1}
                      max={3}
                      step={1}
                      value={stepOffset}
                      onChange={(e) => setStepOffset(Number(e.target.value))}
                      className="w-full accent-sky-600 cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2 text-xs font-medium">
                    <div className="p-2.5 rounded-lg bg-sky-50 text-sky-950 border border-sky-200">
                      Anchor Person: <strong>{seatNames[anchorSeat]}</strong> (Click any circle to change)
                    </div>
                    <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-950 border border-emerald-200">
                      {stepOffset}rd/nd to the LEFT of {seatNames[anchorSeat]}:{' '}
                      <strong>{seatNames[leftTargetSeat]}</strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-amber-50 text-amber-950 border border-amber-200">
                      {stepOffset}rd/nd to the RIGHT of {seatNames[anchorSeat]}:{' '}
                      <strong>{seatNames[rightTargetSeat]}</strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-950 border border-indigo-200">
                      Diametrically Opposite (+4 mod 8):{' '}
                      <strong>{seatNames[oppositeSeat]}</strong>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
