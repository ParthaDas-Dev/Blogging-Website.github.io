//jquery
//Declaring Some Variables Globally
let news = document.querySelectorAll('.Ran-News');
let funny = document.querySelectorAll('.Ran-Fun');
let lifeStyle = document.querySelectorAll('.Ran-Life');
let travel = document.querySelectorAll('.Ran-Travel');
let tech = document.querySelectorAll('.Ran-tech');
let heading = document.getElementsByClassName('Rpost-Head')[0];




$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    $('.tooltipped').tooltip();

//Random Post
    $('#ALL').click(function(){
    
        for(i=0;i<1;i++){ 
        news[i].style.display ='block';
    }
      
    for(i=0;i<1;i++){ 
        funny[i].style.display ='block';
    }
    for(i=0;i<2;i++){ 
        tech[i].style.display ='block';
    }
    for(i=0;i<1;i++){ 
        travel[i].style.display ='block';
    }

    for(i=0;i<1;i++){ 
        lifeStyle[i].style.display ='block';
    }

    heading.innerHTML = 'Random Posts';

     });
     //function for Lifestyle
     $('#Life').click(function(){
    
        for(i=0;i<news.length;i++){ 
        news[i].style.display ='none';
    }
      
    for(i=0;i<funny.length;i++){ 
        funny[i].style.display ='none';
    }
    for(i=0;i<tech.length;i++){ 
        tech[i].style.display ='none';
    }
    for(i=0;i<travel.length;i++){ 
        travel[i].style.display ='none';
    }

    for(i=0;i<lifeStyle.length;i++){ 
        lifeStyle[i].style.display ='block';
    }
    let popular = document.getElementById('Popular-sec');
    popular.style.display = 'none';
    let lifeStyle_extra = document.getElementById('life-sec');
    lifeStyle_extra.style.display = 'block';
    heading.innerHTML = 'Lifestyle';
    
     });
     //Function for Funny
     $('#Fun').click(function(){
    
        for(i=0;i<news.length;i++){ 
        news[i].style.display ='none';
    }
      
    for(i=0;i<lifeStyle.length;i++){ 
        lifeStyle[i].style.display ='none';
    }
    for(i=0;i<tech.length;i++){ 
        tech[i].style.display ='none';
    }
    for(i=0;i<travel.length;i++){ 
        travel[i].style.display ='none';
    }
 
    for(i=0;i<funny.length;i++){ 
        funny[i].style.display ='block';
    }
    let popular1 = document.getElementById('popular-Sec2');
    popular1.style.display = 'none';
    let fun_extra = document.getElementById('Fun-Sec');
    fun_extra.style.display = 'block';
    heading.innerHTML = 'Funny';
   
     }); 

//Function For Travel
$('#Travel').click(function(){
    
    for(i=0;i<news.length;i++){ 
    news[i].style.display ='none';
}
  
for(i=0;i<lifeStyle.length;i++){ 
    lifeStyle[i].style.display ='none';
}
for(i=0;i<tech.length;i++){ 
    tech[i].style.display ='none';
}
for(i=0;i<funny.length;i++){ 
    funny[i].style.display ='none';
}

for(i=0;i<travel.length;i++){ 
    travel[i].style.display ='block';
}
let travel_extra = document.getElementById('travel-Sec');
    travel_extra.style.display = 'block';

heading.innerHTML = 'Travelling';

 }); 

  //Function for Tech
  $('#Tech').click(function(){
    
    for(i=0;i<news.length;i++){ 
    news[i].style.display ='none';
}
  
for(i=0;i<funny.length;i++){ 
    funny[i].style.display ='none';
}
for(i=0;i<lifeStyle.length;i++){ 
    lifeStyle[i].style.display ='none';
}
for(i=0;i<travel.length;i++){ 
    travel[i].style.display ='none';
}

for(i=0;i<tech.length;i++){ 
    tech[i].style.display ='block';
}
heading.innerHTML = 'Technology';
let social_media = document.getElementById('social-media');
social_media.style.display = 'none';
let popular2 = document.getElementById('popular-Sec3');
popular2.style.display = 'none';
let tech_extra = document.getElementById('tech-Sec');
    tech_extra.style.display = 'block';
 });


 //Function for News
  $('#News').click(function(){
    
    for(i=0;i<travel.length;i++){ 
        travel[i].style.display ='none';
    }
  
for(i=0;i<funny.length;i++){ 
    funny[i].style.display ='none';
}
for(i=0;i<lifeStyle.length;i++){ 
    lifeStyle[i].style.display ='none';
}
for(i=0;i<tech.length;i++){ 
    tech[i].style.display ='none';
}

for(i=0;i<news.length;i++){ 
    news[i].style.display ='block';
}
heading.innerHTML = 'News';
let news_extra = document.getElementById('news-Sec');
    news_extra.style.display = 'block';
 });

});


var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
    indicators:false,
    height:500,
    duration:500,
    inteval:6000
})

function popup(){
    swal("Currently Unavailable!", "We Apologize For The Inconvenience..", "warning");
}

function emailval(){
    let email = document.getElementById('email');
    let email_val = email.value;
    let test_email = /^([a-z A-Z 0-9 \.-]+)@([a-z A-Z 0-9 -]+).([a-z]).([a-z])?$/;
    if(email_val == ''){
        email.placeholder = "Email Field Can't Be Empty";
    swal("Empty Email!", "Enter A Proper Email Address", "warning");
    return false;
    }
  else if(!test_email.test(email_val)){
    swal("Invalid Email Address!", "Enter A Valid Email Address", "error");
    return false;
  }
  else{
    swal("Well Done!", "Sucessfully Subscribed", "success");
    return true;
  }
}

//Animate On Scroll
AOS.init();