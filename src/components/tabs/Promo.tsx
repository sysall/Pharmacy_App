import { promoProducts } from '../../data/promoProduct';
import { useState } from 'react';

const Promo = () => {
    const [currentPromoPage, setCurrentPromoPage] = useState(0);
    const promosPerPage = 2;
    const totalPages = Math.ceil(promoProducts.length / promosPerPage);
    const startIndex = currentPromoPage * promosPerPage;
    const visiblePromos = promoProducts.slice(startIndex, startIndex + promosPerPage);
            
            return (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-2xl font-bold mb-8">Hello Pharmacie</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {visiblePromos.map((product) => (
                    <div key={product.id} className="bg-[#43ab76] rounded-lg overflow-hidden text-white">
                      <div className="p-6">
                        <div className="text-xl font-bold mb-4">
                          Du {product.validFrom} au {product.validTo}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="bg-white rounded-lg p-4 text-black">
                            <div className="text-6xl font-bold">
                              {Math.floor(product.price)}
                              <span className="text-3xl">,{((product.price % 1) * 100).toFixed(0)}</span>
                              <span className="text-4xl">€</span>
                            </div>
                          </div>
                          
                          <div className="flex-1 ml-6">
                            <img
                              src={product.imageUrl}
                              alt={product.name}
                              className="w-32 h-32 object-contain mx-auto"
                            />
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <h3 className="text-xl font-bold">{product.name}</h3>
                          <p className="text-sm mt-1">{product.brand}</p>
                          <p className="text-sm mt-1">{product.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Pagination dots */}
                <div className="flex justify-center space-x-2 mt-8">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPromoPage(index)}
                      className={`h-2 w-2 rounded-full ${
                        currentPromoPage === index ? 'bg-black' : 'bg-gray-300'
                      }`}
                      aria-label={`Page ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            );
 };

export default Promo;