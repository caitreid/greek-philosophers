const modals = document.querySelectorAll('[data-modal]');

modals.forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add('open');
    const exits = modal.querySelectorAll('.modal__exit');
    exits.forEach((exit) => {
      exit.addEventListener('click', function (event) {
        event.preventDefault();
        modal.classList.remove('open');
      });
    });
  });
});

const onViewButton = document.querySelector('.filter__button')
const cards = document.querySelectorAll('.card')

onViewButton.addEventListener('click', (event) => {
    if (!onViewButton.classList.contains('clicked')){
        event.preventDefault();

        console.log('hit') 

        cards.forEach(card => {

            if (card.dataset.onView === "false") {
                card.classList.add('hide')
                console.log('hidden ')

                onViewButton.classList.add('clicked')
            }
        })

        onViewButton.innerHTML = "<a class='button view-all'>View all</a>"

    } else {
        console.log('hide')
        onViewButton.classList.remove('clicked')
        cards.forEach(card =>  card.classList.remove('hide'))
        onViewButton.innerHTML = "<a class='button view-all'>On view</a>"
    }
})



