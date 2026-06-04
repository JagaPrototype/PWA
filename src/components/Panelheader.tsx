import RatingStarFill from "@/components/ratingstarfill";
import RatingFavoriteFilled from "@/components/ratingfavoritefilled";
import OrganizeTimeFill from "@/components/organizetimefill";
import Counter from "@/components/counter";
import ButtonIcon from "@/components/buttonicon";
import "@/styles/Panelheader.css";
interface panelheaderProps {
    Lefticon?: boolean;
    Counter?: boolean;
    RightButton?: boolean;
    id?: string;
    className?: string;
    instance_2_24200_2_24213_343_47798_2_18699?: string;
    instance_2_24200_2_24213_343_47807_2_18699?: string;
    text_2_24200_2_24213_343_47798_2_18701?: string;
    text_2_24200_2_24213_343_47807_2_18701?: string;
    label?: string;
    text_2_24200_2_24213_343_47798_2_18702_2_23071?: string;
    text_2_24200_2_24213_343_47807_2_18702_2_23071?: string;
    iconvariant20?: string;
    instance_2_24200_2_24213_343_47798_2_18703_2_22652?: string;
    instance_2_24200_2_24213_343_47807_2_18703_2_22652?: string;
    text_2_18702_2_23071?: string;
    text_2_18701?: string;
}
const Panelheader = (props: panelheaderProps) => {
    const {
        Lefticon = true,
        Counter = true,
        RightButton = true,
        id,
        className = "",
        instance_2_24200_2_24213_343_47798_2_18699,
        instance_2_24200_2_24213_343_47807_2_18699,
        text_2_24200_2_24213_343_47798_2_18701,
        text_2_24200_2_24213_343_47807_2_18701,
        label,
        text_2_24200_2_24213_343_47798_2_18702_2_23071,
        text_2_24200_2_24213_343_47807_2_18702_2_23071,
        iconvariant20,
        instance_2_24200_2_24213_343_47798_2_18703_2_22652,
        instance_2_24200_2_24213_343_47807_2_18703_2_22652,
        text_2_18702_2_23071,
        text_2_18701
    } = props;

    return (
        <div className={`component-2_18697 ${className}`} id={id}>
            <div id="2_18697" className="symbol-2_18697">
                <div id="2_18698" className="frame-2_18698">
                    <div
                        id="2_18699"
                        className="instance-2_18699"
                        instance_2_20335={"RatingFavoriteFilled"}
                    >
                        {(instance_2_24200_2_24213_343_47798_2_18699 ===
                            "Component_343_47880" ||
                            instance_2_24200_2_24213_343_47807_2_18699 ===
                                "Component_343_47880") && (
                            <RatingStarFill id="2_18699"></RatingStarFill>
                        )}
                        {(instance_2_24200_2_24213_343_47798_2_18699 ===
                            "Component_2_20333" ||
                            instance_2_24200_2_24213_343_47807_2_18699 ===
                                "Component_2_20333") && (
                            <RatingFavoriteFilled id="2_18699"></RatingFavoriteFilled>
                        )}
                        {(instance_2_24200_2_24213_343_47798_2_18699 ===
                            "Component_2_20335" ||
                            instance_2_24200_2_24213_343_47807_2_18699 ===
                                "Component_2_20335") && (
                            <OrganizeTimeFill id="2_18699"></OrganizeTimeFill>
                        )}
                    </div>
                    <div id="2_18700" className="frame-2_18700">
                        <p
                            id="2_18701"
                            className="paragraph-2_18701 fill-lightfgdefault-2_22054-paragraph text-mobileh4-2_18972"
                        >
                            {text_2_24200_2_24213_343_47798_2_18701 ??
                                text_2_24200_2_24213_343_47807_2_18701 ??
                                text_2_18701 ??
                                "Недавние"}
                        </p>
                        <Counter
                            id="2_18702"
                            className="instance-2_18702"
                            size={"m (24)"}
                            variant={"secondary"}
                            label={label}
                            text_2_24200_2_24213_343_47798_2_18702_2_23071={
                                text_2_24200_2_24213_343_47798_2_18702_2_23071
                            }
                            text_2_24200_2_24213_343_47807_2_18702_2_23071={
                                text_2_24200_2_24213_343_47807_2_18702_2_23071
                            }
                            text_2_18702_2_23071={text_2_18702_2_23071}
                        ></Counter>
                    </div>
                </div>
                <ButtonIcon
                    id="2_18703"
                    className="instance-2_18703"
                    size={"m"}
                    state={"default"}
                    variant={"secondary"}
                    _style={"round"}
                    colorScheme={"neutral"}
                    iconvariant20={iconvariant20}
                    instance_2_24200_2_24213_343_47798_2_18703_2_22652={
                        instance_2_24200_2_24213_343_47798_2_18703_2_22652
                    }
                    instance_2_24200_2_24213_343_47807_2_18703_2_22652={
                        instance_2_24200_2_24213_343_47807_2_18703_2_22652
                    }
                ></ButtonIcon>
            </div>
        </div>
    );
};
export default Panelheader;
