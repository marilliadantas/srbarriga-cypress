import LoginPage from '../pages/loginPage'
import RegisterPage from '../pages/registerPage';
const createUser = require('../support/utils');

const loginPage = new LoginPage();
const registerPage = new RegisterPage();

const user = createUser();

describe('Register', () => {
  beforeEach(() => {
    loginPage.accessLoginPage();
  });

  it('Register - Success', () => {
    loginPage.accessRegisterPage();
    registerPage.fillForms(user.name, user.email, Cypress.env("PASSWORD_VALID"));
    registerPage.saveForm();
    registerPage.checkCreateSuccess("Usuário inserido com sucesso");
  });

  it('Register - Empty name', () => {
    loginPage.accessRegisterPage();
    registerPage.fillForms("", user.email, Cypress.env("PASSWORD_VALID"));
    registerPage.saveForm();
    registerPage.checkErrorAlert("Nome é um campo obrigatório");
  });

  it('Register - Empty e-mail', () => {
    loginPage.accessRegisterPage();
    registerPage.fillForms(user.name, "", Cypress.env("PASSWORD_VALID"));
    registerPage.saveForm();
    registerPage.checkErrorAlert("Email é um campo obrigatório");
  });

  it('Register - Empty password', () => {
    loginPage.accessRegisterPage();
    registerPage.fillForms(user.name, user.email, "");
    registerPage.saveForm();
    registerPage.checkErrorAlert("Senha é um campo obrigatório");
  });

  it('Register - Empty fields', () => {
    loginPage.accessRegisterPage();
    registerPage.fillForms("", "", "");
    registerPage.saveForm();
    registerPage.checkErrorAlerts(["Nome é um campo obrigatório", "Email é um campo obrigatório", "Senha é um campo obrigatório"]);
  });
});