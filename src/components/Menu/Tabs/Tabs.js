import "./Tabs.scss";

export default function Tabs({ phase, handleSetPhase }) {
    if (phase !== "intro") {
        return (
            <div className="tabs__container">
                <div className="tabs">
                    <button
                        className={`tabs__tab tabs__tab--work${
                            phase === "work" ? " tabs__tab--selected" : ""
                        }`}
                        onClick={() => {
                            handleSetPhase("work");
                        }}
                    >
                        <h4>Selected Work</h4>
                    </button>
                    <button
                        className={`tabs__tab tabs__tab--contact${
                            phase === "contact" ? " tabs__tab--selected" : ""
                        }`}
                        onClick={() => {
                            handleSetPhase("contact");
                        }}
                    >
                        <h4>Contact Me</h4>
                    </button>
                </div>
            </div>
        );
    }
}
