const{test,expect}= require('@playwright/test')
test('Launch App', async({page})=>{
   const Promise= await page.goto("http://google.com");
    const title=await page.title();
    //expect("Google").toBe(title);
    await expect(page).toHaveTitle("Google");
    
});