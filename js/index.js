const callApiIndex = "https://museum.georgiosf.no/wp-json/wp/v2/posts?_embed";
const container = document.querySelector(".exhibitions-desktop");




async function index() {
    const response = await fetch(callApiIndex);
    const indexResults = await response.json();

    container.innerHTML = "";
    featuredExhibitions(indexResults);

    return indexResults;
}
index();


function featuredExhibitions(indexResults) {

    indexResults.forEach(function(featured) {
        console.log()
        container.innerHTML += `
        <div>
            <a href="exhibitions-details.html?id=${featured.id}">
                <h3>${featured.title.rendered}</h3>
                <img src="${featured._embedded['wp:featuredmedia']['0'].source_url}" class="home-img">
            </a>
        </div>
        `
    })

};