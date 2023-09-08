const seats = document.querySelectorAll('.row .seat:not(.sold)');
const selectedSeats = document.getElementById("numSeats");

const container = document.querySelector('.container');
let numberOfSelectedSEats = 0;

selectedSeats.addEventListener('change', () => {
  numberOfSelectedSEats = parseInt(selectedSeats.value);
  updateSelectedSeats();
});

container.addEventListener('click', e => {
  //console.log(e.target)
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('sold') &&
    numberOfSelectedSEats >  0
  ) {
    //console.log(e.target)
    e.target.classList.toggle('selected');
    updateSelectedSeats();
  }
})

function updateSelectedSeats() {
  const selected = document.querySelectorAll('.row .seat .selected');
  if (selected.length > numberOfSelectedSEats) {
    selected.forEach((seat) => {
      if ( numberOfSelectedSEats > 0) {
        seat.classList.remove('selected');
      }
    });
  }
}
