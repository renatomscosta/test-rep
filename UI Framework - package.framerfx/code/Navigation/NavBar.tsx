import * as React from "react"
import { url } from "framer/resource"
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
import { Text } from "./../Layout/Text"
//@ts-ignore
//import { Icon } from "@framer/farfetch.bob-general-icons/code/Icon/"
import { Icon } from "./../icons/Icon"

// Container Default properties
NavBar.defaultProps = {
    width: 375,
    height: 44,
    title: "Screen Title",
    subTitle: "640 items",
    iconLeft: "L-chevronLeft",
    iconRight: "bag",
    bagNumber: "12",
    dynamicType: "defaultLarge",
    theme: "light",
    iconSet: "navbar",
    textLeft: "Back",
    textRight: "Clear all",
    showLogo: false,
}

export function NavBar(props) {
    const { ...rest } = props

    const data = {
        theme: "light",
        dynamicType: "Large",
    }

    const { theme } = data

    const colour = basisTheme.colour[theme]
    const text = basisTheme.text.Large // Disables Dynamic Type
    const spacer = basisTheme.spacer

    const iconFile =
        "code/icons/navbar/" +
        (theme == "light" ? "dark" : "light") +
        "/farfetch-logo.svg"

    //console.log(iconFile)
    return (
        <Frame
            width="100%"
            height="44px"
            style={{
                // Set margin spacers
                height: "auto",
                minHeight: 44,
                paddingLeft: spacer.s,
                paddingRight: spacer.s,
                justifyContent: "center",
                display: "flex",
                background: colour.background,
            }}
            {...rest}
        >
            <Stack
                width="100%"
                height="44px"
                direction="vertical"
                distribution="center"
                //padding={0}
                gap={0}
            >
                {props.showLogo && (
                    <Frame
                        image={url(iconFile)}
                        width={134}
                        height={18}
                        backgroundColor={"rgba(0, 0, 0, 0)"}
                    />
                )}
                {!props.showLogo && props.title && (
                    <Text
                        marginLeft="none"
                        marginRight="none"
                        fontStyle="headline"
                        text={props.title}
                        width="100%"
                        align="center"
                        dynamicType={false}
                    />
                )}
                {!props.showLogo && props.subTitle && (
                    <Text
                        marginLeft="none"
                        marginRight="none"
                        fontStyle="caption1"
                        text={props.subTitle}
                        width="100%"
                        align="center"
                        dynamicType={false}
                    />
                )}
            </Stack>
            <Stack
                //width={375 - spacer.s * 2} // Replace logic with % so I could scale up and down
                width="100%" // Replace logic with % so I could scale up and down
                height="44px"
                direction="horizontal"
                distribution="space-between"
                style={{
                    paddingLeft: spacer.s,
                }}
            >
                {props.iconLeft ? (
                    <Icon
                        img={props.iconLeft}
                        type={theme == "light" ? "dark" : "light"}
                        iconSet={props.iconSet}
                        //backgroundColor="grey"
                        //@ts-ignore
                        onTap={() => props.leftIconTap()}
                    />
                ) : (
                    <Text
                        marginLeft="none"
                        marginRight="none"
                        fontStyle="body"
                        text={props.textLeft}
                        width="80"
                        dynamicType={false}
                        onTap={() => props.leftTextTap()}
                        //backgroundColor="green"
                    />
                )}

                {props.iconRight ? (
                    <Stack
                        height="44px"
                        width="auto"
                        direction="horizontal"
                        distribution="end"
                        gap={0}
                        right="19px" // hardcoded value in order to match live
                        //backgroundColor="red"
                    >
                        <Text
                            fontStyle="caption1"
                            text={props.bagNumber}
                            width="18px"
                            height="18px"
                            marginLeft="0"
                            marginRight="0"
                            align="right"
                            dynamicType={false}
                            //backgroundColor="blue"
                            style={{
                                paddingTop: "3px", //hardcoded to match live
                                marginRight: "3px", //hardcoded to match live
                            }}
                        />
                        <Icon
                            img={props.iconRight}
                            type={theme == "light" ? "dark" : "light"}
                            iconSet={props.iconSet}
                            //@ts-ignore
                            onTap={() => props.rightIconTap()}
                            //backgroundColor="green"
                        />
                    </Stack>
                ) : (
                    <Text
                        marginLeft="none"
                        marginRight="none"
                        fontStyle="body"
                        text={props.textRight}
                        width="80"
                        align="right"
                        dynamicType={false}
                        onTap={() => props.rightTextTap()}
                        //backgroundColor="green"
                    />
                )}
            </Stack>
        </Frame>
    )
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(NavBar, {
    showLogo: {
        type: ControlType.Boolean,
        title: "Logo",
        defaultValue: false,
        enabledTitle: "Show",
        disabledTitle: "Hide",
    },
    title: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "Screen Title",
    },
    subTitle: {
        title: "Sub title",
        type: ControlType.String,
        defaultValue: "640 items",
    },
    iconSet: {
        title: "Icon set",
        type: ControlType.Enum,
        defaultValue: "navbar",
        options: ["navbar", "bob-general"],
    },
    iconLeft: {
        type: ControlType.String,
        title: "Icon left",
    },
    iconRight: {
        type: ControlType.String,
        title: "Icon right",
    },
    bagNumber: {
        type: ControlType.String,
        title: "Bag #",
    },
    textLeft: {
        type: ControlType.String,
        title: "Text left",
    },
    textRight: {
        type: ControlType.String,
        title: "Text right",
    },
    leftIconTap: { type: ControlType.EventHandler, title: "Left Icon" },
    rightIconTap: { type: ControlType.EventHandler, title: "Right Icon" },
    leftTextTap: { type: ControlType.EventHandler, title: "Left Text" },
    rightTextTap: { type: ControlType.EventHandler, title: "Right Text" },
})
