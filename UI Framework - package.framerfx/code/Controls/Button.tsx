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
// import { useGlobal } from "../JSONViewer" // JSON Viewer
//@ts-ignore
import { localPropControls } from "../Helpers"

//@ts-ignore
import { Icon } from "@framer/farfetch.ff-icons/code/Icon"

//@ts-ignore
import { Spacer } from "./../Layout/Spacer"

const spacer = basisTheme.spacer

// The Component
export function Button(props) {
    const { ...rest } = props

    // const [data] = sharedData()
    // const { dynamicType } = data
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

    const text =
        props.moreSettings == true
            ? basisTheme.text[props.dynamicTypeControl]
            : props.dynamicType
            ? basisTheme.text[data.dynamicType]
            : basisTheme.text.Large

    // JSON Viewer — The snippet /////////////////////////
    // const [globalState, globalActions] = useGlobal()
    let jsonSnippet = {
        id: props.id,
        type: "button_component",
        displayOptions: [
            { key: "button-type", value: props.buttonType },
            { key: "stretch", value: props.stretch },
            { key: "horizontal-alignment", value: "center" },
        ],
        data: [{ key: "text", value: props.text }],
    }
    //  console.log(JSON.stringify(jsonSnippet, null, 2))
    console.log(JSON.stringify(jsonSnippet, null, 2) + ",")
    // React.useLayoutEffect(() => {
    //     globalActions.addItem(jsonSnippet)
    // }, [props])
    ////////////////////////////////////////////////////////

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
            var shadow: string = colour.shadow1
        }
        return {
            backgroundColor,
            color,
            shadow,
        }
    }

    // Sets the correct icon based on Theme and Button Type
    // Cound this be improved?
    function setIcon(ButtonType) {
        if (ButtonType == "primary") return "fill7"
        else return "fill"
    }

    // Event Handler
    function onTap(event, info) {
        console.log("Tap!")
    }

    //const margins = 24 * 2 + spacer.xxs * 2 + spacer.xxxs * 2

    // Component's output
    return (
        // Container framer, is used to implement Left and Right margins

        <Stack
            height="100%"
            width={props.width}
            distribution={
                props.horizontalAlignment == "center" ||
                props.stretch == "full-width"
                    ? "center"
                    : "start"
            }
            gap={0}
            direction="horizontal"
            style={{
                background: colour.background,
                minHeight: 44,
            }}
            {...rest}
            onTap={() => props.tap()}
        >
            <Spacer
                spacerHeight={props.margin}
                type="vertical"
                forceShow={props.spacerForceShow}
            />
            <Stack
                direction="horizontal"
                height="100%"
                gap={0}
                borderRadius={4}
                distribution={
                    props.showIconRight && !props.showIconLeft
                        ? "end"
                        : !props.showIconRight && props.showIconLeft
                        ? "start"
                        : "center"
                }
                style={{
                    minHeight: 44,
                    width:
                        props.stretch == "full-width"
                            ? "calc(100% - " + spacer[props.margin] * 2 + "px)"
                            : "auto",
                }}
                {...setButtonTypeProps(props.buttonType)}
            >
                <Spacer
                    spacerHeight={"xsPlus"}
                    type="vertical"
                    forceShow={props.spacerForceShow}
                />
                {props.showIconLeft && (
                    <Icon
                        img={props.iconLeft}
                        dynamicFill={setIcon(props.buttonType)}
                        themeControl={theme}
                    />
                )}
                {props.text != "" && (
                    <Stack
                        height="none"
                        backgroundColor="none"
                        direction="vertical"
                        distribution={"start"}
                        gap={0}
                        width={
                            props.stretch == "full-width"
                                ? "calc(100% - " +
                                  (24 + spacer.xsPlus) * 2 +
                                  "px)"
                                : "auto"
                        }
                    >
                        <Spacer
                            spacerHeight="s"
                            height={spacer.s}
                            width="100%"
                            type="horisontal"
                            forceShow={props.spacerForceShow}
                        />
                        <Frame
                            width="100%"
                            background="none"
                            height="none"
                            style={{
                                //@ts-ignore
                                fontFamily: text.headline.fontFamily,
                                fontSize: text.headline.fontSize,
                            }}
                        >
                            {props.text}
                        </Frame>
                        <Spacer
                            spacerHeight="s"
                            height={spacer.s}
                            width="100%"
                            type="horisontal"
                            forceShow={props.spacerForceShow}
                        />
                    </Stack>
                )}
                {props.showIconRight && (
                    <Icon
                        img={props.iconRight}
                        dynamicFill={setIcon(props.buttonType)}
                        themeControl={theme}
                    />
                )}
                <Spacer
                    spacerHeight={"xsPlus"}
                    type="vertical"
                    forceShow={props.spacerForceShow}
                />
            </Stack>
            <Spacer
                spacerHeight={props.margin}
                type="vertical"
                forceShow={props.spacerForceShow}
            />
        </Stack>
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
    iconLeft: "/SVersions/IconCheveronLeftS",
    iconRight: "/SVersions/IconCheveronRightS",
    dynamicType: "defaultLarge",
    theme: "light",
    moreSettings: true,
    dynamicTypeControl: "Large",
    themeControl: "light",
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
        hidden(props) {
            return props.stretch == "full-width"
        },
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
    showIconLeft: {
        type: ControlType.Boolean,
        title: "Icon Left",
        defaultValue: false,
        enabledTitle: "Show",
        disabledTitle: "Hide",
    },
    iconLeft: {
        type: ControlType.String,
        title: "Left icon",
        hidden(props) {
            return props.showIconLeft === false
        },
    },
    showIconRight: {
        type: ControlType.Boolean,
        title: "Icon Right",
        defaultValue: false,
        enabledTitle: "Show",
        disabledTitle: "Hide",
    },
    iconRight: {
        type: ControlType.String,
        title: "Right icon",
        hidden(props) {
            return props.showIconRight === false
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
    spacerForceShow: {
        hidden(props) {
            return props.moreSettings === false
        },
        type: ControlType.Boolean,
        title: "🟨 Force Show Spacers",
        defaultValue: false,
        enabledTitle: "true",
        disabledTitle: "false",
    },
    tap: { type: ControlType.EventHandler, title: "On Tap" },
})
