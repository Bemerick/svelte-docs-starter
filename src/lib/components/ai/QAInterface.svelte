<!-- components/QAInterface.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { processMarkdownContent, prepareForAI } from '$lib/utils/markdownLoader';

	let documents: any[] = [];
	let question = '';
	let answer: string | null = null;
	let isLoading = false;
	let error: string | null = null;
	let answerHistory: Array<{
		id: string;
		question: string;
		answer: string;
		timestamp: Date;
	}> = [];

	const SERVER_URL = 'http://localhost:3000';

	onMount(async () => {
		try {
			const response = await fetch(`${SERVER_URL}/api/content`);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const markdownFiles = await response.json();
			
			for (const file of markdownFiles) {
				const fileResponse = await fetch(file.url);
				if (!fileResponse.ok) {
					throw new Error(`Failed to fetch ${file.name}: ${fileResponse.status}`);
				}
				const content = await fileResponse.text();
				const doc = processMarkdownContent(content, file.name);
				await prepareForAI(doc);
				documents = [...documents, doc];
			}
		} catch (err) {
			console.error('Error loading markdown files:', err);
			error = 'Failed to load documentation files.';
		}
	});

	async function handleSubmit() {
		if (!question.trim()) return;

		isLoading = true;
		error = null;

		try {
			const response = await queryAI(question, documents);

			const newQAPair = {
				id: Date.now().toString(),
				question,
				answer: response.answer,
				timestamp: new Date()
			};

			answerHistory = [newQAPair, ...answerHistory];
			answer = response.answer;
			question = '';
		} catch (err) {
			console.error('Error getting answer:', err);
			error = 'Failed to get answer from AI.';
		} finally {
			isLoading = false;
		}
	}

	async function queryAI(query: string, documents: any[]) {
		try {
			const response = await fetch(`${SERVER_URL}/api/query`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					question: query,
					documents: documents.map(doc => ({
						chunks: doc.chunks,
						embeddings: doc.embeddings || []
					}))
				})
			});

			if (!response.ok) {
				throw new Error(`API error: ${response.status}`);
			}

			return await response.json();
		} catch (error) {
			console.error('Error calling AI service:', error);
			return fallbackQueryProcessing(query, documents);
		}
	}

	function fallbackQueryProcessing(query: string, documents: any[]) {
		const queryTerms = query.toLowerCase().split(/\s+/);
		let relevantChunks: string[] = [];

		for (const doc of documents) {
			const docChunks = doc.chunks
				.filter((chunk: string) => {
					const chunkLower = chunk.toLowerCase();
					return queryTerms.some((term) => chunkLower.includes(term));
				})
				.map((chunk: string) => `[From ${doc.name}] ${chunk}`);
			
			relevantChunks = [...relevantChunks, ...docChunks];
		}

		relevantChunks = relevantChunks.slice(0, 3);

		if (relevantChunks.length === 0) {
			return {
				answer: "I couldn't find relevant information about that in any of the documents.",
				sources: []
			};
		}

		const context = relevantChunks.join(' ');

		let answer;
		if (query.toLowerCase().includes('what')) {
			answer = `Based on the documents, ${context.slice(0, 200)}...`;
		} else if (query.toLowerCase().includes('how')) {
			answer = `The documentation explains that ${context.slice(0, 200)}...`;
		} else if (query.toLowerCase().includes('why')) {
			answer = `According to the documents, ${context.slice(0, 200)}...`;
		} else {
			answer = `The documentation states: "${context.slice(0, 200)}..."`;
		}

		return {
			answer,
			sources: relevantChunks.map((chunk) => chunk.split(']')[0] + ']')
		};
	}
</script>

<div class="qa-interface flex h-full flex-col">
	<h2 class="sticky top-0 z-10 mb-4 border-b bg-white py-2 text-xl font-semibold">
		Ask Questions About the Documentation
	</h2>

	<form on:submit|preventDefault={handleSubmit} class="sticky top-14 z-10 mb-4 bg-white pb-2">
		<div class="flex gap-2">
			<input
				type="text"
				bind:value={question}
				placeholder="Ask a question about the documentation..."
				class="flex-grow rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
				disabled={isLoading}
			/>
			<button
				type="submit"
				class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 disabled:bg-blue-300"
				disabled={isLoading || !question.trim()}
			>
				{#if isLoading}
					<svg
						class="h-5 w-5 animate-spin text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
						></circle>
						<path
							class="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
				{:else}
					Ask
				{/if}
			</button>
		</div>

		{#if error}
			<div class="mt-2 text-sm text-red-500">{error}</div>
		{/if}
	</form>

	<div class="flex-grow overflow-y-auto">
		{#if isLoading}
			<div class="rounded-lg bg-gray-100 p-4">
				<div class="flex items-center space-x-2">
					<div class="flex animate-pulse space-x-2">
						<div class="h-2 w-2 rounded-full bg-gray-300"></div>
						<div class="h-2 w-2 rounded-full bg-gray-300"></div>
						<div class="h-2 w-2 rounded-full bg-gray-300"></div>
					</div>
					<div class="text-gray-500">Thinking...</div>
				</div>
			</div>
		{:else if answer}
			<div class="mb-4 rounded-lg border border-blue-100 bg-blue-50 p-4">
				<h3 class="mb-2 font-medium text-blue-800">Answer:</h3>
				<p class="text-gray-800">{answer}</p>
			</div>
		{/if}

		{#if answerHistory.length > 0}
			<div>
				<h3 class="mb-3 text-lg font-medium">Previous Questions</h3>
				<div class="space-y-4">
					{#each answerHistory as qa}
						<div class="rounded-lg border border-gray-200 bg-gray-50 p-3">
							<p class="font-medium text-gray-700">{qa.question}</p>
							<p class="mt-2 text-gray-600">{qa.answer}</p>
							<p class="mt-2 text-xs text-gray-400">
								{new Date(qa.timestamp).toLocaleString()}
							</p>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>
