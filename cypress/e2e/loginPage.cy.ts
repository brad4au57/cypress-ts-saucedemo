import { describe } from 'mocha';

describe('SauceDemo Login Page Tests', () => {
  const standardUser: string = Cypress.env('STANDARD_USER');
  const password: string = Cypress.env('PASSWORD');

  beforeEach(() => {
    cy.visit('/');
  });

  it.only('Verify all elements are visible on the login page', () => {
    const acceptedUsernames: string[] = [
      'standard_user',
      'locked_out_user',
      'problem_user',
      'performance_glitch_user',
      'error_user',
      'visual_user',
    ];
    // Verify login page elements display
    cy.get('.login_logo').should('be.visible');
    cy.get('#user-name').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('#login-button').should('be.visible');
    cy.get('#login_credentials').within(() => {
      cy.contains('Accepted usernames are:').should('be.visible');
      acceptedUsernames.forEach((username: string) => {
        cy.contains(username).should('be.visible');
      });
    });

    cy.contains('Password for all users:').should('be.visible');
  });

  it('Attempt login with empty fields and verify error handling', () => {
    cy.get('#login-button').click();
    cy.get('.error-message-container')
      .should('be.visible')
      .and('contain', 'Epic sadface: Username is required');
    cy.get('#user-name').should(
      'have.css',
      'border-bottom-color',
      'rgb(226, 35, 26)'
    );
    cy.get('#password').should(
      'have.css',
      'border-bottom-color',
      'rgb(226, 35, 26)'
    );
    cy.get('.error-button').click();
    cy.get('.error-message-container').should('not.exist');
    cy.get('#user-name').should(
      'have.css',
      'border-bottom-color',
      'rgb(226, 35, 26)'
    );
    cy.get('#password').should(
      'have.css',
      'border-bottom-color',
      'rgb(226, 35, 26)'
    );
  });

  it('Attempt login with correct username and incorrect password', () => {
    cy.get('#user-name').type(standardUser);
    cy.get('#password').type('wrong_password');
    cy.get('#login-button').click();
    cy.get('.error-message-container')
      .should('be.visible')
      .and(
        'contain',
        'Epic sadface: Username and password do not match any user in this service'
      );
    cy.get('#user-name').should(
      'have.css',
      'border-bottom-color',
      'rgb(226, 35, 26)'
    );
    cy.get('#password').should(
      'have.css',
      'border-bottom-color',
      'rgb(226, 35, 26)'
    );
    cy.get('.error-button').click();
    cy.get('.error-message-container').should('not.exist');
    cy.get('#user-name').should(
      'have.css',
      'border-bottom-color',
      'rgb(226, 35, 26)'
    );
    cy.get('#password').should(
      'have.css',
      'border-bottom-color',
      'rgb(226, 35, 26)'
    );
  });

  it('Attempt login with incorrect username and correct password', () => {
    cy.get('#user-name').type('wrong_user');
    cy.get('#password').type(password);
    cy.get('#login-button').click();
    cy.get('.error-message-container')
      .should('be.visible')
      .and(
        'contain',
        'Epic sadface: Username and password do not match any user in this service'
      );
    cy.get('#user-name').should(
      'have.css',
      'border-bottom-color',
      'rgb(226, 35, 26)'
    );
    cy.get('#password').should(
      'have.css',
      'border-bottom-color',
      'rgb(226, 35, 26)'
    );
    cy.get('.error-button').click();
    cy.get('.error-message-container').should('not.exist');
    cy.get('#user-name').should(
      'have.css',
      'border-bottom-color',
      'rgb(226, 35, 26)'
    );
    cy.get('#password').should(
      'have.css',
      'border-bottom-color',
      'rgb(226, 35, 26)'
    );
  });

  it('Successful login with correct username and password', () => {
    cy.get('#user-name').type(standardUser);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
    cy.url().should('contain', `/inventory.html`);
  });
});
