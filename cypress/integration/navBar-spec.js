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
  })

  it('Should contain a link to a list of all matches', () => {
    cy.get('nav')
      .contains('Your Matches')
      .click()
      .url('http://localhost:3000/matches')
  })

  it('Should have a title', () => {
    cy.get('header')
      .contains('doogle')
  })

  it('Should have a tag line', () => {
    cy.get('header')
      .contains('discover your golden')
  })

  it('Should have an dog logo/image', () => {
    cy.get('header')
      .get('.logo-image').should('exist').should('be.visible')
  })
})