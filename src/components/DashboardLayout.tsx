import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    // Outer Shell Background
    <div className="flex min-h-screen bg-slate-900 text-slate-100 font-sans">
      
      {/* Left Sidebar Panel */}
      <aside className="w-64 bg-slate-950 border-r border-slate-800 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            CollabHub
          </h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <div className="px-4 py-2 bg-blue-600/10 text-blue-400 rounded-lg font-medium cursor-pointer">
            📊 Dashboard
          </div>
          <div className="px-4 py-2 text-slate-400 hover:bg-slate-900 hover:text-slate-200 rounded-lg transition cursor-pointer">
            👥 Team Members
          </div>
        </nav>
        <div className="p-4 border-t border-slate-800 text-xs text-slate-500">
          Workspace v4.0.0
        </div>
      </aside>

      {/*  Right Side Viewport Area */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-8">
          <div className="text-sm text-slate-400 font-medium">Analytics Overview</div>
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">Live Engine</span>
          </div>
        </header>

        {/* Dynamic Frame portal */}
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>

    </div>
  );
}