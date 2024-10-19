const bodyE1 =document.querySelector("body") // this is js method that help to rturn element in the js with out using any id or class

bodyE1.addEventListener("mousemove",(event)=>{   // addEventListener  help in the capture the event of mouse movement by calling giving the mousemove attribut
    const xPos = event.offsetX;                  // this event is capture by the function then it stores in the const by values of X and Y axise of mouse 
    const yPos = event.offsetY;
    const spanE1 = document.createElement("span"); // it creat the span element in the html doc by using createElement 
    spanE1.style.left = xPos+"px";                   //this span tag styles span 
    spanE1.style.top = yPos+"px";
    const size = Math.random()*100;                // it help in the decresa size of hart by crating randam number
    spanE1.style.width = size + "px";
    spanE1.style.height = size + "px";
    bodyE1.appendChild(spanE1);                     //it appand tha sapn in body tag of html by appendChild method

    setTimeout(() =>{
        spanE1.remove();                   // it will set time out to the heart afert that it will remove
    },3000)
})