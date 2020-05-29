import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
//@ts-ignore
import { spacerData } from "../SpacerControl"
//@ts-ignore
import { basisTheme, ShowSpacers } from "../BasisTheme"
//@ts-ignore
import { inspectorContext } from "../Inspector"
//@ts-ignore
import { spacerOptionTitles } from "../Helpers"

const spacer = basisTheme.spacer
const show = ShowSpacers
export function Spacer(props) {
    const {
        spacerHeight,
        height,
        width,
        type,
        // inspectable,
        ShowSpacers,
        ...rest
    } = props

    const inspectable = React.useContext(inspectorContext)
    return (
        <Frame
            height={type == "horizontal" ? spacer[spacerHeight] : "100%"}
            width={type == "horizontal" ? "100%" : spacer[spacerHeight]}
            overflow="hidden"
            backgroundColor={
                props.forceShow || show
                    ? "#FAFF66"
                    : inspectable
                    ? "#FAFF66"
                    : "rgba(255, 255, 255, 0)" // transparent
            }
            style={{
                fontSize: 5,
                fontWeight: 200,
                lineHeight: -6,
                border:
                    props.forceShow || show
                        ? "1px solid #EBF312"
                        : inspectable
                        ? "1px solid #EBF312"
                        : "none", // transparent
            }}
        >
            {" "}
            <Frame
                width="100%"
                height="100%"
                backgroundColor={"none"}
                rotate={props.type == "horizontal" ? 0 : 90}
            >
                {props.forceShow || show
                    ? spacerHeight + "\u00A0" + spacer[spacerHeight]
                    : inspectable
                    ? spacerHeight + "\u00A0" + spacer[spacerHeight]
                    : ""}
            </Frame>
        </Frame>
    )
}

// Default properties
Spacer.defaultProps = {
    spacerHeight: "l",
    height: spacer["l"],
    width: 375,
    type: "horizontal",
}

// Framer Properties Panel
addPropertyControls(Spacer, {
    spacerHeight: {
        type: ControlType.Enum,
        title: "Height",
        defaultValue: "l",
        options: Object.keys(basisTheme.spacer),
        optionTitles: spacerOptionTitles,
    },
    type: {
        type: ControlType.SegmentedEnum,
        defaultValue: "horizontal",
        options: ["horizontal", "vertical"],
        optionTitles: ["→", "↓"],
    },
    forceShow: {
        type: ControlType.Boolean,
        title: "Force Show",
        defaultValue: false,
        enabledTitle: "true",
        disabledTitle: "false",
    },
    // inspectable: {
    //     type: ControlType.Boolean,
    //     defaultValue: false,
    // },
})
