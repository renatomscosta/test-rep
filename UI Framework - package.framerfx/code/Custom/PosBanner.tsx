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
import { useGlobal } from "../JSONViewer" // JSON Viewer 1
//@ts-ignore
import { Icon } from "./../icons/Icon"

const spacer = basisTheme.spacer

// The Component
export function PosBanner(props) {
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

    // Cound this be improved?
    function setIcon(PosBanner, Theme) {
        if (Theme == "light") {
            if (PosBanner == "primary") return "light"
            else return "dark"
        } else {
            if (PosBanner == "primary") return "dark"
            else return "light"
        }
    }

    ///////////////////////////////////////////
    // Native UI Framework JSON Snippet 2
    ///////////////////////////////////////////
    // const [globalState, globalActions] = useGlobal()
    let jsonSnipet = {
        id: props.id,
        type: "pos_banner_component",
        data: [{ key: "text", value: props.text }],
    }
    // React.useLayoutEffect(() => {
    //     globalActions.addItem(jsonSnipet)
    // }, [props])
    console.log(JSON.stringify(jsonSnipet, null, 2))
    ///////////////////////////////////////////

    // Component's output
    return (
        // Container framer, is used to implement Left and Right margins
        <Frame
            backgroundColor={colour[props.backgroundColor]}
            height={props.height}
            width={props.width}
        >
            <Icon
                img={props.iconLeft}
                type={theme == "light" ? "dark" : "light"}
                iconSet={props.iconSet}
                center="y"
                style={{
                    left: 0,
                }}
            />
            <Text
                center="y"
                width="100%"
                fontStyle="headline"
                textColour={"text"}
                text={props.text}
                align="center"
                themeControl={theme}
            />
            <Icon
                img={props.iconRight}
                type={theme == "light" ? "dark" : "light"}
                iconSet={props.iconSet}
                center="y"
                style={{
                    right: 0,
                }}
            />
        </Frame>
    )
}

// Container Default properties
PosBanner.defaultProps = {
    text: "POS Banner",
    marginLeft: "m",
    marginRight: "m",
    height: 56,
    width: 375,
    iconLeft: "CheveronLeftSmall",
    iconRight: "CheveronRightSmall",
    dynamicType: "defaultLarge",
    theme: "light",
    moreSettings: true,
    dynamicTypeControl: "Large",
    themeControl: "light",
}

// Framer Properties Panel
addPropertyControls(PosBanner, {
    text: { type: ControlType.String },
    iconLeft: {
        type: ControlType.String,
        title: "Icon left",
    },
    iconRight: {
        type: ControlType.String,
        title: "Icon right",
    },
    backgroundColor: {
        type: ControlType.Enum,
        defaultValue: "fill6",
        options: ["fill", "fill6"],
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
