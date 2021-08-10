
function editerTicketDeCaisse(quantiteArticle, prixArticle){
  const totalArticle = quantiteArticle * prixArticle
  const totalGeneral = totalArticle
  
  return {
           "totalArticle" : totalArticle,
           "totalGeneral" : totalGeneral,
         }
}





module.exports = {editerTicketDeCaisse}