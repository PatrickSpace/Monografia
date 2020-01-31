

Vue.component(('profe'), {
    template:
     `
    <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel"> Inscribirse en {{ materia.nombre }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <h4>{{profesor.nombre}}</h4>
                <h3>{{materia.nombre}}</h3>
                <div class="form-group">
                <label for="tema" class="bmd-label-floating">Tema</label>
                <input type="text" class="form-control" id="tema">
                </div>
                <div class="form-group">
                <label for="pregunta" class="bmd-label-floating">Pregunta de investigacion</label>
                <input type="text" class="form-control" id="pregunta">
                <span class="bmd-help">Recuerde colocar su pregunta entre los caracteres "¿ ?"</span>
                </div>
            </div>
            <div class="modal-footer">
                <a href="gracias.html">
                <button type="button" class="btn btn-secondary">Inscribirse</button>
                </a>
            </div>
        </div>
    </div>
    </div>
    `,
    computed:
    {
        ...Vuex.mapState(['profesor','materia']),
    }


});