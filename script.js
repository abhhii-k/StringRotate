

    let submitBtn = document.querySelector(".subbtn");
    let inputbox = document.querySelector(".gt");
    let displyBox  = document.querySelector(".display")
    let rightRotateBtn = document.querySelector(".right");
    let leftRotateBtn = document.querySelector(".left");

    let displayTwo = document.querySelector(".displayTwo")

    let userString ="";

    rightRotateBtn.onclick = rotate;
    leftRotateBtn.onclick = rotate;


    submitBtn.onclick = function(){
        userString = inputbox.value
        displyBox.innerHTML = `<h1>${userString}</h1>`;
        displayTwo.innerHTML = update(userString);
        console.log(displayTwo.innerText)

    }

    // let flexstart = "flexstart"
    // let flexend = "flexend"
    let word = "";
    function rotate(e){
        if(e.target.innerText==">"){
            userString = rotateRightOnce(userString);
            displyBox.innerHTML = `<h1>${userString}</h1>`;
            displayTwo.innerHTML = update(userString);
            addClass("moveRight")
            // addflex("flexstart");
            word= "flexstart"
            // displayTwo.classList.add(flexstart)
        }
        else{
            userString = rotateLeftOnce(userString);
            displyBox.innerHTML = `<h1>${userString}</h1>`;
            displayTwo.innerHTML = update(userString);
            addClass("moveLeft");
            // addflex("flexend");
            word = "flexend"
            // displayTwo.classList.add(flexend)
        }
        addflex(word);

        console.log(userString)
    }

    function addflex(f){
        let flexbox = document.querySelector(".display_Two")
        flexbox.classList.add(f)
        classList.rem

    }
    
    function rotateRightOnce(s){
        return  s.slice(1)+s[0];
        
    }
    
    function rotateLeftOnce(s){
        return s.slice(-1)+s.slice(0,-1);
    }
    
    function update(s){
        let letters = Array.from(s);
        let res = "";
        for(let letter of letters){
            res += `<div class="letter"><h1>${letter}</h1></div>`
        }

        // return res;
        return `<div class="display_Two">${res}</div>`;


    }



    function addClass(className){
    let letterBoxes = document.querySelectorAll(".letter")
    for(let letterBox of letterBoxes){
        letterBox.classList.add(className)
    }
    
}



