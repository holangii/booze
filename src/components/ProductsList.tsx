'use client'
import Link from "next/link";
import { Product } from "@/objects/Products";
import Image from "next/image";

export const ProductList = ({ products }: { products: Product[] }) => {

	return (
		<>
			<ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
				{products.map((product) => {
					return (
						<li key={product.id} className="group">
							<Link href={`/product/${product.id}`}>
								<article className="overflow-hidden bg-white">
									{product.image && (
										<div className="rounded-lg aspect-square w-full overflow-hidden bg-neutral-100">
                                            <Image
												className="w-full h-full bg-neutral-100 object-contain object-center transition-transform duration-300 group-hover:scale-105"
												src={product.image}
												width={768}
												height={768}
												sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
												alt={product.name}
											/>
										</div>
									)}
									<div className="p-2">
										<h2 className="text-lg font-semibold text-neutral-800 group-hover:text-[#C97F17] transition-colors duration-200">{product.name}</h2>
										<footer className="text-base font-medium text-[#C97F17]">
											{product.price && (
												<p>
													₩{product.price.toLocaleString()}
												</p>
											)}
										</footer>
									</div>
								</article>
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};