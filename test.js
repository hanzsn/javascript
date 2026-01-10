const pendingPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Done"), 1000);
});

while (true) {
  pendingPromise.then((value) => {
    console.log("Promise resolved with", value);
  });
}
