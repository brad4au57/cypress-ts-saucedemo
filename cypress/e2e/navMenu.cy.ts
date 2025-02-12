describe('SauceDemo Navigation Menu Tests', () => {
  beforeEach(() => {
    cy.logIntoSauceDemo('STANDARD_USER', 'PASSWORD');
  });

  afterEach(() => {
    cy.logoutOfSauceDemo();
  });

  it('Verify navigation menu elements are visible on the inventory page', () => {
    // Verify primary header elements are displayed & open the nav menu
    cy.get('[data-test="primary-header"]')
      .should('be.visible')
      .within(() => {
        cy.contains('div.app_logo', 'Swag Labs').should('be.visible');
        cy.get('[data-test="shopping-cart-link"]').should('be.visible');
        cy.get('#react-burger-menu-btn').should('be.visible').click();
      });
    // Verify the nav menu is displayed
    cy.get('nav.bm-item-list')
      .should('be.visible')
      .within(() => {
        const menuOptions: string[] = [
          'All Items',
          'About',
          'Logout',
          'Reset App State',
        ];
        menuOptions.forEach((option: string) => {
          cy.contains('a', option).should('be.visible');
        });
      });
    // Close the nav menu & verify it is no longer displayed
    cy.get('#react-burger-cross-btn').should('be.visible').click();
    cy.get('nav.bm-item-list').should('not.be.visible');
  });
});
