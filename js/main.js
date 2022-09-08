let btn = document.getElementById("boton");
btn.addEventListener("click", function(e){
    e.preventDefault();
let nombreproducto = document.getElementById("Name");
let cantidad = document.getElementById("Number");
let ul = document.getElementsByClassName("list-group");
let li = document.createElement("li");
    li.innerText = nombreproducto.value;
    li.className = "list-group-item1";
    ul[2].prepend(li);

    if (                                        //validación Producto
        (nombreproducto.value.length >= 3)
        &&
        (isNaN(nombreproducto.value))
    ) {
        nombreproducto.classList.remove("is-invalid");
        nombreproducto.classList.add("is-valid");
    } else {
        nombreproducto.classList.remove("is-valid");
        nombreproducto.classList.add("is-invalid");
    }
    console.log(cantidad.value.length);
    console.log(!isNaN(cantidad.value));
    if (                                        //validación Cantidad
        (cantidad.value.length >= 1)
        &&
        (!isNaN(cantidad.value))
    ) {
        cantidad.classList.remove("is-invalid");
        cantidad.classList.add("is-valid");
    } else {
        cantidad.classList.remove("is-valid");
        cantidad.classList.add("is-invalid");
    }


});
