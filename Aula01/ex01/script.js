/*Após isso capture todas as tags que possuem a classe ‘service’ 
e imprima em um console.log() todas elas.
Faça também a captura da tag que possui o id ‘services’*/

// Captura todas as tags com a classe 'service'
const serviceElements = document.querySelectorAll('.service');

// Imprime todas as tags com a classe 'service' no console
serviceElements.forEach(service => console.log(service));

// Captura a tag com o id 'services'
const servicesElement = document.getElementById('services');

// Imprime a tag com o id 'services' no console
console.log(servicesElement);
