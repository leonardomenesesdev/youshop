import DefaultButton from '../DefaultButton/DefaultButton'
export default function ProductCard({product}){
    return(
  <div className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.imagem}

          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            {product.categoria}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.descricao}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            {product.preco}
          </span>
          
          <DefaultButton text="Adicionar"></DefaultButton>
        </div>
      </div>
    </div>
    )
}