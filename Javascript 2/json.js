let clase_de_hoy = {
    "título": "Javascript 2 - Objetos y Arrays",
    "duracion": 180,
    "hora": "16:00:00.000",
    "en_curso": true,
    "lista_asistencia": null
}

// Objeto en memoria -> string
console.log(JSON.stringify(clase_de_hoy))

let json_obj = `{ 
    "a": 1, 
    "b": true, 
    "c": "hola"
}`

// string -> objeto en memoria
let obj = JSON.parse(json_obj)
console.log(obj)




