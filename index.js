let api = "data.json"

async function getApi (url){
    let response = await(fetch(url))
    let data = await response.json()

    // console.log(data);

    let card = ""

    data.forEach(element => {
        card+=`
        <div class="card mx-2 my-2" style="width: 15rem;">
            <div class=" box box1">
                <img src="${element.poster_path}" class=" my-3 card-img-top" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title">${element.genres}</h5>
              <p class="card-text"><b>Name:</b>${element.title}</p>
              <p class="card-text"><b></b>${element.original_language}</p>
              <p class="card-text"><b>Rating  </b>${element.vote_average}</p>
              <p>Release Date:<strong>${element.release_date}</strong></p>
            </div>
        </div>
        `
        });

        document.getElementById("all-cards").innerHTML = card
}

getApi(api)

// ===============by genres
let api2 = "data.json"
async function getApi2 (url){
    let response = await(fetch(url))
    let data = await response.json()

    // console.log(data);

    let card = ""

    data.forEach(element => {
        card+=`
        <div class="card mx-2 my-2" style="width: 15rem;">
            <div class=" box box1">
                <img src="${element.poster_path}" class=" my-3 card-img-top" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title">Generes</h5>
              <h5 class="card-title">${element.genres}</h5>
              
            </div>
        </div>
        `
        });

        document.getElementById("genere").innerHTML = card
}

getApi2(api2)

// ==================================for year
let api3 = "data.json"
async function getApi3 (url){
    let response = await(fetch(url))
    let data = await response.json()

    // console.log(data);

    let card = ""

    data.forEach(element => {
        card+=`
        <div class="card mx-2 my-2" style="width: 15rem;">
            <div class=" box box1">
                <img src="${element.poster_path}" class=" my-3 card-img-top" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title">Year</h5>
              <h5 class="card-title">${element.release_date}</h5>
              
            </div>
        </div>
        `
        });

        document.getElementById("release_date").innerHTML = card
}

getApi3(api3)

// ==========================by language
let api4 = "data.json"
async function getApi4 (url){
    let response = await(fetch(url))
    let data = await response.json()

    // console.log(data);

    let card = ""

    data.forEach(element => {
        card+=`
        <div class="card mx-2 my-2" style="width: 15rem;">
            <div class=" box box1">
                <img src="${element.poster_path}" class=" my-3 card-img-top" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title">Language</h5>
              <h5 class="card-title">${element.original_language}</h5>
              
            </div>
        </div>
        `
        });

        document.getElementById("original_language").innerHTML = card
}

getApi4(api4)


// ===========================by rating
let api5 = "data.json"
async function getApi5 (url){
    let response = await(fetch(url))
    let data = await response.json()

    // console.log(data);

    let card = ""

    data.forEach(element => {
        card+=`
        <div class="card mx-2 my-2" style="width: 15rem;">
            <div class=" box box1">
                <img src="${element.poster_path}" class=" my-3 card-img-top" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title">Rating</h5>
              <h5 class="card-title">${element.vote_average}</h5>
              
            </div>
        </div>
        `
        });

        document.getElementById("popularity").innerHTML = card
}

getApi5(api5)
