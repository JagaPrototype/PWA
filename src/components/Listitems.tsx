import ListLeftpart from "@/components/listleftpart";
import ListBody from "@/components/listbody";
import ListRightpart0 from "@/components/listrightpart0";
import "@/styles/Listitems.css";
interface listitemsProps {
    content?: string;
    left?: string;
    right?: string;
    checked?: string;
    disabled?: string;
    id?: string;
    className?: string;
}
const Listitems = (props: listitemsProps) => {
    const {
        content,
        left,
        right,
        checked,
        disabled,
        id,
        className = ""
    } = props;

    return (
        <div className={`component-355_5812 ${className}`} id={id}>
            <div id="355_5812" className="symbol-355_5812">
                {content === "1 line" &&
                    left === "checkbox" &&
                    right === "none" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5813" className="symbol-355_5813">
                            <ListLeftpart
                                id="355_5814"
                                className="instance-355_5814"
                                type={"checkbox"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5815"
                                className="instance-355_5815"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "radiobutton" &&
                    right === "none" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5816" className="symbol-355_5816">
                            <ListLeftpart
                                id="355_5817"
                                className="instance-355_5817"
                                type={"radiobutton"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5818"
                                className="instance-355_5818"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "switch" &&
                    right === "none" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5819" className="symbol-355_5819">
                            <ListLeftpart
                                id="355_5820"
                                className="instance-355_5820"
                                type={"switch"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5821"
                                className="instance-355_5821"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "checkbox" &&
                    right === "none" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5822" className="symbol-355_5822">
                            <ListLeftpart
                                id="355_5823"
                                className="instance-355_5823"
                                type={"checkbox"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5824"
                                className="instance-355_5824"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "radiobutton" &&
                    right === "none" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5825" className="symbol-355_5825">
                            <ListLeftpart
                                id="355_5826"
                                className="instance-355_5826"
                                type={"radiobutton"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5827"
                                className="instance-355_5827"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "switch" &&
                    right === "none" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5828" className="symbol-355_5828">
                            <ListLeftpart
                                id="355_5829"
                                className="instance-355_5829"
                                type={"switch"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5830"
                                className="instance-355_5830"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "none" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5831" className="symbol-355_5831">
                            <ListBody
                                id="355_5832"
                                className="instance-355_5832"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5833"
                                className="instance-355_5833"
                                type={"icon"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "checkbox" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5834" className="symbol-355_5834">
                            <ListLeftpart
                                id="355_5835"
                                className="instance-355_5835"
                                type={"checkbox"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5836"
                                className="instance-355_5836"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5837"
                                className="instance-355_5837"
                                type={"icon"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "radiobutton" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5838" className="symbol-355_5838">
                            <ListLeftpart
                                id="355_5839"
                                className="instance-355_5839"
                                type={"radiobutton"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5840"
                                className="instance-355_5840"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5841"
                                className="instance-355_5841"
                                type={"icon"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "switch" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5842" className="symbol-355_5842">
                            <ListLeftpart
                                id="355_5843"
                                className="instance-355_5843"
                                type={"switch"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5844"
                                className="instance-355_5844"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5845"
                                className="instance-355_5845"
                                type={"icon"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "checkbox" &&
                    right === "icon" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_5846" className="symbol-355_5846">
                            <ListLeftpart
                                id="355_5847"
                                className="instance-355_5847"
                                instance_355_6433={
                                    "checkedtruedisabledfalseindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5848"
                                className="instance-355_5848"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5849"
                                className="instance-355_5849"
                                type={"icon"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "radiobutton" &&
                    right === "icon" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_5850" className="symbol-355_5850">
                            <ListLeftpart
                                id="355_5851"
                                className="instance-355_5851"
                                instance_355_6437={"checkedtruedisabledfalse"}
                                type={"radiobutton"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5852"
                                className="instance-355_5852"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5853"
                                className="instance-355_5853"
                                type={"icon"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "switch" &&
                    right === "icon" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_5854" className="symbol-355_5854">
                            <ListLeftpart
                                id="355_5855"
                                className="instance-355_5855"
                                instance_355_6441={
                                    "stateondisabledfalseintermediateoff"
                                }
                                type={"switch"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5856"
                                className="instance-355_5856"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5857"
                                className="instance-355_5857"
                                type={"icon"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "icon" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5858" className="symbol-355_5858">
                            <ListLeftpart
                                id="355_5859"
                                className="instance-355_5859"
                                type={"icon"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5860"
                                className="instance-355_5860"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5861"
                                className="instance-355_5861"
                                type={"icon"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "avatar" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5862" className="symbol-355_5862">
                            <ListLeftpart
                                id="355_5863"
                                className="instance-355_5863"
                                type={"avatar"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5864"
                                className="instance-355_5864"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5865"
                                className="instance-355_5865"
                                type={"icon"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "image" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5866" className="symbol-355_5866">
                            <ListLeftpart
                                id="355_5867"
                                className="instance-355_5867"
                                type={"image"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5868"
                                className="instance-355_5868"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5869"
                                className="instance-355_5869"
                                type={"icon"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "none" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5870" className="symbol-355_5870">
                            <ListBody
                                id="355_5871"
                                className="instance-355_5871"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5872"
                                className="instance-355_5872"
                                type={"icon"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "checkbox" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5873" className="symbol-355_5873">
                            <ListLeftpart
                                id="355_5874"
                                className="instance-355_5874"
                                type={"checkbox"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5875"
                                className="instance-355_5875"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5876"
                                className="instance-355_5876"
                                type={"icon"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "radiobutton" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5877" className="symbol-355_5877">
                            <ListLeftpart
                                id="355_5878"
                                className="instance-355_5878"
                                type={"radiobutton"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5879"
                                className="instance-355_5879"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5880"
                                className="instance-355_5880"
                                type={"icon"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "switch" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5881" className="symbol-355_5881">
                            <ListLeftpart
                                id="355_5882"
                                className="instance-355_5882"
                                type={"switch"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5883"
                                className="instance-355_5883"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5884"
                                className="instance-355_5884"
                                type={"icon"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "checkbox" &&
                    right === "icon" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_5885" className="symbol-355_5885">
                            <ListLeftpart
                                id="355_5886"
                                className="instance-355_5886"
                                instance_355_6435={
                                    "checkedtruedisabledfalseindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5887"
                                className="instance-355_5887"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5888"
                                className="instance-355_5888"
                                type={"icon"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "radiobutton" &&
                    right === "icon" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_5889" className="symbol-355_5889">
                            <ListLeftpart
                                id="355_5890"
                                className="instance-355_5890"
                                instance_355_6439={"checkedtruedisabledfalse"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5891"
                                className="instance-355_5891"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5892"
                                className="instance-355_5892"
                                type={"icon"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "switch" &&
                    right === "icon" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_5893" className="symbol-355_5893">
                            <ListLeftpart
                                id="355_5894"
                                className="instance-355_5894"
                                instance_355_6443={
                                    "stateondisabledfalseintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5895"
                                className="instance-355_5895"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5896"
                                className="instance-355_5896"
                                type={"icon"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "icon" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5897" className="symbol-355_5897">
                            <ListLeftpart
                                id="355_5898"
                                className="instance-355_5898"
                                type={"icon"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5899"
                                className="instance-355_5899"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5900"
                                className="instance-355_5900"
                                type={"icon"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "avatar" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5901" className="symbol-355_5901">
                            <ListLeftpart
                                id="355_5902"
                                className="instance-355_5902"
                                type={"avatar"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5903"
                                className="instance-355_5903"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5904"
                                className="instance-355_5904"
                                type={"icon"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "image" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5905" className="symbol-355_5905">
                            <ListLeftpart
                                id="355_5906"
                                className="instance-355_5906"
                                type={"image"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5907"
                                className="instance-355_5907"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5908"
                                className="instance-355_5908"
                                type={"icon"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "none" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_5909" className="symbol-355_5909">
                            <ListBody
                                id="355_5910"
                                className="instance-355_5910"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5911"
                                className="instance-355_5911"
                                type={"icon"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "checkbox" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_5912" className="symbol-355_5912">
                            <ListLeftpart
                                id="355_5913"
                                className="instance-355_5913"
                                instance_355_6433={
                                    "checkedfalsedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5914"
                                className="instance-355_5914"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5915"
                                className="instance-355_5915"
                                type={"icon"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "radiobutton" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_5916" className="symbol-355_5916">
                            <ListLeftpart
                                id="355_5917"
                                className="instance-355_5917"
                                instance_355_6437={"checkedfalsedisabledtrue"}
                                type={"radiobutton"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5918"
                                className="instance-355_5918"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5919"
                                className="instance-355_5919"
                                type={"icon"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "switch" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_5920" className="symbol-355_5920">
                            <ListLeftpart
                                id="355_5921"
                                className="instance-355_5921"
                                instance_355_6441={
                                    "stateoffdisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5922"
                                className="instance-355_5922"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5923"
                                className="instance-355_5923"
                                type={"icon"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "checkbox" &&
                    right === "icon" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_5924" className="symbol-355_5924">
                            <ListLeftpart
                                id="355_5925"
                                className="instance-355_5925"
                                instance_355_6433={
                                    "checkedtruedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5926"
                                className="instance-355_5926"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5927"
                                className="instance-355_5927"
                                type={"icon"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "radiobutton" &&
                    right === "icon" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_5928" className="symbol-355_5928">
                            <ListLeftpart
                                id="355_5929"
                                className="instance-355_5929"
                                instance_355_6437={"checkedtruedisabledtrue"}
                                type={"radiobutton"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5930"
                                className="instance-355_5930"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5931"
                                className="instance-355_5931"
                                type={"icon"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "switch" &&
                    right === "icon" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_5932" className="symbol-355_5932">
                            <ListLeftpart
                                id="355_5933"
                                className="instance-355_5933"
                                instance_355_6441={
                                    "stateondisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5934"
                                className="instance-355_5934"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5935"
                                className="instance-355_5935"
                                type={"icon"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "icon" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_5936" className="symbol-355_5936">
                            <ListLeftpart
                                id="355_5937"
                                className="instance-355_5937"
                                type={"icon"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5938"
                                className="instance-355_5938"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5939"
                                className="instance-355_5939"
                                type={"icon"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "avatar" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_5940" className="symbol-355_5940">
                            <ListLeftpart
                                id="355_5941"
                                className="instance-355_5941"
                                type={"avatar"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5942"
                                className="instance-355_5942"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5943"
                                className="instance-355_5943"
                                type={"icon"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "image" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_5944" className="symbol-355_5944">
                            <ListLeftpart
                                id="355_5945"
                                className="instance-355_5945"
                                type={"image"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5946"
                                className="instance-355_5946"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5947"
                                className="instance-355_5947"
                                type={"icon"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "none" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_5948" className="symbol-355_5948">
                            <ListBody
                                id="355_5949"
                                className="instance-355_5949"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                                subtitleText={`Text description for the sheet value, supplementing the title name`}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5950"
                                className="instance-355_5950"
                                type={"icon"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "checkbox" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_5951" className="symbol-355_5951">
                            <ListLeftpart
                                id="355_5952"
                                className="instance-355_5952"
                                instance_355_6435={
                                    "checkedfalsedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5953"
                                className="instance-355_5953"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5954"
                                className="instance-355_5954"
                                type={"icon"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "radiobutton" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_5955" className="symbol-355_5955">
                            <ListLeftpart
                                id="355_5956"
                                className="instance-355_5956"
                                instance_355_6439={"checkedfalsedisabledtrue"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5957"
                                className="instance-355_5957"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5958"
                                className="instance-355_5958"
                                type={"icon"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "switch" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_5959" className="symbol-355_5959">
                            <ListLeftpart
                                id="355_5960"
                                className="instance-355_5960"
                                instance_355_6443={
                                    "stateoffdisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5961"
                                className="instance-355_5961"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5962"
                                className="instance-355_5962"
                                type={"icon"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "checkbox" &&
                    right === "icon" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_5963" className="symbol-355_5963">
                            <ListLeftpart
                                id="355_5964"
                                className="instance-355_5964"
                                instance_355_6435={
                                    "checkedtruedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5965"
                                className="instance-355_5965"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5966"
                                className="instance-355_5966"
                                type={"icon"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "radiobutton" &&
                    right === "icon" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_5967" className="symbol-355_5967">
                            <ListLeftpart
                                id="355_5968"
                                className="instance-355_5968"
                                instance_355_6439={"checkedtruedisabledtrue"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5969"
                                className="instance-355_5969"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5970"
                                className="instance-355_5970"
                                type={"icon"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "switch" &&
                    right === "icon" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_5971" className="symbol-355_5971">
                            <ListLeftpart
                                id="355_5972"
                                className="instance-355_5972"
                                instance_355_6443={
                                    "stateondisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5973"
                                className="instance-355_5973"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5974"
                                className="instance-355_5974"
                                type={"icon"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "icon" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_5975" className="symbol-355_5975">
                            <ListLeftpart
                                id="355_5976"
                                className="instance-355_5976"
                                type={"icon"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5977"
                                className="instance-355_5977"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5978"
                                className="instance-355_5978"
                                type={"icon"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "avatar" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_5979" className="symbol-355_5979">
                            <ListLeftpart
                                id="355_5980"
                                className="instance-355_5980"
                                type={"avatar"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5981"
                                className="instance-355_5981"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5982"
                                className="instance-355_5982"
                                type={"icon"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "image" &&
                    right === "icon" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_5983" className="symbol-355_5983">
                            <ListLeftpart
                                id="355_5984"
                                className="instance-355_5984"
                                type={"image"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_5985"
                                className="instance-355_5985"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5986"
                                className="instance-355_5986"
                                type={"icon"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "none" &&
                    right === "checkbox" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5987" className="symbol-355_5987">
                            <ListBody
                                id="355_5988"
                                className="instance-355_5988"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5989"
                                className="instance-355_5989"
                                type={"checkbox"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "tag" &&
                    left === "none" &&
                    right === "checkbox" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5990" className="symbol-355_5990">
                            <ListBody
                                id="355_5991"
                                className="instance-355_5991"
                                content={"tag"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5992"
                                className="instance-355_5992"
                                type={"checkbox"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "tag" &&
                    left === "none" &&
                    right === "checkbox" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_5993" className="symbol-355_5993">
                            <ListBody
                                id="355_5994"
                                className="instance-355_5994"
                                content={"tag"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5995"
                                className="instance-355_5995"
                                type={"checkbox"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "tag" &&
                    left === "none" &&
                    right === "checkbox" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_5996" className="symbol-355_5996">
                            <ListBody
                                id="355_5997"
                                className="instance-355_5997"
                                instance_355_6478={
                                    "sizemstatedisabledselectedfalse"
                                }
                                content={"tag"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_5998"
                                className="instance-355_5998"
                                type={"checkbox"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "tag" &&
                    left === "none" &&
                    right === "radiobutton" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_5999" className="symbol-355_5999">
                            <ListBody
                                id="355_6000"
                                className="instance-355_6000"
                                content={"tag"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6001"
                                className="instance-355_6001"
                                type={"radiobutton"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "tag" &&
                    left === "none" &&
                    right === "radiobutton" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6002" className="symbol-355_6002">
                            <ListBody
                                id="355_6003"
                                className="instance-355_6003"
                                content={"tag"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6004"
                                className="instance-355_6004"
                                type={"radiobutton"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "tag" &&
                    left === "none" &&
                    right === "radiobutton" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6005" className="symbol-355_6005">
                            <ListBody
                                id="355_6006"
                                className="instance-355_6006"
                                instance_355_6478={
                                    "sizemstatedisabledselectedfalse"
                                }
                                content={"tag"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6007"
                                className="instance-355_6007"
                                type={"radiobutton"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "icon" &&
                    right === "checkbox" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6008" className="symbol-355_6008">
                            <ListLeftpart
                                id="355_6009"
                                className="instance-355_6009"
                                type={"icon"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6010"
                                className="instance-355_6010"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6011"
                                className="instance-355_6011"
                                type={"checkbox"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "avatar" &&
                    right === "checkbox" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6012" className="symbol-355_6012">
                            <ListLeftpart
                                id="355_6013"
                                className="instance-355_6013"
                                type={"avatar"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6014"
                                className="instance-355_6014"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6015"
                                className="instance-355_6015"
                                type={"checkbox"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "image" &&
                    right === "checkbox" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6016" className="symbol-355_6016">
                            <ListLeftpart
                                id="355_6017"
                                className="instance-355_6017"
                                type={"image"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6018"
                                className="instance-355_6018"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6019"
                                className="instance-355_6019"
                                type={"checkbox"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "none" &&
                    right === "checkbox" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6020" className="symbol-355_6020">
                            <ListBody
                                id="355_6021"
                                className="instance-355_6021"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6022"
                                className="instance-355_6022"
                                instance_355_6485={
                                    "checkedfalsedisabledfalseindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "icon" &&
                    right === "checkbox" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6023" className="symbol-355_6023">
                            <ListLeftpart
                                id="355_6024"
                                className="instance-355_6024"
                                type={"icon"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6025"
                                className="instance-355_6025"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6026"
                                className="instance-355_6026"
                                instance_355_6485={
                                    "checkedfalsedisabledfalseindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "avatar" &&
                    right === "checkbox" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6027" className="symbol-355_6027">
                            <ListLeftpart
                                id="355_6028"
                                className="instance-355_6028"
                                type={"avatar"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6029"
                                className="instance-355_6029"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6030"
                                className="instance-355_6030"
                                instance_355_6485={
                                    "checkedfalsedisabledfalseindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "image" &&
                    right === "checkbox" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6031" className="symbol-355_6031">
                            <ListLeftpart
                                id="355_6032"
                                className="instance-355_6032"
                                type={"image"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6033"
                                className="instance-355_6033"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6034"
                                className="instance-355_6034"
                                instance_355_6485={
                                    "checkedfalsedisabledfalseindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "none" &&
                    right === "checkbox" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6035" className="symbol-355_6035">
                            <ListBody
                                id="355_6036"
                                className="instance-355_6036"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6037"
                                className="instance-355_6037"
                                instance_355_6483={
                                    "checkedtruedisabledfalseindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "icon" &&
                    right === "checkbox" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6038" className="symbol-355_6038">
                            <ListLeftpart
                                id="355_6039"
                                className="instance-355_6039"
                                type={"icon"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6040"
                                className="instance-355_6040"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6041"
                                className="instance-355_6041"
                                instance_355_6483={
                                    "checkedtruedisabledfalseindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "avatar" &&
                    right === "checkbox" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6042" className="symbol-355_6042">
                            <ListLeftpart
                                id="355_6043"
                                className="instance-355_6043"
                                type={"avatar"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6044"
                                className="instance-355_6044"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6045"
                                className="instance-355_6045"
                                instance_355_6483={
                                    "checkedtruedisabledfalseindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "image" &&
                    right === "checkbox" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6046" className="symbol-355_6046">
                            <ListLeftpart
                                id="355_6047"
                                className="instance-355_6047"
                                type={"image"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6048"
                                className="instance-355_6048"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6049"
                                className="instance-355_6049"
                                instance_355_6483={
                                    "checkedtruedisabledfalseindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "none" &&
                    right === "checkbox" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6050" className="symbol-355_6050">
                            <ListBody
                                id="355_6051"
                                className="instance-355_6051"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6052"
                                className="instance-355_6052"
                                instance_355_6485={
                                    "checkedtruedisabledfalseindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "icon" &&
                    right === "checkbox" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6053" className="symbol-355_6053">
                            <ListLeftpart
                                id="355_6054"
                                className="instance-355_6054"
                                type={"icon"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6055"
                                className="instance-355_6055"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6056"
                                className="instance-355_6056"
                                instance_355_6485={
                                    "checkedtruedisabledfalseindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "avatar" &&
                    right === "checkbox" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6057" className="symbol-355_6057">
                            <ListLeftpart
                                id="355_6058"
                                className="instance-355_6058"
                                type={"avatar"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6059"
                                className="instance-355_6059"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6060"
                                className="instance-355_6060"
                                instance_355_6485={
                                    "checkedtruedisabledfalseindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "image" &&
                    right === "checkbox" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6061" className="symbol-355_6061">
                            <ListLeftpart
                                id="355_6062"
                                className="instance-355_6062"
                                type={"image"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6063"
                                className="instance-355_6063"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6064"
                                className="instance-355_6064"
                                instance_355_6485={
                                    "checkedtruedisabledfalseindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "none" &&
                    right === "checkbox" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6065" className="symbol-355_6065">
                            <ListBody
                                id="355_6066"
                                className="instance-355_6066"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6067"
                                className="instance-355_6067"
                                instance_355_6483={
                                    "checkedfalsedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "icon" &&
                    right === "checkbox" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6068" className="symbol-355_6068">
                            <ListLeftpart
                                id="355_6069"
                                className="instance-355_6069"
                                type={"icon"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6070"
                                className="instance-355_6070"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6071"
                                className="instance-355_6071"
                                instance_355_6483={
                                    "checkedfalsedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "avatar" &&
                    right === "checkbox" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6072" className="symbol-355_6072">
                            <ListLeftpart
                                id="355_6073"
                                className="instance-355_6073"
                                type={"avatar"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6074"
                                className="instance-355_6074"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6075"
                                className="instance-355_6075"
                                instance_355_6483={
                                    "checkedfalsedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "image" &&
                    right === "checkbox" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6076" className="symbol-355_6076">
                            <ListLeftpart
                                id="355_6077"
                                className="instance-355_6077"
                                type={"image"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6078"
                                className="instance-355_6078"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6079"
                                className="instance-355_6079"
                                instance_355_6483={
                                    "checkedfalsedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "none" &&
                    right === "checkbox" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6080" className="symbol-355_6080">
                            <ListBody
                                id="355_6081"
                                className="instance-355_6081"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6082"
                                className="instance-355_6082"
                                instance_355_6485={
                                    "checkedfalsedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "icon" &&
                    right === "checkbox" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6083" className="symbol-355_6083">
                            <ListLeftpart
                                id="355_6084"
                                className="instance-355_6084"
                                type={"icon"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6085"
                                className="instance-355_6085"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6086"
                                className="instance-355_6086"
                                instance_355_6485={
                                    "checkedfalsedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "avatar" &&
                    right === "checkbox" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6087" className="symbol-355_6087">
                            <ListLeftpart
                                id="355_6088"
                                className="instance-355_6088"
                                type={"avatar"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6089"
                                className="instance-355_6089"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6090"
                                className="instance-355_6090"
                                instance_355_6485={
                                    "checkedfalsedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "image" &&
                    right === "checkbox" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6091" className="symbol-355_6091">
                            <ListLeftpart
                                id="355_6092"
                                className="instance-355_6092"
                                type={"image"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6093"
                                className="instance-355_6093"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6094"
                                className="instance-355_6094"
                                instance_355_6485={
                                    "checkedfalsedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "none" &&
                    right === "checkbox" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6095" className="symbol-355_6095">
                            <ListBody
                                id="355_6096"
                                className="instance-355_6096"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6097"
                                className="instance-355_6097"
                                instance_355_6483={
                                    "checkedtruedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "icon" &&
                    right === "checkbox" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6098" className="symbol-355_6098">
                            <ListLeftpart
                                id="355_6099"
                                className="instance-355_6099"
                                type={"icon"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6100"
                                className="instance-355_6100"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6101"
                                className="instance-355_6101"
                                instance_355_6483={
                                    "checkedtruedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "avatar" &&
                    right === "checkbox" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6102" className="symbol-355_6102">
                            <ListLeftpart
                                id="355_6103"
                                className="instance-355_6103"
                                type={"avatar"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6104"
                                className="instance-355_6104"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6105"
                                className="instance-355_6105"
                                instance_355_6483={
                                    "checkedtruedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "image" &&
                    right === "checkbox" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6106" className="symbol-355_6106">
                            <ListLeftpart
                                id="355_6107"
                                className="instance-355_6107"
                                type={"image"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6108"
                                className="instance-355_6108"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6109"
                                className="instance-355_6109"
                                instance_355_6483={
                                    "checkedtruedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "none" &&
                    right === "checkbox" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6110" className="symbol-355_6110">
                            <ListBody
                                id="355_6111"
                                className="instance-355_6111"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6112"
                                className="instance-355_6112"
                                instance_355_6485={
                                    "checkedtruedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "icon" &&
                    right === "checkbox" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6113" className="symbol-355_6113">
                            <ListLeftpart
                                id="355_6114"
                                className="instance-355_6114"
                                type={"icon"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6115"
                                className="instance-355_6115"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6116"
                                className="instance-355_6116"
                                instance_355_6485={
                                    "checkedtruedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "avatar" &&
                    right === "checkbox" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6117" className="symbol-355_6117">
                            <ListLeftpart
                                id="355_6118"
                                className="instance-355_6118"
                                type={"avatar"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6119"
                                className="instance-355_6119"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6120"
                                className="instance-355_6120"
                                instance_355_6485={
                                    "checkedtruedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "image" &&
                    right === "checkbox" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6121" className="symbol-355_6121">
                            <ListLeftpart
                                id="355_6122"
                                className="instance-355_6122"
                                type={"image"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6123"
                                className="instance-355_6123"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6124"
                                className="instance-355_6124"
                                instance_355_6485={
                                    "checkedtruedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "none" &&
                    right === "radiobutton" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6125" className="symbol-355_6125">
                            <ListBody
                                id="355_6126"
                                className="instance-355_6126"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6127"
                                className="instance-355_6127"
                                type={"radiobutton"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "icon" &&
                    right === "radiobutton" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6128" className="symbol-355_6128">
                            <ListLeftpart
                                id="355_6129"
                                className="instance-355_6129"
                                type={"icon"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6130"
                                className="instance-355_6130"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6131"
                                className="instance-355_6131"
                                type={"radiobutton"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "avatar" &&
                    right === "radiobutton" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6132" className="symbol-355_6132">
                            <ListLeftpart
                                id="355_6133"
                                className="instance-355_6133"
                                type={"avatar"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6134"
                                className="instance-355_6134"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6135"
                                className="instance-355_6135"
                                type={"radiobutton"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "image" &&
                    right === "radiobutton" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6136" className="symbol-355_6136">
                            <ListLeftpart
                                id="355_6137"
                                className="instance-355_6137"
                                type={"image"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6138"
                                className="instance-355_6138"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6139"
                                className="instance-355_6139"
                                type={"radiobutton"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "none" &&
                    right === "radiobutton" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6140" className="symbol-355_6140">
                            <ListBody
                                id="355_6141"
                                className="instance-355_6141"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6142"
                                className="instance-355_6142"
                                instance_355_6497={"checkedfalsedisabledfalse"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "icon" &&
                    right === "radiobutton" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6143" className="symbol-355_6143">
                            <ListLeftpart
                                id="355_6144"
                                className="instance-355_6144"
                                type={"icon"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6145"
                                className="instance-355_6145"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6146"
                                className="instance-355_6146"
                                instance_355_6497={"checkedfalsedisabledfalse"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "avatar" &&
                    right === "radiobutton" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6147" className="symbol-355_6147">
                            <ListLeftpart
                                id="355_6148"
                                className="instance-355_6148"
                                type={"avatar"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6149"
                                className="instance-355_6149"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6150"
                                className="instance-355_6150"
                                instance_355_6497={"checkedfalsedisabledfalse"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "image" &&
                    right === "radiobutton" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6151" className="symbol-355_6151">
                            <ListLeftpart
                                id="355_6152"
                                className="instance-355_6152"
                                type={"image"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6153"
                                className="instance-355_6153"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6154"
                                className="instance-355_6154"
                                instance_355_6497={"checkedfalsedisabledfalse"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "none" &&
                    right === "radiobutton" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6155" className="symbol-355_6155">
                            <ListBody
                                id="355_6156"
                                className="instance-355_6156"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6157"
                                className="instance-355_6157"
                                instance_355_6495={"checkedtruedisabledfalse"}
                                type={"radiobutton"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "icon" &&
                    right === "radiobutton" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6158" className="symbol-355_6158">
                            <ListLeftpart
                                id="355_6159"
                                className="instance-355_6159"
                                type={"icon"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6160"
                                className="instance-355_6160"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6161"
                                className="instance-355_6161"
                                instance_355_6495={"checkedtruedisabledfalse"}
                                type={"radiobutton"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "avatar" &&
                    right === "radiobutton" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6162" className="symbol-355_6162">
                            <ListLeftpart
                                id="355_6163"
                                className="instance-355_6163"
                                type={"avatar"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6164"
                                className="instance-355_6164"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6165"
                                className="instance-355_6165"
                                instance_355_6495={"checkedtruedisabledfalse"}
                                type={"radiobutton"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "image" &&
                    right === "radiobutton" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6166" className="symbol-355_6166">
                            <ListLeftpart
                                id="355_6167"
                                className="instance-355_6167"
                                type={"image"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6168"
                                className="instance-355_6168"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6169"
                                className="instance-355_6169"
                                instance_355_6495={"checkedtruedisabledfalse"}
                                type={"radiobutton"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "none" &&
                    right === "radiobutton" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6170" className="symbol-355_6170">
                            <ListBody
                                id="355_6171"
                                className="instance-355_6171"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6172"
                                className="instance-355_6172"
                                instance_355_6497={"checkedtruedisabledfalse"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "icon" &&
                    right === "radiobutton" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6173" className="symbol-355_6173">
                            <ListLeftpart
                                id="355_6174"
                                className="instance-355_6174"
                                type={"icon"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6175"
                                className="instance-355_6175"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6176"
                                className="instance-355_6176"
                                instance_355_6497={"checkedtruedisabledfalse"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "avatar" &&
                    right === "radiobutton" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6177" className="symbol-355_6177">
                            <ListLeftpart
                                id="355_6178"
                                className="instance-355_6178"
                                type={"avatar"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6179"
                                className="instance-355_6179"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6180"
                                className="instance-355_6180"
                                instance_355_6497={"checkedtruedisabledfalse"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "image" &&
                    right === "radiobutton" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6181" className="symbol-355_6181">
                            <ListLeftpart
                                id="355_6182"
                                className="instance-355_6182"
                                type={"image"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6183"
                                className="instance-355_6183"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6184"
                                className="instance-355_6184"
                                instance_355_6497={"checkedtruedisabledfalse"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "none" &&
                    right === "radiobutton" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6185" className="symbol-355_6185">
                            <ListBody
                                id="355_6186"
                                className="instance-355_6186"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6187"
                                className="instance-355_6187"
                                instance_355_6495={"checkedfalsedisabledtrue"}
                                type={"radiobutton"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "icon" &&
                    right === "radiobutton" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6188" className="symbol-355_6188">
                            <ListLeftpart
                                id="355_6189"
                                className="instance-355_6189"
                                type={"icon"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6190"
                                className="instance-355_6190"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6191"
                                className="instance-355_6191"
                                instance_355_6495={"checkedfalsedisabledtrue"}
                                type={"radiobutton"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "avatar" &&
                    right === "radiobutton" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6192" className="symbol-355_6192">
                            <ListLeftpart
                                id="355_6193"
                                className="instance-355_6193"
                                type={"avatar"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6194"
                                className="instance-355_6194"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6195"
                                className="instance-355_6195"
                                instance_355_6495={"checkedfalsedisabledtrue"}
                                type={"radiobutton"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "image" &&
                    right === "radiobutton" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6196" className="symbol-355_6196">
                            <ListLeftpart
                                id="355_6197"
                                className="instance-355_6197"
                                type={"image"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6198"
                                className="instance-355_6198"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6199"
                                className="instance-355_6199"
                                instance_355_6495={"checkedfalsedisabledtrue"}
                                type={"radiobutton"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "none" &&
                    right === "radiobutton" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6200" className="symbol-355_6200">
                            <ListBody
                                id="355_6201"
                                className="instance-355_6201"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6202"
                                className="instance-355_6202"
                                instance_355_6497={"checkedfalsedisabledtrue"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "icon" &&
                    right === "radiobutton" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6203" className="symbol-355_6203">
                            <ListLeftpart
                                id="355_6204"
                                className="instance-355_6204"
                                type={"icon"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6205"
                                className="instance-355_6205"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6206"
                                className="instance-355_6206"
                                instance_355_6497={"checkedfalsedisabledtrue"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "avatar" &&
                    right === "radiobutton" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6207" className="symbol-355_6207">
                            <ListLeftpart
                                id="355_6208"
                                className="instance-355_6208"
                                type={"avatar"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6209"
                                className="instance-355_6209"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6210"
                                className="instance-355_6210"
                                instance_355_6497={"checkedfalsedisabledtrue"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "image" &&
                    right === "radiobutton" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6211" className="symbol-355_6211">
                            <ListLeftpart
                                id="355_6212"
                                className="instance-355_6212"
                                type={"image"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6213"
                                className="instance-355_6213"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6214"
                                className="instance-355_6214"
                                instance_355_6497={"checkedfalsedisabledtrue"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "none" &&
                    right === "radiobutton" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6215" className="symbol-355_6215">
                            <ListBody
                                id="355_6216"
                                className="instance-355_6216"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6217"
                                className="instance-355_6217"
                                instance_355_6495={"checkedtruedisabledtrue"}
                                type={"radiobutton"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "icon" &&
                    right === "radiobutton" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6218" className="symbol-355_6218">
                            <ListLeftpart
                                id="355_6219"
                                className="instance-355_6219"
                                type={"icon"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6220"
                                className="instance-355_6220"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6221"
                                className="instance-355_6221"
                                instance_355_6495={"checkedtruedisabledtrue"}
                                type={"radiobutton"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "avatar" &&
                    right === "radiobutton" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6222" className="symbol-355_6222">
                            <ListLeftpart
                                id="355_6223"
                                className="instance-355_6223"
                                type={"avatar"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6224"
                                className="instance-355_6224"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6225"
                                className="instance-355_6225"
                                instance_355_6495={"checkedtruedisabledtrue"}
                                type={"radiobutton"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "image" &&
                    right === "radiobutton" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6226" className="symbol-355_6226">
                            <ListLeftpart
                                id="355_6227"
                                className="instance-355_6227"
                                type={"image"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6228"
                                className="instance-355_6228"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6229"
                                className="instance-355_6229"
                                instance_355_6495={"checkedtruedisabledtrue"}
                                type={"radiobutton"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "none" &&
                    right === "radiobutton" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6230" className="symbol-355_6230">
                            <ListBody
                                id="355_6231"
                                className="instance-355_6231"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6232"
                                className="instance-355_6232"
                                instance_355_6497={"checkedtruedisabledtrue"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "icon" &&
                    right === "radiobutton" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6233" className="symbol-355_6233">
                            <ListLeftpart
                                id="355_6234"
                                className="instance-355_6234"
                                type={"icon"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6235"
                                className="instance-355_6235"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6236"
                                className="instance-355_6236"
                                instance_355_6497={"checkedtruedisabledtrue"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "avatar" &&
                    right === "radiobutton" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6237" className="symbol-355_6237">
                            <ListLeftpart
                                id="355_6238"
                                className="instance-355_6238"
                                type={"avatar"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6239"
                                className="instance-355_6239"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6240"
                                className="instance-355_6240"
                                instance_355_6497={"checkedtruedisabledtrue"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "image" &&
                    right === "radiobutton" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6241" className="symbol-355_6241">
                            <ListLeftpart
                                id="355_6242"
                                className="instance-355_6242"
                                type={"image"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6243"
                                className="instance-355_6243"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6244"
                                className="instance-355_6244"
                                instance_355_6497={"checkedtruedisabledtrue"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "none" &&
                    right === "switch" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6245" className="symbol-355_6245">
                            <ListBody
                                id="355_6246"
                                className="instance-355_6246"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6247"
                                className="instance-355_6247"
                                type={"switch"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "icon" &&
                    right === "switch" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6248" className="symbol-355_6248">
                            <ListLeftpart
                                id="355_6249"
                                className="instance-355_6249"
                                type={"icon"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6250"
                                className="instance-355_6250"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6251"
                                className="instance-355_6251"
                                type={"switch"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "avatar" &&
                    right === "switch" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6252" className="symbol-355_6252">
                            <ListLeftpart
                                id="355_6253"
                                className="instance-355_6253"
                                type={"avatar"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6254"
                                className="instance-355_6254"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6255"
                                className="instance-355_6255"
                                type={"switch"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "image" &&
                    right === "switch" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6256" className="symbol-355_6256">
                            <ListLeftpart
                                id="355_6257"
                                className="instance-355_6257"
                                type={"image"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6258"
                                className="instance-355_6258"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6259"
                                className="instance-355_6259"
                                type={"switch"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "none" &&
                    right === "switch" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6260" className="symbol-355_6260">
                            <ListBody
                                id="355_6261"
                                className="instance-355_6261"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6262"
                                className="instance-355_6262"
                                instance_355_6489={
                                    "stateoffdisabledfalseintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "icon" &&
                    right === "switch" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6263" className="symbol-355_6263">
                            <ListLeftpart
                                id="355_6264"
                                className="instance-355_6264"
                                type={"icon"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6265"
                                className="instance-355_6265"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6266"
                                className="instance-355_6266"
                                instance_355_6489={
                                    "stateoffdisabledfalseintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "avatar" &&
                    right === "switch" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6267" className="symbol-355_6267">
                            <ListLeftpart
                                id="355_6268"
                                className="instance-355_6268"
                                type={"avatar"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6269"
                                className="instance-355_6269"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6270"
                                className="instance-355_6270"
                                instance_355_6489={
                                    "stateoffdisabledfalseintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "image" &&
                    right === "switch" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6271" className="symbol-355_6271">
                            <ListLeftpart
                                id="355_6272"
                                className="instance-355_6272"
                                type={"image"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6273"
                                className="instance-355_6273"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6274"
                                className="instance-355_6274"
                                instance_355_6489={
                                    "stateoffdisabledfalseintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "none" &&
                    right === "switch" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6275" className="symbol-355_6275">
                            <ListBody
                                id="355_6276"
                                className="instance-355_6276"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6277"
                                className="instance-355_6277"
                                instance_355_6487={
                                    "stateondisabledfalseintermediateoff"
                                }
                                type={"switch"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "icon" &&
                    right === "switch" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6278" className="symbol-355_6278">
                            <ListLeftpart
                                id="355_6279"
                                className="instance-355_6279"
                                type={"icon"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6280"
                                className="instance-355_6280"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6281"
                                className="instance-355_6281"
                                instance_355_6487={
                                    "stateondisabledfalseintermediateoff"
                                }
                                type={"switch"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "avatar" &&
                    right === "switch" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6282" className="symbol-355_6282">
                            <ListLeftpart
                                id="355_6283"
                                className="instance-355_6283"
                                type={"avatar"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6284"
                                className="instance-355_6284"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6285"
                                className="instance-355_6285"
                                instance_355_6487={
                                    "stateondisabledfalseintermediateoff"
                                }
                                type={"switch"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "image" &&
                    right === "switch" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6286" className="symbol-355_6286">
                            <ListLeftpart
                                id="355_6287"
                                className="instance-355_6287"
                                type={"image"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6288"
                                className="instance-355_6288"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6289"
                                className="instance-355_6289"
                                instance_355_6487={
                                    "stateondisabledfalseintermediateoff"
                                }
                                type={"switch"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "none" &&
                    right === "switch" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6290" className="symbol-355_6290">
                            <ListBody
                                id="355_6291"
                                className="instance-355_6291"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6292"
                                className="instance-355_6292"
                                instance_355_6489={
                                    "stateondisabledfalseintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "icon" &&
                    right === "switch" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6293" className="symbol-355_6293">
                            <ListLeftpart
                                id="355_6294"
                                className="instance-355_6294"
                                type={"icon"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6295"
                                className="instance-355_6295"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6296"
                                className="instance-355_6296"
                                instance_355_6489={
                                    "stateondisabledfalseintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "avatar" &&
                    right === "switch" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6297" className="symbol-355_6297">
                            <ListLeftpart
                                id="355_6298"
                                className="instance-355_6298"
                                type={"avatar"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6299"
                                className="instance-355_6299"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6300"
                                className="instance-355_6300"
                                instance_355_6489={
                                    "stateondisabledfalseintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "image" &&
                    right === "switch" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6301" className="symbol-355_6301">
                            <ListLeftpart
                                id="355_6302"
                                className="instance-355_6302"
                                type={"image"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6303"
                                className="instance-355_6303"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6304"
                                className="instance-355_6304"
                                instance_355_6489={
                                    "stateondisabledfalseintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "none" &&
                    right === "switch" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6305" className="symbol-355_6305">
                            <ListBody
                                id="355_6306"
                                className="instance-355_6306"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6307"
                                className="instance-355_6307"
                                instance_355_6487={
                                    "stateoffdisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "icon" &&
                    right === "switch" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6308" className="symbol-355_6308">
                            <ListLeftpart
                                id="355_6309"
                                className="instance-355_6309"
                                type={"icon"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6310"
                                className="instance-355_6310"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6311"
                                className="instance-355_6311"
                                instance_355_6487={
                                    "stateoffdisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "avatar" &&
                    right === "switch" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6312" className="symbol-355_6312">
                            <ListLeftpart
                                id="355_6313"
                                className="instance-355_6313"
                                type={"avatar"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6314"
                                className="instance-355_6314"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6315"
                                className="instance-355_6315"
                                instance_355_6487={
                                    "stateoffdisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "image" &&
                    right === "switch" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6316" className="symbol-355_6316">
                            <ListLeftpart
                                id="355_6317"
                                className="instance-355_6317"
                                type={"image"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6318"
                                className="instance-355_6318"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6319"
                                className="instance-355_6319"
                                instance_355_6487={
                                    "stateoffdisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "none" &&
                    right === "switch" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6320" className="symbol-355_6320">
                            <ListBody
                                id="355_6321"
                                className="instance-355_6321"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6322"
                                className="instance-355_6322"
                                instance_355_6489={
                                    "stateoffdisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "icon" &&
                    right === "switch" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6323" className="symbol-355_6323">
                            <ListLeftpart
                                id="355_6324"
                                className="instance-355_6324"
                                type={"icon"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6325"
                                className="instance-355_6325"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6326"
                                className="instance-355_6326"
                                instance_355_6489={
                                    "stateoffdisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "avatar" &&
                    right === "switch" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6327" className="symbol-355_6327">
                            <ListLeftpart
                                id="355_6328"
                                className="instance-355_6328"
                                type={"avatar"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6329"
                                className="instance-355_6329"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6330"
                                className="instance-355_6330"
                                instance_355_6489={
                                    "stateoffdisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "image" &&
                    right === "switch" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6331" className="symbol-355_6331">
                            <ListLeftpart
                                id="355_6332"
                                className="instance-355_6332"
                                type={"image"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6333"
                                className="instance-355_6333"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6334"
                                className="instance-355_6334"
                                instance_355_6489={
                                    "stateoffdisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "none" &&
                    right === "switch" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6335" className="symbol-355_6335">
                            <ListBody
                                id="355_6336"
                                className="instance-355_6336"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6337"
                                className="instance-355_6337"
                                instance_355_6487={
                                    "stateondisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "icon" &&
                    right === "switch" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6338" className="symbol-355_6338">
                            <ListLeftpart
                                id="355_6339"
                                className="instance-355_6339"
                                type={"icon"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6340"
                                className="instance-355_6340"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6341"
                                className="instance-355_6341"
                                instance_355_6487={
                                    "stateondisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "avatar" &&
                    right === "switch" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6342" className="symbol-355_6342">
                            <ListLeftpart
                                id="355_6343"
                                className="instance-355_6343"
                                type={"avatar"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6344"
                                className="instance-355_6344"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6345"
                                className="instance-355_6345"
                                instance_355_6487={
                                    "stateondisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "image" &&
                    right === "switch" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6346" className="symbol-355_6346">
                            <ListLeftpart
                                id="355_6347"
                                className="instance-355_6347"
                                type={"image"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6348"
                                className="instance-355_6348"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6349"
                                className="instance-355_6349"
                                instance_355_6487={
                                    "stateondisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"center"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "none" &&
                    right === "switch" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6350" className="symbol-355_6350">
                            <ListBody
                                id="355_6351"
                                className="instance-355_6351"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6352"
                                className="instance-355_6352"
                                instance_355_6489={
                                    "stateondisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "icon" &&
                    right === "switch" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6353" className="symbol-355_6353">
                            <ListLeftpart
                                id="355_6354"
                                className="instance-355_6354"
                                type={"icon"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6355"
                                className="instance-355_6355"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6356"
                                className="instance-355_6356"
                                instance_355_6489={
                                    "stateondisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "avatar" &&
                    right === "switch" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6357" className="symbol-355_6357">
                            <ListLeftpart
                                id="355_6358"
                                className="instance-355_6358"
                                type={"avatar"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6359"
                                className="instance-355_6359"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6360"
                                className="instance-355_6360"
                                instance_355_6489={
                                    "stateondisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "image" &&
                    right === "switch" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6361" className="symbol-355_6361">
                            <ListLeftpart
                                id="355_6362"
                                className="instance-355_6362"
                                type={"image"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6363"
                                className="instance-355_6363"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                            <ListRightpart0
                                id="355_6364"
                                className="instance-355_6364"
                                instance_355_6489={
                                    "stateondisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListRightpart0>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "checkbox" &&
                    right === "none" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6365" className="symbol-355_6365">
                            <ListLeftpart
                                id="355_6366"
                                className="instance-355_6366"
                                instance_355_6433={
                                    "checkedtruedisabledfalseindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6367"
                                className="instance-355_6367"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "switch" &&
                    right === "none" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6368" className="symbol-355_6368">
                            <ListLeftpart
                                id="355_6369"
                                className="instance-355_6369"
                                instance_355_6441={
                                    "stateondisabledfalseintermediateoff"
                                }
                                type={"switch"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6370"
                                className="instance-355_6370"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "radiobutton" &&
                    right === "none" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6371" className="symbol-355_6371">
                            <ListLeftpart
                                id="355_6372"
                                className="instance-355_6372"
                                instance_355_6437={"checkedtruedisabledfalse"}
                                type={"radiobutton"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6373"
                                className="instance-355_6373"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "checkbox" &&
                    right === "none" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6374" className="symbol-355_6374">
                            <ListLeftpart
                                id="355_6375"
                                className="instance-355_6375"
                                instance_355_6435={
                                    "checkedtruedisabledfalseindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6376"
                                className="instance-355_6376"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "radiobutton" &&
                    right === "none" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6377" className="symbol-355_6377">
                            <ListLeftpart
                                id="355_6378"
                                className="instance-355_6378"
                                instance_355_6439={"checkedtruedisabledfalse"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6379"
                                className="instance-355_6379"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "switch" &&
                    right === "none" &&
                    checked === "true" &&
                    disabled === "false" && (
                        <div id="355_6380" className="symbol-355_6380">
                            <ListLeftpart
                                id="355_6381"
                                className="instance-355_6381"
                                instance_355_6443={
                                    "stateondisabledfalseintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6382"
                                className="instance-355_6382"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "checkbox" &&
                    right === "none" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6383" className="symbol-355_6383">
                            <ListLeftpart
                                id="355_6384"
                                className="instance-355_6384"
                                instance_355_6433={
                                    "checkedtruedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6385"
                                className="instance-355_6385"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "radiobutton" &&
                    right === "none" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6386" className="symbol-355_6386">
                            <ListLeftpart
                                id="355_6387"
                                className="instance-355_6387"
                                instance_355_6437={"checkedtruedisabledtrue"}
                                type={"radiobutton"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6388"
                                className="instance-355_6388"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "switch" &&
                    right === "none" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6389" className="symbol-355_6389">
                            <ListLeftpart
                                id="355_6390"
                                className="instance-355_6390"
                                instance_355_6441={
                                    "stateondisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6391"
                                className="instance-355_6391"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "checkbox" &&
                    right === "none" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6392" className="symbol-355_6392">
                            <ListLeftpart
                                id="355_6393"
                                className="instance-355_6393"
                                instance_355_6435={
                                    "checkedtruedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6394"
                                className="instance-355_6394"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "radiobutton" &&
                    right === "none" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6395" className="symbol-355_6395">
                            <ListLeftpart
                                id="355_6396"
                                className="instance-355_6396"
                                instance_355_6439={"checkedtruedisabledtrue"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6397"
                                className="instance-355_6397"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "switch" &&
                    right === "none" &&
                    checked === "true" &&
                    disabled === "true" && (
                        <div id="355_6398" className="symbol-355_6398">
                            <ListLeftpart
                                id="355_6399"
                                className="instance-355_6399"
                                instance_355_6443={
                                    "stateondisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6400"
                                className="instance-355_6400"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "checkbox" &&
                    right === "none" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6401" className="symbol-355_6401">
                            <ListLeftpart
                                id="355_6402"
                                className="instance-355_6402"
                                instance_355_6433={
                                    "checkedfalsedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6403"
                                className="instance-355_6403"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "switch" &&
                    right === "none" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6404" className="symbol-355_6404">
                            <ListLeftpart
                                id="355_6405"
                                className="instance-355_6405"
                                instance_355_6441={
                                    "stateoffdisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6406"
                                className="instance-355_6406"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "radiobutton" &&
                    right === "none" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6407" className="symbol-355_6407">
                            <ListLeftpart
                                id="355_6408"
                                className="instance-355_6408"
                                instance_355_6437={"checkedfalsedisabledtrue"}
                                type={"radiobutton"}
                                align={"center"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6409"
                                className="instance-355_6409"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "checkbox" &&
                    right === "none" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6410" className="symbol-355_6410">
                            <ListLeftpart
                                id="355_6411"
                                className="instance-355_6411"
                                instance_355_6435={
                                    "checkedfalsedisabledtrueindeterminatefalse"
                                }
                                type={"checkbox"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6412"
                                className="instance-355_6412"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "radiobutton" &&
                    right === "none" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6413" className="symbol-355_6413">
                            <ListLeftpart
                                id="355_6414"
                                className="instance-355_6414"
                                instance_355_6439={"checkedfalsedisabledtrue"}
                                type={"radiobutton"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6415"
                                className="instance-355_6415"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "switch" &&
                    right === "none" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6416" className="symbol-355_6416">
                            <ListLeftpart
                                id="355_6417"
                                className="instance-355_6417"
                                instance_355_6443={
                                    "stateoffdisabledtrueintermediateoff"
                                }
                                type={"switch"}
                                align={"top"}
                            ></ListLeftpart>
                            <ListBody
                                id="355_6418"
                                className="instance-355_6418"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "none" &&
                    right === "none" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6419" className="symbol-355_6419">
                            <ListBody
                                id="355_6420"
                                className="instance-355_6420"
                                content={"text 1-2 line"}
                                state={"default"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "none" &&
                    right === "none" &&
                    checked === "false" &&
                    disabled === "false" && (
                        <div id="355_6421" className="symbol-355_6421">
                            <ListBody
                                id="355_6422"
                                className="instance-355_6422"
                                content={"text 3+ line"}
                                state={"default"}
                                selected={"false"}
                                visible_6220_326={true}
                            ></ListBody>
                        </div>
                    )}
                {content === "1 line" &&
                    left === "none" &&
                    right === "none" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6423" className="symbol-355_6423">
                            <ListBody
                                id="355_6424"
                                className="instance-355_6424"
                                content={"text 1-2 line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
                {content === "2+ lines" &&
                    left === "none" &&
                    right === "none" &&
                    checked === "false" &&
                    disabled === "true" && (
                        <div id="355_6425" className="symbol-355_6425">
                            <ListBody
                                id="355_6426"
                                className="instance-355_6426"
                                content={"text 3+ line"}
                                state={"disabled"}
                                selected={"false"}
                            ></ListBody>
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Listitems;
