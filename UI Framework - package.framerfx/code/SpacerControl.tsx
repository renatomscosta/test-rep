import * as React from "react"
// @ts-ignore
import { Frame, createData, addPropertyControls, ControlType } from "framer"
//import { useData } from "./Shared"
// import { useGlobal } from "./JSONViewer"

export const spacerData = createData({
    showSpacers: false,
})

export function SpacerControl(props) {
    const [data, setData] = spacerData()
    // const [globalState, globalActions] = useGlobal()
    const { showSpacersControl } = props
    const { showSpacers } = data

    const handleClick = value => {
        setData({
            ...data,
        })
    }

    // let json = {
    //     id: props.id,
    //     type: "spacer_element",
    //     displayOptions: [{ key: "spacer", value: "SPlus" }],
    // }

    React.useEffect(() => {
        setData({
            ...data,
            showSpacers: showSpacersControl,
        })
    }, [showSpacersControl])

    // React.useLayoutEffect(() => {
    //     globalActions.addItem(json)
    // }, [props])

    return (
        <Frame
            size="100%"
            background={showSpacersControl ? "#FAFF66" : "#7D8118"}
            center
            style={{
                fontSize: 30,
                fontWeight: 900,
            }}
        >
            {" "}
            🪓 DEPRICATED USE THE INSPECTOR
            {
                //showSpacersControl ? " ON" : " OFF"
            }
        </Frame>
    )
}

SpacerControl.defaultProps = {
    showSpacersControl: true,
}

addPropertyControls(SpacerControl, {
    showSpacersControl: {
        type: ControlType.Boolean,
        title: "👁 spacers",
        defaultValue: true,
        enabledTitle: "Show",
        disabledTitle: "Hide",
    },
})
