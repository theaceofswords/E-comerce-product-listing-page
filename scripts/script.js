

const root = document.getElementById('root');
const search = document.getElementById('sbox');

let c1 = document.querySelector("input[name=s]");
let c2 = document.querySelector("input[name=m]");
let c3 = document.querySelector("input[name=l]");
let c4 = document.querySelector("input[name=black]");
let c5 = document.querySelector("input[name=red]");
let c6 = document.querySelector("input[name=blue]");



let targetstring = [''];
let sinput= [''];
let cbox1ip = [''];
let cbox2ip = [''];


search.addEventListener('keyup' , (e) => {
	 sinput = e.target.value;
	 targetstring = sinput.toUpperCase();
	 
});





function sort(x){
	 console.log(x.value);
}


c1.addEventListener( 'change', function() {
     if(this.checked) {
         cbox1ip = ['S']; 
     }   
	 else
	     { cbox1ip = [''];}
});


c2.addEventListener( 'change', function() {
     if(this.checked) {
         cbox1ip = ['M']; 
     } 
	 else
	     { cbox1ip = [''];}
});

c3.addEventListener( 'change', function() {
     if(this.checked) {
         cbox1ip = ['L']; 
     }   
	 else
	     { cbox1ip = [''];}
});


c4.addEventListener( 'change', function() {
     if(this.checked) {
         cbox2ip = ['Black']; 
     }
 	 else
         { cbox2ip = [''];}
});


c5.addEventListener( 'change', function() {
     if(this.checked) {
         cbox2ip = ['Red']; 
     } 
	else
	     { cbox2ip = [''];}
});

c6.addEventListener( 'change', function() {
     if(this.checked) {
         cbox2ip = ['Blue']; 
     }
	 else
    	{ cbox2ip = [''];}
});





function apirecall(){
     root.innerHTML = "";



     const container = document.createElement('div')
     container.setAttribute('class', 'container')
     root.appendChild(container)

 

     var request = new XMLHttpRequest()
     request.open('GET', 'https://5f74013db63868001615fe76.mockapi.io/api/v1/products', true)
     request.onload = function () {
  
         var data = JSON.parse(this.response)
  
         if (request.status >= 200 && request.status < 400) {
             data.products.forEach((product) => {
		         const card = document.createElement('div')
                 card.setAttribute('class', 'card')
                 var h3;
	             var p;
	             var img;
      		
		        
				 if((product.name.includes(targetstring))  
				 && ((product.color.includes(cbox2ip[0])) || (cbox2ip[0] == ['']))
			     && ((product.size.includes(cbox1ip[0])) || (cbox1ip[0] == [''])))
				 { 
				     
	   
					 h3 = document.createElement('h3')
					 h3.textContent = product.name
					

					 p = document.createElement('p')
					 product.brand = product.brand  
					 product.Price = product.Price
					 product.rating = product.rating
					 p.textContent = `${product.brand}   $${product.Price} ${product.rating}Stars`
	  
					 img = document.createElement("IMG")
				     img.setAttribute("src",product.image)
				     img.setAttribute("width", "240");
                     img.setAttribute("height", "228");
	  
                     container.appendChild(card)
                     card.appendChild(img)
	                 card.appendChild(h3)
	                 card.appendChild(p) 
                     		 
		         }
	 
                })
            } 
		 else 
		 {
             const errorMessage = document.createElement('error')
             errorMessage.textContent = `error!`
             root.appendChild(errorMessage)
         }
     }

     request.send()
     }
apirecall()