
import { DetailedCompany } from '@/lib/types/detailed-company';

export const NEW_COMPANIES: DetailedCompany[] = [
    // COMPANY 1: AEQUS AEROSPACE
    {
        id: 'aeq-001',
        name: 'Aequs Limited',
        legal_name: 'Aequs Limitied (formerly Aequs Private Limited)',
        cin: 'U35100KA2006PTC039290',
        gstin: '29AAICA6657B1Z6',
        pan: 'AAICA6657B',
        company_status: 'Active',
        authorized_capital: 500.0,
        paid_up_capital: 350.5,
        net_worth: 850.0,
        founded_year: 2006,
        registration_date: '2006-03-27',
        headquarters_city: 'Bengaluru',
        headquarters_state: 'Karnataka',
        registered_office_address: 'Aequs Tower, No. 55, Whitefield Main Road, Mahadevapura Post, Bengaluru – 560048, Karnataka',
        sector: 'aerospace',
        sub_sector: 'Precision Components & Assemblies',
        industry_classification: 'Aerospace Manufacturing',
        website: 'https://www.aequs.com',
        linkedin_url: 'https://www.linkedin.com/company/aequs',
        employee_count: 4000,
        company_type: 'Public Limited Company',
        listing_status: 'Listed',
        stock_codes: { "BSE": "543943", "NSE": "AEQUS" },
        promoter_holding_percentage: 45.2,
        market_cap: 7700.00,
        stage: 'growth',
        current_stage: 6,
        rag_status: 'amber',
        overall_score: 78,
        latest_revenue: 959.21,
        latest_net_profit: -102.35,
        revenue_growth_yoy: -2.94,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        data_confidence: 'HIGH',

        financials: [
            {
                fiscal_year: 'FY2024-25',
                revenue: 959.21,
                revenue_from_operations: 924.61,
                net_profit: -102.35,
                net_margin_percentage: -10.67,
                long_term_debt: 630.86,
                revenue_growth_yoy: -2.94,
                segment_breakdown: { "aerospace": 88.23, "consumer": 11.77 },
                data_source: 'IPO Prospectus, Annual Report',
                confidence: 'HIGH'
            },
            {
                fiscal_year: 'FY2023-24',
                revenue: 988.30,
                revenue_from_operations: 965.07,
                net_profit: -14.24,
                data_source: 'Annual Report',
                confidence: 'HIGH'
            }
        ],

        founders: [
            {
                name: 'Aravind Shivaputrappa Melligeri',
                age: 52,
                current_role: 'Executive Chairman & CEO',
                years_in_sector: 28,
                tenure_years: 24,
                education: 'BE (Mechanical) NIT Karnataka, MS (Robotics) Penn State University',
                background: '25+ years aerospace experience. Co-founded QuEST Global (1997). Founded Aequs in 2000.',
                equity_stake: 45.2,
                is_promoter: true,
                notable_achievements: ['Outstanding Engineering Alumnus Penn State 2023', 'Co-founder QuEST Global']
            }
        ],

        leadership: [
            { name: 'Rajeev Kaul', role: 'Managing Director', tenure_years: 18, total_experience_years: 22, education: 'BA Mathematics Delhi University, CA ICAI' },
            { name: 'Dinesh V. Iyer', role: 'Chief Financial Officer', tenure_years: 3, total_experience_years: 20 },
            { name: 'Ravi Guttal', role: 'CTO & Sr. VP Engineering', tenure_years: 10, total_experience_years: 25 },
            { name: 'Mohamed Bouzidi', role: 'President – Aerospace', tenure_years: 8, total_experience_years: 30 }
        ],

        board: {
            total_board_members: 8,
            executive_directors: 2,
            independent_directors: 3,
            succession_plan_exists: false,
            succession_plan_details: 'No documented succession plan. Founder age 52 with no named successor.',
            governance_score: 72
        },

        talent: {
            total_employees: 4000,
            permanent_employees: 3500,
            employee_growth_yoy: 25.0,
            glassdoor_rating: 3.5,
            glassdoor_review_count: 185,
            glassdoor_top_pros: ['Supportive top management', 'Visionary leadership'],
            glassdoor_top_cons: ['Below-market salaries', '6-day work week'],
            critical_skills_missing: ['CTO role vacant', 'Digital marketing team'],
            high_turnover_roles: ['Engineering roles', 'Senior management']
        },

        brand: {
            brand_awareness_level: 'National',
            primary_markets: ['India', 'USA', 'Europe', 'Asia'],
            certifications: [
                { "name": "AS9100", "version": "Rev D", "certified": true },
                { "name": "NADCAP", "scope": "Chemical Processing", "certified": true },
                { "name": "Boeing Approved" },
                { "name": "Airbus Approved" }
            ],
            awards: [
                { "award": "Airbus Accredited SQIP Award", "year": 2024 },
                { "award": "CII 75 Most Innovative Companies", "year": 2023 }
            ],
            tagline: 'Ecosystems of Efficiency',
            differentiation_claim: 'Only precision component manufacturer in India with full vertical integration in single SEZ'
        },

        products: [
            { product_name: 'Engine Case Machining', category: 'Components', description: 'Precision-machined engine components', target_application: 'Airbus A320, A350', certifications: ['AS9100D'] },
            { product_name: 'Landing Gear Components', category: 'Components', description: 'Landing system components', target_application: 'Multiple aircraft programs' },
            { product_name: 'Over Wing Exit Door Assemblies', category: 'Assemblies', description: 'Complete door assemblies for A321neo', target_application: 'Airbus A321neo' }
        ],

        innovation: {
            fiscal_year: 'FY2024',
            rd_investment_percentage: 3.2,
            rd_team_size: 120,
            patents_filed: 7,
            patents_granted: 5,
            technology_partners: ['Aubert & Duval', 'Magellan Aerospace', 'Saab AB'],
            industry_4_adoption: 'Advanced'
        },

        clients: [
            { client_name: 'Airbus', client_sector: 'Civil Aviation', client_type: 'OEM', revenue_contribution_percentage: 35.0, is_top_3_client: true, has_long_term_contract: true },
            { client_name: 'Boeing', client_sector: 'Civil Aviation', client_type: 'OEM', revenue_contribution_percentage: 20.0, is_top_3_client: true, has_long_term_contract: true },
            { client_name: 'Safran', client_sector: 'Aerospace', client_type: 'OEM', revenue_contribution_percentage: 15.0, is_top_3_client: true }
        ],

        client_demographics: {
            top_3_clients_percentage: 70.0,
            concentration_risk: 'HIGH',
            civil_aviation_percentage: 88.0,
            export_percentage: 78.0
        },

        gap_analysis: {
            overall_gap_score: 75,
            investment_readiness: 'Caution',

            market_saturation_score: 78,
            market_saturation_diagnosis: 'Low Penetration',
            market_saturation_assessment: 'Aequs has captured only ~1.9% of its ₹50,000 Cr TAM with current ₹959 Cr revenue. Aerospace segment growing 50% YoY indicates strong growth runway.',
            market_saturation_evidence: 'Revenue ₹959 Cr vs TAM ₹50,000 Cr = 1.92% penetration. Target $1B (₹8,300 Cr) in 5 years.',

            founder_quality_score: 72,
            founder_quality_assessment: 'Strong technical founder with 28 years sector experience but at age 52 with no documented succession plan, key person risk is emerging.',
            founder_quality_red_flags: [
                'No documented succession plan',
                'Founder age 52 with 24-year tenure',
                'Over-reliance on founder vision',
                'No named successor for CEO role'
            ],
            founder_quality_green_flags: [
                '28 years aerospace sector experience',
                '45% equity stake shows commitment',
                'Successful track record (QuEST Global co-founder)',
                'Attracted top-tier investors'
            ],

            business_maturity_score: 82,
            business_maturity_assessment: 'Operational since 2000 with established systems. Tier-1 status with Airbus/Boeing. AS9100 Rev D, NADCAP certifications. Consistent losses indicate business model refinement needed.',

            market_opportunity_score: 88,
            market_opportunity_assessment: 'Massive addressable market driven by India aviation boom, PLI scheme, and China+1 shift.',
            tam: 50000.00,
            sam: 8000.00,
            som: 2000.00,
            current_penetration_percentage: 1.92,

            leadership_quality_score: 68,
            leadership_quality_assessment: 'Experienced leadership team but succession planning gaps and CTO role vacant.',
            leadership_gaps: ['No succession plan', 'CTO role vacant', 'Weak second-line leadership'],

            innovation_differentiator_score: 76,
            innovation_assessment: 'Industry-leading infrastructure (10,000-ton press) but R&D at 3.2% vs industry 5% is low.',
            innovation_gaps: ['R&D investment at 3.2%', 'Only 7 patents filed', 'Limited IP portfolio'],

            talent_pool_score: 78,
            talent_assessment: 'Large workforce with specialized talent. High attrition (18%) and below-market comp are risks.',
            talent_gaps: ['High engineering attrition', 'Below-market salaries', 'Work-life balance concerns'],

            brand_identity_score: 70,
            brand_assessment: 'Strong industry recognition (Airbus Awards) but weak consumer/digital presence.',
            brand_gaps: ['Limited brand awareness outside aerospace', 'Weak digital marketing'],

            critical_gaps: [
                'No succession plan for 52-year-old founder',
                'Three consecutive years of net losses',
                'High debt load (₹631 Cr)',
                'Revenue concentration: 88% aerospace, 70% top 3 clients',
                'CTO position vacant'
            ],
            moderate_gaps: [
                'Consumer segment dragging profitability',
                'R&D investment below industry average',
                'Weak digital marketing'
            ],
            key_strengths: [
                'Tier-1 supplier to Airbus (10-year contract)',
                'Only integrated aerospace ecosystem in India',
                'India\'s largest 10,000-ton forging press',
                'AS9100, NADCAP certifications'
            ],

            immediate_actions: [
                'Document formal succession plan',
                'Hire CTO immediately',
                'Separate consumer segment P&L',
                'Apply for PLI scheme funding'
            ],
            short_term_recommendations: [
                'Achieve profitability over growth',
                'Launch talent retention program',
                'Diversify client base'
            ],
            medium_term_recommendations: [
                'Scale to $500M aerospace revenue',
                'Establish US manufacturing presence',
                'Develop proprietary IP'
            ],

            time_to_opportunity_months: 18,
            probability_of_success_percentage: 72.5
        }
    },

    // COMPANY 2: DYNAMATIC TECHNOLOGIES
    {
        id: 'dyn-001',
        name: 'Dynamatic Technologies Limited',
        legal_name: 'Dynamatic Technologies Limited',
        cin: 'L72200KA1973PLC002308',
        founded_year: 1973,
        headquarters_city: 'Bengaluru',
        headquarters_state: 'Karnataka',
        registered_office_address: 'JKM Plaza, Dynamatic Aerotropolis, 55 KIADB Aerospace Park, Bangalore 562149',
        sector: 'aerospace',
        sub_sector: 'Hydraulics & Aerospace Components',
        website: 'https://www.dynamatics.com',
        linkedin_url: 'https://www.linkedin.com/company/dynamatic-technologies',
        employee_count: 840,
        company_type: 'Public Limited Company',
        listing_status: 'Listed',
        stock_codes: { "NSE": "DYNAMATECH", "BSE": "505242" },
        promoter_holding_percentage: 41.87,
        market_cap: 6500.00,
        stage: 'mature',
        current_stage: 6,
        rag_status: 'green',
        overall_score: 85,
        latest_revenue: 1472.00,
        latest_net_profit: 121.80,
        revenue_growth_yoy: 11.1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        data_confidence: 'HIGH',

        financials: [
            {
                fiscal_year: 'FY2024',
                revenue: 1472.00,
                net_profit: 121.80,
                net_margin_percentage: 8.27,
                ebitda_margin_percentage: 15.7,
                long_term_debt: 200.00,
                debt_to_equity_ratio: 0.30,
                revenue_growth_yoy: 11.1,
                segment_breakdown: { "aerospace_defense": 52, "hydraulics": 33, "metallurgy": 15 },
                confidence: 'HIGH'
            },
            {
                fiscal_year: 'FY2023',
                revenue: 1326.00,
                net_profit: 42.80,
                net_margin_percentage: 3.23,
                long_term_debt: 233.00,
                confidence: 'HIGH'
            }
        ],

        founders: [
            {
                name: 'J.K. Malhoutra',
                age: 78,
                current_role: 'Founder',
                years_in_sector: 51,
                background: 'Founded Dynamatic Hydraulics Limited in 1973. Visionary industrialist.',
            }
        ],

        leadership: [
            { name: 'Dr. Udayant Malhoutra', role: 'CEO & Managing Director', tenure_years: 30, is_executive_director: true, background: 'Chairman National Institute of Design' },
            { name: 'Pierre de Bausset', role: 'Independent Director & Chairman', tenure_years: 5, is_independent_director: true, background: 'Former President & MD Airbus India' },
            { name: 'Chalapathi P', role: 'Executive Director & CFO', tenure_years: 17, is_executive_director: true },
            { name: 'Air Chief Marshal V.R. Chaudhari (Retd.)', role: 'Independent Director', tenure_years: 1, is_independent_director: true }
        ],

        board: {
            total_board_members: 7,
            executive_directors: 2,
            independent_directors: 4,
            succession_plan_exists: true,
            succession_plan_details: 'Dr. Udayant Malhoutra (son of founder) groomed over 30 years.',
            governance_score: 88
        },

        talent: {
            total_employees: 840,
            employee_growth_yoy: 7.0,
            glassdoor_rating: 3.6,
            glassdoor_review_count: 75,
            glassdoor_top_pros: ['Good infrastructure', 'Hands-on learning', 'Prestigious projects'],
            glassdoor_top_cons: ['Salary competitiveness', 'Work-life balance']
        },

        brand: {
            brand_awareness_level: 'International',
            primary_markets: ['India', 'USA', 'Europe', 'Middle East'],
            certifications: [
                { "name": "AS9100", "note": "Zero NC certification" },
                { "name": "NADCAP", "scope": "Heat Treatment, FPI, Welding" },
                { "name": "ISO 9001:2015", "certified": true }
            ],
            awards: [
                { "award": "Uttama Suraksha Puraskara", "year": 2025 },
                { "award": "Quality Leadership Award", "year": 2023 },
                { "award": "Airbus Strategic Partner", "year": 2022 }
            ]
        },

        products: [
            { product_name: 'Flap Track Beam Assemblies', category: 'Assemblies', description: 'Global sole source for Airbus A320/A330', target_application: 'A320, A330' },
            { product_name: 'A220 Aircraft Doors', category: 'Assemblies', description: 'Cargo, passenger, service doors', target_application: 'Airbus A220' },
            { product_name: 'P-8 Poseidon Mission Cabinets', category: 'Assemblies', description: 'Global sole source for power & mission cabinets', target_application: 'Boeing P-8 Poseidon' }
        ],

        innovation: {
            fiscal_year: 'FY2024',
            rd_team_size: 80,
            technology_partners: ['Airbus', 'Boeing', 'Dassault'],
            industry_4_adoption: 'Advanced'
        },

        clients: [
            { client_name: 'Airbus', client_sector: 'Civil Aviation', relationship_duration_years: 20, revenue_contribution_percentage: 30.0, is_top_3_client: true, has_long_term_contract: true },
            { client_name: 'Boeing', client_sector: 'Defense & Civil', relationship_duration_years: 15, revenue_contribution_percentage: 20.0, is_top_3_client: true },
            { client_name: 'HAL', client_sector: 'Defense', relationship_duration_years: 30, revenue_contribution_percentage: 15.0, is_top_3_client: true }
        ],

        client_demographics: {
            top_3_clients_percentage: 65.0,
            concentration_risk: 'MEDIUM',
            civil_aviation_percentage: 50.0,
            defense_govt_percentage: 35.0,
            oem_percentage: 75.0
        },

        gap_analysis: {
            overall_gap_score: 85,
            investment_readiness: 'Ready',

            market_saturation_score: 72,
            market_saturation_diagnosis: 'Growing',
            market_saturation_assessment: 'Moderate penetration with steady growth. Revenue ₹1,472 Cr with 11% YoY growth. Hydraulics segment is market leader.',

            founder_quality_score: 88,
            founder_quality_assessment: 'Excellent succession planning with 2nd generation leader groomed over 30 years.',
            founder_quality_green_flags: [
                '30-year succession planning',
                '2nd generation successfully leading',
                'Clear governance structure',
                'Strong board with ex-Airbus President'
            ],

            business_maturity_score: 92,
            business_maturity_assessment: 'Highly mature 51-year-old company with established global presence. Zero NC AS9100 certification.',

            market_opportunity_score: 90,
            market_opportunity_assessment: 'Excellent market opportunity in defense modernization and civil aviation. Sole source for Airbus flap beams.',
            tam: 60000.00,
            sam: 12000.00,
            som: 3000.00,

            leadership_quality_score: 90,
            leadership_quality_assessment: 'World-class leadership with ex-Chief of Air Staff on board.',

            innovation_differentiator_score: 85,
            innovation_assessment: 'Strong innovation with 3 global R&D centers and Industry 4.0 adoption.',

            talent_pool_score: 76,
            talent_assessment: 'Good infrastructure but concerns about compensation competitiveness.',

            brand_identity_score: 88,
            brand_assessment: 'International brand recognition. Global sole source for multiple programs.',

            critical_gaps: [
                'Metallurgy segment under pressure',
                'High valuation (P/E 68x)',
                'Profit volatility'
            ],
            key_strengths: [
                'Global sole source Airbus flap beams',
                'World leader hydraulics (80% India)',
                'Exclusive AMCA partner',
                'Only Indian company making aircraft doors',
                'Strong dividend policy'
            ],
            immediate_actions: [
                'Industrialize A220 doors ahead of schedule',
                'Scale AMCA program',
                'Turnaround metallurgy segment'
            ],

            time_to_opportunity_months: 12,
            probability_of_success_percentage: 85.0
        }
    },

    // COMPANY 3: TAAL
    {
        id: 'taal-001',
        name: 'Taneja Aerospace and Aviation Ltd',
        legal_name: 'Taneja Aerospace and Aviation Limited',
        cin: 'L62200TZ1988PLC014460',
        founded_year: 1988,
        headquarters_city: 'Hosur',
        headquarters_state: 'Tamil Nadu',
        registered_office_address: 'Belagondapalli Village, Thally Road, Denkanikotta Taluk, Krishnagiri District, Tamil Nadu - 635114',
        sector: 'aerospace',
        sub_sector: 'Components & MRO',
        website: 'https://www.taal.co.in',
        employee_count: 35,
        company_type: 'Public Limited Company',
        listing_status: 'Listed',
        stock_codes: { "BSE": "522229" },
        promoter_holding_percentage: 52.03,
        market_cap: 800.00,
        stage: 'growth',
        current_stage: 6,
        rag_status: 'amber',
        overall_score: 68,
        latest_revenue: 41.00,
        latest_net_profit: 18.00,
        revenue_growth_yoy: 36.7,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        data_confidence: 'HIGH',

        financials: [
            {
                fiscal_year: 'FY2025',
                revenue: 41.00,
                net_profit: 18.00,
                net_margin_percentage: 43.90,
                ebitda_margin_percentage: 64.0,
                debt_to_equity_ratio: 0.00,
                revenue_growth_yoy: 36.7,
                confidence: 'HIGH'
            },
            {
                fiscal_year: 'FY2024',
                revenue: 30.00,
                net_profit: 11.00,
                net_margin_percentage: 36.67,
                debt_to_equity_ratio: 0.00,
                confidence: 'HIGH'
            }
        ],

        leadership: [
            { name: 'Dr. Prahlada Ramarao', role: 'Chairman', tenure_years: 10, is_independent_director: true, background: 'Former DRDO scientist, Padma Shri' },
            { name: 'Salil Baldev Taneja', role: 'Promoter & Non-Executive Director', tenure_years: 35, background: 'MD TAAL Tech India' },
            { name: 'Rakesh Duda', role: 'Managing Director', tenure_years: 3, is_executive_director: true, background: 'Former Hero MotoCorp' }
        ],

        board: {
            total_board_members: 4,
            executive_directors: 1,
            independent_directors: 2
        },

        talent: {
            total_employees: 35,
            permanent_employees: 35
        },

        brand: {
            brand_awareness_level: 'National',
            certifications: [
                { "name": "AS9100", "certified": true },
                { "name": "DGCA CAR-21", "note": "Aircraft Manufacturing Approval" },
                { "name": "Aerodrome Licence", "note": "DGCA-licensed private aerodrome" }
            ],
            marketing_sophistication: 'Basic'
        },

        gap_analysis: {
            overall_gap_score: 68,
            investment_readiness: 'Caution',

            market_saturation_score: 45,
            market_saturation_diagnosis: 'Niche',
            market_saturation_assessment: 'Limited operational scale (₹41 Cr revenue) but asset-rich with 240-acre airfield.',

            founder_quality_score: 65,
            founder_quality_assessment: 'Promoter family involved since 1988. New MD since 2022 brings fresh perspective.',

            business_maturity_score: 78,
            business_maturity_assessment: 'Operating since 1988. First private company licensed to manufacture aircraft in India.',

            market_opportunity_score: 75,
            market_opportunity_assessment: 'Aviation infrastructure opportunity strong with Hosur/Bengaluru growth.',

            leadership_quality_score: 70,
            talent_pool_score: 60,
            innovation_differentiator_score: 55,
            brand_identity_score: 62,

            critical_gaps: [
                'Minimal operational scale',
                'HANSA program transferred out',
                'Limited order book visibility',
                'Heavy tenant dependence'
            ],
            key_strengths: [
                '240-acre DGCA-licensed airfield',
                'Debt-free balance sheet',
                '64% OPM',
                'Strong dividend policy'
            ],

            time_to_opportunity_months: 24,
            probability_of_success_percentage: 60.0
        }
    }
];

export function getNewCompanyById(id: string): DetailedCompany | undefined {
    return NEW_COMPANIES.find(c => c.id === id);
}
