import LoginPage from '../pages/loginPage'

const loginPage = new LoginPage();

Cypress.Commands.add('login', () => {
    cy.visit('login');
    loginPage.loginWithUser(Cypress.env('EMAIL_VALID'), Cypress.env('PASSWORD_VALID'));
});