<script setup lang="ts">
useSeoMeta({
  title: 'Speedrun Club',
  ogTitle: 'Speedrun Club',
  description: 'A family of web services created by and for fans of speedrunning.',
  ogDescription: 'A family of web services created by and for fans of speedrunning.',
})
</script>

<template>
    <h1 class="text-4xl font-display mb-2 text-greenkyl-600 dark:text-greenkyl-400">speedrun.club</h1>
    <p>A family of web services created by and for fans of speedrunning.</p>

    <UDivider class="my-5" />

    <h2 class="text-2xl font-display mb-4">our work:</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <UCard>
            <template #header>
                <!-- todo: fix link color -->
                <a href="https://vods.speedrun.club/" class="text-lg">vods.speedrun.club</a>
            </template>
            A community-driven website and API for
            discovering archived videos of runs from speedrunning marathon events
            like Games Done Quick (GDQ) and the European Speedrunner Assembly (ESA)
        </UCard>
        <UCard class="opacity-50 invisible md:visible">
            <template #header>
                <p class="text-lg">&nbsp;</p>
            </template>
            <p>&nbsp;</p>
        </UCard>
        <UCard class="opacity-50 invisible md:visible">
            <template #header>
                <p class="text-lg">&nbsp;</p>
            </template>
            <p>&nbsp;</p>
        </UCard>
    </div>
</template>