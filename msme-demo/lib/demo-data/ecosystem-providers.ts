
export const ECOSYSTEM_PROVIDERS = [
    {
        id: 'prov-001',
        name: 'TechFin Partners',
        type: 'Financial Services',
        description: 'Specializes in working capital loans for manufacturing SMEs',
        rating: 4.8,
        match_score: 95,
    },
    {
        id: 'prov-002',
        name: 'Global IP Attorneys',
        type: 'Legal & IP',
        description: 'Full-service IP firm for patent filings and strategy',
        rating: 4.9,
        match_score: 92,
    },
    {
        id: 'prov-003',
        name: 'ScaleUp Consultants',
        type: 'Strategy Consulting',
        description: 'Helpers SMEs build scalable operations and processes',
        rating: 4.7,
        match_score: 88,
    },
    {
        id: 'prov-004',
        name: 'Digital Growth Agency',
        type: 'Marketing',
        description: 'Digital marketing services for B2B industrial companies',
        rating: 4.6,
        match_score: 85,
    },
    {
        id: 'prov-005',
        name: 'HR Solutions Pro',
        type: 'HR & Talent',
        description: 'Recruitment and HR policy framework for growing teams',
        rating: 4.5,
        match_score: 82,
    }
];

export function getEcosystemProviders() {
    return ECOSYSTEM_PROVIDERS;
}
