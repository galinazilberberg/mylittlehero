import sel from '../../data/selectors';
import {name, gender, age,story, images} from '../../data/testData';
import {inputValues4,uploadingImage} from "../../helpers/methods";
import exp from '../../data/expected.json'

const path = require('path');
describe('Image field testing', function () {

    before('Open App', function() {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    it('TC - 105 Placeholder field name = "Click or drag and drop"', function () {
        const image = $(sel.image).getText();
        expect(image).toEqual(exp.imagePlaceholder);
    });

    it('TC- 106 Preview is appeared with jpeg 2MB', function () {
        uploadingImage(images.jpeg2);
        $(sel.imagePreview).waitForDisplayed();
        const imagePreview = $(sel.imagePreview).isDisplayed();
        expect(imagePreview).toEqual(true);
    });
});

// describe('Image', function () {
//     before('Open App', function () {
//         browser.url('');
//     });
//     beforeEach(() => {
//         browser.refresh();
//     });
//     // SHOW ELEMENT
//     function makeElVisible(element) {
//         browser.execute(function (el)  {
//             el.style.display = '';
//         }, element);
//     }
//     it('TC - 777 Upload image to Story page', function () {
//         inputValues4(name.oneSymbol, gender.she, age.default, story.comedy);
//         // $(sel.name).setValue(name.default);
//         // $$(sel.radioButtons)[gender.she].click();
//         // $(sel.age).setValue(age.default);
//         // $(sel.storyType).click();
//         // $$(sel.storyList)[story.comedy].click();
//
//         const filePath = path.join(__dirname, '../../data/image.jpg');
//         const inputUpload = $('.ant-upload input');
//         makeElVisible(inputUpload);
//         inputUpload.waitForDisplayed();
//         inputUpload.setValue(filePath);
//
//         const createBtn = $(sel.submit);
//         createBtn.click();
//         browser.pause(5000);
//     });
// });


// describe('Image', function () {
//     before('Open App', function () {
//         browser.url('');
//     });
//     beforeEach(() => {
//         browser.refresh();
//     });
//     // SHOW ELEMENT
//     function makeElVisible(element) {
//         browser.execute(function (el)  {
//             el.style.display = '';
//         }, element);
//     }
//     it('TC - 778 Upload image to Input page', function () {
//         const filePath = path.join(__dirname, '../../data/image.jpg');
//         const inputUpload = $('.ant-upload input');
//         makeElVisible(inputUpload);
//         inputUpload.waitForDisplayed();
//         inputUpload.setValue(filePath);
//
//         const createBtn = $(sel.submit);
//         createBtn.click();
//         browser.pause(5000);
//     });
// });
