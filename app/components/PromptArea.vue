<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const input = defineModel<string>('input', { required: true })
</script>

<template>
  <div class="size-full bg-gray-100 p-2 rounded-lg flex flex-col border border-gray-300 shadow-lg">
    <textarea
      v-model="input"
      class="size-full bg-transparent outline-none resize-none text-gray-500"
    />
    <div class="flex flex-row w-full h-10">
      <div class="w-full flex flex-row mr-auto justify-end">
        <ButtonContainer class="size-8 justify-center items-center flex">
          <FontAwesomeIcon
            :icon="faPaperPlane"
            class="size-4"
          />
        </ButtonContainer>
      </div>
    </div>
  </div>
</template>