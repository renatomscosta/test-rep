import * as React from "react"
import { url } from "framer/resource"

//@ts-ignore
import { Text } from "./../Layout/Text"
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
import { useGlobal } from "../JSONViewer"
//@ts-ignore
import { getKeyByValue, textOptionTitles, spacerOptionTitles } from "../Helpers"
//@ts-ignore
import { Icon, iconSets } from "./../icons/Icon"
//@ts-ignore
import { Spacer } from "./../Layout/Spacer"
//@ts-ignore
import { HorisontalLine } from "./../Layout/HorisontalLine"

const spacer = basisTheme.spacer

// The Component
export function ListItem(props) {
    const { ...rest } = props

    // const [globalState, globalActions] = useGlobal() // JSON Viewer

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

    //console.log(theme)
    // Cound this be improved?
    function setIcon(ListItem, Theme) {
        if (Theme == "light") {
            return "dark"
        } else {
            return "light"
        }
    }

    /////////////////////////////////////////
    //Native UI Framework JSON Snippet
    /////////////////////////////////////////
    let json = {
        id: props.id,
        type: "list_header_component",
        data: [
            {
                key: "text",
                value: props.text,
            },
            {
                key: "cta-text",
                value: "Clear",
            },
        ],
    }
    //console.log(JSON.stringify(json, null, 2))
    console.log(JSON.stringify(json, null, 2) + ",")
    // React.useLayoutEffect(() => {
    //     globalActions.addItem(json)
    // }, [props])

    // Component's output
    return (
        // Container framer, is used to implement Left and Right margins

        <Stack
            height="100%"
            width={props.width}
            distribution={"start"}
            gap={0}
            style={{
                background: colour.background,
                minHeight: 45,
            }}
        >
            <Stack
                width="100%"
                height={"calc(100% - 1px)"}
                backgroundColor="none"
                direction="horizontal"
                distribution={"start"}
                gap={0}
                color={colour.text}
            >
                <Spacer
                    spacerHeight={props.paddingLeft}
                    type="vertical"
                    forceShow={props.spacerForceShow}
                />
                {props.iconLeft && props.iconSetLeft == "flags" && (
                    <Frame
                        image={url(
                            "code/icons/flags/" + props.iconLeft + "_@3x.png"
                        )}
                        width={24}
                        height={24}
                        backgroundColor={"rgba(0, 0, 0, 0)"}
                    />
                )}
                {props.iconLeft && (
                    <Spacer
                        spacerHeight="xsPlus"
                        type="vertical"
                        forceShow={props.spacerForceShow}
                    />
                )}
                <Stack
                    height="none"
                    backgroundColor="none"
                    direction="vertical"
                    distribution={"start"}
                    gap={0}
                    style={{
                        width:
                            "calc(100% - " +
                            (spacer[props.paddingLeft] +
                                (props.iconLeft ? spacer.xsPlus : 0) +
                                (props.iconLeft ? 24 : 0) +
                                (props.iconRight ? 24 : 0) +
                                spacer[props.paddingLeft]) +
                            "px)",
                    }}
                >
                    <Spacer
                        spacerHeight={props.paddingTop}
                        height={props.paddingTop}
                        width="100%"
                        type="horisontal"
                        forceShow={props.spacerForceShow}
                    />
                    <Frame
                        background="none"
                        width="none"
                        height="none"
                        style={{
                            //@ts-ignore
                            fontFamily: text[props.labelFontStyle].fontFamily,
                            fontSize: text[props.labelFontStyle].fontSize,
                            justifyContent: "flex-start",
                            width: "calc(100%)",
                        }}
                    >
                        {props.label}
                        {props.secondaryLabel && (
                            <span
                                style={{
                                    //@ts-ignore
                                    paddingLeft: spacer.s + "px",
                                    fontFamily: text.body.fontFamily,
                                    fontSize: text.body.fontSize,
                                    color: colour.text2,
                                }}
                            >
                                {props.secondaryLabel}
                            </span>
                        )}
                    </Frame>
                    {props.subLabel && (
                        <Spacer
                            spacerHeight="xs"
                            height={spacer["xs"]}
                            width="100%"
                            type="horisontal"
                            forceShow={props.spacerForceShow}
                        />
                    )}
                    {props.subLabel && (
                        <Frame
                            background="none"
                            width="none"
                            height="none"
                            style={{
                                //@ts-ignore
                                fontFamily: text.caption1.fontFamily,
                                fontSize: text.caption1.fontSize,
                                justifyContent: "flex-start",
                                width: "calc(100%)",
                            }}
                        >
                            {props.subLabel}
                        </Frame>
                    )}
                    <Spacer
                        spacerHeight={props.paddingBottom}
                        height={props.paddingBottom}
                        width="100%"
                        type="horisontal"
                    />
                </Stack>
                {props.iconRight && (
                    <Icon
                        img={props.iconRight}
                        type={setIcon(props.buttonType, theme)}
                        iconSet={props.iconSetRight}
                    />
                )}
                <Spacer
                    spacerHeight={props.paddingLeft}
                    type="vertical"
                    forceShow={props.spacerForceShow}
                />
            </Stack>
            <HorisontalLine margin={props.paddingLeft} themeControl={theme} />
        </Stack>
    )
}

// Container Default properties
ListItem.defaultProps = {
    label: "List item",
    subLabel: "",
    secondaryLabel: "",
    height: 45,
    width: 375,
    iconSetLeft: "flags",
    iconLeft: "",
    iconSetRight: "bob-general",
    iconRight: "CheveronRightSmall",
    labelFontStyle: "body",
    paddingTop: "xsPlus",
    paddingBottom: "xsPlus",
    paddingLeft: "m",
    dynamicType: "defaultLarge",
    theme: "light",
    moreSettings: true,
    dynamicTypeControl: "Large",
    themeControl: "light",
}

// Framer Properties Panel
addPropertyControls(ListItem, {
    label: { type: ControlType.String },
    labelFontStyle: {
        type: ControlType.Enum,
        options: Object.keys(basisTheme.text.Large),
        optionTitles: textOptionTitles, // from Helpers
    },
    subLabel: { type: ControlType.String },
    secondaryLabel: { type: ControlType.String },
    iconSetLeft: {
        type: ControlType.Enum,
        defaultValue: "flags",
        options: ["flags"],
    },
    iconLeft: {
        type: ControlType.String,
        title: "Left icon",
    },
    iconSetRight: {
        type: ControlType.Enum,
        options: iconSets,
    },
    iconRight: {
        type: ControlType.String,
        title: "Right icon",
    },
    paddingTop: {
        type: ControlType.Enum,
        options: Object.keys(basisTheme.spacer),
        optionTitles: spacerOptionTitles, // from Helpers
    },
    paddingBottom: {
        type: ControlType.Enum,
        options: Object.keys(basisTheme.spacer),
        optionTitles: spacerOptionTitles, // from Helpers
    },
    paddingLeft: {
        type: ControlType.Enum,
        options: Object.keys(basisTheme.spacer),
        title: "Padding LR",
        optionTitles: spacerOptionTitles, // from Helpers
    },
    // paddingRight: {
    //     type: ControlType.Enum,
    //     options: Object.keys(basisTheme.spacer),
    //     optionTitles: spacerOptionTitles, // from Helpers
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
})
