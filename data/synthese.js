function genererSyntheseGuidante(cartesTirees, aspect, options = {}) {
  const { question = "", prenom = "", mode = "normal" } = options;

  const tensions = [];
  const ouvertures = [];
  const seuils = [];

  const motsClesTension = [
    "blocage", "inertie", "refus", "conflit", "figement", "déni de soi", "fermeture",
    "auto-sabotage", "fragmentation", "dissonance émotionnelle", "négation", "tension interne",
    "colère non intégrée", "dépendance affective", "auto trahison", "perte de repères", "fuite de soi",
    "obstacles intérieurs", "déséquilibre", "colaboration inégale", "résistance au changement",
    "auto-illusion", "rupture forcée", "instabilité", "tension", "peur", "perte", "isolement",
    "brouillard", "labyrinthe", "doute", "frustration", "manque", "injustice", "rupture",
    "clivage", "stagnation", "impasse", "dogmatisme"
  ];

  const motsClesOuverture = [
    "ouverture", "croissance", "transformation", "libération", "expansion", "souplesse", "écoute",
    "renaissance", "percée spirituelle", "éveil de conscience", "révélation", "diplomatie",
    "alignement", "ascension professionnelle", "vision élargie", "ajustement",
    "guérison émotionnelle", "réintégration", "maturation spirituelle", "vérité",
    "réorientation", "harmonie retrouvée", "paix intérieure", "naissance", "création", "appel", "quête",
    "sagesse", "rayonnement", "harmonie", "abondance", "réussite"
  ];

  const motsClesSeuil = [
    "seuil", "passage", "transition", "mutation", "bascule", "temple", "choix", "réajustement",
    "cycle achevé", "fin de cycle", "seuil évolutif", "mue intérieure", "vacillement",
    "passage symbolique", "mutation spirituelle", "nouveau départ", "pause", "mort", "conscience",
    "rééquilibrage"
  ];

  cartesTirees.forEach(({ carte, sens }) => {
    const texte = carte[sens]?.[aspect]?.texte?.toLowerCase() || "";
    const meta = (carte[sens]?.[aspect]?.meta || []).join(" ").toLowerCase();
    const contenu = meta + " " + texte;

    if (motsClesTension.some(m => contenu.includes(m))) tensions.push(carte.nom);
    if (motsClesOuverture.some(m => contenu.includes(m))) ouvertures.push(carte.nom);
    if (motsClesSeuil.some(m => contenu.includes(m))) seuils.push(carte.nom);
  });

  const lignes = [];

  if (seuils.length) lignes.push("→ Un passage symbolique est activé dans ce tirage.");

  if (tensions.length) {
    lignes.push("Une dynamique de tension se manifeste :");
    tensions.forEach(nom => lignes.push(`• ${nom}`));
  }

  if (ouvertures.length) {
    lignes.push("Mais un mouvement d'ouverture est perceptible :");
    ouvertures.forEach(nom => lignes.push(`• ${nom}`));
  }

  if (!tensions.length && !ouvertures.length) {
    lignes.push("Le tirage est neutre — aucune tension ni ouverture particulière n’est détectée.");
  }

  // Synthèse finale
  let bilan = "";
  const base = prenom || "Cette personne";

  if (mode === "lien") {
    if (prenom.toLowerCase() === "ce tirage") {
      bilan = tensions.length === 0
        ? "Ce tirage dégage une vibration fluide et alignée."
        : tensions.length <= ouvertures.length
          ? "Ce tirage est en transition : des tensions sont présentes, mais un mouvement de transformation est à l’œuvre."
          : "Ce tirage traverse des résistances importantes, mais une évolution reste possible.";
    } else {
      bilan = tensions.length === 0
        ? `Le lien entre ${prenom} dégage une vibration fluide et alignée.`
        : tensions.length <= ouvertures.length
          ? `Le lien entre ${prenom} est en transition : des tensions sont présentes, mais un mouvement de transformation est à l’œuvre.`
          : `Le lien entre ${prenom} traverse des résistances importantes, mais une évolution reste possible.`;
    }
  } else {
    bilan = tensions.length === 0
      ? `${base} dégage une vibration fluide et alignée.`
      : tensions.length <= ouvertures.length
        ? `${base} est en transition : des tensions sont présentes, mais le mouvement intérieur est vivant.`
        : `${base} fait face à des résistances marquées, mais une force de transformation est en veille.`;
  }

  lignes.push("\n→ " + bilan);

  if (question) {
    lignes.push(`\n En réponse à la question : « ${question} »`);
  }

  return lignes.join("\n");
}

