import sel from '../../data/selectors';
import exp from '../../data/expected';
import {name,gender,age, story} from '../../data/testData';
import inputValue4 from "../../helpers/methods";


describe('Suit:Name', function () {

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

    describe('Positive Cases', function (){

        });
        it('TC-029 Name Field accepts one symbol', function () {
            inputValue4(name.oneSymbol, gender.she, age.default, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(true);
        });

        it('TC-030 Name field accepts 70 symbols', function () {
            inputValue4(name.symbols70, gender.she, age.default, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(true);
        });

        it('TC-031 Name  field accepts letters ', function () {
            inputValue4(name.letters, gender.she, age.default, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(true);
        });

        it('TC-032 Name field accepts letters (lower case/upper case) ', function () {
            inputValue4(name.lowUpCase, gender.she, age.default, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(true);
        });

        it('TC-033 Name field accepts digits ', function () {
            inputValue4(name.digits, gender.she, age.default, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(true);
        });

        it('TC-034 Name field accepts special symbols', function () {
            inputValue4(name.specSymbol, gender.she, age.default, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(true);
        });

        it('TC-035 Name field accepts letters with space', function () {
            inputValue4(name.lettersSpace, gender.she, age.default, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(true);
        });

        it('TC-036 Name field accepts russian letters', function () {
            inputValue4(name.rusLetters, gender.she, age.default, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(true);
        });

        // it('TC-037 Name field accepts copy/past functionality', function () {
        //
        // });

        // it('TC-038 Name field doesn't accept SQL/XML code ingections', function () {
        //
        // });

        // it('TC-039 ???????', function () {
        //
        // });

        it('TC-040 Name field should not accept more than 70 characters ', function () {
            $(sel.name).setValue(name.symbol71);
            let error = $(sel.errorAlert).waitForDisplayed({ timeout: 1000 });
            expect(error).toEqual(true);
        });

        it('TC-041 Name input field should not be left empty ', function () {
            inputValue4(name.emptyField, gender.she, age.default, story.comedy);
            // let error = $(sel.errorAlert).waitForDisplayed({ timeout: 1000 });
            // expect(error).toEqual(true);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });
    });
});