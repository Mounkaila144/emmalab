import React from 'react';

const News: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <img
          src="/logo/Emma-Lab-horizontal.jpg"
          alt="Emma Lab"
          className="h-16 mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Actualités</h1>
        <p className="text-lg text-gray-600">
          Restez informé des dernières actualités et annonces.
        </p>
      </div>
      <div className="prose max-w-none">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Dernière mise à jour
              </h2>
              <p className="text-gray-600 mb-4">
                Découvrez les dernières innovations et développements de notre entreprise. Nous continuons d'évoluer pour mieux vous servir.
              </p>
              <span className="text-sm text-gray-500">15 janvier 2024</span>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Étape importante
              </h2>
              <p className="text-gray-600 mb-4">
                Notre entreprise franchit une nouvelle étape dans son développement avec l'atteinte d'objectifs stratégiques majeurs.
              </p>
              <span className="text-sm text-gray-500">10 janvier 2024</span>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Actualités du secteur
              </h2>
              <p className="text-gray-600 mb-4">
                Les tendances et évolutions du marché qui impactent notre industrie et nos services.
              </p>
              <span className="text-sm text-gray-500">5 janvier 2024</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default News;
