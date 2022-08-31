const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  const name = answer;
  rl.question("What's an activity you like doing?", (answer2) => {
    const favActivity = answer2;
    rl.question("What do you listen to while doing that?", (answer3) => {
      const favMusic = answer3;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer4) => {
        const favMeal = answer4;
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          const favFood = answer5;
          rl.question("Which sport is your absolute favourite?", (answer6) => {
            const favSport = answer6
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
              const superpower = answer7;
              console.log(`My name is ${name}. My favorite activity is ${favActivity}. My favorite music to listen to while doing that is ${favMusic}. My favorite meal is ${favMeal}, and my favorite thing to eat at ${favMeal} is ${favFood}. My favorite sport is ${favSport} and my superpower is ${superpower}`)
              rl.close();
            });
          });
        });
      });
    });
  });
});