const input = document.querySelector('.input');
const button = document.querySelector('button');
const resultDiv = document.querySelector('.results');
const headerDiv = document.querySelector('.header-result');
headerDiv.style.display = 'none';
const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', () => {
  localStorage.removeItem('list');
});

function createSpan(parent, content, i) {
  const comment = document.createElement('textarea');
  let p = document.createElement('p');
  p.textContent = `Ticket #`;
  let span = document.createElement('div');
  let div = document.createElement('div');
  const br = document.createElement('br');
  const commentDiv = document.createElement('div');
  const commentLabel = document.createElement('label');

  div.className = 'numberContainer';

  parent.appendChild(div);
  div.appendChild(p);
  div.appendChild(span);
  div.appendChild(commentLabel);
  div.appendChild(comment);
  parent.appendChild(commentDiv);
  div.appendChild(br);

  span.value = content;
  commentLabel.textContent = 'Comments: ';
}

function number(usrVar) {
  let min = usrVar / 10;
  let result = Math.floor(Math.random() * (usrVar - min + 1) + min);
  let resultArr = [];
  resultArr.push(result);
  for (let i = 0; i < resultArr.length; i++) {
    createSpan(resultDiv, resultArr[i], i);
  }
}

button.addEventListener('click', e => {
  e.preventDefault();
  function usrVar() {
    if (Number.isNaN(input.value)) {
      alert('Sorry, not a number, try again');
    } else {
      return input.value;
    }
  }
  headerDiv.style.display = 'block';
  number(usrVar());
  localStorage.setItem('list', resultDiv.innerHTML);
});

function getData() {
  if (localStorage.getItem('list')) {
    resultDiv.innerHTML = localStorage.getItem('list');
  }
}
getData();
