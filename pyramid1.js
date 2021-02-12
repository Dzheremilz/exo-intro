let char = 'A'
let l = char
for (let counter = 0; counter < 8; counter++) {
  console.log(l)
  l += char
}

// with repeat

for (let i = 1; i < 9; i++) {
  console.log('*'.repeat(i))
}