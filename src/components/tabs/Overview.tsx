import { MapPin, Phone, Clock } from 'lucide-react';

const Overview = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div className="flex items-start space-x-2">
          <MapPin className="h-5 w-5 text-gray-400 mt-1" />
          <span>2 rue Léon Blum 69100, Villeurbanne</span>
        </div>

        <div className="flex items-center space-x-2">
          <Phone className="h-5 w-5 text-gray-400" />
          <span>Téléphone : </span>
          <a href="tel:0478542582" className="text-green-500">04 78 54 25 82</a>
        </div>

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

        <div className="flex flex-wrap gap-4">
          <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors">
            NOUS CONTACTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview; 