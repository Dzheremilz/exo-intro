let char = 'A'
let l = char
for (let counter = 0; counter < 8; counter++) {
  console.log(l)
  l += char
}

// with repeat
let p = 22                       // taille pyramid
for (let i = 1; i <= p; i++) {
  console.log(char.repeat(i))
}