
'use client';

import { useParams } from 'next/navigation';
import { useDemoCompanies } from '@/lib/hooks/use-demo-companies';
import { getDemoFinancials } from '@/lib/demo-data/financials';
import { getDemoMCA } from '@/lib/demo-data/mca';
import { PageHeader } from '@/components/shared/page-header';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CompanyStats } from '@/components/companies/company-stats';
import { FinancialTrendChart } from '@/components/charts/financial-trend-chart';
import { FundingTimeline } from '@/components/companies/funding-timeline';
import { LoadingSkeleton } from '@/components/shared/loading-skeleton';
import { Badge } from '@/components/ui/badge';
import { Edit, FileText, Map as MapIcon, Network, Building, FileBarChart, Users } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function CompanyDetailPage() {
    const params = useParams();
    const id = params.id as string;
    // Use demo hook instead of real backend hook
    const { getCompany } = useDemoCompanies();
    const company = getCompany(id);
    const mca = getDemoMCA(id);
    const financials = getDemoFinancials(id);

    if (!company) return <div className="p-10">Company not found</div>;

    return (
        <div className="space-y-6 page-transition">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <h1 className="text-3xl font-bold tracking-tight">{company.name}</h1>
                        <Badge variant="outline" className="capitalize">{company.stage}</Badge>
                    </div>
                    <p className="text-muted-foreground flex items-center gap-2">
                        {company.sector} • {company.sub_sector} • {company.headquarters_city}, {company.headquarters_state}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Profile
                    </Button>
                    <Link href={`/companies/${id}/analyze`}>
                        <Button variant="default" size="sm">
                            <FileText className="mr-2 h-4 w-4" />
                            Run Gap Analysis
                        </Button>
                    </Link>
                </div>
            </div>

            <CompanyStats company={company} />

            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="financials">Financials & MCA</TabsTrigger>
                    <TabsTrigger value="roadmap">Strategic Roadmap</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>About Company</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{"No description available."}</p>
                                <div className="mt-4 grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-sm font-medium text-muted-foreground">Founded</div>
                                        <div>{company.founded_year}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-muted-foreground">Employees</div>
                                        <div>{company.employee_count}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-muted-foreground">Website</div>
                                        <div className="text-blue-500">{company.website}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="col-span-3">
                            <CardHeader>
                                <CardTitle>Key Personnel</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {mca?.directors?.map((director: string, idx: number) => (
                                    <div key={idx} className="flex items-center space-x-4 mb-4">
                                        <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
                                            <Users className="h-5 w-5 text-slate-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">{director}</p>
                                            <p className="text-xs text-muted-foreground">Director</p>
                                        </div>
                                    </div>
                                )) || <p>No director info.</p>}
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="financials" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Building className="h-5 w-5" />
                                    MCA Registration Details
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-sm font-medium text-muted-foreground">CIN</div>
                                        <div className="font-mono">{mca?.cin || "N/A"}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-muted-foreground">GSTIN</div>
                                        <div className="font-mono">{financials?.gstin || "N/A"}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-muted-foreground">PAN</div>
                                        <div className="font-mono">{financials?.pan || "N/A"}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-muted-foreground">Status</div>
                                        <div className="text-green-600 font-medium">{financials?.status || "Active"}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <FileBarChart className="h-5 w-5" />
                                    Balance Sheet Highlights
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-sm font-medium text-muted-foreground">Authorized Cap.</div>
                                        <div className="text-lg font-bold">₹{mca?.authorized_capital ? (mca.authorized_capital / 100000).toFixed(1) + 'L' : "N/A"}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-muted-foreground">Paid-up Cap.</div>
                                        <div className="text-lg font-bold">₹{mca?.paid_up_capital ? (mca.paid_up_capital / 100000).toFixed(1) + 'L' : "N/A"}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-muted-foreground">Net Worth</div>
                                        <div className="text-lg font-bold text-blue-600">₹{financials?.net_worth_lakhs}L</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Financial Performance (Last 3 Years)</CardTitle>
                            <CardDescription>Audited financial statements summary</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="relative w-full overflow-auto">
                                <table className="w-full caption-bottom text-sm text-left">
                                    <thead className="[&_tr]:border-b">
                                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Fiscal Year</th>
                                            <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Revenue</th>
                                            <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Net Profit/Loss</th>
                                        </tr>
                                    </thead>
                                    <tbody className="[&_tr:last-child]:border-0">
                                        {financials?.history?.map((yearData: any, idx: number) => (
                                            <tr key={idx} className="border-b transition-colors hover:bg-muted/50">
                                                <td className="p-4 align-middle font-medium">{yearData.year}</td>
                                                <td className="p-4 align-middle">₹{yearData.revenue} Cr</td>
                                                <td className="p-4 align-middle text-green-600">₹{yearData.net_profit} Cr</td>
                                            </tr>
                                        )) || (
                                                <tr>
                                                    <td colSpan={3} className="p-4 text-center">No financial history available for demo.</td>
                                                </tr>
                                            )}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="roadmap">
                    <div className="grid place-items-center py-10 border rounded-lg bg-slate-50">
                        <div className="text-center space-y-4">
                            <h3 className="text-xl font-semibold">Generate Strategic Roadmap</h3>
                            <p className="text-muted-foreground max-w-md mx-auto">
                                Run our AI-powered gap analysis first to generate a tailored strategic roadmap for {company.name}.
                            </p>
                            <Link href={`/companies/${id}/roadmap`}>
                                <Button size="lg">
                                    View Full Roadmap
                                </Button>
                            </Link>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
