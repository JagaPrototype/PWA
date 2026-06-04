import _Item_DropdownMenu from "@/components/itemdropdownmenu";
import _Scrollbar from "@/components/scrollbar";
import "@/styles/Dropdownmenu.css";
interface dropdownmenuProps {
    scrollbar?: boolean;
    item01?: boolean;
    item02?: boolean;
    item03?: boolean;
    item04?: boolean;
    item05?: boolean;
    item06?: boolean;
    item07?: boolean;
    item08?: boolean;
    size?: string;
    id?: string;
    className?: string;
    text_2_19093_2_24032?: string;
    text_2_19094_2_24032?: string;
    text_2_19095_2_24032?: string;
    text_2_19096_2_24032?: string;
    text_2_19097_2_24032?: string;
    text_2_19098_2_24032?: string;
    text_2_19099_2_24032?: string;
    text_2_19100_2_24032?: string;
    text_2_19093_2_24033?: string;
    text_2_19094_2_24033?: string;
    text_2_19095_2_24033?: string;
    text_2_19096_2_24033?: string;
    text_2_19097_2_24033?: string;
    text_2_19098_2_24033?: string;
    text_2_19099_2_24033?: string;
    text_2_19100_2_24033?: string;
    text_2_19081_2_24028?: string;
    text_2_19082_2_24028?: string;
    text_2_19083_2_24028?: string;
    text_2_19084_2_24028?: string;
    text_2_19085_2_24028?: string;
    text_2_19086_2_24028?: string;
    text_2_19087_2_24028?: string;
    text_2_19088_2_24028?: string;
    text_2_19081_2_24029?: string;
    text_2_19082_2_24029?: string;
    text_2_19083_2_24029?: string;
    text_2_19084_2_24029?: string;
    text_2_19085_2_24029?: string;
    text_2_19086_2_24029?: string;
    text_2_19087_2_24029?: string;
    text_2_19088_2_24029?: string;
    instance_2_19082?: string;
}
const Dropdownmenu = (props: dropdownmenuProps) => {
    const {
        scrollbar = true,
        item01 = true,
        item02 = true,
        item03 = true,
        item04 = true,
        item05 = true,
        item06 = false,
        item07 = false,
        item08 = false,
        size,
        id,
        className = "",
        text_2_19093_2_24032,
        text_2_19094_2_24032,
        text_2_19095_2_24032,
        text_2_19096_2_24032,
        text_2_19097_2_24032,
        text_2_19098_2_24032,
        text_2_19099_2_24032,
        text_2_19100_2_24032,
        text_2_19093_2_24033,
        text_2_19094_2_24033,
        text_2_19095_2_24033,
        text_2_19096_2_24033,
        text_2_19097_2_24033,
        text_2_19098_2_24033,
        text_2_19099_2_24033,
        text_2_19100_2_24033,
        text_2_19081_2_24028,
        text_2_19082_2_24028,
        text_2_19083_2_24028,
        text_2_19084_2_24028,
        text_2_19085_2_24028,
        text_2_19086_2_24028,
        text_2_19087_2_24028,
        text_2_19088_2_24028,
        text_2_19081_2_24029,
        text_2_19082_2_24029,
        text_2_19083_2_24029,
        text_2_19084_2_24029,
        text_2_19085_2_24029,
        text_2_19086_2_24029,
        text_2_19087_2_24029,
        text_2_19088_2_24029,
        instance_2_19082
    } = props;

    return (
        <div className={`component-2_19078 ${className}`} id={id}>
            <div id="2_19078" className="symbol-2_19078">
                {size === "l" && (
                    <div id="2_19079" className="stroke-wrapper-2_19079">
                        <div className="symbol-2_19079 fill-lightbgsurface1-2_2272 effect-shadowbottoml-2_22043">
                            <div id="2_19080" className="frame-2_19080">
                                <div className="frame-content-2_19080">
                                    {item01 && (
                                        <_Item_DropdownMenu
                                            id="2_19081"
                                            className="instance-2_19081"
                                            size={"l"}
                                            left={"none"}
                                            checked={"false"}
                                            disabled={"false"}
                                            hint={false}
                                            text_2_19081_2_24028={
                                                text_2_19081_2_24028
                                            }
                                            text_2_19081_2_24029={
                                                text_2_19081_2_24029
                                            }
                                        ></_Item_DropdownMenu>
                                    )}
                                    {item02 && (
                                        <_Item_DropdownMenu
                                            id="2_19082"
                                            className="instance-2_19082"
                                            size={"l"}
                                            left={"none"}
                                            checked={"false"}
                                            disabled={"false"}
                                            hint={false}
                                            text_2_19082_2_24028={
                                                text_2_19082_2_24028
                                            }
                                            text_2_19082_2_24029={
                                                text_2_19082_2_24029
                                            }
                                        ></_Item_DropdownMenu>
                                    )}
                                    {item03 && (
                                        <_Item_DropdownMenu
                                            id="2_19083"
                                            className="instance-2_19083"
                                            size={"l"}
                                            left={"none"}
                                            checked={"false"}
                                            disabled={"false"}
                                            hint={false}
                                            text_2_19083_2_24028={
                                                text_2_19083_2_24028
                                            }
                                            text_2_19083_2_24029={
                                                text_2_19083_2_24029
                                            }
                                        ></_Item_DropdownMenu>
                                    )}
                                    {item04 && (
                                        <_Item_DropdownMenu
                                            id="2_19084"
                                            className="instance-2_19084"
                                            size={"l"}
                                            left={"none"}
                                            checked={"false"}
                                            disabled={"false"}
                                            hint={false}
                                            text_2_19084_2_24028={
                                                text_2_19084_2_24028
                                            }
                                            text_2_19084_2_24029={
                                                text_2_19084_2_24029
                                            }
                                        ></_Item_DropdownMenu>
                                    )}
                                    {item05 && (
                                        <_Item_DropdownMenu
                                            id="2_19085"
                                            className="instance-2_19085"
                                            size={"l"}
                                            left={"none"}
                                            checked={"false"}
                                            disabled={"false"}
                                            hint={false}
                                            text_2_19085_2_24028={
                                                text_2_19085_2_24028
                                            }
                                            text_2_19085_2_24029={
                                                text_2_19085_2_24029
                                            }
                                        ></_Item_DropdownMenu>
                                    )}
                                    {item06 && (
                                        <_Item_DropdownMenu
                                            id="2_19086"
                                            className="instance-2_19086"
                                            size={"l"}
                                            left={"none"}
                                            checked={"false"}
                                            disabled={"false"}
                                            hint={false}
                                            text_2_19086_2_24028={
                                                text_2_19086_2_24028
                                            }
                                            text_2_19086_2_24029={
                                                text_2_19086_2_24029
                                            }
                                        ></_Item_DropdownMenu>
                                    )}
                                    {item07 && (
                                        <_Item_DropdownMenu
                                            id="2_19087"
                                            className="instance-2_19087"
                                            size={"l"}
                                            left={"none"}
                                            checked={"false"}
                                            disabled={"false"}
                                            hint={false}
                                            text_2_19087_2_24028={
                                                text_2_19087_2_24028
                                            }
                                            text_2_19087_2_24029={
                                                text_2_19087_2_24029
                                            }
                                        ></_Item_DropdownMenu>
                                    )}
                                    {item08 && (
                                        <_Item_DropdownMenu
                                            id="2_19088"
                                            className="instance-2_19088"
                                            size={"l"}
                                            left={"none"}
                                            checked={"false"}
                                            disabled={"false"}
                                            hint={false}
                                            text_2_19088_2_24028={
                                                text_2_19088_2_24028
                                            }
                                            text_2_19088_2_24029={
                                                text_2_19088_2_24029
                                            }
                                        ></_Item_DropdownMenu>
                                    )}
                                </div>
                            </div>
                            {scrollbar && (
                                <div id="2_19089" className="frame-2_19089">
                                    <div className="frame-content-2_19089">
                                        <_Scrollbar
                                            id="2_19090"
                                            className="instance-2_19090"
                                            active={"false"}
                                        ></_Scrollbar>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="stroke-2_19079 stroke-lightbordermuted-2_22055"></div>
                    </div>
                )}
                {size === "m" && (
                    <div id="2_19091" className="stroke-wrapper-2_19091">
                        <div className="symbol-2_19091 fill-lightbgsurface1-2_2272 effect-shadowbottomm-2_22042">
                            <div id="2_19092" className="frame-2_19092">
                                <div className="frame-content-2_19092">
                                    {item01 && (
                                        <_Item_DropdownMenu
                                            id="2_19093"
                                            className="instance-2_19093"
                                            size={"m"}
                                            left={"none"}
                                            checked={"false"}
                                            disabled={"false"}
                                            hint={false}
                                            text_2_19093_2_24032={
                                                text_2_19093_2_24032
                                            }
                                            text_2_19093_2_24033={
                                                text_2_19093_2_24033
                                            }
                                        ></_Item_DropdownMenu>
                                    )}
                                    {item02 && (
                                        <_Item_DropdownMenu
                                            id="2_19094"
                                            className="instance-2_19094"
                                            size={"m"}
                                            left={"none"}
                                            checked={"false"}
                                            disabled={"false"}
                                            hint={false}
                                            text_2_19094_2_24032={
                                                text_2_19094_2_24032
                                            }
                                            text_2_19094_2_24033={
                                                text_2_19094_2_24033
                                            }
                                        ></_Item_DropdownMenu>
                                    )}
                                    {item03 && (
                                        <_Item_DropdownMenu
                                            id="2_19095"
                                            className="instance-2_19095"
                                            size={"m"}
                                            left={"none"}
                                            checked={"false"}
                                            disabled={"false"}
                                            hint={false}
                                            text_2_19095_2_24032={
                                                text_2_19095_2_24032
                                            }
                                            text_2_19095_2_24033={
                                                text_2_19095_2_24033
                                            }
                                        ></_Item_DropdownMenu>
                                    )}
                                    {item04 && (
                                        <_Item_DropdownMenu
                                            id="2_19096"
                                            className="instance-2_19096"
                                            size={"m"}
                                            left={"none"}
                                            checked={"false"}
                                            disabled={"false"}
                                            hint={false}
                                            text_2_19096_2_24032={
                                                text_2_19096_2_24032
                                            }
                                            text_2_19096_2_24033={
                                                text_2_19096_2_24033
                                            }
                                        ></_Item_DropdownMenu>
                                    )}
                                    {item05 && (
                                        <_Item_DropdownMenu
                                            id="2_19097"
                                            className="instance-2_19097"
                                            size={"m"}
                                            left={"none"}
                                            checked={"false"}
                                            disabled={"false"}
                                            hint={false}
                                            text_2_19097_2_24032={
                                                text_2_19097_2_24032
                                            }
                                            text_2_19097_2_24033={
                                                text_2_19097_2_24033
                                            }
                                        ></_Item_DropdownMenu>
                                    )}
                                    {item06 && (
                                        <_Item_DropdownMenu
                                            id="2_19098"
                                            className="instance-2_19098"
                                            size={"m"}
                                            left={"none"}
                                            checked={"false"}
                                            disabled={"false"}
                                            hint={false}
                                            text_2_19098_2_24032={
                                                text_2_19098_2_24032
                                            }
                                            text_2_19098_2_24033={
                                                text_2_19098_2_24033
                                            }
                                        ></_Item_DropdownMenu>
                                    )}
                                    {item07 && (
                                        <_Item_DropdownMenu
                                            id="2_19099"
                                            className="instance-2_19099"
                                            size={"m"}
                                            left={"none"}
                                            checked={"false"}
                                            disabled={"false"}
                                            hint={false}
                                            text_2_19099_2_24032={
                                                text_2_19099_2_24032
                                            }
                                            text_2_19099_2_24033={
                                                text_2_19099_2_24033
                                            }
                                        ></_Item_DropdownMenu>
                                    )}
                                    {item08 && (
                                        <_Item_DropdownMenu
                                            id="2_19100"
                                            className="instance-2_19100"
                                            size={"m"}
                                            left={"none"}
                                            checked={"false"}
                                            disabled={"false"}
                                            hint={false}
                                            text_2_19100_2_24032={
                                                text_2_19100_2_24032
                                            }
                                            text_2_19100_2_24033={
                                                text_2_19100_2_24033
                                            }
                                        ></_Item_DropdownMenu>
                                    )}
                                </div>
                            </div>
                            {scrollbar && (
                                <div id="2_19101" className="frame-2_19101">
                                    <div className="frame-content-2_19101">
                                        <_Scrollbar
                                            id="2_19102"
                                            className="instance-2_19102"
                                            active={"false"}
                                        ></_Scrollbar>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="stroke-2_19091 stroke-lightbordermuted-2_22055"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Dropdownmenu;
