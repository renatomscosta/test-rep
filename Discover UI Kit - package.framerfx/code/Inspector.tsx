import * as React from "react"
import { Frame, FrameProps, addPropertyControls, ControlType } from "framer"

export const inspectorContext = React.createContext(false)

type InspectorProps = Partial<FrameProps> &
    Partial<{
        target: React.ReactNodeArray
    }>

export function Inspector(props: InspectorProps) {
    const { target, style, ...rest } = props
    if (React.Children.count(target) === 0) {
        return (
            <Frame {...rest} style={containerStyle}>
                <h1>🕵🏻‍</h1>
            </Frame>
        )
    }
    return (
        <inspectorContext.Provider value={true}>
            <Frame {...rest} style={containerStyle}>
                {target}
            </Frame>
        </inspectorContext.Provider>
    )
}

Inspector.defaultProps = {
    height: 128,
    width: 240,
    text: "Get inspecting!",
    target: [],
}

addPropertyControls(Inspector, {
    target: {
        title: "Target",
        type: ControlType.ComponentInstance,
    },
})

const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
}
