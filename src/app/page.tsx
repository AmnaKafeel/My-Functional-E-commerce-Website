// import Causal from "./component/Causal";
import Brands from "@/components/BrandsName";
// import Cloths from "@/components/cloths/page";
import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";

export default function Home() {
  return (
  <div>
     
     <HeroSection/>
     <Brands/>
    {/* <Cloths/> */}
    <Products/>
     
  </div>
      );
}
