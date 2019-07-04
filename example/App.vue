<template>
  <div id="app">
    <div class="nav nav1" ref="nav1">
      <a class="nav-item" href="javascript:">导航1</a>
      <a class="nav-item" href="javascript:">导航2</a>
      <a class="nav-item" href="javascript:">导航3</a>
      <a class="nav-item" href="javascript:">导航4</a>
      <a class="nav-item" href="javascript:">导航5</a>
    </div>
    <div class="nav nav2" ref="nav2">
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
        relativeEl: '.nav1',
        itemEl: '.nav1 .nav-item',
        interesting: false,
        event: 'mouseenter',
        defaultI: 1,
        tail: {
          color: 'red',
          height: '2px'
        }
      });
      new Tail({
        relativeEl: '.nav2',
        itemEl: '.nav2 .nav-item',
        interesting: true,
        defaultI: 1,
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
    flex-direction: column;
  }

  .nav {
    display: flex;
    font-size: 20px;
    margin: 50px 0;
  }

  .nav-item {
    padding: 15px;
    text-decoration: none;
  }
</style>