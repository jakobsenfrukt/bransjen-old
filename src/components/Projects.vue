<template>
  <div>
    <ul class="gallery">
			<li v-for="project in projects" :key="project.slug" :class="project.category">
        <router-link :to="'/prosjekter/' + project.slug">
          <img :src="project.image" />
          <h2>{{ project.title }}</h2>
        </router-link>
      </li >
		</ul>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      projects: [],
      filtercategories: [],
    }
  },
  beforeMount () {
    this.$http.get(`https://nye.bransjen.no/api/projects.json`)
      .then(response => {this.projects = response.data.data})
  }
}
</script>

<style scoped lang="scss">

</style>
