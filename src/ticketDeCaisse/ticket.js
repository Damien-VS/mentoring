function editerTicketDeCaisse(quantiteArticle, prixArticle, designationArticle){
  const totalArticle = quantiteArticle * prixArticle
  const totalGeneral = totalArticle
  
  return {
           "totalArticle" : totalArticle,
           "totalGeneral" : totalGeneral,
           "prixArticle" : prixArticle,
           "designationArticle" : designationArticle,
         }
}

function getArticleFromCatalogue(refArticle, catalogue){

    for (let j = 0; j < catalogue.length; j++) {
        let article = catalogue[j]

        if(article.ean === refArticle){
            return article
        }
    }
} //FIXME : ligne non couverte par les tests - aucun test ne sort de la boucle sans rien retourner


module.exports = {editerTicketDeCaisse,getArticleFromCatalogue}
