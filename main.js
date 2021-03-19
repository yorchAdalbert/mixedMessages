/* Mixed Messages...
 * Create a ramdom message releated to today fortune.
 * Everytime the user run the program, a new random message is gonna 
 * log in the terminal...
 */

// @uthor: Yorch_Adalberto

const dayWeather = ['sunny', 'rainning', 'cloudy', 'stormy', 'snowy', 
                    'windy', 'romantic', 'beautiful', 'cold', 'hot'];
const cloaths = ['hat or a cap', 'umbrella', 'jacket', 'raincoat', 'sweater', 
                'short', 'tuxedo', 'suit', 'beany', 't-shirt'];
const placesToGo = ['park', 'home', 'forest', 'shelter', 'mountain', 'downtown',
                    'restaurant', 'movie theater', 'lake', 'beach'];

//const randomDayFurtune = {dayWeather, cloaths, placesToGo};

const getRandomIndex = array => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
};

const day = dayWeather[getRandomIndex(dayWeather)];
const cloath = cloaths[getRandomIndex(cloaths)];
const place = placesToGo[getRandomIndex(placesToGo)];

const furtuneDayMessage = 
`!Welcome!
Are you ready to know your furtune day?
Today's weather is ${day},
You should use a ${cloath},
and the best place to go is to a ${place}.`

console.log(furtuneDayMessage);
