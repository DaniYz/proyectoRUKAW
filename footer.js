//selecciona el elemento html con la clase  y lo asigna en la variable
const logofooter = document.querySelector(".logo-redsocial img");
const segundacolumna = document.querySelector(".segundacolumna");
const terceracolumna = document.querySelector(".terceracolumna");
const cuartacolumna = document.querySelector(".cuartacolumna");
const seccioncontacto = document.getElementsById(".contacto");

segundacolumna.forEach(segunda => {
    segunda.addEventListener("click", () => {
        if (segunda.id === "contactofooter") {
            seccioncontacto.scrollIntoView({ behavior: 'smooth' });
        } else {
            return
        }
        /**if (segunda.id === "nosotrosfooter") {

        }
        if (segunda.id === "mercadofooter") {

        }*/
    })

})


/**
terceracolumna.forEach(tercera => {
    tercera.addEventListener("click", () => {
        if (segunda.id === "reservasfooter") {

        }
        if (segunda.id === "salonesfooter") {

        }
        if (segunda.id === "eventosfooter") {

        }
    })
})

cuartacolumna.forEach(cuarta => {
    cuarta.addEventListener("click", () => {
        if (segunda.id === "menufooter") {

        }
        if (segunda.id === "bebestiblefooter") {

        }
        if (segunda.id === "platosfriosfooter") {

        }
        if (segunda.id === "platoscalientesfooter") {

        }
    })
})

*/