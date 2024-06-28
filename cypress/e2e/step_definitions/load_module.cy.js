import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(/^the user is on the login page$/, () => {
  cy.visit("/login");
});

When("the user enters valid credentials", () => {
  cy.get("#username").type("valid_username");
  cy.get("#password").type("valid_password");
});

When("the user clicks on the login button", () => {
  cy.get("#login_button").click();
});

Then("the user should be redirected to the dashboard", () => {
  cy.url().should("include", "/dashboard");
});

Given("the user is logged in", () => {
  cy.visit("/login");
  cy.get("#username").type("valid_username");
  cy.get("#password").type("valid_password");
  cy.get("#login_button").click();
  cy.url().should("include", "/dashboard");
});

When("the user navigates to the loan application page", () => {
  cy.get("#loan_application_link").click();
});

When("the user fills in the loan application form with valid data", () => {
  cy.get("#loan_amount").type("10000");
  cy.get("#loan_term").type("12");
});

When("the user submits the loan application", () => {
  cy.get("#submit_loan_application").click();
});

Then("the loan application should be submitted successfully", () => {
  cy.get("#success_message").should("be.visible");
});

Then("the user should receive a confirmation message", () => {
  cy.get("#confirmation_message").should("be.visible");
});

Given("the user is not logged in", () => {
  cy.visit("/logout"); // This assumes that visiting /logout will log the user out.
});

When("the user tries to navigate to the loan application page", () => {
  cy.visit("/loan_application");
});

Then("the user should be redirected to the login page", () => {
  cy.url().should("include", "/login");
});

Then("the user should see a message indicating they need to log in", () => {
  cy.get("#login_message").should("be.visible");
});

When("the user clicks the logout button", () => {
  cy.get("#logout_button").click();
});

Then("the user should be logged out", () => {
  cy.url().should("include", "/login");
});

Then("the user should be redirected to the homepage", () => {
  cy.visit("/");
  cy.url().should("include", "/home");
});
