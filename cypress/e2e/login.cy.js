import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('Login', () => {
  it('Login - Success', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(Cypress.env("EMAIL_VALID"), Cypress.env("PASSWORD_VALID"))
    dashboardPage.checkDashboardPage('/logar')
    dashboardPage.checkAlertWelcome('Bem vindo, Mari!')
  });

  it('Login - Invalid e-mail', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(Cypress.env("EMAIL_INVALID"), Cypress.env("PASSWORD_VALID"))
    loginPage.checkErrorAlert('Problemas com o login do usuário')
  });

  it('Login - Invalid password', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(Cypress.env("EMAIL_VALID"), Cypress.env("PASSWORD_INVALID"))
    loginPage.checkErrorAlert('Problemas com o login do usuário')
  });

  it('Login - Empty e-mail', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser("", Cypress.env("PASSWORD_VALID"))
    loginPage.checkErrorAlert('Email é um campo obrigatório')
  });

  it('Login - Empty password', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(Cypress.env("EMAIL_VALID"), "")
    loginPage.checkErrorAlert('Senha é um campo obrigatório')
  });

  it('Login - Empty fields', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser("", "")
    loginPage.checkErrorAlerts(['Email é um campo obrigatório','Senha é um campo obrigatório'
    ]);
  });
});