import { useCart } from "../contexts/CartContext";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { productsByCategories } from "@/objects/Products";

export const NavMenuHeader = () => {
	return (
		<>
			<div className="sm:block hidden">
				<ul className="flex flex-row items-center justify-center gap-x-1">
					{Object.values(productsByCategories).map((category) => (
						<li key={`/category/${category.name}`}>
							<Link
								href={`/category/${category.name}`}
								className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent text-black px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-hidden"
							>
								{category.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export const Header = () => {
	const { openCart, getTotalItems } = useCart();

	return (
		<header className="z-50 py-4 sticky top-0 bg-white/90 backdrop-blur-xs nav-border-reveal">
			<div className="mx-auto flex max-w-7xl items-center gap-2 px-4 flex-row sm:px-6 lg:px-8 text-slate-600">
				<Link href="/" className="flex items-center gap-2">
					<img src="/mashija_drink_logo.png" alt="Mashija Logo" className="h-14 w-auto" />
					<h1 className="-mt-0.5 whitespace-nowrap text-xl font-bold">Mashija</h1>
				</Link>

				<div className="max-w-full flex shrink w-auto sm:mr-auto overflow-auto max-sm:order-2">
					<NavMenuHeader />
				</div>
				<div className="ml-auto flex items-center space-x-4">
					<button 
						onClick={openCart}
						className="text-gray-700 hover:text-blue-600 relative hover:cursor-pointer"
					>
						<ShoppingCart className="w-6 h-6 text-slate-700" aria-label="Cart" />
						{getTotalItems() > 0 && (
							<span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
								{getTotalItems()}
							</span>
						)}
					</button>
				</div>
			</div>
		</header>
	);
};
