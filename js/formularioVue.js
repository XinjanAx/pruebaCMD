
const estudiantes = [
    {
        ci:null,
        nombre:null,
        apellido:null,
        ciudad:null,
        email:null,
    }]
const app=Vue.createApp({
    data(){
        return{
            estudiante:[
                {
                    ci:'',
                    nombre:'',
                    apellido:'',
                    ciudad:'',
                    email:null,
                    lista:estudiantes
                }   
            ]
        }
    },
    methods:{
        agregar(){
            this.lista.push(
                {
                    ci:this.ci,
                    nombre:this.nombre, 
                    apellido:this.edad,
                    ciudad:this.ciudad, 
                    email:this.email
                })
        }
    },
    watch:{}
});
app.mount('#myApp')