//Attention à ne pas additionner un nombre et une string
let nb1 = 10
let nb2 = 7
let sum = nb1 + nb2
console.log(sum)

let nb3 = 10
let nb4 = Number('8')
sum = nb3 + nb4
console.log(sum)

let nb5 = 10
let nb6 = '9'
sum = nb5 + +nb6    // +'1' converti '1' to 1
console.log(sum)