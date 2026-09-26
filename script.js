const btnExplorar = document.getElementById("btnExplorar");

const inicio = document.getElementById("inicio");

const ciudades = document.getElementById("ciudades");

btnExplorar.addEventListener("click", function () {

    inicio.style.display = "none";

    ciudades.style.display = "block";

});

const btnSeul = document.getElementById("btnSeul");

const destinos_seul = document.getElementById("destinos_seul");

btnSeul.addEventListener("click", function () {

    ciudades.style.display = "none";

    destinos_seul.style.display = "block";

});

const btnBusan = document.getElementById("btnBusan");

const destinos_busan = document.getElementById("destinos_busan");

btnBusan.addEventListener("click", function () {

    ciudades.style.display = "none";

    destinos_busan.style.display = "block";

});

const btnJeju = document.getElementById("btnJeju");

const destinos_jeju = document.getElementById("destinos_jeju");

btnJeju.addEventListener("click", function () {

    ciudades.style.display = "none";

    destinos_jeju.style.display = "block";

});

const btnVerMás_palacioGyeongbokgung = document.getElementById("btnVerMás_palacioGyeongbokgung");

const detalle_palacioGyeongbokgung = document.getElementById("detalle_palacioGyeongbokgung");

btnVerMás_palacioGyeongbokgung.addEventListener("click", function () {

    destinos_seul.style.display = "none";

    detalle_palacioGyeongbokgung.style.display = "block";

});


const btnVerMás_lotteWorld = document.getElementById("btnVerMás_lotteWorld");

const detalle_lotteWorld = document.getElementById("detalle_lotteWorld");

btnVerMás_lotteWorld.addEventListener("click", function () {

    destinos_seul.style.display = "none";

    detalle_lotteWorld.style.display = "block";
    
});


const btnVerMás_haeundaeBeach = document.getElementById("btnVerMás_haeundaeBeach");

const detalle_haeundaeBeach = document.getElementById("detalle_haeundaeBeach");

btnVerMás_haeundaeBeach.addEventListener("click", function () {

    destinos_busan.style.display = "none";

    detalle_haeundaeBeach.style.display = "block";
    
});

const btnVerMás_haedongYonggungsa = document.getElementById("btnVerMás_haedongYonggungsa");

const detalle_haedongYonggungsa = document.getElementById("detalle_haedongYonggungsa");

btnVerMás_haedongYonggungsa.addEventListener("click", function () {

    destinos_busan.style.display = "none";

    detalle_haedongYonggungsa.style.display = "block";

});

const btnVerMás_seongsanIlchulbong = document.getElementById("btnVerMás_seongsanIlchulbong");

const detalle_seongsanIlchulbong = document.getElementById("detalle_seongsanIlchulbong");  

btnVerMás_seongsanIlchulbong.addEventListener("click", function () {

    destinos_jeju.style.display = "none";  

    detalle_seongsanIlchulbong.style.display = "block";

});

const btnVerMás_CheonjiyeonWaterfall = document.getElementById("btnVerMás_CheonjiyeonWaterfall");

const detalle_CheonjiyeonWaterfall = document.getElementById("detalle_CheonjiyeonWaterfall");

btnVerMás_CheonjiyeonWaterfall.addEventListener("click", function () {

    destinos_jeju.style.display = "none";

    detalle_CheonjiyeonWaterfall.style.display = "block";

});

let idiomaActual = "es";

const btnIdioma = document.getElementById("btnIdioma");

btnIdioma.addEventListener("click", function () {

    if (idiomaActual === "es") {
        idiomaActual = "en";
    } else {
        idiomaActual = "es";
    }

    cambiarIdioma();
});

function cambiarIdioma() {

    const elementos = document.querySelectorAll("[data-en]");

    elementos.forEach(function(elemento) {

        if (idiomaActual === "en") {
            elemento.textContent = elemento.getAttribute("data-en");
        } else {
            elemento.textContent = elemento.getAttribute("data-es");
        }

    });

    if (idiomaActual === "en") {
        btnIdioma.textContent = "🇪🇸 Español";
    } else {
        btnIdioma.textContent = "🇬🇧 English";
    }

    // Actualizar favoritos si están abiertos
    if (favoritos.style.display === "block") {
        mostrarFavoritos();
    }
}

