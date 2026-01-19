'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Wallet, Lightbulb, Banknote } from "lucide-react";

const OPPORTUNITIES = [
    {
        id: 'mudra',
        title: 'MUDRA Yojana',
        provider: 'Govt. of India',
        amount: 'Up to ₹10 Lakh',
        type: 'Debt',
        badge: 'Popular',
        icon: Wallet,
        description: 'Micro-loans for non-corporate, non-farm small/micro enterprises.'
    },
    {
        id: 'sis',
        title: 'Startup India Seed Fund',
        provider: 'DPIIT',
        amount: 'Up to ₹20 Lakh',
        type: 'Grant',
        badge: 'Seed Stage',
        icon: Lightbulb,
        description: 'Financial assistance for proof of concept, prototype development, and product trials.'
    },
    {
        id: 'cgtmse',
        title: 'CGTMSE Scheme',
        provider: 'SIDBI',
        amount: 'Up to ₹2 Cr',
        type: 'Guarantee',
        badge: 'Collateral Free',
        icon: Banknote,
        description: 'Credit Guarantee Fund Trust for Micro and Small Enterprises.'
    }
];

export function FundingOpportunities() {
    return (
        <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none shadow-xl">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Wallet className="h-5 w-5 text-green-400" />
                    Active Funding Opportunities
                </CardTitle>
                <CardDescription className="text-slate-300">
                    Curated financial schemes tailored for your growth stage.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                {OPPORTUNITIES.map((opp) => (
                    <div key={opp.id} className="group flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/5 hover:border-white/20">
                        <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                            <opp.icon className="h-5 w-5 text-blue-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold text-sm truncate">{opp.title}</h4>
                                <Badge variant="secondary" className="h-5 text-[10px] bg-blue-500/20 text-blue-300 border-none hover:bg-blue-500/30">
                                    {opp.type}
                                </Badge>
                                {opp.badge && (
                                    <Badge variant="outline" className="h-5 text-[10px] border-green-500/50 text-green-400 hover:bg-green-500/10">
                                        {opp.badge}
                                    </Badge>
                                )}
                            </div>
                            <div className="flex items-center gap-3 text-xs text-slate-400">
                                <span>{opp.provider}</span>
                                <span className="h-1 w-1 rounded-full bg-slate-600" />
                                <span className="text-green-300 font-medium">{opp.amount}</span>
                            </div>
                        </div>
                        <Button size="icon" variant="ghost" className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all">
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>
                ))}
            </CardContent>
            <CardFooter className="pt-2">
                <Button variant="link" className="text-blue-300 hover:text-blue-200 p-0 h-auto text-xs w-full justify-center">
                    View All 12 Active Schemes
                </Button>
            </CardFooter>
        </Card>
    );
}
