import sel from '../../data/selectors';
import {name,gender,age,story} from '../../data/testData';
import inputValues4 from '../../helpers/methods';
import path from 'path';

describe('Story Elements Exist', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    it('TC-159 The Window Header exist on story page = "My little Hero', function () {

        inputValues4(name.default, gender.she, age.default, story.comedy);
        $(sel.submit).click();
        let header = $(sel.header).isDisplayed();
        expect(header).toEqual(true);
    });
    it('TC-160 Story Title exist on story page = "XXX A Lady Bug', function () {

        inputValues4(name.default, gender.she, age.default, story.comedy);
        $(sel.submit).click();
        let storyTitle = $(sel.storyTitle).isDisplayed();
        expect(storyTitle).toEqual(true);
    });

    it('TC-161 Story text is appeared in the story field', function () {

        inputValues4(name.default, gender.she, age.default, story.comedy);
        $(sel.submit).click();
        let storyText = $(sel.storyText).isDisplayed();
        expect(storyText).toEqual(true);
    });
    it('TC-162 Story Moral exists with announcement "Moral"', function () {

        inputValues4(name.default, gender.she, age.default, story.comedy);
        $(sel.submit).click();
        let moralText = $(sel.storyMoral).isDisplayed();
        expect(moralText).toEqual(true);
    });

    it('TC-171 Reset button "Try again!" exists at the bottom of Story Window and is always active.', function () {

        inputValues4(name.default, gender.she, age.default, story.comedy);
        $(sel.submit).click();
        let tryAgainBtn = $(sel.tryAgain).isEnabled();
        expect(tryAgainBtn).toEqual(true);

    });
    it('TC-172 Click on the Reset Button "Try again!" would result in clearing all fields in Application', function () {

        inputValues4(name.default, gender.she, age.default, story.comedy);
        $(sel.submit).click();
        let refresh = $(sel.tryAgain).click();
        expect(browser).toHaveUrl('https://qa-apps.netlify.app/hero/fix#');

    });

    // it('TC-164 Image not uploaded=empty circle"', function () {
    //     browser.url('');
    //     inputValues4(name.default, gender.she, age.default, story.comedy);
    //     const filepath = path.join(__dirname,'../../data/image.jpg');
    //     const remoteFilePath = browser.uploadFile(filepath);
    //
    //     browser.execute(function () {
    //         document.getElementsByTagName("input")[6].style.display = 'block'
    //     });
    //     $(sel.image).waitForDisplayed();
    //     $(sel.image).setValue(remoteFilePath);
    //
    // });


    // it('TC-163 Image exist"', function () {
    //     browser.refresh();
    //
    //     $(sel.name).setValue('LadyBug007');
    //     $$(sel.radioButtons)[1].click();
    //     $(sel.age).setValue('1234567890');
    //     $(sel.storyType).click();
    //     $$(sel.storyList)[6].click();
    //     $(sel.image).click();
    //
    //     const path =  require('path');
    //     const filePath = path.join(__dirname, '/Users/galinazilberberg/WebstormProjects/MLH/data/imageStory.jpeg');
    //     $(sel.image).setValue(filePath);
    //     $(sel.submit).click();
    //
    //     let storyImage = $(sel.storyImage).isDisplayed();
    //     expect(storyImage).toEqual(true);
    //
    // });

    it('TC-183 Story contains the entered name (LadyBug007)', function () {

        inputValues4(name.default, gender.she, age.default, story.comedy);
        $(sel.submit).click();
        const heroName = $(sel.storyText);
        expect(heroName).toHaveTextContaining([name.default]);
    });

    it('TC-184 The word "year" is present when age = 1', function () {

        inputValues4(name.default, gender.she, age.oneDigit, story.comedy);
        $(sel.submit).click();
        const heroGender = $(sel.storyText);
        expect(heroGender).toHaveTextContaining('year');
    });

    it('TC-204 The word "years" is present when age > 1', function () {

        inputValues4(name.default, gender.she, age.default, story.comedy);
        $(sel.submit).click();
        const heroYears = $(sel.storyText);
        expect(heroYears).toHaveTextContaining('years');
    });

    it('TC-204a Correct input = age in text', function () {

        inputValues4(name.default, gender.she, age.default, story.comedy);
        $(sel.submit).click();
        const heroYears = $(sel.storyText);
        expect(heroYears).toHaveTextContaining([age.default]);
    });


    it('TC-186 Gender at the text matches the selected gender "She"', function () {
        inputValues4(name.default, gender.she, age.default, story.comedy);
        $(sel.submit).click();
        const heroYears = $(sel.storyText);
        expect(heroYears).toHaveTextContaining('She');
    });

    it('TC-187 Gender at the text matches the selected gender "He"', function () {
        inputValues4(name.default, gender.he, age.default, story.comedy);
        $(sel.submit).click();
        const heroYears = $(sel.storyText);
        expect(heroYears).toHaveTextContaining('He');
    });

    it('TC-188 Gender at the text matches the selected gender "He"', function () {
        inputValues4(name.default, gender.it, age.default, story.comedy);
        $(sel.submit).click();
        const heroYears = $(sel.storyText);
        expect(heroYears).toHaveTextContaining(['It','Our hero']);
    });

    it('TC-192 Moral corresponds to the story (Comedy)', function () {
        inputValues4(name.default, gender.it, age.default, story.comedy);
        $(sel.submit).click();
        const moral = $(sel.storyMoral);
        expect(moral).toHaveTextContaining('Moral');
    });


});