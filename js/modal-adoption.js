document.addEventListener('DOMContentLoaded', () => {
  const formularios = document.querySelectorAll('[id^="formAdopcion"]');

  formularios.forEach(form => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const modalId = form.id.replace('formAdopcion', 'modalAdoptar');
      const modalForm = bootstrap.Modal.getInstance(document.getElementById(modalId));
      if (modalForm) modalForm.hide();

      const modalGracias = new bootstrap.Modal(document.getElementById('modalGracias'));
      modalGracias.show();

      form.reset();
    });
  });
});