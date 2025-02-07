import { Users, Droplets, MessageCircle } from 'lucide-react';

const Services = () => {
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
};

export default Services; 