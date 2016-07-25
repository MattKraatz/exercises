var celebs = [
  {
    title: "President",
    name: "George Washington",
    bio: "The first President of the United States (1789–97), the Commander-in-Chief of the Continental Army during the American Revolutionary War, and one of the Founding Fathers of the United States. He presided over the convention that drafted the current United States Constitution and during his lifetime was called the 'father of his country'.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/329px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
    lifespan: {
      birth: 1732,
      death: 1799
    }
  },
  {
    title: "President",
    name: "John Adams",
    bio: "An American lawyer, author, statesman, and diplomat. He served as the second President of the United States (1797–1801), the first Vice President (1789–97), and as a Founding Father was a leader of American independence from Great Britain. Adams was a political theorist in the Age of Enlightenment who promoted republicanism and a strong central government. His innovative ideas were frequently published. He was also a dedicated diarist and correspondent, particularly with his wife and key advisor Abigail.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Official_Presidential_portrait_of_John_Adams_%28by_John_Trumbull%2C_circa_1792%29.jpg/330px-Official_Presidential_portrait_of_John_Adams_%28by_John_Trumbull%2C_circa_1792%29.jpg",
    lifespan: {
      birth: 1735,
      death: 1826
    }
  },
  {
    title: "President",
    name: "Thomas Jefferson",
    bio: "An American Founding Father who was the principal author of the Declaration of Independence (1776). He was elected the second Vice President of the United States (1797–1801), serving under John Adams and in 1800 was elected the third President (1801–09). Jefferson was a proponent of democracy, republicanism, and individual rights, which motivated American colonists to break from Great Britain and form a new nation. He produced formative documents and decisions at both the state and national level.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Thomas_Jefferson_by_Rembrandt_Peale%2C_1800.jpg/330px-Thomas_Jefferson_by_Rembrandt_Peale%2C_1800.jpg",
    lifespan: {
      birth: 1743,
      death: 1826
    }
  },
  {
    title: "President",
    name: "James Madison",
    bio: "A political theorist, American statesman, and the fourth President of the United States (1809–17). He is hailed as the 'Father of the Constitution' for his pivotal role in drafting and promoting the U.S. Constitution and the Bill of Rights.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/James_Madison.jpg/330px-James_Madison.jpg",
    lifespan: {
      birth: 1751,
      death: 1836
    }
  },
  {
    title: "President",
    name: "James Monroe",
    bio: "The fifth President of the United States, serving between 1817 and 1825. Monroe was the last president who was a Founding Father of the United States and the last president from the Virginian dynasty and the Republican Generation.[1] Born in Westmoreland County, Virginia, Monroe was of the planter class and fought in the American Revolutionary War.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/James_Monroe_White_House_portrait_1819.gif/330px-James_Monroe_White_House_portrait_1819.gif",
    lifespan: {
      birth: 1758,
      death: 1831
  }
},
]

var output = document.getElementById("container");
var cards = document.getElementsByTagName("article")
var input = document.querySelector("input")

celebs.forEach(function(celeb) {
  output.innerHTML += `
    <article>
      <header><h1>${celeb.title} ${celeb.name}</h1></header>
      <img src="${celeb.image}">
      <section>${celeb.bio}</section>
      <footer><h4>${celeb.lifespan.birth} - ${celeb.lifespan.death}</h4></footer>
    </article>
  `
})

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", borderToggle)
  cards[i].addEventListener("click", inputFocus)
}

input.addEventListener("input", bioEditor)
input.addEventListener("keydown", bioEditor)

function borderToggle(e) {
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.remove("border")
  }
  if (e.target.localName === "article") {
    e.target.classList.toggle("border")
  } else if (e.target.parentNode.localName === "article") {
    e.target.parentNode.classList.toggle("border")
  } else if (e.target.parentNode.parentNode.localName === "article") {
    e.target.parentNode.parentNode.classList.toggle("border")
  }
}

function inputFocus() {
  input.focus();
}

function bioEditor(e) {
  if (e.keyCode === 13) {
    input.value = "";
  } else {
    document.querySelector(".border").childNodes[5].innerHTML = input.value
  }
}
