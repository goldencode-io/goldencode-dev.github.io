console.log("start")

function search2(){
   
    var search = document.getElementById("searchInput").value;

    
    document.getElementById("txtSearch").innerHTML = "جستجو : "+search;
    
    



}


function search3(){
   
    var search = document.getElementById("searchInput2").value;

    
    document.getElementById("txtSearch").innerHTML = "جستجو : "+search;
    if (search == "پایتون"){
        
        setTimeout(function() {
            document.getElementById("ai").style.display = "none";
            document.getElementById("python").style.display = "flex";    
          }, 1000);
    }if (search == "هوشمصنوعی"){
        setTimeout(function() {
            document.getElementById("python").style.display = "none";
            document.getElementById("ai").style.display = "flex";    
          }, 1000);
    }else{
        document.getElementById("python").style.display = "none";
        document.getElementById("ai").style.display = "none";    
    }

}



