/* =====================================================================
   LISTE DE TES FORMATIONS — C'EST LE SEUL FICHIER À MODIFIER
   =====================================================================
   Pour AJOUTER une nouvelle formation : copie un bloc { ... } entier
   (de "id:" jusqu'à la virgule finale "}," ), colle-le juste après,
   puis change seulement les valeurs à l'intérieur.

   - id            : un nom court unique, sans espace (ex: "formation-4")
   - titre         : le nom de la formation
   - niveau        : "Débutant", "Intermédiaire", "Avancé", ou "À venir"
   - description   : une phrase qui donne envie
   - prix          : le montant en FCFA, juste le nombre (sans espace)
   - affiche       : le lien de l'image/affiche de la formation
                     (mets tes images dans un dossier "images/" à côté
                     de tes fichiers .html, puis écris "images/nom.jpg")
   - lienDrive     : le lien Google Drive de la formation (celui que tu
                     copies avec "Copier le lien" sur Google Drive).
                     C'est CE lien qui sera montré à l'apprenant une
                     fois qu'il a payé.
   ===================================================================== */

const FORMATIONS = [
  {
    id: "graphic-phone",
    titre: "Graphic Phone — Initiation PixelLab",
    niveau: "Débutant",
    description: "Apprends à créer des visuels professionnels avec PixelLab, uniquement depuis ton smartphone. Programme en 3 jours + exercices clients.",
    prix: 15000,
    affiche: "images/affiche-graphic-phone.jpg",
    lienDrive: "LIEN_GOOGLE_DRIVE_A_REMPLACER_1"
  },
  {
    id: "20-jours-20-creations",
    titre: "20 jours, 20 créations",
    niveau: "Intermédiaire",
    description: "Un défi guidé pour créer une habitude de design : un visuel par jour pendant 20 jours, avec correction et retours.",
    prix: 10000,
    affiche: "images/affiche-20-jours.jpg",
    lienDrive: "LIEN_GOOGLE_DRIVE_A_REMPLACER_2"
  }

  // ⬇⬇ Pour ta prochaine formation, décommente et modifie ce modèle ⬇⬇
  // ,{
  //   id: "ma-nouvelle-formation",
  //   titre: "Titre de la formation",
  //   niveau: "Débutant",
  //   description: "Description qui donne envie.",
  //   prix: 20000,
  //   affiche: "images/ma-nouvelle-affiche.jpg",
  //   lienDrive: "LIEN_GOOGLE_DRIVE"
  // }
];
