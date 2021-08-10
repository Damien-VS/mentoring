
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

Le ticket doit mentionner les prix et infos TVA d'un article commandé

je reçois :
- Une reference d'article : "#445587"
- Une quantité d'article : 2
- Un catalogue comprenant l'article
    - et le prix unitaire : 10 €

Le ticket de caisse doir comporter :
- la designation de l'article
- la quantité
- le prix unitaire : 10€
- le total article : 20€
- le total général : 20€
- le taux de TVA : 20%
- montant HTVA : 16.66€
- montant TTC : 20€