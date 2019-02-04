<template>
  <div>
    <main>
      <div v-for="entry in mainentry" :key="entry.slug">
        <img :src="entry.image" />
        <h1>{{ entry.title }}</h1>
        <p>{{ entry.body }}</p>
      </div>
    </main>
    <section class="more">
      <h2>flere nyheter</h2>
      <div v-for="entry in morenews" :key="entry.slug">
        <router-link :to="'/bransjenytt/' + entry.slug">
          <img :src="entry.image" />
          <h3>{{ entry.title }}</h3>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'entry',
  data () {
    return {
      news: []
    }
  },
  computed: {
    mainentry() {
      if (!this.news) return [];
      return this.news.filter(entry => entry.slug === this.$route.params.slug);
    },
    morenews() {
      if (!this.news) return [];
      return this.news.sort(function() { return 0.5 - Math.random() }).filter(entry => entry.slug !== this.$route.params.slug);
    }
  },
  beforeMount () {
    this.$http.get(`https://nye.bransjen.no/api/news.json`)
      .then(response => {this.news = response.data.data})
  }
}
</script>

<style lang="scss" scoped>

</style>
