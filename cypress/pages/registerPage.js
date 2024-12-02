class RegisterPage {
    selectorsList() {
        const selectors = { 
            nameField: "#nome",
            emailField: "#email",
            passwordField: "#senha",
            registerBtn: 'input[type="submit"]',
            alertDanger: ".alert.alert-danger",
            alertSuccess: ".alert"
        }

        return selectors
    }

    fillForms(name, email, password) {
        if(name !== "") {
            cy.get(this.selectorsList().nameField).type(name);
        }
        
        if(email !== "") {
            cy.get(this.selectorsList().emailField).type(email);
        }
        
        if(password !== "") {
            cy.get(this.selectorsList().passwordField).type(password);
        }
    }

    saveForm() {
        cy.get(this.selectorsList().registerBtn).click();
    }

    verifySuccessMessage(msg) {
        cy.get(this.selectorsList().alertSuccess).should('have.text', msg)
    }

    verifyErrorMessage(msg) {
        cy.get(this.selectorsList().alertDanger).should('have.text', msg)
    }

    verifyErrorMessages(messages) {
        messages.forEach((msg, index) => {
            cy.get(this.selectorsList().alertDanger)
              .eq(index)
              .should('have.text', msg);
        });
    }
}

export default RegisterPage;