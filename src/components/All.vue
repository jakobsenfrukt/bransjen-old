<template>
  <div>
    <ul class="gallery">
			<li v-for="project in projects" :key="project.slug">
        <router-link v-if="project.uri" :to="'/' + project.uri">
          <img v-if="project.image" :src="project.image" />
        </router-link>
        <template v-else>
          <img v-if="project.image" :src="project.image" />
        </template>
      </li >
		</ul>
  </div>
</template>

<script>
export default {
  name: 'All',
  data () {
    return {
      projects: [],
      filtercategories: [],
    }
  },
  beforeMount () {
    this.$http.get(`https://nye.bransjen.no/api/frontpage.json`)
      .then(response => {this.projects = response.data.data})
  }
}
</script>

<style scoped lang="scss">

</style>
