describe('SauceDemo Inventory Page Tests', () => {
  beforeEach(() => {
    cy.logIntoSauceDemo('STANDARD_USER', 'PASSWORD');
  });

  afterEach(() => {
    cy.logoutOfSauceDemo();
  });

  it('Verify inventory page elements are visible on page load', () => {
    cy.get('[data-test="secondary-header"]')
      .should('be.visible')
      .within(() => {
        cy.contains('span.title', 'Products').should('be.visible');
        cy.get('[data-test="product_sort_container"]').should('be.visible');
      });
  });
});
