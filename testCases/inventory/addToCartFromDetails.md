# SauceDemo Inventory Page Test Cases

## Test Case 5: Add Item to Cart from Item Detail Page

**Objective:** Verify that adding an item to the cart from the item detail page updates the cart icon accordingly.

**Preconditions:**

- User is on the inventory page.

**Test Steps:**

1. **Action Step:** Click on an inventory item to navigate to its detail page.

   - **Expected Outcome:** User is on the item's detail page.

2. **Action Step:** Click the "Add to cart" button on the detail page.

   - **Expected Outcome:** The cart icon displays a badge with the number "1".

3. **Action Step:** Navigate back to the inventory page and add another item to the cart.
   - **Expected Outcome:** The cart icon updates to display a badge with the number "2".
