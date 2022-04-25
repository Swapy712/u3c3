// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

  var money  = JSON.parse(localStorage.getItem("wallet"))

    console.log(money);

  let wallet = document.getElementById("wallet")
      wallet.innerText = money;

async function searchmovies(){

    try{
        const query = document.getElementById("search").value 

        const res =await fetch(`https://www.omdbapi.com/?apikey=d9d91a20&s=${query}`)
    
        const data = await res.json()

        const movies = data.Search;
        
        return movies;
    }
    catch(err){
        console.log(err);
    }

    
}
let movies_div = document.getElementById("movies")

// function appendmovies(data){

//     let box = document.createEelment("div")

//      data.forEach(function(elem){

//     let title = document.createElement("p")
//     title.innerText = elem.Title;

//    })

//      box.append(title); 

//      div_movies.append(box);
// }
 
    

async function main(){
  
 let data = await searchmovies();
 
  if(data===undefined){
      return false;
  }
  
  paste(data);
}

let id;

function debounce(main,delay){
    if(id){
        clearTimeout(id);
    }

    id = setTimeout(function(){
        main();
    },delay)
}

function paste(data){
    console.log(data);
   
    data.map(function(elem){
        
        let box = document.createElement("div")

        let image = document.createElement("img")
            image.src = elem.Poster

        let p = document.createElement("p")
            p.innerText = elem.Title;


        let btn = document.createElement("button")
            btn.innerText = 'Book now'
            btn.addEventListener("click",function(){
                  Book(elem);
            })

            box.append(image,p,btn);
        movies_div.append(box);

    })
}
let arr =[];
function Book(elem){

  arr.push(elem) ;
   localStorage.setItem("Movie",JSON.stringify(arr))

   window.location.href = "checkout.html";
}