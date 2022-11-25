import "./Subtitle.scss";

export default function Subtitle({ handleSetPhase }) {
    return (
        <div className="subtitle">
            <button
                className="subtitle__ribbon"
                onClick={() => {
                    handleSetPhase("intro");
                }}
            >
                <h2 className="subtitle__text">Web Developer</h2>
            </button>
        </div>
    );
}
