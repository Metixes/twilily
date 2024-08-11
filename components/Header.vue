<template>
  <header
    :class="[
      { 'header-sticky': headerSticky },
      'sticky top-0 flex h-16 items-center gap-4 border-b justify-between bg-background px-4 md:px-6 z-10',
    ]">
    <span class="logo">TWILILY</span>
    <nav
      class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Nuxtlink
        to="/"
        class="flex items-center gap-2 text-lg font-semibold md:text-base">
        <span class="sr-only">TWILILY</span>
      </Nuxtlink>
      <NuxtLink
        to="/"
        class="text-foreground transition-colors hover:text-foreground">
        Home
      </NuxtLink>
      <NuxtLink
        to="#futures"
        class="text-muted-foreground transition-colors hover:text-foreground">
        Features
      </NuxtLink>
      <NuxtLink
        to="#plan"
        class="text-muted-foreground transition-colors hover:text-foreground">
        Plan
      </NuxtLink>
      <NuxtLink
        to="#faq"
        class="text-muted-foreground transition-colors hover:text-foreground">
        FAQ
      </NuxtLink>
      <NuxtLink
        to="#contact"
        class="text-muted-foreground transition-colors hover:text-foreground">
        Contact
      </NuxtLink>
      <a
        disabled
        href="#"
        class="text-muted-foreground transition-colors hover:text-foreground">
        Log in
      </a>
      <a
        disabled
        href="#"
        class="text-muted-foreground transition-colors hover:text-foreground">
        Sign up
      </a>
    </nav>
    <Sheet>
      <SheetTrigger as-child>
        <Button
          variant="outline"
          size="icon"
          class="bg-teal-500/70 hover:bg-teal-500 md:hidden">
          <Icon name="lucide:menu" class="w-[24px] h-[24px]" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav class="grid gap-6 text-lg font-medium">
          <a href="#" class="flex items-center gap-2 text-lg font-semibold">
            <span class="sr-only">Acme Inc</span>
          </a>
          <a href="/" class="hover:text-foreground">Home </a>
          <a
            href="/#futures"
            class="text-muted-foreground hover:text-foreground">
            Futures
          </a>
          <a href="/#plan" class="text-muted-foreground hover:text-foreground">
            Plan
          </a>
          <a href="/#faq" class="text-muted-foreground hover:text-foreground">
            FAQ
          </a>
          <a
            href="/#contact"
            class="text-muted-foreground hover:text-foreground">
            Contact
          </a>
          <a href="#" class="text-muted-foreground hover:text-foreground">
            Log in
          </a>
          <a href="#" class="text-muted-foreground hover:text-foreground">
            Sign up
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
import { useWindowScroll } from "@vueuse/core";

const { y } = useWindowScroll();
const headerSticky = ref(false);

watch(
  () => y.value,
  (n, o) => {
    if (n > 40) {
      headerSticky.value = true;
    } else {
      headerSticky.value = false;
    }
  }
);
</script>

<style scoped lang="scss">
.header-sticky {
  backdrop-filter: blur(10px);
  transition: top 0.3s ease-in, background-color 0.5s ease;
  background: rgba(131, 197, 190, 0.3);
}

.logo {
  margin-top: -10px;
  padding: 15px 20px 15px 20px;
  background-color: #1ab394;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #17a185;
  }
}
</style>
