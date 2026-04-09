(function attachTypedText(global) {
  const DEFAULT_OPTIONS = {
    typeSpeed: 55,
    backSpeed: 28,
    backDelay: 1000,
    startDelay: 0,
    loop: true,
    showCursor: true,
  };

  function readNumber(value, fallback) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function buildCursor(output, options) {
    if (!options.showCursor) {
      return null;
    }

    const nextSibling = output.nextElementSibling;
    if (nextSibling && nextSibling.classList.contains('typed-cursor')) {
      return nextSibling;
    }

    const cursor = document.createElement('span');
    cursor.className = 'typed-cursor';
    cursor.textContent = '|';
    output.insertAdjacentElement('afterend', cursor);
    return cursor;
  }

  class TypedText {
    constructor(output, strings, options = {}) {
      this.output = output;
      this.strings = strings;
      this.options = { ...DEFAULT_OPTIONS, ...options };
      this.cursor = buildCursor(output, this.options);
      this.stringIndex = 0;
      this.charIndex = 0;
      this.isDeleting = false;
      this.timeoutId = null;
    }

    start() {
      if (!this.strings.length) {
        return;
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.output.textContent = this.strings[0];
        if (this.cursor) {
          this.cursor.style.display = 'none';
        }
        return;
      }

      this.timeoutId = window.setTimeout(() => this.tick(), this.options.startDelay);
    }

    tick() {
      const currentString = this.strings[this.stringIndex];

      if (this.isDeleting) {
        this.charIndex -= 1;
      } else {
        this.charIndex += 1;
      }

      this.output.textContent = currentString.slice(0, this.charIndex);

      let delay = this.isDeleting ? this.options.backSpeed : this.options.typeSpeed;

      if (!this.isDeleting && this.charIndex === currentString.length) {
        if (!this.options.loop && this.stringIndex === this.strings.length - 1) {
          return;
        }

        this.isDeleting = true;
        delay = this.options.backDelay;
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.stringIndex = (this.stringIndex + 1) % this.strings.length;
        delay = this.options.typeSpeed;
      }

      this.timeoutId = window.setTimeout(() => this.tick(), delay);
    }
  }

  function createTypedText(output) {
    const sourceSelector = output.dataset.typedSource;
    const source = sourceSelector ? document.querySelector(sourceSelector) : null;

    if (!source) {
      return null;
    }

    const strings = Array.from(source.querySelectorAll('p'))
      .map(item => item.textContent.trim())
      .filter(Boolean);

    if (!strings.length) {
      return null;
    }

    const options = {
      typeSpeed: readNumber(output.dataset.typedSpeed, DEFAULT_OPTIONS.typeSpeed),
      backSpeed: readNumber(output.dataset.typedBackSpeed, DEFAULT_OPTIONS.backSpeed),
      backDelay: readNumber(output.dataset.typedBackDelay, DEFAULT_OPTIONS.backDelay),
      startDelay: readNumber(output.dataset.typedStartDelay, DEFAULT_OPTIONS.startDelay),
      loop: output.dataset.typedLoop !== 'false',
      showCursor: output.dataset.typedCursor !== 'false',
    };

    return new TypedText(output, strings, options);
  }

  function initTypedTexts(root = document) {
    const outputs = root.querySelectorAll('[data-typed-source]:not([data-typed-ready])');

    outputs.forEach(output => {
      const typedText = createTypedText(output);

      if (!typedText) {
        return;
      }

      output.dataset.typedReady = 'true';
      typedText.start();
    });
  }

  global.PortfolioTypedText = {
    initTypedTexts,
  };
})(window);
