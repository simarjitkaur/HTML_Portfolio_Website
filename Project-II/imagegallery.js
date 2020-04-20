    var i=1;var j=0;var c=0;
    
    //put all images in an array
    var imgArr =["img1.jpg", "img2.jpg", "img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg","img9.jpg","img10.jpg","img11.jpg","img12.jpg","img13.jpg","img14.jpg","img15.jpg","img16.jpg","img17.jpg","img18.jpg","img19.jpg","img20.jpg","img21.jpg","img22.jpg","img23.jpg","img24.jpg","img25.jpg","img26.jpg","img27.jpg","img28.jpg","img29.jpg","img30.jpg"]; 
    var counter=0;
    var oldimg="";
    var oldbtn="";
    
    //send clicked image to the top of all images
    function sendImageToTop(x){
        
         var image1=0;
         var image2=imgArr.indexOf(x);
         var replace=imgArr[image1];
         imgArr[image1]=imgArr[image2];
         imgArr[image2]=replace;
         showImages();
         
     }

     //send clicked image to the bottom of all images
     function sendImageToBottom(x){
         var image1=29;
         var image2=imgArr.indexOf(x);
         var replace=imgArr[image1];
         imgArr[image1]=imgArr[image2];
         imgArr[image2]=replace;
         showImages();
     }

     //send the image one step ahead
     function sendImageToLeft(x){

        var image1=imgArr.indexOf(x);
        var image2=image1-1;
        console.log(x);
        if(image1!=0)
        {
        var temp=imgArr[image1];
        imgArr[image1]=imgArr[image2];
        imgArr[image2]=temp;
        showImages();
        }
     }

     //send the image one step back
     function sendImageToRight(x){
        var image1=imgArr.indexOf(x);
        var image2=image1+1;
        console.log(x);
        if(image1<=28)
        {
        var temp=imgArr[image1];
        imgArr[image1]=imgArr[image2];
        imgArr[image2]=temp;
        showImages();
        }

     }


    // show all images 
    function showImages(){
    var divid="";
    var imgid="";
    var sizebtnid="";
    var topbtnid="";
    var bottomid="";
    var leftid="";
    var rightid="";
    var childid="";
    i=1;
    
    document.getElementById("main").innerHTML="";

    while(i<=imgArr.length)
    {            
           
         
            divid="div"+i;
            imgid="img"+i;
            sizebtnid="size"+i;
            topbtnid="topbtn"+i;
            bottomid="bottombtn"+i;
            leftid="leftbtn"+i;
            rightid="rightbtn"+i;
            childid="child"+i;
            linkimg=imgArr[i-1];
            var snippet = `<br>
                
            <div id="${divid}" class="parentdiv"  onmouseover="displayButton(${childid})" onmouseout="displayHide(${childid})">
                <img id="${imgid}" src="${"./images/"+linkimg}"  width="400px" height="400px">
                <br>
                <div id="${childid}" class="childdiv">
                    <button id="${sizebtnid}" onclick="resizeImage(${imgid},${sizebtnid})">Medium</button>&nbsp;
                    <button id="${topbtnid}" onclick="sendImageToTop('${linkimg}')">Top</button>&nbsp;
                    <button id="${bottomid}" onclick="sendImageToBottom('${linkimg}')">Bottom</button>&nbsp;
                    <button id="${leftid}" onclick="sendImageToRight('${linkimg}')">Right</button>&nbsp;
                    <button id="${rightid}" onclick="sendImageToLeft('${linkimg}')">Left</button>
                </div>
            </div>
            
             `;
             i++;
           
             document.getElementById("main").innerHTML += snippet; 
                  
    }
    }
    
    //display button on image
    function displayButton(x){
      console.log(x.id);
           var divdom= document.getElementById(x.id);
           divdom.style.opacity=1;  
             
    }
    //hide button from image
    function displayHide(x){
           var divdom= document.getElementById(x.id);
           divdom.style.opacity=0;  
               
    }

    //change size of images

    function resizeImage(x,y){

         // var imgdom= document.getElementById(x.id);
         // imgdom.style.width="700px";
        //  imgdom.style.width="700px"; 

        var imgdom=document.getElementById(x.id);
        var btndom=document.getElementById(y.id);

    if(oldimg!="")
    {
        if(oldimg!=imgdom)
        {
             oldbtn.innerHTML="Medium";    
             oldimg.style.width="400px";
             oldimg.style.height="400px";
             counter=0;
        }
    }
    oldimg=imgdom;
    oldbtn=btndom;

    if(counter==0)
    {  
       btndom.innerHTML="Large";
       imgdom.style.width="800px";
       imgdom.style.height="300px";      
       counter=1;
    }
    else if(counter==1)
    {
        btndom.innerHTML="Small";    
        imgdom.style.width="1000px";
        imgdom.style.height="500px";
        counter=2;
    }
    else if(counter==2)
    {
        counter=0;    
        btndom.innerHTML="Medium";    
        imgdom.style.width="400px";
        imgdom.style.height="400px";
       
    }
    imgdom.style.transition="width 3s,height 3s";
                         
    }