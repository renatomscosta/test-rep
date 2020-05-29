import * as React from "react"
import { url } from "framer/resource"
import {
    Frame,
    Stack,
    StackProperties,
    addPropertyControls,
    ControlType,
} from "framer"
//@ts-ignore
import { basisTheme } from "../BasisTheme"
//@ts-ignore
//import { sharedData } from "../Settings"
//@ts-ignore
import { Icon } from "./../icons/Icon"

// Container Default properties
Pill.defaultProps = {
    buttonType: "primary",
    width: "none",
    height: 44,
    margin: "none",
    stretch: "content-fit",
    horizontalAlignment: "left",
    text: "Pill component",
    showIcon: true,
    iconLeft: "",
    iconRight: "Cross",
    dynamicType: "defaultLarge",
    theme: "light",
    moreSettings: true,
    dynamicTypeControl: "Large",
    themeControl: "light",
}

const spacer = basisTheme.spacer

// The Component
export function Pill(props) {
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

    // Event Handler
    function onTap(event, info) {
        console.log("Tap!")
    }

    //console.log(data.theme)

    //Cound this be improved?
    function setIcon(Theme) {
        if (Theme == "light") {
            return "dark"
        } else {
            return "light"
        }
    }
    // function setIcon(ButtonType, Theme) {
    //     if (Theme == "light") {
    //         if (ButtonType == "primary") return "light"
    //         else return "dark"
    //     } else {
    //         if (ButtonType == "primary") return "dark"
    //         else return "light"
    //     }
    // }

    ///////////////////////////////////////////
    // Native UI Framework JSON Snippet
    ///////////////////////////////////////////
    // const snippet = {
    //     id: "",
    //     type: "pill_component",
    //     displayOptions: [
    //         { key: "left_icon", value: props.iconLeft },
    //         { key: "right_icon", value: props.iconRight },
    //     ],
    //     data: [{ key: "text", value: props.text }],
    // }
    // console.log(JSON.stringify(snippet, null, 2))
    ///////////////////////////////////////////
    ///////////////////////////////////////////

    // Component's output
    return (
        // Container framer, is used to implement Left and Right margins
        <Frame
            width="100%"
            height={"none"}
            background={"none"}
            style={{
                // Set margin spacers
                paddingLeft: spacer[props.margin],
                paddingRight: spacer[props.margin],
                justifyContent: props.horizontalAlignment,
                display: "flex",
            }}
            onTap={onTap}
            {...rest}
        >
            <Stack
                position="relative"
                direction="horizontal"
                width={
                    props.stretch == "content-fit"
                        ? "auto"
                        : 375 - spacer[props.margin] * 2
                }
                height="100%"
                padding={spacer.xsPlus}
                borderRadius={4}
                background={colour.background}
                color={colour.fill}
                shadow={"inset 0px 0px 0px 1px " + colour.fill4} // Border
                distribution={!props.showIcon ? "center" : "space-between"}
                style={{
                    maxWidth: 375 - spacer[props.margin] * 2,
                    minHeight: 44,
                }}
            >
                {props.showIcon &&
                    (props.iconLeft != "" || props.stretch == "full-width") && (
                        <Icon img={props.iconLeft} type={setIcon(theme)} />
                    )}
                <Frame
                    backgroundColor="none"
                    width="none"
                    height="none"
                    style={{
                        //@ts-ignore
                        fontFamily: text.body.fontFamily,
                        fontSize: text.body.fontSize,
                        paddingLeft: spacer.xsPlus,
                        paddingRight: spacer.xsPlus,
                        maxWidth: !props.showIcon
                            ? "100%"
                            : 375 -
                              Icon.defaultProps.width * 2 - // 2 icons
                              spacer.xsPlus * 2 - // 2 xsSpacers
                              spacer[props.margin] * 2, // 3 margin spacers
                    }}
                >
                    {props.text}
                </Frame>
                {props.showIcon &&
                    (props.iconRight != "" ||
                        props.stretch == "full-width") && (
                        <Icon img={props.iconRight} type={setIcon(theme)} />
                    )}
            </Stack>
        </Frame>
    )
}

// Framer Properties Panel"
addPropertyControls(Pill, {
    text: { type: ControlType.String },
    iconLeft: {
        type: ControlType.String,
        title: "Left icon",
        hidden(props) {
            return props.icon === false
        },
    },
    iconRight: {
        type: ControlType.String,
        title: "Right icon",
        hidden(props) {
            return props.icon === false
        },
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
