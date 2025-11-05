<script setup lang="ts">
const input = ref('')
</script>

<template>
  <div class="flex flex-row w-full h-full">
    <div class="flex h-full w-full p-5 items-center justify-center">Content</div>
    <div class="flex flex-col h-screen max-h-screen bg-gray-200 w-150 p-3 shadow-lg">
      <Chat :messages="[
        {
          id: '1',
          type: 'user',
          content: 'Hello, how are you?',
        },
        {
          id: '2',
          type: 'assistant',
          content: '# I am good, thank you!',
        },
      ]" v-model:input="input" />
    </div>
  </div>
</template>