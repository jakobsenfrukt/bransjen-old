<template>
  <div>
    <header>
      <h1>Bransjenytt</h1>
    </header>
    <main>
      <div v-for="entry in news" :key="entry.slug">
        <router-link :to="'/bransjenytt/' + entry.slug">
          <img v-if="entry.image" :src="entry.image" />
          <h1>{{ entry.title }}</h1>
          <p>{{ entry.body }}</p>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      news: []
    }
  },
  beforeMount () {
    this.$http.get(`https://nye.bransjen.no/api/news.json`)
      .then(response => {this.news = response.data.data})
  }
}
</script>

<style lang="scss" scoped>
header {
  background: red;
  color: white;
}
main {
  margin-bottom: 8rem;
  img {
    width: 100%;
  }
}
.more {
  h3 {
    margin: 0;
  }
  a {
    color: inherit;
  }
}
</style>
