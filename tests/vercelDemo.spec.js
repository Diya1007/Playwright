const{test,expect}= require('@playwright/test')
test.use({viewport:{width:1920,height:1080}})
test("vercel Demo app", async function({page}){
   await page.goto("https://freelance-learn-automation.vercel.app/signup");
    await page.locator("#name").fill("DemoUser");
    await page.locator("#email").fill("demouser1@gmail.com");
    await page.getByPlaceholder("Password").fill("Abcdefg@123");
    await page.waitForTimeout(1000)
    await page.getByLabel("C",{exact:true}).check();
    await page.getByLabel("Python").check();
    await page.getByText("Male",{exact:true}).click();
    await page.waitForTimeout(1000)
    await page.locator("#state").selectOption("Goa");
    await page.locator("#hobbies").selectOption(["Playing","Reading","Swimming"]);
    await page.waitForTimeout(2000)
    await page.getByRole('button',{name:"Sign up"}).click();
})