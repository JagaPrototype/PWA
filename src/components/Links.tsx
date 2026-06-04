import "@/styles/Links.css";
interface linksProps {
    project?: string;
    id?: string;
    className?: string;
    text_91_15?: string;
    text_91_16?: string;
}
const Links = (props: linksProps) => {
    const { project, id, className = "", text_91_15, text_91_16 } = props;

    return (
        <div className={`component-91_12 ${className}`} id={id}>
            <div id="91_12" className="symbol-91_12">
                {project === "Sova" && (
                    <div id="91_13" className="symbol-91_13">
                        <div id="91_14" className="frame-91_14">
                            <div className="frame-content-91_14">
                                <a
                                    id="91_15"
                                    className="paragraph-91_15"
                                    href="https://www.google.com"
                                    target="_blank"
                                >
                                    {text_91_15 ??
                                        "Правила создания модальных окон"}
                                </a>
                                <a
                                    id="91_16"
                                    className="paragraph-91_16"
                                    href="www.google.com"
                                    target="_blank"
                                >
                                    {text_91_16 ?? "Перейти"}
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Links;
