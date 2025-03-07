document.getElementById("mainButton").addEventListener("click",function(){
    window.location.href = "homepage.html";
});

document.getElementById("button-one").addEventListener("click",function(){
    alert("Board updated  successfully");});
document.getElementById("button-two").addEventListener("click",function(){
    alert("Board updated  successfully");});
document.getElementById("button-three").addEventListener("click",function(){
    alert("Board updated  successfully");});
document.getElementById("button-four").addEventListener("click",function(){
    alert("Board updated  successfully");});
document.getElementById("button-five").addEventListener("click",function(){
    alert("Board updated  successfully");});
document.getElementById("button-six").addEventListener("click",function(){
    alert("Board updated  successfully");});
    function adjustNumber() {
        let leftNumElement = document.getElementById("leftNumber");
        let rightNumElement = document.getElementById("rightNumber");
        
        let leftCurrentNumber = parseInt(leftNumElement.innerText);
        let rightCurrentNumber = parseInt(rightNumElement.innerText);

        
        if ( leftCurrentNumber && rightCurrentNumber > 0) {
            leftNumElement.innerText = leftCurrentNumber - 1;
            rightNumElement.innerText = rightCurrentNumber + 1;
        document.getElementById("button-one").disabled = true;
        let currentTime = new Date().toLocaleTimeString();
                let newText = document.createElement("div");
                newText.classList.add("text-box");
                newText.innerHTML = `<span>${currentTime}</span> <Span>my name is priya</span>`;
                textDisplay1.appendChild(newText);
        
        }
    }
    function secondNumber() {
            let leftNumElement = document.getElementById("leftNumber");
            let rightNumElement = document.getElementById("rightNumber");
            
            let leftCurrentNumber = parseInt(leftNumElement.innerText);
            let rightCurrentNumber = parseInt(rightNumElement.innerText);
    
            
            if ( leftCurrentNumber && rightCurrentNumber > 0) {
                // Decrease the number on the left side
                leftNumElement.innerText = leftCurrentNumber - 1;
                
                // Increase the number on the right side (simultaneously)
                rightNumElement.innerText = rightCurrentNumber + 1;
            
            
            document.getElementById("button-two").disabled = true;
            let currentTime = new Date().toLocaleTimeString();
                let newText = document.createElement("div");
                newText.classList.add("text-box");
                newText.innerHTML = `<span>${currentTime}</span> <Span>my name is priya</span>`;
                textDisplay2.appendChild(newText);
                
                
                 
            }
        }
        function thirdNumber() {
            let leftNumElement = document.getElementById("leftNumber");
            let rightNumElement = document.getElementById("rightNumber");
            
            let leftCurrentNumber = parseInt(leftNumElement.innerText);
            let rightCurrentNumber = parseInt(rightNumElement.innerText);
    
            
            if ( leftCurrentNumber && rightCurrentNumber > 0) {
                leftNumElement.innerText = leftCurrentNumber - 1;
                rightNumElement.innerText = rightCurrentNumber + 1;
            document.getElementById("button-one").disabled = true;
            let currentTime = new Date().toLocaleTimeString();
                    let newText = document.createElement("div");
                    newText.classList.add("text-box");
                    newText.innerHTML = `<span>${currentTime}</span> <Span>my name is priya</span>`;
                    textDisplay3.appendChild(newText);
            
            }
        }
        function fourthNumber() {
            let leftNumElement = document.getElementById("leftNumber");
            let rightNumElement = document.getElementById("rightNumber");
            
            let leftCurrentNumber = parseInt(leftNumElement.innerText);
            let rightCurrentNumber = parseInt(rightNumElement.innerText);
    
            
            if ( leftCurrentNumber && rightCurrentNumber > 0) {
                leftNumElement.innerText = leftCurrentNumber - 1;
                rightNumElement.innerText = rightCurrentNumber + 1;
            document.getElementById("button-one").disabled = true;
            let currentTime = new Date().toLocaleTimeString();
                    let newText = document.createElement("div");
                    newText.classList.add("text-box");
                    newText.innerHTML = `<span>${currentTime}</span> <Span>my name is priya</span>`;
                    textDisplay4.appendChild(newText);
            
            }
        }  
        function fifthNumber() {
            let leftNumElement = document.getElementById("leftNumber");
            let rightNumElement = document.getElementById("rightNumber");
            
            let leftCurrentNumber = parseInt(leftNumElement.innerText);
            let rightCurrentNumber = parseInt(rightNumElement.innerText);
    
            
            if ( leftCurrentNumber && rightCurrentNumber > 0) {
                leftNumElement.innerText = leftCurrentNumber - 1;
                rightNumElement.innerText = rightCurrentNumber + 1;
            document.getElementById("button-one").disabled = true;
            let currentTime = new Date().toLocaleTimeString();
                    let newText = document.createElement("div");
                    newText.classList.add("text-box");
                    newText.innerHTML = `<span>${currentTime}</span> <Span>my name is priya</span>`;
                    textDisplay5.appendChild(newText);
            
            }
        }    
        function sixthNumber() {
            let leftNumElement = document.getElementById("leftNumber");
            let rightNumElement = document.getElementById("rightNumber");
            
            let leftCurrentNumber = parseInt(leftNumElement.innerText);
            let rightCurrentNumber = parseInt(rightNumElement.innerText);
    
            
            if ( leftCurrentNumber && rightCurrentNumber > 0) {
                leftNumElement.innerText = leftCurrentNumber - 1;
                rightNumElement.innerText = rightCurrentNumber + 1;
            document.getElementById("button-one").disabled = true;
            let currentTime = new Date().toLocaleTimeString();
                    let newText = document.createElement("div");
                    newText.classList.add("text-box");
                    newText.innerHTML = `<span>${currentTime}</span> <Span>my name is priya</span>`;
                    textDisplay6.appendChild(newText);
            
            }
        }      
    
    
    function clearAll() {
        let textDisplay2 = document.getElementById("textDisplay2");
        textDisplay2.innerHTML = "";
        textDisplay1.style.display = "none";  
        textDisplay2.style.display = "none"; 
        textDisplay3.style.display = "none";
        textDisplay4.style.display = "none";  
        textDisplay5.style.display = "none"; 
        textDisplay6.style.display = "none";
    }

       