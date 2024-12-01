class DashboardPage {
    selectorsList() {
        const selectors = { 
            successAlert: ".alert.alert-success",
            accountBtn: '.dropdown-toggle'
        }

        return selectors
    }

    accessRegisterPage() {
        cy.get(this.selectorsList().registerBtn).click();
    }

    openAccountMenu() {
        cy.get(this.selectorsList().accountBtn).click();
    }

    checkDashboardPage(url) { 
        cy.url().should('include', url)
    }

    checkAlertWelcome(msg) {
        cy.get(this.selectorsList().successAlert).should('have.text', msg)
    }
}

export default DashboardPage;