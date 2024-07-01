<script setup lang="ts">
useHead({
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "64x64",
      href: "/icon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      href: "/icon-512.png",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/icon.svg",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap",
    },
  ]
})
useSeoMeta({
  ogType: 'website',
  ogSite: 'speedrun.club',
  ogImage: 'https://speedrun.club/icon-512.png',
  twitterCard: 'summary',
  twitterDnt: 'on',
  ogColor: '#DD22AA',
  themeColor: '#DD22AA',
  ogLocale: 'en_US',
})
</script>

<template>
  <UContainer class="pt-2 sm:pt-4">
    <NuxtPage />
    <!--
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>Welcome to Nuxt UI Starter</h1>
          <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
        </div>
      </template>
      <UButton icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank">Open Nuxt UI Documentation</UButton>
    </UCard>
    -->
  </UContainer>
</template>

<style>
a {
  @apply text-green-500 dark:text-green-400 visited:text-pinkyl-500 dark:visited:text-pinkyl-400 hover:text-pinkyl-600 dark:hover:text-pinkyl-300;
}
</style>
