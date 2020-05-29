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
import { Icon } from "./../icons/Icon"

const spacer = basisTheme.spacer

// The Component
export function Button(props) {
    const { ...rest } = props
    const colour = basisTheme.colour.light
    const text = basisTheme.text.Large

    // Cound this be improved?
    function setButtonTypeProps(ButtonType) {
        if (ButtonType == "primary") {
            var backgroundColor = colour.fill
            var color = colour.background
            var shadow = "none"
        }
        if (ButtonType == "standard") {
            var backgroundColor = colour.background
            var color = colour.fill
            var shadow = "inset 0px 0px 0px 1px " + colour.fill4 // Border
        }
        if (ButtonType == "secondary") {
            var backgroundColor = colour.fill5
            var color = colour.fill
            var shadow = "none" // Border
        }
        if (ButtonType == "flat") {
            var backgroundColor = colour.background
            var color = colour.fill
            var shadow = "none"
        }
        if (ButtonType == "raised") {
            var backgroundColor = colour.background
            var color = colour.fill
            var shadow = colour.shadow1
        }
        return {
            backgroundColor,
            color,
            shadow,
        }
    }

    // Sets the correct icon based on Theme and Button Type
    // Cound this be improved?
    function setIcon(ButtonType, Theme) {
        if (Theme == "light") {
            if (ButtonType == "primary") return "light"
            else return "dark"
        } else {
            if (ButtonType == "primary") return "dark"
            else return "light"
        }
    }

    // Component's output
    return (
        // Container framer, is used to implement Left and Right margins
        <Frame
            width="100%"
            style={{
                // Set margin spacers
                height: "auto",
                minHeight: 44,
                paddingLeft: spacer[props.margin],
                paddingRight: spacer[props.margin],
                justifyContent: props.horizontalAlignment,
                display: "flex",
                background: "none",
            }}
            //[2]
            onTap={() => props.tap()}
            {...rest}
        >
            <Stack
                position="relative"
                direction="horizontal"
                width={props.stretch == "content-fit" ? "auto" : "100%"}
                height="100%"
                padding={spacer.xsPlus}
                borderRadius={4}
                {...setButtonTypeProps(props.buttonType)}
                distribution={!props.showIcon ? "center" : "space-between"}
                style={{
                    minHeight: 44,
                    maxWidth: "calc(100%)",
                }}
            >
                {props.showIcon &&
                    (props.iconLeft != "" || props.stretch == "full-width") && (
                        <Icon
                            img={props.iconLeft}
                            type={setIcon(props.buttonType, "light")}
                        />
                    )}
                <Frame
                    background="none"
                    width="none"
                    height="none"
                    style={{
                        //@ts-ignore
                        fontFamily: text.headline.fontFamily,
                        fontSize: text.headline.fontSize,
                        paddingLeft: spacer.xsPlus,
                        paddingRight: spacer.xsPlus,
                        maxWidth: !props.showIcon
                            ? "100%"
                            : "calc(100% - " +
                              (props.stretch == "full-width"
                                  ? 44
                                  : props.iconLeft != "" ||
                                    props.iconRight != ""
                                  ? 22
                                  : 44) +
                              "px)",
                    }}

                    //                     (
                    //   (!conditionA)
                    //     ? valueC
                    //     : (conditionB)
                    //     ? valueA
                    //     : valueB
                    // );
                >
                    {props.text}
                </Frame>
                {props.showIcon &&
                    (props.iconRight != "" ||
                        props.stretch == "full-width") && (
                        <Icon
                            img={props.iconRight}
                            type={setIcon(props.buttonType, "light")}
                        />
                    )}
            </Stack>
        </Frame>
    )
}

// Container Default properties
Button.defaultProps = {
    buttonType: "primary",
    width: 375,
    height: 44,
    margin: "l",
    stretch: "full-width",
    horizontalAlignment: "center",
    text: "Button component",
    showIcon: false,
    iconLeft: "CheveronLeftSmall",
    iconRight: "CheveronRightSmall",
    IconPath:
        "node_modules/@framer/farfetch.bob-general-icons/code/light/360.svg",
    dynamicType: "defaultLarge",
    theme: "light",
}

// Framer Properties Panel"
addPropertyControls(Button, {
    buttonType: {
        type: ControlType.Enum,
        defaultValue: "primary",
        options: ["primary", "standard", "secondary", "flat", "raised"],
        optionTitles: ["primary", "standard", "secondary", "flat", "raised"],
    },
    text: { type: ControlType.String },
    stretch: {
        type: ControlType.SegmentedEnum,
        defaultValue: "full-width",
        options: ["full-width", "content-fit"],
        optionTitles: ["full-width", "content-fit"],
    },
    horizontalAlignment: {
        type: ControlType.SegmentedEnum,
        defaultValue: "center",
        options: ["left", "center"],
        optionTitles: ["left", "center"],
    },
    margin: {
        type: ControlType.Enum,
        defaultValue: "l",
        options: Object.keys(spacer), // List of Spacers
        optionTitles: Object.keys(spacer),
    },
    showIcon: {
        type: ControlType.Boolean,
        title: "Icons",
        defaultValue: false,
        enabledTitle: "Show",
        disabledTitle: "Hide",
    },
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
    tap: { type: ControlType.EventHandler, title: "On Tap" },
})
