export type RoadmapFramework = 'exo' | 'lean_startup' | 'okr' | 'blue_ocean';

export interface RoadmapMilestone {
    id: string;
    title: string;
    description: string;
    target_month: number; // 1-6
    priority: 'critical' | 'high' | 'medium' | 'low';
    estimated_cost?: number;
    dependencies?: string[];
    success_metrics: string[];
}

export interface Roadmap {
    id: string;
    company_id: string;
    framework: RoadmapFramework;
    created_date: string;
    duration_months: number;
    strategic_objectives: string[];
    milestones: RoadmapMilestone[];
    resource_requirements: {
        financial: string;
        human: string;
        technological: string;
    };
    risks: string[];
    expected_outcomes: string[];
}
