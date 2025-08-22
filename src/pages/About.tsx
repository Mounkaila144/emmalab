import React from 'react';
import { Target, Eye, Heart, Users, Award, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const timeline = [
    {
      year: '2020',
      title: 'Création d\'EMMA-Lab',
      description: 'Lancement officiel du laboratoire d\'innovation avec une équipe de 5 personnes passionnées.'
    },
    {
      year: '2021',
      title: 'Premier programme d\'accélération',
      description: 'Accompagnement de 15 startups innovantes avec un taux de succès de 80%.'
    },
    {
      year: '2022',
      title: 'Expansion des services',
      description: 'Lancement des formations digitales et création du lab d\'innovation collaborative.'
    },
    {
      year: '2023',
      title: 'Partenariats stratégiques',
      description: 'Développement d\'un réseau de partenaires institutionnels et privés.'
    },
    {
      year: '2024',
      title: 'Reconnaissance nationale',
      description: 'Obtention du label "Excellence Innovation" et expansion à l\'international.'
    }
  ];

  const team = [
    {
      name: 'Marie Dupont',
      role: 'Directrice Générale',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: '15 ans d\'expérience dans l\'innovation et l\'entrepreneuriat'
    },
    {
      name: 'Thomas Martin',
      role: 'Directeur Innovation',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Expert en transformation digitale et nouvelles technologies'
    },
    {
      name: 'Sophie Leblanc',
      role: 'Responsable Programmes',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Spécialiste en accompagnement d\'entrepreneurs et formation'
    },
    {
      name: 'Alex Rodriguez',
      role: 'Chef de Projet Digital',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Développeur full-stack et expert en solutions numériques'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="text-white py-20" style={{background: 'linear-gradient(to right, #095ac3, #063a7a)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À propos d'EMMA-Lab
            </h1>
            <p className="text-xl text-emma-blue-100 max-w-3xl mx-auto leading-relaxed">
              Un laboratoire d'innovation dédié à l'accompagnement des entrepreneurs et à la transformation digitale des organisations.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre organisation
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              EMMA-Lab est né de la volonté de créer un écosystème d'innovation ouvert et collaboratif. 
              Nous croyons que l'innovation naît de la rencontre entre les idées, les compétences et les technologies. 
              Notre mission est d'accompagner les entrepreneurs, les entreprises et les institutions dans leur transformation 
              digitale en leur offrant les outils, les méthodes et l'expertise nécessaires pour réussir leurs projets innovants.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-emma-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-emma-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Accompagner les entrepreneurs et les organisations dans leur transformation digitale
                en proposant des solutions innovantes, des formations adaptées et un écosystème collaboratif.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-emma-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-emma-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Devenir la référence européenne en matière d'innovation collaborative et d'accompagnement
                à la transformation digitale pour créer un impact positif sur la société.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-emma-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-emma-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Valeurs</h3>
              <p className="text-gray-600 leading-relaxed">
                Innovation, collaboration, excellence et engagement social guident nos actions quotidiennes 
                pour construire ensemble un avenir plus innovant et durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre histoire
            </h2>
            <p className="text-xl text-gray-600">
              Un parcours jalonné d'innovations et de succès
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emma-blue-200"></div>
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-start mb-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold mr-8 relative z-10" style={{backgroundColor: '#095ac3'}}>
                  {item.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre équipe
            </h2>
            <p className="text-xl text-gray-600">
              Des experts passionnés au service de l'innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-emma-blue-500 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 text-white" style={{backgroundColor: '#095ac3'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-emma-blue-100">Entrepreneurs accompagnés</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">25</div>
              <div className="text-emma-blue-100">Projets lauréats</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Target className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-emma-blue-100">Taux de réussite</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-emma-blue-100">Années d'expérience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;