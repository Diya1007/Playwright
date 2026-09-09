const{test,expect}=require('@playwright/test')
test.use({viewport:{width:2000,height:1120}})
test("Upload file", async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator("#file-upload").setInputFiles("/Users/diya/Downloads/Assignment_1.xlsx");
    await page.locator("#file-submit").click();
    await page.waitForTimeout(2000)
    await expect(page.getByText("File Uploaded!")).toBeVisible();
})