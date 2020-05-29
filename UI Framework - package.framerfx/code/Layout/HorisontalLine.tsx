import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
//@ts-ignore
import { basisTheme } from "../BasisTheme"
//@ts-ignore
//import { sharedData } from "../Settings"

// Container Default properties
HorisontalLine.defaultProps = {
    width: 375,
    height: 1,
    margin: "l",
    dynamicType: "defaultLarge",
    theme: "light",
    moreSettings: true,
    dynamicTypeControl: "Large",
    themeControl: "light",
}

const colour = basisTheme.colour
const spacer = basisTheme.spacer

export function HorisontalLine(props) {
    const { ...rest } = props
    const data = {
        theme: "light",
        dynamicType: "Large",
    }

    const theme =
        props.moreSettings == true
            ? props.themeControl
            : props.themeControl
            ? data.theme
            : "light"

    const colour =
        props.moreSettings == true
            ? basisTheme.colour[props.themeControl]
            : props.themeControl
            ? basisTheme.colour[data.theme]
            : basisTheme.colour.light

    return (
        <Frame
            width="100%"
            background="none"
            style={{
                // Set margin spacers
                paddingLeft: spacer[props.margin],
                paddingRight: spacer[props.margin],
            }}
            {...rest}
        >
            <Frame
                width={375 - spacer[props.margin] * 2}
                height="1px"
                background={colour.fill6}
            />
        </Frame>
    )
}

// Framer Properties Panel
addPropertyControls(HorisontalLine, {
    margin: {
        type: ControlType.Enum,
        defaultValue: "l",
        options: Object.keys(spacer), // List of Spacers
        optionTitles: Object.keys(spacer),
    },
    moreSettings: {
        type: ControlType.Boolean,
        title: "Settings ⚙️",
        enabledTitle: "Local",
        disabledTitle: "Global",
    },
    themeControl: {
        hidden(props) {
            return props.moreSettings === false
        },
        type: ControlType.SegmentedEnum,
        title: "⬜️⬛️",
        defaultValue: "light",
        options: ["light", "dark"],
    },
})
