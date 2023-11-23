class testObj{
    click_button(){
        cy.get('[data-testid="edit-person"]').eq(2).click()
    }

    clear_field(){
        cy.get('#salary-input').clear().then((edited)=>{
            cy.wrap(edited).should('be.empty')
          })
    }
    addNewValue(){
        cy.get('#salary-input').type('73,000')
    }

    save_button(){
        cy.get('[data-testid="modal-save-button"]').contains('Save').click()
    }
}
export default new testObj