let addToy = false;
const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");
toyFormContainer.style.display = "block";
addBtn.addEventListener("click", () => {
  // hide & seek with the form
  addToy = !addToy;
  if (addToy) {
    toyFormContainer.style.display = "block";
  } else {
    toyFormContainer.style.display = "none";
  }
});

////////////////////////////////////////
const toyCollectionElement = document.getElementById('toy-collection')


//DELIVERABLE 1
//Fetch Toys
//Add info to the card
//Put toys on list
fetch("http://localhost:3000/toys")
  .then(res => res.json())
  .then(renderToys)

//These next codes superates each toy
function renderToys(toys) {
  toys.forEach(renderToy)
}
function renderToy(toy) {

  const toyCard = document.createElement('div')
  toyCard.classList.add('card')

  toyCard.innerHTML = `
  <h2>${toy.name}</h2>
  <img src="${toy.image}" class="toy-avatar" />
  <p>${toy.likes} Likes</p>
  
  `
  const likeButton = document.createElement('button')
  likeButton.id = toy.id
  likeButton.textContent = 'Like'
  likeButton.addEventListener('click', () => console.log('LIKE'))

  toyCard.append(likeButton)
  toyCollectionElement.append(toyCard)
}
//DELIVERABLE 2
const addToyForm = document.getElementById('add-toy-form')
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json"
}

addToyForm.addEventListener('submit', addNewToy)

function addNewToy(e) {
  e.preventDefault();
  const name = (e.target.name.value)
  const image = (e.target.image.value)

  const body = JSON.stringify({
    name, image, likes: 0,
  })

  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers, body
  })
}

