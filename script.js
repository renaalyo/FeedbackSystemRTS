
function getRating(){
    
    let textToCopy = document.getElementById("dynamicText").textContent;

    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy)
            .then(function () {
                document.getElementById("copyMessage").textContent = "Text Copied";
            })
            .catch(function (error) {
                console.error("Unable to copy text: ", error);
            });
    }
}
const text = [
    "He have awful skills",
    "He have not good skills",
    "He have ok skills",
    "He have good skills",
    "He have excellent skills"
    //TODO:rewrite the text
]

function displayText(index){
    document.getElementById("dynamicText")
    .textContent = text[index];
}

