"use client";

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { DetailedCompany } from "@/lib/types/detailed-company"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2, TrendingUp, Users, Award, Briefcase, Zap, Globe, Building2, MapPin, FileText, ShieldCheck, PiggyBank, Rocket, Flag, Laptop2, Loader2, Lock } from "lucide-react"

interface DetailedCompanyViewProps {
    company: DetailedCompany
}

export function DetailedCompanyView({ company }: DetailedCompanyViewProps) {
    const searchParams = useSearchParams();
    const initialTab = searchParams.get('tab') || "gap-analysis";
    const [activeTab, setActiveTab] = useState(initialTab);
    const [isGenerating, setIsGenerating] = useState(false);
    const [showRoadmap, setShowRoadmap] = useState(false);

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab) setActiveTab(tab);
    }, [searchParams]);

    const handleGenerateRoadmap = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            setShowRoadmap(true);
        }, 3000); // 3 second delay
    };

    return (
        <div className="space-y-6">
            {/* Header Section */}
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <h1 className="text-3xl font-bold tracking-tight">{company.name}</h1>
                        <Badge variant={company.rag_status === 'green' ? 'success' : company.rag_status === 'amber' ? 'warning' : 'destructive'} className="capitalize">
                            {company.rag_status} Status
                        </Badge>
                    </div>
                    <div className="flex flex-col gap-1 text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4" />
                            {company.industry_classification || company.sub_sector}
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {company.registered_office_address}
                        </div>
                        {company.website && (
                            <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4" />
                                <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    {company.website}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                    <div className="text-2xl font-bold">Thesis Score: {company.overall_score}/100</div>
                    <Badge variant="outline">{company.company_type}</Badge>
                    {company.listing_status === 'Listed' && (
                        <div className="flex gap-2">
                            {company.stock_codes?.BSE && <Badge variant="secondary">BSE: {company.stock_codes.BSE}</Badge>}
                            {company.stock_codes?.NSE && <Badge variant="secondary">NSE: {company.stock_codes.NSE}</Badge>}
                        </div>
                    )}
                </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                <TabsList className="w-full justify-start overflow-x-auto h-auto flex-wrap">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="customers">Customers</TabsTrigger>
                    <TabsTrigger value="financials">Financials</TabsTrigger>
                    <TabsTrigger value="gap-analysis">Gap Analysis</TabsTrigger>
                    <TabsTrigger value="leadership">Leadership</TabsTrigger>
                    <TabsTrigger value="talent">Talent</TabsTrigger>
                    <TabsTrigger value="brand">Brand</TabsTrigger>
                    <TabsTrigger value="products">Products</TabsTrigger>
                    <TabsTrigger value="innovation">Innovation</TabsTrigger>
                    <TabsTrigger value="roadmap">Strategic Roadmap</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Revenue (Latest)</CardTitle>
                                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">₹{company.latest_revenue} Cr</div>
                                <p className="text-xs text-muted-foreground">
                                    {company.revenue_growth_yoy && company.revenue_growth_yoy > 0 ? '+' : ''}{company.revenue_growth_yoy}% from last year
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
                                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className={`text-2xl font-bold ${company.latest_net_profit && company.latest_net_profit < 0 ? 'text-red-500' : 'text-green-500'}`}>
                                    ₹{company.latest_net_profit} Cr
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Market Cap</CardTitle>
                                <Building2 className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">₹{company.market_cap} Cr</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Employees</CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{company.employee_count}</div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>About Company</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    A leading player in the {company.sector} sector, focusing on {company.sub_sector}.
                                    Headquartered in {company.headquarters_city}, {company.headquarters_state}, the company has established itself as a key partner for global OEMs.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-muted-foreground">Founded</span>
                                        <span className="font-semibold">{company.founded_year}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-muted-foreground">Company Type</span>
                                        <span className="font-semibold">{company.company_type}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-muted-foreground">Data Confidence</span>
                                        <Badge variant="outline" className="w-fit">{company.data_confidence}</Badge>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-muted-foreground">Current Stage</span>
                                        <Badge className="w-fit">Stage {company.current_stage}</Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Market Opportunity</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-sm text-muted-foreground">
                                    {company.gap_analysis?.market_opportunity_assessment}
                                </p>
                                <Separator />
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium">Investment Readiness</span>
                                        <Badge variant={company.gap_analysis?.investment_readiness === 'Ready' ? 'success' : 'warning'}>
                                            {company.gap_analysis?.investment_readiness}
                                        </Badge>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium">Time to Opportunity</span>
                                        <span className="text-sm">~{18} months</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium">Success Probability</span>
                                        <span className="text-sm font-bold text-green-600">72.5%</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="gap-analysis" className="space-y-6">
                    {/* Top Stats Row */}
                    <div className="grid gap-4 md:grid-cols-4">
                        <Card className="bg-slate-50 border-slate-200">
                            <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                                <div className="text-sm font-medium text-muted-foreground mb-1">Overall Score</div>
                                <div className="text-4xl font-bold text-primary mb-2">{company.gap_analysis?.overall_gap_score}/100</div>
                                <Badge variant={company.gap_analysis?.investment_readiness === 'Ready' ? 'success' : 'warning'}>
                                    {company.gap_analysis?.investment_readiness} Phase
                                </Badge>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-50 border-slate-200">
                            <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                                <div className="text-sm font-medium text-muted-foreground mb-1">Time to Opportunity</div>
                                <div className="text-4xl font-bold text-blue-600 mb-2">{company.gap_analysis?.time_to_opportunity_months || 'N/A'}</div>
                                <span className="text-sm text-muted-foreground">Months</span>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-50 border-slate-200">
                            <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                                <div className="text-sm font-medium text-muted-foreground mb-1">Success Probability</div>
                                <div className="text-4xl font-bold text-green-600 mb-2">{company.gap_analysis?.probability_of_success_percentage || 'N/A'}%</div>
                                <span className="text-sm text-muted-foreground">Estimated</span>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Market Diagnosis</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-lg font-bold mb-1">{company.gap_analysis?.market_saturation_diagnosis || 'Analysis Pending'}</div>
                                <p className="text-xs text-muted-foreground line-clamp-3">
                                    {company.gap_analysis?.market_saturation_assessment}
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Market Opportunity Deep Dive (TAM/SAM/SOM) */}
                    {company.gap_analysis?.tam && (
                        <div className="grid gap-4 md:grid-cols-3">
                            <Card className="border-blue-100 bg-blue-50/20">
                                <CardHeader className="pb-2">
                                    <div className="text-sm font-medium text-muted-foreground">TAM (Total Addressable Market)</div>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">₹{company.gap_analysis.tam.toLocaleString()} Cr</div>
                                </CardContent>
                            </Card>
                            <Card className="border-blue-100 bg-blue-50/20">
                                <CardHeader className="pb-2">
                                    <div className="text-sm font-medium text-muted-foreground">SAM (Serviceable Addressable Market)</div>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">₹{company.gap_analysis.sam?.toLocaleString()} Cr</div>
                                </CardContent>
                            </Card>
                            <Card className="border-green-100 bg-green-50/20">
                                <CardHeader className="pb-2">
                                    <div className="text-sm font-medium text-muted-foreground">Current Penetration</div>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-green-700">{company.gap_analysis.current_penetration_percentage}%</div>
                                    <p className="text-xs text-muted-foreground">of Total Market</p>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* 8 Dimensions Detail */}
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>8-Dimension Scorecard</CardTitle>
                                <CardDescription>Detailed breakdown of strategic health</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {[
                                    { label: 'Market Saturation', score: company.gap_analysis?.market_saturation_score, text: company.gap_analysis?.market_saturation_diagnosis },
                                    { label: 'Founder Quality', score: company.gap_analysis?.founder_quality_score, text: company.gap_analysis?.founder_quality_assessment },
                                    { label: 'Business Maturity', score: company.gap_analysis?.business_maturity_score, text: company.gap_analysis?.business_maturity_assessment },
                                    { label: 'Market Opportunity', score: company.gap_analysis?.market_opportunity_score, text: company.gap_analysis?.market_opportunity_assessment },
                                    { label: 'Leadership Quality', score: company.gap_analysis?.leadership_quality_score, text: company.gap_analysis?.leadership_quality_assessment },
                                    { label: 'Innovation', score: company.gap_analysis?.innovation_differentiator_score, text: company.gap_analysis?.innovation_assessment },
                                    { label: 'Talent Pool', score: company.gap_analysis?.talent_pool_score, text: company.gap_analysis?.talent_assessment },
                                    { label: 'Brand Identity', score: company.gap_analysis?.brand_identity_score, text: company.gap_analysis?.brand_assessment },
                                ].map((item, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="font-semibold">{item.label}</span>
                                            <Badge variant={item.score && item.score > 75 ? 'success' : item.score && item.score > 50 ? 'warning' : 'destructive'}>
                                                {item.score}/100
                                            </Badge>
                                        </div>
                                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${item.score && item.score > 75 ? 'bg-green-500' : item.score && item.score > 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                                style={{ width: `${item.score}%` }}
                                            ></div>
                                        </div>
                                        <p className="text-xs text-muted-foreground border-l-2 pl-2 border-slate-200">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Qualitative Analysis (Flags & Gaps) */}
                        <div className="space-y-6">
                            {/* Founder Flags */}
                            {company.gap_analysis?.founder_quality_red_flags && (
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-base">Founder Risk Analysis</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div>
                                            <div className="text-xs font-semibold text-red-600 mb-2 uppercase tracking-wider">Red Flags</div>
                                            <ul className="space-y-1">
                                                {company.gap_analysis.founder_quality_red_flags.map((flag, i) => (
                                                    <li key={i} className="text-sm flex items-start gap-2">
                                                        <AlertCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                                                        <span>{flag}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {company.gap_analysis.founder_quality_green_flags && (
                                            <div>
                                                <div className="text-xs font-semibold text-green-600 mb-2 uppercase tracking-wider">Green Flags</div>
                                                <ul className="space-y-1">
                                                    {company.gap_analysis.founder_quality_green_flags.map((flag, i) => (
                                                        <li key={i} className="text-sm flex items-start gap-2">
                                                            <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                                            <span>{flag}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            )}

                            <Card className="border-red-100 bg-red-50/10">
                                <CardHeader>
                                    <div className="flex items-center gap-2 text-red-600">
                                        <AlertCircle className="h-5 w-5" />
                                        <CardTitle className="text-lg">Critical Gaps</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc list-inside space-y-2 text-sm font-medium">
                                        {company.gap_analysis?.critical_gaps?.map((gap, i) => (
                                            <li key={i}>{gap}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <Alert className="bg-blue-50 border-blue-200">
                                <Zap className="h-4 w-4 text-blue-600" />
                                <AlertTitle className="text-blue-800">Immediate Actions Required</AlertTitle>
                                <AlertDescription className="mt-2">
                                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-900">
                                        {company.gap_analysis?.immediate_actions?.map((action, i) => (
                                            <li key={i}>{action}</li>
                                        ))}
                                    </ul>
                                </AlertDescription>
                            </Alert>
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <Button className="w-full md:w-auto text-lg shadow-lg hover:shadow-xl transition-all" size="lg" onClick={() => setActiveTab('roadmap')}>
                            Generate Strategic Roadmap <Rocket className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </TabsContent>

                <TabsContent value="customers" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Concentration Risk</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{company.client_demographics?.concentration_risk}</div>
                                <p className="text-xs text-muted-foreground">Top 3 clients contribute {company.client_demographics?.top_3_clients_percentage}% of revenue</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Export Revenue</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{company.client_demographics?.export_percentage}%</div>
                                <p className="text-xs text-muted-foreground">Vs. {company.client_demographics?.domestic_india_percentage}% Domestic</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Sector Split</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{company.client_demographics?.civil_aviation_percentage}%</div>
                                <p className="text-xs text-muted-foreground">Civil Aviation (Primary)</p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Major Clients & Contracts</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative w-full overflow-auto">
                                <table className="w-full caption-bottom text-sm text-left">
                                    <thead className="[&_tr]:border-b">
                                        <tr className="border-b transition-colors hover:bg-muted/50">
                                            <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Client Name</th>
                                            <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Type</th>
                                            <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Relationship</th>
                                            <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Revenue %</th>
                                            <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="[&_tr:last-child]:border-0">
                                        {company.clients?.map((client, idx) => (
                                            <tr key={idx} className="border-b transition-colors hover:bg-muted/50">
                                                <td className="p-4 align-middle font-medium flex items-center gap-2">
                                                    {client.client_name}
                                                    {client.is_top_3_client && <Badge variant="secondary" className="text-[10px] h-4">Top 3</Badge>}
                                                </td>
                                                <td className="p-4 align-middle">{client.client_type}</td>
                                                <td className="p-4 align-middle">
                                                    {client.relationship_duration_years} Years
                                                    <div className="text-xs text-muted-foreground">{client.has_long_term_contract ? 'Long-term Contract' : 'Standard'}</div>
                                                </td>
                                                <td className="p-4 align-middle">{client.revenue_contribution_percentage}%</td>
                                                <td className="p-4 align-middle"><Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">Active</Badge></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="financials">
                    {/* MCA & Balance Sheet Row */}
                    <div className="grid gap-6 md:grid-cols-2 mb-6">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="flex items-center gap-2">
                                    <Building2 className="h-5 w-5" />
                                    MCA Registration Details
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs text-muted-foreground uppercase">CIN</label>
                                        <div className="font-semibold text-sm">{company.cin || 'N/A'}</div>
                                    </div>
                                    <div>
                                        <label className="text-xs text-muted-foreground uppercase">GSTIN</label>
                                        <div className="font-semibold text-sm">{company.gstin || 'N/A'}</div>
                                    </div>
                                    <div>
                                        <label className="text-xs text-muted-foreground uppercase">PAN</label>
                                        <div className="font-semibold text-sm">{company.pan || 'N/A'}</div>
                                    </div>
                                    <div>
                                        <label className="text-xs text-muted-foreground uppercase">Status</label>
                                        <div className="font-semibold text-sm text-green-600 capitalize">{company.company_status || 'Active'}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="flex items-center gap-2">
                                    <FileText className="h-5 w-5" />
                                    Balance Sheet Highlights
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs text-muted-foreground uppercase">Authorized Cap.</label>
                                        <div className="font-bold text-lg">₹{company.authorized_capital ? company.authorized_capital.toLocaleString() : 'N/A'} {company.authorized_capital && company.authorized_capital < 1000 ? 'Cr' : ''}</div>
                                    </div>
                                    <div>
                                        <label className="text-xs text-muted-foreground uppercase">Paid-up Cap.</label>
                                        <div className="font-bold text-lg">₹{company.paid_up_capital ? company.paid_up_capital.toLocaleString() : 'N/A'} {company.paid_up_capital && company.paid_up_capital < 1000 ? 'Cr' : ''}</div>
                                    </div>
                                    <div className="col-span-2">
                                        <label className="text-xs text-muted-foreground uppercase">Net Worth</label>
                                        <div className="font-bold text-xl text-blue-600">₹{company.net_worth ? company.net_worth.toLocaleString() : 'N/A'} {company.net_worth && company.net_worth < 1000 ? 'Cr' : ''}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Financial Performance History</CardTitle>
                            <CardDescription>Consolidated financial statements (₹ Crores)</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="relative w-full overflow-auto">
                                <table className="w-full caption-bottom text-sm text-left">
                                    <thead className="[&_tr]:border-b">
                                        <tr className="border-b transition-colors hover:bg-muted/50">
                                            <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Fiscal Year</th>
                                            <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Revenue</th>
                                            <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Net Profit</th>
                                            <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Margins</th>
                                            <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Debt/Equity</th>
                                        </tr>
                                    </thead>
                                    <tbody className="[&_tr:last-child]:border-0">
                                        {company.financials?.map((fin, idx) => (
                                            <tr key={idx} className="border-b transition-colors hover:bg-muted/50">
                                                <td className="p-4 align-middle font-medium">{fin.fiscal_year}</td>
                                                <td className="p-4 align-middle">₹{fin.revenue}</td>
                                                <td className={`p-4 align-middle ${fin.net_profit < 0 ? 'text-red-500' : 'text-green-500'}`}>₹{fin.net_profit}</td>
                                                <td className="p-4 align-middle text-xs">
                                                    <div>NPM: {fin.net_margin_percentage}%</div>
                                                    {fin.ebitda_margin_percentage && <div>EBITDA: {fin.ebitda_margin_percentage}%</div>}
                                                </td>
                                                <td className="p-4 align-middle">{fin.debt_to_equity_ratio ?? 'N/A'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="leadership">
                    <div className="grid gap-6 md:grid-cols-2">
                        {company.founders?.map((founder, idx) => (
                            <Card key={idx}>
                                <CardHeader>
                                    <CardTitle>{founder.name}</CardTitle>
                                    <CardDescription>{founder.current_role}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        {founder.is_promoter && <Badge>Promoter</Badge>}
                                        <Badge variant="outline">{founder.age} Years Old</Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{founder.background}</p>
                                    {founder.notable_achievements && (
                                        <div className="text-sm">
                                            <div className="font-semibold mb-1">Achievements:</div>
                                            <ul className="list-disc list-inside text-muted-foreground">
                                                {founder.notable_achievements.map((a, i) => <li key={i}>{a}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <Separator className="my-6" />
                    <h3 className="text-lg font-bold mb-4">Board & Key Management</h3>
                    <div className="grid gap-4 md:grid-cols-3">
                        {company.leadership?.map((leader, idx) => (
                            <Card key={idx}>
                                <CardHeader className="p-4">
                                    <CardTitle className="text-base">{leader.name}</CardTitle>
                                    <CardDescription className="text-xs">{leader.role}</CardDescription>
                                </CardHeader>
                                <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
                                    <div className="mb-2">Tenure: {leader.tenure_years} years</div>
                                    <div>{leader.background}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="talent">
                    <Card>
                        <CardHeader>
                            <CardTitle>Talent & Culture</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid gap-4 md:grid-cols-3">
                                <div className="p-4 border rounded-lg text-center">
                                    <div className="text-2xl font-bold">{company.talent?.glassdoor_rating}/5</div>
                                    <div className="text-xs text-muted-foreground">Glassdoor Rating</div>
                                </div>
                                <div className="p-4 border rounded-lg text-center">
                                    <div className="text-2xl font-bold">{company.talent?.employee_growth_yoy}%</div>
                                    <div className="text-xs text-muted-foreground">Headcount Growth</div>
                                </div>
                                <div className="p-4 border rounded-lg text-center">
                                    <div className="text-2xl font-bold">{company.talent?.total_employees}</div>
                                    <div className="text-xs text-muted-foreground">Total Employees</div>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-semibold mb-2 text-green-600">Pros</h4>
                                    <ul className="list-disc list-inside text-sm space-y-1">
                                        {company.talent?.glassdoor_top_pros?.map((p, i) => <li key={i}>{p}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 text-red-600">Cons & Risks</h4>
                                    <ul className="list-disc list-inside text-sm space-y-1">
                                        {company.talent?.glassdoor_top_cons?.map((p, i) => <li key={i}>{p}</li>)}
                                        {company.talent?.high_turnover_roles?.map((p, i) => <li key={i}>High turnover in: {p}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="brand">
                    <Card>
                        <CardHeader>
                            <CardTitle>Brand & Market Position</CardTitle>
                            <CardDescription>{company.brand?.tagline}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <Alert>
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Differentiation</AlertTitle>
                                <AlertDescription>{company.brand?.differentiation_claim}</AlertDescription>
                            </Alert>
                            <div>
                                <h4 className="font-semibold mb-2">Certifications</h4>
                                <div className="flex flex-wrap gap-2">
                                    {company.brand?.certifications?.map((c, i) => (
                                        <Badge key={i} variant="secondary">{c.name}</Badge>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Awards</h4>
                                <ul className="list-disc list-inside text-sm text-muted-foreground">
                                    {company.brand?.awards?.map((a, i) => (
                                        <li key={i}>{a.award} ({a.year})</li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="products">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {company.products?.map((prod, idx) => (
                            <Card key={idx}>
                                <CardHeader>
                                    <CardTitle className="text-base">{prod.product_name}</CardTitle>
                                    <Badge variant="outline" className="w-fit mt-1">{prod.category}</Badge>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">{prod.description}</p>
                                    {prod.target_application && (
                                        <div className="text-xs bg-muted p-2 rounded">
                                            <span className="font-semibold">Application:</span> {prod.target_application}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="innovation">
                    <Card>
                        <CardHeader>
                            <CardTitle>R&D and Innovation</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-sm text-muted-foreground">R&D Team Size</div>
                                    <div className="text-xl font-bold">{company.innovation?.rd_team_size || 'N/A'}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">Patents Filed</div>
                                    <div className="text-xl font-bold">{company.innovation?.patents_filed || 'N/A'}</div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Technology Partners</h4>
                                <div className="flex flex-wrap gap-2">
                                    {company.innovation?.technology_partners?.map((p, i) => (
                                        <Badge key={i} variant="outline">{p}</Badge>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="roadmap">
                    {!showRoadmap && !isGenerating ? (
                        <Card className="h-[400px] flex flex-col items-center justify-center text-center space-y-4 border-dashed">
                            <div className="p-4 rounded-full bg-blue-50 text-blue-600">
                                <Rocket className="h-8 w-8" />
                            </div>
                            <div>
                                <CardTitle className="mb-2">Generate Strategic Roadmap</CardTitle>
                                <CardDescription className="max-w-md mx-auto">
                                    AI-powered analysis of 50+ data points to create a tailored 18-month value creation plan.
                                </CardDescription>
                            </div>
                            <Button onClick={handleGenerateRoadmap} size="lg" className="mt-4">
                                <Zap className="mr-2 h-4 w-4" />
                                Generate Roadmap
                            </Button>
                        </Card>
                    ) : isGenerating ? (
                        <Card className="h-[400px] flex flex-col items-center justify-center text-center space-y-6">
                            <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">Analyzing Strategic Gaps...</h3>
                                <p className="text-muted-foreground text-sm">Synthesizing market saturation, founder quality, and financial data.</p>
                            </div>
                        </Card>
                    ) : (
                        <Card className="border-0 shadow-none">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight">Strategic Roadmap</h3>
                                    <p className="text-muted-foreground">Tailored 18-month execution plan.</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm">
                                        <Lock className="mr-2 h-4 w-4" />
                                        Share
                                    </Button>
                                    <Button size="sm">
                                        <FileText className="mr-2 h-4 w-4" />
                                        Export PDF
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-8 relative pl-4 md:pl-0">
                                {/* Vertical timeline line */}
                                <div className="absolute left-[39px] top-4 bottom-4 w-0.5 bg-border hidden md:block" />

                                {[
                                    {
                                        phase: 1,
                                        title: "Stabilization & Governance",
                                        timeline: "Q1-Q2 (Months 0-6)",
                                        milestones: [
                                            {
                                                title: "Succession Framework",
                                                priority: "critical",
                                                desc: "Formalize succession plan for CEO role. Identify and groom internal/external candidates.",
                                                impact: "Risk Mitigation",
                                                metrics: ["Successor Shortlist", "Board Approval"]
                                            },
                                            {
                                                title: "CTO Recruitment",
                                                priority: "high",
                                                desc: "Onboard CTO to drive digital transformation and Industry 4.0 initiatives.",
                                                impact: "Operational Efficiency",
                                                metrics: ["CTO Onboarded", "Digital Roadmap"]
                                            }
                                        ]
                                    },
                                    {
                                        phase: 2,
                                        title: "Financial & Operational Optimization",
                                        timeline: "Q3-Q4 (Months 6-12)",
                                        milestones: [
                                            {
                                                title: "Debt Restructuring",
                                                priority: "high",
                                                desc: "Refinance high-cost debt (₹631 Cr) to reduce interest burden.",
                                                impact: "Profitability +15%",
                                                metrics: ["Interest Rate < 9%", "DSCR > 1.5"]
                                            },
                                            {
                                                title: "PLI Scheme Application",
                                                priority: "critical",
                                                desc: "Leverage government PLI incentives for aerospace manufacturing.",
                                                impact: "Revenue Growth",
                                                metrics: ["Application Filed", "Eligibility Confirmed"]
                                            }
                                        ]
                                    },
                                    {
                                        phase: 3,
                                        title: "Strategic Expansion",
                                        timeline: "Year 2 (Months 12-18)",
                                        milestones: [
                                            {
                                                title: "New Market Entry",
                                                priority: "medium",
                                                desc: "Expand customer base beyond top 3 clients. Target North American defense.",
                                                impact: "Diversification",
                                                metrics: ["2 New Clients", "Export Revenue +10%"]
                                            },
                                            {
                                                title: "Smart Factory Level 2",
                                                priority: "medium",
                                                desc: "Full IoT implementation and predictive maintenance.",
                                                impact: "Valuation Multiplier",
                                                metrics: ["OEE > 85%", "Downtime < 2%"]
                                            }
                                        ]
                                    }
                                ].map((phase) => (
                                    <div key={phase.phase} className="relative flex flex-col md:flex-row gap-6">
                                        {/* Phase Indicator */}
                                        <div className="flex md:flex-col items-center md:items-start gap-4 md:w-24 shrink-0 z-10">
                                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background border-4 border-primary/20 shadow-sm text-primary font-bold text-xl">
                                                P{phase.phase}
                                            </div>
                                        </div>

                                        {/* Milestones for this Phase */}
                                        <div className="flex-1 space-y-4 pb-8 border-b md:border-b-0">
                                            <div className="flex items-center justify-between">
                                                <h4 className="text-lg font-semibold">{phase.title}</h4>
                                                <Badge variant="secondary">{phase.timeline}</Badge>
                                            </div>

                                            <div className="grid gap-4 md:grid-cols-2">
                                                {phase.milestones.map((milestone, idx) => (
                                                    <Card key={idx} className="relative overflow-hidden border-l-4 border-l-primary/50">
                                                        <CardHeader className="pb-2">
                                                            <div className="flex items-start justify-between">
                                                                <CardTitle className="text-base font-semibold">{milestone.title}</CardTitle>
                                                                <Badge variant="outline" className={`capitalize border-0 ${milestone.priority === 'critical' ? 'text-red-600 bg-red-100' :
                                                                    milestone.priority === 'high' ? 'text-orange-600 bg-orange-100' :
                                                                        'text-blue-600 bg-blue-100'
                                                                    }`}>
                                                                    {milestone.priority}
                                                                </Badge>
                                                            </div>
                                                        </CardHeader>
                                                        <CardContent>
                                                            <p className="text-sm text-muted-foreground mb-3">{milestone.desc}</p>
                                                            <div className="text-xs font-semibold text-blue-600 mb-2">Impact: {milestone.impact}</div>
                                                            <div className="mt-3 pt-3 border-t">
                                                                <h6 className="text-xs font-semibold mb-1">Success Metrics</h6>
                                                                <ul className="space-y-1">
                                                                    {milestone.metrics.map((m, i) => (
                                                                        <li key={i} className="text-xs flex items-center gap-1">
                                                                            <CheckCircle2 className="h-3 w-3 text-green-500" />
                                                                            {m}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    )
}
