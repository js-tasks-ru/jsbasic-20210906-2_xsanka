function toggleText() {
  let toggleTextButton = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');

  toggleTextButton.addEventListener('click',() => {    
    if(text.getAttribute('hidden') === ''){
      text.removeAttribute('hidden', '');
      console.log('removeAttribute')
    } else {
      text.setAttribute('hidden', '');
      console.log('setAttribute')
    }
  });

}
