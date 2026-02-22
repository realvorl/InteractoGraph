const TOC = [
  { "title": "the-censorship-brush", "url": 'https://dev.to/realvorl/the-censorship-brush-gimp-enabled-invoice-redaction-42mh' },
  { "title": "climate-positive-public-license", "url": 'https://dev.to/realvorl/introducing-the-climate-positive-public-license-b2b' },
  { "title": "overcoming-the-pigdog", "url": 'https://dev.to/realvorl/overcoming-the-pigdog-thanks-to-good-design-23io' },
  { "title": "dyslexic-dev", "url": 'https://dev.to/realvorl/dyslexic-dev-no-problem-1nfc' },
  { "title": "can-you-focus", "url": 'https://dev.to/realvorl/can-you-focus-on-work-when-owning-bitcoin-l95' },
  { "title": "browser-extensions", "url": 'https://dev.to/realvorl/browser-extensions-if-you-liked-it-don-t-forget-to-it-1kf3' },
  { "title": "if-you-don-t-like-it", "url": 'https://dev.to/realvorl/if-you-don-t-like-it-change-it-ag5' },
  { "title": "meld-alternative", "url": 'https://dev.to/realvorl/meld-alternative-for-macos-2ohk' }
];

let i = parseInt(Cypress.env('i'));
const url = TOC[i].url;
const art = TOC[i].title;

function textFromVisible(selector) {
  // Visit the URL
  cy.visit(url);

  // Wait for the selected element to load
  cy.get(selector, { timeout: 10000 }).should('be.visible');
  cy.get(selector, { timeout: 10000 }).should('be.ok');

  // Get the text and return it
  return cy.get(selector).invoke('text').then(text => text.trim());
}

describe('Comments on dev.to [' + art + ']', () => {
  it('checks the number of comments', () => {
    textFromVisible('span.js-comments-count').then((value) => {
      cy.writeFile('analitycs-4-art-' + i + '.json', `{"title":"${art}","comments-count": "${value}",`, { flag: 'w+' });
    });
  });
});

describe('Reactions on dev.to [' + art + ']', () => {
  it('checks and logs the number of reactions', () => {
    textFromVisible('span#reaction_total_count')
      .then((value) => {
        cy.writeFile('analitycs-4-art-' + i + '.json', `"reactions-count": "${value}"}`, { flag: 'a+' });
      });
  });
});
