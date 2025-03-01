<template>
  <div>
    <h1>Home Screen</h1>
    <RouterLink to="/projects">Go to Projects</RouterLink>
  </div>
</template>

<script>
import { supabase } from "@/lib/supabaseClient";

(async () => {
  const { data, error } = await supabase.from("projects").select();
  if (error) console.log(error);
  console.log(data);
  return data;
})();
</script>