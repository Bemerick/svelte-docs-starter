<!-- components/DocumentUpload.svelte -->
<script>
	import { createEventDispatcher } from 'svelte';
	import { marked } from 'marked';

	const dispatch = createEventDispatcher();
	let fileInput;
	let isDragging = false;
	let isLoading = false;
	let error = null;

	// Handle drag events
	function handleDragEnter(e) {
		e.preventDefault();
		isDragging = true;
	}

	function handleDragLeave(e) {
		e.preventDefault();
		isDragging = false;
	}

	function handleDragOver(e) {
		e.preventDefault();
	}

	function handleDrop(e) {
		e.preventDefault();
		isDragging = false;

		const files = e.dataTransfer.files;
		if (files.length > 0) {
			processFile(files[0]);
		}
	}

	function handleFileInput(e) {
		const file = e.target.files[0];
		if (file) {
			processFile(file);
		}
	}

	function processFile(file) {
		if (!file.name.endsWith('.md')) {
			error = 'Please upload a markdown (.md) file';
			setTimeout(() => (error = null), 3000);
			return;
		}

		error = null;
		isLoading = true;

		const reader = new FileReader();

		reader.onload = async (e) => {
			try {
				const content = e.target.result;
				const html = marked.parse(content);

				// Create a document object
				const document = {
					id: Date.now().toString(),
					name: file.name,
					rawContent: content,
					htmlContent: html,
					chunks: chunkText(content)
				};

				// Prepare the document for AI processing
				await prepareForAI(document);

				// Dispatch the document to the parent component
				dispatch('documentUploaded', document);

				// Reset the file input
				if (fileInput) {
					fileInput.value = '';
				}
			} catch (err) {
				console.error('Error processing file:', err);
				error = 'Failed to process the document';
			} finally {
				isLoading = false;
			}
		};

		reader.onerror = () => {
			error = 'Failed to read the file';
			isLoading = false;
		};

		reader.readAsText(file);
	}

	// Split text into manageable chunks for better AI processing
	function chunkText(text, chunkSize = 1000) {
		const chunks = [];
		let currentChunk = '';

		// Split by paragraphs first
		const paragraphs = text.split(/\n\s*\n/);

		for (const paragraph of paragraphs) {
			if (currentChunk.length + paragraph.length < chunkSize) {
				currentChunk += (currentChunk ? '\n\n' : '') + paragraph;
			} else {
				if (currentChunk) {
					chunks.push(currentChunk);
				}
				currentChunk = paragraph;
			}
		}

		if (currentChunk) {
			chunks.push(currentChunk);
		}

		return chunks;
	}

	// Prepare document for AI by generating embeddings or other preprocessing
	async function prepareForAI(document) {
		try {
			// Call the backend API to generate embeddings for each chunk
			const response = await fetch('http://localhost:3000/api/prepare-document', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					chunks: document.chunks
				})
			});

			if (!response.ok) {
				throw new Error(`API error: ${response.status}`);
			}

			const data = await response.json();

			// Add embeddings to document
			document.embeddings = data.embeddings;
			document.prepared = true;

			return document;
		} catch (error) {
			console.error('Error preparing document for AI:', error);

			// Fallback: just mark as prepared without embeddings
			// The QA interface will use keyword matching instead
			document.prepared = true;
			console.warn('Using fallback document preparation without embeddings');

			return document;
		}
	}
</script>

<div class="w-full">
	<div
		class="rounded-lg border-2 border-dashed p-4 text-center {isDragging
			? 'border-blue-500 bg-blue-50'
			: 'border-gray-300 hover:border-gray-400'}"
		on:dragenter={handleDragEnter}
		on:dragleave={handleDragLeave}
		on:dragover={handleDragOver}
		on:drop={handleDrop}
	>
		{#if isLoading}
			<div class="flex items-center justify-center">
				<svg
					class="h-6 w-6 animate-spin text-blue-500"
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
				<span class="ml-2 text-sm">Processing...</span>
			</div>
		{:else}
			<label class="cursor-pointer">
				<div class="flex flex-col items-center">
					<svg
						class="h-8 w-8 text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
						></path>
					</svg>
					<p class="mt-2 text-sm text-gray-500">Drop markdown or click</p>
					<p class="mt-1 text-xs text-gray-400">Format: .md</p>
				</div>
				<input
					type="file"
					accept=".md"
					class="hidden"
					on:change={handleFileInput}
					bind:this={fileInput}
				/>
			</label>
		{/if}
	</div>

	{#if error}
		<div class="mt-2 text-sm text-red-500">{error}</div>
	{/if}
</div>
