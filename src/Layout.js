import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout()
{
    return(<div className="bg-dark">
    <Header/>
    <section>
        <Outlet/>
    </section>
    <Footer/>
    </div>)
}
export default Layout;