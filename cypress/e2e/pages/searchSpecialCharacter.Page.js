class Special_case{
    search()
    {
        cy.get('#search-person').type('Ann')
          cy.get('[class="sc-hhOBVt fHEiyB"]').should('contain', '2')
    }

    clear_list(){
        cy.get('[id="search-person"][value="Ann"]').clear()
      cy.get('[id="search-person"][placeholder="Search people..."]').invoke('val').should('be.empty')
    }
}
export default new Special_case