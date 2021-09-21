
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

 - **Story :** imprimer un ticket pour le client
   - **Règle :** trouver le prix d'un article (source : catalogue + code-barre)
     - **Exemple :**<br> 
       je reçois :<br>
       Une reference d'article : "#445587"<br>
       Un catalogue comprenant l'article<br>
        -> designation article "tournevis"<br>
        -> le prix unitaire : 10 €<br>
       je retrouve le prix de l'article<br><br>
     - **Exemple :**<br>
       je reçois :<br>
       Une reference d'article : "#567894"<br>
       Un catalogue comprenant l'article<br>
       -> designation article "marteau"<br>
       -> le prix unitaire : 20,52 €<br>
       je retrouve le prix de l'article<br><br>
     
   - **Règle :** Le ticket doit mentionner le prix d'un article
     - **Exemple :**<br>
       le client achete un article a 10€<br>
       Le ticket de caisse doir comporter :<br>
       -> la designation de l'article<br>
       -> le prix unitaire : 10€<br><br>
     
   - **Règle :** Le ticket doit mentionner les infos TVA
     - **Exemple :**<br>
       je reçois :<br>
       deux articles a 10 €<br>
       Le ticket de caisse doir comporter :<br>
       -> le taux de TVA : 20%<br>
       -> montant HTVA : 16.66€<br>
       -> montant TTC : 20€<br><br>

   - **Règle :** le ticket doit comporter la liste des articles achetés (noms + prix unitaire)
   
   - **Règle :** lorsque l'article n'est pas dans le catalogue -> envoyer un message d'erreur