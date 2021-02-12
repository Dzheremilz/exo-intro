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
let x = 17                                                // taille de la pyramid
let char2 = '*'                                           // choix du caractere
let space2 = ' '                                          // affichage de l'espace
for (let i = 1; i <= x; i++) {                            // boucle avec affichage via repeat, caractere espace caractere
  console.log(char2.repeat(i) + space2.repeat((x * 2) - (2 * i)) + char2.repeat(i))
}