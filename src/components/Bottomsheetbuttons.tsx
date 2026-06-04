import Button from "@/components/button";
import HomeIndicator from "@/components/homeindicator";
import "@/styles/Bottomsheetbuttons.css";
interface bottomsheetbuttonsProps {
    variant?: string;
    id?: string;
    className?: string;
    instance_2_80784?: string;
    text_2_80785_2_25246?: string;
    text_2_80785_2_25247_2_24625?: string;
    text_2_80786_2_25181?: string;
    text_2_80786_2_25182_2_24623?: string;
}
const Bottomsheetbuttons = (props: bottomsheetbuttonsProps) => {
    const {
        variant,
        id,
        className = "",
        instance_2_80784,
        text_2_80785_2_25246,
        text_2_80785_2_25247_2_24625,
        text_2_80786_2_25181,
        text_2_80786_2_25182_2_24623
    } = props;

    return (
        <div className={`component-2_80783 ${className}`} id={id}>
            <div id="2_80783" className="symbol-2_80783">
                {variant === "horizontal" && (
                    <div
                        id="2_80784"
                        className="symbol-2_80784 fill-lightbgsurface1-2_80722"
                    >
                        <Button
                            id="2_80785"
                            className="instance-2_80785"
                            size={"l"}
                            variant={"secondary"}
                            state={"default"}
                            colorScheme={"neutral"}
                            leftIcon={false}
                            text_2_80785_2_25246={text_2_80785_2_25246}
                            text_2_80785_2_25247_2_24625={
                                text_2_80785_2_25247_2_24625
                            }
                        ></Button>
                        <Button
                            id="2_80786"
                            className="instance-2_80786"
                            size={"l"}
                            variant={"primary"}
                            state={"default"}
                            colorScheme={"accent"}
                            leftIcon={false}
                            text_2_80786_2_25181={text_2_80786_2_25181}
                            text_2_80786_2_25182_2_24623={
                                text_2_80786_2_25182_2_24623
                            }
                        ></Button>
                        <HomeIndicator
                            id="2_80787"
                            className="instance-2_80787"
                            bg={"true"}
                        ></HomeIndicator>
                    </div>
                )}
                {variant === "vertical" && (
                    <div
                        id="2_80788"
                        className="symbol-2_80788 fill-lightbgsurface1-2_80722"
                    >
                        <Button
                            id="2_80789"
                            className="instance-2_80789"
                            size={"l"}
                            variant={"primary"}
                            state={"default"}
                            colorScheme={"accent"}
                            leftIcon={false}
                        ></Button>
                        <Button
                            id="2_80790"
                            className="instance-2_80790"
                            size={"l"}
                            variant={"secondary"}
                            state={"default"}
                            colorScheme={"neutral"}
                            leftIcon={false}
                        ></Button>
                        <HomeIndicator
                            id="2_80791"
                            className="instance-2_80791"
                            bg={"true"}
                        ></HomeIndicator>
                    </div>
                )}
                {variant === "oneButton" && (
                    <div
                        id="2_80792"
                        className="symbol-2_80792 fill-lightbgsurface1-2_80722"
                    >
                        <Button
                            id="2_80793"
                            className="instance-2_80793"
                            size={"l"}
                            variant={"primary"}
                            state={"default"}
                            colorScheme={"accent"}
                            leftIcon={false}
                        ></Button>
                        <HomeIndicator
                            id="2_80794"
                            className="instance-2_80794"
                            bg={"true"}
                        ></HomeIndicator>
                    </div>
                )}
                {variant === "none" && (
                    <div
                        id="2_80795"
                        className="symbol-2_80795 fill-lightbgsurface1-2_80722"
                    >
                        <HomeIndicator
                            id="2_80796"
                            className="instance-2_80796"
                            bg={"true"}
                        ></HomeIndicator>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Bottomsheetbuttons;
