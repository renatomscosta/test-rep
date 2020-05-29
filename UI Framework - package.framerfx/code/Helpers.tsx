// import * as React from "react"
//@ts-ignore
import { basisTheme } from "./BasisTheme"
import { ControlType } from "framer"

// Helper funciton that finds key by Value
export function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value)
}

// Generating informative textStyle values for Properies Control

/*
export const textOptionTitles = []
export const textStyleNames = Object.keys(basisTheme.text.Large)

for (let i = 0; i < textStyleNames.length; i++) {
    textOptionTitles.push(
        textStyleNames[i] +
            " ⊜" +
            basisTheme.text.Large[textStyleNames[i]].fontSize +
            ", ↕" +
            basisTheme.text.Large[textStyleNames[i]].lineHeight
    )
} */

// Same thing but as a function
export function GetTextStyleLables(typeSize) {
    const textStyleLables = []
    const textStyleNames = Object.keys(basisTheme.text.Large)

    for (let i = 0; i < textStyleNames.length; i++) {
        textStyleLables.push(
            textStyleNames[i] +
                " ⊜" +
                basisTheme.text[typeSize][textStyleNames[i]].fontSize +
                ", ↕" +
                basisTheme.text[typeSize][textStyleNames[i]].lineHeight +
                "\n"
        )
    }
    return textStyleLables
}

// Usage example:
//
// addPropertyControls(ListItem, {
//     lableFontStyle: {
//         type: ControlType.Enum,
//         defaultValue: "body",
//         options: Object.keys(basisTheme.text.Large),
//         optionTitles: GetTextStyleLables("Large"),
//     },
// })

// Generating informative spacerName values for for Properies Control 'optionTitles'
export const spacerOptionTitles = []
const spacerNames = Object.keys(basisTheme.spacer)

for (let i = 0; i < spacerNames.length; i++) {
    spacerOptionTitles.push(
        spacerNames[i] + ", ↕" + basisTheme.spacer[spacerNames[i]]
    )
}

// Usage example:
//
// addPropertyControls(ListItem, {
//     lableFontStyle: {
//         type: ControlType.Enum,
//         defaultValue: "body",
//         options: Object.keys(basisTheme.spacer),
//         optionTitles: spacerOptionTitles,
//     },
// })

export const dynamicTypeInfo = {
    dynamicTypeInfoxSmall: {
        hidden(props) {
            return (
                props.dynamicTypeControl != "xSmall" ||
                props.moreSettings == false
            )
        },
        type: ControlType.String,
        defaultValue: GetTextStyleLables("xSmall")
            .toString()
            .replace(/,/g, "")
            .replace(/⊜/g, ""),
        title: "xSmall",
        displayTextArea: true,
    },
    dynamicTypeInfoSmall: {
        hidden(props) {
            return (
                props.dynamicTypeControl != "Small" ||
                props.moreSettings == false
            )
        },
        type: ControlType.String,
        defaultValue: GetTextStyleLables("Small")
            .toString()
            .replace(/,/g, "")
            .replace(/⊜/g, ""),
        title: "Small",
        displayTextArea: true,
    },
    dynamicTypeInfoMedium: {
        hidden(props) {
            return (
                props.dynamicTypeControl != "Medium" ||
                props.moreSettings == false
            )
        },
        type: ControlType.String,
        defaultValue: GetTextStyleLables("Medium")
            .toString()
            .replace(/,/g, "")
            .replace(/⊜/g, ""),
        title: "Medium",
        displayTextArea: true,
    },
    dynamicTypeInfoLarge: {
        hidden(props) {
            return (
                props.dynamicTypeControl != "Large" ||
                props.moreSettings == false
            )
        },
        type: ControlType.String,
        defaultValue: GetTextStyleLables("Large")
            .toString()
            .replace(/,/g, "")
            .replace(/⊜/g, ""),
        title: "Large",
        displayTextArea: true,
    },
    dynamicTypeInfoxLarge: {
        hidden(props) {
            return (
                props.dynamicTypeControl != "xLarge" ||
                props.moreSettings == false
            )
        },
        type: ControlType.String,
        defaultValue: GetTextStyleLables("xLarge")
            .toString()
            .replace(/,/g, "")
            .replace(/⊜/g, ""),
        title: "xLarge",
        displayTextArea: true,
    },
    dynamicTypeInfoxxLarge: {
        hidden(props) {
            return (
                props.dynamicTypeControl != "xxLarge" ||
                props.moreSettings == false
            )
        },
        type: ControlType.String,
        defaultValue: GetTextStyleLables("xxLarge")
            .toString()
            .replace(/,/g, "")
            .replace(/⊜/g, ""),
        title: "xxLarge",
        displayTextArea: true,
    },
    dynamicTypeInfoxxxLarge: {
        hidden(props) {
            return (
                props.dynamicTypeControl != "xxxLarge" ||
                props.moreSettings == false
            )
        },
        type: ControlType.String,
        defaultValue: GetTextStyleLables("xxxLarge")
            .toString()
            .replace(/,/g, "")
            .replace(/⊜/g, ""),
        title: "xxxLarge",
        displayTextArea: true,
    },
    dynamicTypeInfoAX1: {
        hidden(props) {
            return (
                props.dynamicTypeControl != "AX1" || props.moreSettings == false
            )
        },
        type: ControlType.String,
        defaultValue: GetTextStyleLables("AX1")
            .toString()
            .replace(/,/g, "")
            .replace(/⊜/g, ""),
        title: "AX1",
        displayTextArea: true,
    },
    dynamicTypeInfoAX2: {
        hidden(props) {
            return (
                props.dynamicTypeControl != "AX2" || props.moreSettings == false
            )
        },
        type: ControlType.String,
        defaultValue: GetTextStyleLables("AX2")
            .toString()
            .replace(/,/g, "")
            .replace(/⊜/g, ""),
        title: "AX2",
        displayTextArea: true,
    },
    dynamicTypeInfoAX3: {
        hidden(props) {
            return (
                props.dynamicTypeControl != "AX3" || props.moreSettings == false
            )
        },
        type: ControlType.String,
        defaultValue: GetTextStyleLables("AX3")
            .toString()
            .replace(/,/g, "")
            .replace(/⊜/g, ""),
        title: "AX3",
        displayTextArea: true,
    },
    dynamicTypeInfoAX4: {
        hidden(props) {
            return (
                props.dynamicTypeControl != "AX4" || props.moreSettings == false
            )
        },
        type: ControlType.String,
        defaultValue: GetTextStyleLables("AX4")
            .toString()
            .replace(/,/g, "")
            .replace(/⊜/g, ""),
        title: "AX4",
        displayTextArea: true,
    },
    dynamicTypeInfoAX5: {
        hidden(props) {
            return (
                props.dynamicTypeControl != "AX5" || props.moreSettings == false
            )
        },
        type: ControlType.String,
        defaultValue: GetTextStyleLables("AX5")
            .toString()
            .replace(/,/g, "")
            .replace(/⊜/g, ""),
        title: "AX5",
        displayTextArea: true,
    },
}
