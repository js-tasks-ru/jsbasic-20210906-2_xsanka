function hideSelf() {
  let hideSelfButton = document.querySelector('.hide-self-button');
  hideSelfButton.addEventListener('click',(event)=>{
    let target = event.target;
    if (target.closest('.hide-self-button')) {
      target.setAttribute('hidden', '');
    }    
  });

}
