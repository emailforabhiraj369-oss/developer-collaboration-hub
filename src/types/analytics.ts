export interface ProjectMetric{
    id:string;
    developerName:string;
    avatarUrl:string;
    role:'Frontend' |'Backend'|'DevOps'|'Fullstack';
    commits:number;
    pullRequests:number;
    openIssues:number;
    lastActive:string;
}

export interface DashboardSummary{
    totalCommits:number;
    activePrs:number;
    resolvedIssues:number;
    velocityScore:number;
}