<!-- RemarkTreeNode.svelte -->
<script>
	import { slide } from 'svelte/transition';

	export let node;
	export let level = 0;
	export let isOpen = false;
	export let expandAll = false;
	export let isLastChild = false;

	let isExpanded = isOpen;
	$: isExpanded = expandAll ? true : isExpanded;

	const hasChildren = node.children && node.children.length > 0;

	// Toggle the expanded state
	function handleToggle() {
		if (hasChildren) {
			isExpanded = !isExpanded;
		}
	}

	// Color scheme based on level
	const colors = {
		0: { bg: 'bg-indigo-100', border: 'border-indigo-500', text: 'text-indigo-800' },
		1: { bg: 'bg-teal-100', border: 'border-teal-500', text: 'text-teal-800' },
		2: { bg: 'bg-orange-100', border: 'border-orange-500', text: 'text-orange-800' },
		3: { bg: 'bg-pink-100', border: 'border-pink-500', text: 'text-pink-800' }
	};

	const colorScheme = colors[level] || colors[0];

	// Check if node has additional info
	const hasAdditionalInfo = node.remark || node.notes;

	// Format the node's name - if it's a number, convert to string
	const nodeName = typeof node.name === 'number' ? node.name.toString() : node.name;
</script>

<div class="relative">
	<div class="flex items-start">
		<!-- Connector lines -->
		{#if level > 0}
			<div
				class="absolute -left-4 top-6 w-4 border-t border-gray-400 {isLastChild ? '' : ''}"
			></div>
		{/if}

		<div class="flex flex-col">
			<!-- Node content -->
			<div
				class="mb-2 rounded-lg p-3 shadow-md {colorScheme.bg} {colorScheme.border} border-l-4 transition-all duration-300 {hasChildren
					? 'cursor-pointer'
					: ''}"
				on:click={handleToggle}
				style="max-width: 650px; min-width: 300px;"
			>
				<div class="flex items-center justify-between">
					<div class="font-medium {colorScheme.text}">
						{nodeName}
						{#if hasChildren}
							<span class="ml-2 text-gray-600">
								{isExpanded ? '▼' : '►'}
							</span>
						{/if}
					</div>

					{#if node.remarkCode}
						<div class="rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-700">
							{node.remarkCode}
						</div>
					{/if}
				</div>

				<!-- Additional info -->
				{#if hasAdditionalInfo}
					<div class="mt-2 border-t border-gray-200 pt-2 text-sm">
						{#if node.remark}
							<div class="mt-1">
								<span class="font-semibold">Remark:</span>
								{node.remark.trim()}
							</div>
						{/if}
						{#if node.notes}
							<div class="mt-2 rounded bg-gray-50 p-2 text-xs text-gray-700">
								<span class="font-semibold">Notes:</span>
								{node.notes}
							</div>
						{/if}
					</div>
				{/if}
			</div>

			<!-- Children nodes -->
			{#if hasChildren && isExpanded}
				<div class="relative ml-6" transition:slide={{ duration: 300 }}>
					<!-- Vertical line connecting children -->
					<div class="absolute bottom-4 left-0 top-0 border-l border-gray-400"></div>

					{#each node.children as child, index}
						<svelte:self
							node={child}
							level={level + 1}
							isOpen={false}
							{expandAll}
							isLastChild={index === node.children.length - 1}
						/>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
