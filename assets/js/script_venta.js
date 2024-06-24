//Loop para propiedades venta
let htmlventa = ""
for (let propiedad_venta of propiedades_venta) {
    htmlventa += `
                <div class="col-sm-12 col-md-6 col-lg-4 d-flex">
                    <div class="card mx-auto my-3 flex-fill">
                        <img src="${propiedad_venta.src}" class="card-img-top" alt="Imagen del departamento">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title"> ${propiedad_venta.nombre}</h5>
                            
                            <p class="card-text"> ${propiedad_venta.descripcion}</p>
                            <p> <i class="fas fa-map-marker-alt"></i> ${propiedad_venta.ubicacion}</p>
                            <p> <i class="fas fa-bed"></i> ${propiedad_venta.habitaciones}</p>
                            <p> <i class="fas fa-bath"></i> ${propiedad_venta.banos}</p>
                            <p> <i class="fas fa-dollar-sign"></i> ${propiedad_venta.costo}</p>
                            <p class="${propiedad_venta.smoke ? 'text-success' : 'text-danger'}">
                                <i class="${propiedad_venta.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> 
                                ${propiedad_venta.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                            </p>
                            <p class="${propiedad_venta.pets ? 'text-success' : 'text-danger'}">
                                <i class="${propiedad_venta.pets ? 'fas fa-paw' : 'fa-solid fa-ban'}"></i> 
                                ${propiedad_venta.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                            </p>
                        </div>
                    </div>
                </div>`
}
const propiedadesEnVenta = document.querySelector("#propiedades-venta")
propiedadesEnVenta.innerHTML = htmlventa


