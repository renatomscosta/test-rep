import * as React from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"

//@ts-ignore
// import { useGlobal } from "../JSONViewer"

export function Image(props) {
    // const [globalState, globalActions] = useGlobal() // JSONViewer

    // JSON Viewer

    let json = {
        id: props.id,
        type: "image_element",
        displayOptions: [
            { key: "horizontal-alignment", value: props.alignment },
            { key: "stretch", value: props.stretch },
            { key: "height", value: props.height },
            { key: "width", value: props.imgWidth },
            { key: "content-mode", value: props.contentMode },
        ],
        data: [
            {
                key: props.data == "url" ? "image-url" : "local-image",
                value: props.data == "url" ? props.imageUrl : props.imageLocal,
            },
        ],
    }

    //console.log(JSON.stringify(json, null, 2))
    console.log(JSON.stringify(json, null, 2) + ",")
    // React.useLayoutEffect(() => {
    //     globalActions.addItem(json)
    // }, [props])

    return (
        <Stack
            direction="horizontal"
            distribution={
                props.alignment == "center"
                    ? "center"
                    : props.alignment == "left"
                    ? "start"
                    : "end"
            }
            alignment="start"
            width="100%"
            height="100%"
            //backgroundColor="red"
        >
            <Frame
                height={"100%"}
                width={
                    props.stretch == "full-width"
                        ? "100%"
                        : props.imgWidth + "px"
                }
                overflow="hidden"
                image={props.data == "url" ? props.imageUrl : props.imageLocal}
                backgroundColor="none"
                style={{
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize:
                        props.contentMode == "aspect-fill"
                            ? "cover"
                            : props.contentMode == "aspect-fit"
                            ? "contain"
                            : "100% 100%",
                }}
            />
        </Stack>
    )
}

// Default properties
Image.defaultProps = {
    contentMode: "aspect-fill",
    alignment: "center",
    imgWidth: "100",
    width: 375,
    height: 200,
    stretch: "full-width",
    imageUrl:
        "https://s3-us-west-1.amazonaws.com/artsvuni/farfetch/hero-01.png",
}

// Framer Properties Panel
addPropertyControls(Image, {
    data: {
        type: ControlType.SegmentedEnum,
        defaultValue: "url",
        options: ["url", "local"],
    },
    imageUrl: {
        type: ControlType.String,
        defaultValue:
            "https://s3-us-west-1.amazonaws.com/artsvuni/farfetch/hero-01.png",
        hidden(props) {
            return props.data != "url"
        },
    },
    imageLocal: {
        type: ControlType.Image,
        hidden(props) {
            return props.data != "local"
        },
    },
    contentMode: {
        type: ControlType.Enum,
        defaultValue: "aspect-fill",
        options: ["aspect-fill", "aspect-fit", "scale-to-fill"],
    },
    stretch: {
        type: ControlType.SegmentedEnum,
        defaultValue: "full-width",
        options: ["full-width", "fixed"],
    },
    imgWidth: {
        type: ControlType.Number,
        defaultValue: 100,
        min: 0,
        max: 375,
        unit: "px",
        step: 1,
        title: "width",
        hidden(props) {
            return props.stretch == "full-width"
        },
    },
    alignment: {
        type: ControlType.SegmentedEnum,
        defaultValue: "center",
        options: ["left", "center", "right"],
        hidden(props) {
            return props.stretch == "full-width"
        },
    },
})
