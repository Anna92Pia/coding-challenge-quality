import navBar from '../pages/navbar';
import webAutomationAndMobileTesting from '../pages/webAutomationAndMobileTesting';
import karriere from '../pages/karriere';

Feature('QualityMinds Coding Challenge');

Scenario('Test Case #1 - Navigation to Kontakt page', async ({ I }) => {
    I.amOnPage('/');
    I.click(navBar.NAV_BAR.kontaktButton);
    let urlStep2 = await I.grabCurrentUrl();
    I.seeInSource('hello@qualityminds.de');
    I.switchTo();
    I.click(navBar.NAV_BAR.kontaktUndAnfahrtLink);
    let urlStep5 = await I.grabCurrentUrl();
    (I as any).assertEqual(urlStep2, urlStep5);
});

Scenario('Test Case #2 - Handout download', async ({ I }) => {
    I.amOnPage('/');
    I.moveCursorTo(navBar.NAV_BAR.portfolioButton);
    I.click(navBar.SUB_MENU.webAutomationAndMobileTestingLink);
    I.moveCursorTo(navBar.NAV_BAR.portfolioButton);
    I.waitForElement(navBar.NAV_BAR.navSubMenu('Portfolio'), 10);
    I.seeElement(navBar.SUB_MENU.highlithedTab('Web'))
    I.click(navBar.SUB_MENU.inactiveTab('Mobile'))
    I.seeElement(navBar.SUB_MENU.highlithedTab('Mobile'))
    I.seeCurrentUrlEquals('https://qualityminds.de/team_page/wam-testing/');
    I.click(webAutomationAndMobileTesting.PAGE_ELEMENTS.threeTitlesMobile);
    I.seeElement(webAutomationAndMobileTesting.PAGE_ELEMENTS.downloadButton);
    let fileDownloadLink = await I.grabAttributeFrom(webAutomationAndMobileTesting.PAGE_ELEMENTS.downloadButton, 'href');
    (I as any).assertEqual(fileDownloadLink, 'https://qualityminds.de/app/uploads/2018/11/Find-The-Mobile-Bug-Session.pdf');
});

Scenario('Test Case #3 - Form validation', async ({ I }) => {
    I.amOnPage('/');
    I.click(navBar.NAV_BAR.karriereButton);
    I.seeCurrentUrlEquals('https://qualityminds.de/karriere/');
    I.click(karriere.PAGE_ELEMENTS.bewirbDichJetztButton);
    I.seeCurrentUrlEquals('https://qualityminds.de/kontaktformular/');
    I.click(karriere.PAGE_ELEMENTS.jetztBewerbenButton);
    I.seeNumberOfElements(karriere.PAGE_ELEMENTS.validationError('Dies ist ein Pflichtfeld.'), 4);
    I.fillField(karriere.PAGE_ELEMENTS.vornameField, 'Anna');
    I.fillField(karriere.PAGE_ELEMENTS.nachnameField, 'Testova');
    I.click(karriere.PAGE_ELEMENTS.jetztBewerbenButton);
    I.seeNumberOfElements(karriere.PAGE_ELEMENTS.validationError('Dies ist ein Pflichtfeld.'), 2);
    I.fillField(karriere.PAGE_ELEMENTS.emailField, "abc123");
    I.click(karriere.PAGE_ELEMENTS.jetztBewerbenButton);
    I.seeElement(karriere.PAGE_ELEMENTS.dateienHochladenButton);
    I.attachFile(karriere.PAGE_ELEMENTS.dateienHochladenInput, `..\\..\\upload_file_test.txt`);
    I.waitForElement(karriere.PAGE_ELEMENTS.checkFileName('upload_file_test.txt'), 100);
});
