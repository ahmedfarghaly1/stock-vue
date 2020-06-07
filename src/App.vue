<template>
  <div class="container">
  <app-header></app-header>
  <div class="row">
    <div class="col-xs-12">
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
  </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components:{
    appHeader:Header,
  },
  created() {
    this.$store.dispatch('InitStocks');
  },
}
</script>

<style>
  body{
     padding:30px;
  }
  .slide-enter-active{
    animation: slide-in 400ms ease-out forwards;
  }
  .slide-leave-active{
    animation: slide-out 400ms ease-out forwards;

  }

  @keyFrames slide-in{
      from {
        transform: translateY(-30px);
        opacity:0;
      }
      to {
        transform: translateY(0px);
        opacity: 1;
      }
  }

  @keyFrames slide-out{
      from{
        transform: translateY(0px);
        opacity: 1;
      }
      to{
        transform: translateY(-30px);
        opacity: 0;
      }
  }
@import'~bootstrap/dist/css/bootstrap.css';

</style>
