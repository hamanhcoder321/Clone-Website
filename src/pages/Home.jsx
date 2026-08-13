import HomeHero from "../components/home/HomeHero.jsx";
import "./Home.css";
import Product from "../components/home/Product.jsx";
import Verified from "../components/home/Verified.jsx";
import FeaturedProjects from "../components/home/FeaturedProjects.jsx";
import ProductsServices from "../components/home/ProductsServices.jsx";
import { Categories } from "../components/home/Categories.jsx";
import StrategicPartner from "../components/home/StrategicPartner.jsx";

export default function Home() {
    return (
        <div className="page">
            <HomeHero />
            <Product />
            <Verified />
            <FeaturedProjects />
            <ProductsServices />
            <Categories />
            <StrategicPartner />
        </div>
    )
}