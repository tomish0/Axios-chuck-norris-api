function fetchNorrisJSON() {
  const url = `https://api.chucknorris.io/jokes/random`;
  axios
    .get(url)
    .then(response => response.data) // DIFFERENT FROM FETCH: response.data instead of response.json()
    .then(chuckNorris => {
      {
        console.log("data decoded from JSON:", chuckNorris);
        // Build a block of HTML
        const chuckNorrisHtml = `
          <p><strong>${chuckNorris.value}</strong></p>
          <img src="${chuckNorris.icon_url}" />
          `;
        document.querySelector("#chuck-norris").innerHTML = chuckNorrisHtml;
      }
    });
}


