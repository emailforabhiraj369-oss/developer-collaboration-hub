import DashboardLayout from './components/DashboardLayout';

export default function App() {
  return (
    <DashboardLayout>
      {/* Everything inside here represents the {children} prop */}
      <div className="space-y-6">
        
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Total Commits */}
          <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl shadow-lg">
            <p className="text-sm text-slate-400 font-medium">Total Code Commits</p>
            <p className="text-3xl font-bold text-white mt-2">92</p>
            <span className="text-xs text-emerald-400 font-medium block mt-2">▲ +12% this week</span>
          </div>

          {/* Card 2: Active PRs */}
          <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl shadow-lg">
            <p className="text-sm text-slate-400 font-medium">Active Pull Requests</p>
            <p className="text-3xl font-bold text-white mt-2">24</p>
            <span className="text-xs text-blue-400 font-medium block mt-2">Indexed Real-time</span>
          </div>

          {/* Card 3: Open System Issues */}
          <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl shadow-lg">
            <p className="text-sm text-slate-400 font-medium">Open System Issues</p>
            <p className="text-3xl font-bold text-white mt-2">8</p>
            <span className="text-xs text-rose-400 font-medium block mt-2">▼ 3 resolved today</span>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}