const {editerTicketDeCaisse,getArticleFromCatalogue} = require("./ticket");

const catalogueArticle = [
  {ean:"445587", designation:"tournevis", prix:10},
  {ean:"567894", designation:"marteau", prix:20.52},
]

// prochaine étape : refactoring du premier test ?


describe("infos prix du ticket de caisse",()=> {

  it('Le ticket doit mentionner les prix et infos TVA d\'un article commandé', () => {
    //Given
    const refArticle = "#445587"
    const quantiteArticle = 2
    const prixArticle = 10
    const tauxTva = 20
    const designationArticle = "tournevis"

    //When
    const ticket = editerTicketDeCaisse(quantiteArticle, prixArticle, designationArticle )

    //Then
    expect(ticket.totalArticle).toBe(20)
    expect(ticket.totalGeneral).toBe(20)
    expect(ticket.prixArticle).toBe(10)
    expect(ticket.designationArticle).toBe("tournevis")
    expect(tauxTva).toBe(20)
  })
})

describe("recherche de prix dans le catalogue",()=>{

  it('recherche de prix d un tournevis dans le catalogue',()=>{
  //   Given
    const refArticle = "445587"

    // When
    const article = getArticleFromCatalogue(refArticle, catalogueArticle)

    // Then
    expect(article.prix).toBe(10)
  })

  it('recherche de prix d un marteau dans le catalogue',()=>{
    // Given
    const refArticle = "567894"

    // When
    const article = getArticleFromCatalogue(refArticle, catalogueArticle)

    // Then
    expect(article.prix).toBe(20.52)
  })
})
