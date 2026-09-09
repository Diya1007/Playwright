const{test,expect}= require('@playwright/test')
test.use({viewport:{width:1920, height:1080}})
test("selecting from drpdown", async function({page}){
   await page.goto("https://freelance-learn-automation.vercel.app/signup");
    await page.locator("#state").selectOption({label:"Goa"});
    //const var1= await page.locator("#state").textContent();
    
   // await expect(var1).toContain("Indiana");
    let name= await page.$$("#state option");
    for(let i=0;i<name.length;i++)
    {
        if (await name[i].textContent()==="Bihar")
        {
            console.log("state present at index "+ i+1)

        }
        
    }
    await page.locator("select[name='hobbies']").selectOption(["Playing", "Singing","Dancing"]);
    await page.waitForTimeout(2000);
})