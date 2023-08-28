<template>
    <template v-if="entry">
          <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{day}}</span>
                <span class="fs-3">{{month}}</span>
                <span class="fs-3 fw-light">{{yearDay}}</span>
            </div>
            <div>
                <button
                    v-if="entry.id" 
                    class="btn btn-danger mx-2"
                    @click="onDeleteEntry"
                    >
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>

                <input type="file" 
                    @change="onSelectedImage"
                />

                <button class="btn btn-primary">
                    Subir foto
                    <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>
        <hr>
        <div class="d-flex flex-column px-3 h-75">
            <textarea v-model="entry.text" placeholder="¿Qué sucedio hoy?"></textarea>
        </div>
        <!--<img src="https://astroaventura.net/wp-content/uploads/2023/08/neptuno-1-1-1024x565.jpg" 
                alt="entry-picture" 
                class="img-thumbnail"
            />-->
        <img :src="localImage" 
                alt="entry-picture" 
                class="img-thumbnail"
            />
    </template>
    <Fab icon="fa-save"
        @on:click="saveEntry"
     />
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex';
import getDayMonthYear from '@/modules/daybook/helpers/getDayMonthYear'
import Swal from 'sweetalert2';


export default {
    props:{
        id:{
            type:String,
            required:true
        },
        localImage:null
    },
    components:{
        Fab:defineAsyncComponent(()=>import('@/modules/daybook/components/Fab.vue')),
    },
    data(){
        return {
            entry:null
        }
    },
    computed:{
        ...mapGetters('journal',['getEntryById']),
        day(){
            const {day} = getDayMonthYear(this.entry.date);
            return day;
        },
        month(){
            const {month} = getDayMonthYear(this.entry.date);
            return  month;
        },
        yearDay(){
            const {yearDay} = getDayMonthYear(this.entry.date);
            return yearDay;
        }
    },
    methods:{
        ...mapActions('journal',['updateEntry','createEntry','deleteEntry']),
        loadEntry(){
            let entry;

            if(this.id == 'new')
            {
                entry = {date:new Date().getTime(),text:''};
            }
            else{
                //getEntriesById
                entry = this.getEntryById(this.id);
                //console.log(entry);
                if(!entry)this.$router.push({name:'no-entry'});
            }
            
            this.entry = entry;
        },
        async saveEntry(){
            
            new Swal({
                title:'Espere por favor...',
                allowOutsideClick:false
            });
            Swal.showLoading();
            //console.log(this.entry);
            if(this.entry.id)
            {
                console.log('Actualizando entrada');
                this.updateEntry(this.entry);
            }
            else{
                //crear una nueva entrada
                console.log('Guardando entrada')

                //await action
                const id = await this.createEntry(this.entry);

                //redirectTo =>entry, param: id
                this.$router.push({name:"entry",params:{id:id}});
            }
            Swal.fire('Guardando','Entrada registrada con exito!','success');
        },
        async onDeleteEntry(){

            const result = await Swal.fire({
                title:'¿Está seguro?',
                text:'Una vez borrado, no se puede recuperar',
                showDenyButton:true,
                confirmButtonText:'Si, estoy seguro'
            });

            //console.log({result})
            
            if(result.isConfirmed)
            {
                new Swal({
                    title:'Espere por favor',
                    allowOutsideClick:false
                });
                Swal.showLoading();
                //console.log('onDeleteEntry',this.entry)
                await this.deleteEntry(this.entry.id);
                // redireccionar al entry
                this.$router.push({name:"no-entry"});
                Swal.fire('Eliminado','','success');
            }
            
        },
        onSelectedImage(event){
            //console.log(event.target.files)
            const file = event.target.files[0];
            if(!file){
                return;
            }
        }
    },
    created(){
        //console.log(this.$route.params.id);
        //console.log(this.id);
        this.loadEntry();
    },
    watch:{
        id(){
            this.loadEntry()
        }
    }
}
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border:none;
    height: 100%;

    &:focus{
       outline: none; 
    }
}

 img{
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
    }
</style>