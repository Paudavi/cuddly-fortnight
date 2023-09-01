exports.ResultsPage = class ResultsPage {
    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page){
        this.page = page;
        this.resultsElements = page.locator('.ui-search-result__content-wrapper.shops__result-content-wrapper');
        this.waitForResults = page.waitForSelector('.ui-search-result__content-wrapper.shops__result-content-wrapper');
        this.elementCost = page.locator('.andes-money-amount__fraction');
        this.nextPageButton = page.locator('.andes-pagination__arrow-title').getByText('Siguiente');
        
    }
    async getNumberOfResults(){
        await this.waitForResults;
        const number = await this.resultsElements.count();
        return number;
    }

    async getProductLink (number) {
        const elementLink= await this.resultsElements.nth(number).locator('a').first();
        const link = elementLink.getAttribute('href');
        return link;
    }

    async getProductName (number) {
        const elementName= await this.resultsElements.nth(number).locator('a').first();
        const name = elementName.getAttribute('title');
        return name;
    }

    async getProductCost (number) {

        const elementCost = await this.resultsElements.nth(number)
                                            .locator(this.elementCost)
                                            .first()
                                            .innerText();
        return elementCost;
    }

    async clickNextPage(){
        await this.nextPageButton.click();
    }

}