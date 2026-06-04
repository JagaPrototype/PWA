import "@/styles/Inputelementshint0.css";
interface inputelementshint0Props {
    text?: string;
    state?: string;
    size?: string;
    id?: string;
    className?: string;
    text_4_31712?: string;
    text_4_31714?: string;
    text_4_31716?: string;
    text_4_31718?: string;
    text_4_31720?: string;
    text_4_31722?: string;
    text_4_31724?: string;
    text_4_31726?: string;
}
const Inputelementshint0 = (props: inputelementshint0Props) => {
    const {
        text = "Hint",
        state,
        size,
        id,
        className = "",
        text_4_31712,
        text_4_31714,
        text_4_31716,
        text_4_31718,
        text_4_31720,
        text_4_31722,
        text_4_31724,
        text_4_31726
    } = props;

    return (
        <div className={`component-4_31710 ${className}`} id={id}>
            <div id="4_31710" className="symbol-4_31710">
                {state === "default" && size === "l" && (
                    <div id="4_31711" className="symbol-4_31711">
                        <p
                            id="4_31712"
                            className="paragraph-4_31712 fill-lightfgmuted-2_2271-paragraph text-mobilecaption-l-2_2289 fill-lightfgdisabled-2_2294-paragraph"
                        >
                            {text ?? text_4_31712 ?? "Hint"}
                        </p>
                    </div>
                )}
                {state === "default" && size === "m" && (
                    <div id="4_31713" className="symbol-4_31713">
                        <p
                            id="4_31714"
                            className="paragraph-4_31714 fill-lightfgmuted-2_2271-paragraph text-caption-m-2_2285 fill-lightfgdisabled-2_2294-paragraph"
                        >
                            {text ?? text_4_31714 ?? "Hint"}
                        </p>
                    </div>
                )}
                {state === "error" && size === "l" && (
                    <div id="4_31715" className="symbol-4_31715">
                        <p
                            id="4_31716"
                            className="paragraph-4_31716 fill-lightinteractive-errordefault-2_2298-paragraph text-mobilecaption-l-2_2289"
                        >
                            {text ?? text_4_31716 ?? "Hint"}
                        </p>
                    </div>
                )}
                {state === "error" && size === "m" && (
                    <div id="4_31717" className="symbol-4_31717">
                        <p
                            id="4_31718"
                            className="paragraph-4_31718 fill-lightinteractive-errordefault-2_2298-paragraph text-caption-m-2_2285"
                        >
                            {text ?? text_4_31718 ?? "Hint"}
                        </p>
                    </div>
                )}
                {state === "success" && size === "l" && (
                    <div id="4_31719" className="symbol-4_31719">
                        <p
                            id="4_31720"
                            className="paragraph-4_31720 fill-lightsuccessdefault-2_2297-paragraph text-mobilecaption-l-2_2289"
                        >
                            {text ?? text_4_31720 ?? "Hint"}
                        </p>
                    </div>
                )}
                {state === "success" && size === "m" && (
                    <div id="4_31721" className="symbol-4_31721">
                        <p
                            id="4_31722"
                            className="paragraph-4_31722 fill-lightsuccessdefault-2_2297-paragraph text-caption-m-2_2285"
                        >
                            {text ?? text_4_31722 ?? "Hint"}
                        </p>
                    </div>
                )}
                {state === "disabled" && size === "m" && (
                    <div id="4_31723" className="symbol-4_31723">
                        <p
                            id="4_31724"
                            className="paragraph-4_31724 fill-lightfgdisabled-2_2294-paragraph text-caption-m-2_2285"
                        >
                            {text ?? text_4_31724 ?? "Hint"}
                        </p>
                    </div>
                )}
                {state === "disabled" && size === "l" && (
                    <div id="4_31725" className="symbol-4_31725">
                        <p
                            id="4_31726"
                            className="paragraph-4_31726 fill-lightfgdisabled-2_2294-paragraph text-mobilecaption-l-2_2289"
                        >
                            {text ?? text_4_31726 ?? "Hint"}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Inputelementshint0;
