import ButtonIcon0 from "@/components/buttonicon0";
import PaginationPin from "@/components/paginationpin";
import PaginationNumber from "@/components/paginationnumber";
import Select from "@/components/select";
import "@/styles/Pagination.css";
interface paginationProps {
    buttons?: boolean;
    itemAmountText?: string;
    moreFirst?: boolean;
    item3?: boolean;
    item4?: boolean;
    item5?: boolean;
    moreLast?: boolean;
    page3?: boolean;
    page4?: boolean;
    page5?: boolean;
    page6?: boolean;
    page7?: boolean;
    type?: string;
    variant?: string;
    id?: string;
    className?: string;
}
const Pagination = (props: paginationProps) => {
    const {
        buttons = true,
        itemAmountText = "1-10 из 56",
        moreFirst = false,
        item3 = true,
        item4 = true,
        item5 = true,
        moreLast = true,
        page3 = true,
        page4 = true,
        page5 = true,
        page6 = true,
        page7 = true,
        type,
        variant,
        id,
        className = ""
    } = props;

    return (
        <div className={`component-2_19112 ${className}`} id={id}>
            <div id="2_19112" className="symbol-2_19112">
                {type === "pin" && variant === "primary" && (
                    <div id="2_19113" className="symbol-2_19113">
                        {buttons && (
                            <ButtonIcon0
                                id="2_19114"
                                className="instance-2_19114"
                                size={"s"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"neutral"}
                                iconvariant24={"Component_3193_91367"}
                                iconvariant20={"Component_2_24180"}
                            ></ButtonIcon0>
                        )}
                        <div
                            id="2_19115"
                            className="frame-2_19115 fill-lightbgsurface1-2_2272"
                        >
                            {moreFirst && (
                                <PaginationPin
                                    id="2_19116"
                                    className="instance-2_19116"
                                    active={"false"}
                                    more={"true"}
                                ></PaginationPin>
                            )}
                            <PaginationPin
                                id="2_19117"
                                className="instance-2_19117"
                                active={"true"}
                                more={"false"}
                            ></PaginationPin>
                            <PaginationPin
                                id="2_19118"
                                className="instance-2_19118"
                                active={"false"}
                                more={"false"}
                            ></PaginationPin>
                            {item3 && (
                                <PaginationPin
                                    id="2_19119"
                                    className="instance-2_19119"
                                    active={"false"}
                                    more={"false"}
                                ></PaginationPin>
                            )}
                            {item4 && (
                                <PaginationPin
                                    id="2_19120"
                                    className="instance-2_19120"
                                    active={"false"}
                                    more={"false"}
                                ></PaginationPin>
                            )}
                            {item5 && (
                                <PaginationPin
                                    id="2_19121"
                                    className="instance-2_19121"
                                    active={"false"}
                                    more={"false"}
                                ></PaginationPin>
                            )}
                            {moreLast && (
                                <PaginationPin
                                    id="2_19122"
                                    className="instance-2_19122"
                                    active={"false"}
                                    more={"true"}
                                ></PaginationPin>
                            )}
                        </div>
                        {buttons && (
                            <ButtonIcon0
                                id="2_19123"
                                className="instance-2_19123"
                                size={"s"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"neutral"}
                                iconvariant24={"Component_3491_96010"}
                                iconvariant20={"Component_2_23123"}
                            ></ButtonIcon0>
                        )}
                    </div>
                )}
                {type === "pin" && variant === "secondary" && (
                    <div id="2_19124" className="symbol-2_19124">
                        {buttons && (
                            <ButtonIcon0
                                id="2_19125"
                                className="instance-2_19125"
                                size={"s"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"neutral"}
                                iconvariant24={"Component_3193_91367"}
                                iconvariant20={"Component_2_24180"}
                            ></ButtonIcon0>
                        )}
                        <div
                            id="2_19126"
                            className="frame-2_19126 fill-lightbgsurface2-2_22058"
                        >
                            {moreFirst && (
                                <PaginationPin
                                    id="2_19127"
                                    className="instance-2_19127"
                                    active={"false"}
                                    more={"true"}
                                ></PaginationPin>
                            )}
                            <PaginationPin
                                id="2_19128"
                                className="instance-2_19128"
                                active={"true"}
                                more={"false"}
                            ></PaginationPin>
                            <PaginationPin
                                id="2_19129"
                                className="instance-2_19129"
                                active={"false"}
                                more={"false"}
                            ></PaginationPin>
                            {item3 && (
                                <PaginationPin
                                    id="2_19130"
                                    className="instance-2_19130"
                                    active={"false"}
                                    more={"false"}
                                ></PaginationPin>
                            )}
                            {item4 && (
                                <PaginationPin
                                    id="2_19131"
                                    className="instance-2_19131"
                                    active={"false"}
                                    more={"false"}
                                ></PaginationPin>
                            )}
                            {item5 && (
                                <PaginationPin
                                    id="2_19132"
                                    className="instance-2_19132"
                                    active={"false"}
                                    more={"false"}
                                ></PaginationPin>
                            )}
                            {moreLast && (
                                <PaginationPin
                                    id="2_19133"
                                    className="instance-2_19133"
                                    active={"false"}
                                    more={"true"}
                                ></PaginationPin>
                            )}
                        </div>
                        {buttons && (
                            <ButtonIcon0
                                id="2_19134"
                                className="instance-2_19134"
                                size={"s"}
                                state={"default"}
                                variant={"tertiary"}
                                _style={"square"}
                                colorScheme={"neutral"}
                                iconvariant24={"Component_3491_96010"}
                                iconvariant20={"Component_2_23123"}
                            ></ButtonIcon0>
                        )}
                    </div>
                )}
                {type === "number" && variant === "primary" && (
                    <div
                        id="2_19135"
                        className="symbol-2_19135 fill-lightbgsurface1-2_2272"
                    >
                        {buttons && (
                            <ButtonIcon0
                                id="2_19136"
                                className="instance-2_19136"
                                size={"s"}
                                state={"default"}
                                variant={"secondary"}
                                _style={"square"}
                                colorScheme={"neutral"}
                                iconvariant20={"Component_2_24180"}
                            ></ButtonIcon0>
                        )}
                        <div id="2_19137" className="frame-2_19137">
                            <PaginationNumber
                                id="2_19138"
                                className="instance-2_19138"
                                state={"default"}
                                selected={"false"}
                                more={"false"}
                            ></PaginationNumber>
                            <PaginationNumber
                                id="2_19139"
                                className="instance-2_19139"
                                text_2_19191={`2`}
                                state={"default"}
                                selected={"false"}
                                more={"false"}
                            ></PaginationNumber>
                            {page3 && (
                                <PaginationNumber
                                    id="2_19140"
                                    className="instance-2_19140"
                                    text_2_19197={`3`}
                                    state={"default"}
                                    selected={"true"}
                                    more={"false"}
                                ></PaginationNumber>
                            )}
                            {page4 && (
                                <PaginationNumber
                                    id="2_19141"
                                    className="instance-2_19141"
                                    text_2_19191={`4`}
                                    state={"default"}
                                    selected={"false"}
                                    more={"false"}
                                ></PaginationNumber>
                            )}
                            {page5 && (
                                <PaginationNumber
                                    id="2_19142"
                                    className="instance-2_19142"
                                    text_2_19191={`5`}
                                    state={"default"}
                                    selected={"false"}
                                    more={"false"}
                                ></PaginationNumber>
                            )}
                            {page6 && (
                                <PaginationNumber
                                    id="2_19143"
                                    className="instance-2_19143"
                                    state={"default"}
                                    selected={"false"}
                                    more={"true"}
                                ></PaginationNumber>
                            )}
                            {page7 && (
                                <PaginationNumber
                                    id="2_19144"
                                    className="instance-2_19144"
                                    text_2_19191={`31`}
                                    state={"default"}
                                    selected={"false"}
                                    more={"false"}
                                ></PaginationNumber>
                            )}
                        </div>
                        {buttons && (
                            <ButtonIcon0
                                id="2_19145"
                                className="instance-2_19145"
                                size={"s"}
                                state={"default"}
                                variant={"secondary"}
                                _style={"square"}
                                colorScheme={"neutral"}
                                iconvariant20={"Component_2_23123"}
                            ></ButtonIcon0>
                        )}
                    </div>
                )}
                {type === "number" && variant === "secondary" && (
                    <div
                        id="2_19146"
                        className="symbol-2_19146 fill-lightbgsurface2-2_22058"
                    >
                        {buttons && (
                            <ButtonIcon0
                                id="2_19147"
                                className="instance-2_19147"
                                size={"s"}
                                state={"default"}
                                variant={"white bg"}
                                _style={"square"}
                                colorScheme={"neutral"}
                                iconvariant20={"Component_2_24180"}
                            ></ButtonIcon0>
                        )}
                        <div id="2_19148" className="frame-2_19148">
                            <PaginationNumber
                                id="2_19149"
                                className="instance-2_19149"
                                state={"default"}
                                selected={"false"}
                                more={"false"}
                            ></PaginationNumber>
                            <PaginationNumber
                                id="2_19150"
                                className="instance-2_19150"
                                text_2_19191={`2`}
                                state={"default"}
                                selected={"false"}
                                more={"false"}
                            ></PaginationNumber>
                            {page3 && (
                                <PaginationNumber
                                    id="2_19151"
                                    className="instance-2_19151"
                                    text_2_19197={`3`}
                                    state={"default"}
                                    selected={"true"}
                                    more={"false"}
                                ></PaginationNumber>
                            )}
                            {page4 && (
                                <PaginationNumber
                                    id="2_19152"
                                    className="instance-2_19152"
                                    text_2_19191={`4`}
                                    state={"default"}
                                    selected={"false"}
                                    more={"false"}
                                ></PaginationNumber>
                            )}
                            {page5 && (
                                <PaginationNumber
                                    id="2_19153"
                                    className="instance-2_19153"
                                    text_2_19191={`5`}
                                    state={"default"}
                                    selected={"false"}
                                    more={"false"}
                                ></PaginationNumber>
                            )}
                            {page6 && (
                                <PaginationNumber
                                    id="2_19154"
                                    className="instance-2_19154"
                                    state={"default"}
                                    selected={"false"}
                                    more={"true"}
                                ></PaginationNumber>
                            )}
                            {page7 && (
                                <PaginationNumber
                                    id="2_19155"
                                    className="instance-2_19155"
                                    text_2_19191={`31`}
                                    state={"default"}
                                    selected={"false"}
                                    more={"false"}
                                ></PaginationNumber>
                            )}
                        </div>
                        {buttons && (
                            <ButtonIcon0
                                id="2_19156"
                                className="instance-2_19156"
                                size={"s"}
                                state={"default"}
                                variant={"white bg"}
                                _style={"square"}
                                colorScheme={"neutral"}
                                iconvariant20={"Component_2_23123"}
                            ></ButtonIcon0>
                        )}
                    </div>
                )}
                {type === "number + itemAmount" && variant === "secondary" && (
                    <div id="2_19157" className="symbol-2_19157">
                        <div
                            id="2_19158"
                            className="frame-2_19158 fill-lightbgsurface2-2_22058"
                        >
                            {buttons && (
                                <ButtonIcon0
                                    id="2_19159"
                                    className="instance-2_19159"
                                    size={"s"}
                                    state={"default"}
                                    variant={"white bg"}
                                    _style={"square"}
                                    colorScheme={"neutral"}
                                    iconvariant20={"Component_2_24180"}
                                ></ButtonIcon0>
                            )}
                            <div id="2_19160" className="frame-2_19160">
                                <PaginationNumber
                                    id="2_19161"
                                    className="instance-2_19161"
                                    state={"default"}
                                    selected={"false"}
                                    more={"false"}
                                ></PaginationNumber>
                                <PaginationNumber
                                    id="2_19162"
                                    className="instance-2_19162"
                                    text_2_19191={`2`}
                                    state={"default"}
                                    selected={"false"}
                                    more={"false"}
                                ></PaginationNumber>
                                {page3 && (
                                    <PaginationNumber
                                        id="2_19163"
                                        className="instance-2_19163"
                                        text_2_19197={`3`}
                                        state={"default"}
                                        selected={"true"}
                                        more={"false"}
                                    ></PaginationNumber>
                                )}
                                {page4 && (
                                    <PaginationNumber
                                        id="2_19164"
                                        className="instance-2_19164"
                                        text_2_19191={`4`}
                                        state={"default"}
                                        selected={"false"}
                                        more={"false"}
                                    ></PaginationNumber>
                                )}
                                {page5 && (
                                    <PaginationNumber
                                        id="2_19165"
                                        className="instance-2_19165"
                                        text_2_19191={`5`}
                                        state={"default"}
                                        selected={"false"}
                                        more={"false"}
                                    ></PaginationNumber>
                                )}
                                {page6 && (
                                    <PaginationNumber
                                        id="2_19166"
                                        className="instance-2_19166"
                                        state={"default"}
                                        selected={"false"}
                                        more={"true"}
                                    ></PaginationNumber>
                                )}
                                {page7 && (
                                    <PaginationNumber
                                        id="2_19167"
                                        className="instance-2_19167"
                                        text_2_19191={`31`}
                                        state={"default"}
                                        selected={"false"}
                                        more={"false"}
                                    ></PaginationNumber>
                                )}
                            </div>
                            {buttons && (
                                <ButtonIcon0
                                    id="2_19168"
                                    className="instance-2_19168"
                                    size={"s"}
                                    state={"default"}
                                    variant={"white bg"}
                                    _style={"square"}
                                    colorScheme={"neutral"}
                                    iconvariant20={"Component_2_23123"}
                                ></ButtonIcon0>
                            )}
                        </div>
                        <div id="2_19169" className="frame-2_19169">
                            <div className="frame-content-2_19169">
                                <p
                                    id="2_19170"
                                    className="paragraph-2_19170 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {itemAmountText ?? "1-10 из 56"}
                                </p>
                                <Select
                                    id="2_19171"
                                    className="instance-2_19171"
                                    size={"m"}
                                    state={"default"}
                                    dropdown={"false"}
                                    foldDirection={"down"}
                                    label={"false"}
                                    textfilled={"true"}
                                    hint={false}
                                ></Select>
                            </div>
                        </div>
                    </div>
                )}
                {type === "number + itemAmount" && variant === "primary" && (
                    <div id="2_19172" className="symbol-2_19172">
                        <div
                            id="2_19173"
                            className="frame-2_19173 fill-lightbgsurface1-2_2272"
                        >
                            {buttons && (
                                <ButtonIcon0
                                    id="2_19174"
                                    className="instance-2_19174"
                                    size={"s"}
                                    state={"default"}
                                    variant={"secondary"}
                                    _style={"square"}
                                    colorScheme={"neutral"}
                                    iconvariant20={"Component_2_24180"}
                                ></ButtonIcon0>
                            )}
                            <div id="2_19175" className="frame-2_19175">
                                <PaginationNumber
                                    id="2_19176"
                                    className="instance-2_19176"
                                    state={"default"}
                                    selected={"false"}
                                    more={"false"}
                                ></PaginationNumber>
                                <PaginationNumber
                                    id="2_19177"
                                    className="instance-2_19177"
                                    text_2_19191={`2`}
                                    state={"default"}
                                    selected={"false"}
                                    more={"false"}
                                ></PaginationNumber>
                                {page3 && (
                                    <PaginationNumber
                                        id="2_19178"
                                        className="instance-2_19178"
                                        text_2_19197={`3`}
                                        state={"default"}
                                        selected={"true"}
                                        more={"false"}
                                    ></PaginationNumber>
                                )}
                                {page4 && (
                                    <PaginationNumber
                                        id="2_19179"
                                        className="instance-2_19179"
                                        text_2_19191={`4`}
                                        state={"default"}
                                        selected={"false"}
                                        more={"false"}
                                    ></PaginationNumber>
                                )}
                                {page5 && (
                                    <PaginationNumber
                                        id="2_19180"
                                        className="instance-2_19180"
                                        text_2_19191={`5`}
                                        state={"default"}
                                        selected={"false"}
                                        more={"false"}
                                    ></PaginationNumber>
                                )}
                                {page6 && (
                                    <PaginationNumber
                                        id="2_19181"
                                        className="instance-2_19181"
                                        state={"default"}
                                        selected={"false"}
                                        more={"true"}
                                    ></PaginationNumber>
                                )}
                                {page7 && (
                                    <PaginationNumber
                                        id="2_19182"
                                        className="instance-2_19182"
                                        text_2_19191={`31`}
                                        state={"default"}
                                        selected={"false"}
                                        more={"false"}
                                    ></PaginationNumber>
                                )}
                            </div>
                            {buttons && (
                                <ButtonIcon0
                                    id="2_19183"
                                    className="instance-2_19183"
                                    size={"s"}
                                    state={"default"}
                                    variant={"secondary"}
                                    _style={"square"}
                                    colorScheme={"neutral"}
                                    iconvariant20={"Component_2_23123"}
                                ></ButtonIcon0>
                            )}
                        </div>
                        <div id="2_19184" className="frame-2_19184">
                            <div className="frame-content-2_19184">
                                <p
                                    id="2_19185"
                                    className="paragraph-2_19185 fill-lightfgdefault-2_2273-paragraph text-mobiledescription-l-2_2288"
                                >
                                    {itemAmountText ?? "1-10 из 56"}
                                </p>
                                <Select
                                    id="2_19186"
                                    className="instance-2_19186"
                                    size={"m"}
                                    state={"default"}
                                    dropdown={"false"}
                                    foldDirection={"down"}
                                    label={"false"}
                                    textfilled={"true"}
                                    hint={false}
                                ></Select>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Pagination;
