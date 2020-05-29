// import * as React from "react"
// import { url } from "framer/resource"
// import { Frame, Stack, addPropertyControls, ControlType } from "framer"
// //@ts-ignore
// import { basisTheme } from "../BasisTheme"
// //@ts-ignore
// import { sharedData } from "../Settings"
// //@ts-ignore
// import { Icon } from "./../icons/Icon"
// //@ts-ignore
// import { Spacer } from "./../Layout/Spacer"
// //@ts-ignore
// import { Text } from "./../Layout/Text"
// //@ts-ignore
// import { Image } from "./../Layout/Image"
// //@ts-ignore
// import { HorisontalLine } from "./../Layout/HorisontalLine"
// //@ts-ignore
// // import { useGlobal } from "../JSONViewer" // JSON Viewer 1

// const spacer = basisTheme.spacer

// // Components Container Default properties
// ListProductCard.defaultProps = {
//     width: 375,
//     height: 389,
//     marginLeft: "s",
//     text: "Draft component, dynamic text example",
//     fontStyle: "body",
//     textColour: "text",
//     jsonPreview: false,
//     brandName: "Gucci",
//     description: "Product description",
//     price: "£500",
//     tag: "New season",
//     imageUrl:
//         "https://cdn-images.farfetch-contents.com/14/61/42/25/14614225_23897535_300.jpg",
// }

// export function ListProductCard(props) {
//     const { ...rest } = props
//     const [data] = sharedData()

//     const { mode, dynamicType } = data
//     const colour = basisTheme.colour[data.theme]
//     const text = basisTheme.text[data.dynamicType] // If you are going to use Dynamic Type use this line
//     //   const text = theme.text.Large // If you only need fixed fonts use this

//     ///////////////////////////////////////////
//     // JSON Snippet 2
//     ///////////////////////////////////////////
//     // const [globalState, globalActions] = useGlobal() // JSON Viewer
//     let jsonSnipet = {
//         id: props.id,
//         type: "list_product_card_component",
//         displayOptions: [{ key: "product-card-type", value: "list" }],
//         data: [
//             {
//                 key: "products",
//                 value: [
//                     {
//                         "brand-name": props.brandName,
//                         description: props.description,
//                         price: props.price,
//                         tag: props.tag,
//                         "image-url": props.imageUrl,
//                     },
//                 ],
//             },
//         ],
//     }
//     console.log(JSON.stringify(jsonSnipet, null, 2))
//     // React.useLayoutEffect(() => {
//     //     globalActions.addItem(jsonSnipet)
//     // }, [props])
//     ///////////////////////////////////////////
//     return (
//         <Frame
//             width="100%"
//             height="100%"
//             style={{
//                 background: colour.background,
//             }}
//         >
//             <Stack
//                 width="calc(100%)"
//                 paddingLeft={spacer.sPlus}
//                 paddingRight={spacer.sPlus}
//                 height="100%"
//                 backgroundColor="none"
//                 direction="vertical"
//                 borderRadius={4}
//                 distribution={"start"}
//                 gap={0}
//                 color={colour.text}
//             >
//                 <Spacer
//                     spacerHeight="sPlus"
//                     height={spacer["sPlus"]}
//                     width="100%"
//                     type="horisontal"
//                 />
//                 <Frame
//                     background="none"
//                     width="none"
//                     height="none"
//                     style={{
//                         //@ts-ignore
//                         fontFamily: text.caption1.fontFamily,
//                         fontSize: text.caption1.fontSize,
//                         //paddingLeft: spacer.sPlus,
//                         maxWidth: "100%",
//                         justifyContent: "left",
//                         width: "100%",
//                     }}
//                 >
//                     {props.tag}
//                 </Frame>
//                 <Frame
//                     width={190}
//                     height={235}
//                     image={
//                         props.img == "url" ? props.imageUrl : props.imageLocal
//                     }
//                     backgroundColor="none"
//                 />
//                 <Spacer
//                     spacerHeight="s"
//                     height={spacer["sPlus"]}
//                     width="100%"
//                     type="horisontal"
//                 />
//                 <Frame
//                     background="none"
//                     width="none"
//                     height="none"
//                     style={{
//                         //@ts-ignore
//                         fontFamily: text.title2.fontFamily,
//                         fontSize: text.title2.fontSize,
//                         paddingLeft: spacer.xsPlus,
//                         paddingRight: spacer.xsPlus,
//                         maxWidth: "100%",
//                     }}
//                 >
//                     {props.brandName}
//                 </Frame>

//                 <Spacer
//                     spacerHeight="xxs"
//                     height={spacer["xxs"]}
//                     width="100%"
//                     type="horisontal"
//                 />
//                 <Frame
//                     background="none"
//                     width="none"
//                     height="none"
//                     style={{
//                         //@ts-ignore
//                         fontFamily: text.callout.fontFamily,
//                         fontSize: text.callout.fontSize,
//                         paddingLeft: spacer.xsPlus,
//                         paddingRight: spacer.xsPlus,
//                         maxWidth: "100%",
//                     }}
//                 >
//                     {props.description}
//                 </Frame>
//                 <Spacer
//                     spacerHeight="s"
//                     height={spacer["xsPlus"]}
//                     width="100%"
//                     type="horisontal"
//                 />
//                 <Frame
//                     background="none"
//                     width="none"
//                     height="none"
//                     style={{
//                         //@ts-ignore
//                         fontFamily: text.title2.fontFamily,
//                         fontSize: text.title2.fontSize,
//                         paddingLeft: spacer.xsPlus,
//                         paddingRight: spacer.xsPlus,
//                         maxWidth: "100%",
//                     }}
//                 >
//                     {props.price}
//                 </Frame>
//                 <Spacer
//                     spacerHeight="sPlus"
//                     height={spacer["sPlus"]}
//                     width="100%"
//                     type="horisontal"
//                 />
//                 <HorisontalLine margin="none" />
//             </Stack>
//             <Stack
//                 height={40}
//                 padding={16}
//                 width="100%"
//                 alignment="start"
//                 direction="horizontal"
//                 distribution={"end"}
//             >
//                 <Icon
//                     img={"Star"}
//                     type={data.theme == "light" ? "dark" : "light"}
//                 />
//             </Stack>
//         </Frame>
//     )
// }

// // Framer Properties Panel
// addPropertyControls(ListProductCard, {
//     img: {
//         type: ControlType.SegmentedEnum,
//         defaultValue: "url",
//         options: ["url", "local"],
//     },
//     imageUrl: {
//         type: ControlType.String,
//         defaultValue:
//             "https://cdn-images.farfetch-contents.com/14/61/42/25/14614225_23897535_300.jpg",
//         hidden(props) {
//             return props.img != "url"
//         },
//     },
//     imageLocal: {
//         type: ControlType.Image,
//         hidden(props) {
//             return props.img != "local"
//         },
//     },
//     brandName: { type: ControlType.String, defaultValue: "Gucci" },
//     description: {
//         type: ControlType.String,
//         defaultValue: "product information",
//     },
//     price: { type: ControlType.String, defaultValue: "£500" },
//     tag: { type: ControlType.String, defaultValue: "New season" },
// })
