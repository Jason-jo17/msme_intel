
import { Company } from './company';

export interface DetailedCompany extends Company {
    legal_name?: string;
    cin?: string;
    gstin?: string;
    pan?: string;
    company_status?: string;
    registration_date?: string;
    registered_office_address?: string;
    authorized_capital?: number;
    paid_up_capital?: number;
    net_worth?: number;
    corporate_office_address?: string;
    industry_classification?: string;
    linkedin_url?: string;
    company_type?: string;
    listing_status?: string;
    stock_codes?: Record<string, string>;
    promoter_holding_percentage?: number;
    market_cap?: number;
    overall_score?: number;
    latest_revenue?: number;
    latest_net_profit?: number;
    revenue_growth_yoy?: number;
    data_confidence?: string;
    last_research_date?: string;
    notes?: string;
    financials?: DetailedFinancials[];
    founders?: CompanyFounder[];
    leadership?: CompanyLeader[];
    board?: BoardComposition;
    talent?: TalentMetrics;
    brand?: BrandMetrics;
    products?: CompanyProduct[];
    innovation?: InnovationMetrics;
    clients?: CompanyClient[];
    client_demographics?: ClientDemographics;
    gap_analysis?: GapAnalysis;
}

export interface DetailedFinancials {
    fiscal_year: string;
    revenue: number;
    revenue_from_operations?: number;
    net_profit: number;
    net_margin_percentage?: number;
    ebitda?: number;
    ebitda_margin_percentage?: number;
    shareholders_equity?: number;
    long_term_debt?: number;
    short_term_debt?: number;
    debt_to_equity_ratio?: number;
    revenue_growth_yoy?: number;
    segment_breakdown?: Record<string, number>;
    data_source?: string;
    confidence?: string;
}

export interface CompanyFounder {
    name: string;
    age?: number;
    current_role?: string;
    years_in_sector?: number;
    tenure_years?: number;
    education?: string;
    background?: string;
    equity_stake?: number;
    is_promoter?: boolean;
    linkedin_url?: string;
    notable_achievements?: string[];
}

export interface CompanyLeader {
    name: string;
    role: string;
    tenure_years?: number;
    total_experience_years?: number;
    education?: string;
    background?: string;
    is_executive_director?: boolean;
    is_independent_director?: boolean;
}

export interface BoardComposition {
    total_board_members: number;
    executive_directors: number;
    independent_directors: number;
    succession_plan_exists?: boolean;
    succession_plan_details?: string;
    governance_score?: number;
}

export interface TalentMetrics {
    total_employees: number;
    permanent_employees?: number;
    employee_growth_yoy?: number;
    glassdoor_rating?: number;
    glassdoor_review_count?: number;
    glassdoor_ceo_approval?: number;
    glassdoor_recommend_to_friend?: number;
    glassdoor_top_pros?: string[];
    glassdoor_top_cons?: string[];
    critical_skills_missing?: string[];
    high_turnover_roles?: string[];
}

export interface BrandMetrics {
    brand_awareness_level?: string;
    primary_markets?: string[];
    certifications?: any[]; // JSONB content
    awards?: any[]; // JSONB content
    marketing_sophistication?: string;
    tagline?: string;
    differentiation_claim?: string;
}

export interface CompanyProduct {
    product_name: string;
    category: string;
    description: string;
    target_application?: string;
    certifications?: string[];
    oem_approvals?: string[];
}

export interface InnovationMetrics {
    fiscal_year?: string;
    rd_investment_percentage?: number;
    rd_team_size?: number;
    patents_filed?: number;
    patents_granted?: number;
    new_products_launched?: any[];
    technology_partners?: string[];
    industry_4_adoption?: string;
}

export interface CompanyClient {
    client_name: string;
    client_sector?: string;
    client_type?: string;
    revenue_contribution_percentage?: number;
    is_top_3_client?: boolean;
    products_services?: string[];
    has_long_term_contract?: boolean;
    relationship_duration_years?: number;
}

export interface ClientDemographics {
    top_3_clients_percentage?: number;
    concentration_risk?: string;
    defense_govt_percentage?: number;
    civil_aviation_percentage?: number;
    domestic_india_percentage?: number;
    export_percentage?: number;
    oem_percentage?: number;
}

export interface GapAnalysis {
    overall_gap_score: number;
    investment_readiness: string;

    market_saturation_score?: number;
    market_saturation_diagnosis?: string;
    market_saturation_assessment?: string;
    market_saturation_evidence?: string;

    founder_quality_score?: number;
    founder_quality_assessment?: string;
    founder_quality_red_flags?: string[];
    founder_quality_green_flags?: string[];

    business_maturity_score?: number;
    business_maturity_assessment?: string;

    market_opportunity_score?: number;
    market_opportunity_assessment?: string;
    tam?: number;
    sam?: number;
    som?: number;
    current_penetration_percentage?: number;

    leadership_quality_score?: number;
    leadership_quality_assessment?: string;
    leadership_gaps?: string[];

    innovation_differentiator_score?: number;
    innovation_assessment?: string;
    innovation_gaps?: string[];

    talent_pool_score?: number;
    talent_assessment?: string;
    talent_gaps?: string[];

    brand_identity_score?: number;
    brand_assessment?: string;
    brand_gaps?: string[];

    critical_gaps?: string[];
    moderate_gaps?: string[];
    key_strengths?: string[];

    immediate_actions?: string[];
    short_term_recommendations?: string[];
    medium_term_recommendations?: string[];

    time_to_opportunity_months?: number;
    probability_of_success_percentage?: number;
}
