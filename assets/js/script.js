// Alerta com Input de email
document.getElementById('btn-contato').addEventListener('click', function(){
  Swal.fire({
    title: 'Digite seu email',
    input: 'email',
    inputPlaceholder: 'Endereço de e-mail inválido',
    showCancelButton: true,
    confirmButtonText: 'Enviar',
    cancelButtonText: 'Cancelar'
  }).then((email) =>{
    if (email.isConfirmed && email.value){
      Swal.fire('Verifique seu email', 'success');
    } 
  })
});


// Alerta Sucesso
document.getElementById('btn-comprar').addEventListener('click', function(){
  Swal.fire('Compra realizada', 'success');
})





// Alerta com Prompt de Input
document.getElementById('alertInput').addEventListener('click', function() {
    Swal.fire({
      title: 'Digite seu nome',
      input: 'text',
      inputPlaceholder: 'Seu nome aqui',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        Swal.fire(`Olá, ${result.value}!`, 'Cadastro concluido.', 'success');
      }
    });
  });


const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
});



