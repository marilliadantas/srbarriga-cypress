import { click, set, getText, getMessages } from "../support/actions";

class LoginPage {
    selectorsList() {
        const selectors = { 
            emailField: "#email",
            passwordField: "#senha",
            loginBtn: 'button[type="submit"]',
            credentialsAlert: 'div[role="alert"]',
            registerBtn: 'a[href="/cadastro"]'
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/login');
    }

    accessRegisterPage() {
        cy.get(this.selectorsList().registerBtn).click();
    }

    loginWithUser(email, password) {
        if (email !== "") {
            set(this.selectorsList().emailField, email);
        }
    
        if (password !== "") {
            set(this.selectorsList().passwordField, password)
        }

        click(this.selectorsList().loginBtn)
    }

    verifyErrorAlert(msg) {
        getText(this.selectorsList().credentialsAlert, msg)
    }

    verifyErrorAlerts(messages) {
        getMessages(this.selectorsList().credentialsAlert, messages);
    }
}

export default LoginPage;