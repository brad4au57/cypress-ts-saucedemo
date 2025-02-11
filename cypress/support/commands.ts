/// <reference types="cypress" />

Cypress.Commands.add('logIntoSauceDemo', (email, password) => {
  const log = Cypress.log({
    name: 'logIntoSauceDemo',
    displayName: 'LOGIN',
    message: [`🔐 Logging in user ${email}`],
    autoEnd: false,
  });

  // Navigate to login page
  cy.visit('/');
  // Enter username and password
  cy.get('#user-name').type(Cypress.env(email));
  cy.get('#password').type(Cypress.env(password));
  // Click login button and verify user is redirected to inventory page
  cy.get('#login-button').click();
  cy.url().should('contain', `/inventory.html`);

  log.end();
});

Cypress.Commands.add('logoutOfSauceDemo', () => {
  const log = Cypress.log({
    name: 'logoutOfSauceDemo',
    displayName: 'LOGOUT',
    message: [`🔐 Logging out user`],
    autoEnd: false,
  });

  // Open the menu
  cy.get('#react-burger-menu-btn').click();
  // Click the logout link
  cy.get('#logout_sidebar_link').click();
  // Verify user is redirected to login page
  cy.url().should('contain', `/index.html`);

  log.end();
});
