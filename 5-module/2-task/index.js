function toggleText() {
  let toggleTextButton = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');

  toggleTextButton.addEventListener('click',() => {    
    if(text.getAttribute('hidden') === ''){
      text.removeAttribute('hidden', '');
    } else {
      text.setAttribute('hidden', '');
    }
  });

}
