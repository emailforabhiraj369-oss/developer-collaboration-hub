
import { memo } from 'react';
import DashboardLayout from './components/DashboardLayout';
import { useDeveloperAnalytics } from './hooks/useDeveloperAnalytics';
import type { DeveloperMetrics } from './types/analytics';

// Isolate and Memoize the Row Component to block unneccessary parent re-renders

const DeveloperRow = memo(({dev}:{dev:DeveloperMetrics }) => {
  
  return (
     <tr key={dev.id} className='hover:bg-slate-900/30 transition'>
                    <td className='py-4 px-6 flex items-center space-x-3'>
                      <img src={dev.avatarUrl} alt={dev.developerName} className='w-8 h-8 rounded-full bg-slate-800' />
                      <span className='text-white font-medium'>{dev.developerName}</span>
                    </td>

                    <td className='py-4 px-6'>
                      <span className='px-2.5 py-1 text-xs font medium rounded-md bg-slate-900 border border-slate-800 text-slaTE-300'>{dev.role}</span>
                    </td>
                    <td className='py-4 px-6 text-center font-mono font-semibold text-blue-400'>{dev.commits}</td>
                    <td className='py-4 px-6 text-center font-semibold text-indigo-400'>{dev.pullRequests}</td>
                    <td className='py-4 px-6 text-center font-semibold text-rose-400'>{dev.openIssues}</td>
                    <td className='py-4 px-6 text-right text-xs text-slate-400'>{dev.lastActive}</td>

                  </tr>
  )
})

DeveloperRow.displayName = 'DeveloperRow';

export default function App() {
  
  const {metrics, totalCommits, totalPRs, totalIssues}= useDeveloperAnalytics();
  return (
    <DashboardLayout>
      {/* Everything inside here represents the {children} prop */}
      <div className="space-y-6">


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Total Commits */}
          <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl shadow-lg">
            <p className="text-sm text-slate-400 font-medium">Total Code Commits</p>
            <p className="text-3xl font-bold text-white mt-2">{totalCommits}</p>
            <span className="text-xs text-emerald-400 font-medium block mt-2">▲ +12% this week</span>
          </div>

          {/* Card 2: Active PRs */}
          <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl shadow-lg">
            <p className="text-sm text-slate-400 font-medium">Active Pull Requests</p>
            <p className="text-3xl font-bold text-white mt-2">{totalPRs}</p>
            <span className="text-xs text-blue-400 font-medium block mt-2">Indexed Real-time</span>
          </div>

          {/* Card 3: Open System Issues */}
          <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl shadow-lg">
            <p className="text-sm text-slate-400 font-medium">Open System Issues</p>
            <p className="text-3xl font-bold text-white mt-2">{totalIssues}</p> 
            <span className="text-xs text-rose-400 font-medium block mt-2">▼ 3 resolved today</span>
          </div>

        </div>


        {/* Core Interactive Analytic Table  */}
        <div className='bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-lg'>
          <div className='p-6 border-b border-slate-800'>
            <h3 className='text-lg font-semibold text-white'>Team Activity Ledger</h3>
            <p className='text-sm text-slate-400 mt-1'>Real-time performance tracking of repository metrics</p>
          </div>

          <div className='overflow-x-auto'>
            <table className='w-full text-left border-collapse'>
              <thead >
                <tr className='bg-slate-900/50  border-b border-slate-800 text-xs font-semibold tracking-wider text-slate-400 uppercase'>
                  <th className='py-4 px-6'>Developer</th>
                  <th className='py-4 px-6'>Role</th>
                  <th className='py-4 px-6 text-center'>Commits</th>
                  <th className='py-4 px-6 text-center'>PRs</th>
                  <th className='py-4 px-6 text-center'>Open Issues</th>
                  <th className='py-4 px-6 text-right'>Last Active</th>

                </tr>
               </thead>
               <tbody>
                {/* Consume the meoized sub-component mapping */}
                {metrics.map((dev) => (
                  <DeveloperRow key={dev.id} dev={dev} />
                ))}
              </tbody>
            </table>

          </div>

        </div>
      </div>

    </DashboardLayout>
);
}


