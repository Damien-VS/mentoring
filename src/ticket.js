
function editerTicketDeCaisse(quantiteArticle, prixArticle){
  const totalArticle = quantiteArticle * prixArticle
  const totalGeneral = totalArticle
  
  return {
           "totalArticle" : totalArticle,
           "totalGeneral" : totalGeneral,
         }
}

function getArticleFromCatalogue(refArticle, catalogue){

    for (let j = 0; j < catalogue.length; j++) {
        let article = catalogue[j]

        if(article.ean === refArticle){
            return article
        }
    }

}





module.exports = {editerTicketDeCaisse,getArticleFromCatalogue}