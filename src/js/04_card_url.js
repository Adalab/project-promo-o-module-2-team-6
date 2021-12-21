'use strict';

const createButton = document.querySelector('.js-submit');
const createLink = document.querySelector('.js-link-card');
const createButtonTw = document.querySelector('.js-twitter');

for (const eachInput of allInput) {
  if (eachInput.value === '') {
    createButton.disabled = true;
  } else {
    createButton.disabled = false;
  }
}

function handleCreateCard(event) {
  event.preventDefault();

  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      createLink.href = data.cardURL;
      createLink.innerHTML = data.cardURL;
      console.log(data.cardURL);
      // createButtonTw.innerHTML = `<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="¡Hola! Esta es mi tarjeta de presentación :)" data-url="https://stackoverflow.com/questions/61216973/how-to-close-collapsible-div-when-opening-new-one" data-hashtags="CardsAwesome" data-lang="es" data-show-count="false">Tweetearaaaa</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
    });
}

createButton.addEventListener('click', handleCreateCard);
