const { Builder, By, Key, util } = require('selenium-webdriver');
// * Module for the edge selenium webdriver
const edge = require('selenium-webdriver/edge');
// * Specifying path to local edge driver
let service = new edge.ServiceBuilder("C:/selenium-webdrivers/msedgedriver.exe");
const runScript = async () => {
    // * Configuring driver
    let driver = await new Builder().setEdgeService(service).forBrowser('MicrosoftEdge').build();

    // * < -- Logging in as admin -- >
    // ? Naviage to login
    await driver.get('https://admin-demo.nopcommerce.com/');
    // ? Identifying inputs and button
    const adminEmail = await driver.findElement(By.id('Email'));
    const adminPass = await driver.findElement(By.id('Password'));
    const loginButton = await driver.findElement(By.css('button.login-button'));
    // ? Clearing existing values
    await adminEmail.clear();
    await adminPass.clear();
    // ? Setting values and clicking button
    await adminEmail.sendKeys('admin@yourstore.com');
    await adminPass.sendKeys('admin');
    await loginButton.click();

    // * < -- Navigating to create customer screen + adding data -- >
    // ? Clicking customer dropdown nav
    const cusDropdown = await driver.findElement(By.css('li.nav-item i.fa-user'));
    await cusDropdown.click();
    // ? Clicking customer page link
    const cusLink = await driver.findElement(By.css('a[href="/Admin/Customer/List"]'));
    await cusLink.click();
    // ? Clicking customer create form link
    const cusCreateLink = await driver.findElement(By.css('a[href="/Admin/Customer/Create"]'));
    await cusCreateLink.click();
    // ? Identifying form inputs and save button
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
    // ? Creating random 5-character string for unique emails
    const randString = await Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    // ? Setting values and clicking save
    await cusEmail.sendKeys(`julianbass_${randString}@domain.org`);
    await cusPass.sendKeys('pass-julian');
    await cusFirstName.sendKeys('Julian');
    await cusLastName.sendKeys('Bass');
    await genderMale.click();
    await cusDOB.sendKeys('06/12/1999');
    await cusCompany.sendKeys('Asia Pacific College');
    await taxExempt.click();
    await adminComment.sendKeys('Test user created by admin');
    await saveBtn.click();

    // * < -- Logging out (clicking logout button) -- >
    const logOutBtn = await driver.findElement(By.css('a[href="/logout"]'));
    await logOutBtn.click();
}

runScript();