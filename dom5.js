// // EXAMINE THE DOCUMENT OBJECT

// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images)

//GETELEMENTBTID
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.textContent);
// headerTitle.innerHTML = '<h3>Hello</h3>'
// headerTitle.style.borderBottom = 'solid 3px #000'

//GETELEMENTABYLASTNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[4]);
// // items[4].textContent = 'Hello 2';
// items[4].style.fontWeight = 'bold';
// items[4].style.color = 'green';


// // Give the Error
// // items.style.backgroundColor = '#f4f4f4';

// for(var i=0; i<items.length; i++)
// {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTBYTAGNAME

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';


// Give the Error
// items.style.backgroundColor = '#f4f4f4';

// for(var i=0; i<li.length; i++)
// {
//     li[i].style.backgroundColor = '#f4f4f4';
// }
// QUEARYsELECTOR


// TRAVERSING THE DOM
var itemList = document.querySelector('#items');
//ParentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);



// 1.parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

// childNode
// console.log(itemList.childNodes)
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//6. firstChild
console.log(itemList.firstChild);

//5. firstElememntChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


//3. lastChild
console.log(itemList.lastChild);

//2 lastElememntChild
console.log(itemList.firstElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

// 7. nextsibling
console.log(itemList.nextSibling);
//8 nextElementibling
console.log(itemList.nextElementSibling);
//9 previoussibling
console.log(itemList.previousSibling);
//10. previouselementsibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

// 11. createelement
// create div
var newDiv =document.createElement('div');
     // Add class
newDiv.className = 'Hello 1';
// 12 SetAttribute
newDiv.setAttribute('title', 'Hello Div');
// 13 createtesxtnode
var newDivText = document.createTextNode('Hello Word');
 
//14 Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
// newDiv.style.fontSize = '30px';
container.insertBefore(newDiv,h1);



