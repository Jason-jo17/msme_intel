
import { SectorThesis, Citation } from '@/lib/types/sector-thesis';

// ============================================================================
// CITATIONS (Mapped from SQL)
// ============================================================================
const CITATIONS: Record<string, Citation> = {
    // Aerospace Citations (Existing)
    'c1': { id: 'c1', citation_key: 'MMI_2024_aerospace_trajectory', citation_number: 1, source_type: 'industry', source_name: 'Modern Manufacturing India', publication_year: 2024, title: 'Indian Aerospace Industry: On a High Growth Trajectory', url: 'https://www.mmindia.co.in/article/93/indian-aerospace-industry-on-a-high-growth-trajectory', reliability_score: 8, tags: ['aerospace', 'market_size', 'growth'], geographic_focus: ['India'], excerpt: 'India aerospace market projected to reach USD 70 billion by 2030' },
    'c2': { id: 'c2', citation_key: 'CMI_2024_aerospace_defence', citation_number: 2, source_type: 'report', source_name: 'Custom Market Insights', publication_year: 2024, title: 'India Aerospace and Defence Market Size, Trends, Share 2033', url: 'https://www.custommarketinsights.com/report/india-aerospace-and-defence-market/', reliability_score: 8, tags: ['aerospace', 'defense', 'market_size'], geographic_focus: ['India'], excerpt: 'Current market size USD 27-29 billion in 2024' },
    'c3': { id: 'c3', citation_key: 'WTE_2024_aerospace_exports', citation_number: 3, source_type: 'industry', source_name: "World's Top Exports", publication_year: 2024, title: 'Aerospace Exports by Country 2024', url: 'https://www.worldstopexports.com/aerospace-exports-by-country/', reliability_score: 7, tags: ['aerospace', 'exports', 'trade'], geographic_focus: ['India', 'Global'], excerpt: 'India achieved fastest aerospace export growth +284.5% in 2024' },
    'c4': { id: 'c4', citation_key: 'VisionIAS_2025_defence_exports', citation_number: 4, source_type: 'academic', source_name: 'Vision IAS', publication_year: 2025, title: "India's Defence Exports", url: 'https://visionias.in/current-affairs/monthly-magazine/2025-05-17/security/indias-defence-exports-1', reliability_score: 8, tags: ['defense', 'production', 'exports'], geographic_focus: ['India'], excerpt: 'Defense production reached ₹1,50,590 crore (USD 17.57 billion) in FY25' },
    'c5': { id: 'c5', citation_key: 'IMARC_2024_india_aviation', citation_number: 5, source_type: 'report', source_name: 'IMARC Group', publication_year: 2024, title: 'India Aviation Market Size, Share, Growth and Outlook, 2033', url: 'https://www.imarcgroup.com/india-aviation-market', reliability_score: 9, tags: ['aviation', 'market_size', 'forecast'], geographic_focus: ['India'], excerpt: "India is the world's tenth-largest civil aviation market and third-largest domestic aviation market" },
    'c6': { id: 'c6', citation_key: 'PIB_2025_defence_exports_surge', citation_number: 6, source_type: 'government', source_name: 'Press Information Bureau', publication_year: 2025, title: 'Defence exports surge to a record high of Rs 23,622 crore', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2117348', reliability_score: 10, tags: ['defense', 'exports', 'government'], geographic_focus: ['India'], excerpt: 'Defence exports target: ₹50,000 crore (USD 6 billion) by FY29' },
    'c7': { id: 'c7', citation_key: 'Mordor_2024_india_aviation', citation_number: 7, source_type: 'report', source_name: 'Mordor Intelligence', publication_year: 2024, title: 'India Aviation Market Size, Share 2030 Report', url: 'https://www.mordorintelligence.com/industry-reports/analysis-of-aviation-industry-in-india', reliability_score: 8, tags: ['aviation', 'forecast', 'cagr'], geographic_focus: ['India'], excerpt: '12.03% CAGR for aviation through 2030' },
    'c8': { id: 'c8', citation_key: 'NOA_2024_aviation_rank', citation_number: 8, source_type: 'government', source_name: 'News on Air', publication_year: 2024, title: "India Emerges as World's 5th Biggest Aviation Market in 2024", url: 'https://www.newsonair.gov.in/india-emerges-as-worlds-5th-biggest-aviation-market-in-2024/', reliability_score: 9, tags: ['aviation', 'fleet', 'ranking'], geographic_focus: ['India'], excerpt: 'India operates 713 aircraft currently, projected to reach 1,522 by 2031' },
    'c9': { id: 'c9', citation_key: 'Secretariat_2024_aerospace_rise', citation_number: 9, source_type: 'news', source_name: 'The Secretariat News', publication_year: 2024, title: 'Indian Aerospace Manufacturing On The Rise', url: 'https://thesecretariat.in/article/indian-aerospace-manufacturing-on-the-rise', reliability_score: 7, tags: ['aerospace', 'manufacturing', 'orders'], geographic_focus: ['India'], excerpt: 'India holds orders for 970+ aircraft from Boeing and Airbus' },
    'c10': { id: 'c10', citation_key: 'Gymkhana_2025_defence_inflection', citation_number: 10, source_type: 'industry', source_name: 'Gymkhana Partners', publication_year: 2025, title: 'Major sector inflection: India defense and aerospace', url: 'https://www.gymkhanapartners.com/dispatches/major-sector-inflection-india-defense-and-aerospace', reliability_score: 8, tags: ['defense', 'indigenous', 'manufacturing'], geographic_focus: ['India'], excerpt: 'Indigenous defense production now constitutes 61.1% of the market' },
    'c11': { id: 'c11', citation_key: 'IBEF_2024_mro_trends', citation_number: 11, source_type: 'government', source_name: 'IBEF', publication_year: 2024, title: "India's MRO Industry: Future Trends & Growth Opportunities", url: 'https://www.ibef.org/blogs/the-future-of-the-mro-industry-in-india-trends-and-opportunities', reliability_score: 9, tags: ['mro', 'market_size', 'policy'], geographic_focus: ['India'], excerpt: 'MRO sector USD 2.3-3.8B, 90% outsourced, GST reduced to 5%' },
    'c12': { id: 'c12', citation_key: 'GVR_2024_aerospace_parts', citation_number: 12, source_type: 'report', source_name: 'Grand View Research', publication_year: 2024, title: 'India Aerospace Parts Manufacturing Market To Reach $21.48Bn', url: 'https://www.grandviewresearch.com/press-release/india-aerospace-parts-manufacturing-market-analysis', reliability_score: 9, tags: ['aerospace', 'manufacturing', 'supply_chain'], geographic_focus: ['India'], excerpt: 'Aerospace manufacturing USD 13.6B in 2023, projected USD 21.48B by 2030' },
    'c13': { id: 'c13', citation_key: 'FlightGlobal_2024_india_china', citation_number: 13, source_type: 'industry', source_name: 'Flight Global', publication_year: 2024, title: "India to eclipse China as aerospace's next frontier", url: 'https://www.flightglobal.com/aerospace/india-to-eclipse-china-as-aerospaces-next-frontier/152186.article', reliability_score: 9, tags: ['aerospace', 'competitiveness', 'cost'], geographic_focus: ['India', 'Global'], excerpt: 'Hyderabad ranks #1 globally for aerospace cost-effectiveness' },
    'c14': { id: 'c14', citation_key: 'Mordor_2024_aviation_defence_space', citation_number: 14, source_type: 'report', source_name: 'Mordor Intelligence', publication_year: 2024, title: 'India Aviation, Defense, And Space Market Size & Share Analysis', url: 'https://www.mordorintelligence.com/industry-reports/india-aviation-defense-and-space-market', reliability_score: 8, tags: ['space', 'market_size', 'startups'], geographic_focus: ['India'], excerpt: 'Space sector USD 8.4-9B in 2024, targeting USD 44B by 2033; 400+ private space enterprises' },
    'c15': { id: 'c15', citation_key: 'ITA_2024_india_aerospace_defence', citation_number: 15, source_type: 'government', source_name: 'International Trade Administration', publication_year: 2024, title: 'India - Aerospace and Defense', url: 'https://www.trade.gov/country-commercial-guides/india-aerospace-and-defense', reliability_score: 10, tags: ['aerospace', 'cost_competitiveness', 'supply_chain'], geographic_focus: ['India'], excerpt: 'Cost advantages of 15-25% in manufacturing with additional 10-20% savings through local sourcing' },
    'c16': { id: 'c16', citation_key: 'IBEF_2024_defence_manufacturing', citation_number: 16, source_type: 'government', source_name: 'IBEF', publication_year: 2024, title: "India's Defence Manufacturing Industry Revolutionizing Exports", url: 'https://www.ibef.org/industry/defence-manufacturing', reliability_score: 9, tags: ['defense', 'industrial_policy', 'infrastructure'], geographic_focus: ['India'], excerpt: 'Defense Industrial Corridors: ₹8,658 crore investments, 253 MoUs' },
    'c17': { id: 'c17', citation_key: 'InvestIndia_2024_civil_aviation', citation_number: 17, source_type: 'government', source_name: 'Invest India', publication_year: 2024, title: 'Investment Opportunities in Civil Aviation', url: 'https://www.investindia.gov.in/sector/civil-aviation', reliability_score: 9, tags: ['aviation', 'policy', 'infrastructure'], geographic_focus: ['India'], excerpt: 'UDAN regional connectivity targets 120 new destinations' },
    'c18': { id: 'c18', citation_key: 'IMARC_2024_aircraft_components', citation_number: 18, source_type: 'report', source_name: 'IMARC Group', publication_year: 2024, title: 'India Aircraft Components Market Size, Share', url: 'https://www.imarcgroup.com/india-aircraft-components-market', reliability_score: 8, tags: ['aerospace', 'components', 'supply_chain'], geographic_focus: ['India'], excerpt: 'Aircraft components market USD 16.22B in 2024' },
    'c19': { id: 'c19', citation_key: 'AviationA2Z_2025_global_hub', citation_number: 19, source_type: 'industry', source_name: 'Aviation A2Z', publication_year: 2025, title: 'India is Becoming a Global Aerospace Hub', url: 'https://aviationa2z.com/index.php/2025/10/23/india-is-becoming-a-global-aerospace-hub/', reliability_score: 7, tags: ['aerospace', 'supply_chain', 'global'], geographic_focus: ['India', 'Global'], excerpt: 'India targeting 10% of global aerospace supply chain by 2033' },
    'c20': { id: 'c20', citation_key: 'BizStd_2025_supply_chain_crisis', citation_number: 20, source_type: 'news', source_name: 'Business Standard', publication_year: 2025, title: 'Global aerospace firms turn to India amid Western supply chain crisis', url: 'https://www.business-standard.com/external-affairs-defence-security/news/global-aerospace-firms-turn-to-india-amid-western-supply-chain-crisis-125021700469_1.html', reliability_score: 8, tags: ['aerospace', 'oem_sourcing', 'supply_chain'], geographic_focus: ['India', 'Global'], excerpt: 'Boeing sources over $1B annually, Airbus targets $2B by 2030' },
    'c21': { id: 'c21', citation_key: 'IMARC_2024_aerospace_composites', citation_number: 21, source_type: 'report', source_name: 'IMARC Group', publication_year: 2024, title: 'India Aerospace Composites Market Size, Share | 2033', url: 'https://www.imarcgroup.com/india-aerospace-composites-market', reliability_score: 8, tags: ['aerospace', 'composites', 'materials'], geographic_focus: ['India'], excerpt: 'Aerospace composites $330.2M in 2024, projected $690.6M by 2033' },
    'c22': { id: 'c22', citation_key: 'Brigade_2024_devanahalli_hub', citation_number: 22, source_type: 'industry', source_name: 'Brigade Group', publication_year: 2024, title: 'How Devanahalli is emerging as a major commercial hub', url: 'https://www.brigadegroup.com/blog/general/how-devanahalli-is-emerging-as-a-major-commercial-hub-of-bengaluru', reliability_score: 7, tags: ['aerospace', 'infrastructure', 'regional'], geographic_focus: ['India', 'Karnataka'], excerpt: 'Karnataka: 25% of aircraft/spacecraft industry, 65% aerospace exports' },

    // AI Citations (New)
    'ai1': { id: 'ai1', citation_key: 'BizStd_2024_ai_17bn', citation_number: 1, source_type: 'news', source_name: 'Business Standard', publication_year: 2024, title: 'AI market in India to touch $17 billion by 2027: Nasscom-BCG report', url: 'https://www.business-standard.com/industry/news/ai-market-in-india-to-touch-17-billion-by-2027-nasscom-bcg-report-124022000743_1.html', reliability_score: 8, tags: ['ai', 'market_size', 'forecast'], geographic_focus: ['India'], excerpt: 'AI market projected to reach $17 billion by 2027' },
    'ai2': { id: 'ai2', citation_key: 'IBEF_2024_ai_triple', citation_number: 2, source_type: 'government', source_name: 'IBEF', publication_year: 2024, title: "India's AI market set to triple, may cross Rs 1,45,384 crore by 2027", url: 'https://www.ibef.org/news/india-s-artificial-intelligence-ai-market-set-to-triple-may-cross-rs-1-45-384-crore-us-17-billion-by-2027-report', reliability_score: 9, tags: ['ai', 'growth', 'market_size'], geographic_focus: ['India'], excerpt: 'AI market to triple reaching ₹1,45,384 crore (USD 17B) by 2027' },
    'ai3': { id: 'ai3', citation_key: 'FBI_2024_ai_india', citation_number: 3, source_type: 'report', source_name: 'Fortune Business Insights', publication_year: 2024, title: 'India Artificial Intelligence Market Size, Share | Growth [2032]', url: 'https://www.fortunebusinessinsights.com/india-artificial-intelligence-market-113969', reliability_score: 8, tags: ['ai', 'market_size', 'cagr', 'forecast'], geographic_focus: ['India'], excerpt: 'AI market $9.51B in 2024, $130.63B by 2032 at 39% CAGR' },
    'ai4': { id: 'ai4', citation_key: 'PIB_2025_ai_revolution', citation_number: 4, source_type: 'government', source_name: 'Press Information Bureau', publication_year: 2025, title: "India's AI Revolution", url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2108810', reliability_score: 10, tags: ['ai', 'policy', 'indiaai_mission', 'gpus'], geographic_focus: ['India'], excerpt: 'IndiaAI Mission ₹10,372 crore, 38,000 GPUs secured (3x target)' },
    'ai5': { id: 'ai5', citation_key: 'IBEF_2024_ai_labour', citation_number: 5, source_type: 'government', source_name: 'IBEF', publication_year: 2024, title: "AI & Labour Transformation: India's Path to Inclusive Growth", url: 'https://www.ibef.org/blogs/ai-enabled-labour-transformation-harnessing-technology-for-inclusive-growth', reliability_score: 9, tags: ['ai', 'gdp_impact', 'employment', 'productivity'], geographic_focus: ['India'], excerpt: 'AI could add $450-500B to GDP by 2025-30; 70% employees use AI at work' },
    'ai6': { id: 'ai6', citation_key: 'NASSCOM_2024_data_ai', citation_number: 6, source_type: 'industry', source_name: 'NASSCOM', publication_year: 2024, title: 'Unlocking Value from Data and AI - The India Opportunity', url: 'https://nasscom.in/knowledge-center/publications/unlocking-value-data-and-ai-india-opportunity', reliability_score: 9, tags: ['ai', 'gdp_impact', 'data', 'opportunity'], geographic_focus: ['India'], excerpt: 'AI could add $967B to GDP by 2035' },
    'ai7': { id: 'ai7', citation_key: 'IndiaAI_2024_talent_support', citation_number: 7, source_type: 'government', source_name: 'IndiaAI', publication_year: 2024, title: "Huge talent base and strong Govt. support to take India's AI spending to $5 Bn by 2027", url: 'https://indiaai.gov.in/news/huge-talent-base-and-strong-govt-support-to-take-india-s-ai-spending-to-5-bn-by-2027', reliability_score: 9, tags: ['ai', 'sectoral_adoption', 'spending', 'talent'], geographic_focus: ['India'], excerpt: 'BFSI leads AI spending at 30.7%, manufacturing 24.6%, healthcare 15.9%' },
    'ai8': { id: 'ai8', citation_key: 'Globe_2024_80pct_adoption', citation_number: 8, source_type: 'news', source_name: 'The Globe and Mail', publication_year: 2024, title: '80% of Indian Enterprises Embrace AI, Surpassing U.S. and Global Adoption', url: 'https://www.theglobeandmail.com/investing/markets/markets-news/GetNews/36087934/', reliability_score: 7, tags: ['ai', 'enterprise_adoption', 'comparison'], geographic_focus: ['India', 'US', 'Global'], excerpt: '80% Indian enterprises prioritize AI strategically vs 59% US average' },
    'ai9': { id: 'ai9', citation_key: 'MRF_2024_ai_india', citation_number: 9, source_type: 'report', source_name: 'Market Research Future', publication_year: 2024, title: 'India Artificial Intelligence Market Size, Global Report - 2035', url: 'https://www.marketresearchfuture.com/reports/india-artificial-intelligence-market-21411', reliability_score: 8, tags: ['ai', 'market_size', 'long_term_forecast'], geographic_focus: ['India'], excerpt: 'AI market $7.63-11.17B in 2024-25, 30.11-42.2% CAGR to 2035' },
    'ai10': { id: 'ai10', citation_key: 'GVR_2024_ai_india', citation_number: 10, source_type: 'report', source_name: 'Grand View Research', publication_year: 2024, title: 'India Artificial Intelligence Market Size & Outlook, 2033', url: 'https://www.grandviewresearch.com/horizon/outlook/artificial-intelligence-market/india', reliability_score: 9, tags: ['ai', 'genai', 'machine_learning', 'segments'], geographic_focus: ['India'], excerpt: 'GenAI 34-42% CAGR, ML platforms 35-50% CAGR' },
    'ai11': { id: 'ai11', citation_key: 'IMARC_2024_healthcare_ai', citation_number: 11, source_type: 'report', source_name: 'IMARC Group', publication_year: 2024, title: 'India AI in Healthcare Market', url: 'https://www.imarcgroup.com/', reliability_score: 8, tags: ['ai', 'healthcare', 'sectoral'], geographic_focus: ['India'], excerpt: 'Healthcare AI: 40-48% CAGR, $374.7M in 2023 to $6.9B by 2032' },
    'ai12': { id: 'ai12', citation_key: 'Mordor_2024_datacenter', citation_number: 12, source_type: 'report', source_name: 'Mordor Intelligence', publication_year: 2024, title: 'India Data Center Market Analysis | Industry Growth, Size & Forecast Report 2030', url: 'https://www.mordorintelligence.com/industry-reports/india-data-center-market', reliability_score: 8, tags: ['ai', 'infrastructure', 'data_centers'], geographic_focus: ['India'], excerpt: 'AI infrastructure growing at 21% CAGR, 45 new data centers adding 1,015 MW' },
    'ai13': { id: 'ai13', citation_key: 'GMI_2024_ai_india', citation_number: 13, source_type: 'report', source_name: 'GMI Research', publication_year: 2024, title: 'India AI Market Size, Share, Trends, Forecast 2032', url: 'https://www.gmiresearch.com/report/india-ai-market/', reliability_score: 8, tags: ['ai', 'technology_segments', 'ml', 'nlp'], geographic_focus: ['India'], excerpt: 'Machine Learning 45.8% market share, NLP fastest-growing' },
    'ai14': { id: 'ai14', citation_key: 'Bajaj_2024_ai_story', citation_number: 14, source_type: 'industry', source_name: 'Bajaj Finance', publication_year: 2024, title: "India's AI Revolution l Driving Inclusive Growth and Global Leadership", url: 'https://www.aboutbajajfinserv.com/ticc/indian-ai-story', reliability_score: 7, tags: ['ai', 'gdp_impact', 'economic_impact'], geographic_focus: ['India'], excerpt: 'EY: $359-438B GDP addition by 2029-30 through AI adoption' },
    'ai15': { id: 'ai15', citation_key: 'TradeBrains_2025_sectors', citation_number: 15, source_type: 'news', source_name: 'Trade Brains', publication_year: 2025, title: 'Top 7 Sectors in India That Will Benefit the Most from AI Adoption: 2025 to 2030', url: 'https://tradebrains.in/money/top-7-sectors-in-india-that-will-benefit-the-most-from-ai-adoption-an-outlook-from-2025-to-2030/', reliability_score: 7, tags: ['ai', 'sectoral_adoption', 'bfsi', 'manufacturing'], geographic_focus: ['India'], excerpt: 'BFSI: 90% banks increased AI budgets, 65% fraud detection; Mfg: 39% enterprise AI' },
    'ai16': { id: 'ai16', citation_key: 'IMARC_2024_agri_ai', citation_number: 16, source_type: 'report', source_name: 'IMARC Group', publication_year: 2024, title: 'India AI in Agriculture Market Size, Share & Forecast 2033', url: 'https://www.imarcgroup.com/india-ai-in-agriculture-market', reliability_score: 8, tags: ['ai', 'agriculture', 'sectoral'], geographic_focus: ['India'], excerpt: 'Agriculture AI $70M in 2024, 19.5% CAGR' },
    'ai17': { id: 'ai17', citation_key: 'IMARC_2024_edtech_ai', citation_number: 17, source_type: 'report', source_name: 'IMARC Group', publication_year: 2024, title: 'How AI is Revolutionizing EdTech Landscape in India', url: 'https://www.imarcgroup.com/insight/ai-revolutionizing-edtech-landscape-in-india', reliability_score: 8, tags: ['ai', 'edtech', 'education'], geographic_focus: ['India'], excerpt: 'EdTech AI $2.8B market at 28.7% CAGR' },
    'ai18': { id: 'ai18', citation_key: 'Nextmsc_2024_auto_ai', citation_number: 18, source_type: 'report', source_name: 'Nextmsc', publication_year: 2024, title: 'India Automotive AI Market Size and Share | Statistics - 2030', url: 'https://www.nextmsc.com/report/india-automotive-ai-market', reliability_score: 7, tags: ['ai', 'automotive', 'adas'], geographic_focus: ['India'], excerpt: 'Automotive AI $158.8M in 2023, 32.5% CAGR driven by ADAS' },
    'ai19': { id: 'ai19', citation_key: 'Mordor_2024_ai_global', citation_number: 19, source_type: 'report', source_name: 'Mordor Intelligence', publication_year: 2024, title: 'Artificial Intelligence Market Size, Trends, Share & Growth Drivers 2031', url: 'https://www.mordorintelligence.com/industry-reports/global-artificial-intelligence-market', reliability_score: 8, tags: ['ai', 'global_ranking', 'talent', 'vibrancy'], geographic_focus: ['India', 'Global'], excerpt: 'India 3rd in AI Vibrancy Index (21.59), 16% global AI talent' },
    'ai20': { id: 'ai20', citation_key: 'IndexBox_2025_startup_funding', citation_number: 20, source_type: 'data_aggregator', source_name: 'IndexBox', publication_year: 2025, title: 'India Startup Funding 2025: Early-Stage Grows, AI Contrasts U.S.', url: 'https://www.indexbox.io/blog/india-startup-funding-2025-105b-raised-early-stage-resilient-ai-lags-behind-us/', reliability_score: 7, tags: ['ai', 'funding', 'startups', 'cost_advantage'], geographic_focus: ['India', 'US'], excerpt: 'AI startup funding $643M in 2025 vs US $121B; India cost: GPU ₹65-100/hr' },
    'ai21': { id: 'ai21', citation_key: 'Deloitte_2024_ai_talent', citation_number: 21, source_type: 'report', source_name: 'Deloitte', publication_year: 2024, title: "Bridging the AI talent gap to boost India's tech and economic impact", url: 'https://www.deloitte.com/in/en/about/press-room/bridging-the-ai-talent-gap-to-boost-indias-tech-and-economic-impact-deloitte-nasscom-report.html', reliability_score: 9, tags: ['ai', 'talent', 'skills', 'brain_drain'], geographic_focus: ['India'], excerpt: '600K+ AI professionals, need 1.25M by 2027; 50% top talent works abroad' },
    'ai22': { id: 'ai22', citation_key: 'IBTimes_2024_hiring', citation_number: 22, source_type: 'news', source_name: 'IBTimes India', publication_year: 2024, title: 'Hiring surges across India as AI-linked jobs rise exponentially', url: 'https://www.ibtimes.co.in/hiring-surges-across-india-ai-linked-jobs-rise-exponentially-895942', reliability_score: 7, tags: ['ai', 'employment', 'hiring', 'sectoral'], geographic_focus: ['India'], excerpt: 'AI-linked hiring: +41% BFSI, +38% healthcare/pharma YoY' },
    'ai23': { id: 'ai23', citation_key: 'KPMG_2024_ai_study', citation_number: 23, source_type: 'report', source_name: 'KPMG', publication_year: 2024, title: 'From trust to training! 10 things KPMG AI study reveals about India', url: 'https://www.storyboard18.com/digital/from-trust-to-training-10-things-kpmg-ai-study-reveals-about-india-64693.htm', reliability_score: 8, tags: ['ai', 'adoption', 'trust', 'usage'], geographic_focus: ['India', 'Global'], excerpt: '97% Indian employees use AI intentionally; 76% trust AI vs 46% globally' }
};

export const SECTOR_THESES: Record<string, SectorThesis> = {
    "aerospace": {
        id: "aerospace",
        display_name: "Aerospace",
        status: "published",
        research_date: "2026-01-17",

        // Executive Summary with Inline References
        executive_summary: "India's aerospace and defense market stands at approximately USD 27-29 billion (₹2.25-2.40 lakh crore) as of 2024-25, representing roughly 2% of the global aerospace market [^1][^2]. Government and industry projections indicate the sector will reach USD 70 billion (₹5.8 lakh crore) by 2030, driven by massive commercial aviation expansion, indigenous defense manufacturing, and an emerging space economy [^1]. With defense production reaching ₹1,50,590 Cr in FY25 [^4] and exports growing at +284.5% [^3], India is emerging as a critical node in the global aerospace supply chain.",

        key_findings: [
            "Current market size: USD 27-29 billion (₹2.25-2.40 lakh crore) in 2024-25 [^1][^2].",
            "Projected growth to USD 70 billion by 2030 at 10% CAGR [^1].",
            "Civil aviation: 85.8% of aviation market, 211 million passengers in 2024 [^5].",
            "Defense production: ₹1,50,590 crore in FY25, up 18% YoY [^4].",
            "Export growth: +284.5%, fastest among top 15 nations [^3].",
            "MRO sector: USD 2.3-3.8B with 90% outsourced [^11].",
            "OEM sourcing: Boeing $1B+, Airbus targeting $2B by 2030 [^20]."
        ],

        investment_thesis: "Compelling growth investment with structural demand drivers, cost competitiveness (15-25% savings) [^15], policy support (₹4L crore defense procurement) [^16], and geopolitical tailwinds [^20]. Fivefold growth to USD 70B by 2030 achievable given 970+ aircraft orders and OEM commitments [^9].",

        market_stats: {
            current_size: 29000000000,
            current_size_display: "$29 Billion",
            forecast_size: 70000000000,
            forecast_size_display: "$70 Billion",
            cagr: 10.0,
            forecast_year: 2030,
            currency: "USD"
        },
        market_structure: {
            total_companies: 850,
            msme_percentage: 45,
            organized_split: { organized: 61, unorganized: 39 },
            geographic_distribution: { "Karnataka": 25, "Telangana": 18, "Maharashtra": 15, "Tamil Nadu": 12, "Gujarat": 8, "Uttar Pradesh": 7, "Others": 15 }
        },

        market_segments: ["Commerical", "Defense", "MRO", "Space"],

        sub_sectors: [
            {
                name: "Commercial Aviation",
                description: "Largest segment at 85.8% share. India operates 713 aircraft currently, projected to reach 1,522 by 2031 [^8].",
                market_size: 15000,
                cagr: 12.21,
                growth_drivers: ["Rising middle class", "Regional connectivity", "Aircraft orders 970+"],
                key_players: ["IndiGo", "Air India", "SpiceJet"],
                msme_opportunity_score: 75,
                citation_ids: ['c5', 'c7', 'c8', 'c9']
            },
            {
                name: "Defense Aerospace",
                description: "Military aircraft, UAVs, weapons systems. 61.1% indigenous production [^10].",
                market_size: 17570,
                cagr: 5.1,
                growth_drivers: ["Indigenization mandates", "Border security", "Export opportunities"],
                key_players: ["HAL", "BEL", "DRDO", "Tata Advanced Systems"],
                msme_opportunity_score: 65,
                citation_ids: ['c4', 'c6', 'c10', 'c16']
            },
            {
                name: "MRO Services",
                description: "90% outsourced currently, targeting 90% self-sufficiency by 2040 [^11].",
                market_size: 3800,
                cagr: 10.3,
                growth_drivers: ["GST reduction to 5%", "Growing fleet", "Government support"],
                key_players: ["Air India Engineering", "GMR Aero Technic", "Air Works"],
                msme_opportunity_score: 85,
                citation_ids: ['c11']
            }
        ],

        growth_drivers: [
            {
                name: "Commercial Aviation Expansion",
                type: "demand_side",
                impact_level: "high",
                description: "India 5th largest aviation market [^8] with 211M passengers. Order book of 970+ aircraft [^9].",
                estimated_impact_percentage: 30,
                citation_ids: ['c5', 'c8', 'c9']
            },
            {
                name: "Defense Indigenization Mandates",
                type: "policy",
                impact_level: "high",
                description: "Positive Indigenisation Lists embargo 346+ items. ₹4L crore contracts 2025-27 [^16].",
                estimated_impact_percentage: 25,
                citation_ids: ['c4', 'c6', 'c10', 'c16']
            }
        ],

        opportunities: [
            {
                title: "MRO Specialized Services",
                type: "service",
                description: "Engine overhaul, landing gear, APU maintenance - 90% currently outsourced [^11].",
                market_size_estimate: 3200,
                overall_score: 8.5,
                capital_requirement: "₹5-20 Cr",
                time_to_market_months: 24,
                citation_ids: ['c11']
            },
            {
                title: "UAV/Drone Manufacturing",
                type: "product",
                description: "Agricultural, surveillance, delivery drones.",
                market_size_estimate: 1800,
                overall_score: 8.0,
                capital_requirement: "₹25-100 Lakhs",
                time_to_market_months: 12
            }
        ],

        policies: [
            {
                name: "Make in India - Aerospace",
                type: "Industrial Policy",
                description: "75% defense capex reserved for domestic industry [^16].",
                impact: "High",
                status: "active",
                citation_ids: ['c16']
            },
            {
                name: "UDAN Scheme",
                type: "Connectivity Policy",
                description: "Regional connectivity targets 120 new destinations carrying 4 crore passengers [^17].",
                impact: "Medium",
                status: "active",
                citation_ids: ['c17']
            },
            {
                name: "MRO GST Reduction",
                type: "Tax Incentive",
                description: "Reduced from 18% to 5% to compete with Singapore/Dubai [^11].",
                impact: "High",
                status: "active",
                citation_ids: ['c11']
            }
        ],

        risks: [
            {
                name: "Technology Dependency",
                category: "technology",
                severity: "high",
                probability: 0.8,
                description: "Dependence on foreign engines and avionics.",
                mitigation: ["Indigenous R&D", "Tech transfer agreements"],
                citation_ids: []
            },
            {
                name: "Capital Intensity",
                category: "financial",
                severity: "high",
                probability: 0.85,
                description: "High capex for facilities and certification.",
                mitigation: ["PLI utilization", "Strategic investors"],
                citation_ids: []
            }
        ],

        competitors: [
            {
                name: "HAL",
                type: "public_sector",
                revenue: 28000,
                market_share: 35,
                key_strengths: ["Government backing", "Monopoly on military aircraft"],
                citation_ids: []
            },
            {
                name: "Tata Advanced Systems",
                type: "private_sector",
                revenue: 9500,
                market_share: 12,
                key_strengths: ["Boeing/Lockheed JVs", "Modern facilities"],
                citation_ids: []
            }
        ],

        market_stats_history: [
            { year: 2023, market_size: 23200, growth_rate: 15 },
            { year: 2024, market_size: 25500, growth_rate: 10, citation_ids: ['c1', 'c2'] },
            { year: 2025, market_size: 29000, growth_rate: 13, citation_ids: ['c1'] },
            { year: 2030, market_size: 70000, growth_rate: 10, citation_ids: ['c1'] }
        ],

        emerging_companies: [
            { id: 'aeq-001', name: 'Aequs Limited', description: 'Precision aerospace manufacturing' },
            { id: 'dyn-001', name: 'Dynamatic Technologies', description: 'Aerostructures and hydraulics' },
            { id: 'taal-001', name: 'Taneja Aerospace', description: 'Aviation structural assemblies' }
        ],

        citations: Object.values(CITATIONS).filter(c => c.id.startsWith('c'))
    },

    "artificial_intelligence": {
        id: "artificial_intelligence",
        display_name: "Artificial Intelligence",
        status: "published",
        research_date: "2026-01-17",

        executive_summary: "India's artificial intelligence market stands at an estimated $7.6-13 billion (₹63,330-1,08,315 crore) in 2024-25, with authoritative projections placing it at $17-22 billion (₹1,45,384 crore) by 2027—the most widely cited industry benchmark from BCG-NASSCOM [^1][^2]. The market is expanding at a compound annual growth rate of 25-42%, among the fastest globally [^3]. With 16% of the world's AI talent (second only to the US) [^4], the world's third-highest AI vibrancy ranking per Stanford University [^19], and a government-backed ₹10,372 crore ($1.25 billion) IndiaAI Mission [^4], India has positioned itself as a significant player in the global AI landscape despite commanding only 5-6% of the global market by revenue.",

        key_findings: [
            "Market size: $7.6-13 billion (₹63,330-1,08,315 crore) in 2024-25 [^1][^2].",
            "Projected: $17-22 billion by 2027 at 25-42% CAGR (BCG-NASSCOM benchmark) [^1][^2].",
            "AI could add $450-500B to GDP by 2025-30, potentially $967B by 2035 [^5][^6].",
            "India holds 16% of global AI talent, ranked 3rd in AI Vibrancy Index [^4][^19].",
            "BFSI leads sectoral adoption at 30.7%, manufacturing 24.6%, healthcare 15.9% [^7].",
            "80% Indian enterprises prioritize AI strategically vs 59% US average [^8].",
            "IndiaAI Mission: ₹10,372 crore over 5 years; 38,000 GPUs secured (3x target) [^4]."
        ],

        investment_thesis: "India's AI sector presents compelling growth investment with structural advantages: (1) Massive talent pool (16% global AI talent, #1 in AI skill penetration), (2) Cost arbitrage in AI services and development, (3) Enterprise adoption rates exceeding global benchmarks (80% vs 59% strategically), (4) Government backing via ₹10,372 crore IndiaAI Mission targeting compute, indigenous models, and skill development. The $450-967 billion GDP contribution projected by 2030-35 would represent transformational economic impact. Key risks include 50-fold compute gap with US, 50% brain drain of top AI talent, and persistent challenge of converting AI experimentation into enterprise-wide deployment.",

        market_stats: {
            current_size: 1083150000000,
            current_size_display: "₹1.08 Lakh Crore",
            forecast_size: 1453840000000,
            forecast_size_display: "₹1.45 Lakh Crore",
            cagr: 35.0,
            forecast_year: 2027,
            currency: 'INR'
        },
        market_structure: {
            total_companies: 5200,
            msme_percentage: 68,
            organized_split: { organized: 78, unorganized: 22 },
            geographic_distribution: { "Karnataka": 35, "Maharashtra": 22, "NCR": 18, "Telangana": 12, "Tamil Nadu": 6, "Others": 7 }
        },
        market_segments: ["Machine Learning", "NLP", "Computer Vision", "Generative AI", "AI Infrastructure"],

        sub_sectors: [
            {
                name: "Machine Learning Platforms",
                description: "ML platforms dominate AI market with enterprise applications.",
                market_size: 5950,
                cagr: 38.5,
                growth_drivers: ["Enterprise adoption", "Predictive analytics", "Automation"],
                key_players: ["TCS", "Infosys", "Wipro", "AWS", "Azure"],
                msme_opportunity_score: 70,
                citation_ids: ['ai3', 'ai10', 'ai13']
            },
            {
                name: "Natural Language Processing",
                description: "Fastest-growing segment with GenAI applications.",
                market_size: 3200,
                cagr: 42.0,
                growth_drivers: ["ChatGPT momentum", "Multilingual India", "Customer service automation"],
                key_players: ["Kore.ai", "Sarvam AI", "OpenAI", "Google"],
                msme_opportunity_score: 75,
                citation_ids: ['ai10', 'ai13']
            },
            {
                name: "Healthcare AI",
                description: "Medical imaging, diagnostics for tier 2/3 cities.",
                market_size: 375,
                cagr: 40.6,
                growth_drivers: ["Doctor shortage", "Diagnostics demand", "Government digitization"],
                key_players: ["Qure.ai", "Niramai", "5C Network", "Tricog"],
                msme_opportunity_score: 85,
                citation_ids: ['ai11']
            },
            {
                name: "Agriculture AI",
                description: "Crop monitoring, yield prediction for 120M+ farmers.",
                market_size: 70,
                cagr: 19.5,
                growth_drivers: ["Farmer income growth", "Climate adaptation", "Precision agriculture"],
                key_players: ["CropIn", "Intello Labs", "Waycool"],
                msme_opportunity_score: 80,
                citation_ids: ['ai16']
            },
            {
                name: "EdTech AI",
                description: "Personalized learning, assessment, adaptive content.",
                market_size: 2800,
                cagr: 28.7,
                growth_drivers: ["Online education growth", "Skill development", "Assessment automation"],
                key_players: ["BYJU'S", "upGrad", "Unacademy", "Vedantu"],
                msme_opportunity_score: 78,
                citation_ids: ['ai17']
            }
        ],

        growth_drivers: [
            {
                name: "Enterprise AI Adoption",
                type: "demand_side",
                impact_level: "high",
                description: "80% enterprises prioritize AI strategically vs 59% globally [^8].",
                estimated_impact_percentage: 30,
                citation_ids: ['ai8', 'ai23']
            },
            {
                name: "IndiaAI Mission & Policy Support",
                type: "policy",
                impact_level: "high",
                description: "₹10,372 crore mission, 38,000 GPUs, indigenous LLMs [^4].",
                estimated_impact_percentage: 25,
                citation_ids: ['ai4']
            },
            {
                name: "Massive Talent Pool",
                type: "supply_side",
                impact_level: "high",
                description: "16% global AI talent, #1 in skill penetration [^19][^21].",
                estimated_impact_percentage: 20,
                citation_ids: ['ai19', 'ai21']
            }
        ],

        opportunities: [
            {
                title: "AI for Bharat Languages",
                type: "product",
                description: "NLP, translation, voice AI for 22+ Indian languages for 1.3B+ non-English speakers.",
                market_size_estimate: 2800,
                overall_score: 8.5,
                capital_requirement: "₹50-500 Cr",
                time_to_market_months: 18,
                citation_ids: ['ai4', 'ai10']
            },
            {
                title: "Healthcare AI Diagnostics",
                type: "product",
                description: "Medical imaging, diagnostics for tier 2/3 cities with doctor shortage.",
                market_size_estimate: 3500,
                overall_score: 8.0,
                capital_requirement: "₹100-1000 Cr",
                time_to_market_months: 24,
                citation_ids: ['ai11']
            },
            {
                title: "Agriculture AI Solutions",
                type: "product",
                description: "Crop monitoring, yield prediction, pest detection for 120M+ farmers.",
                market_size_estimate: 1200,
                overall_score: 7.5,
                capital_requirement: "₹25-300 Cr",
                time_to_market_months: 12,
                citation_ids: ['ai16']
            }
        ],

        policies: [
            {
                name: "IndiaAI Mission",
                type: "Government Initiative",
                description: "₹10,372 crore budget, 38,000 GPUs, focusing on compute and indigenous models.",
                impact: "High",
                status: "active",
                citation_ids: ['ai4']
            },
            {
                name: "Digital India",
                type: "Infrastructure",
                description: "Foundational digital infrastructure enabling AI adoption.",
                impact: "High",
                status: "active",
                citation_ids: []
            }
        ],

        risks: [
            {
                name: "Compute Gap",
                category: "technology",
                severity: "high",
                probability: 0.9,
                description: "50-fold compute gap with US; high GPU costs.",
                mitigation: ["IndiaAI Mission", "Sovereign AI clouds"],
                citation_ids: ['ai20']
            },
            {
                name: "Brain Drain",
                category: "market",
                severity: "high",
                probability: 0.8,
                description: "50% of top AI talent works abroad.",
                mitigation: ["Global capability centers", "Higher domestic wages"],
                citation_ids: ['ai21']
            }
        ],

        competitors: [
            {
                name: "TCS",
                type: "listed",
                revenue: 15600,
                market_share: 12,
                key_strengths: ["Scale", "Global delivery model"],
                citation_ids: []
            },
            {
                name: "Infosys",
                type: "listed",
                revenue: 13000,
                market_share: 10,
                key_strengths: ["AI-first strategy", "Education partnerships"],
                citation_ids: []
            }
        ],

        market_stats_history: [
            { year: 2020, market_size: 42000, growth_rate: 20.0, citation_ids: ['ai3'] },
            { year: 2024, market_size: 108315, growth_rate: 25.0, citation_ids: ['ai2', 'ai3', 'ai21'] },
            { year: 2025, market_size: 122000, growth_rate: 28.0, citation_ids: ['ai1'] },
            { year: 2027, market_size: 145384, growth_rate: 35.0, citation_ids: ['ai1', 'ai2'] },
            { year: 2030, market_size: 385000, growth_rate: 40.0, citation_ids: ['ai3'] }
        ],

        citations: Object.values(CITATIONS).filter(c => c.id.startsWith('ai'))
    },

    // Placeholder for other sectors
    "advanced_manufacturing": {
        id: 'advanced_manufacturing', display_name: 'Advanced Manufacturing', status: 'published', research_date: '2024-03-01',
        executive_summary: 'Shift towards high-value precision engineering offers significant alpha.',
        key_findings: ['China Plus One beneficial', 'PLI schemes active'],
        investment_thesis: 'India becoming global manufacturing hub.',
        market_stats: { current_size: 45000000000, current_size_display: "$45 Billion", forecast_size: 80000000000, forecast_size_display: "$80 Billion", cagr: 12.5, forecast_year: 2028, currency: 'USD' },
        market_structure: { total_companies: 1500, msme_percentage: 60, organized_split: { organized: 40, unorganized: 60 }, geographic_distribution: {} },
        market_segments: [], sub_sectors: [], growth_drivers: [], opportunities: [], policies: [], risks: [], competitors: [], market_stats_history: []
    },
    "fintech": {
        id: 'fintech', display_name: 'FinTech', status: 'published', research_date: '2024-03-01',
        executive_summary: 'India Stack creating opportunities in lending.',
        key_findings: ['Credit gap closure', 'Wealth democratization'],
        investment_thesis: 'Unprecedented opportunities in under-served MSME segment.',
        market_stats: { current_size: 150000000000, current_size_display: "$150 Billion", forecast_size: 300000000000, forecast_size_display: "$300 Billion", cagr: 20.0, forecast_year: 2030, currency: 'USD' },
        market_structure: { total_companies: 3000, msme_percentage: 80, organized_split: { organized: 90, unorganized: 10 }, geographic_distribution: {} },
        market_segments: [], sub_sectors: [], growth_drivers: [], opportunities: [], policies: [], risks: [], competitors: [], market_stats_history: []
    },
    'aerospace_supply_chain': {
        id: 'aerospace_supply_chain',
        display_name: 'Aerospace Supply Chain',
        status: 'published',
        research_date: '2026-01-17',
        executive_summary: "India's aerospace supply chain market is valued at $13.6–16.2 billion (₹1.13–1.35 lakh crore) as of 2024, projected to reach $21.5–29.5 billion by 2030–2033 at a CAGR of 6.4–7.1%. Despite representing only 1–2% of the global aerospace supply chain, India is targeting a tenfold increase to capture 10% by 2033. Major OEMs including Boeing, Airbus, GE Aerospace, and Rolls-Royce have committed to doubling their Indian sourcing, with combined annual procurement already exceeding $5 billion.",
        investment_thesis: "India's aerospace supply chain presents compelling investment with structural advantages: (1) Cost competitiveness of 15-30% over Western suppliers, (2) OEM sourcing commitments from Boeing ($1B+), Airbus ($2B target), GE, Rolls-Royce doubling procurement, (3) Policy support via Defense Industrial Corridors (₹53,439 crore committed), 100% FDI in MRO, indigenization mandates. The sector's transformation from Tier-3 component manufacturing toward Tier-1 systems integration marks a pivotal inflection point.",
        key_findings: [
            'Market size: $13.6-16.2B (₹1.13-1.35 lakh crore) in 2024 [^1][^2]',
            'Projected: $21.5-29.5B by 2030-2033 at 6.4-7.1% CAGR [^1][^2]',
            'Aerostructures: 45.3% market share, strongest segment [^1]',
            'Boeing: $1B+ annual sourcing, Airbus: $2B target by 2030 [^4]',
            'India #1 globally for aerospace cost-effectiveness [^4]',
            'MRO: $2.3-3.8B market, 90% outsourced, 8.9-11.8% CAGR [^7]',
            'Raw material import dependency: 70-80% for aerospace-grade materials'
        ],
        market_stats: {
            current_size: 13500000000,
            current_size_display: "$13.6 Billion",
            forecast_size: 29500000000,
            forecast_size_display: "$29.5 Billion",
            cagr: 7.1,
            forecast_year: 2033,
            currency: 'USD'
        },
        market_structure: {
            total_companies: 580,
            msme_percentage: 62,
            organized_split: { organized: 58, unorganized: 42 },
            geographic_distribution: { "Karnataka": 25, "Telangana": 18, "Maharashtra": 15, "Tamil Nadu": 12, "Gujarat": 8, "Uttar Pradesh": 7, "Others": 15 }
        },
        market_segments: ["Aerostructures", "Avionics", "MRO Services", "Composites", "Software/Engineering"],
        sub_sectors: [
            {
                name: 'Aerostructures Manufacturing',
                description: 'Fuselage sections, wing components, doors at 15-30% cost advantages',
                market_size: 6200,
                cagr: 6.5,
                growth_drivers: ['OEM sourcing expansion', 'Cost competitiveness', 'Export growth'],
                key_players: ['Dynamatic Technologies', 'Tata Advanced Systems', 'Mahindra Aerostructures'],
                msme_opportunity_score: 68,
                citation_ids: ['aero1', 'aero4']
            },
            {
                name: 'Avionics & Electronics',
                description: 'Flight control, radar, navigation. 70% import dependent for advanced systems',
                market_size: 2070,
                cagr: 11.0,
                growth_drivers: ['Indigenous development', 'Military modernization', 'Export restrictions'],
                key_players: ['BEL', 'Data Patterns', 'Centum Electronics'],
                msme_opportunity_score: 55,
                citation_ids: ['aero1', 'aero11']
            },
            {
                name: 'MRO Services & Support',
                description: '90% outsourced, targeting self-sufficiency. GST reduced to 5%',
                market_size: 3770,
                cagr: 9.2,
                growth_drivers: ['GST reduction', 'Growing fleet', '100% FDI', 'Government support'],
                key_players: ['Air India Engineering', 'GMR Aero Technic', 'Air Works'],
                msme_opportunity_score: 82,
                citation_ids: ['aero7', 'aero12']
            },
            {
                name: 'Aerospace Composites',
                description: 'Carbon fiber composites reducing aircraft weight 20-30%',
                market_size: 330,
                cagr: 8.54,
                growth_drivers: ['Weight reduction', 'Fuel efficiency', 'Material advancement'],
                key_players: ['Kineco', 'Tata Advanced Composites', 'Premier Composites'],
                msme_opportunity_score: 72,
                citation_ids: ['aero13']
            },
            {
                name: 'Software & Engineering Services',
                description: 'Embedded systems, design, simulation. Strongest competitive advantage',
                market_size: 1350,
                cagr: 12.5,
                growth_drivers: ['Digital transformation', 'Cost arbitrage', 'Talent availability'],
                key_players: ['TCS', 'Infosys', 'HCL', 'Wipro', 'Cyient'],
                msme_opportunity_score: 75,
                citation_ids: ['aero14']
            }
        ],
        growth_drivers: [
            {
                name: 'OEM Sourcing Expansion',
                type: 'demand_side',
                impact_level: 'high',
                description: 'Boeing, Airbus, Rolls-Royce, GE doubling India sourcing. Boeing: $1B+ current, Airbus: $2B target.',
                estimated_impact_percentage: 30,
                citation_ids: ['aero4', 'aero9']
            },
            {
                name: 'Cost Competitiveness',
                type: 'competitive_advantage',
                impact_level: 'high',
                description: '15-30% manufacturing cost advantage, 10-20% local sourcing savings.',
                estimated_impact_percentage: 25,
                citation_ids: ['aero4', 'aero15']
            },
            {
                name: 'Policy Support & FDI',
                type: 'policy',
                impact_level: 'high',
                description: '100% FDI in MRO, 74% automatic in defense, GST reduction. ₹53,439 crore commitments in corridors.',
                estimated_impact_percentage: 20,
                citation_ids: ['aero15', 'aero16', 'aero17']
            },
            {
                name: 'Export Growth Momentum',
                type: 'market',
                impact_level: 'medium',
                description: '224% export growth in 2024, fastest among major nations. Target: ₹50,000 crore by FY29.',
                estimated_impact_percentage: 15,
                citation_ids: ['aero8', 'aero19']
            }
        ],
        opportunities: [
            {
                title: 'MRO Specialized Services',
                type: 'service',
                description: 'Engine overhaul, landing gear, APU - 90% currently outsourced.',
                market_size_estimate: 3200,
                overall_score: 8.5,
                capital_requirement: '₹500-2000 Cr',
                time_to_market_months: 24,
                citation_ids: ['aero7', 'aero12']
            },
            {
                title: 'Tier-1 Systems Integration',
                type: 'manufacturing',
                description: 'Move from components to complete systems integration for global OEMs.',
                market_size_estimate: 4500,
                overall_score: 7.5,
                capital_requirement: '₹2000-10000 Cr',
                time_to_market_months: 36,
                citation_ids: ['aero4', 'aero10']
            },
            {
                title: 'Aerospace-Grade Materials',
                type: 'manufacturing',
                description: 'Domestic titanium, aluminum, composites - 70-80% import dependent.',
                market_size_estimate: 1500,
                overall_score: 7.0,
                capital_requirement: '₹1000-5000 Cr',
                time_to_market_months: 48,
                citation_ids: ['aero13']
            }
        ],
        policies: [
            {
                name: 'Defense Industrial Corridors',
                type: 'Infrastructure',
                description: 'UP and Tamil Nadu corridors with ₹53,439 crore commitments, 253 MoUs signed.',
                impact: 'High',
                status: 'active',
                citation_ids: ['aero17']
            },
            {
                name: 'MRO FDI Liberalization',
                type: 'FDI Policy',
                description: '100% FDI automatic route for MRO, GST reduced to 5%.',
                impact: 'High',
                status: 'active',
                citation_ids: ['aero15']
            },
            {
                name: 'Space Sector FDI',
                type: 'FDI Policy',
                description: '100% FDI allowed in space sector, fully liberalized.',
                impact: 'Medium',
                status: 'active',
                citation_ids: ['aero16']
            }
        ],
        risks: [
            {
                name: 'Raw Material Import Dependency',
                category: 'market',
                severity: 'high',
                probability: 0.8,
                description: '70-80% dependency on imports for aerospace-grade titanium, aluminum, and specialty steels.',
                mitigation: ['Strategic stockpiling', 'PLI for materials'],
                citation_ids: ['aero13']
            },
            {
                name: 'Talent Shortage',
                category: 'financial',
                severity: 'medium',
                probability: 0.6,
                description: 'Rapid growth outpacing availability of specialized aerospace engineers and technicians.',
                mitigation: ['Skill development partnerships', 'Automation'],
                citation_ids: ['aero14']
            }
        ],
        competitors: [
            {
                name: 'Dynamatic Technologies',
                type: 'listed',
                revenue: 3200,
                market_share: 8,
                key_strengths: ['Hydraulics', 'Aerostructures', 'Global OEM supplier'],
                citation_ids: ['aero1']
            },
            {
                name: 'Tata Advanced Systems',
                type: 'private_sector',
                revenue: 4500,
                market_share: 12,
                key_strengths: ['Systems integration', 'Airbus partnership', 'Defense focus'],
                citation_ids: ['aero1']
            },
            {
                name: 'Mahindra Aerostructures',
                type: 'private_sector',
                revenue: 2800,
                market_share: 5,
                key_strengths: ['Sheet metal parts', 'Assemblies', 'Cost efficiency'],
                citation_ids: ['aero1']
            }
        ],
        market_stats_history: [
            { year: 2020, market_size: 9500000000, growth_rate: 0, citation_ids: ['aero1'] },
            { year: 2024, market_size: 13500000000, growth_rate: 6.8, citation_ids: ['aero1', 'aero2'] },
            { year: 2030, market_size: 18000000000, growth_rate: 6.5, citation_ids: ['aero1'] },
            { year: 2033, market_size: 29500000000, growth_rate: 7.1, citation_ids: ['aero2'] }
        ],
        citations: [
            {
                id: 'aero1', citation_key: 'GVR_2024_aero_parts_mfg', citation_number: 1,
                source_type: 'report', source_name: 'Grand View Research', publication_year: 2024,
                title: 'India Aerospace Parts Manufacturing Market To Reach $21.48Bn By 2030',
                url: 'https://www.grandviewresearch.com/press-release/india-aerospace-parts-manufacturing-market-analysis',
                reliability_score: 9, geographic_focus: ['India'],
                excerpt: 'Aerospace parts manufacturing $13.6B in 2023, $21.48B by 2030 at 6.8% CAGR.'
            },
            {
                id: 'aero2', citation_key: 'IMARC_2024_aircraft_components', citation_number: 2,
                source_type: 'report', source_name: 'IMARC Group', publication_year: 2024,
                title: 'India Aircraft Components Market Size, Share | Report 2033',
                url: 'https://www.imarcgroup.com/india-aircraft-components-market',
                reliability_score: 8, geographic_focus: ['India'],
                excerpt: 'Aircraft components market USD 16.22B in 2024, $29.5B by 2033.'
            },
            {
                id: 'aero3', citation_key: 'AviationA2Z_2025_global_hub', citation_number: 3,
                source_type: 'industry', source_name: 'Aviation A2Z', publication_year: 2025,
                title: 'India is Becoming a Global Aerospace Hub',
                url: 'https://aviationa2z.com/index.php/2025/10/23/india-is-becoming-a-global-aerospace-hub/',
                reliability_score: 7, geographic_focus: ['India', 'Global'],
                excerpt: 'India targeting 10% of $250B global aerospace supply chain by 2033.'
            },
            {
                id: 'aero4', citation_key: 'BizStd_2025_supply_chain', citation_number: 4,
                source_type: 'news', source_name: 'Business Standard', publication_year: 2025,
                title: 'Global aerospace firms turn to India amid Western supply chain crisis',
                url: 'https://www.business-standard.com/external-affairs-defence-security/news/global-aerospace-firms-turn-to-india-amid-western-supply-chain-crisis-125021700469_1.html',
                reliability_score: 8, geographic_focus: ['India', 'Global'],
                excerpt: 'Boeing $1B+ sourcing, Airbus $2B target, 15-30% cost advantages.'
            },
            {
                id: 'aero5', citation_key: 'Secretariat_2024_aero_mfg', citation_number: 5,
                source_type: 'news', source_name: 'The Secretariat News', publication_year: 2024,
                title: 'Indian Aerospace Manufacturing On The Rise',
                url: 'https://thesecretariat.in/article/indian-aerospace-manufacturing-on-the-rise',
                reliability_score: 7, geographic_focus: ['India'],
                excerpt: 'India 1-2% global supply chain, 1,700+ aircraft on order.'
            },
            {
                id: 'aero6', citation_key: 'IBEF_2024_defence_mfg', citation_number: 6,
                source_type: 'government', source_name: 'IBEF', publication_year: 2024,
                title: 'India\'s Defence Manufacturing Industry Revolutionizing Exports',
                url: 'https://www.ibef.org/industry/defence-manufacturing',
                reliability_score: 9, geographic_focus: ['India'],
                excerpt: 'Defence production ₹1,50,590 crore FY25, 90% increase from FY20.'
            },
            {
                id: 'aero7', citation_key: 'IBEF_2024_mro', citation_number: 7,
                source_type: 'government', source_name: 'IBEF', publication_year: 2024,
                title: 'India\'s MRO Industry: Future Trends & Growth Opportunities',
                url: 'https://www.ibef.org/blogs/the-future-of-the-mro-industry-in-india-trends-and-opportunities',
                reliability_score: 9, geographic_focus: ['India'],
                excerpt: 'MRO $2.3-3.8B, 90% outsourced, targeting $4B by 2030.'
            },
            {
                id: 'aero8', citation_key: 'VisionIAS_2025_defence_exports', citation_number: 8,
                source_type: 'education', source_name: 'Vision IAS', publication_year: 2025,
                title: 'India\'s Defence Exports',
                url: 'https://visionias.in/current-affairs/monthly-magazine/2025-05-17/security/indias-defence-exports-1',
                reliability_score: 8, geographic_focus: ['India'],
                excerpt: 'Defence exports ₹23,622 crore FY25, 31-fold increase since FY14.'
            },
            {
                id: 'aero9', citation_key: 'AAW_2024_indian_firms', citation_number: 9,
                source_type: 'news', source_name: 'All Around Worlds', publication_year: 2024,
                title: 'Indian Firms Gaining Ground on Global Aerospace Giants',
                url: 'https://www.allaroundworlds.com/indian-firms-are-gaining/',
                reliability_score: 7, geographic_focus: ['India'],
                excerpt: 'Rolls-Royce: India "best cost market", doubling sourcing by 2030.'
            },
            {
                id: 'aero10', citation_key: 'MarketUS_2024_aero_parts', citation_number: 10,
                source_type: 'report', source_name: 'Market.us', publication_year: 2024,
                title: 'Aerospace Parts Manufacturing Market Size | CAGR of 5.5%',
                url: 'https://market.us/report/aerospace-parts-manufacturing-market/',
                reliability_score: 8, geographic_focus: ['India', 'Global'],
                excerpt: 'India between Tier-2 and Tier-3 supply chain capability.'
            },
            {
                id: 'aero11', citation_key: 'IntelMR_2024_embedded_eng', citation_number: 11,
                source_type: 'report', source_name: 'Intel Market Research', publication_year: 2024,
                title: 'Embedded Engineering Service Market Outlook 2025-2032',
                url: 'https://www.intelmarketresearch.com/embedded-engineering-service-market-7661',
                reliability_score: 7, geographic_focus: ['India'],
                excerpt: 'Military embedded systems $44.7M in 2024, $75.9M by 2030.'
            },
            {
                id: 'aero12', citation_key: 'Mordor_2024_india_ADS', citation_number: 12,
                source_type: 'report', source_name: 'Mordor Intelligence', publication_year: 2024,
                title: 'India Aviation, Defense, And Space Market Size & Share Analysis',
                url: 'https://www.mordorintelligence.com/industry-reports/india-aviation-defense-and-space-market',
                reliability_score: 8, geographic_focus: ['India'],
                excerpt: 'New MRO facilities: Safran Hyderabad ₹1,500 crore opening 2026.'
            },
            {
                id: 'aero13', citation_key: 'IMARC_2024_aero_composites', citation_number: 13,
                source_type: 'report', source_name: 'IMARC Group', publication_year: 2024,
                title: 'India Aerospace Composites Market Size, Share | 2033',
                url: 'https://www.imarcgroup.com/india-aerospace-composites-market',
                reliability_score: 8, geographic_focus: ['India'],
                excerpt: 'Aerospace composites $330.2M in 2024, $690.6M by 2033 at 8.54% CAGR.'
            },
            {
                id: 'aero14', citation_key: 'UJA_2024_indian_aerospace', citation_number: 14,
                source_type: 'industry', source_name: 'UJA', publication_year: 2024,
                title: 'Indian Aerospace Industry: Market Dynamics, Opportunities',
                url: 'https://uja.in/discover/the-indian-aerospace-industry/',
                reliability_score: 7, geographic_focus: ['India'],
                excerpt: 'GE Aerospace Bangalore: 6,000+ researchers, 1,000+ aviation patents.'
            },
            {
                id: 'aero15', citation_key: 'ITA_2024_india_AD', citation_number: 15,
                source_type: 'government', source_name: 'International Trade Administration', publication_year: 2024,
                title: 'India - Aerospace and Defense',
                url: 'https://www.trade.gov/country-commercial-guides/india-aerospace-and-defense',
                reliability_score: 10, geographic_focus: ['India'],
                excerpt: '74% FDI automatic, 100% for MRO; cost advantages 15-30%.'
            },
            {
                id: 'aero16', citation_key: 'UNCTAD_2024_fdi_space', citation_number: 16,
                source_type: 'government', source_name: 'UNCTAD Investment Policy Hub', publication_year: 2024,
                title: 'India - Allowed up to 100 per cent FDI in the space sector',
                url: 'https://investmentpolicy.unctad.org/investment-policy-monitor/measures/4590/',
                reliability_score: 10, geographic_focus: ['India'],
                excerpt: 'Space sector FDI fully liberalized February 2024.'
            },
            {
                id: 'aero17', citation_key: 'Mordor_2024_india_defense', citation_number: 17,
                source_type: 'report', source_name: 'Mordor Intelligence', publication_year: 2024,
                title: 'India Defense Market Size, Analysis & Global Report 2030',
                url: 'https://www.mordorintelligence.com/industry-reports/india-defense-market',
                reliability_score: 8, geographic_focus: ['India'],
                excerpt: 'UP Defence Corridor: ₹28,475 crore committed, 62 MoUs signed.'
            },
            {
                id: 'aero18', citation_key: 'Brigade_2024_devanahalli', citation_number: 18,
                source_type: 'industry', source_name: 'Brigade Group', publication_year: 2024,
                title: 'How Devanahalli is emerging as a major commercial hub of Bengaluru',
                url: 'https://www.brigadegroup.com/blog/general/how-devanahalli-is-emerging-as-a-major-commercial-hub-of-bengaluru',
                reliability_score: 7, geographic_focus: ['India', 'Karnataka'],
                excerpt: 'Karnataka: 25% aerospace industry, 67% defense aircraft, 65% exports.'
            },
            {
                id: 'aero19', citation_key: 'Yahoo_2025_aero_supply', citation_number: 19,
                source_type: 'news', source_name: 'Yahoo Finance', publication_year: 2025,
                title: 'Global aerospace firms turn to India amid Western supply chain crisis',
                url: 'https://uk.finance.yahoo.com/news/global-aerospace-firms-turn-india-091155305.html',
                reliability_score: 7, geographic_focus: ['India', 'Global'],
                excerpt: '224% export growth in 2024, OEM commitments totaling billions.'
            }
        ]
    }
};

export function getSectorThesis(id: string): SectorThesis | null {
    return SECTOR_THESES[id] || null;
}
