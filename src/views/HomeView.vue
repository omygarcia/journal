<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola Mundo</h1>

    <buttton @click="goToDaybook" class="btn btn-primary">primary</buttton>
    <buttton class="btn btn-secondary">secondary</buttton>
    <buttton class="btn btn-success">success</buttton>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  methods:{
    goToDaybook(){
      this.$router.push({name:'no-entry'});
    }
  }
}
</script>
