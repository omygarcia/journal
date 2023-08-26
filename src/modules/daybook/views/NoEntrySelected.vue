<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
    <Fab @click="createNewEntry" />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components:{
        Fab:defineAsyncComponent(()=>import('@/modules/daybook/components/Fab.vue')),
    },
    methods:{
      createNewEntry(){
        console.log('createNewEntry');
        this.$router.push({name:'entry',params:{id:'new'}});
      }
    }
}
</script>

<style land="scss" scoped>
    div{
        height: 100%;
    }
</style>