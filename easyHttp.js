function easyHttp() {
  this.http = new XMLHttpRequest();
}

//Make HTTP GET request
// easyHttp.prototype.get = function(url, callback) {
//   this.http.open("GET", url, true);

//   const self = this.http;
//   this.http.onload = function() {
//     if (self.status === 200) {
//       callback(null, self.responseText);
//     } else {
//       callback(self.status);
//     }
//   };

//   this.http.send();
// };

//Make HTTP POST request
// easyHttp.prototype.post = function(url, data, callback) {
//   this.http.open("POST", url, true);
//   this.http.setRequestHeader("Content-type", "application/json");

//   const self = this.http;
//   self.onload = function() {
//     if (self.status === 201) {
//       callback(null, self.responseText);
//     } else {
//       callback("Error: " + self.status);
//     }
//   };

//   this.http.send(JSON.stringify(data));
// };

//Make HTTP PUT request
// easyHttp.prototype.put = function(url, data, callback) {
//   this.http.open("PUT", url, true);
//   this.http.setRequestHeader("Content-type", "application/json");
//   const self = this.http;
//   self.onload = function() {
//     if (self.status === 200) {
//       callback(null, self.responseText);
//     } else {
//       callback("Error: " + self.status);
//     }
//   };

//   this.http.send(JSON.stringify(data));
// };

//Make HTTP DELETE request
easyHttp.prototype.delete = function(url, callback) {
  this.http.open("DELETE", url, true);

  const self = this.http;
  self.onload = function() {
    if (self.status === 200) {
      callback(null, "DELETED");
    } else {
      callback("Error: " + self.status);
    }
  };

  this.http.send();
};
