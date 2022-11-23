import Sandbox from "./Sandbox/Sandbox";
import NerfHerder from "./NerfHerder/NerfHerder";
import BrainFlix from "./BrainFlix/BrainFlix";

export default function Details({ phase, selectedWork }) {
    if (phase !== "work") {
        return (
            <div className="details">
                <h2>This is my headshot</h2>
            </div>
        );
    } else if (selectedWork === "sandbox") {
        return (
            <div className="details">
                <Sandbox />
            </div>
        );
    } else if (selectedWork === "nerf") {
        return (
            <div className="details">
                <NerfHerder />
            </div>
        );
    } else if (selectedWork === "brainflix") {
        return (
            <div className="details">
                <BrainFlix />
            </div>
        );
    }
}
