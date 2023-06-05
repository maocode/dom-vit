export const alertaDos = () => {
    let alerta = `<div class="row">
    <div class="col-md-8 mt-3">
    <div class="alert alert-info fade show">
    Debe digitar Números
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>
    </div>
    </div>`;
    document.getElementById("msgNuevo").innerHTML = alerta;
  };