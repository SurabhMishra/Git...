

//GETELEMENTABYLASTNAME
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);

items[1].style.backgroundColor = 'green';



// QUEARYsELECTOR
var header = document.querySelector('#main-header');
header.style.borderBotttom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello Word'

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'green';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';

// QUERYSELECTORALL

var titles = document.querySelector('.title');
console.log(titles);

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i<odd.length; i++)
{
    odd[i].style.backgroundColor = 'green';
}
