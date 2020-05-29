import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
//@ts-ignore
import { basisTheme } from "../BasisTheme"

// Container Default properties
Text.defaultProps = {
    width: 375,
    height: 21,
    marginLeft: "m",
    marginRight: "m",
    align: "left",
    text: "AAAA AAA",
    fontStyle: "body",
    textColour: "text",
    stretch: false,
    dynamicType: true,
    jsonPreview: false,
    moreSettings: false,
}

const spacer = basisTheme.spacer

export function Text(props) {
    const { ...rest } = props

    const colour = basisTheme.colour.light
    const text = basisTheme.text.Large

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
                    lineHeight: text[props.fontStyle].lineHeight + "px",
                    textTransform: text[props.fontStyle].textTransform
                        ? "uppercase"
                        : "none",
                }}
            >
                {props.text}
            </Frame>
        </Frame>
    )
}

// Generating 'optionTitles' for Properies Control
const textStyleNames = Object.keys(basisTheme.text.Large)
const textStyleLables = []

for (let i = 0; i < textStyleNames.length; i++) {
    //console.log(textStyleNames[i])
    textStyleLables.push(
        textStyleNames[i] +
            " ⊜" +
            basisTheme.text.Large[textStyleNames[i]].fontSize +
            ", ↕" +
            basisTheme.text.Large[textStyleNames[i]].lineHeight
    )
}

// Framer Properties Panel
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
        options: textStyleNames, // List of Text Styles
        optionTitles: textStyleLables,
    },
    marginLeft: {
        type: ControlType.Enum,
        defaultValue: "m",
        options: Object.keys(spacer), // List of Spacers
        optionTitles: Object.keys(spacer),
    },
    marginRight: {
        type: ControlType.Enum,
        defaultValue: "m",
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
})
