/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to get environment variables with strict typing
     * @example cy.env("STANDARD_USER")
     */
    env<T extends keyof CypressEnv>(key: T): CypressEnv[T];
  }

  interface CypressEnv {
    STANDARD_USER: string;
    LOCKED_OUT_USER: string;
    PROBLEM_USER: string;
    PERFORMANCE_GLITCH_USER: string;
    PASSWORD: string;
  }
}
