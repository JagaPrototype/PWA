import Buttonicon from "@/components/buttonicon";
import Button from "@/components/button";
import Avatar from "@/components/avatar";
import "@/styles/Headerleftactions.css";
interface headerleftactionsProps {
    variant?: string;
    id?: string;
    className?: string;
}
const Headerleftactions = (props: headerleftactionsProps) => {
    const { variant, id, className = "" } = props;

    return (
        <div className={`component-2_27089 ${className}`} id={id}>
            <div id="2_27089" className="symbol-2_27089">
                {variant === "buttonIcon" && (
                    <div id="2_27090" className="symbol-2_27090">
                        <Buttonicon
                            id="2_27091"
                            className="instance-2_27091"
                            size={"l"}
                            variant={"tertiary"}
                            _style={"square"}
                            state={"default"}
                            colorScheme={"neutral"}
                            iconvariant24={"Component_2_18845"}
                            iconvariant20={"Component_2348_83113"}
                        ></Buttonicon>
                    </div>
                )}
                {variant === "buttonText" && (
                    <div id="2_27092" className="symbol-2_27092">
                        <Button
                            id="2_27093"
                            className="instance-2_27093"
                            size={"l"}
                            variant={"tertiary"}
                            state={"default"}
                            colorScheme={"accent"}
                            leftIcon={false}
                        ></Button>
                    </div>
                )}
                {variant === "avatar" && (
                    <div id="2_27094" className="symbol-2_27094">
                        <Avatar
                            id="2_27095"
                            className="instance-2_27095"
                            variant={"image"}
                            size={"s (32)"}
                        ></Avatar>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Headerleftactions;
