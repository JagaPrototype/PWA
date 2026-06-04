import Buttonicon from "@/components/buttonicon";
import "@/styles/Bottomsheettitle.css";
interface bottomsheettitleProps {
    titleText?: string;
    subtitle?: string;
    variant?: string;
    id?: string;
    className?: string;
    text_2_80778?: string;
}
const Bottomsheettitle = (props: bottomsheettitleProps) => {
    const {
        titleText = "Title",
        subtitle = "Subtitle",
        variant,
        id,
        className = "",
        text_2_80778
    } = props;

    return (
        <div className={`component-2_80771 ${className}`} id={id}>
            <div id="2_80771" className="symbol-2_80771">
                {variant === "withSubtitle" && (
                    <div id="2_80772" className="symbol-2_80772">
                        <div id="2_80773" className="frame-2_80773">
                            <div className="frame-content-2_80773">
                                <p
                                    id="2_80774"
                                    className="paragraph-2_80774 fill-lightfgdefault-2_80725-paragraph text-mobileh4-2_18972"
                                >
                                    {titleText ?? "Title"}
                                </p>
                                <p
                                    id="2_80775"
                                    className="paragraph-2_80775 fill-lightfgsoft-2_80728-paragraph text-mobiledescription-l-2_80764"
                                >
                                    {subtitle ?? "Subtitle"}
                                </p>
                            </div>
                        </div>
                        <Buttonicon
                            id="2_80776"
                            className="instance-2_80776"
                            size={"s"}
                            variant={"secondary"}
                            _style={"square"}
                            state={"default"}
                            colorScheme={"neutral"}
                            iconvariant20={"Component_2_1837"}
                            iconvariant16={"Component_3440_92197"}
                        ></Buttonicon>
                    </div>
                )}
                {variant === "singleLineTitle" && (
                    <div id="2_80777" className="symbol-2_80777">
                        <p
                            id="2_80778"
                            className="paragraph-2_80778 fill-lightfgdefault-2_80725-paragraph text-mobileh4-2_18972"
                        >
                            {titleText ?? text_2_80778 ?? "Title"}
                        </p>
                        <Buttonicon
                            id="2_80779"
                            className="instance-2_80779"
                            size={"s"}
                            variant={"secondary"}
                            _style={"square"}
                            state={"default"}
                            colorScheme={"neutral"}
                            iconvariant20={"Component_2_1837"}
                            iconvariant16={"Component_3440_92197"}
                        ></Buttonicon>
                    </div>
                )}
                {variant === "multipleLineTitle" && (
                    <div id="2_80780" className="symbol-2_80780">
                        <p
                            id="2_80781"
                            className="paragraph-2_80781 fill-lightfgdefault-2_80725-paragraph text-mobileh4-2_18972"
                        >
                            {titleText ?? "Title"}
                        </p>
                        <Buttonicon
                            id="2_80782"
                            className="instance-2_80782"
                            size={"s"}
                            variant={"secondary"}
                            _style={"square"}
                            state={"default"}
                            colorScheme={"neutral"}
                            iconvariant20={"Component_2_1837"}
                            iconvariant16={"Component_3440_92197"}
                        ></Buttonicon>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Bottomsheettitle;
