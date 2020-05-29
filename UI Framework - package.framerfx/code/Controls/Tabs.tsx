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
//@ts-ignore
import { useGlobal } from "../JSONViewer" // JSON Viewer 1

//const colour = basisTheme.colour
const spacer = basisTheme.spacer

// The Component
export function Tabs(props) {
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
        id: props.id,
        type: "tab_selector_component",
        data: [{ key: "tab-names", value: props.tabNames }],
        displayOptions: [{ key: "tab-colors", value: props.tabColors }],
    }

    //console.log(JSON.stringify(jsonSnipet, null, 2))
    console.log(JSON.stringify(jsonSnipet, null, 2) + ",")

    // React.useLayoutEffect(() => {
    //     globalActions.addItem(jsonSnipet)
    // }, [props])
    ///////////////////////////////////////////

    return (
        <Stack
            width={"100%"}
            height={"100%"}
            alignment="start"
            direction="horizontal"
            backgroundColor={colour.background}
            distribution="space-evenly"
            {...rest}
        >
            {props.tabNames.map(function(tab, index) {
                return (
                    <Frame
                        key={index}
                        height="none"
                        width="none"
                        backgroundColor={colour.background}
                        color={colour[props.tabColors[index]]}
                        style={{
                            paddingTop: spacer.s,
                            paddingBottom: 7,
                            borderBottom:
                                props.currentTab == tab
                                    ? "3pt solid " +
                                      //@ts-ignore
                                      colour[props.tabColors[index]].toString()
                                    : "none",
                            fontFamily: text.headline.fontFamily,
                            fontSize: text.headline.fontSize,
                        }}
                    >
                        {tab}
                    </Frame>
                )
            })}
        </Stack>
    )
}

Tabs.defaultProps = {
    height: 48,
    width: 375,
    fontStyle: "body",
    textColour: "text",
    currentTab: "Home",
    showLabels: false,
    tabNames: ["Home", "Search", "Designers"],
    tabColors: ["fill", "fill", "fill"],
    dynamicType: "defaultLarge",
    theme: "light",
    moreSettings: true,
    dynamicTypeControl: "Large",
    themeControl: "light",
}

// Framer Properties Panel"
addPropertyControls(Tabs, {
    currentTab: {
        title: "CurrentTab",
        type: ControlType.String,
        defaultValue: "Home",
    },
    tabNames: {
        title: "Tab Names",
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
        defaultValue: ["Home", "Search", "Designers"],
        maxCount: 5,
    },
    tabColors: {
        title: "Tab Colours",
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
        defaultValue: ["fill", "fill", "fill"],
        maxCount: 5,
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
