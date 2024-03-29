const detailsContainer = document.querySelector(".details-container");
const biggerImg = document.querySelector(".bigger-img");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
const exhibDetailsURL = "https://museum.georgiosf.no/wp-json/wp/v2/posts/" + id;



/* ----------------- Fetch results ----------------- */
detailsContainer.innerHTML = "";
async function bringDetails() {
    try {
        const response = await fetch(exhibDetailsURL);
        const results = await response.json();

        showDetails(results);

    } catch(error) {
        console.log("ERROR");
    }
}
bringDetails()


/* ----------------- Inner HTML ----------------- */
function showDetails(results) {
    detailsContainer.innerHTML = `
        <h1 class="h1-starter">${results.title.rendered}</h1>
        <div class="explore-grid">
        ${results.content.rendered}
        </div>    
    `
}