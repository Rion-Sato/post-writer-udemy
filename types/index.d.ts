export type Author = {
    name: string;
    url: string;
}

export type SiteConfig = {
    name: string;
    description: string;
    keywords: string[];
    authors: Author[]
    url: string;
    ogImage: string;
    links: {
        x: string;
        github: string;
    };
};

export type NavItem = {
    title: string;
    id: string,
    href: string;
    disabled?: boolean;
}

export type MarketingConfig = {
    mainNav: NavItem[];
}

export type FeatureItem = {
    svg: JSX.Element;
    name: string;
    description: string;
}

export type FeatureConfig = {
    Features: FeatureItem[]
}

export type SideberNavItem = {
    title: string;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof Icon;
} & (
    | {
        href: string;
        items?: never;
    }
    | {
        href?: string;
        items: NavItem[];
    }
)

export type DashboardConfig = {
    mainNav: NabItem[];
    sideberNav: SideberNavItem[];
}