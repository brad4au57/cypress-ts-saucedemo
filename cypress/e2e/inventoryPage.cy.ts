describe('SauceDemo Inventory Page Tests', () => {
  beforeEach(() => {
    cy.logIntoSauceDemo('STANDARD_USER', 'PASSWORD');
  });

  afterEach(() => {
    cy.logoutOfSauceDemo();
  });

  it('Verify inventory page elements are visible on page load', () => {
    // Verify sub header elements
    cy.get('[data-test="secondary-header"]')
      .should('be.visible')
      .within(() => {
        cy.contains('span.title', 'Products').should('be.visible');
        cy.get('[data-test="product-sort-container"]').should('be.visible');
      });
    // Verify all inventory items are visible
    cy.fixture('inventoryData').then((inventoryItems: any[]) => {
      cy.get('[data-test="inventory-item"]').should(
        'have.length',
        inventoryItems.length
      );
      cy.get('[data-test="inventory-item"]').each(
        ($el: JQuery, index: number) => {
          cy.wrap($el).within(() => {
            cy.get('.inventory_item_name')
              .should('have.text', inventoryItems[index].name)
              .and('be.visible');
            cy.get('.inventory_item_desc')
              .should('have.text', inventoryItems[index].desc)
              .and('be.visible');
            cy.get('.inventory_item_price')
              .should('have.text', `$${inventoryItems[index].price}`)
              .and('be.visible');
            cy.get('img.inventory_item_img').should(
              'have.attr',
              'src',
              inventoryItems[index].img
            );
            cy.contains('button', 'Add to cart').should('be.visible');
          });
        }
      );
    });
  });
});
