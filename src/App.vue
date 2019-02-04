<template>
  <div id="app">
    <nav class="site-nav">
      <ul>
        <li><router-link to="/">Prosjekter</router-link></li>
        <li><router-link to="/bransjenytt">Bransjenytt</router-link></li>
        <li><router-link to="/skissebok">Skissebok</router-link></li>
        <li><router-link to="/om">Om</router-link></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'css/main.scss';
.site-nav {
  ul {
    @extend %no-list;

    li {
      display: inline-block;
      margin: 0 1rem 0.6rem 0;
    }
  }

  .router-link-exact-active {
    color: $color-text;
  }
}

</style>
