import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Lightbulb, TrendingUp, Calendar, ExternalLink } from 'lucide-react';

const Home: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-emma-blue-500" />,
      title: 'Innovation',
      description: 'Nous cultivons l\'esprit d\'innovation pour accompagner la transformation digitale'
    },
    {
      icon: <Users className="w-8 h-8 text-emma-green-500" />,
      title: 'Collaboration',
      description: 'Nous favorisons les synergies entre entrepreneurs, institutions et partenaires'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-emma-green-500" />,
      title: 'Créativité',
      description: 'Nous encourageons les approches créatives pour résoudre les défis contemporains'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emma-blue-500" />,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans tous nos projets et accompagnements'
    }
  ];

  const recentNews = [
    {
      title: 'Lancement du programme d\'accélération 2025',
      date: '15 Janvier 2025',
      excerpt: 'EMMA-Lab lance son nouveau programme d\'accélération destiné aux startups innovantes...',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Partenariat stratégique avec Tech Solutions',
      date: '10 Janvier 2025',
      excerpt: 'Un nouveau partenariat pour renforcer notre écosystème d\'innovation et d\'accompagnement...',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden" style={{background: 'linear-gradient(to bottom right, #095ac3, #074a9e, #063a7a)'}}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Innovons ensemble pour
                <span className="text-emma-green-500 block">l'avenir</span>
              </h1>
              <p className="text-xl text-emma-blue-100 leading-relaxed mb-8">
                EMMA-Lab est un laboratoire d'innovation qui accompagne les entrepreneurs et les organisations dans leur transformation digitale et leurs projets innovants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-emma-blue-900 bg-white hover:bg-gray-100 transition-colors duration-200"
                >
                  Découvrir nos projets
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-emma-blue-900 transition-colors duration-200"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Innovation et technologie"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl" style={{background: 'linear-gradient(to top, rgba(9, 90, 195, 0.5), transparent)'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos valeurs fondamentales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Actualités récentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos dernières nouvelles et projets
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recentNews.map((news, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {news.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {news.excerpt}
                  </p>
                  <Link
                    to="/news"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                  >
                    Lire la suite
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/news"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-base font-medium rounded-lg text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Voir toutes les actualités
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{background: 'linear-gradient(to right, #095ac3, #063a7a)'}}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à concrétiser votre projet ?
          </h2>
          <p className="text-xl text-emma-blue-100 mb-8 leading-relaxed">
            Rejoignez notre communauté d'innovateurs et bénéficiez de notre expertise pour développer vos idées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-emma-blue-500 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Contactez-nous
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Partenaires de Confiance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous collaborons avec des leaders de l'industrie pour offrir des solutions innovantes
            </p>
          </div>

          {/* Partners Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center">
              {/* First set of logos */}
              <div className="flex space-x-12 items-center min-w-max">
                <div className="flex items-center justify-center w-40 h-24 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
                  <img
                    src="/logo-partenere/BioMerieux18x600.png"
                    alt="BioMérieux"
                    className="max-w-full max-h-full object-contain hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center w-40 h-24 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
                  <img
                    src="/logo-partenere/logo_thermofisher.png"
                    alt="Thermo Fisher Scientific"
                    className="max-w-full max-h-full object-contain hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center w-40 h-24 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
                  <img
                    src="/logo-partenere/EDAN_LOGO20PXL.webp"
                    alt="EDAN"
                    className="max-w-full max-h-full object-contain hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center w-40 h-24 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
                  <img
                    src="/logo-partenere/logo-snibe653233410d9dd6.95992438.png"
                    alt="SNIBE"
                    className="max-w-full max-h-full object-contain hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center w-40 h-24 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
                  <img
                    src="/logo-partenere/logo_biomnis.jpg"
                    alt="Biomnis"
                    className="max-w-full max-h-full object-contain hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center w-40 h-24 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
                  <img
                    src="/logo-partenere/oxoidlogo.png"
                    alt="Oxoid"
                    className="max-w-full max-h-full object-contain hover:scale-110 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-12 items-center min-w-max">
                <div className="flex items-center justify-center w-40 h-24 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
                  <img
                    src="/logo-partenere/BioMerieux18x600.png"
                    alt="BioMérieux"
                    className="max-w-full max-h-full object-contain hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center w-40 h-24 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
                  <img
                    src="/logo-partenere/logo_thermofisher.png"
                    alt="Thermo Fisher Scientific"
                    className="max-w-full max-h-full object-contain hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center w-40 h-24 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
                  <img
                    src="/logo-partenere/EDAN_LOGO20PXL.webp"
                    alt="EDAN"
                    className="max-w-full max-h-full object-contain hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center w-40 h-24 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
                  <img
                    src="/logo-partenere/logo-snibe653233410d9dd6.95992438.png"
                    alt="SNIBE"
                    className="max-w-full max-h-full object-contain hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center w-40 h-24 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
                  <img
                    src="/logo-partenere/logo_biomnis.jpg"
                    alt="Biomnis"
                    className="max-w-full max-h-full object-contain hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center w-40 h-24 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
                  <img
                    src="/logo-partenere/oxoidlogo.png"
                    alt="Oxoid"
                    className="max-w-full max-h-full object-contain hover:scale-110 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/partners"
              className="inline-flex items-center px-6 py-3 border border-emma-blue-500 text-emma-blue-500 font-medium rounded-lg hover:bg-emma-blue-500 hover:text-white transition-colors duration-200"
            >
              Découvrir tous nos partenaires
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;