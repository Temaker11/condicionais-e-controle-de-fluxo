// Control flow
//Nas próximas aulas falaremos sobre o controle de fluxo de nossa aplicação. O fluxo padrão vai linha a linha executando todas as linhas, mas nós podemos alterar isso com o que vamos aprender neste módulo.

// if...else


let temperature = 36

let highTemperature = temperature >= 37.5

let mediumTemperature = temperature < 37.5 && temperature >= 37




if(highTemperature) {
  console.log('Febre alta')

} else  if(mediumTemperature) {
  console.log('Febre moderada')
}
  else {console.log('Saudável')
}
  

