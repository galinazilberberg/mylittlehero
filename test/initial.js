describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        before('Open App', function (){
            browser.url('');
        });

        it('TC-001 Title is correct ', function () {
            let title = browser.getTitle();
            browser.pause(2000);
            expect(title).toEqual('MLH trial');
        });
    });

        describe('Elements exist', function () {

            it('TC-002 Header is present ', function () {
                let header = $('h3').isDisplayed();
                expect(header).toEqual(true);
            });

            it('TC-003 Instruction is present', function () {
                let instruction = $('p').isDisplayed();
                expect(instruction).toEqual(true);
            });
            it('TC-004 Name field label is present', function () {
                let label = $$('.ant-form-item-required')[0].isDisplayed();
                expect(label).toEqual(true);
            });


    });

});