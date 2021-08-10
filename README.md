
# Ticket de caisse
Ecrire un programme qui imprime un ticket de caisse
pour le client d'un magasin

- le programme reçois la liste des identifiants 
  articles achetés (code barre)
- le programme reçois le catalogue des informations articles

- additionne les prix des articles
- afficher les infos suivantes :
    - designation article
    - prix unitaire
    - quantité
    - total article
    - total général
- TVA
    - le taux de TVA appliqué
    - montant HTVA global
    - montant TCC global
- date et heure d'achat
- enseigne / logo
- hôte.sse de caisse
- moyen de paiement

___

## Example mapping

le prix d'un article se trouve dans un catalogue
indexé sur son code-barre

je reçois :
- Une reference d'article : "#445587"
- Un catalogue comprenant l'article
  - designation article "tournevis"
  - le prix unitaire : 10 €

je retrouve le prix de l'article