const{test,expect}=require('@playwright/test')
test.use({viewport:{width:1920,height:1100}});
test("AutoSuggestion",async function ({page}){
    await page.goto("https://www.google.com/");
    await page.getByTitle("Search").type("Diya");
    
    await page.waitForSelector("li[role='presentation'][ data-attrid='AutocompletePrediction']")
    await page.waitForTimeout(2000)
    await page.keyboard.press('ArrowDown')
    
    let res= await page.$$("li[role='presentation'][ data-attrid='AutocompletePrediction']");
    for(let i=0;i<res.length;i++)
    {
        let results= await res[i].textContent();
        if(results.includes("lamp"))
        {
            await res[i].click();
            await page.waitForTimeout(2000)
        }
    }

})