import _Label_top from "@/components/labeltop";
import _Body_textarea from "@/components/bodytextarea";
import _Scrollbar from "@/components/scrollbar";
import _Hint from "@/components/hint";
import "@/styles/Textarea.css";
interface textareaProps {
    label?: boolean;
    hint?: boolean;
    scrollbar?: boolean;
    size?: string;
    state?: string;
    textfilled?: string;
    id?: string;
    className?: string;
}
const Textarea = (props: textareaProps) => {
    const {
        label = true,
        hint = true,
        scrollbar = false,
        size,
        state,
        textfilled,
        id,
        className = ""
    } = props;

    return (
        <div className={`component-50_44146 ${className}`} id={id}>
            <div id="50_44146" className="symbol-50_44146">
                {size === "l" &&
                    state === "default" &&
                    textfilled === "false" && (
                        <div id="50_44147" className="symbol-50_44147">
                            {label && (
                                <_Label_top
                                    id="50_44148"
                                    className="instance-50_44148"
                                    size={"l"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></_Label_top>
                            )}
                            <div
                                id="50_44149"
                                className="stroke-wrapper-50_44149"
                            >
                                <div className="frame-50_44149 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44149">
                                        <_Body_textarea
                                            id="50_44150"
                                            className="instance-50_44150"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_textarea>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44151"
                                                className="instance-50_44151"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44149 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44152"
                                    className="instance-50_44152"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    textfilled === "false" && (
                        <div id="50_44153" className="symbol-50_44153">
                            <div
                                id="50_44154"
                                className="stroke-wrapper-50_44154"
                            >
                                <div className="frame-50_44154 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44154">
                                        <div
                                            id="50_44155"
                                            className="frame-50_44155"
                                        >
                                            <div className="frame-content-50_44155">
                                                {label && (
                                                    <_Label_top
                                                        id="50_44156"
                                                        className="instance-50_44156"
                                                        size={"l"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></_Label_top>
                                                )}
                                                <_Body_textarea
                                                    id="50_44157"
                                                    className="instance-50_44157"
                                                    size={"xl"}
                                                    filled={"false"}
                                                    cursor={"false"}
                                                ></_Body_textarea>
                                            </div>
                                        </div>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44158"
                                                className="instance-50_44158"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44154 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44159"
                                    className="instance-50_44159"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    textfilled === "false" && (
                        <div id="50_44160" className="symbol-50_44160">
                            {label && (
                                <_Label_top
                                    id="50_44161"
                                    className="instance-50_44161"
                                    size={"m"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></_Label_top>
                            )}
                            <div
                                id="50_44162"
                                className="stroke-wrapper-50_44162"
                            >
                                <div className="frame-50_44162 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44162">
                                        <_Body_textarea
                                            id="50_44163"
                                            className="instance-50_44163"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_textarea>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44164"
                                                className="instance-50_44164"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44162 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44165"
                                    className="instance-50_44165"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "default" &&
                    textfilled === "true" && (
                        <div id="50_44166" className="symbol-50_44166">
                            {label && (
                                <_Label_top
                                    id="50_44167"
                                    className="instance-50_44167"
                                    size={"m"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></_Label_top>
                            )}
                            <div
                                id="50_44168"
                                className="stroke-wrapper-50_44168"
                            >
                                <div className="frame-50_44168 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44168">
                                        <_Body_textarea
                                            id="50_44169"
                                            className="instance-50_44169"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_textarea>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44170"
                                                className="instance-50_44170"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44168 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44171"
                                    className="instance-50_44171"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    textfilled === "false" && (
                        <div id="50_44172" className="symbol-50_44172">
                            {label && (
                                <_Label_top
                                    id="50_44173"
                                    className="instance-50_44173"
                                    size={"m"}
                                    counter={false}
                                    icon={true}
                                    required={false}
                                ></_Label_top>
                            )}
                            <div
                                id="50_44174"
                                className="stroke-wrapper-50_44174"
                            >
                                <div className="frame-50_44174 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44174">
                                        <_Body_textarea
                                            id="50_44175"
                                            className="instance-50_44175"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_textarea>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44176"
                                                className="instance-50_44176"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44174 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44177"
                                    className="instance-50_44177"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "disabled" &&
                    textfilled === "true" && (
                        <div id="50_44178" className="symbol-50_44178">
                            {label && (
                                <_Label_top
                                    id="50_44179"
                                    className="instance-50_44179"
                                    size={"m"}
                                    counter={false}
                                    icon={true}
                                    required={false}
                                ></_Label_top>
                            )}
                            <div
                                id="50_44180"
                                className="stroke-wrapper-50_44180"
                            >
                                <div className="frame-50_44180 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44180">
                                        <_Body_textarea
                                            id="50_44181"
                                            className="instance-50_44181"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_textarea>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44182"
                                                className="instance-50_44182"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44180 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44183"
                                    className="instance-50_44183"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "valid" &&
                    textfilled === "false" && (
                        <div id="50_44184" className="symbol-50_44184">
                            {label && (
                                <_Label_top
                                    id="50_44185"
                                    className="instance-50_44185"
                                    size={"m"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></_Label_top>
                            )}
                            <div
                                id="50_44186"
                                className="stroke-wrapper-50_44186"
                            >
                                <div className="frame-50_44186 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44186">
                                        <_Body_textarea
                                            id="50_44187"
                                            className="instance-50_44187"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_textarea>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44188"
                                                className="instance-50_44188"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44186 stroke-lightsuccessdefault-50_44403"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44189"
                                    className="instance-50_44189"
                                    size={"m"}
                                    state={"success"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" && state === "valid" && textfilled === "true" && (
                    <div id="50_44190" className="symbol-50_44190">
                        {label && (
                            <_Label_top
                                id="50_44191"
                                className="instance-50_44191"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                        )}
                        <div id="50_44192" className="stroke-wrapper-50_44192">
                            <div className="frame-50_44192 fill-lightneutralcontainer-soft-2_24225">
                                <div className="frame-content-50_44192">
                                    <_Body_textarea
                                        id="50_44193"
                                        className="instance-50_44193"
                                        size={"m"}
                                        filled={"true"}
                                        cursor={"false"}
                                    ></_Body_textarea>
                                    {scrollbar && (
                                        <_Scrollbar
                                            id="50_44194"
                                            className="instance-50_44194"
                                            active={"false"}
                                        ></_Scrollbar>
                                    )}
                                </div>
                            </div>
                            <div className="stroke-50_44192 stroke-lightsuccessdefault-50_44403"></div>
                        </div>
                        {hint && (
                            <_Hint
                                id="50_44195"
                                className="instance-50_44195"
                                size={"m"}
                                state={"success"}
                            ></_Hint>
                        )}
                    </div>
                )}
                {size === "m" &&
                    state === "error" &&
                    textfilled === "false" && (
                        <div id="50_44196" className="symbol-50_44196">
                            {label && (
                                <_Label_top
                                    id="50_44197"
                                    className="instance-50_44197"
                                    size={"m"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></_Label_top>
                            )}
                            <div
                                id="50_44198"
                                className="stroke-wrapper-50_44198"
                            >
                                <div className="frame-50_44198 fill-lighterrorcontainer-soft-50_44404">
                                    <div className="frame-content-50_44198">
                                        <_Body_textarea
                                            id="50_44199"
                                            className="instance-50_44199"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_textarea>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44200"
                                                className="instance-50_44200"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44198 stroke-lightinteractive-errordefault-2_20322"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44201"
                                    className="instance-50_44201"
                                    size={"m"}
                                    state={"error"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" && state === "error" && textfilled === "true" && (
                    <div id="50_44202" className="symbol-50_44202">
                        {label && (
                            <_Label_top
                                id="50_44203"
                                className="instance-50_44203"
                                size={"m"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                        )}
                        <div id="50_44204" className="stroke-wrapper-50_44204">
                            <div className="frame-50_44204 fill-lighterrorcontainer-soft-50_44404">
                                <div className="frame-content-50_44204">
                                    <_Body_textarea
                                        id="50_44205"
                                        className="instance-50_44205"
                                        size={"m"}
                                        filled={"true"}
                                        cursor={"false"}
                                    ></_Body_textarea>
                                    {scrollbar && (
                                        <_Scrollbar
                                            id="50_44206"
                                            className="instance-50_44206"
                                            active={"false"}
                                        ></_Scrollbar>
                                    )}
                                </div>
                            </div>
                            <div className="stroke-50_44204 stroke-lightinteractive-errordefault-2_20322"></div>
                        </div>
                        {hint && (
                            <_Hint
                                id="50_44207"
                                className="instance-50_44207"
                                size={"m"}
                                state={"error"}
                            ></_Hint>
                        )}
                    </div>
                )}
                {size === "m" &&
                    state === "active" &&
                    textfilled === "false" && (
                        <div id="50_44208" className="symbol-50_44208">
                            {label && (
                                <_Label_top
                                    id="50_44209"
                                    className="instance-50_44209"
                                    size={"m"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></_Label_top>
                            )}
                            <div
                                id="50_44210"
                                className="stroke-wrapper-50_44210"
                            >
                                <div className="frame-50_44210 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44210">
                                        <_Body_textarea
                                            id="50_44211"
                                            className="instance-50_44211"
                                            size={"m"}
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_textarea>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44212"
                                                className="instance-50_44212"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44210 stroke-lightinteractiveaccent-2_20378"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44213"
                                    className="instance-50_44213"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "m" &&
                    state === "active" &&
                    textfilled === "true" && (
                        <div id="50_44214" className="symbol-50_44214">
                            {label && (
                                <_Label_top
                                    id="50_44215"
                                    className="instance-50_44215"
                                    size={"m"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></_Label_top>
                            )}
                            <div
                                id="50_44216"
                                className="stroke-wrapper-50_44216"
                            >
                                <div className="frame-50_44216 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44216">
                                        <_Body_textarea
                                            id="50_44217"
                                            className="instance-50_44217"
                                            size={"m"}
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_textarea>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44218"
                                                className="instance-50_44218"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44216 stroke-lightinteractiveaccent-2_20378"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44219"
                                    className="instance-50_44219"
                                    size={"m"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "default" &&
                    textfilled === "true" && (
                        <div id="50_44220" className="symbol-50_44220">
                            {label && (
                                <_Label_top
                                    id="50_44221"
                                    className="instance-50_44221"
                                    size={"l"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></_Label_top>
                            )}
                            <div
                                id="50_44222"
                                className="stroke-wrapper-50_44222"
                            >
                                <div className="frame-50_44222 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44222">
                                        <_Body_textarea
                                            id="50_44223"
                                            className="instance-50_44223"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_textarea>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44224"
                                                className="instance-50_44224"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44222 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44225"
                                    className="instance-50_44225"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "default" &&
                    textfilled === "true" && (
                        <div id="50_44226" className="symbol-50_44226">
                            <div
                                id="50_44227"
                                className="stroke-wrapper-50_44227"
                            >
                                <div className="frame-50_44227 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44227">
                                        <div
                                            id="50_44228"
                                            className="frame-50_44228"
                                        >
                                            <div className="frame-content-50_44228">
                                                {label && (
                                                    <_Label_top
                                                        id="50_44229"
                                                        className="instance-50_44229"
                                                        size={"l"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></_Label_top>
                                                )}
                                                <_Body_textarea
                                                    id="50_44230"
                                                    className="instance-50_44230"
                                                    size={"xl"}
                                                    filled={"true"}
                                                    cursor={"false"}
                                                ></_Body_textarea>
                                            </div>
                                        </div>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44231"
                                                className="instance-50_44231"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44227 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44232"
                                    className="instance-50_44232"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    textfilled === "false" && (
                        <div id="50_44233" className="symbol-50_44233">
                            {label && (
                                <_Label_top
                                    id="50_44234"
                                    className="instance-50_44234"
                                    size={"l"}
                                    counter={false}
                                    icon={true}
                                    required={false}
                                ></_Label_top>
                            )}
                            <div
                                id="50_44235"
                                className="stroke-wrapper-50_44235"
                            >
                                <div className="frame-50_44235 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44235">
                                        <_Body_textarea
                                            id="50_44236"
                                            className="instance-50_44236"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_textarea>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44237"
                                                className="instance-50_44237"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44235 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44238"
                                    className="instance-50_44238"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    textfilled === "false" && (
                        <div id="50_44239" className="symbol-50_44239">
                            <div
                                id="50_44240"
                                className="stroke-wrapper-50_44240"
                            >
                                <div className="frame-50_44240 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44240">
                                        <div
                                            id="50_44241"
                                            className="frame-50_44241"
                                        >
                                            <div className="frame-content-50_44241">
                                                {label && (
                                                    <_Label_top
                                                        id="50_44242"
                                                        className="instance-50_44242"
                                                        size={"l"}
                                                        counter={false}
                                                        icon={true}
                                                        required={false}
                                                    ></_Label_top>
                                                )}
                                                <_Body_textarea
                                                    id="50_44243"
                                                    className="instance-50_44243"
                                                    size={"xl"}
                                                    filled={"false"}
                                                    cursor={"false"}
                                                ></_Body_textarea>
                                            </div>
                                        </div>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44244"
                                                className="instance-50_44244"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44240 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44245"
                                    className="instance-50_44245"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "disabled" &&
                    textfilled === "true" && (
                        <div id="50_44246" className="symbol-50_44246">
                            {label && (
                                <_Label_top
                                    id="50_44247"
                                    className="instance-50_44247"
                                    size={"l"}
                                    counter={false}
                                    icon={true}
                                    required={false}
                                ></_Label_top>
                            )}
                            <div
                                id="50_44248"
                                className="stroke-wrapper-50_44248"
                            >
                                <div className="frame-50_44248 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44248">
                                        <_Body_textarea
                                            id="50_44249"
                                            className="instance-50_44249"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"false"}
                                        ></_Body_textarea>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44250"
                                                className="instance-50_44250"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44248 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44251"
                                    className="instance-50_44251"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "disabled" &&
                    textfilled === "true" && (
                        <div id="50_44252" className="symbol-50_44252">
                            <div
                                id="50_44253"
                                className="stroke-wrapper-50_44253"
                            >
                                <div className="frame-50_44253 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44253">
                                        <div
                                            id="50_44254"
                                            className="frame-50_44254"
                                        >
                                            <div className="frame-content-50_44254">
                                                {label && (
                                                    <_Label_top
                                                        id="50_44255"
                                                        className="instance-50_44255"
                                                        size={"l"}
                                                        counter={false}
                                                        icon={true}
                                                        required={false}
                                                    ></_Label_top>
                                                )}
                                                <_Body_textarea
                                                    id="50_44256"
                                                    className="instance-50_44256"
                                                    size={"xl"}
                                                    filled={"true"}
                                                    cursor={"false"}
                                                ></_Body_textarea>
                                            </div>
                                        </div>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44257"
                                                className="instance-50_44257"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44253 stroke-lightneutralcontainer-default-2_24224"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44258"
                                    className="instance-50_44258"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "active" &&
                    textfilled === "false" && (
                        <div id="50_44259" className="symbol-50_44259">
                            {label && (
                                <_Label_top
                                    id="50_44260"
                                    className="instance-50_44260"
                                    size={"l"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></_Label_top>
                            )}
                            <div
                                id="50_44261"
                                className="stroke-wrapper-50_44261"
                            >
                                <div className="frame-50_44261 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44261">
                                        <_Body_textarea
                                            id="50_44262"
                                            className="instance-50_44262"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"true"}
                                        ></_Body_textarea>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44263"
                                                className="instance-50_44263"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44261 stroke-lightinteractiveaccent-2_20378"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44264"
                                    className="instance-50_44264"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "active" &&
                    textfilled === "false" && (
                        <div id="50_44265" className="symbol-50_44265">
                            <div
                                id="50_44266"
                                className="stroke-wrapper-50_44266"
                            >
                                <div className="frame-50_44266 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44266">
                                        <div
                                            id="50_44267"
                                            className="frame-50_44267"
                                        >
                                            <div className="frame-content-50_44267">
                                                {label && (
                                                    <_Label_top
                                                        id="50_44268"
                                                        className="instance-50_44268"
                                                        size={"l"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></_Label_top>
                                                )}
                                                <_Body_textarea
                                                    id="50_44269"
                                                    className="instance-50_44269"
                                                    size={"xl"}
                                                    filled={"false"}
                                                    cursor={"true"}
                                                ></_Body_textarea>
                                            </div>
                                        </div>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44270"
                                                className="instance-50_44270"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44266 stroke-lightinteractiveaccent-2_20378"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44271"
                                    className="instance-50_44271"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "active" &&
                    textfilled === "true" && (
                        <div id="50_44272" className="symbol-50_44272">
                            {label && (
                                <_Label_top
                                    id="50_44273"
                                    className="instance-50_44273"
                                    size={"l"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></_Label_top>
                            )}
                            <div
                                id="50_44274"
                                className="stroke-wrapper-50_44274"
                            >
                                <div className="frame-50_44274 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44274">
                                        <_Body_textarea
                                            id="50_44275"
                                            className="instance-50_44275"
                                            size={"l"}
                                            filled={"true"}
                                            cursor={"true"}
                                        ></_Body_textarea>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44276"
                                                className="instance-50_44276"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44274 stroke-lightinteractiveaccent-2_20378"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44277"
                                    className="instance-50_44277"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "active" &&
                    textfilled === "true" && (
                        <div id="50_44278" className="symbol-50_44278">
                            <div
                                id="50_44279"
                                className="stroke-wrapper-50_44279"
                            >
                                <div className="frame-50_44279 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44279">
                                        <div
                                            id="50_44280"
                                            className="frame-50_44280"
                                        >
                                            <div className="frame-content-50_44280">
                                                {label && (
                                                    <_Label_top
                                                        id="50_44281"
                                                        className="instance-50_44281"
                                                        size={"l"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></_Label_top>
                                                )}
                                                <_Body_textarea
                                                    id="50_44282"
                                                    className="instance-50_44282"
                                                    size={"xl"}
                                                    filled={"true"}
                                                    cursor={"true"}
                                                ></_Body_textarea>
                                            </div>
                                        </div>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44283"
                                                className="instance-50_44283"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44279 stroke-lightinteractiveaccent-2_20378"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44284"
                                    className="instance-50_44284"
                                    size={"l"}
                                    state={"default"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "valid" &&
                    textfilled === "false" && (
                        <div id="50_44285" className="symbol-50_44285">
                            {label && (
                                <_Label_top
                                    id="50_44286"
                                    className="instance-50_44286"
                                    size={"l"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></_Label_top>
                            )}
                            <div
                                id="50_44287"
                                className="stroke-wrapper-50_44287"
                            >
                                <div className="frame-50_44287 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44287">
                                        <_Body_textarea
                                            id="50_44288"
                                            className="instance-50_44288"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_textarea>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44289"
                                                className="instance-50_44289"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44287 stroke-lightsuccessdefault-50_44403"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44290"
                                    className="instance-50_44290"
                                    size={"l"}
                                    state={"success"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "valid" &&
                    textfilled === "false" && (
                        <div id="50_44291" className="symbol-50_44291">
                            <div
                                id="50_44292"
                                className="stroke-wrapper-50_44292"
                            >
                                <div className="frame-50_44292 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44292">
                                        <div
                                            id="50_44293"
                                            className="frame-50_44293"
                                        >
                                            <div className="frame-content-50_44293">
                                                {label && (
                                                    <_Label_top
                                                        id="50_44294"
                                                        className="instance-50_44294"
                                                        size={"l"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></_Label_top>
                                                )}
                                                <_Body_textarea
                                                    id="50_44295"
                                                    className="instance-50_44295"
                                                    size={"xl"}
                                                    filled={"false"}
                                                    cursor={"false"}
                                                ></_Body_textarea>
                                            </div>
                                        </div>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44296"
                                                className="instance-50_44296"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44292 stroke-lightsuccessdefault-50_44403"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44297"
                                    className="instance-50_44297"
                                    size={"l"}
                                    state={"success"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" && state === "valid" && textfilled === "true" && (
                    <div id="50_44298" className="symbol-50_44298">
                        {label && (
                            <_Label_top
                                id="50_44299"
                                className="instance-50_44299"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                        )}
                        <div id="50_44300" className="stroke-wrapper-50_44300">
                            <div className="frame-50_44300 fill-lightneutralcontainer-soft-2_24225">
                                <div className="frame-content-50_44300">
                                    <_Body_textarea
                                        id="50_44301"
                                        className="instance-50_44301"
                                        size={"l"}
                                        filled={"true"}
                                        cursor={"false"}
                                    ></_Body_textarea>
                                    {scrollbar && (
                                        <_Scrollbar
                                            id="50_44302"
                                            className="instance-50_44302"
                                            active={"false"}
                                        ></_Scrollbar>
                                    )}
                                </div>
                            </div>
                            <div className="stroke-50_44300 stroke-lightsuccessdefault-50_44403"></div>
                        </div>
                        {hint && (
                            <_Hint
                                id="50_44303"
                                className="instance-50_44303"
                                size={"l"}
                                state={"success"}
                            ></_Hint>
                        )}
                    </div>
                )}
                {size === "xl" &&
                    state === "valid" &&
                    textfilled === "true" && (
                        <div id="50_44304" className="symbol-50_44304">
                            <div
                                id="50_44305"
                                className="stroke-wrapper-50_44305"
                            >
                                <div className="frame-50_44305 fill-lightneutralcontainer-soft-2_24225">
                                    <div className="frame-content-50_44305">
                                        <div
                                            id="50_44306"
                                            className="frame-50_44306"
                                        >
                                            <div className="frame-content-50_44306">
                                                {label && (
                                                    <_Label_top
                                                        id="50_44307"
                                                        className="instance-50_44307"
                                                        size={"l"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></_Label_top>
                                                )}
                                                <_Body_textarea
                                                    id="50_44308"
                                                    className="instance-50_44308"
                                                    size={"xl"}
                                                    filled={"true"}
                                                    cursor={"false"}
                                                ></_Body_textarea>
                                            </div>
                                        </div>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44309"
                                                className="instance-50_44309"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44305 stroke-lightsuccessdefault-50_44403"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44310"
                                    className="instance-50_44310"
                                    size={"l"}
                                    state={"success"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" &&
                    state === "error" &&
                    textfilled === "false" && (
                        <div id="50_44311" className="symbol-50_44311">
                            {label && (
                                <_Label_top
                                    id="50_44312"
                                    className="instance-50_44312"
                                    size={"l"}
                                    counter={false}
                                    icon={false}
                                    required={false}
                                ></_Label_top>
                            )}
                            <div
                                id="50_44313"
                                className="stroke-wrapper-50_44313"
                            >
                                <div className="frame-50_44313 fill-lighterrorcontainer-soft-50_44404">
                                    <div className="frame-content-50_44313">
                                        <_Body_textarea
                                            id="50_44314"
                                            className="instance-50_44314"
                                            size={"l"}
                                            filled={"false"}
                                            cursor={"false"}
                                        ></_Body_textarea>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44315"
                                                className="instance-50_44315"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44313 stroke-lightinteractive-errordefault-2_20322"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44316"
                                    className="instance-50_44316"
                                    size={"l"}
                                    state={"error"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "xl" &&
                    state === "error" &&
                    textfilled === "false" && (
                        <div id="50_44317" className="symbol-50_44317">
                            <div
                                id="50_44318"
                                className="stroke-wrapper-50_44318"
                            >
                                <div className="frame-50_44318 fill-lighterrorcontainer-soft-50_44404">
                                    <div className="frame-content-50_44318">
                                        <div
                                            id="50_44319"
                                            className="frame-50_44319"
                                        >
                                            <div className="frame-content-50_44319">
                                                {label && (
                                                    <_Label_top
                                                        id="50_44320"
                                                        className="instance-50_44320"
                                                        size={"l"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></_Label_top>
                                                )}
                                                <_Body_textarea
                                                    id="50_44321"
                                                    className="instance-50_44321"
                                                    size={"xl"}
                                                    filled={"false"}
                                                    cursor={"false"}
                                                ></_Body_textarea>
                                            </div>
                                        </div>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44322"
                                                className="instance-50_44322"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44318 stroke-lightinteractive-errordefault-2_20322"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44323"
                                    className="instance-50_44323"
                                    size={"l"}
                                    state={"error"}
                                ></_Hint>
                            )}
                        </div>
                    )}
                {size === "l" && state === "error" && textfilled === "true" && (
                    <div id="50_44324" className="symbol-50_44324">
                        {label && (
                            <_Label_top
                                id="50_44325"
                                className="instance-50_44325"
                                size={"l"}
                                counter={false}
                                icon={false}
                                required={false}
                            ></_Label_top>
                        )}
                        <div id="50_44326" className="stroke-wrapper-50_44326">
                            <div className="frame-50_44326 fill-lighterrorcontainer-soft-50_44404">
                                <div className="frame-content-50_44326">
                                    <_Body_textarea
                                        id="50_44327"
                                        className="instance-50_44327"
                                        size={"l"}
                                        filled={"true"}
                                        cursor={"false"}
                                    ></_Body_textarea>
                                    {scrollbar && (
                                        <_Scrollbar
                                            id="50_44328"
                                            className="instance-50_44328"
                                            active={"false"}
                                        ></_Scrollbar>
                                    )}
                                </div>
                            </div>
                            <div className="stroke-50_44326 stroke-lightinteractive-errordefault-2_20322"></div>
                        </div>
                        {hint && (
                            <_Hint
                                id="50_44329"
                                className="instance-50_44329"
                                size={"l"}
                                state={"error"}
                            ></_Hint>
                        )}
                    </div>
                )}
                {size === "xl" &&
                    state === "error" &&
                    textfilled === "true" && (
                        <div id="50_44330" className="symbol-50_44330">
                            <div
                                id="50_44331"
                                className="stroke-wrapper-50_44331"
                            >
                                <div className="frame-50_44331 fill-lighterrorcontainer-soft-50_44404">
                                    <div className="frame-content-50_44331">
                                        <div
                                            id="50_44332"
                                            className="frame-50_44332"
                                        >
                                            <div className="frame-content-50_44332">
                                                {label && (
                                                    <_Label_top
                                                        id="50_44333"
                                                        className="instance-50_44333"
                                                        size={"l"}
                                                        counter={false}
                                                        icon={false}
                                                        required={false}
                                                    ></_Label_top>
                                                )}
                                                <_Body_textarea
                                                    id="50_44334"
                                                    className="instance-50_44334"
                                                    size={"xl"}
                                                    filled={"true"}
                                                    cursor={"false"}
                                                ></_Body_textarea>
                                            </div>
                                        </div>
                                        {scrollbar && (
                                            <_Scrollbar
                                                id="50_44335"
                                                className="instance-50_44335"
                                                active={"false"}
                                            ></_Scrollbar>
                                        )}
                                    </div>
                                </div>
                                <div className="stroke-50_44331 stroke-lightinteractive-errordefault-2_20322"></div>
                            </div>
                            {hint && (
                                <_Hint
                                    id="50_44336"
                                    className="instance-50_44336"
                                    size={"l"}
                                    state={"error"}
                                ></_Hint>
                            )}
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Textarea;
