import DashboardNav from "@/components/dashboard-nav";
import MainNav from "@/components/main-nav";
import { dashboardConfig } from "config/dashboard";
import { siteConfig } from "config/site";
import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen space-y-6">  
            <header className="container mx-auto z-40 bg-background">
                <div className="h-20 py-6 flex items-center justify-between">
                    <MainNav items={dashboardConfig.mainNav}/> 
                </div>
            </header>
            <div className="container mx-auto grid flex-1 gap-12 md: grid-cols-[200px_1fr]">
                <aside className="hidden md:flex w-[200px] flex-col">
                    <DashboardNav items={dashboardConfig.sideberNav}/> 
                </aside>
                <main className="flex flex-col w-full flex-1 overflow-hidden">{children}</main>
            </div>
            <footer>
                <div className="container mx-auto py-10 md:py-0 md:h-20">
                    <p className="text-center text-sm md:text-left">
                        Build by {""}
                        <Link 
                        href={siteConfig.links.x} 
                        className="underline underline-offset-4 font-medium"
                        target="_blank"
                        rel="noreferrer">
                            Rion
                        </Link>
                        .Hosted on {""}
                        <Link 
                        href={"https://vercel.com"}
                        className="underline underline-offset-4 font-medium"
                        target="_blank"
                        rel="noreferrer">
                            Vercel
                        </Link>
                    </p>
                </div>
            </footer>
        </div>
    )
}