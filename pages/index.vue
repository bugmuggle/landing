<template>
  <div>
    <div class="h-auto py-8 md:py-12 flex flex-col items-center justify-center gap-3 px-4 md:px-6">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-black w-full max-w-3xl text-center leading-tight md:leading-snug">
        It's time for Open Source Task Collaboration Software for your Async Team
      </h1>

      <p class="text-lg md:text-xl text-center w-full max-w-2xl leading-snug">
        Bugmuggle is open source, serverless task management and communication software designed to simplify collaboration for your async team.
      </p>

      <UButton
        icon="heroicons:book-open"
        label="Read Manifesto"
        size="lg"
        color="black"
        variant="solid"
        to="/manifesto"
      />
    </div>

    <div class="w-full max-w-3xl mx-auto space-y-4 p-4 md:p-6">
      <div class="mb-4 md:mb-6">
        <h2 class="text-xl md:text-2xl font-bold">Roadmap</h2>
        <p class="text-base md:text-lg text-gray-600">
          Our roadmap focuses on building features that simplify project management,
          enhance collaboration, and give developers full control through self-hosting.
        </p>
      </div>
      
      <div class="space-y-2 md:space-y-3">
        <div class="flex items-start gap-3" v-for="(item, idx) in roadmap" :key="'roadmap-list-item-' + idx">
          <UCheckbox v-model="item.completed" :ui="{ ring: 'ring-1 ring-black' }" disabled />
          <div>
            <h3 class="font-medium">{{ item.title }}</h3>
            <p class="text-gray-600 text-sm">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Bugmuggle - Open Source Task Collaboration Software',
  meta: [
    { name: 'description', content: 'Bugmuggle is open source, serverless task management and communication software designed to simplify collaboration for your async team.' }
  ]
})

const roadmap = ref([
  {
    title: 'Project Level Membership and Role Based Access Control',
    description: 'Invite team members and assign roles to manage your project',
    completed: false,
  },
  {
    title: 'Project Specific Chat and Notifications',
    description: 'Create, edit, and organize tasks with a clean interface',
    completed: false,
  },
  {
    title: 'Basic Task Management',
    description: 'Create, edit, and organize tasks with a clean interface',
    completed: false,
  },
  {
    title: 'Team Collaboration',
    description: 'Invite team members and assign tasks',
    completed: false,
  },
  {
    title: 'GitHub Integration',
    description: 'Connect with GitHub to manage issues and track pull requests',
    completed: false,
  },
  {
    title: 'GitLab Integration',
    description: 'Connect with GitLab to manage issues and track pull requests',
    completed: false,
  },
  {
    title: 'BitBucket Integration',
    description: 'Connect with BitBucket to manage issues and track pull requests',
    completed: false,
  }
])
</script>
