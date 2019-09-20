const http = new easyHttp();
http.get("https://jsonplaceholder.typicode.com/posts", function(err, response) {
  if (err != null) {
    console.log("Error: " + err);
  } else {
    console.log(response);
  }
});
