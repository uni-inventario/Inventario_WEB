import './commands'

Cypress.Commands.overwrite('type', (originalFn, subject, text, options = {}) => {
  return originalFn(subject, text, { delay: 0, ...options });
});