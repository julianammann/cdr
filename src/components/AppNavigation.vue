<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              id="logo"
              class="h-8 w-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <div id="title" class="hidden md:block mx-3 text-white">
            <RouterLink to="/">Clothing Donation</RouterLink>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <RouterLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                active-class="bg-gray-900 text-white"
                :class="[
                  'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium',
                ]"
                >{{ item.name }}</RouterLink
              >
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="navbar-toggle inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
        <RouterLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          active-class="bg-gray-900 text-white"
          :class="[
            'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          >{{ item.name }}</RouterLink
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

/**
 * navigation initialization
 * @type {[{name: string, href: string},{name: string, href: string}]}
 */
const navigation = [
  { name: "Home", href: "/" },
  { name: "Kleiderspende", href: "/clothing-donation" },
];
</script>

<style scoped></style>
