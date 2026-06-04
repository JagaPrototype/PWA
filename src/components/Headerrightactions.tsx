import Buttonicon from "@/components/buttonicon";
import Button from "@/components/button";
import "@/styles/Headerrightactions.css";
interface headerrightactionsProps {
    buttonIcon1?: boolean;
    buttonIcon2?: boolean;
    buttonIcon3?: boolean;
    variant?: string;
    id?: string;
    className?: string;
}
const Headerrightactions = (props: headerrightactionsProps) => {
    const {
        buttonIcon1 = true,
        buttonIcon2 = false,
        buttonIcon3 = false,
        variant,
        id,
        className = ""
    } = props;

    return (
        <div className={`component-2_27082 ${className}`} id={id}>
            <div id="2_27082" className="symbol-2_27082">
                {variant === "buttonIcon" && (
                    <div id="2_27083" className="symbol-2_27083">
                        {buttonIcon3 && (
                            <Buttonicon
                                id="2_27084"
                                className="instance-2_27084"
                                size={"l"}
                                variant={"tertiary"}
                                _style={"square"}
                                state={"default"}
                                colorScheme={"neutral"}
                                iconvariant24={"Component_2_25176"}
                                iconvariant20={"Component_2348_83113"}
                            ></Buttonicon>
                        )}
                        {buttonIcon2 && (
                            <Buttonicon
                                id="2_27085"
                                className="instance-2_27085"
                                size={"l"}
                                variant={"tertiary"}
                                _style={"square"}
                                state={"default"}
                                colorScheme={"neutral"}
                                iconvariant24={"Component_2_20301"}
                                iconvariant20={"Component_2348_83113"}
                            ></Buttonicon>
                        )}
                        {buttonIcon1 && (
                            <Buttonicon
                                id="2_27086"
                                className="instance-2_27086"
                                size={"l"}
                                variant={"tertiary"}
                                _style={"square"}
                                state={"default"}
                                colorScheme={"neutral"}
                                iconvariant24={"Component_2_18845"}
                                iconvariant20={"Component_2348_83113"}
                            ></Buttonicon>
                        )}
                    </div>
                )}
                {variant === "buttonText" && (
                    <div id="2_27087" className="symbol-2_27087">
                        <Button
                            id="2_27088"
                            className="instance-2_27088"
                            size={"l"}
                            variant={"tertiary"}
                            state={"default"}
                            colorScheme={"accent"}
                            leftIcon={false}
                        ></Button>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Headerrightactions;
