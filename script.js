const search=document.getElementById("search");

search.addEventListener("keyup",function(){

let filter=search.value.toLowerCase();

let books=document.querySelectorAll(".book");

books.forEach(book=>{

let title=book.innerText.toLowerCase();

book.style.display=title.includes(filter)?"block":"none";

});

});