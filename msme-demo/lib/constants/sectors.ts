export const SECTORS = [
    { value: 'aerospace', label: 'Aerospace', color: '#06B6D4' },
    { value: 'artificial_intelligence', label: 'Artificial Intelligence', color: '#EC4899' },
    { value: 'advanced_manufacturing', label: 'Advanced Manufacturing', color: '#3B82F6' },
    { value: 'fintech', label: 'Fintech', color: '#8B5CF6' },
    { value: 'agritech', label: 'Agritech', color: '#22C55E' },
    { value: 'edtech', label: 'Edtech', color: '#F97316' },
] as const;

export type Sector = (typeof SECTORS)[number];
