// Industries We Serve
const track = document.getElementById("track");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let index = 0;
let visibleItems = 3;

const items = Array.from(track.children);
const totalItems = items.length;

for (let i = 0; i < visibleItems; i++) {
  const cloneFirst = items[i].cloneNode(true);
  cloneFirst.classList.add('clone');
  track.appendChild(cloneFirst);

  const cloneLast = items[totalItems - 1 - i].cloneNode(true);
  cloneLast.classList.add('clone');
  track.insertBefore(cloneLast, track.firstChild);
}

index = visibleItems;
updateTrack();

// Adjust visibleItems based on screen
function updateVisibleItems() {
  if (window.innerWidth < 480) visibleItems = 1;
  else if (window.innerWidth < 768) visibleItems = 2;
  else visibleItems = 3;
}

// Move carousel
function moveSlide(direction) {
  index += direction;
  updateTrack();
}

// Update track 
function updateTrack() {
  const slideWidth = track.children[0].offsetWidth;
  track.style.transition = 'transform 0.5s ease-in-out';
  track.style.transform = `translateX(-${index * slideWidth}px)`;

  // Handle infinite loop after transition
  track.addEventListener('transitionend', () => {
    if (track.children[index].classList.contains('clone')) {
      track.style.transition = 'none';
      if (index < visibleItems) {
        // Jump to real slides at end
        index = totalItems + index;
      } else if (index >= totalItems + visibleItems) {
        // Jump to real slides at start
        index = index - totalItems;
      }
      track.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  }, { once: true });
}

next.addEventListener("click", () => moveSlide(1));
prev.addEventListener("click", () => moveSlide(-1));

window.addEventListener("resize", updateVisibleItems);
updateVisibleItems();



// kd9ij99t

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("track1");
  const nextBtn = document.getElementById("next1");
  const prevBtn = document.getElementById("prev1");
  const cards = document.querySelectorAll(".card1");

  let index = 0;
  const visibleCards = 3;

  function getCardWidth() {
    const cardStyle = window.getComputedStyle(cards[0]);
    const marginRight = parseInt(cardStyle.marginRight);
    return cards[0].offsetWidth + marginRight;
  }

  nextBtn.addEventListener("click", () => {
    const cardWidth = getCardWidth();

    if (index < cards.length - visibleCards) {
      index++;
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
  });

  prevBtn.addEventListener("click", () => {
    const cardWidth = getCardWidth();

    if (index > 0) {
      index--;
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
  });
});


// 
// document.addEventListener("DOMContentLoaded", () => {
//   const track = document.getElementById("main-section3r");
//   const nextBtn = document.getElementById("nextimg");
//   const prevBtn = document.getElementById("previmg");

//   let cards = document.querySelectorAll(".reviewcard");
//   const visibleCards = 2;
//   let index = visibleCards;

//   // Clone first & last items
//   const firstClones = [];
//   const lastClones = [];

//   cards.forEach((card, i) => {
//     if (i < visibleCards) {
//       firstClones.push(card.cloneNode(true));
//     }
//     if (i >= cards.length - visibleCards) {
//       lastClones.push(card.cloneNode(true));
//     }
//   });

//   // Add clones
//   firstClones.forEach(clone => track.appendChild(clone));
//   lastClones.reverse().forEach(clone => track.insertBefore(clone, track.firstChild));

//   cards = document.querySelectorAll(".reviewcard");

//   function getCardWidth() {
//     const style = window.getComputedStyle(cards[0]);
//     return cards[0].offsetWidth +
//            parseInt(style.marginLeft) +
//            parseInt(style.marginRight);
//   }

//   let cardWidth = getCardWidth();

//   // Initial position (skip cloned items)
//   track.style.transform = `translateX(-${cardWidth * visibleCards}px)`;

//   // NEXT
//   nextBtn.addEventListener("click", () => {
//     if (index >= cards.length - visibleCards) return;

//     index++;
//     track.style.transition = "transform 0.1s ease";
//     track.style.transform = `translateX(-${index * cardWidth}px)`;
//   });

//   // PREV
//   prevBtn.addEventListener("click", () => {
//     if (index <= 0) return;

//     index--;
//     track.style.transition = "transform 0.1s ease";
//     track.style.transform = `translateX(-${index * cardWidth}px)`;
//   });

//   // LOOP RESET (important part)
//   track.addEventListener("transitionend", () => {
//     if (index === cards.length - visibleCards) {
//       track.style.transition = "none";
//       index = visibleCards;
//       track.style.transform = `translateX(-${index * cardWidth}px)`;
//     }

//     if (index === 0) {
//       track.style.transition = "none";
//       index = cards.length - (visibleCards * 2);
//       track.style.transform = `translateX(-${index * cardWidth}px)`;
//     }
//   });

//   // Resize fix
//   window.addEventListener("resize", () => {
//     cardWidth = getCardWidth();
//     track.style.transition = "none";
//     track.style.transform = `translateX(-${index * cardWidth}px)`;
//   });
// });
// // 
// const form = document.getElementById('form');
// const thankyou = document.getElementById('thankyou');

// form.addEventListener('submit', function(e){
//   e.preventDefault();
//   form.style.display = "none";
//   thankyou.style.display = "block";
// });

// AOS.init({
//       duration: 800,
//       once: true,
//       offset: 100
//     });




// ab section
document.addEventListener("DOMContentLoaded", () => {
  const abTrack = document.querySelector('.ab');
  const abPrevBtn = document.getElementById('previmg');
  const abNextBtn = document.getElementById('nextimg');

  const abMoveLeft = () => {
    const card = document.querySelector('.ab1');
    if (!card) return;
    const cardWidth = card.offsetWidth + 20; // 20px gap
    abTrack.scrollLeft -= cardWidth;
  };

  const abMoveRight = () => {
    const card = document.querySelector('.ab1');
    if (!card) return;
    const cardWidth = card.offsetWidth + 20; // 20px gap
    abTrack.scrollLeft += cardWidth;
  };

  if (abPrevBtn) abPrevBtn.addEventListener('click', abMoveLeft);
  if (abNextBtn) abNextBtn.addEventListener('click', abMoveRight);
});
  