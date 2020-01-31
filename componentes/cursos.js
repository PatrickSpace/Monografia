Vue.component(('cursos'), {
    template:
        `
    <div class="container">
        <div style="margin-top: 3vh; width: 100%;">
            <h2 class="text-white">{{titulo}}</h2>
        </div>
        <div class="cursos">
            <div  v-for="(m, i) in materias"  class="curso">
                <h5 class="materia-name" >{{m.nombre}}</h5>
                <small @click="seleccionar(p,m)" data-toggle="modal" data-target="#staticBackdrop" class="profe" v-for="(p,i) in m.profes" >{{p.nombre}} ( {{p.alumnos}} )</small>
            </div>
        </div>
    </div>
    `,

    data: function () {
        return {
            titulo: 'Elija un curso',

            profesores: [
                { nombre: 'Elizabeth Chavez', alumnos: 3 },
                { nombre: 'Alberto Roderiguez', alumnos: 3 },
                { nombre: 'Miriam Ochoa', alumnos: 1 },
                { nombre: 'Alejandro Quispe', alumnos: 2 },
                { nombre: 'Yovana Venegas', alumnos: 0 },
                { nombre: 'Pedro Guevara', alumnos: 2 },
                { nombre: 'Lady Ayala', alumnos: 1 },
            ],
            materias: [
                {
                    nombre: 'Matematica', profes: [
                    { nombre: 'Elizabeth Chavez', alumnos: 3 },
                    { nombre: 'Alberto Roderiguez', alumnos: 3 }]
                },
                {
                    nombre: 'Fisica', profes: [
                    { nombre: 'Elizabeth Chavez', alumnos: 3 },
                    { nombre: 'Lady Ayala', alumnos: 1 },
                    { nombre: 'Alberto Roderiguez', alumnos: 3 }]
                },
                {
                    nombre: 'Comunicacion', profes: [
                    { nombre: 'Elizabeth Chavez', alumnos: 3 },
                    { nombre: 'Alberto Roderiguez', alumnos: 3 },
                 ]
                },
                {
                    nombre: 'Historia del Peru', profes: [
                    { nombre: 'Alejandro Quispe', alumnos: 2 },
                    { nombre: 'Yovana Venegas', alumnos: 0 },]
                },
                {
                    nombre: 'Religion', profes: [
                    { nombre: 'Alberto Roderiguez', alumnos: 3 },
                    { nombre: 'Miriam Ochoa', alumnos: 1 },
                    { nombre: 'Alejandro Quispe', alumnos: 2 },
                   ]
                },
                {
                    nombre: 'Historia universal', profes: [
                    { nombre: 'Yovana Venegas', alumnos: 0 },]
                },
                {
                    nombre: 'Matematica', profes: [
                    { nombre: 'Elizabeth Chavez', alumnos: 3 },
                    { nombre: 'Alberto Roderiguez', alumnos: 3 },
                    { nombre: 'Miriam Ochoa', alumnos: 1 },
                    { nombre: 'Alejandro Quispe', alumnos: 2 },
                    { nombre: 'Yovana Venegas', alumnos: 0 },]
                },
                {
                    nombre: 'Matematica', profes: [
                    { nombre: 'Elizabeth Chavez', alumnos: 3 },
                    { nombre: 'Alberto Roderiguez', alumnos: 3 },
                    { nombre: 'Miriam Ochoa', alumnos: 1 },
                    { nombre: 'Alejandro Quispe', alumnos: 2 },
                    { nombre: 'Yovana Venegas', alumnos: 0 },]
                },
                {
                    nombre: 'Matematica', profes: [
                    { nombre: 'Elizabeth Chavez', alumnos: 3 },
                    { nombre: 'Alberto Roderiguez', alumnos: 3 },
                    { nombre: 'Miriam Ochoa', alumnos: 1 },
                    { nombre: 'Alejandro Quispe', alumnos: 2 },
                    { nombre: 'Yovana Venegas', alumnos: 0 },]
                },
                {
                    nombre: 'Matematica', profes: [
                    { nombre: 'Elizabeth Chavez', alumnos: 3 },
                    { nombre: 'Alberto Roderiguez', alumnos: 3 },
                    { nombre: 'Miriam Ochoa', alumnos: 1 },
                    { nombre: 'Alejandro Quispe', alumnos: 2 },
                    { nombre: 'Yovana Venegas', alumnos: 0 },]
                },
                {
                    nombre: 'Matematica', profes: [
                    { nombre: 'Elizabeth Chavez', alumnos: 3 },
                    { nombre: 'Alberto Roderiguez', alumnos: 3 },
                    { nombre: 'Miriam Ochoa', alumnos: 1 },
                    { nombre: 'Alejandro Quispe', alumnos: 2 },
                    { nombre: 'Yovana Venegas', alumnos: 0 },]
                },
               
            ],
        }
    },
    methods:
    {
        ...Vuex.mapMutations(['seleccionar']),
    },

});