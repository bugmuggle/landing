<template>
  <div class="w-full max-w-screen-xl mx-auto block min-h-screen flex flex-col">
    <div class="flex items-center h-20">
      <NuxtLink to="/">
        <HeroLogo />
      </NuxtLink>

      <div class="grow" />

      <div class="inline-flex items-center gap-4">

        <UButton
          label="Team"
          size="xl"
          color="black"
          variant="ghost"
          to="/team"
        />


        <NuxtLink to="https://www.linkedin.com/showcase/bugmuggle/" target="_blank">
          <UButton
            icon="i-simple-icons-linkedin"
            label="LinkedIn"
            size="lg"
            color="black"
            variant="outline"
          >
            <template #trailing>
              <UIcon name="material-symbols:open-in-new-rounded" class="w-5 h-5" />
            </template>
          </UButton>
        </NuxtLink>

        <NuxtLink to="https://github.com/bugmuggle" target="_blank">
          <UButton
            icon="icon-park-outline:github"
            append-icon="heroicons:arrow-top-right-on-square"
            label="GitHub"
            size="lg"
            color="black"
            variant="solid"
          >
            <template #trailing>
              <UIcon name="material-symbols:open-in-new-rounded" class="w-5 h-5" />
            </template>
          </UButton>
        </NuxtLink>
      </div>
    </div>

    <slot />

    <div class="grow" />

    <div class="flex items-center justify-center h-20">
      <p class="text-sm text-gray-500">
        &copy; {{ new Date().getFullYear() }}
        <NuxtLink to="https://xplorebits.com" target="_blank" class="underline">
          Xplorebits Technologies (OPC) Private Limited
        </NuxtLink>.
        All rights reserved.
      </p>
    </div>
  </div>
</template>

<style scoped>
.font-plus-jakarta-sans {
  font-family: Plus Jakarta Sans, sans-serif;
}
</style>
