<template>
  <div>
    <main>
      <div v-for="project in mainproject" :key="project.slug">
        <img :src="project.image" />
        <h1>{{ project.title }}</h1>
        <p>{{ project.body }}</p>
      </div>
    </main>
    <section class="more">
      <h2>flere prosjekter</h2>
      <Projects />
    </section>
  </div>
</template>

<script>
import Projects from '@/components/Projects.vue'
export default {
  name: 'project',
  components: {
    Projects
  },
  data () {
    return {
      projects: []
    }
  },
  computed: {
    mainproject() {
      if (!this.projects) return [];
      return this.projects.filter(project => project.slug === this.$route.params.slug);
    },
    moreprojects() {
      if (!this.projects) return [];
      return this.projects.sort(function() { return 0.5 - Math.random() }).filter(project => project.slug !== this.$route.params.slug);
    }
  },
  beforeMount () {
    this.$http.get(`https://nye.bransjen.no/api/projects.json`)
      .then(response => {this.projects = response.data.data})
  }
}
</script>

<style lang="scss" scoped>
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
