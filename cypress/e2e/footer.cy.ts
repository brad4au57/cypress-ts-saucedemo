describe('SauceDemo Footer Tests', () => {
  context('Inventory Page Footer', () => {
    beforeEach(() => {
      cy.logIntoSauceDemo('STANDARD_USER', 'PASSWORD');
    });
    afterEach(() => {
      cy.logoutOfSauceDemo();
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

  context('External Site Footer Links', () => {
    beforeEach(() => {
      cy.logIntoSauceDemo('STANDARD_USER', 'PASSWORD');
    });

    it('Verify Twitter/X footer link opens to correct page', () => {
      cy.get('footer[data-test="footer"]')
        .contains('a', 'Twitter')
        .should('be.visible')
        .invoke('removeAttr', 'target')
        .click();

      cy.origin('https://x.com', () => {
        cy.url().should('contain', '/saucelabs');
      });
    });

    it('Verify Facebook footer link opens to correct page', () => {
      cy.get('footer[data-test="footer"]')
        .contains('a', 'Facebook')
        .should('be.visible')
        .invoke('removeAttr', 'target')
        .click();

      cy.origin('https://www.facebook.com', () => {
        cy.url().should('contain', '/saucelabs');
      });
    });

    it('Verify LinkedIn footer link opens to correct page', () => {
      cy.get('footer[data-test="footer"]')
        .contains('a', 'LinkedIn')
        .should('be.visible')
        .invoke('removeAttr', 'target')
        .click();

      cy.origin('https://www.linkedin.com', () => {
        cy.url().should('contain', 'company/sauce-labs/');
      });
    });
  });
});
