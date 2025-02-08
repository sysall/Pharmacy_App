import { MapPin, Phone, Clock } from 'lucide-react';
import { pharmacies } from '../../data/pharmacie';  

const PharmaciesOnGuard = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800">
                Les pharmacies de garde sont ouvertes en dehors des horaires habituels d'ouverture pour assurer la continuité des soins. Avant de vous déplacer, nous vous conseillons d'appeler.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pharmacies.map((pharmacy, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:border-green-500 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{pharmacy.name}</h3>
                      <div className="mt-1 space-y-1">
                        <p className="text-gray-600">{pharmacy.address}</p>
                        <p className="text-gray-600">{pharmacy.city}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{pharmacy.distance}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-green-500" />
                      <span className="text-green-500 font-medium">{pharmacy.hours}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <a href={`tel:${pharmacy.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-green-500">
                        {pharmacy.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-gray-400" />
                      <button className="text-gray-600 hover:text-green-500">
                        Voir sur la carte
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

};

export default PharmaciesOnGuard;