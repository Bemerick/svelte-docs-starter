
import type { NavItem, SocialLink } from "$lib/types/nav";

import {
    Boxes,
    Paintbrush,
    Workflow,
    Zap
} from 'lucide-svelte';
import type { Feature, PromoConfig, SiteConfig } from "./types/config";


export const siteConfig: SiteConfig = {
    version: '0.0.1',
    title: 'GPPA Documentation',
    description:
        'Comprehensive documentation for your project. Built with Svelte 5, MDSvex, Tailwind CSS, and shadcn/ui components.',
    github: 'https://github.com/code-gio/svelte-firekit-docs',
    npm: '',

    quickLinks: [
        { title: 'Customize', href: '/docs/customize' },
        { title: 'Examples', href: '/docs/examples' }
    ],
    logo: '/logo.svg',
    logoDark: '/logo-white.svg',
    favicon: '/favicon.png',
};


export let navItems: NavItem[] = [
    {
        title: 'Docs',
        href: '/docs'
    },

];

export let socialLinks: SocialLink[] = [

    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/robertjemerick/',
        icon: 'linkedin'
    },
    {
        title: 'GitHub',
        href: 'https://github.com/bemerick',
        icon: 'github'
    },

];


export const features: Feature[] = [
    {
        icon: Boxes,
        title: 'GPPA Documentation',
        description: 'Full documentation for the Guide to Personnel Action Processing'
    },
    {
        icon: Workflow,
        title: 'Secure Processing',
        description: 'Cloud based deployment in secure environment'
    },
    {
        icon: Paintbrush,
        title: 'GPPA Tools',
        description: 'Interactive tools to enable access to specific personnel action steps and NOA codes.'
    },
    {
        icon: Zap,
        title: 'Fast & Modern',
        description: 'Powered by Svelte 5, MDSvex, and TailwindCSS for optimal performance and user experience'
    }
];

export let promoConfig: PromoConfig = {
    title: 'Need help with your project?',
    description:
        'I offer custom development services, consulting, and technical guidance for your web applications.',
    ctaText: "Let's work together",
    ctaLink: 'mailto:info@codegio.com',
    lightImage: '/images/dev-services-light.jpg',
    darkImage: '/images/dev-services-dark.jpg'
};