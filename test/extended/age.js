import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name,gender,age, story} from '../../data/testData';
import inputValue4 from'../../helpers/methods';

describe('Age field suit', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Placeholder', function () {

        it('TC - 055 Age Field Placeholder = "Hero \'s age" ', function () {
            let placeholder = $(sel.age).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.agePlaceholder);
        });
    });

        describe('Positive Cases', function () {

            it('TC-056 Age field accepts one digit', function (){
                inputValue4(name.default, gender.she, age.oneDigit, story.comedy)
                let submitBtn = $(sel.submit).isEnabled();
                expect(submitBtn).toEqual(true);
            });

            it('TC-057 Age field accepts 12 digit', function (){
                inputValue4(name.default, gender.she, age["12Digits"], story.comedy);
                let submitBtn = $(sel.submit).isEnabled();
                expect(submitBtn).toEqual(true);
            });
            // 'TC-058 Age field accept "1234567890" ' - done in smoke test

            it('TC-059  Age field accept space ', function (){
                inputValue4(name.default, gender.she, age.spaceIsTrimmed, story.comedy);
                let submitBtn = $(sel.submit).isEnabled();
                expect(submitBtn).toEqual(true);
            });

            it('TC-060  Age field accept 0 on the left ', function (){
                inputValue4(name.default, gender.she, age.zeroIsTrimmed, story.comedy);
                let submitBtn = $(sel.submit).isEnabled();
                expect(submitBtn).toEqual(true);
            });

            // 'TC-061 Age field accept spin up'
            // 'TC-062 Age field accept 1 -> spin up'
            // 'TC-202 Enter the age field 28 after deletion 28 shows - Required.'
            // ''TC-063 Age field accept 2 -> spin down'

            //TC-064 N/A any more

            // it('TC-064 Age field doesn\'t accept 0  ', function () {
            //     $(sel.age).setValue(age.zeroInput);
            //     let error = $(sel.errorAlert).waitForDisplayed({ timeout: 1000 });
            //     expect(error).toEqual(true);
            // });

            it('TC-065 Age field doesn\'t accept 13 digits ', function () {
                $(sel.age).setValue(age["13Digits"]);
                let error = $(sel.errorAlert).waitForDisplayed({ timeout: 1000 });
                expect(error).toEqual(true);
            });

            it('TC-066 Age field doesn\'t accept letters ', function () {
                $(sel.age).setValue(age.letters);
                let error = $(sel.errorAlert).waitForDisplayed({ timeout: 1000 });
                expect(error).toEqual(true);
            });

            it('TC-067 Age field doesn\'t accept symbols ', function () {
                $(sel.age).setValue(age.symbols);
                let error = $(sel.errorAlert).waitForDisplayed({ timeout: 1000 });
                expect(error).toEqual(true);
            });

            it('TC-068 Age field accept doesn\'t negative digits ', function () {
                $(sel.age).setValue(age.negative);
                let error = $(sel.errorAlert).waitForDisplayed({ timeout: 1000 });
                expect(error).toEqual(true);
            });

            it('TC-069 Age field accept doesn\'t  float digits ', function () {
                $(sel.age).setValue(age.float);
                let error = $(sel.errorAlert).waitForDisplayed({ timeout: 1000 });
                expect(error).toEqual(true);
            });

            //TC-070 -N/A any more

            //TC-071 - Age field accept doesn't spin down
        });

    });
