import {create} from 'zustand';
import type { DeveloperMetrics } from '../types/analytics';
import { mockDeveloperMetrics } from '../utils/mockData';


// Zustand Store Setup
interface AnalyticsState {
  metrics: DeveloperMetrics[];
  addDeveloper: (newDev: DeveloperMetrics) => void;
  updateMetrics: (id: string, commits: number, prs: number, issues: number) => void;
}

export const useAnalyticsStore = create<AnalyticsState>((set) => ({
  metrics: mockDeveloperMetrics,
  addDeveloper: (newDev) => 
    set((state) => ({ metrics: [...state.metrics, newDev] })),
  updateMetrics: (id, commits, prs, issues) =>
    set((state) => ({
      metrics: state.metrics.map((dev) =>
        dev.id === id 
          ? { ...dev, commits, pullRequests: prs, openIssues: issues, lastActive: 'Just now' }
          : dev
      ),
    })),
}));