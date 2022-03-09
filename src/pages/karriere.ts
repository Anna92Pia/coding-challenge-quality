const { I } = inject();

export = {

  PAGE_ELEMENTS: {
    bewirbDichJetztButton: '.et_pb_column .et_pb_button_module_wrapper .et_pb_button.qm-button',
    jetztBewerbenButton: '.btn[type="Submit"][value="Jetzt Bewerben"]',
    validationError: (validationMessage: string) => locate('.parsley-required').withText(validationMessage),
    vornameField: 'input[placeholder="Vorname*"]',
    nachnameField: 'input[placeholder="Nachname*"]',
    emailField: 'input[placeholder="Email*"]',
    dateienHochladenButton: locate(`.btn`).withAttr({ type: 'button' }).withText('Dateien hochladen'),
    dateienHochladenInput: locate(`input`).withAttr({ type: 'file' }),
    checkFileName: (fileName: string) => `//*[contains(@class,"dropzone")]/descendant::span[contains(@class,"file-name") and text()="${fileName}"]`
  },
}
