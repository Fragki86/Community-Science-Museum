const searchAPI = "https://museum.georgiosf.no/wp-json/wp/v2/posts?_embed";
const searchInput = document.querySelector("#search");
const submitBtn = document.querySelector(".search-button");
const searchDiv = document.querySelector(".search-div");
const searchResults = document.querySelector(".search-results");

searchInput.addEventListener("input", () => searchShows(searchInput.value));



/*------------------------   Search function -----------------------------*/
const searchShows = async (checkAll) => {
    try {
        const response = await fetch(searchAPI);
        const results = await response.json();

        let showCheck = results.filter((shows) => {
            const regex = new RegExp(`${checkAll}`, "gi");
            return (
                shows.title.rendered.match(regex)
            );

        });

        if (checkAll.length === 0) {
            showCheck = [];
            searchResults.innerHTML = "";
            searchDiv.style.display = "none";
        }
        deliverHTML(showCheck);

    } catch(error) {
        console.log("ERROR")
    }
}

const deliverHTML = (showCheck) => {
    if (showCheck.length > 0) {
        const finalResult = showCheck
        .map((match) => `
        <a href="exhibitions-details.html?id=${match.id}">
            <li>${match.title.rendered}</li>
        </a>
        `)
        .join("");
        searchResults.innerHTML = finalResult;
        searchDiv.style.display = "block"
    }
}


