if (typeof Snuffle === 'undefined') {
  Snuffle = {};
}

$(document).ready(() => {
  Snuffle.handleIgnore();
  Snuffle.handleMatch();
});

Snuffle.getMetaToken = function() {
  let metas = document.getElementsByTagName('meta');
  for (let i=0; i<metas.length; i++) {
    if (metas[i].getAttribute('name') === 'csrf-token') {
      return metas[i].getAttribute('content');
    }
  }
}

Snuffle.handleIgnore = function() {
  $('.ignore').click((event) => {

    const dogCard = $(event.target).parents('.dog-card'),
          dogId = dogCard.data('dog'),
          userId = dogCard.data('user')

    $.ajax({
      url: 'users/' + userId + '/matches',
      data: {
        authenticity_token: Snuffle.getMetaToken(),
        match: {
          user_id: userId,
          dog_id: dogId,
          selected: false
        }
      },
      type: 'POST',
      dataType: 'json',
      success: (response) => {
        console.log('we have lift off')
        // card animates left and red
        // next card is brought forward
      },
      error: (xhr, response) => {
        console.log('whoops')
        // card remains in place
      }
    })

  });
};

Snuffle.handleMatch = function() {
  $('.match').click((event) => {
    const dogCard = $(event.target).parents('.dog-card'),
          dogId = dogCard.data('dog'),
          userId = dogCard.data('user')

    $.ajax({
      url: 'users/' + userId + '/matches',
      data: {
        authenticity_token: Snuffle.getMetaToken(),
        match: {
          user_id: userId,
          dog_id: dogId,
          selected: true
        }
      },
      type: 'POST',
      dataType: 'json',
      success: (response) => {
        console.log('we have lift off')
        // card animates right and green
        // next card is brought forward
      },
      error: (xhr, response) => {
        console.log('whoops')
        // card remains in place
      }
    })

  });
}
