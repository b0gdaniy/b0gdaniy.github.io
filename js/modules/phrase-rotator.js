(function attachPhraseRotator(global) {
  const DEFAULT_OPTIONS = {
    typingDelay: 200,
    deletingDelay: 70,
    pauseAfterTyping: 2000,
    pauseAfterDeleting: 50,
  };

  function readNumberOption(value, fallback) {
    const parsed = Number(value);

    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function readOptions(container) {
    return {
      typingDelay: readNumberOption(container.dataset.typingDelay, DEFAULT_OPTIONS.typingDelay),
      deletingDelay: readNumberOption(container.dataset.deletingDelay, DEFAULT_OPTIONS.deletingDelay),
      pauseAfterTyping: readNumberOption(container.dataset.pauseAfterTyping, DEFAULT_OPTIONS.pauseAfterTyping),
      pauseAfterDeleting: readNumberOption(container.dataset.pauseAfterDeleting, DEFAULT_OPTIONS.pauseAfterDeleting),
    };
  }

  function readPhrases(container) {
    return Array.from(container.querySelectorAll('[data-phrase]'))
      .map(phraseElement => ({
        className: phraseElement.className,
        text: phraseElement.textContent.trim(),
      }))
      .filter(phrase => phrase.text.length > 0);
  }

  class PhraseRotator {
    constructor(container, phrases, options = {}) {
      this.container = container;
      this.phrases = phrases;
      this.options = { ...DEFAULT_OPTIONS, ...options };
      this.currentPhraseIndex = 0;
      this.isRunning = false;

      this.output = document.createElement('span');
      this.output.className = 'phrase-rotator__output';

      this.container.replaceChildren(this.output);
      this.container.style.display = 'inline-block';
      this.container.style.minWidth = `${Math.max(...phrases.map(phrase => phrase.text.length))}ch`;
    }

    async start() {
      if (this.isRunning || this.phrases.length === 0) {
        return;
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.showFullPhrase(this.phrases[0]);
        return;
      }

      this.isRunning = true;

      while (this.isRunning) {
        const phrase = this.phrases[this.currentPhraseIndex];

        await this.typePhrase(phrase);
        await this.wait(this.options.pauseAfterTyping);
        await this.deletePhrase(phrase);
        await this.wait(this.options.pauseAfterDeleting);

        this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      }
    }

    async typePhrase(phrase) {
      for (let visibleCharacters = 1; visibleCharacters <= phrase.text.length; visibleCharacters += 1) {
        this.renderPhrase(phrase, visibleCharacters);
        await this.wait(this.options.typingDelay);
      }
    }

    async deletePhrase(phrase) {
      for (let visibleCharacters = phrase.text.length - 1; visibleCharacters >= 0; visibleCharacters -= 1) {
        this.renderPhrase(phrase, visibleCharacters);
        await this.wait(this.options.deletingDelay);
      }
    }

    showFullPhrase(phrase) {
      this.renderPhrase(phrase, phrase.text.length);
    }

    renderPhrase(phrase, visibleCharacters) {
      this.output.className = `phrase-rotator__output ${phrase.className}`.trim();
      this.output.textContent = phrase.text.slice(0, visibleCharacters);
    }

    wait(delay) {
      return new Promise(resolve => {
        window.setTimeout(resolve, delay);
      });
    }
  }

  function createPhraseRotator(container) {
    const phrases = readPhrases(container);

    if (phrases.length === 0) {
      return null;
    }

    return new PhraseRotator(container, phrases, readOptions(container));
  }

  function initPhraseRotators(root = document) {
    const containers = root.querySelectorAll('[data-phrase-rotator]:not([data-phrase-rotator-ready])');

    containers.forEach(container => {
      const rotator = createPhraseRotator(container);

      if (!rotator) {
        return;
      }

      container.dataset.phraseRotatorReady = 'true';
      rotator.start();
    });
  }

  global.PortfolioPhraseRotator = {
    PhraseRotator,
    createPhraseRotator,
    initPhraseRotators,
  };
})(window);
