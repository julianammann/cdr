<template>
  <div class="relative px-6 lg:px-8">
    <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
      <div>
        <div>
          <h1
            class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl"
          >
            Willkommen!
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
            Vielen Dank für Ihr Interesse bedürftigen zu helfen!
          </p>
          <div class="mt-8 flex gap-x-4 sm:justify-center">
            <RouterLink
              class="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
              to="/clothing-donation"
              >Kleiderspende
              <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
