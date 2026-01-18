
'use client';

import { useState, useEffect } from 'react';
import { useDemoCompanies } from '@/lib/hooks/use-demo-companies';
import { CompanyList } from '@/components/companies/company-list';
import { CompanyFilters } from '@/components/companies/company-filters';
import { PageHeader } from '@/components/shared/page-header';

export default function CompaniesPage() {
    const [filters, setFilters] = useState({
        sector: null,
        stage: null,
        search: '',
    });

    const { companies, filterCompanies, isLoading } = useDemoCompanies(filters);

    useEffect(() => {
        filterCompanies(filters);
    }, [filters, filterCompanies]);

    return (
        <div className="space-y-6 page-transition">
            <PageHeader
                title="Companies"
                description="Explore 30 pre-loaded MSME companies across key sectors."
            />

            <CompanyFilters filters={filters} onFiltersChange={setFilters} />

            <CompanyList companies={companies} isLoading={isLoading} />
        </div>
    );
}
