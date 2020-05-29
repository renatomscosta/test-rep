import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
//@ts-ignore
import { basisTheme } from "../BasisTheme"
//@ts-ignore
//import { sharedData } from "../Settings"
//@ts-ignore
// import { useGlobal } from "../JSONViewer" // JSON Viewer 1

const spacer = basisTheme.spacer

// Components Container Default properties
DraftComponent.defaultProps = {
    width: 375,
    marginLeft: "s",
    text: "Draft component, dynamic text example",
    fontStyle: "body",
    textColour: "text",
    jsonPreview: false,
    dynamicType: "defaultLarge",
    theme: "light",
    moreSettings: true,
    dynamicTypeControl: "Large",
    themeControl: "light",
}

export function DraftComponent(props) {
    const { ...rest } = props
    const data = {
        theme: "light",
        dynamicType: "Large",
    }

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

    ///////////////////////////////////////////
    // JSON Snippet 2
    ///////////////////////////////////////////
    // const [globalState, globalActions] = useGlobal() // JSON Viewer
    let jsonSnipet = {
        // Snippet goes here
        id: props.id,
        type: "Replace the snippet with real one.",
    }
    console.log(JSON.stringify(jsonSnipet, null, 2))
    // React.useLayoutEffect(() => {
    //     globalActions.addItem(jsonSnipet)
    // }, [props])

    ///////////////////////////////////////////
    return (
        <Frame
            width={500}
            background={colour.background} // Hardcode a colour
            color={colour[props.textColour]} // User can change a color via Prop Control
            style={{
                fontFamily: text[props.fontStyle].fontFamily, // User controls font style
                fontSize: text[props.fontStyle].fontSize, // User controls font style
                paddingLeft: spacer[props.marginLeft], // User controls margin
                justifyContent: "left",
            }}
            {...rest}
        >
            {props.text}

            <br />
            <br />
            <span
                style={{
                    fontFamily: text.largeTitle.fontFamily, // Hardcoded font style
                    fontSize: text.largeTitle.fontSize, // Hardcoded font style
                }}
            >
                This is style is not dynamic
            </span>
        </Frame>
    )
}

// Framer Properties Panel
addPropertyControls(DraftComponent, {
    text: { type: ControlType.String },
    align: {
        type: ControlType.SegmentedEnum,
        defaultValue: "left",
        options: ["left", "center", "right"],
    },
    fontStyle: {
        type: ControlType.Enum,
        defaultValue: "body",
        options: Object.keys(basisTheme.text.Large), // List of Text Styles
        optionTitles: Object.keys(basisTheme.text.Large),
    },
    marginLeft: {
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
    dynamicTypeControl: {
        hidden(props) {
            return props.moreSettings === false
        },
        type: ControlType.Enum,
        title: "𝐓𝐘𝐏𝐄 ↨",
        defaultValue: "Large",
        options: [
            "xSmall",
            "Small",
            "Medium",
            "Large",
            "xLarge",
            "xxLarge",
            "xxxLarge",
            "AX1",
            "AX2",
            "AX3",
            "AX4",
            "AX5",
        ],
        optionTitles: [
            "xSmall",
            "Small",
            "Medium",
            "Large (Default)",
            "xLarge ",
            "xxLarge",
            "xxxLarge ",
            "AX1",
            "AX2",
            "AX3",
            "AX4",
            "AX5",
        ],
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
