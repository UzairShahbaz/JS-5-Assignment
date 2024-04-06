
// Clear Input
document.getElementById("clearInput").onclick = function () {
    document.getElementById("inputText").innerHTML = ""
}
//  Clear Output
document.getElementById("ClearOutput").onclick = function () {
    document.getElementById("Output").innerHTML = ""
}

var originalText = "  I love my country Pakistan <br>I like my city Faisalabad <br>I love my Homeland "
var cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Sargodha', 'Sheikhupura', 'Kashmir'];
// lowerCase 
function lowerCase(){
    let lowerCaseText = originalText.toLowerCase();
    document.getElementById("Output").innerHTML=lowerCaseText;
}

// upperCase 
function upperCase(){
    let upperCaseText = originalText.toUpperCase();
    document.getElementById("Output").innerHTML=upperCaseText;
}

// capitalize 
function capitalize(){
     document.getElementById("Output").style.textTransform ="capitalize"
     document.getElementById("Output").innerHTML=originalText
}
// formating
function formating(){
    let text = document.getElementById("inputText").value
    if(!text){
    alert("Enter the Text You want to Format")
    return
}
text=text.toLowerCase()
document.getElementById("Output").style.textTransform ="capitalize"
document.getElementById("Output").innerHTML=text
}




// print city 

function printCity(){
        for (let i=0; i<cities.length; i++){
            document.getElementById("Output").innerHTML += i+1 +") " + cities[i] + "<br />"
        }
    
}

// add city
function addCity(){
    let city= document.getElementById("inputText").value;
    if(!city){
        alert("Please Enter Your City Name")
        return
       }

       let cityFirstLetter = city.slice(0, 1).toUpperCase();
       console.log(cityFirstLetter);
       let cityAllLetters = city.slice(1).toLowerCase();
       console.log(cityAllLetters);

       let cityWordInCapitalize = cityFirstLetter + cityAllLetters;
       console.log(cityWordInCapitalize)

       let isCityFound = false;
       for (let i = 0; i < cities.length; i++) {
           if (cities[i] === cityWordInCapitalize) {

               isCityFound= true
               let html = '<span style="color: red; font-size: 20px;">"' + cityWordInCapitalize + '"</span> is already in list.';
               document.getElementById("Output").innerHTML = html;
           }
       }

       if (isCityFound=== false) {

           cities.push(cityWordInCapitalize);
           let html = '<span style="color: green; font-size: 20px;">"' + cityWordInCapitalize + '"</span> has been successfully added into list.&#x1F496;';
           document.getElementById("Output").innerHTML = html;
       }

   }

 
    // Check City In The List 
    function checkCity() {
        let city = document.getElementById("inputText").value;
         
        if (!city) {
        alert("Pleace type your city name")
    return;
    }

    cityFirstLetter = city.charAt(0).toUpperCase();
    cityAllLetters = city.slice(1).toLowerCase();

    cityWordInCapitalize = cityFirstLetter + cityAllLetters;

    let cityFound = false;

    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === cityWordInCapitalize) {
            cityFound = true;
            let html = '<span style="color: green; font-size: 20px;">"' + cityWordInCapitalize + '"</span> found in list. &#128151;';
            document.getElementById("Output").innerHTML = html;
        }
    }

    if (cityFound === false) {
        let html = "SORRY &#128524; We couldn't find your city <span style='color: red; font-size: 20px;'>" + '"' + cityWordInCapitalize + '"</span>';
        document.getElementById("Output").innerHTML = html;
    }
  }

//   Find the word 
function findWord() {

let newOriginalText = originalText.toLowerCase();
let word = document.getElementById("inputText").value;

    if (!word) {
 alert('Pleace type a word you want to find');
 return;
    }

    word = word.toLowerCase();
let findWord = newOriginalText.indexOf(word);
console.log(findWord)

    if (findWord !== -1) {
        let html = 'Your word <span style="color: green; font-size: 18px;">"' + word + '" </span>&#128151; found at index:  ' + findWord;
        document.getElementById("Output").innerHTML = html;
    } else {
        let html = 'Your word <span style="color: red; font-size: 18px;">"' + word + '" </span> does not exist in the Original String &#128524;';
        document.getElementById("Output").innerHTML = html;
    }
}

// Replace word in the original string
function replaceWord() {
    
    let newOriginalText = originalText.toLocaleLowerCase();

    let word = document.getElementById("inputText").value;
    if(!word){
        alert("Please Type a word that you want to replace with another word")
    }

    let replaceWith = prompt('Enter a word that you want to replace with :' + word );
    if (!replaceWith) {
        alert('Please type a word to replace it with ' + word + ".");
return;
    }
    
    word = word.toLowerCase();
    word = new RegExp(word, 'g')
    
   replaceWith =replaceWith.toLowerCase();

    let replacedWord = newOriginalText.replaceAll(replaceWith, word);

    document.getElementById("Output").innerHTML = replacedWord;

  
}
//  Clear Output
document.getElementById("ClearOutput").onclick = function () {
    document.getElementById("Output").innerHTML = ""
    Toastify({
        text: "Output has been cleared",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    
}





       






