export const getDogImage = () => {
  return fetch('https://dog.ceo/api/breed/retriever/golden/images/random')
  .then((response) => response.json())
}