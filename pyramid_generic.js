let pyramid = null                                        // string de concatenation
let char = 'K'                                            // caractere affiche
let space = ' '
let l = char                                              // stock le caractere
let o = 14                                                // gere le nombre d'espace
for (let counter = 0; counter < 8; counter++) {
  pyramid = l                                             // ajoute le caractere
  for (let p = 0; p < o; p++) {
    pyramid += space                                      // ajoute les espaces
  }
  pyramid += l                                            // complete la string
  l += char
  o = o - 2
  console.log(pyramid)                                    // affiche la chaine complete
}

// with repeat
let x = 17
let char2 = '*'
let space2 = ' '
for (let i = 1; i <= x; i++) {
  console.log(char2.repeat(i) + space2.repeat((x * 2) - (2 * i)) + char2.repeat(i))
}