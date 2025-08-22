import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Contactez-nous</h1>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Entrons en contact</h2>
          <p className="text-gray-600 mb-8">
            Nous serions ravis d'avoir de vos nouvelles. Envoyez-nous un message et nous vous répondrons dans les plus brefs délais.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-emma-blue-500 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Adresse</h3>
                <p className="text-gray-600">
                  Quartier Plateau<br />
                  Rue de la République<br />
                  Niamey, Niger
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-emma-blue-500 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Téléphone</h3>
                <p className="text-gray-600">+227 20 XX XX XX</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-emma-blue-500 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                <p className="text-gray-600">contact@emmalab.org</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-emma-blue-500 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Horaires d'ouverture</h3>
                <p className="text-gray-600">
                  Lundi - Vendredi : 8h00 - 17h00<br />
                  Samedi : 9h00 - 13h00<br />
                  Dimanche : Fermé
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nom *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emma-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emma-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emma-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emma-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-emma-blue-500 text-white py-2 px-4 rounded-md hover:bg-emma-blue-600 transition-colors"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
