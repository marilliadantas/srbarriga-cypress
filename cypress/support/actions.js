function click(el) {
  waitElement(el);
  cy.get(el).click();
}

function waitElement(el) {
  return cy.get(el, { timeout: 10000 }).should("be.visible");
}

function getText(el) {
  waitElement(el);
  return cy.get(el).invoke("text");
}

function set(el, text, option = {}) {
  waitElement(el);
  cy.get(el)
    .clear()
    .type(text, option);
}

function getMessages(el) {
  const mensagens = [];
  return cy
    .get(el)
    .each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          mensagens.push(text.trim());
        });
    })
    .then(() => mensagens);
}

module.exports = {
  set, click, waitElement, getText, getMessages
};