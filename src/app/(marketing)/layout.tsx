import MainNav from "@/components/main-nav";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { marketingConfig } from "../../../config/marketing";
import { ReactNode } from "react";
import { siteConfig } from "../../../config/site";

export default function MarketingLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div>
            <header className="container mx-auto z-40 bg-background">
                <div className="h-20 py-6 flex items-center justify-between">
                    <MainNav items={marketingConfig.mainNav}/> 
                    <nav>
                        <Link 
                        href={"/login"}
                        className={cn(buttonVariants({ variant: "secondary", size: "sm"}))}>ログイン</Link>
                    </nav>
                </div>
            </header>
            <main>{children}</main>
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