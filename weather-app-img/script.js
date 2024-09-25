const searchbar = document.querySelector(".searchbar")
const searchbtn = document.querySelector(".searchbtn")
const unorder = document.querySelector(".unorder")
const mainhide = document.querySelector('.mainhide')


function showrecommendedlist(rec){
    let searchvalue = searchbar.value;
    if(!searchvalue){
        return mainhide.classList.remove("mainunhide");
    }
    mainhide.classList.add("mainunhide");
    mainhide.innerHTML='',
    rec.map(recomendeditem => {
        const li = document.createElement('li')
        li.classList.add('hello')
        li.textContent = recomendeditem.name;
        mainhide.appendChild(li);
        const createdli = document.querySelector('.hello')
        createdli.addEventListener('click',sort)
            function sort(){
                if(searchbar.value){
                    searchbar.value = createdli.textContent
                    // console.log(createdli)
                }
        }
        // console.log(recomendeditem);
    })
}

async function filtercountry() {
    const response = await fetch("./cities.json");
    const countrylist = await response.json();
    let searchvalue = searchbar.value;
    let recommendations = [];
    if(searchvalue){
    recommendations = countrylist.filter(data => {
        // console.log(data.name);
        // console.log(data.state_name);
        // console.log(data.country_name);
        return data.name.toLowerCase().includes(searchvalue.toLowerCase());
    });
    // console.log(recommendations)
    showrecommendedlist(recommendations)
    }   
}

searchbar.addEventListener('keyup', filtercountry)
