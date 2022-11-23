import { useState } from "react";
import MenuBody from "./MenuBody/MenuBody";
import Tabs from "./Tabs/Tabs";

export default function Menu({ phase, handleSetPhase, handleSetWork }) {
    return (
        <>
            <Tabs phase={phase} handleSetPhase={handleSetPhase} />
            <div className="menu">
                <button
                    className="headline__button"
                    onClick={() => {
                        handleSetPhase("intro");
                    }}
                >
                    <h1 className="headline__name">Brendan Inglis</h1>
                </button>
                <button
                    className="headline__button"
                    onClick={() => {
                        handleSetPhase("intro");
                    }}
                >
                    <div className="subtitle">
                        <h2 className="subtitle__text">Web Developer</h2>
                    </div>
                </button>
                <div className="menu__body">
                    <MenuBody
                        phase={phase}
                        handleSetPhase={handleSetPhase}
                        handleSetWork={handleSetWork}
                    />
                </div>
            </div>
        </>
    );
}
