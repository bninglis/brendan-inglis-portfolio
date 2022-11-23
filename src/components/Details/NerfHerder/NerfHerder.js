import Flags from "../Flags/Flags";
import brainstationLogo from "../../../assets/images/hackathon-winner-image.jpg";
import nerfOne from "../../../assets/images/nerf-herder-1.png";
import nerfTwo from "../../../assets/images/nerf-herder-2.png";

export default function NerfHerder() {
    return (
        <>
            <div className="details">
                <div>
                    <div className="braintstation-frame">
                        <img src={brainstationLogo} alt="brainstation logo" />
                        <h2>Capstone Project</h2>
                    </div>
                    <svg
                        className="nerf-herder__logo"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 80 10"
                    >
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                                <path d="M0,10V1H.87L6,7V1H8v9H7.22L2,4v6Z" />
                                <path d="M9.87,9.76a1.93,1.93,0,0,1-.63-.64A1.68,1.68,0,0,1,9,8.25V4.75a1.68,1.68,0,0,1,.24-.87,1.93,1.93,0,0,1,.63-.64A1.62,1.62,0,0,1,10.73,3h3.54a1.63,1.63,0,0,1,.87.24,1.93,1.93,0,0,1,.63.64,1.77,1.77,0,0,1,.23.87V7H11V8h5v2H10.73A1.62,1.62,0,0,1,9.87,9.76ZM12,5h3V4H12Z" />
                                <path d="M18,10V4.9a1.86,1.86,0,0,1,.26-1,2.13,2.13,0,0,1,.68-.69A1.8,1.8,0,0,1,19.88,3H24V5H20v5Z" />
                                <path d="M24,9V1.69a1.51,1.51,0,0,1,.26-.84A2.17,2.17,0,0,1,25,.23a2.06,2.06,0,0,1,1-.23H29V2H26V3h3V5H26V9Z" />
                                <path d="M33,9V1h2V4h5V1h2V9H40V6H35V9Z" />
                                <path d="M44.87,9.76a1.93,1.93,0,0,1-.63-.64A1.68,1.68,0,0,1,44,8.25V4.75a1.68,1.68,0,0,1,.24-.87,1.93,1.93,0,0,1,.63-.64A1.62,1.62,0,0,1,45.73,3h3.54a1.63,1.63,0,0,1,.87.24,1.93,1.93,0,0,1,.63.64,1.77,1.77,0,0,1,.23.87V7H46V8h5v2H45.73A1.62,1.62,0,0,1,44.87,9.76ZM46,5h3V4H46Z" />
                                <path d="M52,10V4.9a1.86,1.86,0,0,1,.26-1,2.13,2.13,0,0,1,.68-.69A1.8,1.8,0,0,1,53.88,3H58V5H54v5Z" />
                                <path d="M58.86,8.77a1.87,1.87,0,0,1-.63-.62A1.66,1.66,0,0,1,58,7.31V4.37s.26-.6.42-.86a1.84,1.84,0,0,1,.63-.64A1.76,1.76,0,0,0,59.93,2H63V0h2V9H59.72A1.7,1.7,0,0,1,58.86,8.77ZM63,8V5H60V8Z" />
                                <path d="M66.87,9.76a1.93,1.93,0,0,1-.63-.64A1.68,1.68,0,0,1,66,8.25V4.75a1.68,1.68,0,0,1,.24-.87,1.93,1.93,0,0,1,.63-.64A1.62,1.62,0,0,1,67.73,3h3.54a1.63,1.63,0,0,1,.87.24,1.93,1.93,0,0,1,.63.64,1.77,1.77,0,0,1,.23.87V7H68V8h5v2H67.73A1.62,1.62,0,0,1,66.87,9.76ZM68,5h3V4H68Z" />
                                <path d="M74,10V4.9a1.86,1.86,0,0,1,.26-1,2.13,2.13,0,0,1,.68-.69A1.8,1.8,0,0,1,75.88,3H80V5H76v5Z" />
                            </g>
                        </g>
                    </svg>
                </div>
                <div>
                    <img src={nerfOne} alt="nerf herder screenshot" />
                    <img src={nerfTwo} alt="nerf herder screenshot" />
                    <p>Nerf Herder is a thing.</p>
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
