/*AJAX*/
var newsDisplay=document.getElementById("newsShow"); //news container
var navLinks=document.getElementsByTagName("a");
var navLinksArr=Array.from(navLinks);
var receivedArticles=[]; //array of news
var newsCountry="eg";
var newsCategory="general";
/*which category is clicked*/
navLinksArr[0].addEventListener("click",function()
{
    newsCategory="general";
    httpRequest=new XMLHttpRequest(); 
    httpRequest.open("GET","https://newsapi.org/v2/top-headlines?country="+newsCountry+"&category="+newsCategory+"&apiKey=9bf6ac06c3894b219c33cfd09ae7ff58",true); //open connection
    httpRequest.send(); //send request
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            //Data received and URL is correct
            receivedArticles=(JSON.parse(httpRequest.response)).articles; 
            displayNews(); //show news
        }
        else{/*do nothing */}
    };//check state of httpRequest
}
);
navLinksArr[1].addEventListener("click",function()
{
    newsCategory="sport";
    httpRequest=new XMLHttpRequest(); 
httpRequest.open("GET","https://newsapi.org/v2/top-headlines?country="+newsCountry+"&category="+newsCategory+"&apiKey=9bf6ac06c3894b219c33cfd09ae7ff58",true); //open connection
httpRequest.send(); //send request
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        //Data received and URL is correct
        receivedArticles=(JSON.parse(httpRequest.response)).articles; 
        displayNews(); //show news
    }
    else{/*do nothing */}
  };//check state of httpRequest
}
);
navLinksArr[2].addEventListener("click",function()
{
    newsCategory="business";
    httpRequest=new XMLHttpRequest(); 
httpRequest.open("GET","https://newsapi.org/v2/top-headlines?country="+newsCountry+"&category="+newsCategory+"&apiKey=9bf6ac06c3894b219c33cfd09ae7ff58",true); //open connection
httpRequest.send(); //send request
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        //Data received and URL is correct
        receivedArticles=(JSON.parse(httpRequest.response)).articles; 
        displayNews(); //show news
    }
    else{/*do nothing */}
  };//check state of httpRequest
}
);
navLinksArr[3].addEventListener("click",function()
{
    newsCategory="health";
    httpRequest=new XMLHttpRequest(); 
httpRequest.open("GET","https://newsapi.org/v2/top-headlines?country="+newsCountry+"&category="+newsCategory+"&apiKey=9bf6ac06c3894b219c33cfd09ae7ff58",true); //open connection
httpRequest.send(); //send request
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        //Data received and URL is correct
        receivedArticles=(JSON.parse(httpRequest.response)).articles; 
        displayNews(); //show news
    }
    else{/*do nothing */}
  };//check state of httpRequest
}
);
navLinksArr[4].addEventListener("click",function()
{
    newsCategory="science";
    httpRequest=new XMLHttpRequest(); 
httpRequest.open("GET","https://newsapi.org/v2/top-headlines?country="+newsCountry+"&category="+newsCategory+"&apiKey=9bf6ac06c3894b219c33cfd09ae7ff58",true); //open connection
httpRequest.send(); //send request
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        //Data received and URL is correct
        receivedArticles=(JSON.parse(httpRequest.response)).articles; 
        displayNews(); //show news
    }
    else{/*do nothing */}
  };//check state of httpRequest
}
);
navLinksArr[5].addEventListener("click",function()
{
    newsCategory="technology";
    httpRequest=new XMLHttpRequest(); 
httpRequest.open("GET","https://newsapi.org/v2/top-headlines?country="+newsCountry+"&category="+newsCategory+"&apiKey=9bf6ac06c3894b219c33cfd09ae7ff58",true); //open connection
httpRequest.send(); //send request
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        //Data received and URL is correct
        receivedArticles=(JSON.parse(httpRequest.response)).articles; 
        displayNews(); //show news
    }
    else{/*do nothing */}
  };//check state of httpRequest
}
);
/*Create new XMLHttpRequest*/
var httpRequest=new XMLHttpRequest(); 
httpRequest.open("GET","https://newsapi.org/v2/top-headlines?country="+newsCountry+"&category="+newsCategory+"&apiKey=9bf6ac06c3894b219c33cfd09ae7ff58",true); //open connection
httpRequest.send(); //send request
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        //Data received and URL is correct
        receivedArticles=(JSON.parse(httpRequest.response)).articles; 
        displayNews(); //show news
    }
    else{/*do nothing */}
  };//check state of httpRequest
/**/
/*Display News*/
function displayNews()
{
    var htmlCode="";
    for(var i=0;i<receivedArticles.length;i++)
    {
        htmlCode+=`<div class="col-md-4 my-3">
        <div class="bg-light">
        <img src="`+receivedArticles[i].urlToImage+`"class="img-fluid"/>
        <h1 class="mt-2 mb-2 divBody">`+receivedArticles[i].title+`</h1>
        <p class="divBody">`+receivedArticles[i].description+`</p>
        </div></div>`
    }
    newsDisplay.innerHTML=htmlCode;
}
/**/
/*Search by title*/
function searchNews(searchedNews)
{   var temp="";
    for(var j = 0;j<receivedArticles.length;j++)
    {
        var newsLower=(receivedArticles[j].title).toLowerCase();
        var searchLower=searchedNews.value.toLowerCase();
       window.alert(searchLower);
        if(searchedNews.value=="")
        {
            displayNews();
        }
        else if(newsLower.includes(searchLower)&&(searchedNews.value!=""))
        {
            temp+=`<div class="col-md-4 my-3">
            <div class="bg-light">
            <img src="`+receivedArticles[j].urlToImage+`"class="img-fluid"/>
            <h1 class="mt-2 mb-2 divBody">`+receivedArticles[j].title+`</h1>
            <p class="divBody">`+receivedArticles[j].description+`</p></div></div>`;  
            newsDisplay.innerHTML=temp;
        }


    }
}
/**/