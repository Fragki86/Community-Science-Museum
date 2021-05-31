const exhContainer = document.querySelector(".all-exhibitions-container");
// const callPosts = "https://museum.georgiosf.no/wp-json/wp/v2/wprm_recipe?per_page=10"
const callPosts = "https://museum.georgiosf.no/wp-json/wp/v2/posts?_embed";
// const callMedia = "https://museum.georgiosf.no/wp-json/wp/v2/media";


async function getExhibitions() {
    try {
        const response = await fetch(callPosts);
        const resultsPosts = await response.json();

        // const response2 = await fetch(callMedia)
        // const resultsMedia = await response2.json();
        console.log(resultsPosts);
        //result[0]._links
        exhContainer.innerHTML = "";
        exhibitions(resultsPosts)


        return resultsPosts;
    } catch(error) {
        console.log("ERROR");
    }
}

getExhibitions();


function exhibitions(resultsPosts) {
    for (let i = 1; i < resultsPosts.length; i++) {
        console.log(resultsPosts[i]);

        let className = ""; 
        if (i % 2 === 1) {
            className = "separator";
        }

        exhContainer.innerHTML += `
        <div class=${className}>
            <div class="exhibition-groups">
                <h2>${resultsPosts[i].title.rendered}</h2>
                <img src="${resultsPosts[i]._embedded['wp:featuredmedia']['0'].source_url}" class="img-exhibition-groups">
                ${resultsPosts[i].excerpt.rendered}
                <a href="exhibitions-details.html?id=${resultsPosts[i].id}" class="read-more">Read More</a>
            </div>

        </div>
        `
    }


    // for (let i = 0; i < resultsPosts.length; i++ ) {
    //     console.log(resultsPosts[i])

    //     let className = "";
    //     if (i % 2 === 0) {
    //         className = "separator";
    //     }


    //     exhContainer.innerHTML += `
    //     <div class="${className}">
    //             <div class="exhibition-groups">
    //                 <h2>${resultsPosts[i].recipe.name}</h2>
    //                 <img src="${resultsPosts[i].recipe.image_url}" class="img-exhibition-groups">
    //                 ${resultsPosts[i].recipe.summary}
    //                 <a href="exhibitions-details.html?id=${resultsPosts[i].id}" class="read-more">Read More</a>
    //             </div>        
    //     </div>
    //     `
    // }
    // allShows.forEach(function(all) {
    //     exhContainer.innerHTML += `
    //         <div class="exhibition-groups">
    //         <h2>${all.recipe.name}</h2>
    //         <img src="${all.recipe.image_url}" class="img-exhibition-groups">
    //         ${all.recipe.summary}            
    //         <a href="exhibitions-details.html?id=${all.id}" class="read-more">Read More</a>
    //         </div>
    //     `
    // })

}