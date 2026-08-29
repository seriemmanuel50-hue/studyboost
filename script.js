// ==========================================
// STUDYBOOST — JAVASCRIPT
// ==========================================


// ------------------------------------------
// OUVRIR UN OUTIL
// ------------------------------------------

function ouvrirOutil(outil) {

    if (outil === "moyenne") {

        afficherCalculateurMoyenne();

    }

    else if (outil === "planning") {
         afficherPlanning();

    }

    else if (outil === "fiches") {

        afficherGenerateurFiches();

    }

    else if (outil === "chrono") {

        afficherChronometre();

    }

}


// ------------------------------------------
// CALCULATEUR DE MOYENNE
// ------------------------------------------

function afficherCalculateurMoyenne() {

    // Création de la fenêtre

    const fenetre = document.createElement("div");

    fenetre.id = "fenetre-moyenne";


    // Contenu de la fenêtre

    fenetre.innerHTML = `

        <div class="calculateur">

            <button
                class="fermer"
                onclick="fermerCalculateur()"
            >
                ✕
            </button>


            <h2>
                🧮 Calculateur de moyenne
            </h2>


            <p>
                Entre tes notes et leurs coefficients.
            </p>


            <div id="notes">

                <div class="ligne-note">

                    <input
                        type="number"
                        class="note"
                        placeholder="Note /20"
                        min="0"
                        max="20"
                        step="0.01"
                    >

                    <input
                        type="number"
                        class="coefficient"
                        placeholder="Coefficient"
                        min="1"
                        value="1"
                    >

                </div>

            </div>


            <button
                class="ajouter"
                onclick="ajouterNote()"
            >
                + Ajouter une note
            </button>


            <button
                class="calculer"
                onclick="calculerMoyenne()"
            >
                Calculer ma moyenne
            </button>


            <div id="resultat">
            </div>

        </div>

    `;


    // Ajoute la fenêtre à la page

    document.body.appendChild(fenetre);

}


// ------------------------------------------
// AJOUTER UNE NOTE
// ------------------------------------------

function ajouterNote() {

    const notes = document.getElementById("notes");


    const ligne = document.createElement("div");

    ligne.className = "ligne-note";


    ligne.innerHTML = `

        <input
            type="number"
            class="note"
            placeholder="Note /20"
            min="0"
            max="20"
            step="0.01"
        >


        <input
            type="number"
            class="coefficient"
            placeholder="Coefficient"
            min="1"
            value="1"
        >

    `;


    notes.appendChild(ligne);

}


// ------------------------------------------
// CALCULER LA MOYENNE
// ------------------------------------------

function calculerMoyenne() {

    const notes =
        document.querySelectorAll(".note");


    const coefficients =
        document.querySelectorAll(".coefficient");


    let total = 0;

    let totalCoefficients = 0;


    for (let i = 0; i < notes.length; i++) {

        const note =
            parseFloat(notes[i].value);


        const coefficient =
            parseFloat(coefficients[i].value);


        // Vérifie que la note est valide

        if (
            isNaN(note) ||
            isNaN(coefficient)
        ) {

            continue;

        }


        // Vérifie que la note est entre 0 et 20

        if (note < 0 || note > 20) {

            alert(
                "⚠️ Une note doit être comprise entre 0 et 20."
            );

            return;

        }


        total += note * coefficient;

        totalCoefficients += coefficient;

    }


    // Vérifie qu'il existe des notes

    if (totalCoefficients === 0) {

        alert(
            "⚠️ Ajoute au moins une note."
        );

        return;

    }


    // Calcul de la moyenne

    const moyenne =
        total / totalCoefficients;


    // Affichage du résultat

    const resultat =
        document.getElementById("resultat");


    resultat.innerHTML = `

        <div class="resultat-moyenne">

            <span>
                Ta moyenne
            </span>

            <strong>
                ${moyenne.toFixed(2)} / 20
            </strong>

        </div>

    `;

}


// ------------------------------------------
// FERMER LE CALCULATEUR
// ------------------------------------------

function fermerCalculateur() {

    const fenetre =
        document.getElementById("fenetre-moyenne");


    if (fenetre) {

        fenetre.remove();

    }

}
// ==========================================
// PLANNING DE RÉVISION
// ==========================================

function afficherPlanning() {

    const fenetre = document.createElement("div");

    fenetre.id = "fenetre-planning";

    fenetre.innerHTML = `

        <div class="planning">

            <button
                class="fermer"
                onclick="fermerPlanning()"
            >
                ✕
            </button>

            <h2>📅 Mon planning de révision</h2>

            <p>
                Ajoute une matière et le nombre d'heures
                que tu souhaites lui consacrer.
            </p>

            <input
                type="text"
                id="matiere"
                placeholder="Ex : Mathématiques"
            >

            <input
                type="number"
                id="heures"
                placeholder="Nombre d'heures"
                min="1"
            >

            <button
                class="calculer"
                onclick="ajouterMatiere()"
            >
                Ajouter au planning
            </button>

            <div id="liste-planning"></div>

        </div>

    `;

    document.body.appendChild(fenetre);
}


// Ajouter une matière

