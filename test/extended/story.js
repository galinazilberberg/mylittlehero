import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, story, labels} from '../../data/testData';
import inputValue4 from'../../helpers/methods';

describe('Age field suit', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Placeholder', function () {

        it('TC - 072 Story Type placeholder = "Type of the story"" ', function () {
            let placeholder = $(sel.storyTypeSel).getText();
            expect(placeholder).toEqual(exp.storyPlaceholder);
        });
    describe('Positive cases', function () {


        it('TC - 073 The Story Type field is a dropdown and the expanded list exists ', function () {
            $(sel.storyType).click();
            let dropDownMenu = $(sel.dropDownMenu).isDisplayed();
            browser.pause(2000);
            expect(dropDownMenu).toEqual(true);
        });

        // it.('TC - 074 Labels on the expanded list exist and = "Overcoming the Monster", "Rebirth" , "Quest", "Journey and Return", "Rags and Riches", "Tragedy", "Comedy". ', function () {
        //     $(sel.storyType).click();
        //     let dropDownMenu = $(sel.dropDownMenu).isDisplayed();
        //     browser.pause(2000);
        //
        // });

        it('TC - 075 Label "Overcoming the Monster" is correct ', function () {
            $(sel.storyType).click();
            let dropDownMenu = $(sel.dropDownMenu).isDisplayed();
            browser.pause(2000);
            let firstStoryType = $$('.ant-select-item-option-content')[0].getText();
            expect(firstStoryType).toEqual('Overcoming the Monster');
        });

        it('TC - 076 Label "Rebirth"  is correct', function () {
            $(sel.storyType).click();
            let dropDownMenu = $(sel.dropDownMenu).isDisplayed();
            browser.pause(2000);
            let secondStoryType = $$('.ant-select-item-option-content')[1].getText();
            expect(secondStoryType).toEqual('Rebirth');
        });

        it('TC - 077 Label "Quest"  is correct', function () {
            $(sel.storyType).click();
            let dropDownMenu = $(sel.dropDownMenu).isDisplayed();
            browser.pause(2000);
            let thirdStoryType = $$('.ant-select-item-option-content')[2].getText();
            expect(thirdStoryType).toEqual('Quest');
        });

        it('TC - 078 Label "Journey and Return"  is correct', function () {
            $(sel.storyType).click();
            let dropDownMenu = $(sel.dropDownMenu).isDisplayed();
            browser.pause(2000);
            let forthStoryType = $$('.ant-select-item-option-content')[3].getText();
            expect(forthStoryType).toEqual('Journey and Return');
        });

        it('TC - 079 Label "Rags and Riches"  is correct', function () {
            $(sel.storyType).click();
            let dropDownMenu = $(sel.dropDownMenu).isDisplayed();
            browser.pause(2000);
            let fifthStoryType = $$('.ant-select-item-option-content')[4].getText();
            expect(fifthStoryType).toEqual('Rags and Riches');
        });

        it('TC - 080 Label "Tragedy"  is correct', function () {
            $(sel.storyType).click();
            let dropDownMenu = $(sel.dropDownMenu).isDisplayed();
            browser.pause(2000);
            let sixthStoryType = $$('.ant-select-item-option-content')[5].getText();
            expect(sixthStoryType).toEqual('Tragedy');
        });

        it('TC - 081 Label "Comedy" is correct', function () {
            $(sel.storyType).click();
            let dropDownMenu = $(sel.dropDownMenu).isDisplayed();
            browser.pause(2000);
            let seventhStoryType = $$('.ant-select-item-option-content')[6].getText();
            expect(seventhStoryType).toEqual('Comedy');
        });

    });

    });

});
