const {editerTicketDeCaisse} = require("./ticket");



describe("my scenarios",()=>{

  it('Le ticket doit mentionner les prix et infos TVA d\'un article commandé',()=>{
    //Given
    const refArticle = "#445587"
    const quantiteArticle = 2
    const prixArticle = 10
    const tauxTva = 20
    
    //When
    const ticket = editerTicketDeCaisse(quantiteArticle, prixArticle)
    
    //Then
    expect(ticket.totalArticle).toBe(20)
    expect(ticket.totalGeneral).toBe(20)
    expect(tauxTva).toBe(20)
  })

})

