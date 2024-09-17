"use client";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { NavItem } from "../../types";

interface MobileNavProps {
    items: NavItem[]
}

export default function MobileNav({ items }: MobileNavProps) {
    return(
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline">
                    <Menu size={20}/>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pt-10">
                <div className="flex flex-col">
                    {items.map((item) => {
                        return (
                            item.href.includes('#') ? 
                            (
                                <SheetClose asChild key={item.id}>
                                    <Button variant="ghost" className="justify-start" asChild>
                                        <Link href={item.href}>{item.title}</Link>
                                    </Button>
                                </SheetClose>
                            ) : (
                                <SheetClose asChild key={item.id}>
                                    <Button variant="ghost" className="justify-start" asChild>
                                        <Link href={item.href}>{item.title}</Link>
                                    </Button>
                                </SheetClose>
                            )
                        )
                    })}
                </div>
            </SheetContent>
        </Sheet>
    )
}