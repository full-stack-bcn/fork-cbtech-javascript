let obj = {
    "un campo mu raro": 7
}

obj["*abcd*"] = true
obj["  "] = 100.001
obj.a = true

const nombre_campo = "*abcd*"
obj[nombre_campo] = false

console.log(obj)
