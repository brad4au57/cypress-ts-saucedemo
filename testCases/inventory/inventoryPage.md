# SauceDemo Inventory Page Test Cases

## Test Case 1: Initial Inventory Page Validation

**Objective:** Verify that the inventory page displays the correct headings and inventory item cards upon login.

**Preconditions:**

- User is logged in with username: `standard_user` and password: `secret_sauce`.

**Test Steps:**

1. **Action Step:** Navigate to the inventory page (`https://www.saucedemo.com/inventory.html`).

   - **Expected Outcome:** The page loads successfully.

2. **Action Step:** Verify the main heading of the page.

   - **Expected Outcome:** The heading should display "Products".

3. **Action Step:** Count the number of inventory item cards displayed.

   - **Expected Outcome:** There should be 6 inventory items listed.

4. **Action Step:** For each inventory item card, verify the presence of the item name, description, price, and "Add to cart" button.
   - **Expected Outcome:** Each item card should display:
     - Item Name
     - Item Description
     - Item Price
     - "Add to cart" button
