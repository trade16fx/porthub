@@include('../modules/routes-slider/_slider.js')
@@include('../modules/flights-slider/_slider.js')




let collapsecont = document.getElementById('collapseab');
const collapsebtn = document.querySelector(".js-collapse-btn");

collapsebtn.onclick = function(){
	collapsecont.classList.toggle("open");

	if(collapsecont.classList.contains("open")) {
    collapsecont.parentElement.style.height = collapsecont.offsetHeight + 'px';      
	} else {
		collapsecont.parentElement.style.height = 0;
	}
}

let clearsearch = document.getElementById('clearsearch');
let searchblock = document.getElementById('searchblock');
let searchinp = document.getElementById('addrsearch');
const addrItems = document.querySelectorAll(".js-addr");

clearsearch.onclick = function(){
	searchblock.classList.remove("active");	
	searchinp.value = "";
}

// searchinp.onclick = function(){
// 	searchblock.classList.add("active");	
// }

searchinp.onkeyup = function(){
	let symlen = this.value.length;
	if (symlen > 0) {
		searchblock.classList.add("active");
	} else {
		searchblock.classList.remove("active");	
	}	
}

for (let addrItem of addrItems) {
  addrItem.addEventListener('click', clickHandler );
}

function clickHandler(event) {
  let addrStr = this.querySelector(".search-list__addr").innerHTML;
  searchinp.value = addrStr;
  searchblock.classList.remove("active");
  let pshcollapsecont = document.getElementById('collapsepsh');
  pshcollapsecont.parentElement.style.height = pshcollapsecont.offsetHeight + 'px';
  pshcollapsecont.style.opacity = 1;

  setTimeout(function() { pshcollapsecont.parentElement.style.height = 0} , 3000);
  setTimeout(function() { pshcollapsecont.style.opacity = 0 }, 2500);

  // setTimeout(sayHi, 3000);

}

function sayHi() {
	let pshcollapsecont2 = document.getElementById('collapsepsh');
  pshcollapsecont2.parentElement.style.height = 0;
    pshcollapsecont2.style.opacity = 0; 
}
// function sayOp() {
// 	let pshcollapsecont3 = document.getElementById('collapsepsh');
//    
// }


