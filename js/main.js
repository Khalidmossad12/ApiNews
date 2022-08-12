

let articles = []
async function getNews(country , category) {
   let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=55a3fe694a504bbd89a3ac663b11f4b9`)
   let finalResult =await response.json()
   articles = finalResult.articles 
   displayNews() 
   console.log(articles);
}

getNews('eg' , 'sports');

function displayNews() {
    let cartoona = []
    for (let i = 0;i < articles.length ; i++) {
            cartoona += `<div class="col-md-3">
            <div class="newsItem">
                <img src="${articles[i].urlToImage}" class="w-100" height = "200px" alt="" srcset="">
                <h3>${articles[i].title}</h3>
                <p>${articles[i].description }</p>
            </div>
        </div>`
    }

    document.getElementById('rowData').innerHTML = cartoona
}

let lis = document.querySelectorAll('ul li')

for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click' , function(e) {
        getNews('us' , e.target.innerHTML)
    })
    
}