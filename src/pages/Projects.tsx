import React from 'react';
import { ExternalLink, Calendar, Users, Target } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      name: 'Digital Health Platform',
      category: 'Santé Numérique',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Plateforme collaborative pour la télémédecine et le suivi patient à distance avec IA intégrée.',
      status: 'En cours',
      duration: '18 mois',
      team: '12 personnes'
    },
    {
      name: 'Smart City Solutions',
      category: 'IoT & Smart Cities',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Écosystème IoT pour optimiser la gestion urbaine : éclairage, transport et gestion des déchets.',
      status: 'Terminé',
      duration: '24 mois',
      team: '15 personnes'
    },
    {
      name: 'EduTech Revolution',
      category: 'Éducation & Formation',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Plateforme d\'apprentissage adaptatif utilisant l\'intelligence artificielle pour personnaliser l\'enseignement.',
      status: 'En cours',
      duration: '12 mois',
      team: '8 personnes'
    },
    {
      name: 'Green Finance Tracker',
      category: 'FinTech & Environnement',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Solution blockchain pour tracer et certifier les investissements durables et l\'impact environnemental.',
      status: 'Planifié',
      duration: '15 mois',
      team: '10 personnes'
    },
    {
      name: 'AI-Powered Agriculture',
      category: 'AgTech',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Système de surveillance et optimisation des cultures par drone et analyse d\'images par IA.',
      status: 'En cours',
      duration: '20 mois',
      team: '14 personnes'
    },
    {
      name: 'Cybersecurity Shield',
      category: 'Cybersécurité',
      image: 'https://images.pexels.com/photos/3184350/pexels-photo-3184350.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Suite de protection avancée pour PME avec détection proactive des menaces et réponse automatisée.',
      status: 'Terminé',
      duration: '16 mois',
      team: '11 personnes'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours':
        return 'bg-emma-blue-100 text-emma-blue-800';
      case 'Terminé':
        return 'bg-emma-green-100 text-emma-green-800';
      case 'Planifié':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const categories = [...new Set(projects.map(project => project.category))];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Projets & Programmes
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos initiatives innovantes qui façonnent l'avenir de la technologie et de l'entrepreneuriat.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Innovation en action
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            EMMA-Lab pilote et accompagne des projets innovants dans des secteurs stratégiques. 
            Chaque projet est conçu pour avoir un impact positif sur la société tout en créant de la valeur économique. 
            Nos équipes multidisciplinaires travaillent en collaboration avec des partenaires de premier plan pour 
            transformer les idées en solutions concrètes.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-emma-blue-500 text-white rounded-full text-sm font-medium">
              Tous les projets
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-emma-blue-500 font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      Durée: {project.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      Équipe: {project.team}
                    </div>
                  </div>
                  <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    <Target className="w-4 h-4 mr-2" />
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 text-white" style={{backgroundColor: '#095ac3'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Impact de nos projets
            </h2>
            <p className="text-xl text-emma-blue-100">
              Des résultats concrets qui font la différence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-emma-blue-100">Projets réalisés</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">€2.5M</div>
              <div className="text-emma-blue-100">Investissements levés</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-emma-blue-100">Emplois créés</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-emma-blue-100">Brevets déposés</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Vous avez un projet innovant ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Rejoignez notre écosystème d'innovation et bénéficiez de notre expertise pour concrétiser vos idées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Proposer un projet
              <ExternalLink className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200">
              Découvrir nos services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;