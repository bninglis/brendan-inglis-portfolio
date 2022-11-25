import "./Details.scss";
import headshot from "../../assets/images/headshot-transp.png";
import { useState } from "react";
import Sandbox from "./Sandbox/Sandbox";
import NerfHerder from "./NerfHerder/NerfHerder";
import BrainFlix from "./BrainFlix/BrainFlix";

export default function Details({ phase, selectedWork }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    if (phase !== "work") {
        return (
            <div className="details">
                <div  className="headshot__container">
                    <img className="headshot" src={headshot} alt="brendan inglis's headshot" />
                </div>
            </div>
        );
    } else if (selectedWork === "sandbox") {
        return (
            <div className="details__frame">
                <Sandbox isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
            </div>
        );
    } else if (selectedWork === "nerf") {
        return <NerfHerder isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />;
    } else if (selectedWork === "brainflix") {
        return <BrainFlix isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />;
    }
}
