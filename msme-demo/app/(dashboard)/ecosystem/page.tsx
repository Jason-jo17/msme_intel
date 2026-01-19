'use client';

import { PageHeader } from '@/components/shared/page-header';
import { CategoryCard } from '@/components/ecosystem/category-card';
import { AddPartnerModal } from '@/components/ecosystem/add-partner-modal';
import { ECOSYSTEM_DATA } from '@/lib/demo-data/ecosystem-providers';

export default function EcosystemPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="Ecosystem Directory"
                description="Connect with trusted service providers and partners tailored to your needs by category."
                action={<AddPartnerModal />}
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {ECOSYSTEM_DATA.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
}
