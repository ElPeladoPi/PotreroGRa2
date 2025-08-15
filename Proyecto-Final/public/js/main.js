// - Manejo del formulario de contacto (simulación, no envía datos)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Validación simple
      const nombre = form.nombre.value.trim();
      const mensaje = form.mensaje.value.trim();
      if (!nombre || !mensaje) {
        alert('Por favor completa tu nombre y mensaje antes de enviar.');
        return;
      }
      // Simular envío
      alert('Gracias, ' + nombre + '. Tu mensaje ha sido recibido.');
      form.reset();
    });
  }
});
