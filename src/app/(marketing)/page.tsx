import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { siteConfig } from "../../../config/site";
import { featureConfig } from "../../../config/feature";

export default function IndexPage() {
    return (
        <>
            <section className="container mx-auto px-6 pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
                <div className="text-center flex flex-col items-center gap-4 max-w-[64rem] mx-auto">
                    <Link 
                    href={siteConfig.links.x} 
                    target="_blank"
                    rel="noreferrer"
                    className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm">xをフォローする</Link>
                    <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Post Writer</h1>
                    <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
                        このアプリケーションはNext.js
                        AppRouterで作られたものです。ユーザーは自由に投稿をポストすることができます。
                    </p>
                    <div className="space-x-4">
                        <Link href={"/login"} className={cn(buttonVariants({ size: "lg"}))}>はじめる</Link>
                        <Link 
                        href={siteConfig.links.github} 
                        target="_blank"
                        rel="noreferrer"
                        className={cn(buttonVariants({ size: "lg", variant: "outline"}))}>GitHub</Link>
                    </div>
                </div>                
            </section>

            <section id="features" className="container mx-auto px-6 py-8 md:py-12 lg:py-24 space-y-6 bg-slate-50">
                <div className="text-center space-y-6">
                    <h2 className="font-extrabold text-3xl md:text-6xl">サービスの特徴</h2>
                    <p className="max-w-[58rem] mx-auto text-muted-foreground sm:text-lg sm:leading-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur aliquid omnis voluptate enim temporibus ipsum earum mollitia cumque excepturi tempore iusto, amet, exercitationem dolore? Doloremque tempora vel iusto animi!</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-[64rem]">
                    {featureConfig.Features.map((feature, index) => {
                        return(
                            <div key={index} className="bg-background border p-2 rounded-lg">
                                <div className="flex flex-col justify-between p-6 h-[180px]">
                                    {feature.svg}
                                    <div className="space-y-2">
                                        <h3 className="font-bold">{feature.name}</h3>
                                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="mx-auto text-center">
                    <p className="text-muted-foreground sm:text-lg sm:leading-7">Post Writerはログインするとブログ投稿ができるようになります。</p>
                </div>
            </section>
            
            <section id="contact" className="container mx-auto px-6 py-8 md:py-12 lg:py-24">
                <div className="max-w-[58rem] mx-auto text-center flex flex-col gap-4">
                    <h2 className="font-extrabold text-3xl md:text-6xl">Contact Me</h2>
                    <p className="text-muted-foreground sm:text-lg sm:leading-7">
                        もしもWebサービスが気に入った場合は下記XからDMでご連絡ください。
                        <br />
                        お仕事のご連絡をお待ちしております。
                    </p>
                    <Link 
                    href={siteConfig.links.x}
                    className="underline underline-offset-4"
                    target="_blank"
                    rel="noreferrer">お仕事はXまで</Link>
                </div>
            </section>
        </>
    )
}