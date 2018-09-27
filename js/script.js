console.log('別のファイルで読み込んでるよ！');


var btn = document.getElementsByClassName('contact_button_sp')[0];
var contact = document.getElementsByClassName('contact_button_sp_active')[0];

contact.style.display = 'none';

btn.addEventListener('click', function(e) {
  e.preventDefault();

  if (contact.style.display === 'block') {
    contact.style.display = 'none';
  } else {
    contact.style.display = 'block';
  }
});
