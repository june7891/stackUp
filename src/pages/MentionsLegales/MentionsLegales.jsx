
import { Link } from "react-router";
import "./MentionsLegales.css";

function MentionsLegales() {
  return (
    <main className="mentions-page">
      <div className="mentions-container">

        {/* Retour à l'accueil */}
        <Link to="/" className="mentions-back">
          ← Retour à l'accueil
        </Link>

        {/* En-tête */}
        <header className="mentions-hero">
          <span className="mentions-eyebrow">
            INFORMATIONS JURIDIQUES
          </span>

          <h1>
            Mentions <span>légales</span>
          </h1>

          <p>
            Retrouvez les informations relatives à
            l'édition, à l'hébergement et à l'utilisation
            de la plateforme StackUp.
          </p>
        </header>

        <div className="mentions-content">

          {/* 01 - Éditeur */}
          <section className="mentions-card">
            <span className="mentions-number">01</span>
            <h2>Éditeur du site</h2>

            <p>
              Le site StackUp est édité par la société
              fictive <strong>StackUp SAS</strong>,
              plateforme de recrutement et de mise
              en relation entre candidats et recruteurs.
            </p>

            <ul>
              <li>
                <strong>Raison sociale :</strong>
                {" "}StackUp SAS
              </li>

              <li>
                <strong>Forme juridique :</strong>
                {" "}Société par actions simplifiée (SAS)
              </li>

              <li>
                <strong>Capital social :</strong>
                {" "}10 000 €
              </li>

              <li>
                <strong>Siège social :</strong>
                {" "}Place Ravezies, 33300 Bordeaux, France
              </li>

              <li>
                <strong>SIREN :</strong>
                {" "}3 personnes
              </li>

              <li>
                <strong>RCS :</strong>
                {" "}Bordeaux
              </li>

              <li>
                <strong>Directrice de publication :</strong>
                {" "}A tour de rôle
              </li>

              <li>
                <strong>Adresse électronique :</strong>
                {" "}
                <a href="mailto:contact@stackup.fr">
                  contact@stackup.fr
                </a>
              </li>
            </ul>
          </section>

          {/* 02 - Hébergement */}
          <section className="mentions-card">
            <span className="mentions-number">02</span>
            <h2>Hébergement du site</h2>

        

            <ul>
              <li>
                <strong>Hébergeur :</strong>
                {" "}Hostinger
              </li>

              <li>
                <strong>Adresse :</strong>
                {" "}15 rue des Serveurs, 75000 Paris
                
              </li>

              <li>
                <strong>Contact :</strong>
                {" "}
                <a href="mailto:support@stackup-hosting.fr">
                  support@stackup-hosting.fr
                </a>
              </li>
            </ul>
          </section>

          {/* 03 - Propriété intellectuelle */}
          <section className="mentions-card">
            <span className="mentions-number">03</span>
            <h2>Propriété intellectuelle</h2>

            <p>
              Les contenus originaux de StackUp,
              notamment les textes, éléments graphiques,
              logos et interfaces, sont susceptibles
              d'être protégés par le droit de la
              propriété intellectuelle.
            </p>

            <p>
              Toute reproduction, représentation,
              modification ou diffusion doit respecter
              les droits des titulaires concernés.
            </p>

            <p>
              Les marques et contenus appartenant
              à des tiers restent la propriété de
              leurs détenteurs respectifs.
            </p>
          </section>

          {/* 04 - Données personnelles */}
          <section className="mentions-card">
            <span className="mentions-number">04</span>
            <h2>Protection des données personnelles</h2>

            <p>
              StackUp peut collecter des données
              personnelles lors de l'inscription,
              de la connexion et de la candidature
              à une offre d'emploi.
            </p>

            <p>
              Ces données peuvent notamment comprendre
              le nom, le prénom, l'adresse électronique
              et les informations communiquées
              volontairement par les utilisateurs.
            </p>

            <p>
              <strong>Responsable du traitement :</strong>
              {" "}StackUp SAS (société fictive)
            </p>

            <p>
              <strong>Contact relatif aux données :</strong>
              {" "}
              <a href="mailto:privacy@stackup.fr">
                privacy@stackup.fr
              </a>
            </p>

            <p>
              Conformément au RGPD, les utilisateurs
              disposent, selon les conditions applicables,
              de droits d'accès, de rectification,
              d'effacement, d'opposition et de limitation
              du traitement de leurs données.
            </p>

            <p>
              Une politique de confidentialité distincte
              devra préciser les finalités des traitements,
              leurs bases légales, les durées de conservation
              et les destinataires des données.
            </p>
          </section>

          {/* 05 - Cookies */}
          <section className="mentions-card">
            <span className="mentions-number">05</span>
            <h2>Cookies et traceurs</h2>

            <p>
              StackUp peut utiliser des cookies ou
              technologies similaires nécessaires
              au fonctionnement de la plateforme.
            </p>

            <p>
              Si des traceurs non essentiels sont
              utilisés, les utilisateurs seront informés
              et leur consentement sera recueilli
              lorsque la réglementation l'exige.
            </p>
          </section>

          {/* 06 - Responsabilité */}
          <section className="mentions-card">
            <span className="mentions-number">06</span>
            <h2>Responsabilité</h2>

            <p>
              StackUp a pour objectif de faciliter
              la consultation d'offres d'emploi et
              la mise en relation entre candidats
              et recruteurs.
            </p>

            <p>
              Les informations publiées par des tiers
              peuvent évoluer. Les utilisateurs sont
              invités à vérifier les caractéristiques
              des offres directement auprès
              des recruteurs concernés.
            </p>

            <p>
              Les présentes dispositions ne limitent
              pas les droits reconnus aux utilisateurs
              par la législation applicable.
            </p>
          </section>

        </div>

        {/* Bas de page */}
        <div className="mentions-bottom">
          <p>
            Projet fictif — 
            Les coordonnées et informations
            d'immatriculation sont fictives.
          </p>

          <Link to="/" className="mentions-home-btn">
            Retour à l'accueil
          </Link>
        </div>

      </div>
    </main>
  );
}

export default MentionsLegales;
