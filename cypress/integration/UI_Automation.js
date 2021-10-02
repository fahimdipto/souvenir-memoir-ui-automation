/// <reference types ="cypress" />
import faker from 'faker';


it('Creating New Memoirs', ()=>{
    cy.visit('https://souvenir-memoirs.netlify.app/');
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(faker.name.firstName());
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type(faker.lorem.sentence());
    cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type(faker.lorem.paragraph());
    cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').type(faker.lorem.words(1)).type(',forDelete,').type(faker.lorem.words(1));
    const pic = 'pic.png';
    cy.get('.jss11 > input').attachFile(pic);
    cy.get('.jss12 > .MuiButton-label').click();
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click();
    cy.get('.MuiAppBar-root > .MuiTypography-root').should('contain','Souvenirs');
})