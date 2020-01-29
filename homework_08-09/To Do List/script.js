
let input = document.getElementById('myInput');
let button = document.getElementById('add');
// handle button event
button.addEventListener('click', addList, false);
// handle enter event
input.addEventListener('keypress', (ev) => {
  if (ev.keyCode === 13) { addList();}
}, false);


function addList() {
  
  let inputVal = input.value;
  if (!inputVal) {
    window.alert('Write Something');
  } else {
    
    let listCont = document.getElementById('listContainer');
    let listDiv = document.createElement('DIV');
    listDiv.innerHTML = inputVal;

    listDiv.className = 'list';
    listDiv.addEventListener('click', (ev) => {
      ev.target.classList.toggle('checked');
    }, false);

    let span = document.createElement('SPAN');
    span.className = 'close';
    span.innerHTML = 'X';

    span.addEventListener('click', (ev) => {
      let thisSpan = ev.target;
          thisSpan.parentNode.remove();
          console.log(ev);
    }, false);

    listDiv.appendChild(span);
    listCont.appendChild(listDiv); 

    //remove input value
    input.value = '';
  }
}