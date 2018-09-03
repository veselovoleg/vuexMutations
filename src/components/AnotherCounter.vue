<template>
    <div>
        <button class="btn btn-primary" @click="increment(1000)">Increment</button>
        <button class="btn btn-primary" @click="decrement(500)">Decrement</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["increment", "decrement"])
  }
};
</script>