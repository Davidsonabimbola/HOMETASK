class filterObj{
    
    step1 (){
        cy.get('[data-testid="contractor-filter"]').check()
         }

         step2(){
            cy.get('[class="sc-fnGiBr"]').then((output)=>{
                cy.wrap(output.length).should('exist')
                   
                  })
                
         }
         step3(){
            cy.get('[data-testid="contractor-filter"]').check()
         }

         step4(){
            cy.get('[data-testid="employee-filter"]').check()
         }

         step5(){
            cy.get('[class="sc-fnGiBr"]').then((result)=>{
                cy.wrap(result.length).should('exist')
                   
                  })
         }

}
export default new filterObj