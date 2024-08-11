<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
</script>

<template>
  <div class="w-full lg:grid lg:grid-cols-2 bg-teal-200/10">
    <div class="h-[100vh] flex items-center justify-center py-12">
      <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold">Login</h1>
          <p class="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">Password</Label>
              <a
                href="/forgot-password"
                class="ml-auto inline-block text-sm underline">
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" class="w-full"> Login </Button>
          <Button variant="outline" class="w-full"> Login with Google </Button>
        </div>
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <a href="#" class="underline"> Sign up </a>
        </div>
      </div>
    </div>
    <div class="hidden h-hull w-full bg-muted relative lg:block">
      <span
        class="absolute top-0 left-0 z-10 h-full w-full bg-gray-600/50 backdrop-blur-[1px]"></span>
      <video
        class="h-[100vh] w-full object-cover video"
        src="/video/trading.mp4"
        autoplay
        loop
        muted
        :controls="false"></video>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video {
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    background: red;
  }
}
</style>
