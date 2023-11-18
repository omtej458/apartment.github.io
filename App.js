import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BuyPlotsOrApartmentsframer from "./pages/BuyPlotsOrApartmentsframer";
import BuyPlotsOrApartmentsframer1 from "./pages/BuyPlotsOrApartmentsframer1";
import BuyPlotsOrApartmentsframer2 from "./pages/BuyPlotsOrApartmentsframer2";
import BuyPlotsOrApartmentsframer3 from "./pages/BuyPlotsOrApartmentsframer3";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/buyplotsorapartmentsframerai-by-htmltodesign-free-version-16112023-145936-gmt530":
        title = "";
        metaDescription = "";
        break;
      case "/buyplotsorapartmentsframerai-by-htmltodesign-free-version-16112023-145834-gmt530":
        title = "";
        metaDescription = "";
        break;
      case "/buyplotsorapartmentsframerai-by-htmltodesign-free-version-16112023-145810-gmt530":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<BuyPlotsOrApartmentsframer />} />
      <Route
        path="/buyplotsorapartmentsframerai-by-htmltodesign-free-version-16112023-145936-gmt530"
        element={<BuyPlotsOrApartmentsframer1 />}
      />
      <Route
        path="/buyplotsorapartmentsframerai-by-htmltodesign-free-version-16112023-145834-gmt530"
        element={<BuyPlotsOrApartmentsframer2 />}
      />
      <Route
        path="/buyplotsorapartmentsframerai-by-htmltodesign-free-version-16112023-145810-gmt530"
        element={<BuyPlotsOrApartmentsframer3 />}
      />
    </Routes>
  );
}
export default App;
