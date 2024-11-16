<template>
  <div class="w-full max-w-screen-xl mx-auto block min-h-screen flex flex-col">
    <div class="flex items-center h-20">
      <NuxtLink to="/">
        <HeroLogo />
      </NuxtLink>

      <div class="grow" />

      <div class="hidden md:inline-flex items-center gap-4 pr-4">

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

      <UButton
        icon="i-heroicons-bars-3"
        color="gray"
        variant="ghost"
        class="md:hidden px-4"
        @click="isOpen = true"
      />

      <USlideover v-model="isOpen" side="right">
        <div class="flex flex-col gap-4 p-4">
          <div class="flex justify-end">
            <UButton
              icon="i-heroicons-x-mark"
              color="gray"
              variant="ghost"
              @click="isOpen = false"
            />
          </div>

          <UButton
            label="Team"
            size="xl"
            color="black"
            variant="ghost"
            to="/team"
            block
            @click="isOpen = false"
          />

          <NuxtLink to="https://www.linkedin.com/showcase/bugmuggle/" target="_blank" class="w-full" @click="isOpen = false">
            <UButton
              icon="i-simple-icons-linkedin"
              label="LinkedIn"
              size="lg"
              color="black"
              variant="outline"
              block
            >
              <template #trailing>
                <UIcon name="material-symbols:open-in-new-rounded" class="w-5 h-5" />
              </template>
            </UButton>
          </NuxtLink>

          <NuxtLink to="https://github.com/bugmuggle" target="_blank" class="w-full" @click="isOpen = false">
            <UButton
              icon="icon-park-outline:github"
              append-icon="heroicons:arrow-top-right-on-square"
              label="GitHub"
              size="lg"
              color="black"
              variant="solid"
              block
            >
              <template #trailing>
                <UIcon name="material-symbols:open-in-new-rounded" class="w-5 h-5" />
              </template>
            </UButton>
          </NuxtLink>
        </div>
      </USlideover>
    </div>

    <slot />

    <div class="grow" />

    <div class="flex items-center justify-center h-20 px-4">
      <p class="text-sm text-gray-500 text-center">
        &copy; {{ new Date().getFullYear() }}
        <NuxtLink to="https://xplorebits.com" target="_blank" class="underline hover:text-gray-700">
          <span class="sm:inline">Xplorebits Technologies (OPC) Private Limited</span>
        </NuxtLink>.
        All rights reserved.
      </p>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false)
</script>

<style scoped>
.font-plus-jakarta-sans {
  font-family: Plus Jakarta Sans, sans-serif;
}
</style>
