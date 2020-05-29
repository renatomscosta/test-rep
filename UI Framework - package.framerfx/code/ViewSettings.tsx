import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// @ts-ignore
import { basisTheme } from "./BasisTheme"

// @ts-ignore
import { sharedData } from "./Settings"

export function ViewSettings(props) {
    const data = {
        theme: "light",
        dynamicType: "Large",
    }

    // const { themeControl, dynamicTypeControl, showSpacersControl } = props
    const { dynamicType } = data

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
    const text =
        props.moreSettings == true
            ? basisTheme.text[props.dynamicTypeControl]
            : props.dynamicType
            ? basisTheme.text[data.dynamicType]
            : basisTheme.text.Large

    return <Frame size="100%" background={colour[props.colour]}></Frame>
}

ViewSettings.defaultProps = {
    height: 812,
    width: 375,
    showSpacersControl: true,
    fontScalesControl: 5,
    dynamicTypeControl: "Large",
    themeControl: "light",
    colour: "background",
    moreSettings: true,
    theme: "light",
}

// Framer Properties Panel
addPropertyControls(ViewSettings, {
    colour: {
        type: ControlType.Enum,
        defaultValue: "background",
        options: [
            "background",
            "fill",
            "fill2",
            "fill3",
            "fill4",
            "fill5",
            "fill6",
        ],
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
