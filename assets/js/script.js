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
        Swal.fire(`Olá, ${result.value}!`, 'Seu nome foi recebido.', 'success');
      }
    });
  });