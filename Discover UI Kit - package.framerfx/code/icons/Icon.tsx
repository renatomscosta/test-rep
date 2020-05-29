import * as React from "react"
import { url } from "framer/resource"
import { Frame, addPropertyControls, ControlType } from "framer"

// Default properties
Icon.defaultProps = {
    img: "CheveronRightSmall",
    type: "dark",
    width: 24,
    height: 24,
    iconSet: "bob-general",
}

export function Icon(props) {
    const { ...rest } = props
    const iconFile =
        "code/icons/" +
        props.iconSet +
        "/" +
        props.type +
        "/" +
        props.img +
        ".svg"

    return (
        <Frame
            image={url(iconFile)}
            width={props.width}
            height={props.height}
            backgroundColor={"rgba(0, 0, 0, 0)"}
            {...rest}
        />
    )
}

// Framer Properties Panel
addPropertyControls(Icon, {
    type: {
        type: ControlType.SegmentedEnum,
        defaultValue: "dark",
        options: ["dark", "light"],
        optionTitles: ["dark", "light"],
    },
    img: {
        type: ControlType.String,
        title: "Icon",
    },
})
