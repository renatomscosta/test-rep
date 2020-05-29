// import * as React from "react"
// // @ts-ignore
// import { Frame, createData, addPropertyControls, ControlType } from "framer"

// export const spacerData = createData({
//     showSpacers: false,
// })

// export function SpacerControl(props) {
//     const [data, setData] = spacerData()
//     const { showSpacersControl } = props
//     const { showSpacers } = data

//     const handleClick = value => {
//         setData({
//             ...data,
//         })
//     }

//     React.useEffect(() => {
//         setData({
//             ...data,
//             showSpacers: showSpacersControl,
//         })
//     }, [showSpacersControl])

//     return (
//         <Frame
//             size="100%"
//             background={showSpacersControl ? "#FAFF66" : "#7D8118"}
//             center
//             style={{
//                 fontSize: 70,
//                 fontWeight: 900,
//             }}
//         >
//             {showSpacersControl ? " ON" : " OFF"}
//         </Frame>
//     )
// }

// SpacerControl.defaultProps = {
//     showSpacersControl: true,
// }

// addPropertyControls(SpacerControl, {
//     showSpacersControl: {
//         type: ControlType.Boolean,
//         title: "👁 spacers",
//         defaultValue: true,
//         enabledTitle: "Show",
//         disabledTitle: "Hide",
//     },
// })
