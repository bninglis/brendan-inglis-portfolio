import "./TechStack.scss";
import cssLogo from "../../../assets/images/tech-icons/css-logo.png";
import expressJSLogo from "../../../assets/images/tech-icons/expressjs-logo.png";
import html5Logo from "../../../assets/images/tech-icons/html5-logo.png";
import illustratorLogo from "../../../assets/images/tech-icons/illustrator-logo.png";
import javascriptLogo from "../../../assets/images/tech-icons/javascript-logo.png";
import knexLogo from "../../../assets/images/tech-icons/knex-logo.png";
import mysqlLogo from "../../../assets/images/tech-icons/mysql-logo.png";
import nodejsLogo from "../../../assets/images/tech-icons/nodejs-logo.png";
import photoshopLogo from "../../../assets/images/tech-icons/photoshop-logo.png";
import reactLogo from "../../../assets/images/tech-icons/react-logo.png";
import sassLogo from "../../../assets/images/tech-icons/sass-logo.png";

export default function TechStack({ work, stack, isDrawerOpen, setIsDrawerOpen }) {
    const library = [
        { name: "css", image: cssLogo },
        { name: "expressjs", image: expressJSLogo },
        { name: "html", image: html5Logo },
        { name: "illustrator", image: illustratorLogo },
        { name: "javascript", image: javascriptLogo },
        { name: "knex", image: knexLogo },
        { name: "mysql", image: mysqlLogo },
        { name: "nodejs", image: nodejsLogo },
        { name: "photoshop", image: photoshopLogo },
        { name: "react", image: reactLogo },
        { name: "sass", image: sassLogo },
    ];

    return (
        <>
            <div className="tech__container">
                <div className={`tech__drawer${isDrawerOpen ? " tech__drawer--active" : ""}`}>
                    <ul className="tech__list">
                        {stack &&
                            stack.map((tech) => {
                                const icon = library.find((item) => {
                                    return item.name === tech;
                                });
                                return (
                                    <li
                                        className={`tech__box${
                                            tech === "expressjs" || tech === "knex"
                                                ? " tech__box--wide"
                                                : ""
                                        }`}
                                        key={`${work}${icon.name}`}
                                    >
                                        <img
                                            className="tech__icon"
                                            src={icon.image}
                                            alt={`${tech.name} icon`}
                                        />
                                    </li>
                                );
                            })}
                    </ul>
                    <div>
                        <button
                            className="tech__button"
                            onClick={() => {
                                setIsDrawerOpen(!isDrawerOpen);
                            }}
                        >
                            <h3 className="tech__title">Technologies Used</h3>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
