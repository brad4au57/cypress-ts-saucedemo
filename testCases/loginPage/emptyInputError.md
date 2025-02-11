# SauceDemo Login Page Test Cases

## Test Case 2: Attempt Login with Empty Fields and Verify Error Handling

**Objective:** Validate that attempting to log in without entering credentials triggers the appropriate error message and visual indicators.

**Preconditions:**

- User is on the SauceDemo login page.

**Test Steps:**

1. **Action Step:** Click the login button without entering any credentials.

   - **Expected Outcome:** An error message container with the class `.error-message-container` becomes visible, displaying the text "Epic sadface: Username is required".

2. **Action Step:** Verify the border color of the username input field.

   - **Expected Outcome:** The `#user-name` input field has a CSS `border-bottom-color` of `rgb(226, 35, 26)`, indicating an error state.

3. **Action Step:** Verify the border color of the password input field.

   - **Expected Outcome:** The `#password` input field has a CSS `border-bottom-color` of `rgb(226, 35, 26)`, indicating an error state.

4. **Action Step:** Click the error message close button (identified by the class `.error-button`).

   - **Expected Outcome:** The error message container (`[data-test="error"]`) is no longer visible.

5. **Action Step:** Verify the border color of the username input field after closing the error message.

   - **Expected Outcome:** The `#user-name` input field's `border-bottom-color` reverts to `rgb(237, 237, 237)`, indicating no error.

6. **Action Step:** Verify the border color of the password input field after closing the error message.
   - **Expected Outcome:** The `#password` input field's `border-bottom-color` reverts to `rgb(237, 237, 237)`, indicating no error.

**Postconditions:**

- The error message is dismissed, and input fields return to their default state.
