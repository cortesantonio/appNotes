const root = document.getElementById('root');
let notas = JSON.parse(localStorage.getItem('notas'))

if (notas) {
    renderizarNotas()
} else {
    let notas = []
    localStorage.setItem('notas', JSON.stringify(notas))
    renderizarNotas()
    location.reload()
}

function obtenerNuevaNota() {
    var titulo = document.getElementById('titulo').value;
    var descripcion = document.getElementById('descripcion').value;
    var color = document.forms[0];
    for (let i = 0; i < color.length; i++) {
        if (color[i].checked) {
            opc = color[i].value;
            if(opc == 'red'){
                color = 'rgba(255, 0, 0, 0.301)'
            }else{
                color = 'wheat'
            }
        }
    }
    if (descripcion.length > 0) {
        guardar(titulo, descripcion, color)
        root.innerHTML= ''
        renderizarNotas()
    }
    else {
        alert("Debe completar el campo 'Descripcion' ")
    }
}

function guardar(titulo, descripcion, color) {
    let notas = JSON.parse(localStorage.getItem('notas'))
    notas.unshift({ "titulo": titulo, "descripcion": descripcion, "color": color })
    localStorage.setItem('notas', JSON.stringify(notas))
}


function renderizarNotas() {
    let notas = JSON.parse(localStorage.getItem('notas'))

    for (let index = 0; index < notas.length; index++) {
        const N = notas[index]
        const card = document.createElement("div");
        card.classList.add("tarjeta")
        card.style.backgroundColor = N.color;

        //titulo
        const tituloNota = document.createElement("h2")
        tituloNota.innerHTML = N.titulo;
        tituloNota.classList.add("titulo-notas")
        // linea divisora
        const line = document.createElement('hr')
        //descripcion
        const descripcionNota = document.createElement("p")
        descripcionNota.innerHTML = N.descripcion;
        descripcionNota.classList.add("descripcion-notas")

        // eliminar 
        const btnDelete = document.createElement('button')
        btnDelete.innerHTML = 'x';
        btnDelete.classList.add('btn-delete')
        btnDelete.onclick

        btnDelete.addEventListener("click", function (e) {
            actualizar(index)         
        })

        card.appendChild(btnDelete)
        card.appendChild(tituloNota)
        card.appendChild(line)
        card.appendChild(descripcionNota);
        root.appendChild(card)
    }
}

function actualizar(x){
    let notas = JSON.parse(localStorage.getItem('notas'))
    notas.splice(x,1)
    localStorage.setItem('notas', JSON.stringify(notas))
    root.innerHTML = ''
    renderizarNotas()


}

    // se elimina el primer item de la lista y no el selecionado. ver el indice que viaja a la funcion.
