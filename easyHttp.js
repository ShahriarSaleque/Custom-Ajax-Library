function easyHttp() {
  this.http = new XMLHttpRequest();
}

//Make HTTP GET request
easyHttp.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);

  const self = this.http;
  this.http.onload = function() {
    if (self.status === 200) {
      callback(null, self.responseText);
    } else {
      callback(self.status);
    }
  };

  this.http.send();
};

//Make HTTP POST request
//Make HTTP PUT request
//Make HTTP DELETE request
