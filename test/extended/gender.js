import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name,gender,age,story} from '../../data/testData';
import {inputValues4} from'../../helpers/methods';

describe('Gender field suit', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Sub-suit: Positive cases', function () {

        // it('TC-042 Radio button "he" is selected after clicking on it', function () {
        //     $$(sel.radioButtons)[0].click();
        //     let btnHe = $(sel.radioBtnHe).isSelected();
        //     expect(btnHe).toEqual(true);
        // });

        it('TC-042 Radio button "he" is selected after clicking on it', function () {
            $$(sel.radioButtons)[gender.he].click();
            let btnHe = $(sel.radioBtnHe).isSelected();
            expect(btnHe).toEqual(true);
        });

        it('TC-043 Radio button "she" is selected after clicking on it', function () {
            $$(sel.radioButtons)[gender.she].click();
            let btnShe = $(sel.radioBtnShe).isSelected();
            expect(btnShe).toEqual(true);
        });

        it('TC-044 Radio button "it" is selected after clicking on it', function () {
            $$(sel.radioButtons)[gender.it].click();
            let btnIt = $(sel.radioBtnIt).isSelected();
            expect(btnIt).toEqual(true);
        });

        it('TC-045a User can choose only one button ("he") at the time', function () {
            $$(sel.radioButtons)[gender.he].click();
            let btnShe = $(sel.radioBtnShe).isSelected();
            expect(btnShe).toEqual(false);
        });

        it('TC-045b User can choose only one button ("he") at the time', function () {
            $$(sel.radioButtons)[gender.he].click();
            let btnIt = $(sel.radioBtnIt).isSelected();
            expect(btnIt).toEqual(false);
        });

        it('TC-046a User can choose only one button ("she") at the time', function () {
            $$(sel.radioButtons)[gender.she].click();
            let btnHe = $(sel.radioBtnHe).isSelected();
            expect(btnHe).toEqual(false);
        });

        it('TC-046b User can choose only one button ("she") at the time', function () {
            $$(sel.radioButtons)[gender.she].click();
            let btnIt = $(sel.radioBtnIt).isSelected();
            expect(btnIt).toEqual(false);
        });

        it('TC-047a User can choose only one button ("it") at the time', function () {
            $$(sel.radioButtons)[gender.it].click();
            let btnHe = $(sel.radioBtnHe).isSelected();
            expect(btnHe).toEqual(false);
        });

        it('TC-047b User can choose only one button ("it") at the time', function () {
            $$(sel.radioButtons)[gender.it].click();
            let btnShe = $(sel.radioBtnShe).isSelected();
            expect(btnShe ).toEqual(false);
        });

        it('TC-048 User can change the choice by clicking on another button ( "it" -> "she")', function () {
            $$(sel.radioButtons)[gender.it].click();
            $$(sel.radioButtons)[gender.she].click();
            let btnShe = $(sel.radioBtnShe).isSelected();
            expect(btnShe ).toEqual(true);
        });

        it('TC-049 User can change the choice by clicking on another button ( "it" -> "he")', function () {
            $$(sel.radioButtons)[gender.it].click();
            $$(sel.radioButtons)[gender.he].click();
            let btnHe = $(sel.radioBtnHe).isSelected();
            expect(btnHe).toEqual(true);
        });

        it('TC-050 User can change the choice by clicking on another button ( "he" -> "she")', function () {
            $$(sel.radioButtons)[gender.he].click();
            $$(sel.radioButtons)[gender.she].click();
            let btnShe = $(sel.radioBtnShe).isSelected();
            expect(btnShe).toEqual(true);
        });

        it('TC-051 User can change the choice by clicking on another button ( "he" -> "it")', function () {
            $$(sel.radioButtons)[gender.he].click();
            $$(sel.radioButtons)[gender.it].click();
            let btnIt = $(sel.radioBtnIt).isSelected();
            expect(btnIt).toEqual(true);
        });

        it('TC-052 User can change the choice by clicking on another button ( "she" -> "it")', function () {
            $$(sel.radioButtons)[gender.she].click();
            $$(sel.radioButtons)[gender.it].click();
            let btnIt = $(sel.radioBtnIt).isSelected();
            expect(btnIt).toEqual(true);
        });

        it('TC-053 User can change the choice by clicking on another button ( "she" -> "he")', function () {
            $$(sel.radioButtons)[gender.she].click();
            $$(sel.radioButtons)[gender.he].click();
            let btnHe = $(sel.radioBtnHe).isSelected();
            expect(btnHe).toEqual(true);
        });

    describe('Sub-suit: Negative cases', function () {

        it('TC-054 Submit button not enabled if gender button not chosen ', function () {
            $(sel.name).setValue(name.default);
            $(sel.age).setValue(age.default);
            $(sel.storyType).click();
            $$(sel.storyList)[story.comedy].click();
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });
    });
    });
});
