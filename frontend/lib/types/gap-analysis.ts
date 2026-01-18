export type RAGScore = 'red' | 'amber' | 'green';

export interface VerticalAnalysis {
    vertical_name: string;
    score: number; // 0-100
    strengths: string[];
    gaps: string[];
    opportunities: string[];
}

export interface DimensionScore {
    dimension_name: string;
    score: number; // 0-100
    rag_status: RAGScore;
    description: string;
}

export interface GapAnalysis {
    id: string;
    company_id: string;
    analysis_date: string;
    vertical_analyses: VerticalAnalysis[];
    dimension_scores: DimensionScore[];
    overall_score: number;
    rag_distribution: {
        red: number;
        amber: number;
        green: number;
    };
    key_strengths: string[];
    critical_gaps: string[];
    top_opportunities: string[];
    recommendations: string[];
}
