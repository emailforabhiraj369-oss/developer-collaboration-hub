import { useMemo } from "react";
import { useAnalyticsStore } from "../store/useAnalyticsStore";


export function useDeveloperAnalytics() {
    const { metrics, addDeveloper, updateMetrics } = useAnalyticsStore()

    // Cache total commits calculation
    const totalCommits = useMemo(() => {
        return metrics.reduce((acc, curr) => acc + curr.commits, 0);
    }, [metrics])

    // Cache total PRs calculation
    const totalPRs = useMemo(() => {


        return metrics.reduce((acc, curr) => acc + curr.pullRequests, 0);
    }, [metrics])

    // Calculate open issues calculation
    const totalIssues = useMemo(() => {
        return metrics.reduce((acc, curr) => acc + curr.openIssues, 0);
    }, [metrics]);


    return {
        metrics,
        totalCommits,
        totalPRs,
        totalIssues,
        addDeveloper,
        updateMetrics,
    }
}