# SauceDemo Login Page Test Cases

## Test Case 4: Attempt Login with Incorrect Username and Correct Password

**Objective:** Validate that using an incorrect username with the correct password triggers the appropriate error message and visual indicators.

**Preconditions:**

- User is on the SauceDemo login page.

**Test Steps:**

1. **Action Step:** Enter an incorrect username into the username input field.

   - **Test Data Needed:** Username: `wrong_user`
   - **Expected Outcome:** The `#user-name` input field contains the text `wrong_user`.

2. **Action Step:** Enter the correct password into the password input field.

   - **Test Data Needed:** Password: `secret_sauce`
   - **Expected Outcome:** The `#password` input field contains the text `secret_sauce`.

3. **Action Step:** Click the login button.

   - **Expected Outcome:** The system attempts to authenticate the user.

4. **Action Step:** Verify that an error message is displayed.

   - **Expected Outcome:** An error message container with the class `.error-message-container` becomes visible, displaying the text: "Epic sadface: Username and password do not match any user in this service".

5. **Action Step:** Check the border color of the username input field.

   - **Expected Outcome:** The `#user-name` input field has a CSS `border-bottom-color` of `rgb(226, 35, 26)`, indicating an error state.

6. **Action Step:** Check the border color of the password input field.

   - **Expected Outcome:** The `#password` input field has a CSS `border-bottom-color` of `rgb(226, 35, 26)`, indicating an error state.

7. **Action Step:** Click the error message close button (identified by the class `.error-button`).

   - **Expected Outcome:** The error message container (`[data-test="error"]`) is no longer visible.

8. **Action Step:** Verify the border color of the username input field after closing the error message.

   - **Expected Outcome:** The `#user-name` input field's `border-bottom-color` reverts to `rgb(237, 237, 237)`, indicating no error.

9. **Action Step:** Verify the border color of the password input field after closing the error message.
   - **Expected Outcome:** The `#password` input field's `border-bottom-color` reverts to `rgb(237, 237, 237)`, indicating no error.

**Postconditions:**

- The error message is dismissed, and input fields return to their default state.
