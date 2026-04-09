function bootstrap() {
  window.PortfolioPhraseRotator.initPhraseRotators();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap, { once: true });
} else {
  bootstrap();
}
