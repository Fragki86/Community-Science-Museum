const exhContainer = document.querySelector(".all-exhibitions-container");
const callPosts = "https://museum.georgiosf.no/wp-json/wp/v2/posts?_embed";


/*------------------------   Fetch api -----------------------------*/
async function getExhibitions() {
    try {
        const response = await fetch(callPosts);
        const resultsPosts = await response.json();

        exhContainer.innerHTML = "";
        exhibitions(resultsPosts)


        return resultsPosts;
    } catch(error) {
        console.log("ERROR");
    }
}

getExhibitions();

/*------------------------   Show innerHTML -----------------------------*/
function exhibitions(resultsPosts) {
    for (let i = 0; i < resultsPosts.length; i++) {
        console.log(resultsPosts[i]);

        let className = ""; 
        if (i % 2 === 0) {
            className = "separator";
        }

        exhContainer.innerHTML += `
        <div class="hyperlink">
        <div class=${className}>
            <div class="exhibition-groups">
                <h2>${resultsPosts[i].title.rendered}</h2>
                <img src="${resultsPosts[i]._embedded['wp:featuredmedia']['0'].source_url}" class="img-exhibition-groups" alt="${resultsPosts[i]._embedded['wp:featuredmedia']['0'].alt_text}"/>
                ${resultsPosts[i].excerpt.rendered}
                <a href="exhibitions-details.html?id=${resultsPosts[i].id}" class="read-more">Read More</a>
            </div>
        </div>
        </div>
        `
    }
}