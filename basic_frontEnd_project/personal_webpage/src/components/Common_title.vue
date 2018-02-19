<template>
  <div class="commonTitle">
    <h2>{{mainTitle}}</h2>
    </hr/>
  </div>
</template>

<script>
export default {
  name: "CommonTitle",
  props: ['mainTitle'],
  data: () => ({

  })
}
</script>

<style lang="scss" scoped>
.commonTitle {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #888;
}
</style>
