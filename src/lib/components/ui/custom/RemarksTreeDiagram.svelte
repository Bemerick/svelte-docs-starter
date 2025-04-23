<!-- RemarksTreeDiagram.svelte -->
<script>
	import { onMount } from 'svelte';
	import RemarksTreeNode from './RemarksTreeNode.svelte';
	import { remarksTreeData } from './remarksTreeData.js';

	let expandAll = false;

	// Toggle expand all nodes
	function handleExpandAll() {
		expandAll = !expandAll;
	}
</script>

<div class="p-4">
	<div class="mb-6 flex items-center justify-between">
		<h1 class="text-2xl font-bold text-gray-800">Chapter 15 Remarks</h1>
		<button
			class="rounded-md bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
			on:click={handleExpandAll}
		>
			{expandAll ? 'Collapse All' : 'Expand All'}
		</button>
	</div>

	<div class="overflow-auto rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
		<RemarksTreeNode
			node={remarksTreeData}
			level={0}
			isOpen={true}
			{expandAll}
			isLastChild={false}
		/>
	</div>

	<div class="mt-4 text-sm text-gray-500">
		<p>Click on nodes with the ► symbol to expand or collapse them.</p>
	</div>
</div>
