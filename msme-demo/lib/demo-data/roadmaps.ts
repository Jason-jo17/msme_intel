
export const DEMO_ROADMAPS = {
    'comp-001': {
        roi: 240,
        net_benefit_lakhs: 85,
        investment_lakhs: 25,
        payback_months: 9,
        milestones: [
            {
                id: 'm1-1',
                target_month: 1,
                title: 'Implement CRM and Marketing Automation',
                type: 'Technology',
                description: "Deploy HubSpot CRM, set up lead tracking, and automate email outreach to 100 target prospects",
                priority: 'critical',
                estimated_cost: 150000,
                dependencies: [],
                success_metrics: [
                    "CRM deployed and team trained",
                    "100 prospects added to pipeline",
                    "10 discovery calls booked"
                ]
            },
            {
                id: 'm1-2',
                target_month: 1,
                title: 'Fast-track Patent Applications',
                type: 'Legal',
                description: "Engage IP attorney, file expedited examination requests for 2 provisional patents, and initiate 1 new patent filing",
                priority: 'high',
                estimated_cost: 200000,
                dependencies: [],
                success_metrics: [
                    "Expedited examination requests filed",
                    "1 new provisional patent filed",
                    "IP strategy document created"
                ]
            },
            {
                id: 'm2-1',
                target_month: 2,
                title: 'PLI Application & Compliance',
                type: 'Operations',
                description: "Complete filing for Production Linked Incentive scheme and ensure all regulatory compliances.",
                priority: 'high',
                estimated_cost: 200000,
                dependencies: ['m1-1'],
                success_metrics: ["Application submitted", "Compliance audit passed"]
            },
            {
                id: 'm3-1',
                target_month: 3,
                title: 'Market Expansion Campaign',
                type: 'Marketing',
                description: "Launch targeted digital marketing campaigns in Tier-2 cities to expand footprint.",
                priority: 'medium',
                estimated_cost: 800000,
                dependencies: ['m1-1'],
                success_metrics: ["20% increase in leads", "50k impressions"]
            },
            {
                id: 'm4-1',
                target_month: 4,
                title: 'Series A Preparation',
                type: 'Finance',
                description: "Audit financials and prepare data room for Series A fundraising.",
                priority: 'high',
                estimated_cost: 300000,
                dependencies: [],
                success_metrics: ["Data room ready", "Financial audit complete"]
            },
            {
                id: 'm5-1',
                target_month: 5,
                title: 'Debt Syndication',
                type: 'Finance',
                description: "Syndicate debt for expansion capital requirements with partner banks.",
                priority: 'medium',
                estimated_cost: 100000,
                dependencies: ['m4-1'],
                success_metrics: ["Term sheet received", "Loan sanctioned"]
            },
            {
                id: 'm6-1',
                target_month: 6,
                title: 'New Product Launch',
                type: 'Product',
                description: "Commercial launch of the new IoT-enabled product line.",
                priority: 'critical',
                estimated_cost: 1200000,
                dependencies: ['m3-1'],
                success_metrics: ["Product launched", "First 50 customers"]
            },
        ]
    },
    'comp-002': {
        roi: 180,
        net_benefit_lakhs: 150,
        investment_lakhs: 60,
        payback_months: 14,
        milestones: [
            {
                id: 'm1', target_month: 1, title: 'EV Component Prototype Dev', type: 'R&D',
                description: "Design and fabricate initial prototype for EV motor controller.",
                priority: 'critical', estimated_cost: 1500000, dependencies: [],
                success_metrics: ["Prototype tested", "Design specs finalized"]
            },
            {
                id: 'm2', target_month: 3, title: 'OEM Pilot Partnerships', type: 'Sales',
                description: "Secure pilot testing agreements with 2 major 2-wheeler OEMs.",
                priority: 'high', estimated_cost: 200000, dependencies: ['m1'],
                success_metrics: ["2 MOUs signed", "Pilot schedule agreed"]
            },
            {
                id: 'm3', target_month: 4, title: 'Manufacturing Line Upgrade', type: 'Operations',
                description: "Retrofit Line C for EV component assembly.",
                priority: 'high', estimated_cost: 3500000, dependencies: ['m2']
            },
            {
                id: 'm4', target_month: 6, title: 'Export Certification', type: 'Compliance',
                description: "Obtain CE and UL certifications for European market export.",
                priority: 'medium', estimated_cost: 800000, dependencies: ['m3']
            },
        ]
    },
    'comp-011': {
        roi: 300,
        net_benefit_lakhs: 500,
        investment_lakhs: 100,
        payback_months: 11,
        milestones: [
            {
                id: 'm1', target_month: 1, title: 'Merchant Lending Pilot', type: 'Product',
                description: "Launch beta lending product for top 100 merchants.",
                priority: 'high', estimated_cost: 2000000, dependencies: [],
                success_metrics: ["Beta live", "100 merchants onboarded"]
            },
            {
                id: 'm2', target_month: 2, title: 'Referral Program Launch', type: 'Growth',
                description: "Incentivized referral program to lower CAC.",
                priority: 'medium', estimated_cost: 500000, dependencies: ['m1']
            },
            {
                id: 'm3', target_month: 4, title: 'Bank Partnership Integration', type: 'Tech',
                description: "API integration with partner bank for co-lending.",
                priority: 'critical', estimated_cost: 1500000, dependencies: []
            },
            {
                id: 'm4', target_month: 6, title: 'Regional Expansion (South)', type: 'Expansion',
                description: "Open sales offices in Chennai and Hyderabad.",
                priority: 'high', estimated_cost: 2500000, dependencies: ['m3']
            },
        ]
    }
};

export function getRoadmap(companyId: string) {
    const data = DEMO_ROADMAPS[companyId as keyof typeof DEMO_ROADMAPS];
    if (data) return data;

    // Generate rich mock data if not found
    return {
        roi: 150 + Math.floor(Math.random() * 100),
        net_benefit_lakhs: 50 + Math.floor(Math.random() * 100),
        investment_lakhs: 20 + Math.floor(Math.random() * 50),
        payback_months: 8 + Math.floor(Math.random() * 8),
        milestones: [
            {
                id: 'gen-1', target_month: 1, title: 'Strategic Planning & Setup', type: 'Strategy',
                description: "Initial strategic alignment and goal setting workshop.",
                priority: 'high', estimated_cost: 100000, dependencies: [],
                success_metrics: ["Goals defined", "Strategy document approved"]
            },
            {
                id: 'gen-2', target_month: 2, title: 'Operational Efficiency Upgrade', type: 'Operations',
                description: "Implement lean processes to reduce wastage by 15%.",
                priority: 'medium', estimated_cost: 300000, dependencies: ['gen-1'],
                success_metrics: ["Process audit complete", "New SOPs rolled out"]
            },
            {
                id: 'gen-3', target_month: 4, title: 'Go-To-Market Push', type: 'Marketing',
                description: "Aggressive sales drive in core markets.",
                priority: 'critical', estimated_cost: 500000, dependencies: ['gen-2'],
                success_metrics: ["Sales pipeline +30%", "10 new key accounts"]
            },
            {
                id: 'gen-4', target_month: 6, title: 'Quarterly Review & Optimization', type: 'Management',
                description: "Review KPIs and optimize strategy for next phase.",
                priority: 'low', estimated_cost: 50000, dependencies: [],
                success_metrics: ["Q2 Review complete"]
            },
        ]
    };
}

export const getDemoRoadmap = getRoadmap;
