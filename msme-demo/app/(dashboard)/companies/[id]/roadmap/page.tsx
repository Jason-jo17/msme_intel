
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/components/shared/page-header';
import { AnimatedLoading } from '@/components/shared/animated-loading';
import { simulateLoading } from '@/lib/utils/simulate-loading';
import { getRoadmap } from '@/lib/demo-data/roadmaps';
import { RoadmapTimeline } from '@/components/roadmap/roadmap-timeline';
import { RoadmapMilestones } from '@/components/roadmap/roadmap-milestones';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function RoadmapPage({ params }: { params: { id: string } }) {
    const [isLoading, setIsLoading] = useState(true);
    const [roadmap, setRoadmap] = useState<any>(null);
    const router = useRouter();
    const { toast } = useToast();

    useEffect(() => {
        const loadRoadmap = async () => {
            // Simulate animation delay for roadmap generation
            await simulateLoading(4000);

            const data = getRoadmap(params.id);
            if (data) {
                setRoadmap(data);
                toast({
                    title: "Roadmap Generated",
                    description: "Strategic implementation plan created successfully.",
                })
            }
            setIsLoading(false);
        };

        loadRoadmap();
    }, [params.id, toast]);

    if (isLoading) {
        return (
            <div className="space-y-6 max-w-3xl mx-auto pt-10">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">Generating Strategic Roadmap</h2>
                    <p className="text-muted-foreground">Tailoring milestones based on gap analysis results...</p>
                </div>
                <AnimatedLoading type="roadmap" />
            </div>
        );
    }

    if (!roadmap) {
        return (
            <div className="space-y-6">
                <Button variant="ghost" onClick={() => router.back()}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
                <div className="text-center py-20">
                    <h2 className="text-xl font-semibold">Roadmap Not Available</h2>
                    <p className="text-muted-foreground">Demo roadmap is only available for select companies (e.g., TechForge).</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8 page-transition">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" onClick={() => router.back()}>
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <PageHeader
                        title="Strategic Roadmap"
                        description="6-month implementation plan with key milestones."
                    />
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                    </Button>
                    <Button variant="default" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Export PDF
                    </Button>
                </div>
            </div>

            <Tabs defaultValue="timeline" className="w-full">
                <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
                    <TabsTrigger value="timeline">Timeline View</TabsTrigger>
                    <TabsTrigger value="milestones">Milestone Details</TabsTrigger>
                </TabsList>

                <TabsContent value="timeline" className="mt-6">
                    <RoadmapTimeline roadmap={roadmap} />
                </TabsContent>

                <TabsContent value="milestones" className="mt-6">
                    <RoadmapMilestones milestones={roadmap.milestones} />
                </TabsContent>
            </Tabs>
        </div>
    );
}
