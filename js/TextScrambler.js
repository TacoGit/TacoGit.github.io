// picked off of my demo js
class TextScrambler {
  constructor(elementSelector, options = {}, onComplete = () => {}) {
      this.element = document.querySelector(elementSelector);
      if (!this.element) {
          console.error(`Element ${elementSelector} not found`);
          return;
      }

      this.symbols = options.symbols || "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";
      this.originalText = this.element.innerHTML;
      this.text = this.originalText;
      this.lastUpdate = 0;
      this.startTime = Date.now();
      this.isRestoring = false;
      this.restoredIndices = new Set();

      this.UPDATE_INTERVAL = options.updateInterval || 0.1;
      this.RESTORE_DELAY = options.restoreDelay || 3000;
      this.RESTORE_INTERVAL = options.restoreInterval || 250;
      this.BULK_SIZE = options.bulkSize || 5;

      this.onComplete = onComplete;

      this.animate = this.animate.bind(this);
      requestAnimationFrame(this.animate);
  }

  scrambleTextNodes(node) {
      if (node.nodeType === Node.TEXT_NODE) {
          let scrambledText = "";
          for (let i = 0; i < node.textContent.length; i++) {
              const char = node.textContent[i];
              if (this.isRestoring && this.restoredIndices.has(i)) {
                  scrambledText += this.originalText[i];
              } else if (Math.random() < 0.1) {
                  const symbol = this.symbols[Math.floor(Math.random() * this.symbols.length)];
                  scrambledText += symbol || "!";
              } else {
                  scrambledText += char;
              }
          }
          node.textContent = scrambledText;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
          for (let child of node.childNodes) {
              this.scrambleTextNodes(child);
          }
      }
  }

  restoreCharactersInBulk() {
      if (this.restoredIndices.size < this.originalText.length) {
          let availableIndices = [];
          for (let i = 0; i < this.originalText.length; i++) {
              if (!this.restoredIndices.has(i)) {
                  availableIndices.push(i);
              }
          }
          const randomIndices = [];
          for (let i = 0; i < this.BULK_SIZE && availableIndices.length > 0; i++) {
              const randomIndex = availableIndices.splice(Math.floor(Math.random() * availableIndices.length), 1)[0];
              randomIndices.push(randomIndex);
          }
          randomIndices.forEach(index => this.restoredIndices.add(index));
      }
  }

  updateText(timestamp) {
      if (this.element) {
          const elapsed = Date.now() - this.startTime;

          if (elapsed >= this.RESTORE_DELAY && !this.isRestoring) {
              this.isRestoring = true;
          }

          if (this.isRestoring && elapsed % this.RESTORE_INTERVAL < 16) {
              this.restoreCharactersInBulk();
          }

          this.scrambleTextNodes(this.element);

          if (this.restoredIndices.size === this.originalText.length) {
              this.element.innerHTML = this.originalText;
              this.onComplete(); // Call the callback when done
              return false;
          }
      }
      return true;
  }

  animate(timestamp) {
      if (timestamp - this.lastUpdate >= this.UPDATE_INTERVAL) {
          const shouldContinue = this.updateText(timestamp);
          this.lastUpdate = timestamp;
          if (shouldContinue) {
              requestAnimationFrame(this.animate);
          }
      } else {
          requestAnimationFrame(this.animate);
      }
  }
}

/*
new TextScrambler('.some-element', {
    symbols: '$#@!%&',
    updateInterval: 0.1,
    restoreDelay: 2000,
    restoreInterval: 300,
    bulkSize: 10  // Set a higher bulkSize to speed things up
});
*/
