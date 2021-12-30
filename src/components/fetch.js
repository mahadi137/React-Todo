//json-server Database url
const URL = "http://localhost:3010/posts/";

//Fetching data
async function Data() {
  return new Promise((resolve, reject) =>
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err))
  );
}
export default Data;
