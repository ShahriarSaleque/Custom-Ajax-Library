const http = new easyHttp();

// //Get all posts
http.get("https://jsonplaceholder.typicode.com/posts", function(err, response) {
  if (err != null) {
    console.log("Error: " + err);
  } else {
    console.log(response);
  }
});

// //Get single post
http.get("https://jsonplaceholder.typicode.com/posts/1", function(
  err,
  response
) {
  if (err != null) {
    console.log("Error: " + err);
  } else {
    console.log(response);
  }
});

// //Create a post
const data = {
  title: "custom",
  body: "Custom data"
};

http.post("https://jsonplaceholder.typicode.com/posts", data, function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});

// //Update a post
http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});

//Delete a post
http.delete("https://jsonplaceholder.typicode.com/posts/1", function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
