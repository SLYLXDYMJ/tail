<template>
  <div id="app">
    <div class="nav" ref="nav">
      <a class="nav-item" href="javascript:">导航1</a>
      <a class="nav-item" href="javascript:">导航2</a>
      <a class="nav-item" href="javascript:">导航3</a>
      <a class="nav-item" href="javascript:">导航4</a>
      <a class="nav-item" href="javascript:">导航5</a>
    </div>
  </div>
</template>

<script>
  import Tail from '../src';

  export default {
    name: 'app',
    mounted () {
      new Tail({
        relativeEl: '.nav',
        itemEl: '.nav-item',
        event: 'mouseenter',
        tail: {
          color: 'red',
          height: '2px'
        }
      });
    }
  };
</script>

<style>
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .nav {
    display: flex;
    font-size: 20px;
  }

  .nav-item {
    padding: 15px;
    text-decoration: none;
  }
</style>