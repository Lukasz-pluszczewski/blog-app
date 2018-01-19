import moment from 'moment';

const quotes = [
  { quote: 'The fool doth think he is wise, but the wise man knows himself to be a fool.', author: 'William Shakespeare' },
  { quote: 'It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.', author: 'Maurice Switzer' },
  { quote: 'Dubitando enim ad inquisitionem venimus; inquirendo veritatem percipimus', author: 'Peter Abelard' },
  { quote: 'But the wisdom from above is first of all pure, then peaceable, reasonable, ready to obey, full of mercy and good fruits, impartial, not hypocritical.', author: '' },
  { quote: 'People never want to be told anything they do not believe already', author: 'James Branch Cabel' },
  { quote: 'Nothing is so firmly believed as what we least know.', author: 'Michel de Montaigne' },
  { quote: 'It is very difficult to reason people out of beliefs that they didn’t reason themselves into.', author: 'Amy Tuteur' },
  // { quote: 'He who knows not,\nand knows not that he knows not,\nis a fool; shun him.', author: 'Arabic' },
  // { quote: 'He who knows not,\nand knows that he knows not, \nis a student; Teach him.', author: 'Arabic' },
  // { quote: 'He who knows,\nand knows not that he knows,\nis asleep; Wake him.', author: 'Arabic' },
  // { quote: 'He who knows,\nand knows that he knows,\nis Wise; Follow him.', author: 'Arabic' },
];

const getQuote = () => quotes[moment().date()%quotes.length];

export default getQuote();
