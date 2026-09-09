const{test,expect}= require('@playwright/test')
const logout=require('../POM/homePage')
test("Login Validation", async ({page})=>{
    const obj=new logout(page);
    obj.SignOut();
})