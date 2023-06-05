//funciones
export const alertaUno = () => {
    let alerta = `<div class="row">
    <div class="col-md-8 mt-3">
    <div class="alert alert-danger alert-dismissible fade show">
    Campo vacio..
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>
    </div>
    </div>`;
    document.getElementById("msgNuevo").innerHTML = alerta;
  };