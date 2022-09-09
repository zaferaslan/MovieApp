import "./App.css";
import ViewHome from "./views/ViewHome";
import Navbar from "./components/Navbar";
import ViewDetails from "./views/ViewDetails";
import ViewWatchList from "./views/ViewWatchList";
import ViewNoMatch from "./views/ViewNoMatch";
import ViewSearchResults from "./views/ViewSearchResults";
import { Route, Routes } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <SimpleGrid columns={"1"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<ViewHome />} />
          <Route path="/movie/:title" element={<ViewDetails />} />
          <Route path="/search/:input" element={<ViewSearchResults />} />
          <Route path="/watchlist" element={<ViewWatchList />} />
          <Route path="*" element={<ViewNoMatch />} />
        </Routes>
      </SimpleGrid>
    </div>
  );
}

export default App;
