import sel from '../../data/selectors';
import exp from '../../data/expected';
import {name,gender,age, story} from '../../data/testData';
import {inputValues4} from "../../helpers/methods";


describe('Name field suit', function () {

    describe('Sub-suit:Placeholder', function () {

        before('Open App', function () {
            browser.url('')
        });

        beforeEach('Refresh App', function (){
            browser.refresh();
        });

        it('TC-028 Name Field placeholder  = \'Hero\'s name\'', function () {
            let placeholder = $(sel.name).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.namePlaceholder);
        });

    describe('Sub- suit: Positive Cases', function (){

        });
        // it('TC-029 Name Field accepts one symbol', function () {
        //     inputValues4(name.oneSymbol, gender.she, age.default, story.comedy);
        //     let submitBtn = $(sel.submit).isEnabled();
        //     expect(submitBtn).toEqual(true);
        // });

        it('TC-029 Name Field accepts one symbol', function (){
            $(sel.name).setValue(name.oneSymbol);
            let errorMessage = $(sel.errorMessage).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

        it('TC-030 Name field accepts 70 symbols', function (){
            $(sel.name).setValue(name.symbols70);
            let errorMessage = $(sel.errorMessage).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

        it('TC-031 Name  field accepts letters ', function () {
            inputValues4(name.letters, gender.she, age.default, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(true);
        });

        it('TC-032 Name field accepts letters (lower case/upper case) ', function () {
            inputValues4(name.lowUpCase, gender.she, age.default, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(true);
        });

        it('TC-033 Name field accepts digits ', function () {
            inputValues4(name.digits, gender.she, age.default, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(true);
        });

        it('TC-034 Name field accepts special symbols', function () {
            inputValues4(name.specSymbol, gender.she, age.default, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(true);
        });

        it('TC-035 Name field accepts letters with space', function () {
            inputValues4(name.lettersSpace, gender.she, age.default, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(true);
        });

        it('TC-036 Name field accepts russian letters', function () {
            inputValues4(name.rusLetters, gender.she, age.default, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(true);
        });

        // it('TC-037 Name field accepts copy/past functionality', function () {
        //
        // });
    describe('Sub- suit: Positive Cases', function (){

        // it('TC-038 Name field doesn't accept SQL/XML code ingections', function () {
        //
        // });

        // it('TC-039 ???????', function () {
        //
        // });

        it('TC-040 Name field should not accept more than 70 characters ', function () {
            $(sel.name).setValue(name.symbol71);
            let error = $(sel.errorMessage).waitForDisplayed({ timeout: 1000 });
            expect(error).toEqual(true);
        });

        it('TC-041 Name input field should not be left empty ', function () {
            inputValues4(name.emptyField, gender.she, age.default, story.comedy);
            // let error = $(sel.errorMessage).waitForDisplayed({ timeout: 1000 });
            // expect(error).toEqual(true);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });
       });
   });
});

