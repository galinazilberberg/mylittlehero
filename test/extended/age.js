import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name,gender,age,story} from '../../data/testData';
import {inputValues4, clearInput} from'../../helpers/methods';

describe('Age field suit', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Sub-suit: Placeholder', function () {

        it('TC - 055 Age Field Placeholder = "Hero \'s age" ', function () {
            let placeholder = $(sel.age).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.agePlaceholder);
        });
    });

        describe('Sub -suite: Positive Cases', function () {

            // it('TC-056 Age field accepts one digit', function (){
            //     inputValues4(name.default, gender.she, age.oneDigit, story.comedy);
            //     let submitBtn = $(sel.submit).isEnabled();
            //     expect(submitBtn).toEqual(true);
            // });

            it('TC-056 Age field accepts one digit', function (){
                $(sel.age).setValue(age.oneDigit);
                let errorMessage = $(sel.errorMessage).isDisplayed();
                expect(errorMessage).toEqual(false);
            });

            it('TC-057 Age field accepts 12 digit', function (){
                $(sel.age).setValue(age["12Digits"]);
                let errorMessage = $(sel.errorMessage).isDisplayed();
                expect(errorMessage).toEqual(false);
            });

            // 'TC-058 Age field accept "1234567890" ' - done in smoke test

            it('TC-059  Age field accept space', function (){
                $(sel.age).setValue(age.spaceIsTrimmed);
                let errorMessage = $(sel.errorMessage).isDisplayed();
                expect(errorMessage).toEqual(false);
            });

            it('TC-060 Age field trimmed 0 before digits ', function () {
                $(sel.age).setValue(age.zeroIsTrimmed);
                $(sel.name).click();
                let errorMessage = $(sel.age).getValue();
                expect(errorMessage).toEqual(exp.trimmed0);
            });

            it('TC-061   Age field accept spin up ', function (){
                $(sel.spinUpAge).click();
                let ages = $(sel.age).getValue();
                expect(ages).toEqual(exp.spinUp1);
            });

            it('TC-062   Age field accept 1 -> spin up ', function (){
                $(sel.age).setValue(age.oneDigit);
                $(sel.spinUpAge).click();
                let ages = $(sel.age).getValue();
                expect(ages).toEqual(exp.spinUp2);
            });
            it('TC-202  Enter the age field 5 after deletion 5 shows - Required. ', function (){
                $(sel.age).setValue(age.spindown);
                clearInput();
                let errorMessage = $(sel.errorMessage).waitForDisplayed();
                expect(errorMessage).toEqual(true);
            });

            it('TC-063 Age field accepts spin down ', function () {
                $(sel.age).setValue(age.spindown);
                $(sel.spinDownAge).click();
                let ages = $(sel.age).getValue();
                expect(ages).toEqual(exp.spinDown4);
            });
        describe('Sub-suit: Negative Cases', function () {

            it('TC-064 Age field dasn\'t accept 0 ', function () {
                $(sel.age).setValue(age.zeroInput);
                $(sel.name).click();
                let errorMessage = $(sel.age).waitForDisplayed();
                expect(errorMessage).toEqual(true);
            });

            it('TC-065 Age field dasn\'t accept 13 digits ', function () {
                $(sel.age).setValue(age["13Digits"]);
                $(sel.name).click();
                let errorMessage = $(sel.age).waitForDisplayed();
                expect(errorMessage).toEqual(true);
            });

            it('TC-066 Age field dasn\'t accept letters ', function () {
                $(sel.age).setValue(age.letters);
                $(sel.name).click();
                let errorMessage = $(sel.age).waitForDisplayed();
                expect(errorMessage).toEqual(true);
            });

            it('TC-067 Age field dasn\'t accept symbols ', function () {
                $(sel.age).setValue(age.symbols);
                $(sel.name).click();
                let errorMessage = $(sel.age).waitForDisplayed();
                expect(errorMessage).toEqual(true);
            });

            it('TC-068 Age field dasn\'t accept negative numbers ', function () {
                $(sel.age).setValue(age.negative);
                $(sel.name).click();
                let errorMessage = $(sel.age).waitForDisplayed();
                expect(errorMessage).toEqual(true);
            });

            it('TC-069 Age field accept doesn\'t  float digits ', function () {
                $(sel.age).setValue(age.float);
                $(sel.name).click();
                let errorMessage = $(sel.age).waitForDisplayed();
                expect(errorMessage).toEqual(true);
            });

            // it('TC-065 Age field doesn\'t accept 13 digits ', function () {
            //     $(sel.age).setValue(age["13Digits"]);
            //     let error = $(sel.errorAlert).waitForDisplayed({ timeout: 1000 });
            //     expect(error).toEqual(true);
            // });
            //
            // it('TC-066 Age field doesn\'t accept letters ', function () {
            //     $(sel.age).setValue(age.letters);
            //     let error = $(sel.errorAlert).waitForDisplayed({ timeout: 1000 });
            //     expect(error).toEqual(true);
            // });
            //
            // it('TC-067 Age field doesn\'t accept symbols ', function () {
            //     $(sel.age).setValue(age.symbols);
            //     let error = $(sel.errorAlert).waitForDisplayed({ timeout: 1000 });
            //     expect(error).toEqual(true);
            // });
            //
            // it('TC-068 Age field accept doesn\'t negative digits ', function () {
            //     $(sel.age).setValue(age.negative);
            //     let error = $(sel.errorAlert).waitForDisplayed({ timeout: 1000 });
            //     expect(error).toEqual(true);
            // });
            //
            // it('TC-069 Age field accept doesn\'t  float digits ', function () {
            //     $(sel.age).setValue(age.float);
            //     let error = $(sel.errorAlert).waitForDisplayed({ timeout: 1000 });
            //     expect(error).toEqual(true);
            // });

            //TC-070 -N/A any more

            it('TC-071 Age field accepts spin down ', function () {
                $(sel.spinDownAge).click();
                let errorMessage = $(sel.age).waitForDisplayed();
                expect(errorMessage).toEqual(true);
            });

            it('TC-206 Submit button not enabled with empty Age field ', function () {
                inputValues4(name.default, gender.she,age.emptyField, story.comedy);
                let submitBtn = $(sel.submit).isEnabled();
                expect(submitBtn).toEqual(false);
            });
        });
    });
});
