---
title: QA Agent
description: Intelligent document question and answer.
---

<script>
  import { onMount } from 'svelte';

  import { DocumentUpload } from '$lib/components/ai/';
  import { DocumentView } from '$lib/components/ai/';
  import { QAInterface } from '$lib/components/ai/';
  
  
  let documents = [];
  let selectedDocument = null;
  let isLoading = false;
  
  function handleDocumentUpload(event) {
    const newDocument = event.detail;
    documents = [...documents, newDocument];
    selectedDocument = newDocument;
  }
  
  function selectDocument(doc) {
    selectedDocument = doc;
  }
</script>

<main class="container mx-auto p-4">
  <h1 class="text-3xl font-bold mb-6">Svelte AI Document Q&A</h1>
  
  <div class="flex flex-col lg:flex-row gap-6 h-[80vh]">
    <!-- Document Upload & Document List Panel -->
    <div class="lg:w-1/5 bg-gray-100 p-4 rounded-lg flex flex-col">
      <h2 class="text-xl font-semibold mb-4">Documents</h2>
      <DocumentUpload on:documentUploaded={handleDocumentUpload} />
      
      {#if documents.length > 0}
        <div class="mt-4 flex-grow overflow-y-auto">
          <h3 class="text-lg font-medium mb-2">Your Documents</h3>
          <ul class="space-y-2">
            {#each documents as doc}
              <li>
                <button 
                  class="w-full text-left p-2 rounded {selectedDocument === doc ? 'bg-blue-100' : 'hover:bg-gray-200'}"
                  on:click={() => selectDocument(doc)}
                >
                  {doc.name}
                </button>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
    
    <!-- Document Viewer Panel -->
    {#if selectedDocument}
      <!-- QA Interface Panel -->
      <div class="lg:w-2/5 bg-white p-4 rounded-lg shadow flex flex-col h-full">
        <QAInterface document={selectedDocument} />
      </div>
      
      <div class="lg:w-2/5 bg-white p-4 rounded-lg shadow overflow-y-auto h-full">
        <DocumentView document={selectedDocument} />
      </div>
      
      
    {:else}
      <div class="lg:w-4/5 bg-gray-100 p-8 rounded-lg text-center flex items-center justify-center">
        <p class="text-lg text-gray-500">Upload or select a document to start</p>
      </div>
    {/if}
  </div>
</main>
