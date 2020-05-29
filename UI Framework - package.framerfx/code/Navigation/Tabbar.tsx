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
import { Icon } from "./../icons/Icon"

Tab.defaultProps = {
    title: "AAA",
    icon: "home",
    theme: "light",
    current: false,
}

const colour = basisTheme.colour

function Tab(props) {
    const data = {
        theme: "light",
        dynamicType: "Large",
    }

    const { theme, dynamicType } = data

    const colour = basisTheme.colour[data.theme]
    const text = basisTheme.text.Large // dissables DynamicType
    return (
        <Stack
            width={75}
            height={50}
            distribution="space-evenly"
            direction="vertical"
            backgroundColor={colour.background}
            opacity={props.current ? 1 : 0.3}
        >
            <Icon
                iconSet="tabbar"
                img={props.icon}
                type={theme == "light" ? "dark" : "light"}
            />
            <Frame
                height={14}
                width={75}
                backgroundColor={colour.background}
                color={colour.text}
            >
                {props.title}
            </Frame>
        </Stack>
    )
}

// The Component
export function Tabbar(props) {
    const { ...rest } = props
    const data = {
        theme: "light",
        dynamicType: "Large",
    }
    const { theme, dynamicType } = data

    const colour = basisTheme.colour[data.theme]
    const text = basisTheme.text.Large // dissables DynamicType

    //console.log(props.theTabs)

    // Create our tab objects (if we've received strings)
    const newTabs = props.theTabs.map(t => {
        if (typeof t === "string") {
            return {
                icon: (t as any).toLowerCase(),
                title: t,
            }
        } else {
            return t
        }
    })

    // Component's output
    return (
        <Stack
            width="100%"
            height={50}
            direction="horizontal"
            backgroundColor={colour.background}
            distribution="space-evenly"
            {...rest}
        >
            {newTabs.map((tab, index) => {
                return (
                    <Tab
                        title={tab.title}
                        icon={tab.icon}
                        key={index}
                        current={props.currentTab == tab.title ? true : false}
                        onTap={() => console.log("aaa")}
                    />
                )
            })}
        </Stack>
    )
}

Tabbar.defaultProps = {
    height: 50,
    width: 375,
    currentTab: "Home",
    showLabels: false,
    theTabs: [
        {
            icon: "home",
            title: "home",
        },
        {
            icon: "search",
            title: "Search",
        },
        {
            icon: "designers",
            title: "Designers",
        },
        {
            icon: "wishlist",
            title: "Wishlist",
        },
        {
            icon: "me",
            title: "Me",
        },
    ],
}

// Framer Properties Panel"
addPropertyControls(Tabbar, {
    currentTab: {
        title: "CurrentTab",
        type: ControlType.String,
        defaultValue: "Home",
    },
    theTabs: {
        title: "Tabs",
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
        defaultValue: ["Home", "Search", "Designers", "Wishlist", "Me"],
        maxCount: 5,
    },
    //home: { type: ControlType.EventHandler, title: "1" },
    //me: { type: ControlType.EventHandler, title: "2" },
    //wishlist: { type: ControlType.EventHandler, title: "3" },
    //search: { type: ControlType.EventHandler, title: "4" },
    //designers: { type: ControlType.EventHandler, title: "5" },
})
