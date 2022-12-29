//const { it } = require("mocha")
//import { expect } from "chai"
//import { it } from "mocha"

describe('Central de atendimento ao cliente TAT', () => {
  beforeEach (function(){
    cy.visit('./src/index.html')
  })
  it('verifica o titulo da aplicação', () => {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })
  it ('Preenche os campos obrigatorios e envia o formulario',function(){
    const longText= 'o rato roeu a roupa do rei de roma o rato roeu a roupa do rei de romao rato roeu a roupa do rei de romao rato roeu a roupa do rei de romao rato roeu a roupa do rei de roma'
    cy.get('#firstName').type('Luaaaaa')
    cy.get('#lastName'). type('jesus')
    cy.get('#email').type('luanabittencourt_10@hotmail.com')
    cy.get('#open-text-area').type(longText, {delay:0})
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })

  it('Apresenta erro ao enviar e-mail incorreto',function(){
    cy.get('#firstName').type('Luaaaaa')
    cy.get('#lastName'). type('jesus')
    cy.get('#email').type('luanabittencourt_10@hotmail,com')
    cy.get('#open-text-area').type('texto normal')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })
  
  it ('campo de tel continua vazio quando digitado caracteres diferente de numeros',function(){
    cy.get('#phone')
      .type('sdfkghdç')
      .should ('have.value', '')
  })

  it ('erro quando tel se torna obrigatorio, mas não é preenchido',function(){
    cy.get('#firstName').type('Luaaaaa')
    cy.get('#lastName'). type('jesus')
    cy.get('#email').type('luanabittencourt_10@hotmail.com')
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type('texto normal')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  it('Preenche e limpa campos de email e telefone',function(){
    cy.get('#firstName').type('Luaaaaa').should('have.value','Luaaaaa' ).clear().should('have.value','')
    cy.get('#lastName').type('Jesus').should('have.value','Jesus' ).clear().should('have.value','')
    cy.get('#phone').type('11981321597').should('have.value','11981321597').clear().should('have.value','')

  })

  it('Exibe mensagem de erro ao submeter sem preencher obrigatórios',function(){
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
      })
      
  it('Envia formulario com comando customizado (arquivo commands)',function(){
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should ('be.visible')
    
  })

  it ('Envia o formulario usando o contains envia o formulario',function(){
    cy.get('#firstName').type('Luaaaaa')
    cy.get('#lastName'). type('jesus')
    cy.get('#email').type('luanabittencourt_10@hotmail.com')
    cy.get('#phone-checkbox')
    cy.get('#open-text-area').type('texto normal')
    cy.contains('button','Enviar').click()
      })


  it('seleciona um produto (youtube) por seu texto',function(){
    cy.get('#product')
    .select('YouTube')
    .should('have.value','youtube')
        
  })

  it('seleciona um produto (mentoria) por seu valor (value)', function(){
    cy.get('#product')
      .select('mentoria')
      .should('have.value', 'mentoria')
  })
  it('seleciona um produto blog pelo indice (dentro do combo)', function(){
    cy.get('#product')
    .select(1)
    .should('have.value','blog')
  })

  it ('marcando input do tipo radio', function(){
    cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('have.value', 'feedback')
     })

  it('Marca cada tipo de atendimento e verifica que cada um foi marcado', function(){
    cy.get('input[type="radio"]')
      .should('have.length',3)
      .each(function($radio){
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')   
      })
    })

  it('Marca ambos checks e desmarca o ultimo', function(){
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
     })

  it('Upload de arquivos da pasta fixtures', function(){
    cy.get('input[type="file"]')
    .should('not.have.value')
    .selectFile('./cypress/fixtures/example.json')
    .should(function($input){
      //console.log($input) - log no cypress
      expect($input[0].files[0].name).to.equal('example.json')})
    })
        

  it('seleciona simulando drag and drop', function(){
    cy.get('input[type="file"]')
    .should('not.have.value')
    .selectFile('./cypress/fixtures/example.json',{action:'drag-drop'})
    .should(function($input){      
      expect($input[0].files[0].name).to.equal('example.json')})
    })
      
  it('seleciona um arquivo através de um alias', function(){
    cy.fixture('example.json').as('sampleFile')
    cy.get('input[type="file"]')
    .selectFile('@sampleFile')
    .should(function($input){      
      expect($input[0].files[0].name).to.equal('example.json')})
      })

  it('verifica que a politica abre em outra abasem a necessidade de um click', function(){
    cy.get('#privacy a').should('have.attr','target','_blank') //(attr==atributo)verifcando ação comum do navegador de abri nova aba
    //.invoke() //invoke precisa estar no mesmo dominio da aplicação testada
    
  })

  it.only('acessa apagina de politica de privacidade removendo o target e então clicando no link', function(){
    cy.get('#privacy a')
    .invoke('removeAttr','target')
    .click()
    cy.contains("Talking About Testing").should('be.visible')
      })

  it('Simulando viewport de um dispositivo movel (inspec do navegador visao celular)', function(){



    
  })

  it('', function(){

    
  })


  it('', function(){

    
  })

})