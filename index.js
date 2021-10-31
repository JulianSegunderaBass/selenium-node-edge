const { Builder, By, Key, util } = require('selenium-webdriver');

const edge = require('selenium-webdriver/edge');
let service = new edge.ServiceBuilder("C:/selenium-webdrivers/msedgedriver.exe");
const runScript = async () => {
    // Setting driver
    let driver = await new Builder().setEdgeService(service).forBrowser('MicrosoftEdge').build();

    // Logging in
    setTimeout(async () => {
        await driver.get('https://admin-demo.nopcommerce.com/');
        const adminEmail = await driver.findElement(By.id('Email'));
        const adminPass = await driver.findElement(By.id('Password'));
        const loginButton = await driver.findElement(By.css('button.login-button'));
        await adminEmail.clear();
        await adminPass.clear();
        await adminEmail.sendKeys('admin@yourstore.com');
        await adminPass.sendKeys('admin');
        await loginButton.click();
    }, 2000);
    // Navigate to create customer screen + add data
    setTimeout(async () => {
        await driver.get('https://admin-demo.nopcommerce.com/Admin/Customer/Create');
        const cusEmail = await driver.findElement(By.id('Email'));
        const cusPass = await driver.findElement(By.id('Password'));
        const cusFirstName = await driver.findElement(By.id('FirstName'));
        const cusLastName = await driver.findElement(By.id('LastName'));
        const genderMale = await driver.findElement(By.id('Gender_Male'));
        const cusDOB = await driver.findElement(By.id('DateOfBirth'));
        const cusCompany = await driver.findElement(By.id('Company'));
        const taxExempt = await driver.findElement(By.id('IsTaxExempt'));
        const adminComment = await driver.findElement(By.id('AdminComment'));
        const saveBtn = await driver.findElement(By.css('button[name="save"]'));

        await cusEmail.sendKeys('julianbass@domain3.org');
        await cusPass.sendKeys('pass-julian');
        await cusFirstName.sendKeys('Julian');
        await cusLastName.sendKeys('Bass');
        await genderMale.click();
        await cusDOB.sendKeys('06/12/1999');
        await cusCompany.sendKeys('Asia Pacific College');
        await taxExempt.click();
        await adminComment.sendKeys('Test user created by admin');
        await saveBtn.click();
    }, 10000);
    // Log out
    setTimeout(async () => {
        // const logOutBtn = await driver.findElement(By.css('a[href="/logout"]'));
        // logOutBtn.click();
        await driver.get('https://admin-demo.nopcommerce.com/logout');
    }, 5000);
}

runScript();