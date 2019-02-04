<template>
  <div>
    <header>
      <h1>Skissebok</h1>
    </header>
    <main>
      <div v-for="entry in sketchbook" :key="entry.slug">
        <img v-if="entry.image" :src="entry.image" />
        <h2>{{ entry.title }}</h2>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'project',
  data () {
    return {
      sketchbook: []
    }
  },
  beforeMount () {
    this.$http.get(`https://nye.bransjen.no/api/sketchbook.json`)
      .then(response => {this.sketchbook = response.data.data})
  }
}
</script>

<style lang="scss" scoped>
main {
  margin-bottom: 8rem;
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
