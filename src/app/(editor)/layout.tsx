import DashboardNav from "@/components/dashboard-nav";
import MainNav from "@/components/main-nav";
import { dashboardConfig } from "config/dashboard";
import { siteConfig } from "config/site";
import Link from "next/link";
import { ReactNode } from "react";

export default function EditorLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="container mx-auto grid items-center gap-10 py-8">  
            {children}
        </div>
    )
}