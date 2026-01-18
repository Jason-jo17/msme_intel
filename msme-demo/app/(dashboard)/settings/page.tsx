'use client';

import { PageHeader } from '@/components/shared/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function SettingsPage() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="space-y-6 max-w-4xl">
            <PageHeader
                title="Settings"
                description="Manage your account preferences and application settings."
            />

            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Appearance</CardTitle>
                        <CardDescription>Customize the look and feel of the application.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Dark Mode</Label>
                                <div className="text-sm text-muted-foreground">
                                    Enable dark mode for better viewing at night.
                                </div>
                            </div>
                            {mounted && (
                                <Switch
                                    checked={theme === 'dark'}
                                    onCheckedChange={(checked: boolean) => setTheme(checked ? 'dark' : 'light')}
                                />
                            )}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Profile Settings</CardTitle>
                        <CardDescription>Update your personal information.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Display Name</Label>
                            <Input id="name" defaultValue="John Doe" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" defaultValue="john@example.com" disabled />
                        </div>
                        <div className="pt-2">
                            <Button>Save Changes</Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Notifications</CardTitle>
                        <CardDescription>Configure how you receive updates.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Email Alerts</Label>
                                <div className="text-sm text-muted-foreground">
                                    Receive daily summaries of your portfolio performance.
                                </div>
                            </div>
                            <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Gap Analysis Updates</Label>
                                <div className="text-sm text-muted-foreground">
                                    Get notified when a gap analysis completes.
                                </div>
                            </div>
                            <Switch defaultChecked />
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-amber-200 bg-amber-50/50">
                    <CardHeader>
                        <CardTitle className="text-amber-800">Demo Management</CardTitle>
                        <CardDescription>Actions for the demo environment.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Reset Demo Flow</Label>
                                <div className="text-sm text-muted-foreground">
                                    Restart the demo experience from the beginning.
                                </div>
                            </div>
                            <Button variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-100 hover:text-amber-800" asChild>
                                <a href="http://localhost:3001/demo-flow">Go to Demo Flow</a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
