<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

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

// Cek link aktif
const isActive = (path: string) => {
  if (path === "/") return props.currentPath === "/";
  return props.currentPath.startsWith(path);
};

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
];
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full max-w-3xl mx-auto flex justify-center pt-4 pb-2 pointer-events-none"
  >
    <nav class="pointer-events-auto relative z-50">
      <div
        class="absolute inset-0 bg-[#001E43] border-b-4 border-cyan-400 -skew-x-12 shadow-[0_0_15px_rgba(34,211,238,0.6)]"
      ></div>

      <div class="relative flex items-center gap-8 px-10 py-3 text-white">
        <a
          href="/"
          class="text-xl md:text-2xl font-black italic tracking-tighter uppercase text-white hover:text-cyan-300 transition-colors no-underline drop-shadow-md"
          @click="closeMenu"
        >
          {{ siteTitle }}
          <span class="text-cyan-400 text-xs align-top">©</span>
        </a>

        <div
          class="hidden sm:flex items-center gap-6 font-bold uppercase tracking-widest text-sm"
        >
          <a
            v-for="item in menuItems"
            :key="item.path"
            :href="item.path"
            class="relative group transition-colors"
            :class="
              isActive(item.path)
                ? 'text-cyan-400'
                : 'text-slate-300 hover:text-cyan-300'
            "
          >
            {{ item.label }}
            <span
              v-if="isActive(item.path)"
              class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full"
            ></span>
          </a>
        </div>
      </div>
    </nav>

    <div class="sm:hidden pointer-events-auto fixed bottom-6 right-6 z-50">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0 translate-y-4"
        enter-to-class="transform scale-100 opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform scale-100 opacity-100 translate-y-0"
        leave-to-class="transform scale-95 opacity-0 translate-y-4"
      >
        <div
          v-if="isMenuOpen"
          class="absolute bottom-16 right-0 w-48 mb-2 origin-bottom-right"
        >
          <div
            class="bg-[#001E43] border-2 border-cyan-400 p-4 rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            <nav class="flex flex-col gap-3 text-center">
              <a
                v-for="item in menuItems"
                :key="item.path"
                :href="item.path"
                @click="closeMenu"
                class="font-bold uppercase tracking-wider text-sm py-2 border-b border-cyan-500/30 last:border-0 hover:text-cyan-300 transition-colors"
                :class="
                  isActive(item.path) ? 'text-cyan-400' : 'text-slate-200'
                "
              >
                {{ item.label }}
              </a>
            </nav>
          </div>
        </div>
      </Transition>

      <button
        @click="toggleMenu"
        class="bg-cyan-400 text-black w-14 h-14 rounded-full font-bold shadow-[0_0_15px_rgba(34,211,238,0.6)] flex items-center justify-center border-2 border-white hover:scale-110 hover:bg-white transition-all active:scale-95"
      >
        <span v-if="!isMenuOpen">MENU</span>
        <span v-else class="text-xl">✕</span>
      </button>
    </div>
  </header>
</template>
