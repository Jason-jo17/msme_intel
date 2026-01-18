export type CompanyStage = 'seed' | 'early' | 'growth' | 'mature';
export type CompanySector = 'advanced_manufacturing' | 'fintech' | 'agritech' | 'edtech' | 'aerospace';

export interface Company {
    id: string;
    name: string;
    sector: CompanySector;
    sub_sector: string;
    stage: CompanyStage;
    founded_year: number;
    headquarters_city: string;
    headquarters_state: string;
    website?: string;
    employee_count?: number;
    revenue_current?: number;
    revenue_growth_rate?: number;
    current_stage?: number;
    rag_status?: 'red' | 'amber' | 'green';
    created_at: string;
    updated_at: string;
}

export interface CompanyFinancials {
    id: string;
    company_id: string;
    fiscal_year: string;
    revenue: number;
    gross_profit?: number;
    net_profit?: number;
    total_assets?: number;
    total_liabilities?: number;
    growth_rate?: number;
}

export interface FundingRound {
    id: string;
    company_id: string;
    round_type: string;
    amount_raised: number;
    valuation?: number;
    announced_date: string;
    lead_investors?: string[];
}

export interface CompanyMCA {
    company_id: string;
    cin: string;
    roc: string;
    registration_date: string;
    category: string;
    sub_category: string;
    class: string;
    authorized_capital: number;
    paid_up_capital: number;
    last_agm_date?: string;
    balance_sheet_date?: string;
    directors?: string[];
}
