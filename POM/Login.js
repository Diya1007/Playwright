const{test}=require('@playwright/test')
class login
{
    /**@type{import ('@playwright/test').Page}*/
    page;
    constructor(page)
    {
        this.page=page;
        this.email="#email1";
        this.pwd="#password1";
        this.button=".submit-btn";
    }

    async loginTest()
    {
        await this.page.fill(this.email,"admin@email.com");
        await this.page.fill(this.pwd,"admin@123");
        await this.page.click(this.button);
        
    }
}

module.exports=login;