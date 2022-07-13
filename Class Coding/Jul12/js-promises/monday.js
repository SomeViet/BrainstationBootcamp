// Monday
function startMyMondayRoutine() {
  console.log('Starting my day with nice cold shower?')
  // takeShower .then has success and failure callbacks
  takeShower()
    .then(
      // resolve in takeShower fn definition doesn't pass any parameters for us to use
      () => {
        console.log("That was a nice shower. I'll have something warm to drink now.");
        // by returning a promise you can continue the "promise chain"
        return boilKettle();
      },
      // we add a parameter to our error callback because reject in takeShower fn passes that as an argument above 
      error => {
        console.log("Oh no! Why can't I take a shower? I'll warm up with a beverage!", error);
      }
    )
    .then(
      // for this promise resolution we only provide the "happy path", error callback being optional
      () => {
        console.log("OK, kettle is boiled, I'll have coffee today");
        // promise functions are just functions, so we can pass arguments to them
        return makeHotBeverage('coffee');
      }
    )
    .then(
      () => {
        console.log("Got my beverage, let's read some news")
        return readNews();
      },
      // another failure callback
      error => {
        console.log("Why can't I have a coffee?", error);
        console.log("Well, OK, I'll have tea instead");
        // we can return Promise from error callback to recover and continue our Promise chain
        return makeHotBeverage('tea');
      }
    )
    .then(newKnowledge => {
      // readNews fn above will pass back an argument (array of strings) in it's resolve 
      // we have access to it in our success callback via a parameter we call newKnowledge
      if (newKnowledge) {
        console.log("I've learned so much, I will ponder on this first article");
        // you can also return values from Promise callbacks directly, which will be available
        // in the next .then in a chain, just like a result of Promise resolution
        return newKnowledge[0];
      } else {
        // because in the promise resolution above we will get the failure callback
        // due to makeHotBeverage('coffee') fn above rejecting the promise
        // this 'else' is to account for a fact that we have a conditional branch that
        // doesn't call readNews
        console.log('No time for news with this beverage fiasco, running for class.');
        return 'Nothing :(';
      }
    })
    .then(article => {
      // this parameter is a value returned from the Promise resolution above 
      console.log(`On my way to BrainStation reading all about ${article}`);
    });
}