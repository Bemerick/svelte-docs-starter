<!-- SearchableTreeDiagram.svelte -->
<script>
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import TreeNode from './SearchTreeNode.svelte';
	import { visualizationTreeData } from './SearchTreeData.js';

	let expandAll = false;
	let searchTerm = '';
	let filteredTreeData = null;
	let originalTreeData = null;

	// Toggle expand all nodes
	function handleExpandAll() {
		expandAll = !expandAll;
	}

	// Handle search input change
	function handleSearch(event) {
		searchTerm = event.target.value.toLowerCase();
		if (!originalTreeData) return;

		if (searchTerm === '') {
			// Reset to original data when search is cleared
			filteredTreeData = { ...originalTreeData };
			return;
		}

		// Filter the tree to only show first-level nodes containing the search term
		const filtered = {
			name: originalTreeData.name,
			children: []
		};

		// Function to check if a node or any of its descendants match the search term
		function nodeContainsSearchTerm(node) {
			// Check node name
			if (node.name && node.name.toString().toLowerCase().includes(searchTerm)) {
				return true;
			}

			// Check additional info
			if (node.natureOfAction && node.natureOfAction.toLowerCase().includes(searchTerm)) {
				return true;
			}
			if (node.authorityCode && node.authorityCode.toLowerCase().includes(searchTerm)) {
				return true;
			}
			if (node.authority && node.authority.toLowerCase().includes(searchTerm)) {
				return true;
			}
			if (node.remarkCode && node.remarkCode.toLowerCase().includes(searchTerm)) {
				return true;
			}
			if (node.remark && node.remark.toLowerCase().includes(searchTerm)) {
				return true;
			}

			// Check children recursively
			if (node.children && node.children.length > 0) {
				return node.children.some((child) => nodeContainsSearchTerm(child));
			}

			return false;
		}

		// Filter first-level nodes
		filtered.children = originalTreeData.children.filter((node) => nodeContainsSearchTerm(node));

		filteredTreeData = filtered;
	}

	onMount(() => {
		// Initialize with data from imported module
		originalTreeData = visualizationTreeData;
		filteredTreeData = { ...originalTreeData };
	});
</script>

<div class="p-4">
	<div class="mb-6 flex flex-col">
		<h1 class="mb-4 text-2xl font-bold text-gray-800">Rules for Visualization Tree Diagram</h1>

		<!-- Search and controls -->
		<div class="mb-4 flex flex-col justify-between gap-4 sm:flex-row">
			<div class="relative max-w-lg flex-grow">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<svg
						class="h-5 w-5 text-gray-400"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<input
					type="text"
					class="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
					placeholder="Search tree nodes..."
					bind:value={searchTerm}
					on:input={handleSearch}
				/>
				{#if searchTerm}
					<button
						class="absolute inset-y-0 right-0 flex items-center pr-3"
						on:click={() => {
							searchTerm = '';
							handleSearch({ target: { value: '' } });
						}}
					>
						<svg
							class="h-5 w-5 text-gray-400 hover:text-gray-600"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				{/if}
			</div>

			<button
				class="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
				on:click={handleExpandAll}
			>
				{expandAll ? 'Collapse All' : 'Expand All'}
			</button>
		</div>

		<!-- Search results info -->
		{#if searchTerm && filteredTreeData}
			<div class="mb-4 text-sm">
				<p class="text-gray-600">
					Showing {filteredTreeData.children.length} top-level {filteredTreeData.children.length ===
					1
						? 'node'
						: 'nodes'}
					containing "{searchTerm}"
				</p>
			</div>
		{/if}
	</div>

	<div class="overflow-auto rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
		{#if !filteredTreeData}
			<div class="flex h-64 items-center justify-center">Loading tree data...</div>
		{:else if filteredTreeData.children.length === 0 && searchTerm}
			<div class="p-6 text-center text-gray-500">
				<svg
					class="mx-auto h-12 w-12 text-gray-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<p class="mt-4">No nodes found matching "{searchTerm}"</p>
				<button
					class="mt-2 text-blue-600 hover:text-blue-800"
					on:click={() => {
						searchTerm = '';
						handleSearch({ target: { value: '' } });
					}}
				>
					Clear search
				</button>
			</div>
		{:else}
			<TreeNode
				node={filteredTreeData}
				level={0}
				isOpen={true}
				{expandAll}
				isLastChild={false}
				{searchTerm}
			/>
		{/if}
	</div>

	<div class="mt-4 text-sm text-gray-500">
		<p>Click on nodes with the ► symbol to expand or collapse them.</p>
	</div>
</div>