const btnFavoritos = document.getElementById("btnFavoritos");
const favoritos = document.getElementById("favoritos");

btnFavoritos.addEventListener("click", function () {

    ciudades.style.display = "none";

    favoritos.style.display = "block";

    mostrarFavoritos();

});

let listaDeFavoritos = [];

const btnFavorito_palacioGyeongbokgung = document.getElementById("btnFavorito_palacioGyeongbokgung");

btnFavorito_palacioGyeongbokgung.addEventListener("click", function () {

 if (!listaDeFavoritos.some(function (favorito) {
        return favorito.nombre === "Palacio Gyeongbokgung";
    })) {
        listaDeFavoritos.push({
            nombre: "Palacio Gyeongbokgung",
            imagen: "assets/Palacio Gyeongbokgung - 1.jpg"
        });

        if (idiomaActual === "en") {
            alert("Palacio Gyeongbokgung added to favorites");
        } else {
            alert("Palacio Gyeongbokgung agregado a favoritos");
        }

    } else {

        if (idiomaActual === "en") {
            alert("This destination is already in favorites");
        } else {
            alert("Este destino ya está en favoritos");
        }

    }

});

const btnFavorito_lotteWorld = document.getElementById("btnFavorito_lotteWorld");

btnFavorito_lotteWorld.addEventListener("click", function () {

    if (!listaDeFavoritos.some(function (favorito) {
        return favorito.nombre === "Lotte World";
    })) {
        listaDeFavoritos.push({
            nombre: "Lotte World",
            imagen: "assets/Lotte World - 1.jpg"
        });

        if (idiomaActual === "en") {
            alert("Lotte World added to favorites");
        } else {
            alert("Lotte World agregado a favoritos");
        }

    } else {

        if (idiomaActual === "en") {
            alert("This destination is already in favorites");
        } else {
            alert("Este destino ya está en favoritos");
        }

    }

});

const btnFavorito_haeundaeBeach = document.getElementById("btnFavorito_haeundaeBeach");

btnFavorito_haeundaeBeach.addEventListener("click", function () {

    if (!listaDeFavoritos.some(function (favorito) {
        return favorito.nombre === "Haeundae Beach";
    })) {
        listaDeFavoritos.push({
            nombre: "Haeundae Beach",
            imagen: "assets/Haeundae Beach - 1.jpg"
        });

        if (idiomaActual === "en") {
            alert("Haeundae Beach added to favorites");
        } else {
            alert("Haeundae Beach agregado a favoritos");
        }

    } else {

        if (idiomaActual === "en") {
            alert("This destination is already in favorites");
        } else {
            alert("Este destino ya está en favoritos");
        }

    }

});

const btnFavorito_haedongYonggungsa = document.getElementById("btnFavorito_haedongYonggungsa");

btnFavorito_haedongYonggungsa.addEventListener("click", function () {

    if (!listaDeFavoritos.some(function (favorito) {
        return favorito.nombre === "Haedong Yonggungsa";
    })) {

        listaDeFavoritos.push({
            nombre: "Haedong Yonggungsa",
            imagen: "assets/Haedong Yonggungsa - 1.jpg"
        });

        if (idiomaActual === "en") {
            alert("Haedong Yonggungsa added to favorites");
        } else {
            alert("Haedong Yonggungsa agregado a favoritos");
        }

    } else {

        if (idiomaActual === "en") {
            alert("This destination is already in favorites");
        } else {
            alert("Este destino ya está en favoritos");
        }

    }

});

const btnFavorito_seongsanIlchulbong = document.getElementById("btnFavorito_seongsanIlchulbong");

