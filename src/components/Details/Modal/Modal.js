import "./Modal.scss";
// import brainOne from "../../assets/images/brainflix-1.png";
import brainOne from "../../../assets/images/brainflix-1.png";
import brainTwo from "../../../assets/images/brainflix-2.png";
import nerfOne from "../../../assets/images/nerf-herder-1.png";
import nerfTwo from "../../../assets/images/nerf-herder-2.png";
import sandboxOne from "../../../assets/images/sandbox-1.png";
import sandboxTwo from "../../../assets/images/sandbox-2.png";
import { useState } from "react";

export default function Modal(visibility, image, number) {
    const [isVisible, setIsVisible] = useState(false);
    const [imageChoice, setImageChoice] = useState("brain", 1);

    return (
        <>
            <div className="modal__container">
                <div className="modal__content">
                    <img src={imageChoice[0]} alt="brainflix screenshot" />
                </div>
            </div>
        </>
    );
}
