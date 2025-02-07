import { Sparkles, Blocks as Socks, Utensils, Stethoscope, Users, Baby, Leaf } from 'lucide-react';

const Expertises = () => {
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
};

export default Expertises; 