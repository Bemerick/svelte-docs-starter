---
title: QA Agent
description: Intelligent document question and answer.
---

<script>
  import { QAInterface } from '$lib/components/ai';
</script>

<main class="container mx-auto p-4">
  <h1 class="text-3xl font-bold mb-6">Documentation Q&A</h1>
  
  <div class="flex flex-col lg:flex-row gap-6 h-[80vh]">
    <div class="w-full bg-white p-4 rounded-lg shadow flex flex-col h-full">
      <QAInterface />
    </div>
  </div>
</main>
