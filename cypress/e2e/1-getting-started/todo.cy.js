/// <reference types="cypress" />
import tasksPage from "../pages/tasks.Page";
import searchSpecialCharacterPage from "../pages/searchSpecialCharacter.Page";
import filteringTaskPage from "../pages/filteringTask.Page";
import apiRequestsPage from "../pages/apiRequests.Page";
import editMembersPage from "../pages/editMembers.Page";
import addMemberPage from "../pages/addMember.Page";


describe('the first suite', () => {
   beforeEach(() => {
     cy.visit('http://localhost:3002/people')
    
     })
   afterEach(()=> {
    cy.log('Task completed')
   })

   
  it('search', ()=>{
     cy.get('[id="search-person"]')
  })

   it.only('searching members table', () => {
  tasksPage.search();
 tasksPage.clear_list();
  })

 it('searching with special character', () => {
  searchSpecialCharacterPage.search();
  searchSpecialCharacterPage.clear_list()
 })

 it('filtering the table', () => {
  filteringTaskPage.step1();
  filteringTaskPage.step2();
    filteringTaskPage.step3();
filteringTaskPage.step4();
   filteringTaskPage.step5();
 })

 it('adding new member', ()=>{
  addMemberPage.addMember()
  addMemberPage.enterName()
  addMemberPage.enterJobRole()
  addMemberPage.navigateToCountry()
  addMemberPage.navigateToCurrency()
  addMemberPage.changeSalary()
  addMemberPage.navigateToEmploymentType()
  addMemberPage.saveButton()
 })


 it ('Editing previous users', ()=>{
editMembersPage.click_button()
editMembersPage.clear_field()
editMembersPage.addNewValue()
editMembersPage.save_button()
  })


it('Testing API calls', ()=>{
  apiRequestsPage.Addmember()
  apiRequestsPage.full_list()
  apiRequestsPage.list_by_Name()
  apiRequestsPage.listByNameAndEmployment()
  
})
})




