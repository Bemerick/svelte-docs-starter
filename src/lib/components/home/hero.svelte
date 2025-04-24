<!-- DocHero.svelte -->
<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { ChevronRight, Clipboard, Check } from 'lucide-svelte';
	import { siteConfig } from '$lib/config';
	import { toast } from 'svelte-sonner';

	let isCopied = false;
	const npmCommand = `npm install ${siteConfig.npm}`;

	async function copyNpmCommand() {
		try {
			await navigator.clipboard.writeText(npmCommand);
			isCopied = true;
			toast.success('Copied to clipboard');

			// Reset the copied state after 2 seconds
			setTimeout(() => {
				isCopied = false;
			}, 2000);
		} catch (err) {
			toast.error('Failed to copy to clipboard');
		}
	}
</script>

<div class="relative overflow-hidden">
	<div class="relative mx-auto max-w-[85rem] px-4 pb-10 pt-24 sm:px-6 lg:px-8">
		<!-- Version badge
		<div class="flex justify-center">
			<a
				href={siteConfig.github}
				class="inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white p-1 ps-3 text-sm text-gray-800 transition hover:border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
			>
				Version {siteConfig.version} - Latest Release
				<Badge variant="secondary" class="gap-x-2 rounded-full">
					<span class="hidden sm:inline">View on GitHub</span>
					<ChevronRight class="size-4" />
				</Badge>
			</a>
		</div>  -->

		<!-- Title -->
		<div class="mx-auto mt-5 max-w-2xl text-center">
			<h1
				class="block text-4xl font-bold text-gray-800 dark:text-neutral-200 md:text-5xl lg:text-6xl"
			>
				{siteConfig.title}
			</h1>
		</div>

		<!-- Description -->
		<div class="mx-auto mt-5 max-w-3xl text-left">
			<p class="text-lg text-gray-600 dark:text-neutral-400">
				This toolkit contains OPM guides, manuals, and specifications required for federal HR
				reporting, including:
			</p>
			<ul>
				<li>
					<strong>Guide to Human Resources Reporting (GHRR):</strong> The GHRR is OPM’s guidance for
					federal agencies on how to prepare and submit their HR, payroll, and training data to OPM.
					This guide provides specific requirements for data collection and formatting, ensuring consistency
					and accuracy in the data submitted.
				</li>
				<li>
					<strong>Guide to Personnel Recordkeeping (GRP):</strong> The GPR is OPM’s guidance for federal
					agencies on how to establish, maintain, and transfer official personnel folders (OPFs) and
					other personnel records. It outlines the required documentation for these records, including
					the Standard Form 50 (Notification of Personnel Action) and the DD 214 (Certificate of Release
					or Discharge from Active Duty.
				</li>
				<li>
					<strong>Guide to Data Standards (GDS):</strong> The GDS is OPM’s comprehensive reference for
					federal agencies on how to accurately report and manage data related to human resources, payroll,
					and training. It outlines standards for data elements, defines valid values, and specifies
					how to report and maintain data integrity.
				</li>
				<li>
					<strong>Guide to Personnel Data File Edits:</strong> The Guide to Personnel Data File Edits
					is OPM’s guidance for federal agencies to processes and validates data submitted by agencies
					for the Central Personnel Data File (CPDF). It specifies how the CPDF system edits data received
					from agencies and how those edits are applied.
				</li>
			</ul>
		</div>

		<!-- Action Buttons -->
		<div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
			<Button href="/docs" variant="default">
				Get Started
				<ChevronRight class="size-4" />
			</Button>

			{#if siteConfig.npm !== ''}
				<Button variant="outline" class="font-mono" onclick={copyNpmCommand}>
					{npmCommand}
					<span class="ml-2 rounded bg-gray-200 p-1 dark:bg-neutral-700">
						{#if isCopied}
							<Check class="size-4 text-green-500 transition-transform" />
						{:else}
							<Clipboard class="size-4 transition-transform hover:rotate-6" />
						{/if}
					</span>
				</Button>
			{/if}
		</div>

		<!-- Quick Links 
		<div class="mt-5 flex flex-wrap items-center justify-center gap-2">
			<span class="text-sm text-gray-600 dark:text-neutral-400">Quick links:</span>
			{#each siteConfig.quickLinks as link}
				<Button variant="link" href={link.href} class="h-auto p-1">
					{link.title}
					<ChevronRight class="size-4" />
				</Button>

				{#if link !== siteConfig.quickLinks[siteConfig.quickLinks.length - 1]}
					<span class="text-gray-300 dark:text-neutral-600">•</span>
				{/if}
			{/each}
		</div> -->
	</div>
</div>

<style>
	ul {
		list-style-type: disc;
		padding: 10px 0 !important;
		padding-left: 20px !important;
	}
</style>
