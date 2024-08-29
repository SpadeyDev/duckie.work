import Homepage from "./containers/home";
import Team from "./containers/team";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </>
  );
}

export default App;
