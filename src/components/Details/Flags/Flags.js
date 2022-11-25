import "./Flags.scss";

export default function Flags({ workLinks }) {
    return (
        <div className="flags">
            {workLinks &&
                workLinks.data.map((link) => {
                    return (
                        <div
                            className={`flags__container flags__container--${link.type}`}
                            key={`${workLinks.work}${link.type}`}
                        >
                            <div className={`flags__flag flags__flag--${link.type}`}>
                                <a
                                    className={`flags__link flags__link--${link.type}`}
                                    href={link.href}
                                >
                                    <h4 className="flags__title">{`${link.type}`}</h4>
                                </a>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
