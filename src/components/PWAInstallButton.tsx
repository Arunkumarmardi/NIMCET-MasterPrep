import React, { useState } from 'react';
import { Download, WifiOff, CheckCircle2 } from 'lucide-react';
import { usePWAInstall, useOnlineStatus } from '../hooks/usePWAInstall';
import { Language } from '../types/nimcet';

interface PWAInstallButtonProps {
  lang: Language;
  offlineChaptersCount: number;
  totalChaptersCount: number;
  onSyncAllOffline: () => void;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  lang,
  offlineChaptersCount,
  totalChaptersCount,
  onSyncAllOffline,
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showModal, setShowModal] = useState(false);

  const allSynced = offlineChaptersCount >= totalChaptersCount;

  return (
    <>
      {isInstallable ? (
        <button
          type="button"
          onClick={install}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{lang === 'en' ? 'Install Offline App' : 'ऐप इंस्टॉल करें'}</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            onSyncAllOffline();
            if (!isInstalled) setShowModal(true);
          }}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          {allSynced ? (
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
          ) : (
            <Download className="w-3.5 h-3.5" />
          )}
          <span>
            {allSynced
              ? lang === 'en'
                ? `Offline Ready (${offlineChaptersCount}/${totalChaptersCount})`
                : `ऑफ़लाइन तैयार (${offlineChaptersCount}/${totalChaptersCount})`
              : lang === 'en'
              ? 'Save Offline Pack'
              : 'ऑफ़लाइन सेव करें'}
          </span>
        </button>
      )}

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pwa-offline-dialog-title"
        >
          <div className="w-full max-w-md rounded-xl bg-white p-6 border border-slate-200 shadow-lg">
            <h3 id="pwa-offline-dialog-title" className="text-lg font-bold text-slate-900">
              {lang === 'en'
                ? 'Offline Study Pack & PWA App Ready'
                : 'ऑफ़लाइन स्टडी पैक और PWA ऐप तैयार है'}
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {lang === 'en'
                ? `All ${totalChaptersCount} NIMCET chapters, formulas, mind maps, and PYQ sets are cached locally via Service Worker & LocalStorage so you can study anytime without internet.`
                : `सभी ${totalChaptersCount} NIMCET अध्याय, सूत्र, माइंड मैप और प्रश्नपत्र आपके डिवाइस में ऑफ़लाइन उपयोग के लिए सुरक्षित कर दिए गए हैं।`}
            </p>
            {isIOS && (
              <div className="mt-3 rounded-lg bg-slate-50 p-3 text-xs text-slate-700 border border-slate-200">
                <strong>iOS Safari Install:</strong> Tap the Share button in Safari toolbar and select{' '}
                <strong>Add to Home Screen</strong>.
              </div>
            )}
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Done' : 'ठीक है'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const OfflineConnectivityBanner: React.FC<{ lang: Language }> = ({ lang }) => {
  const isOnline = useOnlineStatus();
  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-lg bg-amber-600 px-3.5 py-2 text-xs font-semibold text-white shadow-md">
      <WifiOff className="w-4 h-4 shrink-0" />
      <span>
        {lang === 'en'
          ? 'Offline Mode Active — Studying from locally cached NIMCET pack'
          : 'ऑफ़लाइन मोड सक्रिय — कैश किए गए NIMCET स्टडी पैक का उपयोग हो रहा है'}
      </span>
    </div>
  );
};
