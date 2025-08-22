import React from 'react';

const Partners: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <img
          src="/logo/Emma-Lab-horizontal.jpg"
          alt="Emma Lab"
          className="h-16 mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Partenaires</h1>
        <p className="text-lg text-gray-600">
          Nous collaborons avec des partenaires leaders de l'industrie pour offrir des résultats exceptionnels.
        </p>
      </div>
      <div className="prose max-w-none">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-32 h-24 mx-auto mb-4 flex items-center justify-center">
              <img
                src="/logo-partenere/BioMerieux18x600.png"
                alt="BioMérieux"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              BioMérieux
            </h3>
            <p className="text-gray-600">
              Leader mondial en diagnostic in vitro pour la santé publique.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-32 h-24 mx-auto mb-4 flex items-center justify-center">
              <img
                src="/logo-partenere/logo_thermofisher.png"
                alt="Thermo Fisher Scientific"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Thermo Fisher Scientific
            </h3>
            <p className="text-gray-600">
              Solutions scientifiques et technologiques de pointe pour la recherche.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-32 h-24 mx-auto mb-4 flex items-center justify-center">
              <img
                src="/logo-partenere/EDAN_LOGO20PXL.webp"
                alt="EDAN"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              EDAN
            </h3>
            <p className="text-gray-600">
              Équipements médicaux innovants et solutions de diagnostic.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-32 h-24 mx-auto mb-4 flex items-center justify-center">
              <img
                src="/logo-partenere/logo-snibe653233410d9dd6.95992438.png"
                alt="SNIBE"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              SNIBE
            </h3>
            <p className="text-gray-600">
              Solutions de diagnostic médical et équipements de laboratoire.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-32 h-24 mx-auto mb-4 flex items-center justify-center">
              <img
                src="/logo-partenere/logo_biomnis.jpg"
                alt="Biomnis"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Biomnis
            </h3>
            <p className="text-gray-600">
              Laboratoire de biologie médicale et analyses spécialisées.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-32 h-24 mx-auto mb-4 flex items-center justify-center">
              <img
                src="/logo-partenere/oxoidlogo.png"
                alt="Oxoid"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Oxoid
            </h3>
            <p className="text-gray-600">
              Milieux de culture et solutions pour la microbiologie.
            </p>
          </div>
        </div>

        <div className="bg-emma-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Devenir Partenaire
          </h2>
          <p className="text-gray-600 mb-6">
            Intéressé par un partenariat avec nous ? Nous recherchons toujours des partenariats stratégiques
            qui peuvent créer une valeur mutuelle et stimuler l'innovation.
          </p>
          <button className="bg-emma-blue-500 text-white px-6 py-3 rounded-lg hover:bg-emma-blue-600 transition-colors">
            Contacter l'Équipe Partenariats
          </button>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Avantages du Partenariat
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-emma-green-500 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Accès au Marché</h3>
                <p className="text-gray-600">Élargissez votre portée grâce à notre réseau établi.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-emma-green-500 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Partage Technologique</h3>
                <p className="text-gray-600">Tirez parti des technologies et innovations de pointe.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
