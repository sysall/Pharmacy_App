import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, Users, Droplets, MessageCircle, MapPin, Phone, Clock, Send, ShoppingBag, HelpCircle, Truck, Baby, Leaf, Utensils, Sparkles, Blocks as Socks, Stethoscope } from 'lucide-react';

type TabType = 'apercu' | 'services' | 'expertises' | 'actualites' | 'promos' | 'equipe' | 'pharmacie-de-garde';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Guillaume',
    role: 'Docteur en Pharmacie - Pharmacien Titulaire',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    name: 'Maxime',
    role: 'Docteur en Pharmacie - Pharmacien Titulaire',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    name: 'Louis',
    role: 'Docteur en Pharmacie',
    imageUrl: 'https://placehold.co/200x200/e2e8f0/94a3b8?text=L'
  },
  {
    name: 'Anaëlle',
    role: 'Docteur en Pharmacie - Pharmacien Adjoint',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    name: 'Eva',
    role: 'Préparatrice en Pharmacie - Conseillère en Naturopathie',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    name: 'Véronique',
    role: 'Préparatrice en Pharmacie',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    name: 'Emma',
    role: 'Préparatrice en Pharmacie',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    name: 'Elodie',
    role: 'Préparatrice en Pharmacie',
    imageUrl: 'https://placehold.co/200x200/e0f2fe/38bdf8?text=E'
  },
  {
    name: 'Corinne',
    role: 'Responsable entretien des locaux',
    imageUrl: 'https://placehold.co/200x200/e0f2fe/38bdf8?text=C'
  },
  {
    name: 'Gaëlle',
    role: 'Logisticienne',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    name: 'Héloïse',
    role: 'Etudiante en 6ème année de Pharmacie',
    imageUrl: 'https://placehold.co/200x200/e0f2fe/38bdf8?text=H'
  },
  {
    name: 'Camille',
    role: 'Etudiante en pharmacie 6ème année',
    imageUrl: 'https://placehold.co/200x200/e0f2fe/38bdf8?text=C'
  },
  {
    name: 'Mélissa',
    role: 'Etudiante en 4ème année de Pharmacie',
    imageUrl: 'https://placehold.co/200x200/e0f2fe/38bdf8?text=M'
  },
  {
    name: 'Estelle',
    role: 'Apprentie Préparatrice en Pharmacie',
    imageUrl: 'https://placehold.co/200x200/e0f2fe/38bdf8?text=E'
  },
  {
    name: 'Xavier',
    role: 'Etudiant en pharmacie 4ème année',
    imageUrl: 'https://placehold.co/200x200/e2e8f0/94a3b8?text=X'
  },
  {
    name: 'Carelle',
    role: 'Etudiante en pharmacie 4ème année',
    imageUrl: 'https://placehold.co/200x200/e0f2fe/38bdf8?text=C'
  }
];

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('apercu');

  const renderContent = () => {
    switch (activeTab) {
      case 'apercu':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-8">
              {/* Address Section */}
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                <span>2 rue Léon Blum 69100, Villeurbanne</span>
              </div>

              {/* Phone Section */}
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-400" />
                <span>Téléphone : </span>
                <a href="tel:0478542582" className="text-green-500">04 78 54 25 82</a>
              </div>

              {/* Opening Hours Section */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="font-bold">Fermé</span>
                </div>
                <div className="ml-7 space-y-1 text-gray-600">
                  <p>lundi: 08:30 – 12:30, 14:00 – 19:30</p>
                  <p>mardi: 08:30 – 12:30, 14:00 – 19:30</p>
                  <p>mercredi: 08:30 – 12:30, 14:00 – 19:30</p>
                  <p>jeudi: 08:30 – 12:30, 14:00 – 19:30</p>
                  <p>vendredi: 08:30 – 12:30, 14:00 – 19:30</p>
                  <p>samedi: 08:30 – 12:30</p>
                  <p>dimanche: Fermé</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors">
                  NOUS CONTACTER
                </button>
                <button className="bg-blue-100 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-200 transition-colors">
                  PRENDRE RENDEZ-VOUS SUR DOCTOLIB
                </button>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <button className="w-full bg-white border rounded-lg p-4 flex items-center space-x-3 hover:bg-gray-50 transition-colors">
                  <Send className="h-6 w-6 text-green-500" />
                  <span className="font-bold">ENVOYER MON ORDONNANCE</span>
                </button>
                
                <button className="w-full bg-white border rounded-lg p-4 flex items-center space-x-3 hover:bg-gray-50 transition-colors">
                  <ShoppingBag className="h-6 w-6 text-green-500" />
                  <span className="font-bold">JE RÉSERVE MES PRODUITS</span>
                </button>
                
                <button className="w-full bg-white border rounded-lg p-4 flex items-center space-x-3 hover:bg-gray-50 transition-colors">
                  <HelpCircle className="h-6 w-6 text-green-500" />
                  <span className="font-bold">POSER UNE QUESTION</span>
                </button>
                
                <button className="w-full bg-white border rounded-lg p-4 flex items-center space-x-3 hover:bg-gray-50 transition-colors">
                  <Truck className="h-6 w-6 text-green-500" />
                  <span className="font-bold">ME FAIRE LIVRER</span>
                </button>
              </div>
            </div>
          </div>
        );
      case 'services':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">ATELIERS</h3>
                  <p className="text-gray-600">Nous vous apprenons à prendre soin de vous.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Droplets className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">DÉPISTAGE DU DIABÈTE</h3>
                  <p className="text-gray-600">Faites vous dépister dans votre Hello Pharmacie.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">ENTRETIEN PHARMACEUTIQUE</h3>
                  <p className="text-gray-600">Nous vous expliquons comment vous soigner.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'expertises':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Sparkles className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">BEAUTÉ</h3>
                  <p className="text-gray-600">Nous vous aidons à vous sentir bien.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Socks className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">CONTENTION</h3>
                  <p className="text-gray-600">Nous vous proposons une collection pour toutes vos envies.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Utensils className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">DIÉTÉTIQUE</h3>
                  <p className="text-gray-600">Nous vous conseillons sur votre équilibre alimentaire.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Stethoscope className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">MATÉRIEL MÉDICAL</h3>
                  <p className="text-gray-600">Nous pouvons vous conseiller en officine ou chez vous sur un large choix de matériel médical.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">ORTHOPÉDIE</h3>
                  <p className="text-gray-600">Nous vous équipons pour vous soulager.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Baby className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">PUÉRICULTURE</h3>
                  <p className="text-gray-600">Nous vous accompagnons avant, pendant et après la naissance de votre bébé.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Leaf className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">SANTÉ ET NATURE</h3>
                  <p className="text-gray-600">Nous vous faisons profiter de tous les bienfaits de la nature</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'equipe':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold">
                Hello <span className="text-green-500">Pharmacie</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Search className="h-6 w-6" />
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-md flex items-center">
                <Menu className="h-5 w-5 mr-2" />
                MENU
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=1920"
          alt="Pharmacy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-gray-300 mb-2">Villeurbanne</p>
            <h1 className="text-4xl font-bold text-white mb-4">Pharmacie Grandclément</h1>
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 py-4">
            <button 
              onClick={() => setActiveTab('apercu')}
              className={`${activeTab === 'apercu' ? 'text-green-500 border-b-2 border-green-500 -mb-[17px] pb-4' : 'text-gray-600 hover:text-green-500'}`}
            >
              Aperçu
            </button>
            <button 
              onClick={() => setActiveTab('services')}
              className={`${activeTab === 'services' ? 'text-green-500 border-b-2 border-green-500 -mb-[17px] pb-4' : 'text-gray-600 hover:text-green-500'}`}
            >
              Services
            </button>
            <button 
              onClick={() => setActiveTab('expertises')}
              className={`${activeTab === 'expertises' ? 'text-green-500 border-b-2 border-green-500 -mb-[17px] pb-4' : 'text-gray-600 hover:text-green-500'}`}
            >
              Expertises
            </button>
            <button 
              onClick={() => setActiveTab('actualites')}
              className={`${activeTab === 'actualites' ? 'text-green-500 border-b-2 border-green-500 -mb-[17px] pb-4' : 'text-gray-600 hover:text-green-500'}`}
            >
              Actualités
            </button>
            <button 
              onClick={() => setActiveTab('promos')}
              className={`${activeTab === 'promos' ? 'text-green-500 border-b-2 border-green-500 -mb-[17px] pb-4' : 'text-gray-600 hover:text-green-500'}`}
            >
              Promos
            </button>
            <button 
              onClick={() => setActiveTab('equipe')}
              className={`${activeTab === 'equipe' ? 'text-green-500 border-b-2 border-green-500 -mb-[17px] pb-4' : 'text-gray-600 hover:text-green-500'}`}
            >
              Equipe
            </button>
            <button 
              onClick={() => setActiveTab('pharmacie-de-garde')}
              className={`${activeTab === 'pharmacie-de-garde' ? 'text-green-500 border-b-2 border-green-500 -mb-[17px] pb-4' : 'text-gray-600 hover:text-green-500'}`}
            >
              Pharmacie de garde
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      {renderContent()}

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition-colors">
        QUESTION SANTÉ
      </button>
    </div>
  );
}

export default App;