btnFavorito_seongsanIlchulbong.addEventListener("click", function () {

    if (!listaDeFavoritos.some(function (favorito) {
        return favorito.nombre === "Seongsan Ilchulbong";
    })) {

        listaDeFavoritos.push({
            nombre: "Seongsan Ilchulbong",
            imagen: "assets/Seongsan Ilchulbong - 1.jpg"
        });

        if (idiomaActual === "en") {
            alert("Seongsan Ilchulbong added to favorites");
        } else {
            alert("Seongsan Ilchulbong agregado a favoritos");
        }

    } else {

        if (idiomaActual === "en") {
            alert("This destination is already in favorites");
        } else {
            alert("Este destino ya está en favoritos");
        }

    }

});

const btnFavorito_CheonjiyeonWaterfall = document.getElementById("btnFavorito_CheonjiyeonWaterfall");

btnFavorito_CheonjiyeonWaterfall.addEventListener("click", function () {

    if (!listaDeFavoritos.some(function (favorito) {
        return favorito.nombre === "Cheonjiyeon Waterfall";
    })) {

        listaDeFavoritos.push({
            nombre: "Cheonjiyeon Waterfall",
            imagen: "assets/Cheonjiyeon Waterfall - 1.jpg"
        });

        if (idiomaActual === "en") {
            alert("Cheonjiyeon Waterfall added to favorites");
        } else {
            alert("Cheonjiyeon Waterfall agregado a favoritos");
        }

    } else {

        if (idiomaActual === "en") {
            alert("This destination is already in favorites");
        } else {
            alert("Este destino ya está en favoritos");
        }

    }

});

function mostrarFavoritos() {

   const listaFavoritos = document.getElementById("listaFavoritos");
   const mensajeFavoritos = document.getElementById("mensajeFavoritos");
   const mensajeGuardar = document.getElementById("mensajeGuardar");

    listaFavoritos.innerHTML = "";

    if (listaDeFavoritos.length === 0) {

        mensajeFavoritos.style.display = "block";
        mensajeGuardar.style.display = "block";

    } else {

        mensajeFavoritos.style.display = "none";
        mensajeGuardar.style.display = "none";

        listaDeFavoritos.forEach(function (favorito) {

    const tarjeta = document.createElement("div");

       tarjeta.className = "col-md-4";

            tarjeta.innerHTML = `
                <div class="card">

                    <img src="${favorito.imagen}" 
                         class="card-img-top" 
                         alt="${favorito.nombre}">

                    <div class="card-body">

                        <h5 class="card-title">
                            ${favorito.nombre}
                        </h5>

                        <button class="btn btn-danger btnQuitarFavorito">
                            ${idiomaActual === "en" ? "Remove favorite" : "Quitar favorito"}
                        </button>

                    </div>

                </div>
            `;

            const btnQuitar = tarjeta.querySelector(".btnQuitarFavorito");

            btnQuitar.addEventListener("click", function () {

                listaDeFavoritos = listaDeFavoritos.filter(function (elemento) {

                    return elemento.nombre !== favorito.nombre;

                });

                mostrarFavoritos();

            });

            listaFavoritos.appendChild(tarjeta);

        });
    }
}

const btnVolverCiudades = document.getElementById("btnVolverCiudades");

btnVolverCiudades.addEventListener("click", function () {

    favoritos.style.display = "none";
    ciudades.style.display = "block";

});

const btnVolverSeul_Destinos = document.getElementById("btnVolverSeul_Destinos");

btnVolverSeul_Destinos.addEventListener("click", function () {

    destinos_seul.style.display = "none";
    ciudades.style.display = "block";

});

const btnVolverPalacioGyeongbokgung_Vermás = document.getElementById("btnVolverPalacioGyeongbokgung_Vermás");

btnVolverPalacioGyeongbokgung_Vermás.addEventListener("click", function () {

    detalle_palacioGyeongbokgung.style.display = "none";
    destinos_seul.style.display = "block";

});

const btnVolverLotteWorld_Vermás = document.getElementById("btnVolverLotteWorld_Vermás");

