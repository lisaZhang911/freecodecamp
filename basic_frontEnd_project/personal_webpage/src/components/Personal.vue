<template>
<div class="personAbout row targetBlock" name="2f">
  <div class="text col-md-7">
    <p>Front-End Developer and UX/UI designer,
       with practical experience in project management, branding strategy,
       and creative direction; devoted to functional programming and information architecture
    </p>
    <hr/>
    <p>
      Web Developer - User Experience Designer - Graphic Artist
    </p>
    </hr/>
  </div>
  <div class="avatar col-md-5">
    <img src="../assets/avatar.jpg" alt="">
  </div>

</div>
</template>

<script>
export default {
  name: "Personal",
  data: () => ({

  })
}
</script>

<style lang="scss" scoped>
.personAbout {
  background: #aaa;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  width: 75%;
  padding:20px 30px 20px;
  margin: 50px auto 0;

  .text {
    padding-right: 30px;
    margin: 30px 0 0;
  }
  .avatar {
    margin-top: 25px;
    text-align: center;

    img {
      width: 80%;
      border-radius: 50%
    }
  }
}
@media (max-width:768px) {
  .personAbout {
    width: 100%;
    margin: 0;

    .text {
      padding-top: 20px;
    }
  }
}
</style>
