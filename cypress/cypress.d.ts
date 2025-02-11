/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to get environment variables with strict typing
     * @example cy.env("STANDARD_USER")
     */
    env<T extends keyof CypressEnv>(key: T): CypressEnv[T];
    /**
     * Custom command to log into saucedemo website.
     * @example cy.logIntoSauceDemo('user_name', 'secret_pw')
     */
    logIntoSauceDemo(
      email: string,
      password: string
    ): Chainable<JQuery<HTMLElement>>;
    /**
     * Custom command to log out of saucedemo website.
     * @example cy.logoutOfSauceDemo()
     */
    logoutOfSauceDemo(): Chainable<JQuery<HTMLElement>>;
  }

  interface CypressEnv {
    STANDARD_USER: string;
    LOCKED_OUT_USER: string;
    PROBLEM_USER: string;
    PERFORMANCE_GLITCH_USER: string;
    PASSWORD: string;
  }
}
