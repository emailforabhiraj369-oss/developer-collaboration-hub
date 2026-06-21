import type { ProjectMetric } from "../types/analytics";

export const mockDeveloperMetrics: ProjectMetric[] =[{
   id:"1",
    developerName:'Sarah Connor',
    avatarUrl:"https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    role:'Frontend' ,
    commits:42,
    pullRequests:8,
    openIssues:8,
    lastActive:'2 mins ago',
},

{
    id: "2",
    developerName: "Alex Mercer",
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    role: "Backend",
    commits: 31,
    pullRequests: 4,
    openIssues: 5,
    lastActive: "15 mins ago",
},
{
    id:"",
    developerName: "Elena Rostova",
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
    role: "DevOps",
    commits: 31,
    pullRequests: 4,
    openIssues: 5,
    lastActive: "15 mins ago",
}
]