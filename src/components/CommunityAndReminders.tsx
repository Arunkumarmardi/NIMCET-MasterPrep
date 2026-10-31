import React, { useState } from 'react';
import { Bell, MessageSquarePlus, ThumbsUp, CheckCircle2, Send, Building2 } from 'lucide-react';
import { DoubtPost, Language, StudyReminder, SubjectId } from '../types/nimcet';
import { PARTICIPATING_NITS } from '../data/questionsAndForum';

interface CommunityAndRemindersProps {
  lang: Language;
  doubtPosts: DoubtPost[];
  onAddDoubtPost: (post: Omit<DoubtPost, 'id' | 'createdAt' | 'upvotes' | 'solved' | 'replies'>) => void;
  onAddReply: (postId: string, author: string, content: string) => void;
  onUpvoteDoubt: (postId: string) => void;
  reminders: StudyReminder[];
  onToggleReminder: (id: string) => void;
  onAddReminder: (title: string, time: string, targetSubject: SubjectId | 'all') => void;
}

export const CommunityAndReminders: React.FC<CommunityAndRemindersProps> = ({
  lang,
  doubtPosts,
  onAddDoubtPost,
  onAddReply,
  onUpvoteDoubt,
  reminders,
  onToggleReminder,
  onAddReminder,
}) => {
  // Doubt Form State
  const [doubtTitle, setDoubtTitle] = useState('');
  const [doubtBody, setDoubtBody] = useState('');
  const [doubtAuthor, setDoubtAuthor] = useState('');
  const [doubtSubject, setDoubtSubject] = useState<SubjectId>('mathematics');
  const [doubtError, setDoubtError] = useState('');

  // Reply State
  const [replyTextByPost, setReplyTextByPost] = useState<Record<string, string>>({});
  const [filterSubject, setFilterSubject] = useState<SubjectId | 'all'>('all');

  // Reminder State
  const [remTitle, setRemTitle] = useState('');
  const [remTime, setRemTime] = useState('08:00');
  const [remSubject, setRemSubject] = useState<SubjectId | 'all'>('mathematics');
  const [remError, setRemError] = useState('');
  const [liveNotificationToast, setLiveNotificationToast] = useState<string | null>(null);

  const handleCreateDoubt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!doubtTitle.trim() || !doubtBody.trim()) {
      setDoubtError(
        lang === 'en'
          ? 'Please enter both a doubt question title and detailed description.'
          : 'कृपया अपने प्रश्न का शीर्षक और विवरण दोनों दर्ज करें।'
      );
      return;
    }
    setDoubtError('');
    onAddDoubtPost({
      subjectId: doubtSubject,
      chapterId: 'math-vectors',
      title: doubtTitle.trim(),
      body: doubtBody.trim(),
      author: doubtAuthor.trim() || 'NIMCET Aspirant',
      authorRankTarget: 'Target: Top NIT MCA',
      tags: [doubtSubject.toUpperCase(), 'Peer Doubt'],
    });
    setDoubtTitle('');
    setDoubtBody('');
  };

  const handleCreateReminder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!remTitle.trim()) {
      setRemError(
        lang === 'en'
          ? 'Please enter a daily study goal label for your reminder.'
          : 'कृपया अपने दैनिक अध्ययन लक्ष्य का नाम लिखें।'
      );
      return;
    }
    setRemError('');
    onAddReminder(remTitle.trim(), remTime, remSubject);
    setRemTitle('');
  };

  const triggerTestPushNotification = async () => {
    const msg =
      lang === 'en'
        ? '🔥 NIMCET Daily Streak Reminder: Complete 1 Tier-1 Math chapter + 10 PYQs today to stay on track for NIT Trichy!'
        : '🔥 NIMCET दैनिक स्ट्रीक रिमाइंडर: आज 1 टियर-1 गणित अध्याय और 10 PYQ पूरे करें!';
    setLiveNotificationToast(msg);

    if (typeof window !== 'undefined' && 'Notification' in window) {
      if (Notification.permission === 'granted') {
        new Notification('NIMCET MasterPrep Reminder', { body: msg });
      } else if (Notification.permission !== 'denied') {
        const perm = await Notification.requestPermission();
        if (perm === 'granted') {
          new Notification('NIMCET MasterPrep Reminder', { body: msg });
        }
      }
    }
  };

  const visiblePosts = doubtPosts.filter(
    (p) => filterSubject === 'all' || p.subjectId === filterSubject
  );

  return (
    <div className="space-y-10">
      {/* Live Push Notification Banner if triggered */}
      {liveNotificationToast && (
        <div
          role="status"
          className="rounded-xl bg-slate-900 text-white px-5 py-4 flex items-center justify-between gap-4 shadow-md"
        >
          <div className="flex items-center gap-3 text-sm font-medium">
            <Bell className="w-5 h-5 text-amber-400 shrink-0" />
            <span>{liveNotificationToast}</span>
          </div>
          <button
            type="button"
            onClick={() => setLiveNotificationToast(null)}
            className="text-xs font-semibold text-slate-300 hover:text-white cursor-pointer"
          >
            {lang === 'en' ? 'Dismiss' : 'बंद करें'}
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 7-col Peer-to-Peer Doubt Resolution Forum */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {lang === 'en'
                    ? 'Peer-to-Peer NIMCET Doubt Resolution Forum'
                    : 'पीयर-टू-पीयर NIMCET डाउट समाधान फोरम'}
                </h2>
                <p className="text-sm text-slate-600">
                  {lang === 'en'
                    ? 'Ask chapter-specific doubts, share 10-second shortcuts, and learn with NIT MCA peers.'
                    : 'अध्याय-वार शंकाएं पूछें, 10-सेकंड शॉर्टकट साझा करें और साथियों के साथ सीखें।'}
                </p>
              </div>
            </div>

            {/* Post a New Doubt Form */}
            <form
              onSubmit={handleCreateDoubt}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3"
            >
              <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <MessageSquarePlus className="w-4 h-4 text-sky-600" />
                <span>{lang === 'en' ? 'Post a New Doubt Question' : 'नया डाउट प्रश्न पूछें'}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="doubt-author-input" className="block text-xs font-medium text-slate-700 mb-1">
                    {lang === 'en' ? 'Your Name' : 'आपका नाम'}
                  </label>
                  <input
                    id="doubt-author-input"
                    type="text"
                    placeholder={lang === 'en' ? 'e.g. Aditya Kumar' : 'जैसे आदित्य कुमार'}
                    value={doubtAuthor}
                    onChange={(e) => setDoubtAuthor(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900"
                  />
                </div>
                <div>
                  <label htmlFor="doubt-subject-select" className="block text-xs font-medium text-slate-700 mb-1">
                    {lang === 'en' ? 'Subject' : 'विषय'}
                  </label>
                  <select
                    id="doubt-subject-select"
                    value={doubtSubject}
                    onChange={(e) => setDoubtSubject(e.target.value as SubjectId)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900"
                  >
                    <option value="mathematics">Mathematics (600M)</option>
                    <option value="reasoning">Logical Reasoning (240M)</option>
                    <option value="computer">Computer Awareness (120M)</option>
                    <option value="english">General English (40M)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="doubt-title-input" className="block text-xs font-medium text-slate-700 mb-1">
                  {lang === 'en' ? 'Doubt Question Title *' : 'प्रश्न का शीर्षक *'}
                </label>
                <input
                  id="doubt-title-input"
                  type="text"
                  placeholder={
                    lang === 'en'
                      ? 'e.g. Shortcut for finding Integrating Factor in Differential Equations?'
                      : 'जैसे: अवकल समीकरण में समाकलन गुणक (IF) निकालने का शॉर्टकट क्या है?'
                  }
                  value={doubtTitle}
                  onChange={(e) => setDoubtTitle(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900"
                />
              </div>

              <div>
                <label htmlFor="doubt-body-input" className="block text-xs font-medium text-slate-700 mb-1">
                  {lang === 'en' ? 'Question Details / Step Where You Are Stuck *' : 'प्रश्न का पूरा विवरण *'}
                </label>
                <textarea
                  id="doubt-body-input"
                  rows={2}
                  placeholder={
                    lang === 'en'
                      ? 'Describe the problem or equation clearly...'
                      : 'अपनी समस्या या समीकरण यहाँ स्पष्ट रूप से लिखें...'
                  }
                  value={doubtBody}
                  onChange={(e) => setDoubtBody(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900"
                />
              </div>

              {doubtError && <p className="text-xs font-semibold text-rose-600">{doubtError}</p>}

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 cursor-pointer"
                >
                  {lang === 'en' ? 'Publish Doubt to Community' : 'डाउट पोस्ट करें'}
                </button>
              </div>
            </form>

            {/* Filter Threads */}
            <div className="flex flex-wrap items-center gap-1.5">
              {(['all', 'mathematics', 'reasoning', 'computer', 'english'] as const).map((sub) => (
                <button
                  key={sub}
                  type="button"
                  onClick={() => setFilterSubject(sub)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize cursor-pointer ${
                    filterSubject === sub
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            {/* Thread List */}
            <div className="space-y-4">
              {visiblePosts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-xl border border-slate-200 bg-white p-5 space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs text-slate-500">
                        <span className="font-semibold text-slate-700">{post.author}</span>
                        <span> · </span>
                        <span>{post.authorRankTarget}</span>
                        <span> · </span>
                        <span>{post.createdAt}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mt-1">{post.title}</h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => onUpvoteDoubt(post.id)}
                      aria-label={`Upvote ${post.title}`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-mono font-bold text-slate-800 hover:bg-slate-100 cursor-pointer shrink-0 tabular-nums"
                    >
                      <ThumbsUp className="w-3.5 h-3.5 text-sky-600" />
                      <span>{post.upvotes}</span>
                    </button>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed">{post.body}</p>

                  {/* Replies */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {post.replies.map((rep) => (
                      <div
                        key={rep.id}
                        className="rounded-lg bg-slate-50 p-3 text-xs space-y-1 border border-slate-200/70"
                      >
                        <div className="flex items-center justify-between text-slate-500">
                          <span>
                            <strong className="text-slate-900">{rep.author}</strong> · {rep.role}
                          </span>
                          <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Verified Solution</span>
                          </span>
                        </div>
                        <p className="text-slate-800 leading-relaxed">{rep.content}</p>
                      </div>
                    ))}

                    {/* Add Reply Input */}
                    <div className="flex items-center gap-2 pt-2">
                      <input
                        type="text"
                        aria-label={`Write a reply to ${post.title}`}
                        placeholder={
                          lang === 'en'
                            ? 'Write a peer solution or formula hint...'
                            : 'अपना समाधान या सूत्र ट्रिक लिखें...'
                        }
                        value={replyTextByPost[post.id] || ''}
                        onChange={(e) =>
                          setReplyTextByPost((prev) => ({ ...prev, [post.id]: e.target.value }))
                        }
                        className="flex-1 rounded-lg border border-slate-300 px-3 py-1.5 text-xs text-slate-900"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const txt = (replyTextByPost[post.id] || '').trim();
                          if (!txt) return;
                          onAddReply(post.id, 'You (NIMCET Scholar)', txt);
                          setReplyTextByPost((prev) => ({ ...prev, [post.id]: '' }));
                        }}
                        className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-800 cursor-pointer"
                      >
                        <Send className="w-3 h-3" />
                        <span>{lang === 'en' ? 'Reply' : 'उत्तर दें'}</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Right 5-col Push Notification Scheduler & Official NIT Cutoff Table */}
        <div className="lg:col-span-5 space-y-6">
          {/* Push Notification System for Daily Goals & Streaks */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {lang === 'en'
                    ? 'Push Notification & Streak Reminder System'
                    : 'पुश नोटिफिकेशन और दैनिक स्ट्रीक रिमाइंडर'}
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  {lang === 'en'
                    ? 'Automated daily study goal alerts to maintain consistent learning habits.'
                    : 'नियमित अध्ययन आदत और स्ट्रीक बनाए रखने के लिए दैनिक अलर्ट।'}
                </p>
              </div>
              <button
                type="button"
                onClick={triggerTestPushNotification}
                className="inline-flex items-center gap-1.5 rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-sky-700 cursor-pointer shrink-0"
              >
                <Bell className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Test Push Alert' : 'टेस्ट अलर्ट भेजें'}</span>
              </button>
            </div>

            <div className="space-y-2.5">
              {reminders.map((rem) => (
                <div
                  key={rem.id}
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 p-3"
                >
                  <div>
                    <div className="text-xs font-bold text-slate-900">{rem.title}</div>
                    <div className="text-xs text-slate-500 font-mono mt-0.5 tabular-nums">
                      {rem.time} · {rem.days.join(', ')}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onToggleReminder(rem.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                      rem.enabled
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {rem.enabled
                      ? lang === 'en'
                        ? 'Active'
                        : 'सक्रिय'
                      : lang === 'en'
                      ? 'Paused'
                      : 'बंद'}
                  </button>
                </div>
              ))}
            </div>

            <form
              onSubmit={handleCreateReminder}
              className="pt-3 border-t border-slate-200 space-y-3"
            >
              <div className="text-xs font-bold text-slate-900">
                {lang === 'en' ? 'Add Custom Daily Goal Reminder' : 'नया दैनिक लक्ष्य रिमाइंडर जोड़ें'}
              </div>
              <div className="grid grid-cols-3 gap-2">
                <input
                  type="text"
                  aria-label="Daily reminder goal title"
                  placeholder={lang === 'en' ? 'Goal title...' : 'लक्ष्य का नाम...'}
                  value={remTitle}
                  onChange={(e) => setRemTitle(e.target.value)}
                  className="col-span-2 rounded-lg border border-slate-300 px-3 py-1.5 text-xs text-slate-900"
                />
                <input
                  type="time"
                  aria-label="Daily reminder time"
                  value={remTime}
                  onChange={(e) => setRemTime(e.target.value)}
                  className="rounded-lg border border-slate-300 px-2 py-1.5 text-xs font-mono text-slate-900"
                />
              </div>
              {remError && <p className="text-xs font-semibold text-rose-600">{remError}</p>}
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 cursor-pointer"
              >
                {lang === 'en' ? 'Schedule Daily Reminder' : 'रिमाइंडर सेट करें'}
              </button>
            </form>
          </div>

          {/* Official Participating NITs Seat & Safe Score Matrix */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
              <Building2 className="w-4 h-4" />
              <span>
                {lang === 'en'
                  ? 'Official NIMCET Participating NITs & Safe Target Scores'
                  : 'NIMCET में भाग लेने वाले NIT संस्थान और सुरक्षित लक्ष्य स्कोर'}
              </span>
            </div>

            <div className="space-y-3">
              {PARTICIPATING_NITS.map((nit) => (
                <div
                  key={nit.institute}
                  className="rounded-xl border border-slate-200 p-3.5 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span>{nit.institute}</span>
                    <span className="font-mono text-sky-700 tabular-nums">
                      {nit.safeScoreOutOf1000} / 1000
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-slate-500">
                    <span>{lang === 'en' ? nit.highlightEn : nit.highlightHi}</span>
                    <span className="font-mono tabular-nums shrink-0 ml-2">{nit.safeRankAIR}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
