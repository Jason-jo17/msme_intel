"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import {
    Building2,
    IndianRupee,
    RefreshCw,
    Target,
    TrendingUp,
} from "lucide-react"
import { format, subDays } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DateRangePicker } from "@/components/dashboard/date-range-picker"
import { MarketShareGrowthChart } from "@/components/dashboard/market-share-growth-chart"
import { FunnelConversionChart } from "@/components/dashboard/funnel-conversion-chart"
import { GeographicHeatmap } from "@/components/dashboard/geographic-heatmap"
import { MetricCard } from "@/components/dashboard/metric-card"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { EnrolledEcosystemsChart } from "@/components/ecosystem/ecosystem-stats"
import { RecentActivityFeed } from "@/components/dashboard/recent-activity-feed"
import { SectorDistributionChart } from "@/components/dashboard/sector-distribution-chart"
import { TopPerformersList } from "@/components/dashboard/top-performers-list"
import {
    getDashboardMetrics,
    getMarketShareGrowthData,
    getFunnelConversionData,
    getGeographicDistribution,
    getRecentActivity,
    getSectorDistribution,
    getTopPerformers,
} from "@/lib/demo-data/dashboard-api"
import { DashboardFilters } from "@/lib/types/dashboard"

export default function DashboardPage() {
    const [filters, setFilters] = useState<DashboardFilters>({
        date_range: {
            from: subDays(new Date(), 90),
            to: new Date(),
        },
        sectors: [],
        stages: [],
        rag_status: [],
        search_query: "",
    })

    // Data Fetching directly from mock API
    const { data: metrics, refetch: refetchMetrics } = useQuery({
        queryKey: ["dashboard-metrics", filters],
        queryFn: () => getDashboardMetrics(),
    })

    const { data: funnelData } = useQuery({
        queryKey: ["funnel-conversion", filters],
        queryFn: () => getFunnelConversionData(),
    })

    const { data: marketData } = useQuery({
        queryKey: ["market-share-growth", filters],
        queryFn: () => getMarketShareGrowthData(),
    })

    const { data: sectorData } = useQuery({
        queryKey: ["sector-distribution", filters],
        queryFn: () => getSectorDistribution(),
    })


    const { data: topPerformers } = useQuery({
        queryKey: ["top-performers", filters],
        queryFn: () => getTopPerformers(),
    })

    const { data: recentActivity } = useQuery({
        queryKey: ["recent-activity"],
        queryFn: () => getRecentActivity(),
        refetchInterval: 10000,
    })

    const { data: geoData } = useQuery({
        queryKey: ["geographic-distribution", filters],
        queryFn: () => getGeographicDistribution(),
    })

    const handleRefresh = () => {
        refetchMetrics()
    }

    return (
        <div className="space-y-6 p-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground">
                        MSME Intelligence Platform Overview
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <DateRangePicker
                        value={filters.date_range}
                        onChange={(range) => setFilters({ ...filters, date_range: range })}
                    />
                    <Button variant="outline" size="icon" onClick={handleRefresh}>
                        <RefreshCw className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Top Metrics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                    title="Total Companies"
                    value={metrics?.total_companies || 0}
                    change={metrics?.total_companies_change || 0}
                    icon={<Building2 className="h-5 w-5" />}
                    description="+2 from last month"
                    trend="up"
                    sparklineData={[40, 45, 42, 48, 50, 52, 55, 58, 60, 58, 62, 65]}
                />

                <MetricCard
                    title="Avg Growth Rate"
                    value={`${metrics?.avg_growth_rate?.toFixed(1) || 0}%`}
                    change={metrics?.avg_growth_rate_change || 0}
                    icon={<TrendingUp className="h-5 w-5" />}
                    description="+4% from last quarter"
                    trend="up"
                    sparklineData={[22, 24, 23, 25, 26, 27, 28, 28.5]}
                />

                <MetricCard
                    title="Total Portfolio Value"
                    value={`₹${metrics?.total_portfolio_value?.toFixed(1) || 0} Cr`}
                    change={metrics?.portfolio_value_change || 0}
                    icon={<IndianRupee className="h-5 w-5" />}
                    description="+12% year over year"
                    trend="up"
                    sparklineData={[70, 72, 75, 78, 80, 82, 85.4]}
                />

                <MetricCard
                    title="Gap Analysis Coverage"
                    value={`${metrics?.gap_analysis_coverage || 0}%`}
                    change={metrics?.gap_analysis_coverage_change || 0}
                    icon={<Target className="h-5 w-5" />}
                    description="18 companies analyzed"
                    trend={(metrics?.gap_analysis_coverage_change || 0) >= 0 ? "up" : "down"}
                    sparklineData={[45, 48, 52, 55, 58, 60, 63, 65]}
                />
            </div>

            {/* Main Charts Row */}
            <div className="grid gap-6 lg:grid-cols-7">
                {/* Funnel Conversion - Takes 4 columns */}
                <Card className="lg:col-span-4 p-6">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Funnel Conversion</h3>
                        <p className="text-sm text-muted-foreground">
                            Company progression through 6 stages
                        </p>
                    </div>
                    {funnelData && <FunnelConversionChart data={funnelData} />}
                </Card>

                {/* Sector Distribution - Takes 3 columns */}
                <Card className="lg:col-span-3 p-6">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Sector Distribution</h3>
                        <p className="text-sm text-muted-foreground">
                            Companies by sector
                        </p>
                    </div>
                    {sectorData && <SectorDistributionChart data={sectorData} />}
                </Card>
            </div>

            {/* Financial Trends & RAG Status */}
            <div className="grid gap-6 lg:grid-cols-2">
                <Card className="p-6">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Growth vs Market Share</h3>
                        <p className="text-sm text-muted-foreground">
                            Company performance matrix
                        </p>
                    </div>
                    {marketData && <MarketShareGrowthChart data={marketData} />}
                </Card>

                <div className="h-full">
                    <EnrolledEcosystemsChart />
                </div>
            </div>

            {/* Bottom Row: Top Performers, Recent Activity, Geographic */}
            <div className="grid gap-6 lg:grid-cols-3">
                <Card className="p-6">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Top Performers</h3>
                        <p className="text-sm text-muted-foreground">
                            Highest scoring companies
                        </p>
                    </div>
                    {topPerformers && <TopPerformersList companies={topPerformers} />}
                </Card>

                <Card className="p-6">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Recent Activity</h3>
                        <p className="text-sm text-muted-foreground">
                            Latest updates
                        </p>
                    </div>
                    {recentActivity && <RecentActivityFeed activities={recentActivity} />}
                </Card>

                <Card className="p-6">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Geographic Distribution</h3>
                        <p className="text-sm text-muted-foreground">
                            Companies by state
                        </p>
                    </div>
                    {geoData && <GeographicHeatmap data={geoData} />}
                </Card>
            </div>

            {/* Quick Actions */}
            <QuickActions />
        </div>
    )
}
