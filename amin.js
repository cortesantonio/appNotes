let notas = []
const root = document.getElementById('root');

function addnota() {
    var titulo = document.getElementById('titulo').value;
    var descripcion = document.getElementById('descripcion').value;
    let color = document.forms[0];
    for (let i = 0; i < color.length; i++) {
        if (color[i].checked) {
            color = color[i].value; 
        }
    }
    if (descripcion.length > 0) {
        notas.push({ "titulo": titulo, "descripcion": descripcion, "color": color });
        localStorage.setItem('notas',JSON.stringify( notas))
        root.innerHTML = ''
        mostrarNotas()

    }

    else {
        alert("Debe completar el campo 'Descripcion' ")
    }
}




function mostrarNotas() {
    for (let i = 0; i < notas.length; i++) {
        notasGuardadas = JSON.parse(localStorage.getItem(notas));
        console.log(notasGuardadas)
        const N = notas[i]

        const card = document.createElement("div");
        card.classList.add("tarjeta")
        card.style.backgroundColor = N.color;

        //titulo
        const tituloNota = document.createElement("h2")
        tituloNota.innerHTML = N.titulo;
        tituloNota.classList.add("titulo-notas")
        //descripcion
        const descripcionNota = document.createElement("p")
        descripcionNota.innerHTML = N.descripcion;
        descripcionNota.classList.add("descripcion-notas")

        // eliminar 
        const btnDelete = document.createElement('button')
        btnDelete.innerHTML = 'x';
        btnDelete.onclick

        btnDelete.addEventListener("click", function (e) {
            notas.splice(i, 1)
            renderizarNotas()
        })

        card.appendChild(btnDelete)
        card.appendChild(tituloNota)
        card.appendChild(descripcionNota);
        root.appendChild(card)
    }
}

function renderizarNotas() {
    root.innerHTML = ''
    mostrarNotas()
}

mostrarNotas()




