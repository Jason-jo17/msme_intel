"use client"

import {
    CartesianGrid,
    ResponsiveContainer,
    Scatter,
    ScatterChart,
    Tooltip,
    XAxis,
    YAxis,
    ZAxis
} from "recharts"

import { MarketShareGrowthData } from "@/lib/types/dashboard"

interface MarketShareGrowthChartProps {
    data: MarketShareGrowthData[]
}

export function MarketShareGrowthChart({ data }: MarketShareGrowthChartProps) {
    if (!data) return null

    return (
        <ResponsiveContainer width="100%" height={300}>
            <ScatterChart
                margin={{ top: 20, right: 20, bottom: 20, left: 10 }}
            >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                    type="number" 
                    dataKey="marketShare" 
                    name="Market Share" 
                    unit="%" 
                    className="text-xs text-muted-foreground"
                    label={{ value: 'Market Share (%)', position: 'insideBottom', offset: -10, className: "fill-muted-foreground text-xs" }}
                />
                <YAxis 
                    type="number" 
                    dataKey="growth" 
                    name="Growth Rate" 
                    unit="%" 
                    className="text-xs text-muted-foreground"
                    label={{ value: 'Growth Rate (%)', angle: -90, position: 'insideLeft', className: "fill-muted-foreground text-xs" }}
                />
                <Tooltip 
                    cursor={{ strokeDasharray: '3 3' }} 
                    content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                            const data = payload[0].payload as MarketShareGrowthData;
                            return (
                                <div className="rounded-lg border bg-background p-3 shadow-md">
                                    <div className="mb-2">
                                        <h4 className="font-semibold text-sm">{data.name}</h4>
                                        <span className="text-xs text-muted-foreground capitalize">{data.sector.replace('_', ' ')}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                                        <div className="flex flex-col">
                                            <span className="text-muted-foreground">Market Share</span>
                                            <span className="font-medium">{data.marketShare}%</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-muted-foreground">Growth</span>
                                            <span className="font-medium">{data.growth}%</span>
                                        </div>
                                        <div className="flex flex-col col-span-2 mt-1">
                                            <span className="text-muted-foreground">Revenue</span>
                                            <span className="font-medium">₹{(data.revenue / 10000000).toFixed(1)} Cr</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    }}
                />
                <Scatter 
                    name="Companies" 
                    data={data} 
                    fill="hsl(var(--primary))" 
                />
            </ScatterChart>
        </ResponsiveContainer>
    )
}
