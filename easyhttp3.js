//Custom Ajax Library built using async/await

class EasyHttp {
  async get(url) {
    const data = await fetch(url);
    const res = await data.json();
    return res;
  }

  async post(url, data) {
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const response = await data.json();
    return response;
  }

  async put(url, data) {
    const data = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const res = await data.json();

    return res;
  }

  async delete(url) {
    const data = await fetch(url, {
      method: "DELETE"
    });

    const res = await data.json();

    return res;
  }
}
