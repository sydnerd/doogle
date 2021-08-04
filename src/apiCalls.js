export const getDogImage = () => {
  return fetch('https://dog.ceo/api/breed/retriever/golden/images')
  .then((response) => response.json())
}