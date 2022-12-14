import "./App.scss";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import Details from "./components/Details/Details";
import Tabs from "./components/Menu/Tabs/Tabs";
import Subtitle from "./components/Menu/Subtitle/Subtitle";

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
        <div className="body">
            <div className="container">
                <div className="menu__container">
                    <Tabs phase={phase} handleSetPhase={handleSetPhase} />
                    <Menu
                        phase={phase}
                        handleSetPhase={handleSetPhase}
                        selectedWork={selectedWork}
                        handleSetWork={handleSetWork}
                    />
                </div>
                <Subtitle handleSetPhase={handleSetPhase} />
                <div className="details__container">
                    <Details phase={phase} selectedWork={selectedWork} />
                </div>
            </div>
        </div>
    );
}

export default App;
