import React from 'react';
import { BookOpen, Lightbulb, Users, Rocket, Target, CheckCircle, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: 'Formations & Ateliers',
      description: 'Programmes de formation sur mesure pour développer vos compétences digitales et entrepreneuriales',
      features: [
        'Formation en présentiel et à distance',
        'Ateliers pratiques et interactifs',
        'Certification professionnelle',
        'Accompagnement personnalisé'
      ],
      price: 'À partir de 500€'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-green-600" />,
      title: 'Lab Innovation',
      description: 'Laboratoire d\'expérimentation pour tester et développer vos idées innovantes',
      features: [
        'Prototypage rapide',
        'Tests utilisateurs',
        'Validation de concepts',
        'Accompagnement technique'
      ],
      price: 'Sur devis'
    },
    {
      icon: <Users className="w-8 h-8 text-emma-green-500" />,
      title: 'Accompagnement Projets',
      description: 'Support complet de la conception à la mise en marché de vos projets innovants',
      features: [
        'Étude de faisabilité',
        'Plan de développement',
        'Recherche de financement',
        'Mise en relation partenaires'
      ],
      price: 'À partir de 2000€'
    },
    {
      icon: <Rocket className="w-8 h-8 text-emma-green-500" />,
      title: 'Incubation Startups',
      description: 'Programme d\'accélération pour transformer votre idée en entreprise viable',
      features: [
        'Mentorat expert',
        'Espace de co-working',
        'Réseau d\'investisseurs',
        'Support juridique et comptable'
      ],
      price: 'Programme 6-12 mois'
    }
  ];

  const domains = [
    {
      title: 'Transformation Digitale',
      description: 'Accompagnement dans la digitalisation des processus et la modernisation technologique',
      icon: <Target className="w-6 h-6 text-emma-blue-500" />
    },
    {
      title: 'Innovation Collaborative',
      description: 'Mise en place d\'écosystèmes d\'innovation ouverte et de co-création',
      icon: <Users className="w-6 h-6 text-emma-green-500" />
    },
    {
      title: 'Développement Produit',
      description: 'De l\'idée au prototype, accompagnement dans la création de produits innovants',
      icon: <Lightbulb className="w-6 h-6 text-emma-green-500" />
    },
    {
      title: 'Stratégie d\'Innovation',
      description: 'Définition et mise en œuvre de stratégies d\'innovation pour les organisations',
      icon: <Rocket className="w-6 h-6 text-emma-blue-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Claire Moreau',
      company: 'TechStart SAS',
      quote: 'EMMA-Lab nous a accompagnés de l\'idée initiale jusqu\'au lancement de notre produit. Leur expertise et leur réseau ont été déterminants pour notre succès.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Marc Dubois',
      company: 'Innovation Corp',
      quote: 'Les formations EMMA-Lab ont transformé notre approche de l\'innovation. Une équipe passionnée qui sait transmettre son expertise.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Des solutions sur mesure pour accompagner votre transformation digitale et vos projets d'innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Domaines d'intervention
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            EMMA-Lab intervient dans tous les aspects de l'innovation, de la formation des équipes 
            à l'accompagnement stratégique, en passant par le développement technologique et la mise en marché.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {domains.map((domain, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0">
                  {domain.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {domain.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {domain.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos offres spécifiques
            </h2>
            <p className="text-xl text-gray-600">
              Des services adaptés à chaque étape de votre projet
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <div className="text-blue-600 font-medium text-sm">
                      {service.price}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emma-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  En savoir plus
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre approche
            </h2>
            <p className="text-xl text-gray-600">
              Une méthodologie éprouvée en 4 étapes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Analyse', description: 'Étude approfondie de votre contexte et de vos besoins' },
              { step: '2', title: 'Stratégie', description: 'Définition d\'une roadmap adaptée à vos objectifs' },
              { step: '3', title: 'Mise en œuvre', description: 'Accompagnement dans la réalisation des actions' },
              { step: '4', title: 'Évaluation', description: 'Mesure des résultats et optimisation continue' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Témoignages clients
            </h2>
            <p className="text-xl text-gray-600">
              Ils nous font confiance
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <p className="text-gray-600 italic leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-blue-600 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous accompagner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Demander un devis
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Planifier un appel
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;