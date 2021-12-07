let addBtnToDo = document.getElementById("addBtn");
let clearBtnToDo = document.getElementById("clearBtn");
let list = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputText');

var paragraph = '';

function addList() {

    paragraph = document.createElement('p')

    paragraph.classList.add('paragraf-style')
    paragraph.innerText = inputField.value

    list.appendChild(paragraph);
    inputField.value = '';

    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through"
    })

    paragraph.addEventListener('dblclick', function() {
            list.removeChild(paragraph)
        })
    // if (inputField === '') {
    //     alert('You must write something')
    // }
};

function clearList() {
    list.removeChild(paragraph)
};