<template>
  <div class="w-full max-w-screen-md mx-auto">
    <div class="h-auto py-12 flex flex-col items-center justify-center gap-6">
      <h1 class="text-5xl font-black w-full text-left leading-snug">
        Manifesto
      </h1>
      <p class="text-xl text-left w-full leading-snug pl-12">
        Empower developers to manage projects effortlessly with a modern, serverless, and open-source platform.
        By leveraging the scalability of Cloudflare Workers, we aim to create a tool that is fast, lightweight,
        and accessible to teams of all sizes, anywhere in the world.
      </p>

      <h1 class="text-3xl font-black w-full text-left leading-snug">
        Core Principles
      </h1>

      <h1 class="text-xl font-black w-full text-left leading-snug">
        1 &mdash; Developer-Centric
      </h1>
      <p class="text-xl text-left w-full leading-snug -mt-3 pl-12">
        Built by developers, for developers. Bugmuggle is tailored to the unique needs of a software engineering team, focusing on features like
        task management by integrating with version control platforms like GitHub, GitLab, and Bitbucket.
      </p>

      <h1 class="text-xl font-black w-full text-left leading-snug">
        2 &mdash; Open Source
      </h1>
      <p class="text-xl text-left w-full leading-snug -mt-3 pl-12">
        Transparency and collaboration are at the heart of this project.
        By keeping the software open source, we invite global developers to contribute, adapt and innovate.
      </p>

      <h1 class="text-xl font-black w-full text-left leading-snug">
        3 &mdash; Serverless Scalability
      </h1>
      <p class="text-xl text-left w-full leading-snug -mt-3 pl-12">
        Using Cloudflare Workers ensures low latency and high availability, and zero maintenance for infrastructure.
        The serverless architecture nature reduces costs while maintaining high performance.
      </p>

      <h1 class="text-xl font-black w-full text-left leading-snug">
        4 &mdash; Simplicity and Focus
      </h1>
      <p class="text-xl text-left w-full leading-snug -mt-3 pl-12">
        No bloat, no unnecessary features. The platform is designed to solve specific problems of a development team,
        keeping the interface and workflows clean and intuitive.
      </p>

      <h1 class="text-xl font-black w-full text-left leading-snug">
        5 &mdash; Accessible to All
      </h1>
      <p class="text-xl text-left w-full leading-snug -mt-3 pl-12">
        Free to use, with no barriers to entry. Whether you’re a freelancer, a startup, or a large enterprise,
        Bugmuggle scales with your needs. Plus, you can host your own projects indefinitely using
        <nuxt-link to="https://github.com/nuxt-hub/core" class="underline text-blue-500" target="_blank" rel="noopener noreferrer">NuxtHub</nuxt-link>
        for complete control and flexibility.
      </p>

      <h1 class="text-xl font-black w-full text-left leading-snug">
        6 &mdash; Community-Driven Development
      </h1>
      <p class="text-xl text-left w-full leading-snug -mt-3 pl-12">
        Actively listening to user feedback and prioritizing features that matter most to the community.
        Contributions, discussions, and pull requests are always welcome.
      </p>

      <h1 class="text-3xl font-black w-full text-left leading-snug">
        Core Features
      </h1>

      <div class="flex w-full items-center justify-start flex-wrap gap-6">
        <UButton
          label="Task Management"
          color="black"
          variant="outline"
          size="xl"
        />

        <UButton
          label="Real-time Team Communication"
          color="black"
          variant="outline"
          size="xl"
        />

        <UButton
          label="Git Platform Integration"
          color="black"
          variant="outline"
          size="xl"
        />
      </div>

      <h1 class="text-3xl font-black w-full text-left leading-snug">
        Mission
      </h1>
      <p class="text-xl text-left w-full leading-snug -mt-3 pl-12">
        To empower developers to manage projects effortlessly with a modern, serverless, and open-source platform.
        By leveraging the scalability of Cloudflare Workers, we aim to create a tool that is fast, lightweight,
        and accessible to teams of all sizes, anywhere in the world.
      </p>

      <div class="flex w-full items-center justify-center flex-wrap gap-6">
        <NuxtLink to="https://github.com/bugmuggle" target="_blank" rel="noopener noreferrer">
          <UButton
            :ui="{ rounded: 'rounded-full' }"
            icon="i-simple-icons-github"
            label="GitHub"
            color="black"
            variant="outline"
            size="xl"
          >
            <template #trailing>
              <UIcon name="material-symbols:open-in-new-rounded" class="w-5 h-5" />
            </template>
          </UButton>
        </NuxtLink>

        <NuxtLink to="https://www.linkedin.com/showcase/bugmuggle/" target="_blank" rel="noopener noreferrer">
          <UButton
            :ui="{ rounded: 'rounded-full' }"
            icon="i-simple-icons-linkedin"
            label="LinkedIn"
            color="black"
            variant="outline"
            size="xl"
          >
            <template #trailing>
              <UIcon name="material-symbols:open-in-new-rounded" class="w-5 h-5" />
            </template>
          </UButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
