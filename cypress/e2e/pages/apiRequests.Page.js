class testObj{

    Addmember(){
        const memberCredentials = 

{
  "name": "Helen Gomez",
    "jobTitle": " Assistant Marketing Head",
    "country": "Portugal",
    "salary": 80000,
    "currency": "USD",
    "employment": "contractor",
}


cy.request('POST', 'http://localhost:4002/people', memberCredentials)
  .then((response) => 
    {
      expect(response.status).to.equal(201);
      })
    }


    full_list(){
        cy.request('GET', 'http://localhost:4002/people'). its('body').then( body=>{
    console.log(body)
  })
    }

    list_by_Name(){
        cy.request('GET','http://localhost:4002/people?name_like= Grace' ). its('body').then( body=>{
    console.log(body)
  })
    }

    listByNameAndEmployment (){
        cy.request('GET','http://localhost:4002/people?name_like=Phi&employment=Employee' ). its('body').then( body=>{
    console.log(body)
  })
    }
}
export default new testObj