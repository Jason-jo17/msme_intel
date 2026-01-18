
import { useState, useCallback } from 'react';
import { Company } from '@/lib/types/company';
import { getCompaniesByFilter, getCompanyById } from '@/lib/demo-data/companies';

export function useDemoCompanies(initialFilters?: any) {
    const [companies, setCompanies] = useState<Company[]>(
        getCompaniesByFilter(initialFilters || {})
    );

    const filterCompanies = useCallback((filters: any) => {
        setCompanies(getCompaniesByFilter(filters));
    }, []);

    const getCompany = useCallback((id: string) => {
        return getCompanyById(id);
    }, []);

    return {
        companies,
        filterCompanies,
        getCompany,
        isLoading: false // Always loaded for demo
    };
}
