<template>
  <div class="hello">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><img src="../assets/qlip.png" /></a>
        </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-right nav-pills">
            <li role="presentation" :class="{active:isActive==index}" v-for="(item,index) in menuList"><a href="#" @click="goTop(index)">{{item}}</a></li>
            <!-- <li role="presentation" ><a href="#" @click="goTop">Link2</a></li> -->
          </ul>
        </div><!-- /.navbar-collapse -->
       </div><!-- /.container-fluid -->
    </nav>
    <Personal ref="personal"></Personal>
    <Profile ref="profile"></Profile>
    <Profile ref=""></Profile>
  </div>
</template>

<script>
import Personalss from './Personal.vue';
import Profile from './Profile.vue';

export default {
  name: 'HelloWorld',
  data () {
    return {
      isActive: 0,
      menuList: ['link1','link2','link3'],
      targetBlock: []
    }
  },
  components: {
    [Personalss.name]:Personalss,
    [Profile.name]:Profile,
  },
  mounted() {
     window.addEventListener('scroll', this.handleScroll);
      var ss = document.querySelectorAll('.targetBlock');
      this.$set(this,'targetBlock',ss)

  },
  methods: {
    handleScroll(){
      let scrollTop = document.documentElement.scrollTop;
      if(scrollTop <= this.targetBlock[1].offsetTop){
        this.$set(this,'isActive',0)
      } else if(scrollTop <= this.targetBlock[2].offsetTop){
        this.$set(this,'isActive',1)
      } else {
        this.$set(this,'isActive',2)
      }
      //document.documentElement.scrollTop = 200
     // console.log('scrollTop',scrollTop)
     // console.log('index',this.isActive)
    },
    goTop(index){
       this.$set(this,'isActive',index)
       var screenTop = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
       var targetBlock = this.targetBlock[index].offsetTop
       var timer = null;

       //页面需要上滑的情况
      if(screenTop > targetBlock){
        timer = setInterval(function(){
          var screenTop = document.documentElement.scrollTop ? document.documentElement.scrollTop:document.body.scrollTop;
              document.documentElement.scrollTop-=100;
               console.log('scrollTop',document.documentElement.scrollTop)
          if(scrollTop <= targetBlock){
             clearInterval(timer)
          }
        },50)
      }
       //页面需要下滑的情况
      else {
        timer = setInterval(function(){
          var scrollTop = document.documentElement.scrollTop;
              document.documentElement.scrollTop+=100;
          if(scrollTop >= targetBlock){
             clearInterval(timer)
          }
        },50)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.navbar {
  background: #722872;
  width: 100%;

  .navbar-header {
    .navbar-brand {
      padding: 0 15px;

      img {
        width:35px;
        padding-top: 5px;
      }
    }
  }
}
.personAbout {
  margin-top: 80px
}
</style>
