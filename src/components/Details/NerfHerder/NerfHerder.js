import "./NerfHerder.scss";
import Flags from "../Flags/Flags";
import TechStack from "../TechStack/TechStack";
import brainstationLogo from "../../../assets/images/brainstation-logo.png";
import nerfOne from "../../../assets/images/nerf-herder-1.png";
import nerfTwo from "../../../assets/images/nerf-herder-2.png";

export default function NerfHerder({ isDrawerOpen, setIsDrawerOpen }) {
    const nerfStack = [
        "html",
        "css",
        "sass",
        "javascript",
        "react",
        "nodejs",
        "photoshop",
        "illustrator",
        "mysql",
        "expressjs",
        "knex",
    ];
    return (
        <>
            <div className="details">
                <div className="details__header">
                    <div className="brainstation-frame">
                        <img
                            className="brainstation-frame__image"
                            src={brainstationLogo}
                            alt="brainstation logo"
                        />
                        <h2 className="brainstation-frame__text">Capstone Project</h2>
                    </div>
                    <div className="nerf-herder-logo__container">
                        <svg
                            className="nerf-herder-logo"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 482.32 55.44"
                        >
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <path d="M0,55.44V3.6H11.52l29,34.56V3.6h11.3V55.44H40.32L11.16,20.74v34.7Z" />
                                    <path d="M64.08,54a11.17,11.17,0,0,1-3.82-3.82A9.8,9.8,0,0,1,58.82,45V24.12a9.8,9.8,0,0,1,1.44-5.18,11.17,11.17,0,0,1,3.82-3.82,9.8,9.8,0,0,1,5.18-1.44H90.72A10,10,0,0,1,96,15.12a10.78,10.78,0,0,1,3.77,3.82,10,10,0,0,1,1.41,5.18v16H69.84v4.32h31.32v11H69.26A9.8,9.8,0,0,1,64.08,54Zm5.76-23.54h20.3V24.7H69.84Z" />
                                    <path d="M108.22,55.44V24.12a9.71,9.71,0,0,1,1.44-5.18,11.06,11.06,0,0,1,3.81-3.82,10,10,0,0,1,5.26-1.44h23v11H119.23V55.44Z" />
                                    <path d="M147.6,55.44v-45A9.8,9.8,0,0,1,149,5.26a11.14,11.14,0,0,1,3.81-3.82A10,10,0,0,1,158.11,0h16V11.09H158.61v2.59h15.48v11H158.61V55.44Z" />
                                    <path d="M202.75,55.44V3.6h11.16V23.9h30.6V3.6h11.16V55.44H244.51V35.14h-30.6v20.3Z" />
                                    <path d="M268.84,54A11.14,11.14,0,0,1,265,50.18,9.8,9.8,0,0,1,263.59,45V24.12A9.8,9.8,0,0,1,265,18.94a11.14,11.14,0,0,1,3.81-3.82A9.86,9.86,0,0,1,274,13.68h21.45a10,10,0,0,1,5.26,1.44,10.89,10.89,0,0,1,3.78,3.82,10,10,0,0,1,1.4,5.18v16H274.6v4.32h31.32v11H274A9.86,9.86,0,0,1,268.84,54Zm5.76-23.54h20.31V24.7H274.6Z" />
                                    <path d="M313,55.44V24.12a9.8,9.8,0,0,1,1.44-5.18,11.14,11.14,0,0,1,3.81-3.82,10,10,0,0,1,5.26-1.44h23v11H324V55.44Z" />
                                    <path d="M356.18,54a10.72,10.72,0,0,1-3.78-3.82A10,10,0,0,1,351,45V24.12a10,10,0,0,1,1.41-5.18,10.72,10.72,0,0,1,3.78-3.82,9.92,9.92,0,0,1,5.25-1.44h20.95V0h11V55.44h-32A9.92,9.92,0,0,1,356.18,54Zm26.2-9.58V24.7h-20.3V44.42Z" />
                                    <path d="M404.63,54a11.14,11.14,0,0,1-3.81-3.82A9.8,9.8,0,0,1,399.38,45V24.12a9.8,9.8,0,0,1,1.44-5.18,11.14,11.14,0,0,1,3.81-3.82,9.86,9.86,0,0,1,5.19-1.44h21.45a10,10,0,0,1,5.26,1.44,10.89,10.89,0,0,1,3.78,3.82,10,10,0,0,1,1.4,5.18v16H410.39v4.32h31.32v11H409.82A9.86,9.86,0,0,1,404.63,54Zm5.76-23.54H430.7V24.7H410.39Z" />
                                    <path d="M448.77,55.44V24.12a9.8,9.8,0,0,1,1.44-5.18A11.14,11.14,0,0,1,454,15.12a10,10,0,0,1,5.26-1.44h23v11H459.78V55.44Z" />
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="details__content">
                    <img
                        className="details__screenshot details__screenshot--home"
                        src={nerfOne}
                        alt="nerf herder screenshot"
                    />
                    <div className="details__alignment">
                        <img
                            className="details__screenshot details__screenshot--use"
                            src={nerfTwo}
                            alt="nerf herder screenshot"
                        />
                    </div>
                    <p className="details__summary details__summary--nerf">
                        Nerf Herder is a companion app for the Scum and Villainy tabletop
                        role-playing game. It guides the user through the choices necessary to build
                        a character using the game’s system and allows the user to save the
                        character to an account or open a saved character and make changes.
                    </p>
                    <div className="tech">
                        <TechStack
                            work={"nerf"}
                            stack={nerfStack}
                            isDrawerOpen={isDrawerOpen}
                            setIsDrawerOpen={setIsDrawerOpen}
                        />
                    </div>
                </div>
            </div>
            <Flags
                workLinks={{
                    data: [
                        { type: "GitHub", href: "blank" },
                        { type: "Slide Deck", href: "blank" },
                        { type: "Prototype", href: "blank" },
                    ],
                    work: "nerf",
                }}
            />
        </>
    );
}
