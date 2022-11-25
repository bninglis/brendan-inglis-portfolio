import "./Sandbox.scss";
import Flags from "../Flags/Flags";
import TechStack from "../TechStack/TechStack";
import hackathonWinner from "../../../assets/images/hackathon-winner-image.jpg";
import sandboxOne from "../../../assets/images/sandbox-1.png";
import sandboxTwo from "../../../assets/images/sandbox-2.png";

export default function Sandbox({ isDrawerOpen, setIsDrawerOpen }) {
    const sandboxStack = ["html", "css", "sass", "javascript", "react", "nodejs"];
    return (
        <>
            <div className="details">
                <div className="details__header">
                    <div className="brainstation-frame sandbox brainstation-frame--hackathon">
                        <img
                            className="brainstation-frame__image sandbox brainstation-frame__image--hackathon"
                            src={hackathonWinner}
                            alt="hackathon winner certificate"
                        />
                    </div>
                    <div className="sandbox-logo__container">
                        <svg
                            className="sandbox-logo"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 251 47.77"
                        >
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <path
                                        className="sandbox-logo__path"
                                        d="M15.58,43.72A17.53,17.53,0,0,1,5.61,41,14,14,0,0,1,0,33.37l9.28-2.65a5.78,5.78,0,0,0,2.35,3.11A7.2,7.2,0,0,0,15.7,35a6,6,0,0,0,3.72-1,3.27,3.27,0,0,0,1.43-2.7,2,2,0,0,0-.17-.86,2,2,0,0,0-.4-.75,3.12,3.12,0,0,0-.63-.58,2.71,2.71,0,0,0-.86-.52,6.09,6.09,0,0,0-1-.4,11.3,11.3,0,0,0-1.21-.4c-.49-.15-.91-.27-1.26-.35s-.76-.17-1.37-.28l-1.32-.35a38.19,38.19,0,0,1-4.35-1.44,20.8,20.8,0,0,1-3.84-2.13,9.36,9.36,0,0,1-3.09-3.5,11.74,11.74,0,0,1-1-5.07A11.15,11.15,0,0,1,4.58,5.75,16,16,0,0,1,15.13,2.19a15.5,15.5,0,0,1,9.28,2.64,13.29,13.29,0,0,1,5.15,7.42L20.8,14.79a5.38,5.38,0,0,0-5.5-4,5.52,5.52,0,0,0-3.67,1.15,3.48,3.48,0,0,0-1.37,2.76,3,3,0,0,0,.11.86,2.24,2.24,0,0,0,.4.69c.19.23.38.44.57.64a5.86,5.86,0,0,0,.81.51c.38.16.68.29.91.41s.65.25,1.15.4l1.2.34,1.32.41,1.32.34c1.26.35,2.19.64,2.8.87s1.59.53,2.81,1a9.92,9.92,0,0,1,2.81,1.5,19.73,19.73,0,0,1,2.12,1.95,6.58,6.58,0,0,1,1.72,2.82A11.8,11.8,0,0,1,30.82,31a11.34,11.34,0,0,1-4.35,9.2A16.78,16.78,0,0,1,15.58,43.72Z"
                                    />
                                    <path
                                        className="sandbox-logo__path"
                                        d="M46.3,43.67A11.94,11.94,0,0,1,37,39.47a15.48,15.48,0,0,1-3.73-10.59A15.26,15.26,0,0,1,37,18.35a11.94,11.94,0,0,1,9.33-4.2A10.7,10.7,0,0,1,55,18V14.67h9.17V43.15H55V39.87A10.81,10.81,0,0,1,46.3,43.67Zm-2.17-9.9a6.34,6.34,0,0,0,9,0A6.87,6.87,0,0,0,55,28.88a6.66,6.66,0,0,0-1.83-4.83,6.2,6.2,0,0,0-9,0,6.75,6.75,0,0,0-1.78,4.83A7,7,0,0,0,44.13,33.77Z"
                                    />
                                    <path
                                        className="sandbox-logo__path"
                                        d="M69.7,43.15V14.67h9.16v3.22a10.33,10.33,0,0,1,8.2-3.74A11.16,11.16,0,0,1,95.88,18q3.33,3.74,3.32,10.35V43.15H90v-14a8.28,8.28,0,0,0-1.49-5.3,4.76,4.76,0,0,0-4-1.89,5.07,5.07,0,0,0-4.19,1.95,8.57,8.57,0,0,0-1.49,5.3V43.15Z"
                                    />
                                    <path
                                        className="sandbox-logo__path"
                                        d="M115.79,43.67a11.94,11.94,0,0,1-9.33-4.2,15.48,15.48,0,0,1-3.73-10.59,15.26,15.26,0,0,1,3.73-10.53,11.94,11.94,0,0,1,9.33-4.2q5.67,0,8.71,3.91V0h9.17V43.15H124.5v-3.4Q121.53,43.67,115.79,43.67Zm-2.17-9.9a6.34,6.34,0,0,0,9,0,6.87,6.87,0,0,0,1.83-4.89,6.66,6.66,0,0,0-1.83-4.83,6.2,6.2,0,0,0-9,0,6.75,6.75,0,0,0-1.78,4.83A7,7,0,0,0,113.62,33.77Z"
                                    />
                                    <path
                                        className="sandbox-logo__path"
                                        d="M156.5,43.67a11,11,0,0,1-8.65-3.92v3.4h-9.17V0h9.17V18.06a10.84,10.84,0,0,1,8.65-3.91,11.85,11.85,0,0,1,9.34,4.2,15.3,15.3,0,0,1,3.72,10.53,15.52,15.52,0,0,1-3.72,10.59A11.85,11.85,0,0,1,156.5,43.67Zm-6.82-9.9a6,6,0,0,0,4.53,1.9,5.87,5.87,0,0,0,4.47-1.9,7,7,0,0,0,1.77-4.89,6.78,6.78,0,0,0-1.77-4.83,5.78,5.78,0,0,0-4.47-2,5.94,5.94,0,0,0-4.53,2,6.66,6.66,0,0,0-1.83,4.83A6.87,6.87,0,0,0,149.68,33.77Z"
                                    />
                                    <path
                                        className="sandbox-logo__path"
                                        d="M219,43.15l10.37-14.5L219,14.67H230l5.1,7.94,5-7.94H251l-10.26,14L251,43.15H240.11l-5-8.52-5.15,8.52Z"
                                    />
                                    <path
                                        className="sandbox-logo__path sandbox-logo__path--blue"
                                        d="M195.23,29.54l15.12-7.6a1.7,1.7,0,0,0,.09-3L196.6,11a3,3,0,0,0-2.83-.09l-14.41,7.3a4.16,4.16,0,0,0-1.55,1.37Z"
                                    />
                                    <path
                                        className="sandbox-logo__path sandbox-logo__path--orange"
                                        d="M211.1,19.49a4.09,4.09,0,0,1,.56,2V37a3.09,3.09,0,0,1-1.37,2.61L197.6,47.54A1.57,1.57,0,0,1,195.26,46V29.48Z"
                                    />
                                    <path
                                        className="sandbox-logo__path sandbox-logo__path--yellow"
                                        d="M177.85,19.6a3.82,3.82,0,0,0-.61,2V37a3,3,0,0,0,1.5,2.61l13.93,7.91a1.71,1.71,0,0,0,2.56-1.5V29.54Z"
                                    />
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="details__content">
                    <img
                        className="details__screenshot details__screenshot--home"
                        src={sandboxOne}
                        alt="sandbox sign up page"
                    />
                    <div className="details__alignment sandbox details__alignment--sandbox">
                        <img
                            className="details__screenshot sandbox details__screenshot--use"
                            src={sandboxTwo}
                            alt="sandbox recommendations page"
                        />
                    </div>

                    <p className="details__summary sandbox details__summary--sandbox">
                        Sandbox is an app, designed and prototyped by my team and I, which was
                        selected by Microsoft as the winner of a 24 hour hackathon. The goal was to
                        design a product that could help improve team cohesion and performance with
                        the expansion of remote work while also promoting a fun and engaging
                        atmosphere. We discovered that research showed that employees become
                        increasingly disconnected from the company at large and from other
                        employees, decreasing productivity and especially innovation. Sandbox is a
                        social media app that would be used to promote meeting people with shared
                        interests within the company and help to form inter-departmental bonds.
                    </p>
                </div>
                <div className="tech">
                    <TechStack
                        work={"sandbox"}
                        stack={sandboxStack}
                        isDrawerOpen={isDrawerOpen}
                        setIsDrawerOpen={setIsDrawerOpen}
                    />
                </div>
            </div>
            <Flags
                workLinks={{
                    data: [
                        { type: "GitHub", href: "blank" },
                        { type: "Slide Deck", href: "blank" },
                        { type: "Prototype", href: "blank" },
                    ],
                    work: "sandbox",
                }}
            />
        </>
    );
}
