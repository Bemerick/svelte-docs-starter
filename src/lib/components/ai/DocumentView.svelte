<!-- components/DocumentView.svelte -->
<script>
	export let document;
</script>

<div class="document-view flex h-full flex-col">
	<h2 class="sticky top-0 z-10 mb-3 border-b bg-white py-2 text-xl font-semibold">
		{document.name}
	</h2>

	<div class="prose max-w-none flex-grow overflow-y-auto">
		{@html document.htmlContent}
	</div>
</div>

<style>
	:global(.prose) {
		max-width: 100%;
		line-height: 1.6;
	}

	:global(.prose h1) {
		font-size: 1.8rem;
		margin-top: 1.5rem;
		margin-bottom: 1rem;
		font-weight: 600;
	}

	:global(.prose h2) {
		font-size: 1.5rem;
		margin-top: 1.25rem;
		margin-bottom: 0.75rem;
		font-weight: 600;
	}

	:global(.prose h3) {
		font-size: 1.25rem;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}

	:global(.prose p) {
		margin-bottom: 1rem;
	}

	:global(.prose ul),
	:global(.prose ol) {
		margin-left: 1rem;
		margin-bottom: 1rem;
	}

	:global(.prose li) {
		margin-bottom: 0.25rem;
	}

	:global(.prose code) {
		background-color: #f3f4f6;
		padding: 0.125rem 0.25rem;
		border-radius: 0.25rem;
		font-family: monospace;
	}

	:global(.prose pre) {
		background-color: #1f2937;
		color: #e5e7eb;
		padding: 1rem;
		border-radius: 0.375rem;
		overflow-x: auto;
		margin-bottom: 1rem;
	}

	:global(.prose pre code) {
		background-color: transparent;
		padding: 0;
		color: inherit;
	}

	:global(.prose blockquote) {
		border-left: 4px solid #e5e7eb;
		padding-left: 1rem;
		font-style: italic;
		margin-bottom: 1rem;
	}
</style>
