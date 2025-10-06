describe('property search spec', () => {
  beforeEach(() => {
    cy.visit('https://www.property24.com')
  })

  it('assert URL', () => {
    cy.url().should('contain','property24.com')
  })

  it('assert tittle', () => {
    cy.title('contain','Property for Sale: Houses for sale: Property24')
  })

  it('assert Element', () => {
    cy.get('h1').should('be.visible')
  })

  it('assert suburb searched', () => {
    cy.get('#token-input-AutoCompleteItems').should('be.visible')
    cy.get('#token-input-AutoCompleteItems').type('Aerorand ,Middelburg,Mpumalanga');
    cy.get('#SearchBox > div > ul > li:nth-child(3)').click()
    cy.get('#SearchBar > div.p24_SearchForm > div.row > div > form > div.p24_homeWrap.clearfix > div > div > button').click()
    cy.get('body > div.p24_theme > div.p24_areas > div > div > div:nth-child(1) > div > h1')
    .should('contain.text', 'Property for Sale in Aerorand');
  })
})

