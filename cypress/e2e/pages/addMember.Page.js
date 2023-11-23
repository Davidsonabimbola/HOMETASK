class testObj{
    addMember(){
        cy.get('[id="create-person"]').click()
    }
    enterName(){
        cy.get('[id="name"]').type('Grace')
    }

    enterJobRole (){
        cy.get('[id="jobTitle"]').type('Silver')
    }

    navigateToCountry(){
        cy.get(':nth-child(3) > .sc-bBABsx')
    }

    navigateToCurrency(){
        cy.get(':nth-child(4) > .sc-bBABsx')
    }
    changeSalary(){
        cy.get('#salary-input').type('65000.00')
    }

    navigateToEmploymentType(){
        cy.get('[data-testid="employment-option"]')
  cy.get(':nth-child(6) > .sc-dIfARi')
    }

    saveButton(){
        cy.get('[data-testid="modal-save-button"]').contains('Save').click()
    }

}
export default new testObj