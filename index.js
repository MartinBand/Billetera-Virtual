
let formularioGastos = document.getElementById(`formularioGastos`)
let listaGastos = document.getElementById(`listaGastos`)
let pGastos = document.getElementById('pGastos')
let pDisponible = document.getElementById('pDisponible')
let ingresadoInput = document.getElementById('ingresadoInput')

let contador = 1
let gastos = []


const ingresarGasto = (event) => {

    event.preventDefault()

    let concepto = event.target.gastosInput.value
    let monto = parseFloat(event.target.montoInput.value)
    
    if (concepto === '' || isNaN(monto)){
        alert (`Ingrese un concepto o monto valido`)
        return
    }else{
        listaGastos.innerHTML+= `<div class="insertado" id=${contador}><p>${concepto}</p><div class='monto'><span>$ </span><p>${monto}</p></div><i class="borrar"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></i></div>`

        gastos.push ({id:contador, concepto:concepto, monto:monto})

        contador ++

        event.target.reset() 

        totalGastos()
        dineroDisponible()
    }
}

const borrarGasto = (event) => {
    if(event.target.closest('.borrar')){

        const divBorrar = event.target.closest('.insertado')

        if(divBorrar){
            divBorrar.remove()
        }

        gastos = gastos.filter (gasto=>gasto.id != divBorrar.id)

        totalGastos()
        dineroDisponible()
    }
}

const totalGastos = () =>{

    if (gastos.length === 0) {
        pGastos.innerText = '0';
        return;
    }else{
    const resultado = gastos.reduce ((acum, gasto) => acum + gasto.monto, 0)

    pGastos.innerText = `${resultado}`
    }
    
}

const dineroDisponible = () =>{

    let ingresado = parseFloat(ingresadoInput.value) || 0

    if (isNaN(ingresado)) {
        pDisponible.innerText = '0';
        return;
    }

    let tgastos = parseFloat(gastos.reduce ((acum, gasto) => acum + gasto.monto, 0))
    
    pDisponible.innerText = ingresado - tgastos
}


totalGastos();
dineroDisponible();

formularioGastos.addEventListener('submit', ingresarGasto)
listaGastos.addEventListener ('click', borrarGasto)
ingresadoInput.addEventListener('input', dineroDisponible);


















// let formulario = document.getElementById(`formulario`)
// let listaGastos = document.getElementById(`listaGastos`)
// let pGastos = document.getElementById(`pGastos`)
// let dineroDisponible = document.getElementById('input1')
// let pDisponible = document.getElementById('pDisponible')

// let contador = 1
// let suma = 0

// // const ingresarGasto = (event)=>{ 

// //     event.preventDefault()
// //     let gasto = event.target.gasto.value
// //     let monto = event.target.monto.value

// //     const div = document.createElement(`div`)

// //     div.classList.add('insertar');
// //     div.id = `div${contador}`;

// //     div.innerHTML = `
// //         <p>${gasto}</p>
// //         <div class='monto'><span>$ </span><p>${monto}</p></div>
// //         <i class="borrar"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></i>
// //     `;

// //     listaGastos.appendChild (div)

// //     // listaGastos.innerHTML+= `<div class="insertar" id=div${contador}><p>${gasto}</p><div class='monto'><span>$ </span><p>${monto}</p></div><i class="borrar"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></i></div>`

// //     contador ++
// //     event.target.reset() 
    
// // }

// // formulario.addEventListener(`submit`, ingresarGasto)

// // const borrarGasto = (event) => {
// //     if (event.target.closest('.borrar')) { // closest busca el ancestro mas cercano que tenga clase borrar. Al poner el if con esa condicion nos aseguramos de que el click deba realizarse sobre el tachito o por lo menos sobre la etiqueta i que tiene la clase. Si no lo colocamos, podriamos clickear sobre cualquier parte del div .insertar y el gasto se borraria.
// //         const divAEliminar = event.target.closest('.insertar');// closest busca el ancestro mas cercano que tenga clase insertar
// //         if (divAEliminar) {
// //             divAEliminar.remove();
// //         }
// //     }
// // }



// const ingresarGasto = (event)=>{ 

//     event.preventDefault()

//     let gasto = event.target.gasto.value
//     let monto = parseFloat(event.target.monto.value)
//     let dinero = parseFloat(dineroDisponible.value) || 0
//     let disponible = dinero

//     if (gasto==='' || monto==='' || isNaN(monto)){
//         alert('Por favor ingrese un gasto y un monto')
//         return
//     }

//     listaGastos.innerHTML+= `<div class="insertar" id=div${contador}><p>${gasto}</p><div class='monto'><span>$ </span><p>${monto}</p></div><i class="borrar" id=i${contador}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></i></div>`




//     contador ++
    
//     suma += monto

//     pGastos.innerText = `${suma}`

//     disponible = dinero - suma

//     pDisponible.innerText= `${disponible}`

//     event.target.reset() 

// }

// formulario.addEventListener(`submit`, ingresarGasto)



// const borrarGasto = (event) => {
    
// }



// listaGastos.addEventListener(`click`, borrarGasto)