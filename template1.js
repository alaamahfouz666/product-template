

document.addEventListener("DOMContentLoaded", function() {

        var  colLinks = document.querySelectorAll(".color-link");
        var imglinks=document.getElementById("sample");
        var imgdiv=document.getElementById("prodimg");
        var proddesc=document.getElementById("proddes");
        var icrec=document.getElementById("rev-ic");
        var butrev=document.getElementById("rev-but");
    colLinks.forEach(link => {

        link.addEventListener("click",function(event){
            
            event.preventDefault();

            colLinks.forEach(link => link.classList.remove("active"));

            this.classList.add("active");

            imglinks.src=this.href;
        });

    });

        butrev.addEventListener("click", function ()
        {
            if(icrec.className=="fa fa-heart-o")
            icrec.className="fa fa-heart";
            else if(icrec.className=="fa fa-heart")
            icrec.className="fa fa-heart-o";
        })

        
    imgdiv.addEventListener("mouseenter", function (event)
    {
        proddesc.style.transform= "translate(6vw,0)";
        proddesc.style.transitionDuration= "0.5s";
        proddesc.style.transitionTimingFunction= "ease-in";


    })

    let timeOutId;

    
    
    imgdiv.addEventListener("mouseleave", function (event)
    {   
        
        proddesc.style.transform= "translate(0,0)";
        proddesc.style.transitionDuration= "0.5s";
        proddesc.style.transitionTimingFunction= "ease-out";
        
    })


    });

