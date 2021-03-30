import sel from '../../data/selectors';
import {name,gender,age, story} from '../../data/testData';
import inputValues4 from '../../helpers/methods';

describe('Labels are Correct', function () {

    before('Open App', function () {
        browser.url('')

    });
    it('TC-026 Submit button is enabled after fields 1-4 are field in with valid values', function () {
        $(sel.name).setValue(name.default);
        $$(sel.radioButtons)[gender.she].click();
        $(sel.age).setValue(age.default);
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-26.a Submit button is enabled after fields 1-4 are field in with valid values', function () {
        browser.refresh();

        inputValues4(name.default, gender.she, age.default, story.comedy);

        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(true);
    });


    it('TC-027 User can see "Try again" button', function () {
        browser.refresh();

        $(sel.name).setValue('LadyBug007');
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        $(sel.submit).click();
        let tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });

    it('TC-027.a User can see "Try again" button', function () {
        browser.refresh();

        inputValues4(name.default, gender.she, age.default, story.comedy);

        $(sel.submit).click();
        let tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });
});
