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
import { Icon } from "./../icons/Icon"
//@ts-ignore
import { useGlobal } from "../JSONViewer"

// Container Default properties
ListHeader.defaultProps = {
    text: "List Header",
    marginLeft: "m",
    height: 60,
    width: 375,
    ctaText: "Clear all",
    inspect: false,
    dynamicType: "defaultLarge",
    theme: "light",
    moreSettings: true,
    dynamicTypeControl: "Large",
    themeControl: "light",
}

const spacer = basisTheme.spacer

// The Component
export function ListHeader(props) {
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

    // Cound this be improved?
    function setIcon(ListHeader, Theme) {
        if (Theme == "light") {
            if (ListHeader == "primary") return "light"
            else return "dark"
        } else {
            if (ListHeader == "primary") return "dark"
            else return "light"
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
        <Frame
            height={props.height}
            width={props.width}
            style={{
                background: colour.background,
            }}
        >
            <Stack
                width="100%"
                // paddingLeft={spacer.sPlus}
                // paddingRight={spacer.sPlus}
                height="100%"
                backgroundColor="none"
                direction="horizontal"
                distribution={"start"}
                gap={0}
                color={colour.text}
            >
                <Frame
                    background="none"
                    width="none"
                    height="none"
                    style={{
                        //@ts-ignore
                        fontFamily: text.title1.fontFamily,
                        fontSize: text.title1.fontSize,
                        paddingLeft: spacer.sPlus,
                        maxWidth: "70%",
                        justifyContent: "flex-start",
                        width: "70%",
                    }}
                >
                    {props.text}
                </Frame>
                <Frame
                    background="none"
                    width="none"
                    height="none"
                    style={{
                        //@ts-ignore
                        fontFamily: text.body.fontFamily,
                        fontSize: text.body.fontSize,
                        paddingRight: spacer.sPlus,
                        maxWidth: "30%",
                        justifyContent: "flex-end",
                        width: "30%",
                    }}
                >
                    {props.ctaText}
                </Frame>
            </Stack>
        </Frame>
    )
}

// Framer Properties Panel
addPropertyControls(ListHeader, {
    text: { type: ControlType.String },
    ctaText: { type: ControlType.String },
    inspect: {
        type: ControlType.Boolean,
        title: "Inspect",
        defaultValue: false,
        enabledTitle: "Show",
        disabledTitle: "Hide",
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
