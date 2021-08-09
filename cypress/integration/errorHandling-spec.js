describe('Error Handling', () => {

  it('Should display error message for 500 status code', () => {
    cy
      .intercept('https://dog.ceo/api/breed/retriever/golden/images/random', {statusCode: 500})
      .visit('http://localhost:3000/')
      .contains("We're experiencing server technical difficulties, please check back again later!")
  });

  it('Should display error message for 400 status code', () => {
    cy
      .intercept('https://dog.ceo/api/breed/retriever/golden/images/random', {statusCode: 400})
      .visit('http://localhost:3000/')
      .contains("We're experiencing server technical difficulties, please check back again later!")
  });

  it('Should display error message for 404 status code', () => {
    cy
      .intercept('https://dog.ceo/api/breed/retriever/golden/images/random', {statusCode: 404})
      .visit('http://localhost:3000/')
      .contains("We're experiencing server technical difficulties, please check back again later!")
  });
})