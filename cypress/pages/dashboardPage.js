import { click } from "../support/actions";

class DashboardPage {
    selectorsList() {
        const selectors = { 
            successAlert: ".alert.alert-success",
            accountBtn: '.dropdown-toggle',
            addButton: 'a[href="/addConta"]',
            listButton: 'a[href="/contas"]'
        }

        return selectors
    }

    accessRegisterPage() {
        cy.get(this.selectorsList().registerBtn).click();
    }

    accountMenu(option) {
        switch(option) {
            case 'Adicionar': 
                click(this.selectorsList().accountBtn);
                click(this.selectorsList().addButton);
                break;
            case 'Listar': 
                click(this.selectorsList().accountBtn);
                click(this.selectorsList().listButton);
                break;
            default:
                console.error('Please provide a valid option');
                break;
        }
    }    

    verifyPageUrl(url) { 
        cy.url().should('include', url)
    }

    verifyWelcomeMessage(msg) {
        cy.get(this.selectorsList().successAlert).should('have.text', msg)
    }
}

export default DashboardPage;