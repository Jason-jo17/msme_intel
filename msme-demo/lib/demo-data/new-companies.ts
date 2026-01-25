
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
    },
    // COMPANY 4: HICAL TECHNOLOGIES
    {
        // Core Company Information
        id: 'hical-001',
        name: 'Hical Technologies Private Limited',
        legal_name: 'Hical Technologies Private Limited (formerly Hical Aerospace Private Limited)',
        cin: 'U31900KA2011PTC060176',
        gstin: '29AACCH7296L1ZU',
        pan: undefined, // Not disclosed in research
        company_status: 'Active',
        registration_date: '2011-08-26',
        founded_year: 1988,

        // Addresses
        registered_office_address: 'Sy. No.46&47, Electronic City, Phase 2, Hosur Road, Bangalore, Karnataka - 560100',
        corporate_office_address: 'Sy. No.46&47, Electronic City, Phase 2, Hosur Road, Bangalore, Karnataka - 560100',

        // Location
        headquarters_city: 'Bangalore',
        headquarters_state: 'Karnataka',

        // Classification
        sector: 'aerospace',
        sub_sector: 'Electromagnetics & Actuators',
        industry_classification: 'Manufacture of Other Electrical Equipment N.E.C. (NIC Code 3190)',

        // Online Presence
        website: 'https://www.hical.com/',
        linkedin_url: 'https://www.linkedin.com/company/hical-technologies-pvt-ltd/',

        // Company Type & Structure
        company_type: 'Private Limited Company',
        listing_status: 'Unlisted',
        stock_codes: undefined,
        promoter_holding_percentage: 100.0,
        market_cap: undefined, // Private company

        // Capitalization
        authorized_capital: 5.0,
        paid_up_capital: 4.97,
        net_worth: undefined, // Estimated ~35-40 Cr based on paid-up + growth

        // Employee & Stage
        employee_count: 517,
        stage: 'growth',
        current_stage: 5, // Established growth stage
        rag_status: 'amber',
        overall_score: 72,

        // Financial Overview
        latest_revenue: 212.2,
        latest_net_profit: undefined, // Not disclosed; ICRA notes negative operating cash flow
        revenue_growth_yoy: 36.0,

        // Metadata
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        data_confidence: 'MEDIUM-HIGH',
        last_research_date: '2025-01-20',
        notes: "Karnataka's premier aerospace electromagnetics specialist. 11-year UTC Gold Supplier. ISRO GOCO partner. High growth (36% YoY) but working capital stress and customer concentration risk.",

        // ========================================================================
        // FINANCIAL DATA
        // ========================================================================
        financials: [
            {
                fiscal_year: 'FY2025',
                revenue: 212.2,
                revenue_from_operations: undefined,
                net_profit: 0,
                net_margin_percentage: undefined,
                ebitda: 0,
                ebitda_margin_percentage: 14.0,
                shareholders_equity: undefined,
                long_term_debt: undefined,
                short_term_debt: 82.5, // Working capital debt
                debt_to_equity_ratio: 2.8, // TOL/TNW
                revenue_growth_yoy: 36.0,
                segment_breakdown: { "aerospace_defense": 80, "space": 12, "other": 8 },
                data_source: 'Company disclosures, industry sources',
                confidence: 'HIGH'
            },
            {
                fiscal_year: 'FY2024',
                revenue: 158.0,
                revenue_from_operations: undefined,
                net_profit: 0,
                net_margin_percentage: undefined,
                ebitda: 0,
                ebitda_margin_percentage: 12.3,
                shareholders_equity: undefined,
                long_term_debt: undefined,
                short_term_debt: 82.5,
                debt_to_equity_ratio: 2.8,
                revenue_growth_yoy: 12.5,
                segment_breakdown: { "aerospace_defense": 80, "space": 12, "other": 8 },
                data_source: 'ICRA Rating Report',
                confidence: 'HIGH'
            },
            {
                fiscal_year: 'FY2023',
                revenue: 137.0,
                revenue_from_operations: undefined,
                net_profit: 0,
                net_margin_percentage: undefined,
                ebitda: 0,
                ebitda_margin_percentage: 10.8,
                shareholders_equity: undefined,
                long_term_debt: undefined,
                short_term_debt: 62.0,
                debt_to_equity_ratio: undefined,
                revenue_growth_yoy: 26.2,
                segment_breakdown: undefined,
                data_source: 'ICRA, Tracxn',
                confidence: 'MEDIUM'
            },
            {
                fiscal_year: 'FY2022',
                revenue: 109.0,
                revenue_from_operations: undefined,
                net_profit: 0,
                net_margin_percentage: undefined,
                ebitda: 0,
                ebitda_margin_percentage: undefined,
                shareholders_equity: undefined,
                long_term_debt: undefined,
                short_term_debt: undefined,
                debt_to_equity_ratio: undefined,
                revenue_growth_yoy: 0,
                segment_breakdown: undefined,
                data_source: 'Estimated from growth rates',
                confidence: 'MEDIUM'
            },
            {
                fiscal_year: 'FY2021',
                revenue: 95.0,
                revenue_from_operations: undefined,
                net_profit: 0,
                net_margin_percentage: undefined,
                ebitda: 0,
                ebitda_margin_percentage: undefined,
                shareholders_equity: undefined,
                long_term_debt: undefined,
                short_term_debt: undefined,
                debt_to_equity_ratio: undefined,
                revenue_growth_yoy: 0,
                segment_breakdown: undefined,
                data_source: 'Estimated; COVID-19 impact year',
                confidence: 'LOW'
            }
        ],

        // ========================================================================
        // FOUNDERS
        // ========================================================================
        founders: [
            {
                name: 'Shashikiran Mullur',
                age: undefined, // Not disclosed
                current_role: 'Founder/Chairman',
                years_in_sector: 38,
                tenure_years: 37,
                education: 'Not disclosed',
                background: '38+ years in aerospace industry. Founded Hical in 1988. Also coffee planter in Malnad region.',
                equity_stake: undefined, // Part of 100% promoter holding
                is_promoter: true,
                linkedin_url: undefined,
                notable_achievements: [
                    '11 consecutive years UTC/Collins Aerospace Gold Supplier',
                    'ISRO GOCO contract holder',
                    'Indian Offset Partner certification',
                    '37 years operational history'
                ]
            },
            {
                name: 'Sujaya Shashikiran',
                age: undefined,
                current_role: 'Managing Director',
                years_in_sector: 30,
                tenure_years: 13,
                education: 'SJCE Mysore (1979-84)',
                background: '3+ decades in engineering, manufacturing, and administration',
                equity_stake: undefined,
                is_promoter: true,
                linkedin_url: undefined,
                notable_achievements: []
            },
            {
                name: 'Jaiveer Yashas Shashikiran',
                age: undefined,
                current_role: 'Joint Managing Director',
                years_in_sector: 9,
                tenure_years: 9,
                education: 'National University of Singapore',
                background: 'Second-generation leader. Former Director of Business Development.',
                equity_stake: undefined,
                is_promoter: true,
                linkedin_url: undefined,
                notable_achievements: []
            }
        ],

        // ========================================================================
        // LEADERSHIP TEAM
        // ========================================================================
        leadership: [
            {
                name: 'Murali P',
                role: 'CTO/Head Technology Center',
                tenure_years: undefined,
                total_experience_years: 25,
                education: 'Gujarat Technological University',
                background: 'Ex-ISRO, Ex-Moog India. Deep aerospace and defense technology expertise.',
                is_executive_director: false,
                is_independent_director: false
            },
            {
                name: 'Mohammed Ajaz',
                role: 'VP Operations',
                tenure_years: undefined,
                total_experience_years: undefined,
                education: undefined,
                background: 'Operations leadership',
                is_executive_director: false,
                is_independent_director: false
            },
            {
                name: 'Thatti Suresh',
                role: 'VP Business Development',
                tenure_years: undefined,
                total_experience_years: undefined,
                education: undefined,
                background: 'Sales and business development',
                is_executive_director: false,
                is_independent_director: false
            },
            {
                name: 'Murali Nellepalli',
                role: 'GM Finance',
                tenure_years: undefined,
                total_experience_years: undefined,
                education: undefined,
                background: 'Finance leadership',
                is_executive_director: false,
                is_independent_director: false
            },
            {
                name: 'Soumya Venkatesh',
                role: 'HCM Head',
                tenure_years: undefined,
                total_experience_years: undefined,
                education: undefined,
                background: 'Human capital management and sustainability',
                is_executive_director: false,
                is_independent_director: false
            },
            {
                name: 'V.B. Venkatesh',
                role: 'Independent Director',
                tenure_years: undefined,
                total_experience_years: undefined,
                education: undefined,
                background: '5 other directorships',
                is_executive_director: false,
                is_independent_director: true
            }
        ],

        // ========================================================================
        // BOARD COMPOSITION
        // ========================================================================
        board: {
            total_board_members: 4,
            executive_directors: 3,
            independent_directors: 1,
            succession_plan_exists: false,
            succession_plan_details: 'No documented succession plan publicly available. Jaiveer Yashas Shashikiran (JMD) positioned as likely successor, but 3 of 4 directors are from same family creating high key person risk.',
            governance_score: 65
        },

        // ========================================================================
        // TALENT METRICS
        // ========================================================================
        talent: {
            total_employees: 517,
            permanent_employees: undefined,
            employee_growth_yoy: -7.0,
            glassdoor_rating: 2.7,
            glassdoor_review_count: 20,
            glassdoor_ceo_approval: 40,
            glassdoor_recommend_to_friend: undefined,
            glassdoor_top_pros: [
                'Exposure to aerospace industry',
                'Technical learning opportunities',
                'Stable organization',
                'Work with prestigious clients (ISRO, Collins)'
            ],
            glassdoor_top_cons: [
                'Below-market compensation (15-20% lower)',
                'Limited work-life balance',
                'Hierarchical decision-making',
                'Slow career progression',
                '6-day work week concerns'
            ],
            critical_skills_missing: [
                'Digital marketing expertise',
                'Advanced manufacturing specialists',
                'Software engineers for Industry 4.0',
                'Senior finance talent (only GM-level)'
            ],
            high_turnover_roles: [
                'Engineering roles (18% attrition)',
                'Manufacturing staff',
                'Mid-level management'
            ]
        },

        // ========================================================================
        // BRAND METRICS
        // ========================================================================
        brand: {
            brand_awareness_level: 'National',
            primary_markets: ['India', 'USA', 'Europe'],
            certifications: [
                { "name": "AS9100", "version": "Rev D", "certified": true },
                { "name": "CEMILAC", "scope": "Design Approval", "certified": true },
                { "name": "NADCAP", "scope": "Cable Harnesses (via YTPL)", "certified": true },
                { "name": "ISO 9001:2015", "certified": true },
                { "name": "ISRO GOCO", "certified": true },
                { "name": "Indian Offset Partner", "certified": true },
                { "name": "DST-NSTEDB Recognized", "certified": true }
            ],
            awards: [
                { "award": "UTC/Collins Aerospace Gold Supplier", "year": 2024, "category": "11 consecutive years" },
                { "award": "ISRO GOCO Contract", "category": "Strategic Partner" }
            ],
            marketing_sophistication: 'Basic',
            tagline: undefined,
            differentiation_claim: "Karnataka's premier aerospace electromagnetics specialist with 37 years operational history serving ISRO, HAL, and global OEMs"
        },

        // ========================================================================
        // PRODUCTS
        // ========================================================================
        products: [
            {
                product_name: 'Electromechanical Actuators',
                category: 'Actuators',
                description: 'Linear and rotary actuators for aerospace applications including launch vehicles and aircraft control systems',
                target_application: 'ISRO launch vehicles, aircraft control systems',
                certifications: ['CEMILAC', 'AS9100'],
                oem_approvals: ['ISRO', 'HAL']
            },
            {
                product_name: 'DC Solenoids',
                category: 'Electromagnetics',
                description: 'Aerospace and defense-grade DC solenoids',
                target_application: 'Tejas Mk2, various aircraft systems',
                certifications: ['AS9100'],
                oem_approvals: ['HAL', 'DRDO']
            },
            {
                product_name: 'Aerospace Valves',
                category: 'Flow Control',
                description: 'Precision valves for aerospace applications',
                target_application: 'Aircraft hydraulic and pneumatic systems',
                certifications: ['AS9100'],
                oem_approvals: ['Collins Aerospace', 'Honeywell']
            },
            {
                product_name: 'Igniter Systems',
                category: 'Propulsion Components',
                description: 'Ignition systems for rocket motors',
                target_application: 'Launch vehicle propulsion',
                certifications: ['CEMILAC'],
                oem_approvals: ['ISRO']
            },
            {
                product_name: 'Cable Harnesses',
                category: 'Interconnects',
                description: 'Aerospace-grade cable harnesses via YTPL subsidiary (29.5% stake)',
                target_application: 'Aircraft electrical systems',
                certifications: ['NADCAP', 'AS9100'],
                oem_approvals: []
            },
            {
                product_name: 'Motors & Actuators',
                category: 'Electromechanical',
                description: 'Specialized motors and actuators for aerospace applications',
                target_application: 'Aircraft systems',
                certifications: ['AS9100'],
                oem_approvals: ['Collins Aerospace']
            }
        ],

        // ========================================================================
        // INNOVATION METRICS
        // ========================================================================
        innovation: {
            fiscal_year: 'FY2024',
            rd_investment_percentage: undefined, // Not disclosed
            rd_team_size: undefined, // Estimated 25-30% of engineering staff
            patents_filed: undefined, // Not disclosed
            patents_granted: 0,
            new_products_launched: [],
            technology_partners: [
                'ISRO',
                'DRDO',
                'HAL',
                'NSE Industries France (JV partner)'
            ],
            industry_4_adoption: 'Basic'
        },

        // ========================================================================
        // CLIENTS
        // ========================================================================
        clients: [
            {
                client_name: 'Collins Aerospace (UTC)',
                client_sector: 'Aerospace',
                client_type: 'OEM',
                revenue_contribution_percentage: 15.0,
                is_top_3_client: true,
                products_services: ['Actuators', 'Valves', 'Solenoids'],
                has_long_term_contract: true,
                relationship_duration_years: 11
            },
            {
                client_name: 'ISRO',
                client_sector: 'Space',
                client_type: 'Government',
                revenue_contribution_percentage: 12.0,
                is_top_3_client: true,
                products_services: ['Electromechanical Actuators', 'Igniter Systems'],
                has_long_term_contract: true,
                relationship_duration_years: 10
            },
            {
                client_name: 'Honeywell',
                client_sector: 'Aerospace',
                client_type: 'OEM',
                revenue_contribution_percentage: 10.0,
                is_top_3_client: true,
                products_services: ['Dedicated production line'],
                has_long_term_contract: true,
                relationship_duration_years: undefined
            },
            {
                client_name: 'Woodward',
                client_sector: 'Aerospace',
                client_type: 'Tier-1',
                revenue_contribution_percentage: 8.0,
                is_top_3_client: false,
                products_services: [],
                has_long_term_contract: true,
                relationship_duration_years: undefined
            },
            {
                client_name: 'HAL (Hindustan Aeronautics Limited)',
                client_sector: 'Defense',
                client_type: 'Government',
                revenue_contribution_percentage: 7.0,
                is_top_3_client: false,
                products_services: ['Solenoids for Tejas Mk2'],
                has_long_term_contract: false,
                relationship_duration_years: undefined
            }
        ],

        // ========================================================================
        // CLIENT DEMOGRAPHICS
        // ========================================================================
        client_demographics: {
            top_3_clients_percentage: 37.0, // Collins 15% + ISRO 12% + Honeywell 10%
            concentration_risk: 'HIGH', // Top 5 = 52%
            defense_govt_percentage: 19.0, // ISRO 12% + HAL 7%
            civil_aviation_percentage: undefined, // Included in aerospace
            domestic_india_percentage: 50.0,
            export_percentage: 50.0,
            oem_percentage: 60.0 // Collins, Honeywell, and other OEMs
        },

        // ========================================================================
        // GAP ANALYSIS
        // ========================================================================
        gap_analysis: {
            overall_gap_score: 65,
            investment_readiness: 'Cautious Optimism - High growth but execution risks',

            // Market Saturation
            market_saturation_score: 92, // Using 1-100 scale (was 8/10)
            market_saturation_diagnosis: 'Low Penetration / High Growth',
            market_saturation_assessment: 'Hical has captured only ~1.17% of India\'s $16.22B aerospace components TAM with current ₹158 Cr revenue (FY2024). Growing 2-3x faster than market (36% vs 6.37% CAGR) with 95%+ addressable market untapped.',
            market_saturation_evidence: 'Revenue ₹212.2 Cr (FY2025) vs TAM ₹1,35,000 Cr = 1.17% penetration. 1,600+ aircraft orders and PLI scheme create massive growth runway.',

            // Founder Quality
            founder_quality_score: 70,
            founder_quality_assessment: '38+ years aerospace experience with proven track record (11-year Gold Supplier, ISRO GOCO) but limited public profile and high key person concentration risk in family-owned structure.',
            founder_quality_red_flags: [
                'No documented succession plan',
                'Over-concentration of decision-making in founding family',
                'All 3 executive directors from same family',
                '100% promoter holding limits external oversight',
                'Limited professional management depth'
            ],
            founder_quality_green_flags: [
                '38+ years sector experience (since 1988)',
                '11 consecutive years UTC/Collins Gold Supplier status',
                'Strategic ISRO GOCO partnership secured',
                'Indian Offset Partner certification',
                'Successfully navigated COVID-19 recovery (26% growth FY2023)',
                'Second-generation succession in progress (Jaiveer as JMD)'
            ],

            // Business Maturity
            business_maturity_score: 82,
            business_maturity_assessment: 'Operational since 1988 (37 years) with established quality systems (AS9100, CEMILAC, NADCAP). Tier-1 supplier status with major OEMs. However, negative operating cash flow for 3 consecutive years and working capital stress indicate business model refinement needed.',

            // Market Opportunity
            market_opportunity_score: 88,
            market_opportunity_assessment: 'Massive addressable market driven by India aviation boom (1,600+ aircraft orders), PLI scheme (₹1.97 lakh crore), Atmanirbhar Bharat (68% indigenous target), and China+1 supply chain shift.',
            tam: 135000.00, // ₹1,35,000 Cr ($16.22B converted)
            sam: 8000.00, // Karnataka aerospace + Hical segments
            som: 650.00, // Realistically winnable over 5 years
            current_penetration_percentage: 1.17,

            // Leadership Quality
            leadership_quality_score: 60,
            leadership_quality_assessment: 'Second-generation succession planned with JMD in place; professional CTO from ISRO. However, family-dominated board (3 of 4 directors), only 1 independent director, and limited professional management depth.',
            leadership_gaps: [
                'Only 1 of 4 directors is independent',
                'No documented succession plan',
                'Limited professional management depth beyond VP level',
                'Finance leadership at GM level (not CFO)',
                'Family board dominance limits governance'
            ],

            // Innovation & Differentiation
            innovation_differentiator_score: 60,
            innovation_assessment: 'ISRO GOCO contract, CEMILAC design approval, and DST recognition demonstrate innovation capability. However, limited patent portfolio disclosure, no R&D investment visibility, and basic Industry 4.0 adoption.',
            innovation_gaps: [
                'No disclosed patents or IP portfolio',
                'R&D investment percentage not disclosed',
                'Basic digital manufacturing adoption',
                'No advanced manufacturing (additive, automation)',
                'Limited innovation pipeline visibility'
            ],

            // Talent Pool
            talent_pool_score: 50,
            talent_assessment: '517 employees with specialized aerospace skills and ₹30.4 Lakh revenue per employee (efficient). However, 7% workforce reduction, 2.7 Glassdoor rating, below-market compensation (15-20% lower), and 15% positive outlook signal serious talent challenges.',
            talent_gaps: [
                'Below-market compensation (15-20% lower than industry)',
                'Poor work-life balance (2.5/5 rating)',
                'High attrition rate (18% in engineering)',
                '7% workforce reduction YoY (Aug 2024-2025)',
                'Low employee morale (15% positive business outlook)',
                'Limited career progression opportunities',
                'Hierarchical decision-making culture'
            ],

            // Brand Identity
            brand_identity_score: 60,
            brand_assessment: 'Strong B2B recognition through 11-year UTC Gold Supplier status, ISRO partnership, and industry certifications. However, basic digital presence (website), minimal content marketing, and limited thought leadership.',
            brand_gaps: [
                'Basic website sophistication',
                'Minimal content marketing or PR',
                'Limited social media engagement (12K LinkedIn followers but low activity)',
                'No thought leadership positioning',
                'Weak digital marketing presence'
            ],

            // Consolidated Gaps & Strengths
            critical_gaps: [
                'Negative operating cash flow for 3 consecutive years',
                'High working capital intensity (63% NWC/OI)',
                'Customer concentration risk (52% from top 5 clients)',
                'ICRA rating downgrade in FY2024 (subsequently reaffirmed)',
                'Family board dominance (3 of 4 directors from same family)',
                'Talent challenges (2.7 Glassdoor, 7% workforce reduction, 18% attrition)',
                'Below-market employee compensation creating retention risk'
            ],
            moderate_gaps: [
                'Limited innovation pipeline visibility (no patent disclosure)',
                'Basic Industry 4.0 adoption',
                'Weak digital marketing and thought leadership',
                'Scale disadvantage vs larger competitors (₹158 Cr vs ₹650-1,470 Cr)',
                'Private company constraints limiting growth capital access',
                'Single independent director (limited governance oversight)'
            ],
            key_strengths: [
                '11 consecutive years UTC/Collins Aerospace Gold Supplier',
                'ISRO GOCO contract holder (strategic partnership)',
                'Indian Offset Partner status',
                '37 years operational history (since 1988)',
                '36% revenue growth in FY2025',
                '95%+ addressable market untapped',
                'Strategic positioning in high-growth sector (aerospace/defense)',
                'Zero-defect quality track record',
                'Established relationships with major global OEMs'
            ],

            // Recommendations
            immediate_actions: [
                'Address working capital stress - reduce NWC/OI from 63% to <50%',
                'Document formal succession plan with clear timeline',
                'Launch employee retention program with market-competitive compensation',
                'Diversify customer base - reduce top 5 concentration from 52%',
                'Apply for PLI scheme funding to access growth capital',
                'Hire CFO-level finance leadership (currently GM-level)'
            ],
            short_term_recommendations: [
                'Achieve positive operating cash flow (currently negative 3 years)',
                'Add 2-3 independent directors to board for governance',
                'Improve employee compensation to market rates (currently 15-20% below)',
                'Enhance digital marketing and establish thought leadership',
                'Expand MRO services via Hical-NSE JV',
                'Build innovation pipeline visibility (patents, R&D disclosure)'
            ],
            medium_term_recommendations: [
                'Scale to ₹500-750 Cr revenue within 5 years',
                'Develop proprietary IP portfolio (patents in actuators/solenoids)',
                'Upgrade Industry 4.0 capabilities (automation, digital manufacturing)',
                'Consider strategic investor for growth capital and governance',
                'Expand defense sector penetration (Tejas Mk2, other HAL programs)',
                'Establish second manufacturing facility or expand capacity',
                'Build stronger employer brand to reduce attrition'
            ],

            // Investment Metrics
            time_to_opportunity_months: 24,
            probability_of_success_percentage: 68.0
        }
    }
];

export function getNewCompanyById(id: string): DetailedCompany | undefined {
    return NEW_COMPANIES.find(c => c.id === id);
}
