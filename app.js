function getWelcomeMessage() {
  return '¡Este sitio fue validado, fusionado y desplegado!';
}
if (typeof document !== 'undefined') {
  document.getElementById('message').textContent = getWelcomeMessage();
}
module.exports = getWelcomeMessage;