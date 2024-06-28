Feature: Loan Module

  Scenario: Access loan features when the user is logged in
    Given the user is on the login page
    When the user enters valid credentials
    And the user clicks on the login button
    Then the user should be redirected to the dashboard

  Scenario: User applies for a loan when logged in
    Given the user is logged in
    When the user navigates to the loan application page
    And the user fills in the loan application form with valid data
    And the user submits the loan application
    Then the loan application should be submitted successfully
    And the user should receive a confirmation message

  Scenario: User attempts to access loan features without logging in
    Given the user is not logged in
    When the user tries to navigate to the loan application page
    Then the user should be redirected to the login page
    And the user should see a message indicating they need to log in

  Scenario: User logs out
    Given the user is logged in
    When the user clicks the logout button
    Then the user should be logged out
    And the user should be redirected to the homepage
