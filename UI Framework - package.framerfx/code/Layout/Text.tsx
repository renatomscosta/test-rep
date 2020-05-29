import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
//@ts-ignore
import { basisTheme } from "../BasisTheme"
//@ts-ignore
//import { sharedData } from "../Settings"
//@ts-ignore
// import { useGlobal } from "../JSONViewer"
//@ts-ignore

import { GetTextStyleLables, dynamicTypeInfo } from "../Helpers"

// Container Default properties
Text.defaultProps = {
    width: 375,
    height: 21,
    marginLeft: "l",
    marginRight: "l",
    align: "left",
    text: "Text element",
    fontStyle: "body",
    textColour: "text",
    stretch: false,
    dynamicType: true,
    jsonPreview: false,
    moreSettings: true,
    dynamicTypeControl: "Large",
    themeControl: "light",
}

const spacer = basisTheme.spacer

export function Text(props) {
    const { ...rest } = props

    const data = {
        theme: "light",
        dynamicType: "Large",
    }
    // if (!props.moreSettings) {
    //     var [data] = sharedData()
    //     const { theme, dynamicType } = data
    // }

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
    // Native UI Framework JSON Snippet
    ///////////////////////////////////////////
    let json = {
        id: props.id,
        type: "text_element",
        displayOptions: [
            { key: "font-style", value: props.fontStyle },
            { key: "font-color", value: props.textColour },
            { key: "text-alignment", value: props.align },
            {
                key: "left-padding",
                value: basisTheme.spacerMapping[props.marginLeft],
            },
            {
                key: "right-padding",
                value: basisTheme.spacerMapping[props.marginRight],
            },
        ],
        data: [{ key: "text", value: props.text }],
    }

    // if (props.jsonPreview) {
    //     const [globalState, globalActions] = useGlobal() // JSON Viewer
    //     React.useLayoutEffect(() => {
    //         globalActions.addItem(json)
    //     }, [props])
    // }

    //console.log(JSON.stringify(json, null, 2))
    console.log(JSON.stringify(json, null, 2) + ",")

    ///////////////////////////////////////////
    ///////////////////////////////////////////

    return (
        <Frame
            width="none"
            height="none"
            background="none"
            style={{
                display: "flex",
            }}
            {...rest}
        >
            <Frame
                color={colour[props.textColour]}
                background="none"
                width={!props.stretch ? props.width : "none"}
                height="none"
                style={{
                    //@ts-ignore
                    fontFamily: text[props.fontStyle].fontFamily,
                    fontSize: text[props.fontStyle].fontSize,
                    justifyContent:
                        props.align == "left"
                            ? "flex-start"
                            : props.align == "right"
                            ? "flex-end"
                            : "center",
                    textAlign: props.align,
                    position: "relative",
                    paddingLeft: spacer[props.marginLeft],
                    paddingRight: spacer[props.marginRight],
                    maxWidth: !props.stretch ? "none" : props.width,
                    alignItems: "flex-start",
                    whiteSpace: "pre-wrap",
                }}
            >
                {props.text}
            </Frame>
        </Frame>
    )
}

// Framer Properties Panel
//@ts-ignore
addPropertyControls(Text, {
    text: { type: ControlType.String, displayTextArea: true },
    align: {
        type: ControlType.SegmentedEnum,
        defaultValue: "left",
        options: ["left", "center", "right"],
    },
    fontStyle: {
        type: ControlType.Enum,
        defaultValue: "body",
        options: Object.keys(basisTheme.text.Large),
        optionTitles: GetTextStyleLables("Large"),
    },
    marginLeft: {
        type: ControlType.Enum,
        defaultValue: "l",
        options: Object.keys(spacer), // List of Spacers
        optionTitles: Object.keys(spacer),
    },
    marginRight: {
        type: ControlType.Enum,
        defaultValue: "l",
        options: Object.keys(spacer), // List of Spacers
        optionTitles: Object.keys(spacer),
    },
    textColour: {
        type: ControlType.Enum,
        defaultValue: "text",
        options: [
            "text",
            "text2",
            "text3",
            "textHighlight",
            "error",
            "success",
        ],
    },
    // jsonPreview: {
    //     type: ControlType.Boolean,
    //     title: "JSON",
    //     defaultValue: true,
    //     enabledTitle: "Show",
    //     disabledTitle: "Hide",
    // },
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
    ...dynamicTypeInfo, // Dynamic Type Infor From Helper
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
