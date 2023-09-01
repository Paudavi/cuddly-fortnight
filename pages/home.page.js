exports.HomePage = class HomePage {
    
    constructor(page) {
        this.page = page;
        this.searchBarField = page.locator('id=cb1-edit');
        
    }

    async serchForItem(item) {
        await this.searchBarField.type(item);
        await this.page.keyboard.press('Enter');

    }

};