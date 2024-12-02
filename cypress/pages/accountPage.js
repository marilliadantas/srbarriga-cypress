import { click, set, getText } from "../support/actions";

class AccountPage {
    selectorsList() {
        const selectors = { 
            nameField: "#nome",
            saveBtn: 'button[type="submit"]',
            errorAlert: 'div[class="alert alert-danger"]',
            successAlert: 'div[class="alert alert-success"]',
            deleteBtn: 'span[class="glyphicon glyphicon-remove-circle"]',
            editBtn: 'span[class="glyphicon glyphicon-edit"]'
        }

        return selectors
    }

    createAccount(nameAccount) {
        if(nameAccount !== "") {
            set(this.selectorsList().nameField, nameAccount)
        }
        
        click(this.selectorsList().saveBtn)
    }

    editAccount(nameAccount) {
        click(this.selectorsList().editBtn)
        set(this.selectorsList().nameField, nameAccount)
        click(this.selectorsList().saveBtn)
    }

    deleteAccount() {
        click(this.selectorsList().deleteBtn)
    }

    verifySuccessMessage(msg) {
        getText(this.selectorsList().successAlert, msg)
    }

    verifyErrorMessage(msg) {
        getText(this.selectorsList().errorAlert, msg)
    }
}

export default AccountPage;