console.log('JS OK!!!')

// shopping list
const shoppingList = ['Pere', 'Mele', 'Banane', 'Prugne', 'Limone', 'Cereali', 'Lamponi', 'Arachidi', 'Mais']

// variables
let list = '';
let i = 0;

// shopping list while loop
while (i < shoppingList.length) {
    list += '<br>Food: ' + shoppingList[i];
    i++;
    console.log(shoppingList[i]);
}

// returns the HTML content (inner.HTML)
document.getElementById('container').innerHTML = list;
