import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";

const Home = async () => {
  const allProducts = await getAllProducts();

  const brandLinks = [
    { name: "Amazon", url: "https://www.amazon.com", icon: "/assets/icons/amazon.png" },
    { name: "Ajio", url: "https://www.ajio.com", icon: "/assets/icons/ajio.png" },
    { name: "Myntra", url: "https://www.myntra.com", icon: "/assets/icons/myntra.png" },
    { name: "Flipkart", url: "https://www.flipkart.com", icon: "/assets/icons/flipkart.png" },
    { name: "Walmart", url: "https://www.walmart.com", icon: "/assets/icons/walmart.png" },
    { name: "AliExpress", url: "https://www.aliexpress.com", icon: "/assets/icons/aliexpress.png" },
    { name: "eBay", url: "https://www.ebay.com", icon: "/assets/icons/ebay.png" },
    { name: "Best Buy", url: "https://www.bestbuy.com", icon: "/assets/icons/bestbuy.png" },
    { name: "Target", url: "https://www.target.com", icon: "/assets/icons/target.png" },
    { name: "Snapdeal", url: "https://www.snapdeal.com", icon: "/assets/icons/snapdeal.png" },
    { name: "Shopify", url: "https://www.shopify.com", icon: "/assets/icons/shopify.png" },
    { name: "Etsy", url: "https://www.etsy.com", icon: "/assets/icons/etsy.png" },
    { name: "Meesho", url: "https://www.meesho.com", icon: "/assets/icons/meesho.png" }
  ];

  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center"> 
            <p className="small-text">
              Smart Shopping Starts Here:
              <Image 
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>

            <h1 className="head-text">
              Unleash the Power of
              <span className="text-primary"> PriceWise</span>
            </h1>

            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
            </p>

            <Searchbar />
          </div>

          <HeroCarousel />
        </div>
      </section>

      

      {/* Brand Icons Section */}
      <section className="flex justify-center flex-wrap gap-8 py-10 bg-gray-50 rounded-lg shadow-md">
        {brandLinks.map((brand) => (
          <a 
            key={brand.name} 
            href={brand.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <Image 
              src={brand.icon} 
              alt={brand.name} 
              width={50} 
              height={50} 
              className="cursor-pointer drop-shadow-lg"
            />
            <p className="text-gray-700 font-medium">{brand.name}</p>
          </a>
        ))}
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
