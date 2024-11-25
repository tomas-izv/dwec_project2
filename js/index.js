import { generateDeck } from "./deck.js";
import { enableDragAndDrop } from './dragDrop.js';

// Initialize the deck and append it to the DOM
const deckElement = document.getElementById('deck');
generateDeck(deckElement);

// Enable drag-and-drop functionality
enableDragAndDrop(deckElement);

// // Generate deck of cards
// const suits = ['H', 'D', 'C', 'S'];
// const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// const valueOrder = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 }; // For sorting
// const deckElement = document.getElementById('deck');

// // Create card elements
// function createCardElement(value, suit) {
//   const card = document.createElement('div');
//   card.className = 'card';
//   card.draggable = true;
//   card.textContent = `${value} ${suit}`;
//   card.dataset.value = value;
//   card.dataset.suit = suit;
//   return card;
// }

// // Populate the deck
// suits.forEach(suit => {
//   values.forEach(value => {
//     const card = createCardElement(value, suit);
//     deckElement.appendChild(card);
//   });
// });

// // Drag-and-drop functionality
// const suitSections = document.querySelectorAll('.suit-section');

// document.addEventListener('dragstart', event => {
//   if (event.target.classList.contains('card')) {
//     event.dataTransfer.setData('value', event.target.dataset.value);
//     event.dataTransfer.setData('suit', event.target.dataset.suit);
//     event.target.classList.add('dragging');
//   }
// });

// document.addEventListener('dragend', event => {
//   if (event.target.classList.contains('card')) {
//     event.target.classList.remove('dragging');
//   }
// });

// // Make suit sections drop targets
// suitSections.forEach(section => {
//   section.addEventListener('dragover', event => {
//     event.preventDefault();
//     section.classList.add('over');
//   });

//   section.addEventListener('dragleave', () => {
//     section.classList.remove('over');
//   });

//   section.addEventListener('drop', event => {
//     event.preventDefault();
//     const draggedCardSuit = event.dataTransfer.getData('suit');
//     const sectionSuit = section.id;

//     if (draggedCardSuit === sectionSuit) {
//       const card = document.querySelector('.card.dragging');
//       section.appendChild(card);
//       sortCardsInSection(section);
//     }
//     section.classList.remove('over');
//   });
// });

// // Make deck a drop target
// deckElement.addEventListener('dragover', event => {
//   event.preventDefault();
//   deckElement.classList.add('over');
// });

// deckElement.addEventListener('dragleave', () => {
//   deckElement.classList.remove('over');
// });

// deckElement.addEventListener('drop', event => {
//   event.preventDefault();
//   const card = document.querySelector('.card.dragging');
//   deckElement.appendChild(card);
//   sortCardsInDeck(deckElement);
//   deckElement.classList.remove('over');
// });

// // Function to sort cards within a section
// function sortCardsInSection(section) {
//   const cards = Array.from(section.querySelectorAll('.card'));
//   cards.sort((a, b) => valueOrder[a.dataset.value] - valueOrder[b.dataset.value]);

//   // Clear the section and re-append cards in sorted order
//   section.innerHTML = '';
//   cards.forEach(card => section.appendChild(card));

//   // Adjust layout to columns
//   arrangeInColumns(section, cards);
// }

// // Function to sort cards in the deck
// function sortCardsInDeck(deck) {
//   const cards = Array.from(deck.querySelectorAll('.card'));
//   cards.sort((a, b) => {
//     if (a.dataset.suit === b.dataset.suit) {
//       return valueOrder[a.dataset.value] - valueOrder[b.dataset.value];
//     }
//     return suits.indexOf(a.dataset.suit) - suits.indexOf(b.dataset.suit);
//   });

//   // Clear the deck and re-append cards in sorted order
//   deck.innerHTML = '';
//   cards.forEach(card => deck.appendChild(card));
// }

// // Function to arrange cards in columns
// function arrangeInColumns(section, cards) {
//   const columns = [[], [], []]; // For 2 columns of 5 and 1 column of 3
//   cards.forEach((card, index) => {
//     if (index < 5) columns[0].push(card); // First column
//     else if (index < 10) columns[1].push(card); // Second column
//     else columns[2].push(card); // Third column
//   });

//   // Clear the section and arrange columns
//   section.innerHTML = '';
//   const columnWrapper = document.createElement('div');
//   columnWrapper.classList.add('columns');
//   section.appendChild(columnWrapper);

//   columns.forEach(col => {
//     const columnDiv = document.createElement('div');
//     columnDiv.classList.add('column');
//     col.forEach(card => columnDiv.appendChild(card));
//     columnWrapper.appendChild(columnDiv);
//   });
// }
