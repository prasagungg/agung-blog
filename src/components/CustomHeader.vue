<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  currentPath: string;
  siteTitle: string;
}>();

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const isActive = (path: string) => {
  if (path === "/") return props.currentPath === "/";
  return props.currentPath.startsWith(path);
};

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];
</script>

<template>
  <header
    class="sticky top-4 z-50 w-full max-w-3xl mx-auto flex justify-center px-4 pointer-events-none mb-12"
  >
    <nav class="pointer-events-auto relative w-full sm:w-auto">
      <div
        class="pixel-box bg-white/90 backdrop-blur-sm flex items-center justify-between sm:justify-center gap-8 px-6 py-2"
      >
        <a
          href="/"
          class="font-pixel text-xl tracking-wider text-[var(--color-cozy-brown)] hover:text-[var(--color-cozy-orange)] transition-colors no-underline flex items-center gap-2"
          @click="closeMenu"
        >
          <span class="text-2xl animate-float inline-block">⛺</span>
          {{ siteTitle }}
        </a>

        <div
          class="hidden sm:flex items-center gap-6 font-pixel text-sm uppercase tracking-widest"
        >
          <a
            v-for="item in menuItems"
            :key="item.path"
            :href="item.path"
            class="relative transition-all hover:-translate-y-1"
            :class="
              isActive(item.path)
                ? 'text-[var(--color-cozy-orange)] font-bold'
                : 'text-[var(--color-cozy-brown)] hover:text-[var(--color-cozy-orange)]'
            "
          >
            {{ item.label }}
            <span
              v-if="isActive(item.path)"
              class="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs"
            >
              ▲
            </span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="sm:hidden font-pixel text-[var(--color-cozy-brown)] hover:text-[var(--color-cozy-orange)] p-2"
        >
          {{ isMenuOpen ? "CLOSE" : "MENU" }}
        </button>
      </div>

      <!-- Mobile Dropdown -->
      <Transition
        enter-active-class="transition-transform duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0 -translate-y-4"
        enter-to-class="transform scale-100 opacity-100 translate-y-0"
        leave-active-class="transition-transform duration-150 ease-in"
        leave-from-class="transform scale-100 opacity-100 translate-y-0"
        leave-to-class="transform scale-95 opacity-0 -translate-y-4"
      >
        <div
          v-if="isMenuOpen"
          class="absolute top-full left-0 right-0 mt-4 origin-top z-50"
        >
          <div class="pixel-box bg-white flex flex-col gap-2 p-4 text-center">
            <a
              v-for="item in menuItems"
              :key="item.path"
              :href="item.path"
              @click="closeMenu"
              class="font-pixel uppercase tracking-wider py-3 border-b-2 border-dashed border-[var(--color-cozy-brown)] last:border-0 hover:bg-[var(--color-cozy-cream)] transition-colors"
              :class="
                isActive(item.path)
                  ? 'text-[var(--color-cozy-orange)]'
                  : 'text-[var(--color-cozy-brown)]'
              "
            >
              {{ item.label }}
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>
