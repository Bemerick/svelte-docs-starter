<!-- SearchTreeNode.svelte -->
<script>
	import { slide } from 'svelte/transition';

	export let node;
	export let level = 0;
	export let isOpen = false;
	export let expandAll = false;
	export let isLastChild = false;
	export let searchTerm = '';

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
		0: { bg: 'bg-blue-100', border: 'border-blue-500', text: 'text-blue-800' },
		1: { bg: 'bg-green-100', border: 'border-green-500', text: 'text-green-800' },
		2: { bg: 'bg-purple-100', border: 'border-purple-500', text: 'text-purple-800' },
		3: { bg: 'bg-amber-100', border: 'border-amber-500', text: 'text-amber-800' }
	};

	const colorScheme = colors[level] || colors[0];

	// Check if node has additional info
	const hasAdditionalInfo =
		node.natureOfAction || node.authorityCode || node.authority || node.remarkCode || node.remark;

	// Format the node's name - if it's a number, convert to string
	const nodeName = typeof node.name === 'number' ? node.name.toString() : node.name;

	// Function to highlight search term in text
	function highlightText(text, term) {
		if (!term || !text) return text;

		const textStr = text.toString();
		const lowerText = textStr.toLowerCase();
		const lowerTerm = term.toLowerCase();

		if (!lowerText.includes(lowerTerm)) return textStr;

		const index = lowerText.indexOf(lowerTerm);
		const beforeMatch = textStr.substring(0, index);
		const match = textStr.substring(index, index + term.length);
		const afterMatch = textStr.substring(index + term.length);

		return `${beforeMatch}<span class="bg-yellow-200 font-medium">${match}</span>${afterMatch}`;
	}
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
						{@html highlightText(nodeName, searchTerm)}
						{#if hasChildren}
							<span class="ml-2 text-gray-600">
								{isExpanded ? '▼' : '►'}
							</span>
						{/if}
					</div>
				</div>

				<!-- Additional info - only shown for leaf nodes or when expanded -->
				{#if hasAdditionalInfo}
					<div class="mt-2 border-t border-gray-200 pt-2 text-sm">
						{#if node.natureOfAction}
							<div class="mt-1">
								<span class="font-semibold">Nature of Action:</span>
								{@html highlightText(node.natureOfAction.trim(), searchTerm)}
							</div>
						{/if}
						{#if node.authorityCode}
							<div class="mt-1">
								<span class="font-semibold">Authority Code:</span>
								{@html highlightText(node.authorityCode, searchTerm)}
							</div>
						{/if}
						{#if node.authority}
							<div class="mt-1">
								<span class="font-semibold">Authority:</span>
								{@html highlightText(node.authority, searchTerm)}
							</div>
						{/if}
						{#if node.remarkCode}
							<div class="mt-1">
								<span class="font-semibold">Remark Code:</span>
								{@html highlightText(node.remarkCode, searchTerm)}
							</div>
						{/if}
						{#if node.remark}
							<div class="mt-1">
								<span class="font-semibold">Remark:</span>
								{@html highlightText(node.remark.trim(), searchTerm)}
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
							{searchTerm}
						/>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
