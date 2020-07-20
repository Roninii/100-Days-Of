<template>
  <Card title="Login with email and password">
    <form class="grid gap-10 py-8 leading-relaxed text-lg">
      <input type="email" />
      <input type="password" />
      <div class="flex justify-center">
        <input type="submit" value="Log In" />
      </div>
    </form>
  </Card>
</template>

<script>
export default {}
</script>

<style scoped>
input:not([type='submit']) {
  @apply border-b-2;
}

input:not([type='submit']):focus {
  @apply outline-none;
  @apply border-purple-500;
}
</style>
