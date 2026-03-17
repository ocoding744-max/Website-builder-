import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layout, 
  Monitor, 
  Globe, 
  CreditCard, 
  Plus, 
  Settings, 
  LogOut, 
  Type, 
  Image as ImageIcon, 
  Square, 
  CheckCircle2,
  ArrowRight,
  MousePointer2,
  Trash2,
  X
} from 'lucide-react';

// --- Types ---
type ViewState = 'landing' | 'dashboard' | 'builder';
type ElementType = 'heading' | 'paragraph' | 'button' | 'image';

interface PageElement {
  id: string;
  type: ElementType;
  content: string;
  color?: string;
  align?: 'left' | 'center' | 'right';
}

// --- Main App Component ---
export default function App() {
  const [view, setView] = useState<ViewState>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setView('landing');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <AnimatePresence mode="wait">
        {view === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-screen flex flex-col"
          >
            <LandingPage onLogin={handleLogin} />
          </motion.div>
        )}
        
        {view === 'dashboard' && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-screen flex flex-col"
          >
            <Dashboard onViewChange={setView} onLogout={handleLogout} />
          </motion.div>
        )}

        {view === 'builder' && (
          <motion.div
            key="builder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen flex flex-col overflow-hidden"
          >
            <Builder onViewChange={setView} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Landing Page Component ---
function LandingPage({ onLogin }: { onLogin: () => void }) {
  return (
    <>
      <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-2xl tracking-tight">
          <Layout className="w-8 h-8" />
          WebForge
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
          <button onClick={onLogin} className="hover:text-indigo-600 transition-colors">Sign In</button>
          <button 
            onClick={onLogin}
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-full hover:bg-indigo-700 transition-all shadow-sm hover:shadow-md font-semibold"
          >
            Start Building
          </button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-8 py-24 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight"
          >
            Build your dream website. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
              No coding required.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto"
          >
            The easiest way to create, publish, and manage your online presence. Professional tools for creators and businesses.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={onLogin}
              className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
            >
              Start for free <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white text-slate-700 px-8 py-4 rounded-full text-lg font-semibold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all">
              View Templates
            </button>
          </motion.div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="px-8 py-24 bg-slate-100 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Simple, transparent pricing</h2>
              <p className="text-slate-600">Start for free, upgrade when you need custom domains and premium features.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Free Plan */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold mb-2">Starter</h3>
                <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-slate-500 font-normal">/mo</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> WebForge Subdomain</li>
                  <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Basic Templates</li>
                  <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Community Support</li>
                </ul>
                <button onClick={onLogin} className="w-full py-3 rounded-xl border-2 border-slate-200 font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-colors">
                  Get Started
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-indigo-900 text-white rounded-3xl p-8 shadow-xl relative transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-200">Professional</h3>
                <div className="text-4xl font-bold mb-6">$15<span className="text-lg text-indigo-300 font-normal">/mo</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-indigo-100"><CheckCircle2 className="w-5 h-5 text-indigo-400" /> Custom Domain</li>
                  <li className="flex items-center gap-3 text-indigo-100"><CheckCircle2 className="w-5 h-5 text-indigo-400" /> Premium Templates</li>
                  <li className="flex items-center gap-3 text-indigo-100"><CheckCircle2 className="w-5 h-5 text-indigo-400" /> Analytics Dashboard</li>
                  <li className="flex items-center gap-3 text-indigo-100"><CheckCircle2 className="w-5 h-5 text-indigo-400" /> Priority Support</li>
                </ul>
                <button onClick={onLogin} className="w-full py-3 rounded-xl bg-white text-indigo-900 font-bold hover:bg-indigo-50 transition-colors">
                  Upgrade to Pro
                </button>
              </div>

              {/* Business Plan */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold mb-2">Business</h3>
                <div className="text-4xl font-bold mb-6">$49<span className="text-lg text-slate-500 font-normal">/mo</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Everything in Pro</li>
                  <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> E-commerce Features</li>
                  <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Team Collaboration</li>
                </ul>
                <button onClick={onLogin} className="w-full py-3 rounded-xl border-2 border-slate-200 font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// --- Dashboard Component ---
function Dashboard({ onViewChange, onLogout }: { onViewChange: (v: ViewState) => void, onLogout: () => void }) {
  const [showBilling, setShowBilling] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Dashboard Header */}
      <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
          <Layout className="w-6 h-6" />
          WebForge
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowBilling(true)}
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 flex items-center gap-2"
          >
            <CreditCard className="w-4 h-4" /> Billing
          </button>
          <div className="w-px h-6 bg-slate-200"></div>
          <button onClick={onLogout} className="text-sm font-medium text-slate-600 hover:text-red-600 flex items-center gap-2">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">My Websites</h1>
            <p className="text-slate-500 mt-1">Manage and edit your projects</p>
          </div>
          <button 
            onClick={() => onViewChange('builder')}
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-sm"
          >
            <Plus className="w-5 h-5" /> Create New Site
          </button>
        </div>

        {/* Sites Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Mock Existing Site */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="h-40 bg-slate-100 border-b border-slate-200 flex items-center justify-center relative overflow-hidden">
              <Monitor className="w-12 h-12 text-slate-300" />
              <div className="absolute inset-0 bg-indigo-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <button 
                  onClick={() => onViewChange('builder')}
                  className="bg-white text-indigo-900 px-6 py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all"
                >
                  Edit Site
                </button>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg">Portfolio 2026</h3>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">Published</span>
              </div>
              <p className="text-sm text-slate-500 mb-4">my-portfolio.webforge.app</p>
              <div className="flex items-center gap-2">
                <button className="flex-1 py-2 text-sm font-medium border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                  <Settings className="w-4 h-4" /> Settings
                </button>
                <button className="p-2 text-slate-400 border border-slate-200 rounded-lg hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Billing Modal */}
      <AnimatePresence>
        {showBilling && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setShowBilling(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl relative z-10 overflow-hidden"
            >
              <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Billing & Plans</h2>
                <button onClick={() => setShowBilling(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>
              <div className="p-8 bg-slate-50">
                <div className="bg-white border border-indigo-200 rounded-2xl p-6 shadow-sm mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-indigo-600 tracking-wider uppercase mb-1">Current Plan</div>
                    <div className="text-2xl font-bold text-slate-900">Starter (Free)</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-500 mb-1">Next billing date</div>
                    <div className="font-medium text-slate-900">-</div>
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-4">Upgrade to Pro</h3>
                <div className="bg-indigo-900 text-white rounded-2xl p-6 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-2">$15<span className="text-base text-indigo-300 font-normal">/month</span></div>
                    <p className="text-indigo-200 text-sm">Unlock custom domains, premium templates, and remove WebForge branding.</p>
                  </div>
                  <button className="w-full md:w-auto whitespace-nowrap bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
                    Upgrade Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Builder Component ---
function Builder({ onViewChange }: { onViewChange: (v: ViewState) => void }) {
  const [elements, setElements] = useState<PageElement[]>([
    { id: '1', type: 'heading', content: 'Welcome to My New Website', align: 'center' },
    { id: '2', type: 'paragraph', content: 'This is a simple drag-and-drop style builder. Click elements on the left to add them to your page. Click elements on the page to edit them.', align: 'center' }
  ]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showPublishModal, setShowPublishModal] = useState(false);

  const addElement = (type: ElementType) => {
    const newElement: PageElement = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content: type === 'heading' ? 'New Heading' : 
               type === 'paragraph' ? 'New paragraph text goes here.' : 
               type === 'button' ? 'Click Me' : 'https://picsum.photos/seed/webforge/800/400',
      align: 'left'
    };
    setElements([...elements, newElement]);
    setSelectedId(newElement.id);
  };

  const updateSelectedElement = (updates: Partial<PageElement>) => {
    setElements(elements.map(el => el.id === selectedId ? { ...el, ...updates } : el));
  };

  const removeElement = (id: string) => {
    setElements(elements.filter(el => el.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const selectedElement = elements.find(el => el.id === selectedId);

  return (
    <div className="flex flex-col h-screen bg-slate-100">
      {/* Builder Top Bar */}
      <header className="h-14 bg-white border-b border-slate-200 px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onViewChange('dashboard')}
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            ← Dashboard
          </button>
          <div className="w-px h-4 bg-slate-200"></div>
          <span className="text-sm font-semibold text-slate-900">Portfolio 2026 <span className="text-slate-400 font-normal ml-2">Unsaved changes</span></span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-slate-100 transition-colors">
            Preview
          </button>
          <button 
            onClick={() => setShowPublishModal(true)}
            className="bg-indigo-600 text-white text-sm font-semibold px-4 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
          >
            <Globe className="w-4 h-4" /> Publish
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Elements */}
        <aside className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0">
          <div className="p-4 border-b border-slate-100">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Add Elements</h2>
          </div>
          <div className="p-4 grid grid-cols-2 gap-3">
            <button onClick={() => addElement('heading')} className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-slate-200 hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all group">
              <Type className="w-6 h-6 text-slate-400 group-hover:text-indigo-600" />
              <span className="text-xs font-medium">Heading</span>
            </button>
            <button onClick={() => addElement('paragraph')} className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-slate-200 hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all group">
              <Layout className="w-6 h-6 text-slate-400 group-hover:text-indigo-600" />
              <span className="text-xs font-medium">Text</span>
            </button>
            <button onClick={() => addElement('button')} className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-slate-200 hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all group">
              <Square className="w-6 h-6 text-slate-400 group-hover:text-indigo-600" />
              <span className="text-xs font-medium">Button</span>
            </button>
            <button onClick={() => addElement('image')} className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-slate-200 hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all group">
              <ImageIcon className="w-6 h-6 text-slate-400 group-hover:text-indigo-600" />
              <span className="text-xs font-medium">Image</span>
            </button>
          </div>
        </aside>

        {/* Center - Canvas */}
        <main className="flex-1 overflow-y-auto p-8 flex justify-center">
          <div className="w-full max-w-4xl bg-white min-h-[800px] shadow-sm ring-1 ring-slate-200 rounded-lg p-12">
            {elements.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-400">
                <MousePointer2 className="w-12 h-12 mb-4 opacity-50" />
                <p>Click elements in the sidebar to add them to your page.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {elements.map((el) => (
                  <div 
                    key={el.id}
                    onClick={() => setSelectedId(el.id)}
                    className={`relative group cursor-pointer rounded-lg border-2 border-transparent hover:border-indigo-200 transition-colors ${selectedId === el.id ? '!border-indigo-500' : ''}`}
                  >
                    {selectedId === el.id && (
                      <div className="absolute -top-3 -right-3 bg-indigo-500 text-white rounded-full p-1.5 shadow-sm z-10">
                        <button onClick={(e) => { e.stopPropagation(); removeElement(el.id); }} className="hover:text-red-200">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                    
                    <div className={`p-4 text-${el.align || 'left'}`}>
                      {el.type === 'heading' && <h1 className="text-4xl font-bold text-slate-900" style={{ color: el.color }}>{el.content}</h1>}
                      {el.type === 'paragraph' && <p className="text-lg text-slate-600 leading-relaxed" style={{ color: el.color }}>{el.content}</p>}
                      {el.type === 'button' && (
                        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium" style={{ backgroundColor: el.color || '#4f46e5' }}>
                          {el.content}
                        </button>
                      )}
                      {el.type === 'image' && (
                        <img src={el.content} alt="User added" className="max-w-full h-auto rounded-xl shadow-sm" referrerPolicy="no-referrer" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>

        {/* Right Sidebar - Properties */}
        <aside className="w-72 bg-white border-l border-slate-200 flex flex-col shrink-0">
          <div className="p-4 border-b border-slate-100">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Properties</h2>
          </div>
          <div className="p-4 overflow-y-auto">
            {selectedElement ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase">Content</label>
                  {selectedElement.type === 'paragraph' ? (
                    <textarea 
                      value={selectedElement.content}
                      onChange={(e) => updateSelectedElement({ content: e.target.value })}
                      className="w-full p-3 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-y min-h-[100px]"
                    />
                  ) : (
                    <input 
                      type="text"
                      value={selectedElement.content}
                      onChange={(e) => updateSelectedElement({ content: e.target.value })}
                      className="w-full p-3 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                    />
                  )}
                </div>

                {selectedElement.type !== 'image' && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase">Alignment</label>
                    <div className="flex bg-slate-100 p-1 rounded-lg">
                      {['left', 'center', 'right'].map((align) => (
                        <button
                          key={align}
                          onClick={() => updateSelectedElement({ align: align as any })}
                          className={`flex-1 py-1.5 text-xs font-medium rounded-md capitalize ${selectedElement.align === align ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                          {align}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {(selectedElement.type === 'heading' || selectedElement.type === 'paragraph' || selectedElement.type === 'button') && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase">Color</label>
                    <div className="flex gap-2 flex-wrap">
                      {['#0f172a', '#4f46e5', '#059669', '#dc2626', '#d97706'].map(color => (
                        <button
                          key={color}
                          onClick={() => updateSelectedElement({ color })}
                          className={`w-8 h-8 rounded-full border-2 ${selectedElement.color === color ? 'border-slate-900 scale-110' : 'border-transparent hover:scale-110'} transition-transform`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                      <button 
                        onClick={() => updateSelectedElement({ color: undefined })}
                        className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-xs text-slate-400 hover:bg-slate-50"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-slate-400 mt-10">
                <Settings className="w-8 h-8 mx-auto mb-3 opacity-50" />
                <p className="text-sm">Select an element on the canvas to edit its properties.</p>
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* Publish / Paid Feature Modal */}
      <AnimatePresence>
        {showPublishModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setShowPublishModal(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden text-center p-8"
            >
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Publish to Custom Domain</h2>
              <p className="text-slate-600 mb-8">
                Publishing to a custom domain is a premium feature. Upgrade to our Pro plan to launch your site to the world.
              </p>
              
              <div className="space-y-3">
                <button className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-sm">
                  Upgrade to Pro - $15/mo
                </button>
                <button 
                  onClick={() => setShowPublishModal(false)}
                  className="w-full bg-white text-slate-600 py-3.5 rounded-xl font-semibold border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
