import Category from "../components/Category";
import Hero from "../components/Hero";
import InnerNavbar from "../components/InnerNavbar";
import Popular from "../components/Popular";

export default function Home ()
{
    return (
        <div id="home">

            <InnerNavbar />

            <Hero />

            <Category />

            <Popular />
        </div>
    );
}