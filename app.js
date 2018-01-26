document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.input');
  const button = document.querySelector('.generate');
  const resultDiv = document.querySelector('.results');
  const headerDiv = document.querySelector('.header-result');
  headerDiv.style.display = 'none';
  const clearButton = document.getElementById('clear');

  clearButton.addEventListener('click', () => {
    localStorage.removeItem('list');
  });

  function createSpan(parent, content) {
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

    span.innerHTML = content;
    commentLabel.textContent = 'Comments: ';

    localStorage.setItem('list', resultDiv.innerHTML);
    localStorage.setItem('text', comment.textContent);
  }

  function number(usrVar) {
    let min = usrVar / 10;
    let result = Math.floor(Math.random() * (usrVar - min) + min);
    let resultArr = [];
    resultArr.push(result);
    for (let i = 0; i < resultArr.length; i++) {
      createSpan(resultDiv, resultArr[i]);
    }
  }

  button.addEventListener('click', () => {
    headerDiv.style.display = 'block';
    number(input.value);
  });

  function getData() {
    if (localStorage.getItem('list')) {
      resultDiv.innerHTML = localStorage.getItem('list', 'text');
    }
  }
  getData();
});
