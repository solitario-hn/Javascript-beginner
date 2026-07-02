const req = new XMLHttpRequest(); //built-in class to send http requests.

req.addEventListener("load", () => {
  console.log(req.response); //will console the reesponse (received data)
});

req.open("GET", "https://supersimplebackend.dev/documentation"); //setting the http message (type of request , url)

req.send();

// req.response; //since it takes time for the response to travel across the internet and .response() is an asynchronous code (doesn't wait for the response to load ) it will be undefined hence event listener load is added for wait for the response to load
