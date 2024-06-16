/*Capture todos os atributos do input com id igual a ‘email’ respectivamente.
Após isso, imprima em um console.log todos os seus atributos e seu respectivo valor.
Exemplo:
Tag - <input type="text" value="education" id="melhorTurma" />
Console.log */

document.addEventListener('DOMContentLoaded', (event) => {
    const emailInput = document.getElementById('email');
    const attributes = emailInput.attributes;
    for (let i = 0; i < attributes.length; i++) {
        console.log(`${attributes[i].name} - ${attributes[i].value}`);
    }
});
