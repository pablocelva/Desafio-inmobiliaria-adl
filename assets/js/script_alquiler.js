//Loop para propiedades alquiler
let htmlalquiler = ""
for (let propiedad_alquiler of propiedades_alquiler) {
    htmlalquiler += `
                    <div class="col-sm-12 col-md-6 col-lg-4 d-flex">
                        <div class="card mx-auto my-3 flex-fill">
                            <img src="${propiedad_alquiler.src}" class="card-img-top" alt="Imagen del departamento">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title"> ${propiedad_alquiler.nombre}</h5>
                                
                                <p class="card-text"> ${propiedad_alquiler.descripcion}</p>
                                <p> <i class="fas fa-map-marker-alt"></i> ${propiedad_alquiler.ubicacion}</p>
                                <p> <i class="fas fa-bed"></i> ${propiedad_alquiler.habitaciones}</p>
                                <p> <i class="fas fa-bath"></i> ${propiedad_alquiler.banos}</p>
                                <p> <i class="fas fa-dollar-sign"></i> ${propiedad_alquiler.costo}</p>
                                <p class="${propiedad_alquiler.smoke ? 'text-success' : 'text-danger'}">
                                <i class="${propiedad_alquiler.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> 
                                ${propiedad_alquiler.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                                </p>
                                <p class="${propiedad_alquiler.pets ? 'text-success' : 'text-danger'}">
                                <i class="${propiedad_alquiler.pets ? 'fas fa-paw' : 'fa-solid fa-ban'}"></i> 
                                ${propiedad_alquiler.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                                </p>
                            </div>
                        </div>
                    </div>`
}
const propiedadesAlquiler = document.querySelector("#propiedades-alquiler")
propiedadesAlquiler.innerHTML = htmlalquiler
