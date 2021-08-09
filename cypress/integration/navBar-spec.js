describe('Nav Bar', () => {
  beforeEach(()=> {
    cy.fixture('dogImageMockData').then((testDogImage) => {
      cy.intercept('https://dog.ceo/api/breed/retriever/golden/images/random', testDogImage)
    })
    .visit('http://localhost:3000/')
  });

  it('Should contain a link to Find Match', () => {
    cy.get('nav')
      .contains('Find Match')
      .click()
      .url('http://localhos:3000/')
  });

  it('Should contain a dog card with image, x button and heart button when find match is clicked', () => {
    cy.get('.find-match')
      .click()
      .get('.card-container')
      .get('.dog-image').should('exist').should('be.visible')
      .get('.x').should('exist').should('be.visible')
      .get('.heart').should('exist').should('be.visible')
  });

  it('Should contain a link to a list of all matches', () => {
    cy.get('nav')
      .contains('Your Matches')
      .click()
      .url('http://localhost:3000/matches')
  });

  it('Should have a title', () => {
    cy.get('header')
      .contains('doogle')
  });

  it('Should have a tag line', () => {
    cy.get('header')
      .contains('discover your golden')
  });

  it('Should have an dog logo/image', () => {
    cy.get('header')
      .get('.logo-image').should('exist').should('be.visible')
  });

  it('Navigation link styling should reflect the current page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.find-match').should('have.class', 'selected-title');
    cy.get('.your-matches').should('not.have.class', 'selected-title');
  });
})