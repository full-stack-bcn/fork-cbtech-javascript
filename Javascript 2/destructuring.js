let persona = {
    nombre: "Pauek",
    apellidos: "Hernández",
    casado: true,
    num_hijos: 2,
}

let { apellidos, nombre, casado, ...resto } = persona
console.log(`
    Nombre:      ${nombre}
    Apellidos:   ${apellidos}
    EstadoCivil: ${casado ? "casado" : "soltero"}
`)
console.log(resto)

let width = 500
let height = 700

let header = {
    title: "Pastries",
    width: 121,
    height: 83,
    border: true,
}

let { title, width: w, height: h, border } = header

console.log(width, height)
console.log(w, h)

function showPerson({ name, lastName, age }) {
    console.log(`
    Name:           ${name}
    Last Name:      ${lastName}
    Marital Status: ${age ? "married" : "single"}
    `)
}

showPerson({ name: "M", lastName: "Null", age: 27 })