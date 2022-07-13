 // Tuesday
 function startMyTuesdayRoutine() {
  console.log('Woke up late, no time for anything');
  takeShower()
    .then(() => {
      console.log("OK at least I showered. Let's just quickly get ready");
      // Promise.all takes an array of promises and has a single .then to resolve
      // that will wait for all of them to resolve, or any of them to reject.
      // Running promises in bulk at the same time.
      return Promise.all([
        makeHotBeverage(),
        readNews()
      ]);
    })
    .then(result => {
      // The callback parameter (named result here) will be an array
      // of all results in order they are in the array above after they resolve
      const beverage = result[0];
      const articles = result[1];
      console.log(`Drinking my ${beverage}, reading up on ${articles[articles.length - 1]}`);
    })
    // Having a final .catch is a good practice to catch any errors that might be overlooked
    // by promise resolutions that omit the failure callbacks in their .then
    .catch(error => {
      // You can use .catch to catch any rejections that might happen in any of the Promises in .all
      console.log("OMG, what else can go wrong today?", error);
    });
}
