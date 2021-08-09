describe('Match List', () => {
  beforeEach(()=> {
    cy.fixture('dogImageMockData').then((testDogImage) => {
      cy.intercept('https://dog.ceo/api/breed/retriever/golden/images/random', testDogImage)
    })
    cy.visit('http://localhost:3000/')
      cy.get('.heart').click()
      cy.get('.your-matches').click()
  });

  it('Should contain a dog card with an image and a delete button', () => {
    cy.get('.card-container')
      .get('.dog-image').should('exist').should('be.visible')
      .get('.delete').should('exist').should('be.visible')
  });

  it('Should remove the dog card when delete button is clicked', () => {
    cy.get('.delete')
      .click()
    cy.get('.message')
      .contains('No matches yet ☹️')
  });
})