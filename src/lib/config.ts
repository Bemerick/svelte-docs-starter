
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
    title: 'Guide to Processing Personnel Actions (GPPA)',
    description:
        'The Guide to Processing Personnel Actions (GPPA) posted on this site is the most current version. Chapters of the GPPA are being revised on an ongoing basis.  As a chapter is revised, the date it was last updated is noted beside each chapter title. This document contains information on how to prepare and process personnel actions, Standard Form 52 (SF-52), and Standard Form 50 (SF-50).',
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
        title: 'Interactive Visualizations',
        description: 'Interactive process tools help you find key information quickly and apply data to rea-world scenarios.'
    },
    {
        icon: Paintbrush,
        title: 'Modern Interface',
        description: 'A more intuitive and modern interface to navigate the complex GPPA documentation.'
    },
    {
        icon: Zap,
        title: 'Additional Features',
        description: 'Better GPPA chapter navigation and full content searching to find what you need faster.'
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