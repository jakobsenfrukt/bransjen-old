<template>
  <div class="page">
    <main>
      <div v-for="page in filteredEntries" :key="page.slug">
        <img :src="page.image" />
        <h1>{{ page.title }}</h1>
        <p>{{ page.body }}</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      entries: []
    }
  },
  computed: {
    filteredEntries() {
      if (!this.entries) return [];
      return this.entries.filter(page => page.slug === 'om-oss');
    },
  },
  beforeMount () {
    this.$http.get(`https://nye.bransjen.no/api/all.json`)
      .then(response => {this.entries = response.data.data})
  }
}
</script>
