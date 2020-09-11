// summary
// document, textContent, innerHtml, innerText, getElementById, geElementByClassName, getElementByTagName, querySelector, querySelectorAll



// Examine the document object//
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello DOME';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID//
// console.log(document.getElementById(header-title'));
var getMe = document.getElementById('understand');
console.log(getMe.textContent);
getMe.innerHTML = '<h1>Change me</h1>';
console.log(getMe.innerHTML);
console.log(getMe.innerText)

let ours = document.getElementById('is');
console.log(ours.innerText)
console.log(ours.textContent)

var getUs = document.getElementById('neatness');
getUs.innerHTML = '<h1>it is all about neatness</h1>'
console.log(getUs)
getUs.style.borderRadius = 'height:30px; width: 25px;';
getUs.style.backgroundColor = 'red';
console.log(getUs);

var ourss = document.getElementById('understand');
console.log(ourss);
console.log(ourss.textContent);
console.log(ours.innerHTML);
var why = document.getElementsByClassName('form-control');
console.log(why);
console.log(why.innerText);


const they = () => {
    const theirs = document.getElementById('is');
    theirss = theirs.textContent;
    for (var i = 0; i < theirss.length; i++) {
        if (theirss.length == "The love of the game") {
            return "kofi";
        }
    }
    return "it is normal";

}
console.log(they());

const list = document.getElementsByClassName('list-inline-item');
for (var i = 0; i < list.length; i++) {
    list[i].style.backgroundColor = 'red';
}
console.log(list)




// QUERYSELECTOR it is used to select just one item and it values are the css values
var queries = document.querySelector('.neat')
queries.style.color = "green";
console.log(queries)
queries.style.backgroundColor = "mild";
console.log(queries);
var queriess = document.querySelector('#understand');
queriess.appendChild(ours);
console.log(queriess)
console.log(queriess.innerText);

var item = document.querySelector('list-group-item');
//item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
//lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.color = 'coral';


var workOn = document.querySelector('.font-weight-light');
workOn.style.color = 'red';


// querySelectorAll
var title = document.querySelectorAll('.row');
title[0].textContent = 'hello';
console.log(title);

var odd = document.querySelectorAll('.li:nth-child(odd)');
for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = "brown";
}



console.log(odd);




// getelementbyid
var myElement = document.getElementById('is');
console.log(myElement.innerHTML);
myElement.style.color = 'blue';
console.log(myElement);
console.log(myElement.textContent);
//myElement.innerText;

var ourElement = document.getElementsByClassName('list');
//ourElement.style.appendChild = 'blue';

var ourEelments = document.getElementsByTagName('understand');


var ourSchool = document.querySelector('.list');
var ourSchools = document.querySelectorAll('.list');




