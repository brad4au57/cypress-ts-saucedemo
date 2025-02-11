describe('SauceDemo Footer Tests', () => {
  beforeEach(() => {
    cy.logIntoSauceDemo('STANDARD_USER', 'PASSWORD');
  });

  afterEach(() => {
    // cy.logoutOfSauceDemo();
  });

  it('Verify footer elements are visible on the inventory page', () => {
    const year: number = new Date().getFullYear();

    cy.get('footer[data-test="footer"]')
      .should('be.visible')
      .within(() => {
        cy.contains('a', 'Twitter')
          .should('be.visible')
          .and('have.attr', 'href', 'https://twitter.com/saucelabs');
        cy.contains('a', 'Facebook')
          .should('be.visible')
          .and('have.attr', 'href', 'https://www.facebook.com/saucelabs');
        cy.contains('a', 'LinkedIn')
          .should('be.visible')
          .and(
            'have.attr',
            'href',
            'https://www.linkedin.com/company/sauce-labs/'
          );
        cy.contains(
          '[data-test="footer-copy"]',
          `© ${year} Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy`
        );
      });
  });
});
