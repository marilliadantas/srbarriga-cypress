import LoginPage from '../pages/loginPage'
import RegisterPage from '../pages/registerPage';
import { createUser } from '../support/utils';

const loginPage = new LoginPage();
const registerPage = new RegisterPage();
const user = createUser();

describe('Register', () => {
  beforeEach(() => {
    loginPage.accessLoginPage();
    loginPage.accessRegisterPage();
  });

  it('Register user successfully', () => {
    registerPage.fillForms(user.name, user.email, Cypress.env("PASSWORD_VALID"));
    registerPage.saveForm();
    registerPage.verifySuccessMessage("Usuário inserido com sucesso");
  });

  it('Empty name', () => {
    registerPage.fillForms("", user.email, Cypress.env("PASSWORD_VALID"));
    registerPage.saveForm();
    registerPage.verifyErrorMessage("Nome é um campo obrigatório");
  });

  it('Empty e-mail', () => {
    registerPage.fillForms(user.name, "", Cypress.env("PASSWORD_VALID"));
    registerPage.saveForm();
    registerPage.verifyErrorMessage("Email é um campo obrigatório");
  });

  it('Empty password', () => {
    registerPage.fillForms(user.name, user.email, "");
    registerPage.saveForm();
    registerPage.verifyErrorMessage("Senha é um campo obrigatório");
  });

  it('Empty fields', () => {
    registerPage.fillForms("", "", "");
    registerPage.saveForm();
    registerPage.verifyErrorMessages([
      "Nome é um campo obrigatório", 
      "Email é um campo obrigatório", 
      "Senha é um campo obrigatório"
    ]);
  });
});