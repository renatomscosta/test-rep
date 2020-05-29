import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
// //@ts-ignore
// import { spacerData } from "../SpacerControl"
//@ts-ignore
//import { sharedData } from "../Settings"
//@ts-ignore
import { basisTheme, ShowSpacers } from "../BasisTheme"
//@ts-ignore
// import { useGlobal } from "../JSONViewer"
//@ts-ignore
import { spacerOptionTitles } from "../Helpers"

//@ts-ignore
import { inspectorContext } from "../Inspector"

const spacer = basisTheme.spacer
const show = ShowSpacers
export function Spacer(props) {
    const {
        spacerHeight,
        height,
        width,
        type,
        // inspectable,
        ShowSpacers,
        ...rest
    } = props
    // var [data] = spacerData()

    const inspectable = React.useContext(inspectorContext)

    // const { theme, dynamicType } = data
    // const [globalState, globalActions] = useGlobal() // JSON Viewer
    // JSON Viewer
    let json = {
        id: props.id,
        type: "spacer_element",
        displayOptions: [
            {
                key: "spacer",
                value: basisTheme.spacerMapping[props.spacerHeight],
            },
        ],
    }
    //   console.log(JSON.stringify(json, null, 2))
    console.log(JSON.stringify(json, null, 2) + ",")

    // React.useLayoutEffect(() => {
    //     globalActions.addItem(json)
    // }, [props])

    // if (props.jsonPreview) {
    //     const [globalState, globalActions] = useGlobal() // JSON Viewer
    //     React.useLayoutEffect(() => {
    //         globalActions.addItem(json)
    //     }, [props])
    // }

    // Generating 'optionTitles' for Properies Control
    // const spacerNames = Object.keys(basisTheme.spacer)
    // const spacerSizes = []

    return (
        <Frame
            height={
                props.type == "horisontal" ? spacer[props.spacerHeight] : "100%"
            }
            width={
                props.type == "horisontal" ? "100%" : spacer[props.spacerHeight]
            }
            overflow="hidden"
            // backgroundColor={
            //     data.showSpacers ? "#FAFF66" : "rgba(255, 255, 255, 0)" // transparent
            // }
            backgroundColor={
                props.forceShow || show
                    ? "#FAFF66"
                    : inspectable
                    ? "#FAFF66"
                    : "rgba(255, 255, 255, 0)" // transparent
            }
            style={{
                fontSize: 5,
                fontWeight: 200,
                lineHeight: -6,
                border:
                    props.forceShow || show
                        ? "1px solid #EBF312"
                        : inspectable
                        ? "1px solid #EBF312"
                        : "none" // transparent
            }}
        >
            {" "}
            <Frame
                width="100%"
                height="100%"
                backgroundColor={"none"}
                rotate={props.type == "horisontal" ? 0 : 90}
                color="black"
            >
                {// data.showSpacers
                // ? props.spacerHeight + " " + spacer[props.spacerHeight]
                // : ""
                props.forceShow || show
                    ? spacerHeight + "\u00A0" + spacer[spacerHeight]
                    : inspectable
                    ? spacerHeight + "\u00A0" + spacer[spacerHeight]
                    : ""}
            </Frame>
        </Frame>
    )
}

// Default properties
Spacer.defaultProps = {
    spacerHeight: "l",
    height: spacer["l"],
    width: 375,
    type: "horisontal",
    jsonPreview: false,
    //spacersControl: true,
}

// // Generating 'optionTitles' for Properies Control
// const spacerNames = Object.keys(basisTheme.spacer)
// const spacerSizes = []

// for (let i = 0; i < spacerNames.length; i++) {
//     spacerSizes.push(spacerNames[i] + ", ↕" + basisTheme.spacer[spacerNames[i]])
// }

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

// Framer Properties Panel
addPropertyControls(Spacer, {
    spacerHeight: {
        type: ControlType.Enum,
        title: "Height",
        defaultValue: "l",
        options: Object.keys(basisTheme.spacer),
        optionTitles: spacerOptionTitles,
    },
    type: {
        type: ControlType.SegmentedEnum,
        defaultValue: "horisontal",
        options: ["horisontal", "vertical"],
        optionTitles: ["→", "↓"],
    },
    forceShow: {
        type: ControlType.Boolean,
        title: "Force Show",
        defaultValue: false,
        enabledTitle: "true",
        disabledTitle: "false",
    },
    // jsonPreview: {
    //     type: ControlType.Boolean,
    //     title: "JSON",
    //     defaultValue: true,
    //     enabledTitle: "Show",
    //     disabledTitle: "Hide",
    // },
})
