export default function Flags({ workLinks }) {
    return (
        <div className="flags">
            {workLinks &&
                workLinks.data.map((link) => {
                    return (
                        <a
                            className={`flags__flag flags__flag--${link.type}`}
                            href={link.href}
                            key={`${workLinks.work}${link.type}`}
                        >
                            <h4 className="flags__title">{`${link.type}`}</h4>
                        </a>
                    );
                })}
        </div>
    );
}