function ajouterMatiere() {

    const matiere =
        document.getElementById("matiere").value.trim();

    const heures =
        document.getElementById("heures").value;

    if (matiere === "" || heures === "") {

        alert("⚠️ Remplis les deux champs.");

        return;
    }

    const liste =
        document.getElementById("liste-planning");

    const element =
        document.createElement("div");

    element.className = "matiere-planning";

    element.innerHTML = `

        <strong>${matiere}</strong>

        <span>${heures} h</span>

    `;

    liste.appendChild(element);

    document.getElementById("matiere").value = "";

    document.getElementById("heures").value = "";
}


// Fermer le planning

function fermerPlanning() {

    const fenetre =
        document.getElementById("fenetre-planning");

    if (fenetre) {

        fenetre.remove();

    }
}
// ==========================================
// GÉNÉRATEUR DE FICHES DE RÉVISION
// ==========================================

function afficherGenerateurFiches() {

    const fenetre = document.createElement("div");

    fenetre.id = "fenetre-fiches";

    fenetre.innerHTML = `

        <div class="fiches">

            <button
                class="fermer"
                onclick="fermerFiches()"
            >
                ✕
            </button>

            <h2>📝 Ma fiche de révision</h2>

            <p>
                Entre les informations de ton cours.
            </p>

            <input
                type="text"
                id="titre-fiche"
                placeholder="Titre du cours"
            >

            <textarea
                id="cours-fiche"
                placeholder="Écris ici ton cours..."
            ></textarea>

            <textarea
                id="points-fiche"
                placeholder="Points importants à retenir..."
            ></textarea>

            <button
                class="calculer"
                onclick="genererFiche()"
            >
                Créer ma fiche 📝
            </button>

            <div id="resultat-fiche"></div>

        </div>
    `;

    document.body.appendChild(fenetre);
}


// ==========================================
// GÉNÉRER LA FICHE
// ==========================================

function genererFiche() {

    const titre =
        document.getElementById("titre-fiche").value.trim();

    const cours =
        document.getElementById("cours-fiche").value.trim();

    const points =
        document.getElementById("points-fiche").value.trim();

    if (titre === "" || cours === "") {

        alert("⚠️ Ajoute au moins un titre et ton cours.");

        return;
    }

    const resultat =
        document.getElementById("resultat-fiche");

    resultat.innerHTML = `

        <div class="fiche-resultat">

            <h3>
                ${titre}
            </h3>

            <h4>
                📚 Cours
            </h4>

            <p>
                ${cours.replace(/\n/g, "<br>")}
            </p>

            ${
                points !== ""
                ? `
                    <h4>
                        ⭐ À retenir
                    </h4>

                    <p>
                        ${points.replace(/\n/g, "<br>")}
                    </p>
                `
                : ""
            }

        </div>

    `;
}


// ==========================================
// FERMER LE GÉNÉRATEUR
// ==========================================

function fermerFiches() {

    const fenetre =
        document.getElementById("fenetre-fiches");

    if (fenetre) {

        fenetre.remove();

    }
}
// ==========================================
// CHRONOMÈTRE POMODORO
// ==========================================

let tempsRestant = 25 * 60;
let intervalleChrono = null;


// Afficher le chronomètre

function afficherChronometre() {

    const fenetre = document.createElement("div");

    fenetre.id = "fenetre-chrono";

    fenetre.innerHTML = `

        <div class="chrono">

            <button
                class="fermer"
                onclick="fermerChronometre()"
            >
                ✕
            </button>

            <h2>⏱️ Pomodoro</h2>

            <p>
                25 minutes de concentration.
            </p>

            <div id="temps">
                25:00
            </div>

            <div class="boutons-chrono">

                <button onclick="demarrerChronometre()">
                    ▶️ Démarrer
                </button>

                <button onclick="pauseChronometre()">
                    ⏸️ Pause
                </button>

                <button onclick="reinitialiserChronometre()">
                    🔄 Réinitialiser
                </button>

            </div>

        </div>

    `;

    document.body.appendChild(fenetre);
}


// Démarrer

function demarrerChronometre() {

    if (intervalleChrono !== null) {
        return;
    }

    intervalleChrono = setInterval(() => {

        if (tempsRestant > 0) {

            tempsRestant--;

            afficherTemps();

        } else {

            clearInterval(intervalleChrono);

            intervalleChrono = null;

            alert("🎉 Bravo ! Session terminée.");

        }

    }, 1000);
}


// Pause

function pauseChronometre() {

    clearInterval(intervalleChrono);

    intervalleChrono = null;
}


// Réinitialiser

function reinitialiserChronometre() {

    clearInterval(intervalleChrono);

    intervalleChrono = null;

    tempsRestant = 25 * 60;

    afficherTemps();
}


// Afficher le temps

function afficherTemps() {

    const element =
        document.getElementById("temps");

    if (!element) {
        return;
    }

    const minutes =
        Math.floor(tempsRestant / 60);

    const secondes =
        tempsRestant % 60;

    element.textContent =
        `${String(minutes).padStart(2, "0")}:${String(secondes).padStart(2, "0")}`;
}


// Fermer

function fermerChronometre() {

    clearInterval(intervalleChrono);

    intervalleChrono = null;

    const fenetre =
        document.getElementById("fenetre-chrono");

    if (fenetre) {
        fenetre.remove();
    }
}