btnVolverLotteWorld_Vermás.addEventListener("click", function () {

    detalle_lotteWorld.style.display = "none";
    destinos_seul.style.display = "block";

});

const btnVolverBusan_Destinos = document.getElementById("btnVolverBusan_Destinos");

btnVolverBusan_Destinos.addEventListener("click", function () {

    destinos_busan.style.display = "none";
    ciudades.style.display = "block";

});

const btnVolverHaeundaeBeach_Vermás = document.getElementById("btnVolverHaeundaeBeach_Vermás");

btnVolverHaeundaeBeach_Vermás.addEventListener("click", function () {

    detalle_haeundaeBeach.style.display = "none";
    destinos_busan.style.display = "block";

});

const btnVolverhaedongYonggungsa_Vermás = document.getElementById("btnVolverhaedongYonggungsa_Vermás");

btnVolverhaedongYonggungsa_Vermás.addEventListener("click", function () {

    detalle_haedongYonggungsa.style.display = "none";
    destinos_busan.style.display = "block";

});

const btnVolverJeju_Destinos = document.getElementById("btnVolverJeju_Destinos");

btnVolverJeju_Destinos.addEventListener("click", function () {

    destinos_jeju.style.display = "none";
    ciudades.style.display = "block";

});

const btnVolverSeongsanIlchulbong_Vermás = document.getElementById("btnVolverSeongsanIlchulbong_Vermás");

btnVolverSeongsanIlchulbong_Vermás.addEventListener("click", function () {

    detalle_seongsanIlchulbong.style.display = "none";
    destinos_jeju.style.display = "block";

});

const btnVolverCheonjiyeonWaterfall_Vermás = document.getElementById("btnVolverCheonjiyeonWaterfall_Vermás");

btnVolverCheonjiyeonWaterfall_Vermás.addEventListener("click", function () {

    detalle_CheonjiyeonWaterfall.style.display = "none";
    destinos_jeju.style.display = "block";

});


// FILTROS DE SEÚL

const botonesFiltroSeul = document.querySelectorAll(".filtroSeul");
const destinoSeulFiltro = document.querySelectorAll(".destinoSeul");

botonesFiltroSeul.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const categoriaSeleccionada = boton.getAttribute("data-categoria");

        destinoSeulFiltro.forEach(function (destino) {

            const categoriaDestino = destino.getAttribute("data-categoria");

            if (categoriaSeleccionada === "todas") {
                destino.style.display = "";
            } 
            else if (categoriaDestino === categoriaSeleccionada) {
                destino.style.display = "";
            } 
            else {
                destino.style.display = "none";
            }

        });

    });

});

// FILTROS DE BUSAN

const botonesFiltroBusan = document.querySelectorAll(".filtroBusan");
const destinoBusanFiltro = document.querySelectorAll(".destinoBusan");

botonesFiltroBusan.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const categoriaSeleccionada = boton.getAttribute("data-categoria");

        destinoBusanFiltro.forEach(function (destino) {

            const categoriaDestino = destino.getAttribute("data-categoria");

            if (categoriaSeleccionada === "todas") {
                destino.style.display = "";
            } 
            else if (categoriaDestino === categoriaSeleccionada) {
                destino.style.display = "";
            } 
            else {
                destino.style.display = "none";
            }

        });

    });

});

const botonesFiltroJeju = document.querySelectorAll(".filtroJeju");
const destinoJejuFiltro = document.querySelectorAll(".destinoJeju");

botonesFiltroJeju.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const categoriaSeleccionada = boton.getAttribute("data-categoria");

        destinoJejuFiltro.forEach(function (destino) {

            const categoriaDestino = destino.getAttribute("data-categoria");

            if (categoriaSeleccionada === "todas") {
                destino.style.display = "";
            } 
            else if (categoriaDestino === categoriaSeleccionada) {
                destino.style.display = "";
            } 
            else {
                destino.style.display = "none";
            }

        });

    });

});

