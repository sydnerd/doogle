describe('Dog Card', () => {
  beforeEach(()=> {
    cy.fixture('dogImageMockData').then((testDogImage) => {
      cy.intercept('https://dog.ceo/api/breed/retriever/golden/images/random', testDogImage)
    })
    .visit('http://localhost:3000/')
  });

    it('Should have a dog card with an image, an x button, and a heart button', () => {
      cy.get('.card-container')
        .get('.dog-image').should('exist').should('be.visible')
        .get('.x').should('exist').should('be.visible')
        .get('.heart').should('exist').should('be.visible')
    })

    it('Should have a clickable x button', () => {
      cy.get('.x')
        .click()
        .url('http://localhost:3000/matches')
    })

    it('Should have a clickable heart button', () => {
      cy.get('.heart')
        .click()
        .url('http://localhost:3000/matches')
    })
})