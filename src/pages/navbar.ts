export = {
  NAV_BAR: {
    kontaktButton: '//nav[@id="top-menu-nav"]//li/a[text()="Kontakt"]',
    karriereButton: '//nav[@id="top-menu-nav"]//li/a[text()="Karriere"]',
    kontaktUndAnfahrtLink: `//h1/span[text()[contains(.,'Kontakt & Anfahrt')]]`,
    portfolioButton: '//nav[@id="top-menu-nav"]//li/a[text()="Portfolio"]',
    navSubMenu: (menu:string) => `//nav[@id="top-menu-nav"]//li[contains(@class,"current-menu-ancestor")]/a[text()="${menu}"]/../descendant::li[contains(@class,"current-menu-parent")]`
  },
  SUB_MENU: {
    inactiveTab: (tab:string) => locate('.inactive-team-tab div').withText(tab),
    webAutomationAndMobileTestingLink: `//nav[@id="top-menu-nav"]//li/a[text()="Web, Automation & Mobile Testing"]`,
    highlithedTab: (tab:string) => locate('.active-team-tab div').withText(tab),
  }
}
