import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to='/' className="text-xl font-bold text-gray-800">
                        YouShop
                    </Link>
                    <Link to='/add'>
                        Adicionar produto
                    </Link>
                </div>
            </div>
        </header>
    );
}
