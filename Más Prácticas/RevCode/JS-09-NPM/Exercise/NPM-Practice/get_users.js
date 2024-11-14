const axios = require("axios");

async function makeGetRequest() {
  try {
    let res = await axios.get("http://localhost:3000/users");
    let data = res.data;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

makeGetRequest();

module.exports = makeGetRequest;
