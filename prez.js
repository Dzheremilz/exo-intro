let prenom = 'Sofiane'
let age = 39
let ville = 'Paris'

let msg = `Hello, my name is ${prenom} and i am ${age} years old. I live in ${ville}.`
console.log(msg)

const introduce = (vorname = 'Sofiane', alter = '39', stadt = 'Paris') => {
  return `Hello, my name is ${vorname} and i am ${alter} years old. I live in ${stadt}.`
}
console.log(introduce())
console.log(introduce('Jérémie', '29'))