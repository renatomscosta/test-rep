import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
//@ts-ignore
import { basisTheme } from "../BasisTheme"

// Container Default properties
TextCustom.defaultProps = {
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
}

const spacer = basisTheme.spacer

export function TextCustom(props) {
    const { ...rest } = props

    //const { theme, dynamicType } = data

    //const colour = basisTheme.colour[data.theme]

    const text = basisTheme.text.Large

    ///////////////////////////////////////////
    // Native UI Framework JSON Snippet
    ///////////////////////////////////////////
    const snippet = {
        id: "",
        type: "text_element",
        displayOptions: [
            { key: "font-style", value: props.fontStyle },
            { key: "font-color", value: props.textColour },
            { key: "text-alignment", value: props.align },
            { key: "left-padding", value: spacer[props.marginLeft] },
            { key: "right-padding", value: spacer[props.marginRight] },
        ],
        data: [{ key: "text", value: props.text }],
    }
    console.log(JSON.stringify(snippet, null, 2))
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
                color={props.textColour}
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
addPropertyControls(TextCustom, {
    text: { type: ControlType.String, displayTextArea: true },
    align: {
        type: ControlType.SegmentedEnum,
        defaultValue: "left",
        options: ["left", "center", "right"],
        optionTitles: ["left", "center", "right"],
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
    marginRight: {
        type: ControlType.Enum,
        defaultValue: "l",
        options: Object.keys(spacer), // List of Spacers
        optionTitles: Object.keys(spacer),
    },
    textColour: {
        type: ControlType.Color,
        defaultValue: "text",
    },
    // textColour: {
    //     type: ControlType.Enum,
    //     defaultValue: "text",
    //     options: ["text", "text2", "text3", "textHighlight"],
    //     optionTitles: ["text", "text2", "text3", "textHighlight"],
    // },
})
