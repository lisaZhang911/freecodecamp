<template>
  <div class="portfolto block targetBlock" name="2f">
    <CommonTitle mainTitle="PORTFOLIO"></CommonTitle>
    <div class="row gallery">
      <div class="col-md-6">
          <img src="../assets/webcaballero.jpg">
      </div>
      <div class="col-md-6">
          <img src="../assets/webcaballero.jpg">
      </div>
      <div class="col-md-6">
          <img src="../assets/webcaballero.jpg">
      </div>
      <!-- <div class="col-md-6" v-for="item in thumSrc">
          <img :src="item.src">
      </div> -->
    </div>
  </div>
</template>

<script>
import CommonTitle from './Common_title.vue';
import {thumSrc} from '../assets/product_thum/imgThum.js';

export default {
  name: "Profile",
  components: {
    [CommonTitle.name]:CommonTitle
  },
  data: () => ({
    thumSrc:thumSrc
  })
}
</script>
<style lang="scss" scoped>
.block{
  background: #eee;
  width: 75%;
  margin: 0 auto;
}
.portfolto {
  padding: 20px 15px 30px;

  .gallery {

    .col-md-6 {
        padding: 15px;
    }
    img {width:100%}
  }
}
@media (max-width:768px) {
  .block {
    width: 100%
  }
}
</style>
