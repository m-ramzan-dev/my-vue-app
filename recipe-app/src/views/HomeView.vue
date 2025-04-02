<script setup lang="ts">
</script>

<template>
  <main>
    <h1>Home</h1>
    <p>
      Welcome to the Recipe App! Here you can find and manage your favorite
      recipes.
    </p>
  </main>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/favorites">Favorites</RouterLink>
      <RouterLink to="/add-favorites">Add Favorites</RouterLink>
    </nav>
  </header>
</template>
