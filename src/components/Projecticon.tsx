import IconFontAwesomeFreeSolidPpaw from "@/components/iconfontawesomefreesolidppaw";
import IconFontAwesomeFreeSolidFfeatheralt from "@/components/iconfontawesomefreesolidffeatheralt";
import RatingRatingFill from "@/components/ratingratingfill";
import "@/styles/Projecticon.css";
interface projecticonProps {
    Size?: string;
    form?: string;
    State?: string;
    Color?: string;
    Favorites?: string;
    id?: string;
    className?: string;
}
const Projecticon = (props: projecticonProps) => {
    const { Size, form, State, Color, Favorites, id, className = "" } = props;

    return (
        <div className={`component-2_24295 ${className}`} id={id}>
            <div id="2_24295" className="symbol-2_24295">
                {Size === "24" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Violet" &&
                    Favorites === "OFF" && (
                        <div id="2_24296" className="symbol-2_24296">
                            <p id="2_24297" className="paragraph-2_24297">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Violet" &&
                    Favorites === "OFF" && (
                        <div id="2_24298" className="symbol-2_24298">
                            <p id="2_24299" className="paragraph-2_24299">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Violet" &&
                    Favorites === "OFF" && (
                        <div id="2_24300" className="symbol-2_24300">
                            <p id="2_24301" className="paragraph-2_24301">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Violet" &&
                    Favorites === "OFF" && (
                        <div id="2_24302" className="symbol-2_24302">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24303"
                                className="instance-2_24303"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Violet" &&
                    Favorites === "OFF" && (
                        <div id="2_24304" className="symbol-2_24304">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24305"
                                className="instance-2_24305"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Violet" &&
                    Favorites === "OFF" && (
                        <div id="2_24306" className="symbol-2_24306">
                            <div
                                id="2_24307"
                                className="instance-2_24307"
                                instance_2_24291={
                                    "IconFontAwesomeFreeSolidFfeatheralt"
                                }
                            >
                                <IconFontAwesomeFreeSolidFfeatheralt id="2_24307"></IconFontAwesomeFreeSolidFfeatheralt>
                                <IconFontAwesomeFreeSolidPpaw id="2_24307"></IconFontAwesomeFreeSolidPpaw>
                            </div>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Violet" &&
                    Favorites === "ON" && (
                        <div id="2_24308" className="symbol-2_24308">
                            <p id="2_24309" className="paragraph-2_24309">
                                {"П"}
                            </p>
                            <div id="2_24310" className="frame-2_24310">
                                <RatingRatingFill
                                    id="2_24311"
                                    className="instance-2_24311"
                                ></RatingRatingFill>
                            </div>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Violet" &&
                    Favorites === "ON" && (
                        <div id="2_24312" className="symbol-2_24312">
                            <p id="2_24313" className="paragraph-2_24313">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24314"
                                className="instance-2_24314"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Violet" &&
                    Favorites === "ON" && (
                        <div id="2_24315" className="symbol-2_24315">
                            <p id="2_24316" className="paragraph-2_24316">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24317"
                                className="instance-2_24317"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Violet" &&
                    Favorites === "ON" && (
                        <div id="2_24318" className="symbol-2_24318">
                            <RatingRatingFill
                                id="2_24319"
                                className="instance-2_24319"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24320"
                                className="instance-2_24320"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Violet" &&
                    Favorites === "ON" && (
                        <div id="2_24321" className="symbol-2_24321">
                            <RatingRatingFill
                                id="2_24322"
                                className="instance-2_24322"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24323"
                                className="instance-2_24323"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Violet" &&
                    Favorites === "ON" && (
                        <div id="2_24324" className="symbol-2_24324">
                            <RatingRatingFill
                                id="2_24325"
                                className="instance-2_24325"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24326"
                                className="instance-2_24326"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Grey" &&
                    Favorites === "OFF" && (
                        <div id="2_24327" className="symbol-2_24327">
                            <p id="2_24328" className="paragraph-2_24328">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Grey" &&
                    Favorites === "OFF" && (
                        <div id="2_24329" className="symbol-2_24329">
                            <p id="2_24330" className="paragraph-2_24330">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Grey" &&
                    Favorites === "OFF" && (
                        <div id="2_24331" className="symbol-2_24331">
                            <p id="2_24332" className="paragraph-2_24332">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Grey" &&
                    Favorites === "OFF" && (
                        <div id="2_24333" className="symbol-2_24333">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24334"
                                className="instance-2_24334"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Grey" &&
                    Favorites === "OFF" && (
                        <div id="2_24335" className="symbol-2_24335">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24336"
                                className="instance-2_24336"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Grey" &&
                    Favorites === "OFF" && (
                        <div id="2_24337" className="symbol-2_24337">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24338"
                                className="instance-2_24338"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Grey" &&
                    Favorites === "ON" && (
                        <div id="2_24339" className="symbol-2_24339">
                            <p id="2_24340" className="paragraph-2_24340">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24341"
                                className="instance-2_24341"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Grey" &&
                    Favorites === "ON" && (
                        <div id="2_24342" className="symbol-2_24342">
                            <p id="2_24343" className="paragraph-2_24343">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24344"
                                className="instance-2_24344"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Grey" &&
                    Favorites === "ON" && (
                        <div id="2_24345" className="symbol-2_24345">
                            <p id="2_24346" className="paragraph-2_24346">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24347"
                                className="instance-2_24347"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Grey" &&
                    Favorites === "ON" && (
                        <div id="2_24348" className="symbol-2_24348">
                            <RatingRatingFill
                                id="2_24349"
                                className="instance-2_24349"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24350"
                                className="instance-2_24350"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Grey" &&
                    Favorites === "ON" && (
                        <div id="2_24351" className="symbol-2_24351">
                            <RatingRatingFill
                                id="2_24352"
                                className="instance-2_24352"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24353"
                                className="instance-2_24353"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Grey" &&
                    Favorites === "ON" && (
                        <div id="2_24354" className="symbol-2_24354">
                            <RatingRatingFill
                                id="2_24355"
                                className="instance-2_24355"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24356"
                                className="instance-2_24356"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Pink" &&
                    Favorites === "OFF" && (
                        <div id="2_24357" className="symbol-2_24357">
                            <p id="2_24358" className="paragraph-2_24358">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Pink" &&
                    Favorites === "OFF" && (
                        <div id="2_24359" className="symbol-2_24359">
                            <p id="2_24360" className="paragraph-2_24360">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Pink" &&
                    Favorites === "OFF" && (
                        <div id="2_24361" className="symbol-2_24361">
                            <p id="2_24362" className="paragraph-2_24362">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Pink" &&
                    Favorites === "OFF" && (
                        <div id="2_24363" className="symbol-2_24363">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24364"
                                className="instance-2_24364"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Pink" &&
                    Favorites === "OFF" && (
                        <div id="2_24365" className="symbol-2_24365">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24366"
                                className="instance-2_24366"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Pink" &&
                    Favorites === "OFF" && (
                        <div id="2_24367" className="symbol-2_24367">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24368"
                                className="instance-2_24368"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Pink" &&
                    Favorites === "ON" && (
                        <div id="2_24369" className="symbol-2_24369">
                            <p id="2_24370" className="paragraph-2_24370">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24371"
                                className="instance-2_24371"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Pink" &&
                    Favorites === "ON" && (
                        <div id="2_24372" className="symbol-2_24372">
                            <p id="2_24373" className="paragraph-2_24373">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24374"
                                className="instance-2_24374"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Pink" &&
                    Favorites === "ON" && (
                        <div id="2_24375" className="symbol-2_24375">
                            <p id="2_24376" className="paragraph-2_24376">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24377"
                                className="instance-2_24377"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Pink" &&
                    Favorites === "ON" && (
                        <div id="2_24378" className="symbol-2_24378">
                            <RatingRatingFill
                                id="2_24379"
                                className="instance-2_24379"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24380"
                                className="instance-2_24380"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Pink" &&
                    Favorites === "ON" && (
                        <div id="2_24381" className="symbol-2_24381">
                            <RatingRatingFill
                                id="2_24382"
                                className="instance-2_24382"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24383"
                                className="instance-2_24383"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Pink" &&
                    Favorites === "ON" && (
                        <div id="2_24384" className="symbol-2_24384">
                            <RatingRatingFill
                                id="2_24385"
                                className="instance-2_24385"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24386"
                                className="instance-2_24386"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Orange" &&
                    Favorites === "OFF" && (
                        <div id="2_24387" className="symbol-2_24387">
                            <p id="2_24388" className="paragraph-2_24388">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Orange" &&
                    Favorites === "OFF" && (
                        <div id="2_24389" className="symbol-2_24389">
                            <p id="2_24390" className="paragraph-2_24390">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Orange" &&
                    Favorites === "OFF" && (
                        <div id="2_24391" className="symbol-2_24391">
                            <p id="2_24392" className="paragraph-2_24392">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Orange" &&
                    Favorites === "OFF" && (
                        <div id="2_24393" className="symbol-2_24393">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24394"
                                className="instance-2_24394"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Orange" &&
                    Favorites === "OFF" && (
                        <div id="2_24395" className="symbol-2_24395">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24396"
                                className="instance-2_24396"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Orange" &&
                    Favorites === "OFF" && (
                        <div id="2_24397" className="symbol-2_24397">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24398"
                                className="instance-2_24398"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Orange" &&
                    Favorites === "ON" && (
                        <div id="2_24399" className="symbol-2_24399">
                            <p id="2_24400" className="paragraph-2_24400">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24401"
                                className="instance-2_24401"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Orange" &&
                    Favorites === "ON" && (
                        <div id="2_24402" className="symbol-2_24402">
                            <p id="2_24403" className="paragraph-2_24403">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24404"
                                className="instance-2_24404"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Orange" &&
                    Favorites === "ON" && (
                        <div id="2_24405" className="symbol-2_24405">
                            <p id="2_24406" className="paragraph-2_24406">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24407"
                                className="instance-2_24407"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Orange" &&
                    Favorites === "ON" && (
                        <div id="2_24408" className="symbol-2_24408">
                            <RatingRatingFill
                                id="2_24409"
                                className="instance-2_24409"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24410"
                                className="instance-2_24410"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Orange" &&
                    Favorites === "ON" && (
                        <div id="2_24411" className="symbol-2_24411">
                            <RatingRatingFill
                                id="2_24412"
                                className="instance-2_24412"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24413"
                                className="instance-2_24413"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Orange" &&
                    Favorites === "ON" && (
                        <div id="2_24414" className="symbol-2_24414">
                            <RatingRatingFill
                                id="2_24415"
                                className="instance-2_24415"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24416"
                                className="instance-2_24416"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Green" &&
                    Favorites === "OFF" && (
                        <div id="2_24417" className="symbol-2_24417">
                            <p id="2_24418" className="paragraph-2_24418">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Green" &&
                    Favorites === "OFF" && (
                        <div id="2_24419" className="symbol-2_24419">
                            <p id="2_24420" className="paragraph-2_24420">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Green" &&
                    Favorites === "OFF" && (
                        <div id="2_24421" className="symbol-2_24421">
                            <p id="2_24422" className="paragraph-2_24422">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Green" &&
                    Favorites === "OFF" && (
                        <div id="2_24423" className="symbol-2_24423">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24424"
                                className="instance-2_24424"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Green" &&
                    Favorites === "OFF" && (
                        <div id="2_24425" className="symbol-2_24425">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24426"
                                className="instance-2_24426"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Green" &&
                    Favorites === "OFF" && (
                        <div id="2_24427" className="symbol-2_24427">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24428"
                                className="instance-2_24428"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Green" &&
                    Favorites === "ON" && (
                        <div id="2_24429" className="symbol-2_24429">
                            <p id="2_24430" className="paragraph-2_24430">
                                {"П"}
                            </p>
                            <div id="2_24431" className="frame-2_24431">
                                <RatingRatingFill
                                    id="2_24432"
                                    className="instance-2_24432"
                                ></RatingRatingFill>
                            </div>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Green" &&
                    Favorites === "ON" && (
                        <div id="2_24433" className="symbol-2_24433">
                            <p id="2_24434" className="paragraph-2_24434">
                                {"П"}
                            </p>
                            <div id="2_24435" className="frame-2_24435">
                                <RatingRatingFill
                                    id="2_24436"
                                    className="instance-2_24436"
                                ></RatingRatingFill>
                            </div>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Text" &&
                    State === "Default" &&
                    Color === "Green" &&
                    Favorites === "ON" && (
                        <div id="2_24437" className="symbol-2_24437">
                            <p id="2_24438" className="paragraph-2_24438">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24439"
                                className="instance-2_24439"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Green" &&
                    Favorites === "ON" && (
                        <div id="2_24440" className="symbol-2_24440">
                            <RatingRatingFill
                                id="2_24441"
                                className="instance-2_24441"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24442"
                                className="instance-2_24442"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Green" &&
                    Favorites === "ON" && (
                        <div id="2_24443" className="symbol-2_24443">
                            <RatingRatingFill
                                id="2_24444"
                                className="instance-2_24444"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24445"
                                className="instance-2_24445"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Icon" &&
                    State === "Default" &&
                    Color === "Green" &&
                    Favorites === "ON" && (
                        <div id="2_24446" className="symbol-2_24446">
                            <RatingRatingFill
                                id="2_24447"
                                className="instance-2_24447"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24448"
                                className="instance-2_24448"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Green" &&
                    Favorites === "OFF" && (
                        <div id="2_24449" className="symbol-2_24449">
                            <p id="2_24450" className="paragraph-2_24450">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Green" &&
                    Favorites === "OFF" && (
                        <div id="2_24451" className="symbol-2_24451">
                            <p id="2_24452" className="paragraph-2_24452">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Green" &&
                    Favorites === "OFF" && (
                        <div id="2_24453" className="symbol-2_24453">
                            <p id="2_24454" className="paragraph-2_24454">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Green" &&
                    Favorites === "OFF" && (
                        <div id="2_24455" className="symbol-2_24455">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24456"
                                className="instance-2_24456"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Green" &&
                    Favorites === "OFF" && (
                        <div id="2_24457" className="symbol-2_24457">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24458"
                                className="instance-2_24458"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Green" &&
                    Favorites === "OFF" && (
                        <div id="2_24459" className="symbol-2_24459">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24460"
                                className="instance-2_24460"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Green" &&
                    Favorites === "ON" && (
                        <div id="2_24461" className="symbol-2_24461">
                            <p id="2_24462" className="paragraph-2_24462">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24463"
                                className="instance-2_24463"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Green" &&
                    Favorites === "ON" && (
                        <div id="2_24464" className="symbol-2_24464">
                            <p id="2_24465" className="paragraph-2_24465">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24466"
                                className="instance-2_24466"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Green" &&
                    Favorites === "ON" && (
                        <div id="2_24467" className="symbol-2_24467">
                            <p id="2_24468" className="paragraph-2_24468">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24469"
                                className="instance-2_24469"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Green" &&
                    Favorites === "ON" && (
                        <div id="2_24470" className="symbol-2_24470">
                            <RatingRatingFill
                                id="2_24471"
                                className="instance-2_24471"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24472"
                                className="instance-2_24472"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Green" &&
                    Favorites === "ON" && (
                        <div id="2_24473" className="symbol-2_24473">
                            <RatingRatingFill
                                id="2_24474"
                                className="instance-2_24474"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24475"
                                className="instance-2_24475"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Green" &&
                    Favorites === "ON" && (
                        <div id="2_24476" className="symbol-2_24476">
                            <RatingRatingFill
                                id="2_24477"
                                className="instance-2_24477"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24478"
                                className="instance-2_24478"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Orange" &&
                    Favorites === "OFF" && (
                        <div id="2_24479" className="symbol-2_24479">
                            <p id="2_24480" className="paragraph-2_24480">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Orange" &&
                    Favorites === "OFF" && (
                        <div id="2_24481" className="symbol-2_24481">
                            <p id="2_24482" className="paragraph-2_24482">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Orange" &&
                    Favorites === "OFF" && (
                        <div id="2_24483" className="symbol-2_24483">
                            <p id="2_24484" className="paragraph-2_24484">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Orange" &&
                    Favorites === "OFF" && (
                        <div id="2_24485" className="symbol-2_24485">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24486"
                                className="instance-2_24486"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Orange" &&
                    Favorites === "OFF" && (
                        <div id="2_24487" className="symbol-2_24487">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24488"
                                className="instance-2_24488"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Orange" &&
                    Favorites === "OFF" && (
                        <div id="2_24489" className="symbol-2_24489">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24490"
                                className="instance-2_24490"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Orange" &&
                    Favorites === "ON" && (
                        <div id="2_24491" className="symbol-2_24491">
                            <p id="2_24492" className="paragraph-2_24492">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24493"
                                className="instance-2_24493"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Orange" &&
                    Favorites === "ON" && (
                        <div id="2_24494" className="symbol-2_24494">
                            <p id="2_24495" className="paragraph-2_24495">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24496"
                                className="instance-2_24496"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Orange" &&
                    Favorites === "ON" && (
                        <div id="2_24497" className="symbol-2_24497">
                            <p id="2_24498" className="paragraph-2_24498">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24499"
                                className="instance-2_24499"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Orange" &&
                    Favorites === "ON" && (
                        <div id="2_24500" className="symbol-2_24500">
                            <RatingRatingFill
                                id="2_24501"
                                className="instance-2_24501"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24502"
                                className="instance-2_24502"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Orange" &&
                    Favorites === "ON" && (
                        <div id="2_24503" className="symbol-2_24503">
                            <RatingRatingFill
                                id="2_24504"
                                className="instance-2_24504"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24505"
                                className="instance-2_24505"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Orange" &&
                    Favorites === "ON" && (
                        <div id="2_24506" className="symbol-2_24506">
                            <RatingRatingFill
                                id="2_24507"
                                className="instance-2_24507"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24508"
                                className="instance-2_24508"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Pink" &&
                    Favorites === "OFF" && (
                        <div id="2_24509" className="symbol-2_24509">
                            <p id="2_24510" className="paragraph-2_24510">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Pink" &&
                    Favorites === "OFF" && (
                        <div id="2_24511" className="symbol-2_24511">
                            <p id="2_24512" className="paragraph-2_24512">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Pink" &&
                    Favorites === "OFF" && (
                        <div id="2_24513" className="symbol-2_24513">
                            <p id="2_24514" className="paragraph-2_24514">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Pink" &&
                    Favorites === "OFF" && (
                        <div id="2_24515" className="symbol-2_24515">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24516"
                                className="instance-2_24516"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Pink" &&
                    Favorites === "OFF" && (
                        <div id="2_24517" className="symbol-2_24517">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24518"
                                className="instance-2_24518"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Pink" &&
                    Favorites === "OFF" && (
                        <div id="2_24519" className="symbol-2_24519">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24520"
                                className="instance-2_24520"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Pink" &&
                    Favorites === "ON" && (
                        <div id="2_24521" className="symbol-2_24521">
                            <p id="2_24522" className="paragraph-2_24522">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24523"
                                className="instance-2_24523"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Pink" &&
                    Favorites === "ON" && (
                        <div id="2_24524" className="symbol-2_24524">
                            <p id="2_24525" className="paragraph-2_24525">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24526"
                                className="instance-2_24526"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Pink" &&
                    Favorites === "ON" && (
                        <div id="2_24527" className="symbol-2_24527">
                            <p id="2_24528" className="paragraph-2_24528">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24529"
                                className="instance-2_24529"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Pink" &&
                    Favorites === "ON" && (
                        <div id="2_24530" className="symbol-2_24530">
                            <RatingRatingFill
                                id="2_24531"
                                className="instance-2_24531"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24532"
                                className="instance-2_24532"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Pink" &&
                    Favorites === "ON" && (
                        <div id="2_24533" className="symbol-2_24533">
                            <RatingRatingFill
                                id="2_24534"
                                className="instance-2_24534"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24535"
                                className="instance-2_24535"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Pink" &&
                    Favorites === "ON" && (
                        <div id="2_24536" className="symbol-2_24536">
                            <RatingRatingFill
                                id="2_24537"
                                className="instance-2_24537"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24538"
                                className="instance-2_24538"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Violet" &&
                    Favorites === "OFF" && (
                        <div id="2_24539" className="symbol-2_24539">
                            <p id="2_24540" className="paragraph-2_24540">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Violet" &&
                    Favorites === "OFF" && (
                        <div id="2_24541" className="symbol-2_24541">
                            <p id="2_24542" className="paragraph-2_24542">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Violet" &&
                    Favorites === "OFF" && (
                        <div id="2_24543" className="symbol-2_24543">
                            <p id="2_24544" className="paragraph-2_24544">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Violet" &&
                    Favorites === "OFF" && (
                        <div id="2_24545" className="symbol-2_24545">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24546"
                                className="instance-2_24546"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Violet" &&
                    Favorites === "OFF" && (
                        <div id="2_24547" className="symbol-2_24547">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24548"
                                className="instance-2_24548"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Violet" &&
                    Favorites === "OFF" && (
                        <div id="2_24549" className="symbol-2_24549">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24550"
                                className="instance-2_24550"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Violet" &&
                    Favorites === "ON" && (
                        <div id="2_24551" className="symbol-2_24551">
                            <p id="2_24552" className="paragraph-2_24552">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24553"
                                className="instance-2_24553"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Violet" &&
                    Favorites === "ON" && (
                        <div id="2_24554" className="symbol-2_24554">
                            <p id="2_24555" className="paragraph-2_24555">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24556"
                                className="instance-2_24556"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Violet" &&
                    Favorites === "ON" && (
                        <div id="2_24557" className="symbol-2_24557">
                            <p id="2_24558" className="paragraph-2_24558">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24559"
                                className="instance-2_24559"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Violet" &&
                    Favorites === "ON" && (
                        <div id="2_24560" className="symbol-2_24560">
                            <RatingRatingFill
                                id="2_24561"
                                className="instance-2_24561"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24562"
                                className="instance-2_24562"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Violet" &&
                    Favorites === "ON" && (
                        <div id="2_24563" className="symbol-2_24563">
                            <RatingRatingFill
                                id="2_24564"
                                className="instance-2_24564"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24565"
                                className="instance-2_24565"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Violet" &&
                    Favorites === "ON" && (
                        <div id="2_24566" className="symbol-2_24566">
                            <RatingRatingFill
                                id="2_24567"
                                className="instance-2_24567"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24568"
                                className="instance-2_24568"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Grey" &&
                    Favorites === "OFF" && (
                        <div id="2_24569" className="symbol-2_24569">
                            <p id="2_24570" className="paragraph-2_24570">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Grey" &&
                    Favorites === "OFF" && (
                        <div id="2_24571" className="symbol-2_24571">
                            <p id="2_24572" className="paragraph-2_24572">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Grey" &&
                    Favorites === "OFF" && (
                        <div id="2_24573" className="symbol-2_24573">
                            <p id="2_24574" className="paragraph-2_24574">
                                {"П"}
                            </p>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Grey" &&
                    Favorites === "OFF" && (
                        <div id="2_24575" className="symbol-2_24575">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24576"
                                className="instance-2_24576"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Grey" &&
                    Favorites === "OFF" && (
                        <div id="2_24577" className="symbol-2_24577">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24578"
                                className="instance-2_24578"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Grey" &&
                    Favorites === "OFF" && (
                        <div id="2_24579" className="symbol-2_24579">
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24580"
                                className="instance-2_24580"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Grey" &&
                    Favorites === "ON" && (
                        <div id="2_24581" className="symbol-2_24581">
                            <p id="2_24582" className="paragraph-2_24582">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24583"
                                className="instance-2_24583"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Grey" &&
                    Favorites === "ON" && (
                        <div id="2_24584" className="symbol-2_24584">
                            <p id="2_24585" className="paragraph-2_24585">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24586"
                                className="instance-2_24586"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Text" &&
                    State === "Hover" &&
                    Color === "Grey" &&
                    Favorites === "ON" && (
                        <div id="2_24587" className="symbol-2_24587">
                            <p id="2_24588" className="paragraph-2_24588">
                                {"П"}
                            </p>
                            <RatingRatingFill
                                id="2_24589"
                                className="instance-2_24589"
                            ></RatingRatingFill>
                        </div>
                    )}
                {Size === "24" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Grey" &&
                    Favorites === "ON" && (
                        <div id="2_24590" className="symbol-2_24590">
                            <RatingRatingFill
                                id="2_24591"
                                className="instance-2_24591"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24592"
                                className="instance-2_24592"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "20" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Grey" &&
                    Favorites === "ON" && (
                        <div id="2_24593" className="symbol-2_24593">
                            <RatingRatingFill
                                id="2_24594"
                                className="instance-2_24594"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24595"
                                className="instance-2_24595"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
                {Size === "16" &&
                    form === "Icon" &&
                    State === "Hover" &&
                    Color === "Grey" &&
                    Favorites === "ON" && (
                        <div id="2_24596" className="symbol-2_24596">
                            <RatingRatingFill
                                id="2_24597"
                                className="instance-2_24597"
                            ></RatingRatingFill>
                            <IconFontAwesomeFreeSolidPpaw
                                id="2_24598"
                                className="instance-2_24598"
                            ></IconFontAwesomeFreeSolidPpaw>
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Projecticon;
