import sel from "../data/selectors";
const path = require('path');

function inputValues4 (name, gender, age, story) {
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
    }

    function clearInput() {
        let el = $(sel.age).getValue();
        for (let i = 0; i < el.length; i++)
            $(sel.age).keys(['Backspace']);
    }

    function clearName() {
        let el = $(sel.name).getValue();
        for (let i = 0; i < el.length; i++)
            $(sel.name).keys(['Backspace']);
    }

    function uploadingImage(image) {
    const inputDiv = $(sel.imageUpload);
    const filePath = path.join(__dirname, image);
    browser.execute(function () {
        document.getElementsByTagName("input")[6].style.display = 'block';
    });
    inputDiv.waitForDisplayed();
    inputDiv.setValue(filePath);
    // $(sel.imagePreview).waitForDisplayed();
}

// function inputValues5 (name, gender, age, story, image){
//     $(sel.name).setValue(name);
//     $$(sel.radioButtons)[gender].click();
//     $(sel.age).setValue(age);
//     $(sel.story).click();
//     $$(sel.storyList)[story].click();
// }

module.exports = {inputValues4,clearName, clearInput, uploadingImage};

//function uploadingImage() {
//       const inputDiv = $(sel.imageUpload);
//         const filePath = path.join(__dirname, '../../data/photos/jpeg180KB.jpeg');
//         function makeElVisible(element) {
//             browser.execute(function (el)  {
//                 el.style.display = '';
//             }, element);
//         }
//        makeElVisible(inputDiv);
//         browser.pause(2000);
//         inputDiv.waitForDisplayed();
//         inputDiv.setValue(filePath);
//         $(sel.imagePreview).waitForDisplayed();
//}


