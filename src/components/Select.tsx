import _Label_top from "@/components/labeltop";
import _Left_icon from "@/components/lefticon";
import _Body_select from "@/components/bodyselect";
import NavigationChevrondown0 from "@/components/navigationchevrondown0";
import _Hint from "@/components/hint";
import NavigationChevrondown1 from "@/components/navigationchevrondown1";
import DropdownMenu from "@/components/dropdownmenu";
import NavigationChevronUp1 from "@/components/navigationchevronup1";
import NavigationChevronUp from "@/components/navigationchevronup";
import "@/styles/Select.css";
interface selectProps {
    lefticon?: boolean;
    hint?: boolean;
    size?: string;
    state?: string;
    dropdown?: string;
    foldDirection?: string;
    label?: string;
    textfilled?: string;
    id?: string;
    className?: string;
    text_2_19246_2_24017?: string;
    text_2_19249_2_20267?: string;
}
const Select = (props: selectProps) => {
    const {
        lefticon = false,
        hint = true,
        size,
        state,
        dropdown,
        foldDirection,
        label,
        textfilled,
        id,
        className = "",
        text_2_19246_2_24017,
        text_2_19249_2_20267
    } = props;

    return (
        <div className={`component-2_19202 ${className}`} id={id}>
            <div id="2_19202" className="symbol-2_19202">
                {size === "l" &&
                    state === "default" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19203" className="symbol-2_19203">
                            <_Label_top
                                id="2_19204"
                                className="instance-2_19204"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19205"
                                className="stroke-wrapper-2_19205"
                            >
                                <div className="frame-2_19205 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19205">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19206"
                                                className="instance-2_19206"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19207"
                                            className="instance-2_19207"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19208"
                                            className="frame-2_19208"
                                        >
                                            <div className="frame-content-2_19208">
                                                <NavigationChevrondown0
                                                    id="2_19209"
                                                    className="instance-2_19209"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19205 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19210"
                                    className="instance-2_19210"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19211" className="symbol-2_19211">
                            <div
                                id="2_19212"
                                className="stroke-wrapper-2_19212"
                            >
                                <div className="frame-2_19212 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19212">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19213"
                                                className="instance-2_19213"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <div
                                            id="2_19214"
                                            className="frame-2_19214"
                                        >
                                            <div className="frame-content-2_19214">
                                                <_Label_top
                                                    id="2_19215"
                                                    className="instance-2_19215"
                                                    size={"l"}
                                                    counter={false}
                                                    icon={false}
                                                    required={false}
                                                ></_Label_top>
                                                <_Body_select
                                                    id="2_19216"
                                                    className="instance-2_19216"
                                                    size={"xl"}
                                                    filled={"false"}
                                                    cursor={"false"}
                                                ></_Body_select>
                                            </div>
                                        </div>
                                        <div
                                            id="2_19217"
                                            className="frame-2_19217"
                                        >
                                            <div className="frame-content-2_19217">
                                                <NavigationChevrondown0
                                                    id="2_19218"
                                                    className="instance-2_19218"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19212 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19219"
                                    className="instance-2_19219"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19220" className="symbol-2_19220">
                            <_Label_top
                                id="2_19221"
                                className="instance-2_19221"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19222"
                                className="stroke-wrapper-2_19222"
                            >
                                <div className="frame-2_19222 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19222">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19223"
                                                className="instance-2_19223"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19224"
                                            className="instance-2_19224"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19225"
                                            className="frame-2_19225"
                                        >
                                            <div className="frame-content-2_19225">
                                                <NavigationChevrondown1
                                                    id="2_19226"
                                                    className="instance-2_19226"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19222 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19227"
                                    className="instance-2_19227"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19228" className="symbol-2_19228">
                            <_Label_top
                                id="2_19229"
                                className="instance-2_19229"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19230"
                                className="stroke-wrapper-2_19230"
                            >
                                <div className="frame-2_19230 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19230">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19231"
                                                className="instance-2_19231"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19232"
                                            className="instance-2_19232"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19233"
                                            className="frame-2_19233"
                                        >
                                            <div className="frame-content-2_19233">
                                                <NavigationChevrondown1
                                                    id="2_19234"
                                                    className="instance-2_19234"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19230 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19235"
                                    className="instance-2_19235"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19236" className="symbol-2_19236">
                            <div
                                id="2_19237"
                                className="stroke-wrapper-2_19237"
                            >
                                <div className="frame-2_19237 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19237">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19238"
                                                className="instance-2_19238"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19239"
                                            className="instance-2_19239"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19240"
                                            className="frame-2_19240"
                                        >
                                            <div className="frame-content-2_19240">
                                                <NavigationChevrondown1
                                                    id="2_19241"
                                                    className="instance-2_19241"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19237 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19242"
                                    className="instance-2_19242"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19243" className="symbol-2_19243">
                            <div
                                id="2_19244"
                                className="stroke-wrapper-2_19244"
                            >
                                <div className="frame-2_19244 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19244">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19245"
                                                className="instance-2_19245"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19246"
                                            className="instance-2_19246"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                            text_2_19246_2_24017={
                                                text_2_19246_2_24017
                                            }
                                        ></_Body_select>
                                        <div
                                            id="2_19247"
                                            className="frame-2_19247"
                                        >
                                            <div className="frame-content-2_19247">
                                                <NavigationChevrondown1
                                                    id="2_19248"
                                                    className="instance-2_19248"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19244 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19249"
                                    className="instance-2_19249"
                                    size={"m"}
                                    state={"default"}
                                    text_2_19249_2_20267={text_2_19249_2_20267}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19250" className="symbol-2_19250">
                            <_Label_top
                                id="2_19251"
                                className="instance-2_19251"
                                size={"m"}
                                counter={false}
                                icon={true}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19252"
                                className="stroke-wrapper-2_19252"
                            >
                                <div className="frame-2_19252 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19252">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19253"
                                                className="instance-2_19253"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19254"
                                            className="instance-2_19254"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19255"
                                            className="frame-2_19255"
                                        >
                                            <div className="frame-content-2_19255">
                                                <NavigationChevrondown1
                                                    id="2_19256"
                                                    className="instance-2_19256"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19252 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19257"
                                    className="instance-2_19257"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19258" className="symbol-2_19258">
                            <_Label_top
                                id="2_19259"
                                className="instance-2_19259"
                                size={"m"}
                                counter={false}
                                icon={true}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19260"
                                className="stroke-wrapper-2_19260"
                            >
                                <div className="frame-2_19260 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19260">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19261"
                                                className="instance-2_19261"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19262"
                                            className="instance-2_19262"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19263"
                                            className="frame-2_19263"
                                        >
                                            <div className="frame-content-2_19263">
                                                <NavigationChevrondown1
                                                    id="2_19264"
                                                    className="instance-2_19264"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19260 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19265"
                                    className="instance-2_19265"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19266" className="symbol-2_19266">
                            <div
                                id="2_19267"
                                className="stroke-wrapper-2_19267"
                            >
                                <div className="frame-2_19267 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19267">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19268"
                                                className="instance-2_19268"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19269"
                                            className="instance-2_19269"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19270"
                                            className="frame-2_19270"
                                        >
                                            <div className="frame-content-2_19270">
                                                <NavigationChevrondown1
                                                    id="2_19271"
                                                    className="instance-2_19271"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19267 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19272"
                                    className="instance-2_19272"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19273" className="symbol-2_19273">
                            <div
                                id="2_19274"
                                className="stroke-wrapper-2_19274"
                            >
                                <div className="frame-2_19274 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19274">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19275"
                                                className="instance-2_19275"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19276"
                                            className="instance-2_19276"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19277"
                                            className="frame-2_19277"
                                        >
                                            <div className="frame-content-2_19277">
                                                <NavigationChevrondown1
                                                    id="2_19278"
                                                    className="instance-2_19278"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19274 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19279"
                                    className="instance-2_19279"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19280" className="symbol-2_19280">
                            <_Label_top
                                id="2_19281"
                                className="instance-2_19281"
                                size={"m"}
                                counter={false}
                                icon={true}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19282"
                                className="stroke-wrapper-2_19282"
                            >
                                <div className="frame-2_19282 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19282">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19283"
                                                className="instance-2_19283"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19284"
                                            className="instance-2_19284"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19285"
                                            className="frame-2_19285"
                                        >
                                            <div className="frame-content-2_19285">
                                                <NavigationChevrondown1
                                                    id="2_19286"
                                                    className="instance-2_19286"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19282 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19287"
                                    className="instance-2_19287"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19288" className="symbol-2_19288">
                            <_Label_top
                                id="2_19289"
                                className="instance-2_19289"
                                size={"m"}
                                counter={false}
                                icon={true}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19290"
                                className="stroke-wrapper-2_19290"
                            >
                                <div className="frame-2_19290 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19290">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19291"
                                                className="instance-2_19291"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19292"
                                            className="instance-2_19292"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19293"
                                            className="frame-2_19293"
                                        >
                                            <div className="frame-content-2_19293">
                                                <NavigationChevrondown1
                                                    id="2_19294"
                                                    className="instance-2_19294"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19290 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19295"
                                    className="instance-2_19295"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19296" className="symbol-2_19296">
                            <div
                                id="2_19297"
                                className="stroke-wrapper-2_19297"
                            >
                                <div className="frame-2_19297 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19297">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19298"
                                                className="instance-2_19298"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19299"
                                            className="instance-2_19299"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19300"
                                            className="frame-2_19300"
                                        >
                                            <div className="frame-content-2_19300">
                                                <NavigationChevrondown1
                                                    id="2_19301"
                                                    className="instance-2_19301"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19297 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19302"
                                    className="instance-2_19302"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19303" className="symbol-2_19303">
                            <div
                                id="2_19304"
                                className="stroke-wrapper-2_19304"
                            >
                                <div className="frame-2_19304 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19304">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19305"
                                                className="instance-2_19305"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19306"
                                            className="instance-2_19306"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19307"
                                            className="frame-2_19307"
                                        >
                                            <div className="frame-content-2_19307">
                                                <NavigationChevrondown1
                                                    id="2_19308"
                                                    className="instance-2_19308"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19304 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19309"
                                    className="instance-2_19309"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19310" className="symbol-2_19310">
                            <_Label_top
                                id="2_19311"
                                className="instance-2_19311"
                                size={"m"}
                                counter={false}
                                icon={true}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19312"
                                className="stroke-wrapper-2_19312"
                            >
                                <div className="frame-2_19312 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19312">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19313"
                                                className="instance-2_19313"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19314"
                                            className="instance-2_19314"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19315"
                                            className="frame-2_19315"
                                        >
                                            <div className="frame-content-2_19315">
                                                <NavigationChevrondown1
                                                    id="2_19316"
                                                    className="instance-2_19316"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19312 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19317"
                                    className="instance-2_19317"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19318" className="symbol-2_19318">
                            <_Label_top
                                id="2_19319"
                                className="instance-2_19319"
                                size={"m"}
                                counter={false}
                                icon={true}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19320"
                                className="stroke-wrapper-2_19320"
                            >
                                <div className="frame-2_19320 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19320">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19321"
                                                className="instance-2_19321"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19322"
                                            className="instance-2_19322"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19323"
                                            className="frame-2_19323"
                                        >
                                            <div className="frame-content-2_19323">
                                                <NavigationChevrondown1
                                                    id="2_19324"
                                                    className="instance-2_19324"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19320 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19325"
                                    className="instance-2_19325"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19326" className="symbol-2_19326">
                            <div
                                id="2_19327"
                                className="stroke-wrapper-2_19327"
                            >
                                <div className="frame-2_19327 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19327">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19328"
                                                className="instance-2_19328"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19329"
                                            className="instance-2_19329"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19330"
                                            className="frame-2_19330"
                                        >
                                            <div className="frame-content-2_19330">
                                                <NavigationChevrondown1
                                                    id="2_19331"
                                                    className="instance-2_19331"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19327 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19332"
                                    className="instance-2_19332"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19333" className="symbol-2_19333">
                            <div
                                id="2_19334"
                                className="stroke-wrapper-2_19334"
                            >
                                <div className="frame-2_19334 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19334">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19335"
                                                className="instance-2_19335"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19336"
                                            className="instance-2_19336"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19337"
                                            className="frame-2_19337"
                                        >
                                            <div className="frame-content-2_19337">
                                                <NavigationChevrondown1
                                                    id="2_19338"
                                                    className="instance-2_19338"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19334 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19339"
                                    className="instance-2_19339"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "valid" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19340" className="symbol-2_19340">
                            <_Label_top
                                id="2_19341"
                                className="instance-2_19341"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19342"
                                className="stroke-wrapper-2_19342"
                            >
                                <div className="frame-2_19342 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19342">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19343"
                                                className="instance-2_19343"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19344"
                                            className="instance-2_19344"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19345"
                                            className="frame-2_19345"
                                        >
                                            <div className="frame-content-2_19345">
                                                <NavigationChevrondown1
                                                    id="2_19346"
                                                    className="instance-2_19346"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19342 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19347"
                                    className="instance-2_19347"
                                    size={"m"}
                                    state={"success"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "valid" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19348" className="symbol-2_19348">
                            <_Label_top
                                id="2_19349"
                                className="instance-2_19349"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19350"
                                className="stroke-wrapper-2_19350"
                            >
                                <div className="frame-2_19350 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19350">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19351"
                                                className="instance-2_19351"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19352"
                                            className="instance-2_19352"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19353"
                                            className="frame-2_19353"
                                        >
                                            <div className="frame-content-2_19353">
                                                <NavigationChevrondown1
                                                    id="2_19354"
                                                    className="instance-2_19354"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19350 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19355"
                                    className="instance-2_19355"
                                    size={"m"}
                                    state={"success"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "valid" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19356" className="symbol-2_19356">
                            <div
                                id="2_19357"
                                className="stroke-wrapper-2_19357"
                            >
                                <div className="frame-2_19357 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19357">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19358"
                                                className="instance-2_19358"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19359"
                                            className="instance-2_19359"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19360"
                                            className="frame-2_19360"
                                        >
                                            <div className="frame-content-2_19360">
                                                <NavigationChevrondown1
                                                    id="2_19361"
                                                    className="instance-2_19361"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19357 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19362"
                                    className="instance-2_19362"
                                    size={"m"}
                                    state={"success"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "valid" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19363" className="symbol-2_19363">
                            <div
                                id="2_19364"
                                className="stroke-wrapper-2_19364"
                            >
                                <div className="frame-2_19364 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19364">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19365"
                                                className="instance-2_19365"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19366"
                                            className="instance-2_19366"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19367"
                                            className="frame-2_19367"
                                        >
                                            <div className="frame-content-2_19367">
                                                <NavigationChevrondown1
                                                    id="2_19368"
                                                    className="instance-2_19368"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19364 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19369"
                                    className="instance-2_19369"
                                    size={"m"}
                                    state={"success"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "error" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19370" className="symbol-2_19370">
                            <_Label_top
                                id="2_19371"
                                className="instance-2_19371"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19372"
                                className="stroke-wrapper-2_19372"
                            >
                                <div className="frame-2_19372 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_19372">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19373"
                                                className="instance-2_19373"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19374"
                                            className="instance-2_19374"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19375"
                                            className="frame-2_19375"
                                        >
                                            <div className="frame-content-2_19375">
                                                <NavigationChevrondown1
                                                    id="2_19376"
                                                    className="instance-2_19376"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19372 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19377"
                                    className="instance-2_19377"
                                    size={"m"}
                                    state={"error"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "error" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19378" className="symbol-2_19378">
                            <_Label_top
                                id="2_19379"
                                className="instance-2_19379"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19380"
                                className="stroke-wrapper-2_19380"
                            >
                                <div className="frame-2_19380 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_19380">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19381"
                                                className="instance-2_19381"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19382"
                                            className="instance-2_19382"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19383"
                                            className="frame-2_19383"
                                        >
                                            <div className="frame-content-2_19383">
                                                <NavigationChevrondown1
                                                    id="2_19384"
                                                    className="instance-2_19384"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19380 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19385"
                                    className="instance-2_19385"
                                    size={"m"}
                                    state={"error"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "error" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19386" className="symbol-2_19386">
                            <div
                                id="2_19387"
                                className="stroke-wrapper-2_19387"
                            >
                                <div className="frame-2_19387 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_19387">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19388"
                                                className="instance-2_19388"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19389"
                                            className="instance-2_19389"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19390"
                                            className="frame-2_19390"
                                        >
                                            <div className="frame-content-2_19390">
                                                <NavigationChevrondown1
                                                    id="2_19391"
                                                    className="instance-2_19391"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19387 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19392"
                                    className="instance-2_19392"
                                    size={"m"}
                                    state={"error"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "error" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19393" className="symbol-2_19393">
                            <div
                                id="2_19394"
                                className="stroke-wrapper-2_19394"
                            >
                                <div className="frame-2_19394 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_19394">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19395"
                                                className="instance-2_19395"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19396"
                                            className="instance-2_19396"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19397"
                                            className="frame-2_19397"
                                        >
                                            <div className="frame-content-2_19397">
                                                <NavigationChevrondown1
                                                    id="2_19398"
                                                    className="instance-2_19398"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19394 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19399"
                                    className="instance-2_19399"
                                    size={"m"}
                                    state={"error"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "active" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19400" className="symbol-2_19400">
                            <_Label_top
                                id="2_19401"
                                className="instance-2_19401"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19402"
                                className="stroke-wrapper-2_19402"
                            >
                                <div className="frame-2_19402 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19402">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19403"
                                                className="instance-2_19403"
                                                size={"m"}
                                                active={"true"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19404"
                                            className="instance-2_19404"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_19405"
                                            className="frame-2_19405"
                                        >
                                            <div className="frame-content-2_19405">
                                                <NavigationChevrondown1
                                                    id="2_19406"
                                                    className="instance-2_19406"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19402 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19407"
                                    className="instance-2_19407"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "active" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19408" className="symbol-2_19408">
                            <_Label_top
                                id="2_19409"
                                className="instance-2_19409"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19410"
                                className="stroke-wrapper-2_19410"
                            >
                                <div className="frame-2_19410 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19410">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19411"
                                                className="instance-2_19411"
                                                size={"m"}
                                                active={"true"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19412"
                                            className="instance-2_19412"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_19413"
                                            className="frame-2_19413"
                                        >
                                            <div className="frame-content-2_19413">
                                                <NavigationChevrondown1
                                                    id="2_19414"
                                                    className="instance-2_19414"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19410 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19415"
                                    className="instance-2_19415"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "active" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19416" className="symbol-2_19416">
                            <div
                                id="2_19417"
                                className="stroke-wrapper-2_19417"
                            >
                                <div className="frame-2_19417 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19417">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19418"
                                                className="instance-2_19418"
                                                size={"m"}
                                                active={"true"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19419"
                                            className="instance-2_19419"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_19420"
                                            className="frame-2_19420"
                                        >
                                            <div className="frame-content-2_19420">
                                                <NavigationChevrondown1
                                                    id="2_19421"
                                                    className="instance-2_19421"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19417 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19422"
                                    className="instance-2_19422"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "active" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19423" className="symbol-2_19423">
                            <div
                                id="2_19424"
                                className="stroke-wrapper-2_19424"
                            >
                                <div className="frame-2_19424 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19424">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19425"
                                                className="instance-2_19425"
                                                size={"m"}
                                                active={"true"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19426"
                                            className="instance-2_19426"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_19427"
                                            className="frame-2_19427"
                                        >
                                            <div className="frame-content-2_19427">
                                                <NavigationChevrondown1
                                                    id="2_19428"
                                                    className="instance-2_19428"
                                                ></NavigationChevrondown1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19424 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19429"
                                    className="instance-2_19429"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19430" className="symbol-2_19430">
                            <DropdownMenu
                                id="2_19431"
                                className="instance-2_19431"
                                size={"m"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19432"
                                className="instance-2_19432"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19433"
                                className="stroke-wrapper-2_19433"
                            >
                                <div className="frame-2_19433 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19433">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19434"
                                                className="instance-2_19434"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19435"
                                            className="instance-2_19435"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19436"
                                            className="frame-2_19436"
                                        >
                                            <div className="frame-content-2_19436">
                                                <NavigationChevronUp1
                                                    id="2_19437"
                                                    className="instance-2_19437"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19433 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19438" className="symbol-2_19438">
                            <DropdownMenu
                                id="2_19439"
                                className="instance-2_19439"
                                size={"m"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19440"
                                className="instance-2_19440"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19441"
                                className="stroke-wrapper-2_19441"
                            >
                                <div className="frame-2_19441 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19441">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19442"
                                                className="instance-2_19442"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19443"
                                            className="instance-2_19443"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19444"
                                            className="frame-2_19444"
                                        >
                                            <div className="frame-content-2_19444">
                                                <NavigationChevronUp1
                                                    id="2_19445"
                                                    className="instance-2_19445"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19441 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19446" className="symbol-2_19446">
                            <DropdownMenu
                                id="2_19447"
                                className="instance-2_19447"
                                size={"m"}
                            ></DropdownMenu>
                            <div
                                id="2_19448"
                                className="stroke-wrapper-2_19448"
                            >
                                <div className="frame-2_19448 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19448">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19449"
                                                className="instance-2_19449"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19450"
                                            className="instance-2_19450"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19451"
                                            className="frame-2_19451"
                                        >
                                            <div className="frame-content-2_19451">
                                                <NavigationChevronUp1
                                                    id="2_19452"
                                                    className="instance-2_19452"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19448 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19453" className="symbol-2_19453">
                            <DropdownMenu
                                id="2_19454"
                                className="instance-2_19454"
                                size={"m"}
                            ></DropdownMenu>
                            <div
                                id="2_19455"
                                className="stroke-wrapper-2_19455"
                            >
                                <div className="frame-2_19455 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19455">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19456"
                                                className="instance-2_19456"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19457"
                                            className="instance-2_19457"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19458"
                                            className="frame-2_19458"
                                        >
                                            <div className="frame-content-2_19458">
                                                <NavigationChevronUp1
                                                    id="2_19459"
                                                    className="instance-2_19459"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19455 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19460" className="symbol-2_19460">
                            <DropdownMenu
                                id="2_19461"
                                className="instance-2_19461"
                                size={"m"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19462"
                                className="instance-2_19462"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19463"
                                className="stroke-wrapper-2_19463"
                            >
                                <div className="frame-2_19463 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19463">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19464"
                                                className="instance-2_19464"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19465"
                                            className="instance-2_19465"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19466"
                                            className="frame-2_19466"
                                        >
                                            <div className="frame-content-2_19466">
                                                <NavigationChevronUp1
                                                    id="2_19467"
                                                    className="instance-2_19467"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19463 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19468" className="symbol-2_19468">
                            <DropdownMenu
                                id="2_19469"
                                className="instance-2_19469"
                                size={"m"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19470"
                                className="instance-2_19470"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19471"
                                className="stroke-wrapper-2_19471"
                            >
                                <div className="frame-2_19471 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19471">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19472"
                                                className="instance-2_19472"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19473"
                                            className="instance-2_19473"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19474"
                                            className="frame-2_19474"
                                        >
                                            <div className="frame-content-2_19474">
                                                <NavigationChevronUp1
                                                    id="2_19475"
                                                    className="instance-2_19475"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19471 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19476" className="symbol-2_19476">
                            <DropdownMenu
                                id="2_19477"
                                className="instance-2_19477"
                                size={"m"}
                            ></DropdownMenu>
                            <div
                                id="2_19478"
                                className="stroke-wrapper-2_19478"
                            >
                                <div className="frame-2_19478 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19478">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19479"
                                                className="instance-2_19479"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19480"
                                            className="instance-2_19480"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19481"
                                            className="frame-2_19481"
                                        >
                                            <div className="frame-content-2_19481">
                                                <NavigationChevronUp1
                                                    id="2_19482"
                                                    className="instance-2_19482"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19478 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19483" className="symbol-2_19483">
                            <DropdownMenu
                                id="2_19484"
                                className="instance-2_19484"
                                size={"m"}
                            ></DropdownMenu>
                            <div
                                id="2_19485"
                                className="stroke-wrapper-2_19485"
                            >
                                <div className="frame-2_19485 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19485">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19486"
                                                className="instance-2_19486"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19487"
                                            className="instance-2_19487"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19488"
                                            className="frame-2_19488"
                                        >
                                            <div className="frame-content-2_19488">
                                                <NavigationChevronUp1
                                                    id="2_19489"
                                                    className="instance-2_19489"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19485 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "error" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19490" className="symbol-2_19490">
                            <DropdownMenu
                                id="2_19491"
                                className="instance-2_19491"
                                size={"m"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19492"
                                className="instance-2_19492"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19493"
                                className="stroke-wrapper-2_19493"
                            >
                                <div className="frame-2_19493 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_19493">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19494"
                                                className="instance-2_19494"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19495"
                                            className="instance-2_19495"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19496"
                                            className="frame-2_19496"
                                        >
                                            <div className="frame-content-2_19496">
                                                <NavigationChevronUp1
                                                    id="2_19497"
                                                    className="instance-2_19497"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19493 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "error" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19498" className="symbol-2_19498">
                            <DropdownMenu
                                id="2_19499"
                                className="instance-2_19499"
                                size={"m"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19500"
                                className="instance-2_19500"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19501"
                                className="stroke-wrapper-2_19501"
                            >
                                <div className="frame-2_19501 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_19501">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19502"
                                                className="instance-2_19502"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19503"
                                            className="instance-2_19503"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19504"
                                            className="frame-2_19504"
                                        >
                                            <div className="frame-content-2_19504">
                                                <NavigationChevronUp1
                                                    id="2_19505"
                                                    className="instance-2_19505"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19501 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "error" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19506" className="symbol-2_19506">
                            <DropdownMenu
                                id="2_19507"
                                className="instance-2_19507"
                                size={"m"}
                            ></DropdownMenu>
                            <div
                                id="2_19508"
                                className="stroke-wrapper-2_19508"
                            >
                                <div className="frame-2_19508 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_19508">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19509"
                                                className="instance-2_19509"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19510"
                                            className="instance-2_19510"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19511"
                                            className="frame-2_19511"
                                        >
                                            <div className="frame-content-2_19511">
                                                <NavigationChevronUp1
                                                    id="2_19512"
                                                    className="instance-2_19512"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19508 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "error" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19513" className="symbol-2_19513">
                            <DropdownMenu
                                id="2_19514"
                                className="instance-2_19514"
                                size={"m"}
                            ></DropdownMenu>
                            <div
                                id="2_19515"
                                className="stroke-wrapper-2_19515"
                            >
                                <div className="frame-2_19515 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_19515">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19516"
                                                className="instance-2_19516"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19517"
                                            className="instance-2_19517"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19518"
                                            className="frame-2_19518"
                                        >
                                            <div className="frame-content-2_19518">
                                                <NavigationChevronUp1
                                                    id="2_19519"
                                                    className="instance-2_19519"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19515 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "error" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19520" className="symbol-2_19520">
                            <DropdownMenu
                                id="2_19521"
                                className="instance-2_19521"
                                size={"m"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19522"
                                className="instance-2_19522"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19523"
                                className="stroke-wrapper-2_19523"
                            >
                                <div className="frame-2_19523 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_19523">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19524"
                                                className="instance-2_19524"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19525"
                                            className="instance-2_19525"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19526"
                                            className="frame-2_19526"
                                        >
                                            <div className="frame-content-2_19526">
                                                <NavigationChevronUp1
                                                    id="2_19527"
                                                    className="instance-2_19527"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19523 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "error" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19528" className="symbol-2_19528">
                            <DropdownMenu
                                id="2_19529"
                                className="instance-2_19529"
                                size={"m"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19530"
                                className="instance-2_19530"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19531"
                                className="stroke-wrapper-2_19531"
                            >
                                <div className="frame-2_19531 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_19531">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19532"
                                                className="instance-2_19532"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19533"
                                            className="instance-2_19533"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19534"
                                            className="frame-2_19534"
                                        >
                                            <div className="frame-content-2_19534">
                                                <NavigationChevronUp1
                                                    id="2_19535"
                                                    className="instance-2_19535"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19531 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "error" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19536" className="symbol-2_19536">
                            <DropdownMenu
                                id="2_19537"
                                className="instance-2_19537"
                                size={"m"}
                            ></DropdownMenu>
                            <div
                                id="2_19538"
                                className="stroke-wrapper-2_19538"
                            >
                                <div className="frame-2_19538 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_19538">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19539"
                                                className="instance-2_19539"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19540"
                                            className="instance-2_19540"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19541"
                                            className="frame-2_19541"
                                        >
                                            <div className="frame-content-2_19541">
                                                <NavigationChevronUp1
                                                    id="2_19542"
                                                    className="instance-2_19542"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19538 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "error" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19543" className="symbol-2_19543">
                            <DropdownMenu
                                id="2_19544"
                                className="instance-2_19544"
                                size={"m"}
                            ></DropdownMenu>
                            <div
                                id="2_19545"
                                className="stroke-wrapper-2_19545"
                            >
                                <div className="frame-2_19545 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_19545">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19546"
                                                className="instance-2_19546"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19547"
                                            className="instance-2_19547"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19548"
                                            className="frame-2_19548"
                                        >
                                            <div className="frame-content-2_19548">
                                                <NavigationChevronUp1
                                                    id="2_19549"
                                                    className="instance-2_19549"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19545 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "valid" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19550" className="symbol-2_19550">
                            <DropdownMenu
                                id="2_19551"
                                className="instance-2_19551"
                                size={"m"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19552"
                                className="instance-2_19552"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19553"
                                className="stroke-wrapper-2_19553"
                            >
                                <div className="frame-2_19553 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19553">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19554"
                                                className="instance-2_19554"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19555"
                                            className="instance-2_19555"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19556"
                                            className="frame-2_19556"
                                        >
                                            <div className="frame-content-2_19556">
                                                <NavigationChevronUp1
                                                    id="2_19557"
                                                    className="instance-2_19557"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19553 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "valid" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19558" className="symbol-2_19558">
                            <DropdownMenu
                                id="2_19559"
                                className="instance-2_19559"
                                size={"m"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19560"
                                className="instance-2_19560"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19561"
                                className="stroke-wrapper-2_19561"
                            >
                                <div className="frame-2_19561 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19561">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19562"
                                                className="instance-2_19562"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19563"
                                            className="instance-2_19563"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19564"
                                            className="frame-2_19564"
                                        >
                                            <div className="frame-content-2_19564">
                                                <NavigationChevronUp1
                                                    id="2_19565"
                                                    className="instance-2_19565"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19561 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "valid" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19566" className="symbol-2_19566">
                            <DropdownMenu
                                id="2_19567"
                                className="instance-2_19567"
                                size={"m"}
                            ></DropdownMenu>
                            <div
                                id="2_19568"
                                className="stroke-wrapper-2_19568"
                            >
                                <div className="frame-2_19568 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19568">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19569"
                                                className="instance-2_19569"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19570"
                                            className="instance-2_19570"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19571"
                                            className="frame-2_19571"
                                        >
                                            <div className="frame-content-2_19571">
                                                <NavigationChevronUp1
                                                    id="2_19572"
                                                    className="instance-2_19572"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19568 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "valid" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19573" className="symbol-2_19573">
                            <DropdownMenu
                                id="2_19574"
                                className="instance-2_19574"
                                size={"m"}
                            ></DropdownMenu>
                            <div
                                id="2_19575"
                                className="stroke-wrapper-2_19575"
                            >
                                <div className="frame-2_19575 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19575">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19576"
                                                className="instance-2_19576"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19577"
                                            className="instance-2_19577"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19578"
                                            className="frame-2_19578"
                                        >
                                            <div className="frame-content-2_19578">
                                                <NavigationChevronUp1
                                                    id="2_19579"
                                                    className="instance-2_19579"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19575 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "valid" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19580" className="symbol-2_19580">
                            <DropdownMenu
                                id="2_19581"
                                className="instance-2_19581"
                                size={"m"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19582"
                                className="instance-2_19582"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19583"
                                className="stroke-wrapper-2_19583"
                            >
                                <div className="frame-2_19583 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19583">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19584"
                                                className="instance-2_19584"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19585"
                                            className="instance-2_19585"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19586"
                                            className="frame-2_19586"
                                        >
                                            <div className="frame-content-2_19586">
                                                <NavigationChevronUp1
                                                    id="2_19587"
                                                    className="instance-2_19587"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19583 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "valid" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19588" className="symbol-2_19588">
                            <DropdownMenu
                                id="2_19589"
                                className="instance-2_19589"
                                size={"m"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19590"
                                className="instance-2_19590"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19591"
                                className="stroke-wrapper-2_19591"
                            >
                                <div className="frame-2_19591 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19591">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19592"
                                                className="instance-2_19592"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19593"
                                            className="instance-2_19593"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19594"
                                            className="frame-2_19594"
                                        >
                                            <div className="frame-content-2_19594">
                                                <NavigationChevronUp1
                                                    id="2_19595"
                                                    className="instance-2_19595"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19591 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "valid" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19596" className="symbol-2_19596">
                            <DropdownMenu
                                id="2_19597"
                                className="instance-2_19597"
                                size={"m"}
                            ></DropdownMenu>
                            <div
                                id="2_19598"
                                className="stroke-wrapper-2_19598"
                            >
                                <div className="frame-2_19598 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19598">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19599"
                                                className="instance-2_19599"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19600"
                                            className="instance-2_19600"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19601"
                                            className="frame-2_19601"
                                        >
                                            <div className="frame-content-2_19601">
                                                <NavigationChevronUp1
                                                    id="2_19602"
                                                    className="instance-2_19602"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19598 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "valid" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19603" className="symbol-2_19603">
                            <DropdownMenu
                                id="2_19604"
                                className="instance-2_19604"
                                size={"m"}
                            ></DropdownMenu>
                            <div
                                id="2_19605"
                                className="stroke-wrapper-2_19605"
                            >
                                <div className="frame-2_19605 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19605">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19606"
                                                className="instance-2_19606"
                                                size={"m"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19607"
                                            className="instance-2_19607"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19608"
                                            className="frame-2_19608"
                                        >
                                            <div className="frame-content-2_19608">
                                                <NavigationChevronUp1
                                                    id="2_19609"
                                                    className="instance-2_19609"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19605 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "active" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19610" className="symbol-2_19610">
                            <DropdownMenu
                                id="2_19611"
                                className="instance-2_19611"
                                size={"m"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19612"
                                className="instance-2_19612"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19613"
                                className="stroke-wrapper-2_19613"
                            >
                                <div className="frame-2_19613 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19613">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19614"
                                                className="instance-2_19614"
                                                size={"m"}
                                                active={"true"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19615"
                                            className="instance-2_19615"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_19616"
                                            className="frame-2_19616"
                                        >
                                            <div className="frame-content-2_19616">
                                                <NavigationChevronUp1
                                                    id="2_19617"
                                                    className="instance-2_19617"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19613 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "active" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19618" className="symbol-2_19618">
                            <DropdownMenu
                                id="2_19619"
                                className="instance-2_19619"
                                size={"m"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19620"
                                className="instance-2_19620"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19621"
                                className="stroke-wrapper-2_19621"
                            >
                                <div className="frame-2_19621 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19621">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19622"
                                                className="instance-2_19622"
                                                size={"m"}
                                                active={"true"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19623"
                                            className="instance-2_19623"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_19624"
                                            className="frame-2_19624"
                                        >
                                            <div className="frame-content-2_19624">
                                                <NavigationChevronUp1
                                                    id="2_19625"
                                                    className="instance-2_19625"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19621 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "active" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19626" className="symbol-2_19626">
                            <DropdownMenu
                                id="2_19627"
                                className="instance-2_19627"
                                size={"m"}
                            ></DropdownMenu>
                            <div
                                id="2_19628"
                                className="stroke-wrapper-2_19628"
                            >
                                <div className="frame-2_19628 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19628">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19629"
                                                className="instance-2_19629"
                                                size={"m"}
                                                active={"true"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19630"
                                            className="instance-2_19630"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_19631"
                                            className="frame-2_19631"
                                        >
                                            <div className="frame-content-2_19631">
                                                <NavigationChevronUp1
                                                    id="2_19632"
                                                    className="instance-2_19632"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19628 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "active" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19633" className="symbol-2_19633">
                            <DropdownMenu
                                id="2_19634"
                                className="instance-2_19634"
                                size={"m"}
                            ></DropdownMenu>
                            <div
                                id="2_19635"
                                className="stroke-wrapper-2_19635"
                            >
                                <div className="frame-2_19635 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19635">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19636"
                                                className="instance-2_19636"
                                                size={"m"}
                                                active={"true"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19637"
                                            className="instance-2_19637"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_19638"
                                            className="frame-2_19638"
                                        >
                                            <div className="frame-content-2_19638">
                                                <NavigationChevronUp1
                                                    id="2_19639"
                                                    className="instance-2_19639"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19635 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "active" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19640" className="symbol-2_19640">
                            <DropdownMenu
                                id="2_19641"
                                className="instance-2_19641"
                                size={"m"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19642"
                                className="instance-2_19642"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19643"
                                className="stroke-wrapper-2_19643"
                            >
                                <div className="frame-2_19643 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19643">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19644"
                                                className="instance-2_19644"
                                                size={"m"}
                                                active={"true"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19645"
                                            className="instance-2_19645"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_19646"
                                            className="frame-2_19646"
                                        >
                                            <div className="frame-content-2_19646">
                                                <NavigationChevronUp1
                                                    id="2_19647"
                                                    className="instance-2_19647"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19643 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "active" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19648" className="symbol-2_19648">
                            <DropdownMenu
                                id="2_19649"
                                className="instance-2_19649"
                                size={"m"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19650"
                                className="instance-2_19650"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19651"
                                className="stroke-wrapper-2_19651"
                            >
                                <div className="frame-2_19651 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19651">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19652"
                                                className="instance-2_19652"
                                                size={"m"}
                                                active={"true"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19653"
                                            className="instance-2_19653"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_19654"
                                            className="frame-2_19654"
                                        >
                                            <div className="frame-content-2_19654">
                                                <NavigationChevronUp1
                                                    id="2_19655"
                                                    className="instance-2_19655"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19651 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "active" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19656" className="symbol-2_19656">
                            <DropdownMenu
                                id="2_19657"
                                className="instance-2_19657"
                                size={"m"}
                            ></DropdownMenu>
                            <div
                                id="2_19658"
                                className="stroke-wrapper-2_19658"
                            >
                                <div className="frame-2_19658 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19658">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19659"
                                                className="instance-2_19659"
                                                size={"m"}
                                                active={"true"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19660"
                                            className="instance-2_19660"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_19661"
                                            className="frame-2_19661"
                                        >
                                            <div className="frame-content-2_19661">
                                                <NavigationChevronUp1
                                                    id="2_19662"
                                                    className="instance-2_19662"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19658 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                        </div>
                    )}
                {size === "m" &&
                    state === "active" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19663" className="symbol-2_19663">
                            <DropdownMenu
                                id="2_19664"
                                className="instance-2_19664"
                                size={"m"}
                            ></DropdownMenu>
                            <div
                                id="2_19665"
                                className="stroke-wrapper-2_19665"
                            >
                                <div className="frame-2_19665 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19665">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19666"
                                                className="instance-2_19666"
                                                size={"m"}
                                                active={"true"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19667"
                                            className="instance-2_19667"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_19668"
                                            className="frame-2_19668"
                                        >
                                            <div className="frame-content-2_19668">
                                                <NavigationChevronUp1
                                                    id="2_19669"
                                                    className="instance-2_19669"
                                                ></NavigationChevronUp1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19665 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19670" className="symbol-2_19670">
                            <_Label_top
                                id="2_19671"
                                className="instance-2_19671"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19672"
                                className="stroke-wrapper-2_19672"
                            >
                                <div className="frame-2_19672 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19672">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19673"
                                                className="instance-2_19673"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19674"
                                            className="instance-2_19674"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19675"
                                            className="frame-2_19675"
                                        >
                                            <div className="frame-content-2_19675">
                                                <NavigationChevrondown0
                                                    id="2_19676"
                                                    className="instance-2_19676"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19672 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19677"
                                    className="instance-2_19677"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19678" className="symbol-2_19678">
                            <div
                                id="2_19679"
                                className="stroke-wrapper-2_19679"
                            >
                                <div className="frame-2_19679 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19679">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19680"
                                                className="instance-2_19680"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <div
                                            id="2_19681"
                                            className="frame-2_19681"
                                        >
                                            <div className="frame-content-2_19681">
                                                <_Label_top
                                                    id="2_19682"
                                                    className="instance-2_19682"
                                                    size={"l"}
                                                    counter={false}
                                                    icon={false}
                                                    required={false}
                                                ></_Label_top>
                                                <_Body_select
                                                    id="2_19683"
                                                    className="instance-2_19683"
                                                    size={"xl"}
                                                    filled={"true"}
                                                    cursor={"false"}
                                                ></_Body_select>
                                            </div>
                                        </div>
                                        <div
                                            id="2_19684"
                                            className="frame-2_19684"
                                        >
                                            <div className="frame-content-2_19684">
                                                <NavigationChevrondown0
                                                    id="2_19685"
                                                    className="instance-2_19685"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19679 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19686"
                                    className="instance-2_19686"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19687" className="symbol-2_19687">
                            <div
                                id="2_19688"
                                className="stroke-wrapper-2_19688"
                            >
                                <div className="frame-2_19688 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19688">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19689"
                                                className="instance-2_19689"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19690"
                                            className="instance-2_19690"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19691"
                                            className="frame-2_19691"
                                        >
                                            <div className="frame-content-2_19691">
                                                <NavigationChevrondown0
                                                    id="2_19692"
                                                    className="instance-2_19692"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19688 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19693"
                                    className="instance-2_19693"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19694" className="symbol-2_19694">
                            <div
                                id="2_19695"
                                className="stroke-wrapper-2_19695"
                            >
                                <div className="frame-2_19695 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19695">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19696"
                                                className="instance-2_19696"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19697"
                                            className="instance-2_19697"
                                            size={"xl"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19698"
                                            className="frame-2_19698"
                                        >
                                            <div className="frame-content-2_19698">
                                                <NavigationChevrondown0
                                                    id="2_19699"
                                                    className="instance-2_19699"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19695 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19700"
                                    className="instance-2_19700"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19701" className="symbol-2_19701">
                            <div
                                id="2_19702"
                                className="stroke-wrapper-2_19702"
                            >
                                <div className="frame-2_19702 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19702">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19703"
                                                className="instance-2_19703"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19704"
                                            className="instance-2_19704"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19705"
                                            className="frame-2_19705"
                                        >
                                            <div className="frame-content-2_19705">
                                                <NavigationChevrondown0
                                                    id="2_19706"
                                                    className="instance-2_19706"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19702 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19707"
                                    className="instance-2_19707"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19708" className="symbol-2_19708">
                            <div
                                id="2_19709"
                                className="stroke-wrapper-2_19709"
                            >
                                <div className="frame-2_19709 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19709">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19710"
                                                className="instance-2_19710"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19711"
                                            className="instance-2_19711"
                                            size={"xl"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19712"
                                            className="frame-2_19712"
                                        >
                                            <div className="frame-content-2_19712">
                                                <NavigationChevrondown0
                                                    id="2_19713"
                                                    className="instance-2_19713"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19709 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19714"
                                    className="instance-2_19714"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19715" className="symbol-2_19715">
                            <DropdownMenu
                                id="2_19716"
                                className="instance-2_19716"
                                size={"l"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19717"
                                className="instance-2_19717"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19718"
                                className="stroke-wrapper-2_19718"
                            >
                                <div className="frame-2_19718 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19718">
                                        <_Left_icon
                                            id="2_19719"
                                            className="instance-2_19719"
                                            size={"l"}
                                            active={"false"}
                                        ></_Left_icon>
                                        <_Body_select
                                            id="2_19720"
                                            className="instance-2_19720"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19721"
                                            className="frame-2_19721"
                                        >
                                            <div className="frame-content-2_19721">
                                                <NavigationChevronUp
                                                    id="2_19722"
                                                    className="instance-2_19722"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19718 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19723" className="symbol-2_19723">
                            <DropdownMenu
                                id="2_19724"
                                className="instance-2_19724"
                                instance_2_19082={
                                    "sizelleftnonecheckedfalsedisabledfalse"
                                }
                                size={"l"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19725"
                                className="instance-2_19725"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19726"
                                className="stroke-wrapper-2_19726"
                            >
                                <div className="frame-2_19726 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19726">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19727"
                                                className="instance-2_19727"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19728"
                                            className="instance-2_19728"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19729"
                                            className="frame-2_19729"
                                        >
                                            <div className="frame-content-2_19729">
                                                <NavigationChevronUp
                                                    id="2_19730"
                                                    className="instance-2_19730"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19726 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19731" className="symbol-2_19731">
                            <DropdownMenu
                                id="2_19732"
                                className="instance-2_19732"
                                size={"l"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19733"
                                className="instance-2_19733"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19734"
                                className="stroke-wrapper-2_19734"
                            >
                                <div className="frame-2_19734 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19734">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19735"
                                                className="instance-2_19735"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19736"
                                            className="instance-2_19736"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19737"
                                            className="frame-2_19737"
                                        >
                                            <div className="frame-content-2_19737">
                                                <NavigationChevronUp
                                                    id="2_19738"
                                                    className="instance-2_19738"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19734 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19739" className="symbol-2_19739">
                            <DropdownMenu
                                id="2_19740"
                                className="instance-2_19740"
                                size={"l"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19741"
                                className="instance-2_19741"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19742"
                                className="stroke-wrapper-2_19742"
                            >
                                <div className="frame-2_19742 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19742">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19743"
                                                className="instance-2_19743"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19744"
                                            className="instance-2_19744"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19745"
                                            className="frame-2_19745"
                                        >
                                            <div className="frame-content-2_19745">
                                                <NavigationChevronUp
                                                    id="2_19746"
                                                    className="instance-2_19746"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19742 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19747" className="symbol-2_19747">
                            <DropdownMenu
                                id="2_19748"
                                className="instance-2_19748"
                                size={"l"}
                            ></DropdownMenu>
                            <div
                                id="2_19749"
                                className="stroke-wrapper-2_19749"
                            >
                                <div className="frame-2_19749 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19749">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19750"
                                                className="instance-2_19750"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19751"
                                            className="instance-2_19751"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19752"
                                            className="frame-2_19752"
                                        >
                                            <div className="frame-content-2_19752">
                                                <NavigationChevronUp
                                                    id="2_19753"
                                                    className="instance-2_19753"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19749 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19754" className="symbol-2_19754">
                            <DropdownMenu
                                id="2_19755"
                                className="instance-2_19755"
                                size={"l"}
                            ></DropdownMenu>
                            <div
                                id="2_19756"
                                className="stroke-wrapper-2_19756"
                            >
                                <div className="frame-2_19756 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19756">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19757"
                                                className="instance-2_19757"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19758"
                                            className="instance-2_19758"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19759"
                                            className="frame-2_19759"
                                        >
                                            <div className="frame-content-2_19759">
                                                <NavigationChevronUp
                                                    id="2_19760"
                                                    className="instance-2_19760"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19756 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19761" className="symbol-2_19761">
                            <DropdownMenu
                                id="2_19762"
                                className="instance-2_19762"
                                size={"l"}
                            ></DropdownMenu>
                            <div
                                id="2_19763"
                                className="stroke-wrapper-2_19763"
                            >
                                <div className="frame-2_19763 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19763">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19764"
                                                className="instance-2_19764"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19765"
                                            className="instance-2_19765"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19766"
                                            className="frame-2_19766"
                                        >
                                            <div className="frame-content-2_19766">
                                                <NavigationChevronUp
                                                    id="2_19767"
                                                    className="instance-2_19767"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19763 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19768" className="symbol-2_19768">
                            <DropdownMenu
                                id="2_19769"
                                className="instance-2_19769"
                                size={"l"}
                            ></DropdownMenu>
                            <div
                                id="2_19770"
                                className="stroke-wrapper-2_19770"
                            >
                                <div className="frame-2_19770 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19770">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19771"
                                                className="instance-2_19771"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19772"
                                            className="instance-2_19772"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19773"
                                            className="frame-2_19773"
                                        >
                                            <div className="frame-content-2_19773">
                                                <NavigationChevronUp
                                                    id="2_19774"
                                                    className="instance-2_19774"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19770 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "error" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19775" className="symbol-2_19775">
                            <DropdownMenu
                                id="2_19776"
                                className="instance-2_19776"
                                size={"l"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19777"
                                className="instance-2_19777"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19778"
                                className="stroke-wrapper-2_19778"
                            >
                                <div className="frame-2_19778 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_19778">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19779"
                                                className="instance-2_19779"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19780"
                                            className="instance-2_19780"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19781"
                                            className="frame-2_19781"
                                        >
                                            <div className="frame-content-2_19781">
                                                <NavigationChevronUp
                                                    id="2_19782"
                                                    className="instance-2_19782"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19778 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "error" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19783" className="symbol-2_19783">
                            <DropdownMenu
                                id="2_19784"
                                className="instance-2_19784"
                                size={"l"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19785"
                                className="instance-2_19785"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19786"
                                className="stroke-wrapper-2_19786"
                            >
                                <div className="frame-2_19786 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_19786">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19787"
                                                className="instance-2_19787"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19788"
                                            className="instance-2_19788"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19789"
                                            className="frame-2_19789"
                                        >
                                            <div className="frame-content-2_19789">
                                                <NavigationChevronUp
                                                    id="2_19790"
                                                    className="instance-2_19790"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19786 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "error" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19791" className="symbol-2_19791">
                            <DropdownMenu
                                id="2_19792"
                                className="instance-2_19792"
                                size={"l"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19793"
                                className="instance-2_19793"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19794"
                                className="stroke-wrapper-2_19794"
                            >
                                <div className="frame-2_19794 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_19794">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19795"
                                                className="instance-2_19795"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19796"
                                            className="instance-2_19796"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19797"
                                            className="frame-2_19797"
                                        >
                                            <div className="frame-content-2_19797">
                                                <NavigationChevronUp
                                                    id="2_19798"
                                                    className="instance-2_19798"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19794 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "error" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19799" className="symbol-2_19799">
                            <DropdownMenu
                                id="2_19800"
                                className="instance-2_19800"
                                size={"l"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19801"
                                className="instance-2_19801"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19802"
                                className="stroke-wrapper-2_19802"
                            >
                                <div className="frame-2_19802 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_19802">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19803"
                                                className="instance-2_19803"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19804"
                                            className="instance-2_19804"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19805"
                                            className="frame-2_19805"
                                        >
                                            <div className="frame-content-2_19805">
                                                <NavigationChevronUp
                                                    id="2_19806"
                                                    className="instance-2_19806"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19802 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "error" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19807" className="symbol-2_19807">
                            <DropdownMenu
                                id="2_19808"
                                className="instance-2_19808"
                                size={"l"}
                            ></DropdownMenu>
                            <div
                                id="2_19809"
                                className="stroke-wrapper-2_19809"
                            >
                                <div className="frame-2_19809 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_19809">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19810"
                                                className="instance-2_19810"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19811"
                                            className="instance-2_19811"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19812"
                                            className="frame-2_19812"
                                        >
                                            <div className="frame-content-2_19812">
                                                <NavigationChevronUp
                                                    id="2_19813"
                                                    className="instance-2_19813"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19809 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "error" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19814" className="symbol-2_19814">
                            <DropdownMenu
                                id="2_19815"
                                className="instance-2_19815"
                                size={"l"}
                            ></DropdownMenu>
                            <div
                                id="2_19816"
                                className="stroke-wrapper-2_19816"
                            >
                                <div className="frame-2_19816 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_19816">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19817"
                                                className="instance-2_19817"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19818"
                                            className="instance-2_19818"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19819"
                                            className="frame-2_19819"
                                        >
                                            <div className="frame-content-2_19819">
                                                <NavigationChevronUp
                                                    id="2_19820"
                                                    className="instance-2_19820"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19816 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "error" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19821" className="symbol-2_19821">
                            <DropdownMenu
                                id="2_19822"
                                className="instance-2_19822"
                                size={"l"}
                            ></DropdownMenu>
                            <div
                                id="2_19823"
                                className="stroke-wrapper-2_19823"
                            >
                                <div className="frame-2_19823 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_19823">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19824"
                                                className="instance-2_19824"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19825"
                                            className="instance-2_19825"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19826"
                                            className="frame-2_19826"
                                        >
                                            <div className="frame-content-2_19826">
                                                <NavigationChevronUp
                                                    id="2_19827"
                                                    className="instance-2_19827"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19823 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "error" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19828" className="symbol-2_19828">
                            <DropdownMenu
                                id="2_19829"
                                className="instance-2_19829"
                                size={"l"}
                            ></DropdownMenu>
                            <div
                                id="2_19830"
                                className="stroke-wrapper-2_19830"
                            >
                                <div className="frame-2_19830 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_19830">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19831"
                                                className="instance-2_19831"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19832"
                                            className="instance-2_19832"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19833"
                                            className="frame-2_19833"
                                        >
                                            <div className="frame-content-2_19833">
                                                <NavigationChevronUp
                                                    id="2_19834"
                                                    className="instance-2_19834"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19830 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "valid" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19835" className="symbol-2_19835">
                            <DropdownMenu
                                id="2_19836"
                                className="instance-2_19836"
                                size={"l"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19837"
                                className="instance-2_19837"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19838"
                                className="stroke-wrapper-2_19838"
                            >
                                <div className="frame-2_19838 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19838">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19839"
                                                className="instance-2_19839"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19840"
                                            className="instance-2_19840"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19841"
                                            className="frame-2_19841"
                                        >
                                            <div className="frame-content-2_19841">
                                                <NavigationChevronUp
                                                    id="2_19842"
                                                    className="instance-2_19842"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19838 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "valid" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19843" className="symbol-2_19843">
                            <DropdownMenu
                                id="2_19844"
                                className="instance-2_19844"
                                size={"l"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19845"
                                className="instance-2_19845"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19846"
                                className="stroke-wrapper-2_19846"
                            >
                                <div className="frame-2_19846 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19846">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19847"
                                                className="instance-2_19847"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19848"
                                            className="instance-2_19848"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19849"
                                            className="frame-2_19849"
                                        >
                                            <div className="frame-content-2_19849">
                                                <NavigationChevronUp
                                                    id="2_19850"
                                                    className="instance-2_19850"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19846 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "valid" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19851" className="symbol-2_19851">
                            <DropdownMenu
                                id="2_19852"
                                className="instance-2_19852"
                                size={"l"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19853"
                                className="instance-2_19853"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19854"
                                className="stroke-wrapper-2_19854"
                            >
                                <div className="frame-2_19854 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19854">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19855"
                                                className="instance-2_19855"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19856"
                                            className="instance-2_19856"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19857"
                                            className="frame-2_19857"
                                        >
                                            <div className="frame-content-2_19857">
                                                <NavigationChevronUp
                                                    id="2_19858"
                                                    className="instance-2_19858"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19854 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "valid" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19859" className="symbol-2_19859">
                            <DropdownMenu
                                id="2_19860"
                                className="instance-2_19860"
                                size={"l"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19861"
                                className="instance-2_19861"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19862"
                                className="stroke-wrapper-2_19862"
                            >
                                <div className="frame-2_19862 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19862">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19863"
                                                className="instance-2_19863"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19864"
                                            className="instance-2_19864"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19865"
                                            className="frame-2_19865"
                                        >
                                            <div className="frame-content-2_19865">
                                                <NavigationChevronUp
                                                    id="2_19866"
                                                    className="instance-2_19866"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19862 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "valid" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19867" className="symbol-2_19867">
                            <DropdownMenu
                                id="2_19868"
                                className="instance-2_19868"
                                size={"l"}
                            ></DropdownMenu>
                            <div
                                id="2_19869"
                                className="stroke-wrapper-2_19869"
                            >
                                <div className="frame-2_19869 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19869">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19870"
                                                className="instance-2_19870"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19871"
                                            className="instance-2_19871"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19872"
                                            className="frame-2_19872"
                                        >
                                            <div className="frame-content-2_19872">
                                                <NavigationChevronUp
                                                    id="2_19873"
                                                    className="instance-2_19873"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19869 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "valid" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19874" className="symbol-2_19874">
                            <DropdownMenu
                                id="2_19875"
                                className="instance-2_19875"
                                size={"l"}
                            ></DropdownMenu>
                            <div
                                id="2_19876"
                                className="stroke-wrapper-2_19876"
                            >
                                <div className="frame-2_19876 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19876">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19877"
                                                className="instance-2_19877"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19878"
                                            className="instance-2_19878"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19879"
                                            className="frame-2_19879"
                                        >
                                            <div className="frame-content-2_19879">
                                                <NavigationChevronUp
                                                    id="2_19880"
                                                    className="instance-2_19880"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19876 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "valid" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19881" className="symbol-2_19881">
                            <DropdownMenu
                                id="2_19882"
                                className="instance-2_19882"
                                size={"l"}
                            ></DropdownMenu>
                            <div
                                id="2_19883"
                                className="stroke-wrapper-2_19883"
                            >
                                <div className="frame-2_19883 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19883">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19884"
                                                className="instance-2_19884"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19885"
                                            className="instance-2_19885"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19886"
                                            className="frame-2_19886"
                                        >
                                            <div className="frame-content-2_19886">
                                                <NavigationChevronUp
                                                    id="2_19887"
                                                    className="instance-2_19887"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19883 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "valid" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19888" className="symbol-2_19888">
                            <DropdownMenu
                                id="2_19889"
                                className="instance-2_19889"
                                size={"l"}
                            ></DropdownMenu>
                            <div
                                id="2_19890"
                                className="stroke-wrapper-2_19890"
                            >
                                <div className="frame-2_19890 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19890">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19891"
                                                className="instance-2_19891"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19892"
                                            className="instance-2_19892"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19893"
                                            className="frame-2_19893"
                                        >
                                            <div className="frame-content-2_19893">
                                                <NavigationChevronUp
                                                    id="2_19894"
                                                    className="instance-2_19894"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19890 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "active" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19895" className="symbol-2_19895">
                            <DropdownMenu
                                id="2_19896"
                                className="instance-2_19896"
                                size={"l"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19897"
                                className="instance-2_19897"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19898"
                                className="stroke-wrapper-2_19898"
                            >
                                <div className="frame-2_19898 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19898">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19899"
                                                className="instance-2_19899"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19900"
                                            className="instance-2_19900"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_19901"
                                            className="frame-2_19901"
                                        >
                                            <div className="frame-content-2_19901">
                                                <NavigationChevronUp
                                                    id="2_19902"
                                                    className="instance-2_19902"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19898 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "active" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19903" className="symbol-2_19903">
                            <DropdownMenu
                                id="2_19904"
                                className="instance-2_19904"
                                size={"l"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19905"
                                className="instance-2_19905"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19906"
                                className="stroke-wrapper-2_19906"
                            >
                                <div className="frame-2_19906 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19906">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19907"
                                                className="instance-2_19907"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19908"
                                            className="instance-2_19908"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_19909"
                                            className="frame-2_19909"
                                        >
                                            <div className="frame-content-2_19909">
                                                <NavigationChevronUp
                                                    id="2_19910"
                                                    className="instance-2_19910"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19906 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "active" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19911" className="symbol-2_19911">
                            <DropdownMenu
                                id="2_19912"
                                className="instance-2_19912"
                                size={"l"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19913"
                                className="instance-2_19913"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19914"
                                className="stroke-wrapper-2_19914"
                            >
                                <div className="frame-2_19914 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19914">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19915"
                                                className="instance-2_19915"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19916"
                                            className="instance-2_19916"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_19917"
                                            className="frame-2_19917"
                                        >
                                            <div className="frame-content-2_19917">
                                                <NavigationChevronUp
                                                    id="2_19918"
                                                    className="instance-2_19918"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19914 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "active" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19919" className="symbol-2_19919">
                            <DropdownMenu
                                id="2_19920"
                                className="instance-2_19920"
                                size={"l"}
                            ></DropdownMenu>
                            <_Label_top
                                id="2_19921"
                                className="instance-2_19921"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19922"
                                className="stroke-wrapper-2_19922"
                            >
                                <div className="frame-2_19922 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19922">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19923"
                                                className="instance-2_19923"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19924"
                                            className="instance-2_19924"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_19925"
                                            className="frame-2_19925"
                                        >
                                            <div className="frame-content-2_19925">
                                                <NavigationChevronUp
                                                    id="2_19926"
                                                    className="instance-2_19926"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19922 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "active" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19927" className="symbol-2_19927">
                            <DropdownMenu
                                id="2_19928"
                                className="instance-2_19928"
                                size={"l"}
                            ></DropdownMenu>
                            <div
                                id="2_19929"
                                className="stroke-wrapper-2_19929"
                            >
                                <div className="frame-2_19929 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19929">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19930"
                                                className="instance-2_19930"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19931"
                                            className="instance-2_19931"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_19932"
                                            className="frame-2_19932"
                                        >
                                            <div className="frame-content-2_19932">
                                                <NavigationChevronUp
                                                    id="2_19933"
                                                    className="instance-2_19933"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19929 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "active" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19934" className="symbol-2_19934">
                            <DropdownMenu
                                id="2_19935"
                                className="instance-2_19935"
                                size={"l"}
                            ></DropdownMenu>
                            <div
                                id="2_19936"
                                className="stroke-wrapper-2_19936"
                            >
                                <div className="frame-2_19936 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19936">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19937"
                                                className="instance-2_19937"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19938"
                                            className="instance-2_19938"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_19939"
                                            className="frame-2_19939"
                                        >
                                            <div className="frame-content-2_19939">
                                                <NavigationChevronUp
                                                    id="2_19940"
                                                    className="instance-2_19940"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19936 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "active" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19941" className="symbol-2_19941">
                            <DropdownMenu
                                id="2_19942"
                                className="instance-2_19942"
                                size={"l"}
                            ></DropdownMenu>
                            <div
                                id="2_19943"
                                className="stroke-wrapper-2_19943"
                            >
                                <div className="frame-2_19943 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19943">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19944"
                                                className="instance-2_19944"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19945"
                                            className="instance-2_19945"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_19946"
                                            className="frame-2_19946"
                                        >
                                            <div className="frame-content-2_19946">
                                                <NavigationChevronUp
                                                    id="2_19947"
                                                    className="instance-2_19947"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19943 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "active" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_19948" className="symbol-2_19948">
                            <DropdownMenu
                                id="2_19949"
                                className="instance-2_19949"
                                size={"l"}
                            ></DropdownMenu>
                            <div
                                id="2_19950"
                                className="stroke-wrapper-2_19950"
                            >
                                <div className="frame-2_19950 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19950">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19951"
                                                className="instance-2_19951"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19952"
                                            className="instance-2_19952"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_19953"
                                            className="frame-2_19953"
                                        >
                                            <div className="frame-content-2_19953">
                                                <NavigationChevronUp
                                                    id="2_19954"
                                                    className="instance-2_19954"
                                                ></NavigationChevronUp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19950 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19955" className="symbol-2_19955">
                            <_Label_top
                                id="2_19956"
                                className="instance-2_19956"
                                size={"l"}
                                counter={false}
                                icon={true}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19957"
                                className="stroke-wrapper-2_19957"
                            >
                                <div className="frame-2_19957 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19957">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19958"
                                                className="instance-2_19958"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19959"
                                            className="instance-2_19959"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19960"
                                            className="frame-2_19960"
                                        >
                                            <div className="frame-content-2_19960">
                                                <NavigationChevrondown0
                                                    id="2_19961"
                                                    className="instance-2_19961"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19957 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19962"
                                    className="instance-2_19962"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_19963" className="symbol-2_19963">
                            <div
                                id="2_19964"
                                className="stroke-wrapper-2_19964"
                            >
                                <div className="frame-2_19964 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19964">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19965"
                                                className="instance-2_19965"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <div
                                            id="2_19966"
                                            className="frame-2_19966"
                                        >
                                            <div className="frame-content-2_19966">
                                                <_Label_top
                                                    id="2_19967"
                                                    className="instance-2_19967"
                                                    size={"l"}
                                                    counter={false}
                                                    icon={true}
                                                    required={false}
                                                ></_Label_top>
                                                <_Body_select
                                                    id="2_19968"
                                                    className="instance-2_19968"
                                                    size={"xl"}
                                                    filled={"false"}
                                                    cursor={"false"}
                                                ></_Body_select>
                                            </div>
                                        </div>
                                        <div
                                            id="2_19969"
                                            className="frame-2_19969"
                                        >
                                            <div className="frame-content-2_19969">
                                                <NavigationChevrondown0
                                                    id="2_19970"
                                                    className="instance-2_19970"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19964 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19971"
                                    className="instance-2_19971"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19972" className="symbol-2_19972">
                            <_Label_top
                                id="2_19973"
                                className="instance-2_19973"
                                size={"l"}
                                counter={false}
                                icon={true}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_19974"
                                className="stroke-wrapper-2_19974"
                            >
                                <div className="frame-2_19974 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19974">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19975"
                                                className="instance-2_19975"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19976"
                                            className="instance-2_19976"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19977"
                                            className="frame-2_19977"
                                        >
                                            <div className="frame-content-2_19977">
                                                <NavigationChevrondown0
                                                    id="2_19978"
                                                    className="instance-2_19978"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19974 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19979"
                                    className="instance-2_19979"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_19980" className="symbol-2_19980">
                            <div
                                id="2_19981"
                                className="stroke-wrapper-2_19981"
                            >
                                <div className="frame-2_19981 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19981">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19982"
                                                className="instance-2_19982"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <div
                                            id="2_19983"
                                            className="frame-2_19983"
                                        >
                                            <_Label_top
                                                id="2_19984"
                                                className="instance-2_19984"
                                                size={"l"}
                                                counter={false}
                                                icon={true}
                                                required={false}
                                            ></_Label_top>
                                            <_Body_select
                                                id="2_19985"
                                                className="instance-2_19985"
                                                size={"xl"}
                                                filled={"true"}
                                                cursor={"false"}
                                            ></_Body_select>
                                        </div>
                                        <div
                                            id="2_19986"
                                            className="frame-2_19986"
                                        >
                                            <div className="frame-content-2_19986">
                                                <NavigationChevrondown0
                                                    id="2_19987"
                                                    className="instance-2_19987"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19981 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19988"
                                    className="instance-2_19988"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19989" className="symbol-2_19989">
                            <div
                                id="2_19990"
                                className="stroke-wrapper-2_19990"
                            >
                                <div className="frame-2_19990 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19990">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19991"
                                                className="instance-2_19991"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19992"
                                            className="instance-2_19992"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_19993"
                                            className="frame-2_19993"
                                        >
                                            <div className="frame-content-2_19993">
                                                <NavigationChevrondown0
                                                    id="2_19994"
                                                    className="instance-2_19994"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19990 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_19995"
                                    className="instance-2_19995"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_19996" className="symbol-2_19996">
                            <div
                                id="2_19997"
                                className="stroke-wrapper-2_19997"
                            >
                                <div className="frame-2_19997 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_19997">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_19998"
                                                className="instance-2_19998"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_19999"
                                            className="instance-2_19999"
                                            size={"xl"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20000"
                                            className="frame-2_20000"
                                        >
                                            <div className="frame-content-2_20000">
                                                <NavigationChevrondown0
                                                    id="2_20001"
                                                    className="instance-2_20001"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_19997 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20002"
                                    className="instance-2_20002"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_20003" className="symbol-2_20003">
                            <div
                                id="2_20004"
                                className="stroke-wrapper-2_20004"
                            >
                                <div className="frame-2_20004 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20004">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20005"
                                                className="instance-2_20005"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20006"
                                            className="instance-2_20006"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20007"
                                            className="frame-2_20007"
                                        >
                                            <div className="frame-content-2_20007">
                                                <NavigationChevrondown0
                                                    id="2_20008"
                                                    className="instance-2_20008"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20004 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20009"
                                    className="instance-2_20009"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_20010" className="symbol-2_20010">
                            <div
                                id="2_20011"
                                className="stroke-wrapper-2_20011"
                            >
                                <div className="frame-2_20011 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20011">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20012"
                                                className="instance-2_20012"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20013"
                                            className="instance-2_20013"
                                            size={"xl"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20014"
                                            className="frame-2_20014"
                                        >
                                            <div className="frame-content-2_20014">
                                                <NavigationChevrondown0
                                                    id="2_20015"
                                                    className="instance-2_20015"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20011 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20016"
                                    className="instance-2_20016"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_20017" className="symbol-2_20017">
                            <_Label_top
                                id="2_20018"
                                className="instance-2_20018"
                                size={"l"}
                                counter={false}
                                icon={true}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_20019"
                                className="stroke-wrapper-2_20019"
                            >
                                <div className="frame-2_20019 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20019">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20020"
                                                className="instance-2_20020"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20021"
                                            className="instance-2_20021"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20022"
                                            className="frame-2_20022"
                                        >
                                            <div className="frame-content-2_20022">
                                                <NavigationChevrondown0
                                                    id="2_20023"
                                                    className="instance-2_20023"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20019 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20024"
                                    className="instance-2_20024"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_20025" className="symbol-2_20025">
                            <_Label_top
                                id="2_20026"
                                className="instance-2_20026"
                                size={"l"}
                                counter={false}
                                icon={true}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_20027"
                                className="stroke-wrapper-2_20027"
                            >
                                <div className="frame-2_20027 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20027">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20028"
                                                className="instance-2_20028"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20029"
                                            className="instance-2_20029"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20030"
                                            className="frame-2_20030"
                                        >
                                            <div className="frame-content-2_20030">
                                                <NavigationChevrondown0
                                                    id="2_20031"
                                                    className="instance-2_20031"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20027 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20032"
                                    className="instance-2_20032"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_20033" className="symbol-2_20033">
                            <_Label_top
                                id="2_20034"
                                className="instance-2_20034"
                                size={"l"}
                                counter={false}
                                icon={true}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_20035"
                                className="stroke-wrapper-2_20035"
                            >
                                <div className="frame-2_20035 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20035">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20036"
                                                className="instance-2_20036"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20037"
                                            className="instance-2_20037"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20038"
                                            className="frame-2_20038"
                                        >
                                            <div className="frame-content-2_20038">
                                                <NavigationChevrondown0
                                                    id="2_20039"
                                                    className="instance-2_20039"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20035 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20040"
                                    className="instance-2_20040"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_20041" className="symbol-2_20041">
                            <_Label_top
                                id="2_20042"
                                className="instance-2_20042"
                                size={"l"}
                                counter={false}
                                icon={true}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_20043"
                                className="stroke-wrapper-2_20043"
                            >
                                <div className="frame-2_20043 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20043">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20044"
                                                className="instance-2_20044"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20045"
                                            className="instance-2_20045"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20046"
                                            className="frame-2_20046"
                                        >
                                            <div className="frame-content-2_20046">
                                                <NavigationChevrondown0
                                                    id="2_20047"
                                                    className="instance-2_20047"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20043 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20048"
                                    className="instance-2_20048"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_20049" className="symbol-2_20049">
                            <div
                                id="2_20050"
                                className="stroke-wrapper-2_20050"
                            >
                                <div className="frame-2_20050 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20050">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20051"
                                                className="instance-2_20051"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20052"
                                            className="instance-2_20052"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20053"
                                            className="frame-2_20053"
                                        >
                                            <div className="frame-content-2_20053">
                                                <NavigationChevrondown0
                                                    id="2_20054"
                                                    className="instance-2_20054"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20050 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20055"
                                    className="instance-2_20055"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_20056" className="symbol-2_20056">
                            <div
                                id="2_20057"
                                className="stroke-wrapper-2_20057"
                            >
                                <div className="frame-2_20057 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20057">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20058"
                                                className="instance-2_20058"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20059"
                                            className="instance-2_20059"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20060"
                                            className="frame-2_20060"
                                        >
                                            <div className="frame-content-2_20060">
                                                <NavigationChevrondown0
                                                    id="2_20061"
                                                    className="instance-2_20061"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20057 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20062"
                                    className="instance-2_20062"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    dropdown === "true" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_20063" className="symbol-2_20063">
                            <div
                                id="2_20064"
                                className="stroke-wrapper-2_20064"
                            >
                                <div className="frame-2_20064 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20064">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20065"
                                                className="instance-2_20065"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20066"
                                            className="instance-2_20066"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20067"
                                            className="frame-2_20067"
                                        >
                                            <div className="frame-content-2_20067">
                                                <NavigationChevrondown0
                                                    id="2_20068"
                                                    className="instance-2_20068"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20064 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20069"
                                    className="instance-2_20069"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    dropdown === "true" &&
                    foldDirection === "up" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_20070" className="symbol-2_20070">
                            <div
                                id="2_20071"
                                className="stroke-wrapper-2_20071"
                            >
                                <div className="frame-2_20071 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20071">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20072"
                                                className="instance-2_20072"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20073"
                                            className="instance-2_20073"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20074"
                                            className="frame-2_20074"
                                        >
                                            <div className="frame-content-2_20074">
                                                <NavigationChevrondown0
                                                    id="2_20075"
                                                    className="instance-2_20075"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20071 stroke-lightneutralcontainer-default-2_2292"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20076"
                                    className="instance-2_20076"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "active" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_20077" className="symbol-2_20077">
                            <_Label_top
                                id="2_20078"
                                className="instance-2_20078"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_20079"
                                className="stroke-wrapper-2_20079"
                            >
                                <div className="frame-2_20079 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20079">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20080"
                                                className="instance-2_20080"
                                                size={"l"}
                                                active={"true"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20081"
                                            className="instance-2_20081"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_20082"
                                            className="frame-2_20082"
                                        >
                                            <div className="frame-content-2_20082">
                                                <NavigationChevrondown0
                                                    id="2_20083"
                                                    className="instance-2_20083"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20079 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20084"
                                    className="instance-2_20084"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "active" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_20085" className="symbol-2_20085">
                            <div
                                id="2_20086"
                                className="stroke-wrapper-2_20086"
                            >
                                <div className="frame-2_20086 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20086">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20087"
                                                className="instance-2_20087"
                                                size={"l"}
                                                active={"true"}
                                            ></_Left_icon>
                                        )}
                                        <div
                                            id="2_20088"
                                            className="frame-2_20088"
                                        >
                                            <div className="frame-content-2_20088">
                                                <_Label_top
                                                    id="2_20089"
                                                    className="instance-2_20089"
                                                    size={"l"}
                                                    counter={false}
                                                    icon={false}
                                                    required={false}
                                                ></_Label_top>
                                                <_Body_select
                                                    id="2_20090"
                                                    className="instance-2_20090"
                                                    size={"xl"}
                                                    filled={"false"}
                                                    cursor={"true"}
                                                ></_Body_select>
                                            </div>
                                        </div>
                                        <div
                                            id="2_20091"
                                            className="frame-2_20091"
                                        >
                                            <div className="frame-content-2_20091">
                                                <NavigationChevrondown0
                                                    id="2_20092"
                                                    className="instance-2_20092"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20086 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20093"
                                    className="instance-2_20093"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "active" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_20094" className="symbol-2_20094">
                            <_Label_top
                                id="2_20095"
                                className="instance-2_20095"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_20096"
                                className="stroke-wrapper-2_20096"
                            >
                                <div className="frame-2_20096 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20096">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20097"
                                                className="instance-2_20097"
                                                size={"l"}
                                                active={"true"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20098"
                                            className="instance-2_20098"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_20099"
                                            className="frame-2_20099"
                                        >
                                            <div className="frame-content-2_20099">
                                                <NavigationChevrondown0
                                                    id="2_20100"
                                                    className="instance-2_20100"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20096 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20101"
                                    className="instance-2_20101"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "active" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_20102" className="symbol-2_20102">
                            <div
                                id="2_20103"
                                className="stroke-wrapper-2_20103"
                            >
                                <div className="frame-2_20103 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20103">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20104"
                                                className="instance-2_20104"
                                                size={"l"}
                                                active={"true"}
                                            ></_Left_icon>
                                        )}
                                        <div
                                            id="2_20105"
                                            className="frame-2_20105"
                                        >
                                            <div className="frame-content-2_20105">
                                                <_Label_top
                                                    id="2_20106"
                                                    className="instance-2_20106"
                                                    size={"l"}
                                                    counter={false}
                                                    icon={false}
                                                    required={false}
                                                ></_Label_top>
                                                <_Body_select
                                                    id="2_20107"
                                                    className="instance-2_20107"
                                                    size={"xl"}
                                                    filled={"true"}
                                                    cursor={"true"}
                                                ></_Body_select>
                                            </div>
                                        </div>
                                        <div
                                            id="2_20108"
                                            className="frame-2_20108"
                                        >
                                            <div className="frame-content-2_20108">
                                                <NavigationChevrondown0
                                                    id="2_20109"
                                                    className="instance-2_20109"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20103 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20110"
                                    className="instance-2_20110"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "active" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_20111" className="symbol-2_20111">
                            <div
                                id="2_20112"
                                className="stroke-wrapper-2_20112"
                            >
                                <div className="frame-2_20112 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20112">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20113"
                                                className="instance-2_20113"
                                                size={"l"}
                                                active={"true"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20114"
                                            className="instance-2_20114"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_20115"
                                            className="frame-2_20115"
                                        >
                                            <div className="frame-content-2_20115">
                                                <NavigationChevrondown0
                                                    id="2_20116"
                                                    className="instance-2_20116"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20112 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20117"
                                    className="instance-2_20117"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "active" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_20118" className="symbol-2_20118">
                            <div
                                id="2_20119"
                                className="stroke-wrapper-2_20119"
                            >
                                <div className="frame-2_20119 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20119">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20120"
                                                className="instance-2_20120"
                                                size={"l"}
                                                active={"true"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20121"
                                            className="instance-2_20121"
                                            size={"xl"}
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_20122"
                                            className="frame-2_20122"
                                        >
                                            <div className="frame-content-2_20122">
                                                <NavigationChevrondown0
                                                    id="2_20123"
                                                    className="instance-2_20123"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20119 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20124"
                                    className="instance-2_20124"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "active" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_20125" className="symbol-2_20125">
                            <div
                                id="2_20126"
                                className="stroke-wrapper-2_20126"
                            >
                                <div className="frame-2_20126 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20126">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20127"
                                                className="instance-2_20127"
                                                size={"l"}
                                                active={"true"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20128"
                                            className="instance-2_20128"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_20129"
                                            className="frame-2_20129"
                                        >
                                            <div className="frame-content-2_20129">
                                                <NavigationChevrondown0
                                                    id="2_20130"
                                                    className="instance-2_20130"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20126 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20131"
                                    className="instance-2_20131"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "active" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_20132" className="symbol-2_20132">
                            <div
                                id="2_20133"
                                className="stroke-wrapper-2_20133"
                            >
                                <div className="frame-2_20133 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20133">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20134"
                                                className="instance-2_20134"
                                                size={"l"}
                                                active={"true"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20135"
                                            className="instance-2_20135"
                                            size={"xl"}
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_select>
                                        <div
                                            id="2_20136"
                                            className="frame-2_20136"
                                        >
                                            <div className="frame-content-2_20136">
                                                <NavigationChevrondown0
                                                    id="2_20137"
                                                    className="instance-2_20137"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20133 stroke-lightinteractiveaccent-2_2283"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20138"
                                    className="instance-2_20138"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "error" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_20139" className="symbol-2_20139">
                            <_Label_top
                                id="2_20140"
                                className="instance-2_20140"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_20141"
                                className="stroke-wrapper-2_20141"
                            >
                                <div className="frame-2_20141 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_20141">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20142"
                                                className="instance-2_20142"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20143"
                                            className="instance-2_20143"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20144"
                                            className="frame-2_20144"
                                        >
                                            <div className="frame-content-2_20144">
                                                <NavigationChevrondown0
                                                    id="2_20145"
                                                    className="instance-2_20145"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20141 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20146"
                                    className="instance-2_20146"
                                    size={"l"}
                                    state={"error"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "error" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_20147" className="symbol-2_20147">
                            <div
                                id="2_20148"
                                className="stroke-wrapper-2_20148"
                            >
                                <div className="frame-2_20148 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_20148">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20149"
                                                className="instance-2_20149"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <div
                                            id="2_20150"
                                            className="frame-2_20150"
                                        >
                                            <div className="frame-content-2_20150">
                                                <_Label_top
                                                    id="2_20151"
                                                    className="instance-2_20151"
                                                    size={"l"}
                                                    counter={false}
                                                    icon={false}
                                                    required={false}
                                                ></_Label_top>
                                                <_Body_select
                                                    id="2_20152"
                                                    className="instance-2_20152"
                                                    size={"xl"}
                                                    filled={"false"}
                                                    cursor={"false"}
                                                ></_Body_select>
                                            </div>
                                        </div>
                                        <div
                                            id="2_20153"
                                            className="frame-2_20153"
                                        >
                                            <div className="frame-content-2_20153">
                                                <NavigationChevrondown0
                                                    id="2_20154"
                                                    className="instance-2_20154"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20148 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20155"
                                    className="instance-2_20155"
                                    size={"l"}
                                    state={"error"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "error" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_20156" className="symbol-2_20156">
                            <_Label_top
                                id="2_20157"
                                className="instance-2_20157"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_20158"
                                className="stroke-wrapper-2_20158"
                            >
                                <div className="frame-2_20158 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_20158">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20159"
                                                className="instance-2_20159"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20160"
                                            className="instance-2_20160"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20161"
                                            className="frame-2_20161"
                                        >
                                            <div className="frame-content-2_20161">
                                                <NavigationChevrondown0
                                                    id="2_20162"
                                                    className="instance-2_20162"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20158 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20163"
                                    className="instance-2_20163"
                                    size={"l"}
                                    state={"error"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "error" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_20164" className="symbol-2_20164">
                            <div
                                id="2_20165"
                                className="stroke-wrapper-2_20165"
                            >
                                <div className="frame-2_20165 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_20165">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20166"
                                                className="instance-2_20166"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <div
                                            id="2_20167"
                                            className="frame-2_20167"
                                        >
                                            <div className="frame-content-2_20167">
                                                <_Label_top
                                                    id="2_20168"
                                                    className="instance-2_20168"
                                                    size={"l"}
                                                    counter={false}
                                                    icon={false}
                                                    required={false}
                                                ></_Label_top>
                                                <_Body_select
                                                    id="2_20169"
                                                    className="instance-2_20169"
                                                    size={"xl"}
                                                    filled={"true"}
                                                    cursor={"false"}
                                                ></_Body_select>
                                            </div>
                                        </div>
                                        <div
                                            id="2_20170"
                                            className="frame-2_20170"
                                        >
                                            <div className="frame-content-2_20170">
                                                <NavigationChevrondown0
                                                    id="2_20171"
                                                    className="instance-2_20171"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20165 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20172"
                                    className="instance-2_20172"
                                    size={"l"}
                                    state={"error"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "error" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_20173" className="symbol-2_20173">
                            <div
                                id="2_20174"
                                className="stroke-wrapper-2_20174"
                            >
                                <div className="frame-2_20174 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_20174">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20175"
                                                className="instance-2_20175"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20176"
                                            className="instance-2_20176"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20177"
                                            className="frame-2_20177"
                                        >
                                            <div className="frame-content-2_20177">
                                                <NavigationChevrondown0
                                                    id="2_20178"
                                                    className="instance-2_20178"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20174 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20179"
                                    className="instance-2_20179"
                                    size={"l"}
                                    state={"error"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "error" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_20180" className="symbol-2_20180">
                            <div
                                id="2_20181"
                                className="stroke-wrapper-2_20181"
                            >
                                <div className="frame-2_20181 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_20181">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20182"
                                                className="instance-2_20182"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20183"
                                            className="instance-2_20183"
                                            size={"xl"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20184"
                                            className="frame-2_20184"
                                        >
                                            <div className="frame-content-2_20184">
                                                <NavigationChevrondown0
                                                    id="2_20185"
                                                    className="instance-2_20185"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20181 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20186"
                                    className="instance-2_20186"
                                    size={"l"}
                                    state={"error"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "error" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_20187" className="symbol-2_20187">
                            <div
                                id="2_20188"
                                className="stroke-wrapper-2_20188"
                            >
                                <div className="frame-2_20188 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_20188">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20189"
                                                className="instance-2_20189"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20190"
                                            className="instance-2_20190"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20191"
                                            className="frame-2_20191"
                                        >
                                            <div className="frame-content-2_20191">
                                                <NavigationChevrondown0
                                                    id="2_20192"
                                                    className="instance-2_20192"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20188 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20193"
                                    className="instance-2_20193"
                                    size={"l"}
                                    state={"error"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "error" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_20194" className="symbol-2_20194">
                            <div
                                id="2_20195"
                                className="stroke-wrapper-2_20195"
                            >
                                <div className="frame-2_20195 fill-lighterrorcontainer-soft-2_2300">
                                    <div className="frame-content-2_20195">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20196"
                                                className="instance-2_20196"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20197"
                                            className="instance-2_20197"
                                            size={"xl"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20198"
                                            className="frame-2_20198"
                                        >
                                            <div className="frame-content-2_20198">
                                                <NavigationChevrondown0
                                                    id="2_20199"
                                                    className="instance-2_20199"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20195 stroke-lightinteractive-errordefault-2_2298"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20200"
                                    className="instance-2_20200"
                                    size={"l"}
                                    state={"error"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "valid" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_20201" className="symbol-2_20201">
                            <_Label_top
                                id="2_20202"
                                className="instance-2_20202"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_20203"
                                className="stroke-wrapper-2_20203"
                            >
                                <div className="frame-2_20203 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20203">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20204"
                                                className="instance-2_20204"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20205"
                                            className="instance-2_20205"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20206"
                                            className="frame-2_20206"
                                        >
                                            <div className="frame-content-2_20206">
                                                <NavigationChevrondown0
                                                    id="2_20207"
                                                    className="instance-2_20207"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20203 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20208"
                                    className="instance-2_20208"
                                    size={"l"}
                                    state={"success"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "valid" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "false" && (
                        <div id="2_20209" className="symbol-2_20209">
                            <div
                                id="2_20210"
                                className="stroke-wrapper-2_20210"
                            >
                                <div className="frame-2_20210 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20210">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20211"
                                                className="instance-2_20211"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <div
                                            id="2_20212"
                                            className="frame-2_20212"
                                        >
                                            <div className="frame-content-2_20212">
                                                <_Label_top
                                                    id="2_20213"
                                                    className="instance-2_20213"
                                                    size={"l"}
                                                    counter={false}
                                                    icon={false}
                                                    required={false}
                                                ></_Label_top>
                                                <_Body_select
                                                    id="2_20214"
                                                    className="instance-2_20214"
                                                    size={"xl"}
                                                    filled={"false"}
                                                    cursor={"false"}
                                                ></_Body_select>
                                            </div>
                                        </div>
                                        <div
                                            id="2_20215"
                                            className="frame-2_20215"
                                        >
                                            <div className="frame-content-2_20215">
                                                <NavigationChevrondown0
                                                    id="2_20216"
                                                    className="instance-2_20216"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20210 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20217"
                                    className="instance-2_20217"
                                    size={"l"}
                                    state={"success"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "valid" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_20218" className="symbol-2_20218">
                            <_Label_top
                                id="2_20219"
                                className="instance-2_20219"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                            <div
                                id="2_20220"
                                className="stroke-wrapper-2_20220"
                            >
                                <div className="frame-2_20220 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20220">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20221"
                                                className="instance-2_20221"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20222"
                                            className="instance-2_20222"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20223"
                                            className="frame-2_20223"
                                        >
                                            <div className="frame-content-2_20223">
                                                <NavigationChevrondown0
                                                    id="2_20224"
                                                    className="instance-2_20224"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20220 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20225"
                                    className="instance-2_20225"
                                    size={"l"}
                                    state={"success"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "valid" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "true" &&
                    textfilled === "true" && (
                        <div id="2_20226" className="symbol-2_20226">
                            <div
                                id="2_20227"
                                className="stroke-wrapper-2_20227"
                            >
                                <div className="frame-2_20227 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20227">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20228"
                                                className="instance-2_20228"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <div
                                            id="2_20229"
                                            className="frame-2_20229"
                                        >
                                            <div className="frame-content-2_20229">
                                                <_Label_top
                                                    id="2_20230"
                                                    className="instance-2_20230"
                                                    size={"l"}
                                                    counter={false}
                                                    icon={false}
                                                    required={false}
                                                ></_Label_top>
                                                <_Body_select
                                                    id="2_20231"
                                                    className="instance-2_20231"
                                                    size={"xl"}
                                                    filled={"true"}
                                                    cursor={"false"}
                                                ></_Body_select>
                                            </div>
                                        </div>
                                        <div
                                            id="2_20232"
                                            className="frame-2_20232"
                                        >
                                            <div className="frame-content-2_20232">
                                                <NavigationChevrondown0
                                                    id="2_20233"
                                                    className="instance-2_20233"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20227 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20234"
                                    className="instance-2_20234"
                                    size={"l"}
                                    state={"success"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "valid" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_20235" className="symbol-2_20235">
                            <div
                                id="2_20236"
                                className="stroke-wrapper-2_20236"
                            >
                                <div className="frame-2_20236 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20236">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20237"
                                                className="instance-2_20237"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20238"
                                            className="instance-2_20238"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20239"
                                            className="frame-2_20239"
                                        >
                                            <div className="frame-content-2_20239">
                                                <NavigationChevrondown0
                                                    id="2_20240"
                                                    className="instance-2_20240"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20236 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20241"
                                    className="instance-2_20241"
                                    size={"l"}
                                    state={"success"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "valid" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "false" && (
                        <div id="2_20242" className="symbol-2_20242">
                            <div
                                id="2_20243"
                                className="stroke-wrapper-2_20243"
                            >
                                <div className="frame-2_20243 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20243">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20244"
                                                className="instance-2_20244"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20245"
                                            className="instance-2_20245"
                                            size={"xl"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20246"
                                            className="frame-2_20246"
                                        >
                                            <div className="frame-content-2_20246">
                                                <NavigationChevrondown0
                                                    id="2_20247"
                                                    className="instance-2_20247"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20243 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20248"
                                    className="instance-2_20248"
                                    size={"l"}
                                    state={"success"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "valid" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_20249" className="symbol-2_20249">
                            <div
                                id="2_20250"
                                className="stroke-wrapper-2_20250"
                            >
                                <div className="frame-2_20250 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20250">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20251"
                                                className="instance-2_20251"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20252"
                                            className="instance-2_20252"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20253"
                                            className="frame-2_20253"
                                        >
                                            <div className="frame-content-2_20253">
                                                <NavigationChevrondown0
                                                    id="2_20254"
                                                    className="instance-2_20254"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20250 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20255"
                                    className="instance-2_20255"
                                    size={"l"}
                                    state={"success"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "valid" &&
                    dropdown === "false" &&
                    foldDirection === "down" &&
                    label === "false" &&
                    textfilled === "true" && (
                        <div id="2_20256" className="symbol-2_20256">
                            <div
                                id="2_20257"
                                className="stroke-wrapper-2_20257"
                            >
                                <div className="frame-2_20257 fill-lightneutralcontainer-soft-2_22070">
                                    <div className="frame-content-2_20257">
                                        {lefticon && (
                                            <_Left_icon
                                                id="2_20258"
                                                className="instance-2_20258"
                                                size={"l"}
                                                active={"false"}
                                            ></_Left_icon>
                                        )}
                                        <_Body_select
                                            id="2_20259"
                                            className="instance-2_20259"
                                            size={"xl"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_select>
                                        <div
                                            id="2_20260"
                                            className="frame-2_20260"
                                        >
                                            <div className="frame-content-2_20260">
                                                <NavigationChevrondown0
                                                    id="2_20261"
                                                    className="instance-2_20261"
                                                ></NavigationChevrondown0>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stroke-2_20257 stroke-lightsuccessdefault-2_2297"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="2_20262"
                                    className="instance-2_20262"
                                    size={"l"}
                                    state={"success"}
                                ></_Hint>
                            )}
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Select;
