// import * as React from "react"
// import {
//     Frame,
//     FrameProps,
//     Scroll,
//     addPropertyControls,
//     ControlType,
// } from "framer"

// import globalHook from "use-global-hook"
// import Clipboard from "react-clipboard.js"
// import JSONPretty from "react-json-prettify"

// // Global Initial State
// const initialState = {
//     items: [],
//     enabled: false,
// }

// // Define actions
// const actions = {
//     addItem: (store, data) => {
//         if (store.state.enabled == false) {
//             return
//         }
//         if (store.state.items.some(component => component.id === data.id)) {
//             var filtered = store.state.items.filter(
//                 (item, pos) => item.id !== data.id
//             )

//             const newItems = filtered.concat([data])
//             store.setState({ items: newItems })
//         } else {
//             const newItems = store.state.items.concat([data])
//             store.setState({ items: newItems })
//         }
//     },
//     nuke: (store, data) => {
//         store.setState({ items: [] })
//     },
//     show: (store, data) => {
//         store.setState({ items: store.state.items, enabled: data })
//     },
// }

// // Attach globals to a hook
// export const useGlobal = globalHook(React, initialState, actions)

// // Main function body
// export function JSONViewer(props) {
//     const { style, enabled, ...rest } = props
//     const [globalState, globalActions] = useGlobal()

//     React.useEffect(() => {
//         globalActions.show(props.enabled)
//     }, [enabled])

//     if (globalState.items.length > 0) {
//         var json = JSON.stringify(globalState.items, null, "\t")
//         console.log("json", json)

//         return (
//             <Frame
//                 {...rest}
//                 style={{
//                     ...emptyState,
//                     ...style,
//                 }}
//             >
//                 <div style={containerStyle}>
//                     <div style={{ display: "flex", flexDirection: "row" }}>
//                         <button
//                             style={{ ...clipboard, marginLeft: "0px" }}
//                             onClick={globalActions.nuke}
//                         >
//                             Reset
//                         </button>
//                         <Clipboard
//                             data-clipboard-text={json}
//                             style={{ ...clipboard }}
//                         >
//                             Copy to Clipboard
//                         </Clipboard>
//                     </div>
//                     <div style={{ display: "flex", alignSelf: "stretch" }}>
//                         <Scroll height={750} width={props.width}>
//                             <JSONPretty json={globalState.items} padding={4} />
//                         </Scroll>
//                     </div>
//                 </div>
//             </Frame>
//         )
//     } else {
//         return <DefaultContainer {...rest} />
//     }
// }

// JSONViewer.defaultProps = {
//     height: 800,
//     width: 725,
//     enabled: false,
// }

// // Framer Properties Panel
// addPropertyControls(JSONViewer, {
//     enabled: {
//         type: ControlType.Boolean,
//         title: "Enabled",
//         defaultValue: false,
//         enabledTitle: "Show",
//         disabledTitle: "Hide",
//     },
// })

// type DefaultContainerProps = Partial<FrameProps>

// // A component for our default container
// const DefaultContainer = (props: DefaultContainerProps) => {
//     const { children, style, ...rest } = props

//     const code = `
//     import { useGlobal } from "../JSONViewer";
//     const [globalState, globalActions] = useGlobal();

//     let data = {
//         id: props.id,
//         type: "component_type",
//         displayOptions: [
//             { key: "attribute-with-props", value: props.stretch },
//             { key: "attribute-value", value: "center" }
//         ],
//         data: [{ key: "data-key", value: "data-value" }]
//     };

//     React.useLayoutEffect(() => {
//         globalActions.addItem(data);
//     }, [props]);
//     `

//     return (
//         <Frame
//             {...rest}
//             style={{
//                 ...emptyState,
//                 ...style,
//             }}
//         >
//             <h1>🤓 JSONViewer</h1>
//             <h2>Get your Components as JSON by following the pattern:</h2>
//             <div style={containerStyle}>
//                 <Clipboard data-clipboard-text={code} style={{ ...clipboard }}>
//                     Copy to Clipboard
//                 </Clipboard>
//                 <pre
//                     style={{
//                         background: "#34362e",
//                         color: "grey",
//                     }}
//                 >
//                     {code}
//                 </pre>
//             </div>
//         </Frame>
//     )
// }

// const emptyState: React.CSSProperties = {
//     color: "white",
//     background: "#272822",
//     overflow: "hidden",
//     padding: 16,
//     fontSize: 16,
//     lineHeight: 1.3,
//     textAlign: "left",
// }

// const containerStyle: React.CSSProperties = {
//     display: "flex",
//     flexDirection: "column",
// }

// const clipboard: React.CSSProperties = {
//     cursor: "pointer",
//     backgroundColor: "none",
//     background: "none",
//     border: "none",
//     outline: "none",
//     color: "white",
//     fontSize: 20,
//     fontWeight: "bold",
//     marginLeft: "auto",
//     // position: "fixed",
//     // top: "8px",
//     // right: "12px",
// }
