import { useAnalyticsStore } from "../store/useAnalyticsStore";


export function useDeveloperAnalytics( ) {
    const {metrics, addDeveloper, updateMetrics} = useAnalyticsStore()


const totalCommits = metrics.reduce((acc,curr)=>acc + curr.commits,0);
const totalPRs = metrics.reduce((acc,curr)=>acc + curr.pullRequests,0);
const totalIssues=metrics.reduce((acc,curr)=>acc + curr.openIssues,0);


return{
    metrics,
    totalCommits,
    totalPRs,
    totalIssues,
    addDeveloper,
    updateMetrics,
}
}