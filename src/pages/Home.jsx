import Category from "../components/Category";
import Collection from "../components/Collection";
import InnerNavbar from "../components/InnerNavbar";

export default function Home ()
{
    return (
        <div id="home" className="flex flex-col">

            <InnerNavbar />

            <Collection />

            <Category />
        </div>
    );
}