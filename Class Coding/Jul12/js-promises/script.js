/*
  In this lab you will be creating your morning schedule
  from the time you wake up to the time you get to your 
  BrainStation class by 'Promise'ing to make it to class in time.
  
  We provide you with the examples of morning activity functions 
  that return Promises. Second part of the process is to start your
  morning routine by putting those functions in action.
  
  It's your job to create your own morning activities or update the
  provided example ones and .then start
  your day by running those functions and resolving all your Promises

  Try incorporating throughout your activities and resolutions:

  - a resolve and reject functionality
  - a resolve with an argument passed back
  - a reject with an error object passed back
  - an activity that takes a parameter
  - .then chaining
  - success and failure callback inside of your .then
  - .all to group some activities that can be done simultaneously

  * 500 milliseconds represents 5 minutes *

  Search for "START YOUR DAY HERE" to see example routine
*/

const boilKettle = () => {
  return new Promise(resolve => {
    // You have a reliable kettle, it always boils in exactly 5 minutes
    setTimeout(() => {
      resolve();
    }, 500);
  });
}

const makeHotBeverage = beverageChoice => {
  return new Promise((resolve, reject) => {
    // If you want to make tea, it'll take 3 minutes
    if (beverageChoice === 'tea') {
      setTimeout(() => {
        resolve();
      }, 300);
    }

    // You forgot to buy coffee, so your wish gets rejected immediately
    if (beverageChoice === 'coffee') {
      reject('We are all out of coffee');
    }

    // If you have no hot water, just returning tap water immediately instead
    if (!beverageChoice) {
      resolve('Cold Water');
    }
  })
}

const takeShower = () => {
  return new Promise((resolve, reject) => {
    // You are saving on rent, hot water is a luxury in your building
    // There is always a chance that you have to take a shower with cold water
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve();
      } else {
        reject('No hot water today :(');
      }
    }, 1000);
  });
}

const readNews = () => {
  return new Promise(resolve => {
    // Reading news gives you something to think about after
    setTimeout(() => {
      resolve(['World is collapsing!', 'World is OK', 'What is happening with the World?'])
    }, 750)
  });
}



/*
  START YOUR DAY HERE

  By default Monday routine is run, try commenting startMyMondayRoutine
  and commenting out startMyTuesdayRoutine to try a different routine.

  Remember, if you run both routines, they both will be asynchronous, starting
  at the same and resolving after their respective setTimeout, making two 
  routines compete with each other.

  The code for the routines is split into monday.js and tuesday.js files

  Diving Deeper:
  
  By converting startMyMondayRoutine and startMyTuesdayRoutine to
  use Promises as well, you can run them in succession now, waiting for one to
  complete before the other is run. Try creating this functionality
*/
startMyMondayRoutine();
// startMyTuesdayRoutine();

