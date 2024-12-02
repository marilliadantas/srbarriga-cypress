import { createAccount } from '../support/utils';
import DashboardPage from '../pages/dashboardPage';
import AccountPage from '../pages/accountPage'

const dashboardPage = new DashboardPage();
const accountPage = new AccountPage();

describe('Account', () => {
    beforeEach(() => {
        cy.login();
    });

  it('Create account', () => {
    const accountName = createAccount();

    dashboardPage.accountMenu('Adicionar');
    accountPage.createAccount(accountName);
    accountPage.verifySuccessMessage('Conta adicionada com sucesso!');
    accountPage.deleteAccount();
  });

  it('Create account empty name', () => {
    dashboardPage.accountMenu('Adicionar');
    accountPage.createAccount("");
    accountPage.verifyErrorMessage("Informe o nome da conta");
  });

  it('Edit account', () => {
    dashboardPage.accountMenu('Adicionar');
    accountPage.createAccount('Nubank');
    accountPage.editAccount('Updated Account');
    accountPage.verifySuccessMessage("Conta alterada com sucesso!");
    accountPage.deleteAccount();
  });

  it('Delete account', () => {
    dashboardPage.accountMenu('Adicionar');
    accountPage.createAccount('Account to delete');
    accountPage.deleteAccount();
    accountPage.verifySuccessMessage("Conta removida com sucesso!");
  });
});