import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('Login', () => {
  beforeEach(() => {
    loginPage.accessLoginPage();
  });

  it('Login successfully', () => {
    loginPage.loginWithUser(Cypress.env("EMAIL_VALID"), Cypress.env("PASSWORD_VALID"))
    dashboardPage.verifyPageUrl('/logar')
    dashboardPage.verifyWelcomeMessage('Bem vindo, Mari!')
  });

  it('Invalid e-mail', () => {
    loginPage.loginWithUser(Cypress.env("EMAIL_INVALID"), Cypress.env("PASSWORD_VALID"))
    loginPage.verifyErrorAlert('Problemas com o login do usuário')
  });

  it('Invalid password', () => {
    loginPage.loginWithUser(Cypress.env("EMAIL_VALID"), Cypress.env("PASSWORD_INVALID"))
    loginPage.verifyErrorAlert('Problemas com o login do usuário')
  });

  it('Empty e-mail', () => {
    loginPage.loginWithUser("", Cypress.env("PASSWORD_VALID"))
    loginPage.verifyErrorAlert('Email é um campo obrigatório')
  });

  it('Empty password', () => {
    loginPage.loginWithUser(Cypress.env("EMAIL_VALID"), "")
    loginPage.verifyErrorAlert('Senha é um campo obrigatório')
  });

  it('Empty fields', () => {
    loginPage.loginWithUser("", "")
    loginPage.verifyErrorAlerts([
      'Email é um campo obrigatório',
      'Senha é um campo obrigatório'
    ]);
  });
});