//FAIRUZ ELQI MOCHAMMAD
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

//CAROUSEL
document.getElementById("satu").style.display = "block";
document.getElementById("dua").style.display = "none";
document.getElementById("dot-1").style.background = "gray";
nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
  document.getElementById("satu").style.display = "none";
  document.getElementById("dua").style.display = "block";
  document.getElementById("dot-1").style.background = "none";
  document.getElementById("dot-2").style.background = "gray";
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
  document.getElementById("dua").style.display = "none";
  document.getElementById("satu").style.display = "block";
  document.getElementById("dot-1").style.background = "gray";
  document.getElementById("dot-2").style.background = "none";
});

//NAVBAR HOVER
document.addEventListener("DOMContentLoaded", function(){
    if (window.innerWidth > 992) {
    
        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
            everyitem.addEventListener('mouseover', function(e){
    
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }
    
            });
            everyitem.addEventListener('mouseleave', function(e){
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }
    
    
            })
        });
    
    }
    }); 

//FORM SUBMISSION
function validate(){
    var w = document.validasi.name.value;
    var x = document.validasi.email.value;
    var y = document.validasi.message.value;
    var status = false;
    if(w.length<1){
        document.getElementById("nameloc").innerHTML="This field is required"
        status = false;
    }else{
        document.getElementById("nameloc").innerHTML="";
        status = true;
    }

    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        document.getElementById("emailloc").innerHTML = "Invalid Email Address";  
        status = false;  
    }
    else{
        document.getElementById("emailloc").innerHTML="";
    } 
    
    if(y.length<1){
        document.getElementById("messageloc").innerHTML="This field is required";
        status = false;
    }else{
        document.getElementById("messageloc").innerHTML="";
    }
    return status;

}

