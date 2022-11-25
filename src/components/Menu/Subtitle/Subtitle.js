import "./Subtitle.scss";
import { useState } from "react";

export default function Subtitle({ handleSetPhase }) {
    // eslint-disable-next-line
    const [isRolled, setIsRolled] = useState(false);
    return (
        <div className="subtitle">
            <div className={`subtitle__remove${isRolled ? " subtitle__remove--roll" : ""}`}>
                <button
                    className="subtitle__ribbon"
                    onClick={() => {
                        handleSetPhase("intro");
                    }}
                >
                    <h2 className="subtitle__text">Web Developer</h2>
                </button>
                <div className={`subtitle__window${isRolled ? " subtitle__window--roll" : ""}`}>
                    <div className={`subtitle__roll${isRolled ? " subtitle__roll--roll" : ""}`} />
                </div>
            </div>
        </div>
    );
}
