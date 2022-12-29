Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('Luaaaaa')
    cy.get('#lastName'). type('jesus')
    cy.get('#email').type('luanabittencourt_10@hotmail.com')
    cy.get('#open-text-area').type('texto normal')
    cy.contains('button', 'Enviar').click()
})