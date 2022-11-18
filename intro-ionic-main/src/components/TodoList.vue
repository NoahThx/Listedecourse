<template>
  <div id="todo__list">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "TodoList.vue",
  props: {
    name: String,
  },
};
</script>


<style scoped lang="scss">


h1:first-child {
    color: white;
  }

#todo__list {
  display: flex;
  justify-content: center;

}
</style>
