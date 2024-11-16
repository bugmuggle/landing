<template>
  <div class="w-full max-w-screen-lg mx-auto px-4 sm:px-6">
    <div class="h-auto py-8 sm:py-12 flex flex-col items-center justify-center gap-3">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-center leading-snug">
        The Core Team
      </h1>
      <p class="text-lg sm:text-xl text-center w-full max-w-2xl leading-snug">
        We are only journey to leberate the world of async collaboration.
      </p>
    </div>

    <div class="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 flex-wrap">
      <div class="w-auto h-auto space-y-3">
        <div
          class="w-32 h-32 rounded-full bg-gray-200 border-4 border-black block mx-auto bg-cover bg-center bg-no-repeat"
          style="background-image: url('https://avatars.githubusercontent.com/u/35134207?v=4')"
        />
        <div class="space-y-0">
          <p class="text-lg text-center font-bold">
            Kiran Sai K
          </p>
          <p class="text-center">
            Lead Software Engineer
          </p>
          <div class="flex items-center justify-center gap-3 pt-2">
            <a href="https://www.linkedin.com/in/saikksub/" target="_blank">
              <Icon name="mdi:linkedin" class="w-5 h-5" />
            </a>
            <a href="https://github.com/saikksub/" target="_blank">
              <Icon name="mdi:github" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div class="w-auto h-auto space-y-3">
        <div
          class="w-32 h-32 rounded-full bg-gray-200 border-4 border-black block mx-auto bg-cover bg-center bg-no-repeat"
          style="background-image: url('https://avatars.githubusercontent.com/u/155705099?v=4')"
        />
        <div class="space-y-0">
          <p class="text-lg text-center font-bold">
            Umesh Chandra
          </p>
          <p class="text-center">
            Associate Software Engineer
          </p>
          <div class="flex items-center justify-center gap-3 pt-2">
            <a href="https://www.linkedin.com/in/umesh-devineni-340552325/" target="_blank">
              <Icon name="mdi:linkedin" class="w-5 h-5" />
            </a>
            <a href="https://github.com/umesh1702/" target="_blank">
              <Icon name="mdi:github" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Bugmuggle - The Core Team',
  meta: [
    { name: 'description', content: 'Bugmuggle is open source, serverless task management and communication software designed to simplify collaboration for your async team.' }
  ]
})
</script>
