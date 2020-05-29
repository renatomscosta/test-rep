// import * as React from "react"
// // @ts-ignore
// import { Frame, createData, addPropertyControls, ControlType } from "framer"
// //import { useData } from "./Shared"
// // import { useGlobal } from "./JSONViewer"

// export const sharedData = createData({
//     showSpacers: false,
//     theme: "light", // At some point rename theme to mode
//     dynamicType: "Large",
// })

// export function Settings(props) {
//     const [data, setData] = sharedData()

//     // const [globalState, globalActions] = useGlobal()
//     const { showSpacersControl, themeControl, dynamicTypeControl } = props
//     const { showSpacers, theme, dynamicType } = data

//     const handleClick = value => {
//         setData({
//             ...data,
//         })
//     }

//     React.useEffect(() => {
//         setData({
//             ...data,
//             showSpacers: showSpacersControl,
//             theme: themeControl,
//             dynamicType: dynamicTypeControl,
//         })
//     }, [showSpacersControl, themeControl, dynamicTypeControl])

//     return (
//         <Frame
//             size="100%"
//             background={showSpacersControl ? "#FAFF66" : "#7D8118"}
//             center
//             style={{
//                 fontSize: 30,
//                 fontWeight: 700,
//                 paddingLeft: 10,
//                 paddingTop: 10,
//             }}
//         >
//             ⚙️ DISABLED
//             <br />
//             Mode: {themeControl == "light" ? "⬜️" : "⬛️"}
//             <br />
//             Type: {dynamicTypeControl}
//         </Frame>
//     )
// }

// Settings.defaultProps = {
//     showSpacersControl: false,
//     themeControl: "light",
//     dynamicTypeControl: "Large",
// }

// addPropertyControls(Settings, {
//     // showSpacersControl: {
//     //     type: ControlType.Boolean,
//     //     title: "👁 spacers",
//     //     defaultValue: false,
//     //     enabledTitle: "Show",
//     //     disabledTitle: "Hide",
//     // },
//     themeControl: {
//         type: ControlType.SegmentedEnum,
//         title: "⬜️⬛️",
//         defaultValue: "light",
//         options: ["light", "dark"],
//     },
//     dynamicTypeControl: {
//         type: ControlType.Enum,
//         title: "𝐓𝐘𝐏𝐄 ↨",
//         defaultValue: "Large",
//         options: [
//             "xSmall",
//             "Small",
//             "Medium",
//             "Large",
//             "xLarge",
//             "xxLarge",
//             "xxxLarge",
//             "AX1",
//             "AX2",
//             "AX3",
//             "AX4",
//             "AX5",
//         ],
//         optionTitles: [
//             "xSmall",
//             "Small",
//             "Medium",
//             "Large (Default)",
//             "xLarge ",
//             "xxLarge",
//             "xxxLarge ",
//             "AX1",
//             "AX2",
//             "AX3",
//             "AX4",
//             "AX5",
//         ],
//     },
// })
