import "./Menu.scss";
import MenuBody from "./MenuBody/MenuBody";

export default function Menu({ phase, handleSetPhase, selectedWork, handleSetWork }) {
    return (
        <>
            <div className="menu">
                <div className="headline">
                    <button
                        className="headline__button"
                        onClick={() => {
                            handleSetPhase("intro");
                        }}
                    >
                        <h1 className="headline__name">Brendan Inglis</h1>
                    </button>
                </div>
                <div className="menu__body">
                    <MenuBody
                        phase={phase}
                        handleSetPhase={handleSetPhase}
                        selectedWork={selectedWork}
                        handleSetWork={handleSetWork}
                    />
                </div>
            </div>
        </>
    );
}
