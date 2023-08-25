
export default()=>({
    isLoading:true,
    entries:[
        {
            id:new Date().getTime(),
            date:new Date().toDateString(),
            text:'Aprender un poco cada día marca la diferencia. Hay estudios que muestran que los estudiantes que hacen del aprendizaje un hábito tienen una mayor probabilidad de alcanzar sus objetivos. Reserva tiempo para aprender y recibe recordatorios con la herramienta de planificación del aprendizaje.',
            picture:null
        },
        {
            id:new Date().getTime()+1000,
            date:new Date().toDateString(),
            text:'Vuex, unit test, composition api, options api, autenticación, composables, deployment, file structure, lazy load, y más',
            picture:null
        },
        {
            id:new Date().getTime()+2000,
            date:new Date().toDateString(),
            text:'Las principales empresas eligen a Udemy Business para desarrollar sus habilidades profesionales más demandadas.',
            picture:null
        },
    ]
})


