<template>
  <div class="home">
    <button @click="tidy = !tidy">
      <template v-if="tidy">Rot</template>
      <template v-else>Rydd</template>
    </button>
    <template v-if="tidy">
      <ul class="filter">
        <li>vis alle</li>
        <li>redaksjonell design</li>
        <li>animasjon</li>
      </ul>
      <Projects />
    </template>
    <template v-else>
      <All />
    </template>
  </div>
</template>

<script>
import All from '@/components/All.vue';
import Projects from '@/components/Projects.vue';
export default {
  name: 'home',
  components: {
    All,
    Projects
  },
  data () {
    return {
      projects: [],
      tidy: false,
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
