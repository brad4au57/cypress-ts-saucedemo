## Test Case 5: Successful Login with Correct Username and Password

**Objective:** Confirm that entering valid credentials allows the user to log in successfully and redirects to the inventory page.

**Preconditions:**

- User is on the SauceDemo login page.

**Test Steps:**

1. **Action Step:** Enter the valid username into the username input field.

   - **Test Data Needed:** Username: `standard_user`
   - **Expected Outcome:** The `#user-name` input field contains the text `standard_user`.

2. **Action Step:** Enter the correct password into the password input field.

   - **Test Data Needed:** Password: `secret_sauce`
   - **Expected Outcome:** The `#password` input field contains the text `secret_sauce`.

3. **Action Step:** Click the login button.

   - **Expected Outcome:** The system authenticates the user and redirects to the inventory page.

4. **Action Step:** Verify the URL of the redirected page.
   - **Expected Outcome:** The URL contains `/inventory.html`, indicating that the user is on the inventory page.

**Postconditions:**

- The user is successfully logged in and navigated to the inventory page.
