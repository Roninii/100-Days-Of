<template>
  <BaseCard title="Login with email and password">
    <form class="grid gap-10 py-8 leading-relaxed text-lg">
      <BaseInput type="email" label="email" />
      <BaseInput type="password" label="password" />
      <div class="flex justify-center">
        <BaseButton type="submit" label="Log In" />
      </div>
    </form>
  </BaseCard>
</template>

<script>
export default {}
</script>

<style scoped></style>
