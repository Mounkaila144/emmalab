import React from 'react';

const Media: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <img
          src="/logo/Emma-Lab-horizontal.jpg"
          alt="Emma Lab"
          className="h-16 mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Médias</h1>
        <p className="text-lg text-gray-600">
          Explorez notre galerie média et nos ressources.
        </p>
      </div>
      <div className="prose max-w-none">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Espace Image</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Galerie de Projets
              </h3>
              <p className="text-gray-600 text-sm">
                Consultez les images et la documentation de nos derniers projets.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Espace Vidéo</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Vidéos d'Entreprise
              </h3>
              <p className="text-gray-600 text-sm">
                Regardez notre présentation d'entreprise et nos showcases de projets.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Espace Document</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Téléchargements
              </h3>
              <p className="text-gray-600 text-sm">
                Accédez aux brochures, études de cas et autres ressources.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Kit Presse</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-600 mb-4">
              Téléchargez notre kit presse pour les demandes médias et publications.
            </p>
            <button className="bg-emma-blue-500 text-white px-6 py-2 rounded-lg hover:bg-emma-blue-600 transition-colors">
              Télécharger le Kit Presse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
