import "./App.scss";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import Details from "./components/Details/Details";

function App() {
    const [phase, setPhase] = useState("intro");
    const [selectedWork, setSelectedWork] = useState("nerf");

    const handleSetPhase = (passedPhase) => {
        setPhase(passedPhase);
    };

    const handleSetWork = (passedWork) => {
        setSelectedWork(passedWork);
    };

    return (
        <div className="container">
            <div className="menu__container">
                <Menu phase={phase} handleSetPhase={handleSetPhase} handleSetWork={handleSetWork} />
            </div>
            <div className="details__container">
                <Details phase={phase} selectedWork={selectedWork} />
            </div>
        </div>
    );
}

export default App;
