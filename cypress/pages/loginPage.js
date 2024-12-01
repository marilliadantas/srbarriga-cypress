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
            cy.get(this.selectorsList().emailField).type(email);
        }
    
        if (password !== "") {
            cy.get(this.selectorsList().passwordField).type(password);
        }

        cy.get(this.selectorsList().loginBtn).click();
    }

    checkErrorAlert(msg) {
        cy.get(this.selectorsList().credentialsAlert).should('have.text', msg);
    }

    checkErrorAlerts(messages) {
        messages.forEach((msg) => {
            cy.get(this.selectorsList().credentialsAlert)
              .should('have.text', msg);
        });
    }
}

export default LoginPage;