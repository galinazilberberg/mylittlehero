import sel from '../../data/selectors';
import exp from '../../data/expected';
import {name,gender,age, story} from '../../data/testData';
import {clearName, inputValues4} from "../../helpers/methods";


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

            it('TC-031 Name  field accepts letters', function (){
                $(sel.name).setValue(name.letters);
                let errorMessage = $(sel.errorMessage).isDisplayed();
                expect(errorMessage).toEqual(false);
            });

            it('TC-032 Name field accepts letters (lower case/upper case)', function (){
                $(sel.name).setValue(name.lowUpCase);
                let errorMessage = $(sel.errorMessage).isDisplayed();
                expect(errorMessage).toEqual(false);
            });

            it('TC-033 Name field accepts digits', function (){
                $(sel.name).setValue(name.digits);
                let errorMessage = $(sel.errorMessage).isDisplayed();
                expect(errorMessage).toEqual(false);
            });

            it('TC-034 Name field accepts special symbols', function (){
                $(sel.name).setValue(name.specSymbol);
                let errorMessage = $(sel.errorMessage).isDisplayed();
                expect(errorMessage).toEqual(false);
            });

            it('TC-035 Name field accepts letters with space', function (){
                $(sel.name).setValue(name.lettersSpace);
                let errorMessage = $(sel.errorMessage).isDisplayed();
                expect(errorMessage).toEqual(false);
            });

            it('TC-036 Name field accepts russian letters', function (){
                $(sel.name).setValue(name.rusLetters);
                let errorMessage = $(sel.errorMessage).isDisplayed();
                expect(errorMessage).toEqual(false);
            });

            // it('TC-037 Name field accepts copy/past functionality', function () {

        describe('Sub- suit: Negative Cases', function (){

            // it('TC-038 Name field doesn't accept SQL/XML code ingections', function () {
            //
            // });

            it('TC-039a  Enter input, delete input - message = Required. ', function (){
                $(sel.name).setValue(age.default);
                clearName();
                let errorMessage = $(sel.errorMessage).waitForDisplayed();
                expect(errorMessage).toEqual(true);
            });

            it('TC-039b  Enter input, delete input - message = Required. ', function (){
                $(sel.name).setValue(age.default);
                clearName();
                browser.pause(2000);
                let errorMessage = $(sel.errorMessage).getText();
                expect(errorMessage).toEqual(exp.errorMessageRequired);
            });

            it('TC-040a Name field should not accept more than 70 characters ', function () {
                $(sel.name).setValue(name.symbol71);
                let error = $(sel.errorMessage).waitForDisplayed({ timeout: 1000 });
                expect(error).toEqual(true);
            });

            it('TC-040b Name field should not accept more than 70 characters ', function () {
                $(sel.name).setValue(name.symbol71);
                browser.pause(2000);
                let errorMessage = $(sel.errorMessage).getText();
                expect(errorMessage).toEqual(exp.errorMessage70);
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

