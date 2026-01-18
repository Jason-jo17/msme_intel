
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();

    useEffect(() => {
        // Auto-login for demo
        localStorage.setItem('demo_user', JSON.stringify({
            id: 'demo-user-001',
            name: 'Demo Analyst',
            email: 'demo@msme-intel.com',
            role: 'analyst',
        }));

        // Redirect to dashboard after 1 second
        setTimeout(() => {
            router.push('/dashboard');
        }, 1000);
    }, [router]);

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">MSME Intelligence Platform</h1>
                <p className="text-muted-foreground">Loading demo...</p>
            </div>
        </div>
    );
}
