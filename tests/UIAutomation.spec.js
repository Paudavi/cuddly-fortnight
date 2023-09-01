const { test } = require('@playwright/test');
const { HomePage } = require('../pages/home.page');
const { ResultsPage } = require('../pages/results.page');
const { Utils } = require('../utils/utils');


test.beforeEach(async({page}) => {
    await page.goto('https://www.mercadolibre.com.uy/');
    });

        test('Precios de los 3 primeros resultados de camisetas en Mercado Libre', async ({ page }) => {
            const homePage = new HomePage(page);
            const resultsPage = new ResultsPage(page);
            const utils = new Utils(page);
            
            //searching for the product
            await homePage.serchForItem('camisetas');

           
            // iterating through pages
            for(let k=0; k<4;k++){
                utils.writeNumberOfPageResults(k);
                const count = await resultsPage.getNumberOfResults();
  
                //  retriving the data
                for (let i=0; i < count; i++){
                    const link = await resultsPage.getProductLink(i);
                    const name = await resultsPage.getProductName(i);
                    const cost = await resultsPage.getProductCost(i);
                    utils.writeProductDetails(i,link,name,cost);
                }
               await resultsPage.clickNextPage();
               utils.writeLineSeparation();
            }
           

    });

