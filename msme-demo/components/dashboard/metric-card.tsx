"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingDown, TrendingUp } from "lucide-react"
import { Line, LineChart, ResponsiveContainer } from "recharts"
import { motion } from "framer-motion"

interface MetricCardProps {
    title: string
    value: string | number
    change: number
    icon: React.ReactNode
    description: string
    trend: "up" | "down"
    sparklineData: number[]
}

export function MetricCard({
    title,
    value,
    change,
    icon,
    description,
    trend,
    sparklineData,
}: MetricCardProps) {
    const changeColor = change >= 0 ? "text-green-600" : "text-red-600"
    const TrendIcon = trend === "up" ? TrendingUp : TrendingDown
    const sparklineColor = trend === "up" ? "#10b981" : "#ef4444"

    const chartData = sparklineData.map((value, index) => ({ value, index }))

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg">{icon}</div>
                        <div
                            className={`flex items-center gap-1 text-sm font-medium ${changeColor}`}
                        >
                            <TrendIcon className="h-4 w-4" />
                            <span>{Math.abs(change).toFixed(1)}%</span>
                        </div>
                    </div>

                    {/* Value */}
                    <div className="mb-1">
                        <div className="text-3xl font-bold">{value}</div>
                        <p className="text-sm text-muted-foreground">{title}</p>
                    </div>

                    {/* Sparkline */}
                    <div className="h-12 -mx-2 mb-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke={sparklineColor}
                                    strokeWidth={2}
                                    dot={false}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    )
}
