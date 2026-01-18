
export const SEARCH_INDEX = {
    'market size electronics manufacturing': {
        answer: 'The Indian electronics manufacturing market is valued at ₹7.5 lakh crores (2024) and growing at 15% CAGR. Key segments include consumer electronics (40%), auto electronics (25%), industrial (20%), and defense (15%). MSMEs have significant opportunities in components, sub-assemblies, and niche products.',
        sources: ['IBEF Advanced Manufacturing Report 2024', 'NITI Aayog Strategy'],
    },
    'pli scheme electronics': {
        answer: 'The PLI scheme for electronics offers incentives of 4-6% on incremental sales. Eligible companies must have minimum investment of ₹50 Cr and meet domestic value addition norms. Application window opens quarterly. Key benefits include reduced tax burden and import duty concessions.',
        sources: ['Invest India PLI Portal', 'Ministry of Electronics & IT'],
    },
    'how to diversify clients manufacturing': {
        answer: 'Client diversification strategies: 1) Attend 3-4 industry trade shows annually, 2) Implement CRM for lead tracking, 3) Develop case studies from existing clients, 4) Leverage LinkedIn for B2B outreach, 5) Partner with industry associations, 6) Consider exports to reduce domestic concentration.',
        sources: ['Gap Analysis Best Practices', 'McKinsey MSME Scaling Report'],
    },
};

export function searchKnowledgeBase(query: string): typeof SEARCH_INDEX[keyof typeof SEARCH_INDEX] | null {
    const lowercaseQuery = query.toLowerCase();

    // Simple keyword matching
    for (const [key, value] of Object.entries(SEARCH_INDEX)) {
        if (lowercaseQuery.includes(key) || key.includes(lowercaseQuery)) {
            return value;
        }
    }

    return null;
}
