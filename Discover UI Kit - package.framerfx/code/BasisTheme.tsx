import * as React from "react"
// @ts-ignore
import { Frame } from "framer"

// Teme configuration for BoB Basis
// https://farfetch.design/mobile/ui-kits/bob-basis/

export const ShowSpacers = false // true or false

// Theme
export const basisTheme = {
    spacer: {
        l: 48,
        m: 24,
        sPlus: 16,
        s: 12,
        xsPlus: 8,
        xs: 6,
        xxs: 4,
        xxxs: 2,
        none: 0,
    },
    colour: {
        light: {
            background: "#FFFFFF",
            text: "#222222",
            text2: "#949494",
            text3: "#FFFFFF",
            textHighlight: "#949494",
            fill: "#222222",
            fill2: "#727272",
            fill3: "#949494",
            fill4: "#BFBFBF",
            fill5: "#E6E6E6",
            fill6: "#F5F5F5",
            error: "#FC5D65",
            success: "#26D46D",
            shadow1: "0 2px 7px 0 rgba(34,34,34,0.10)",
        },
        dark: {
            background: "#222222",
            text: "#ffffff",
            text2: "#727272",
            text3: "#222222",
            textHighlight: "#949494",
            fill: "#ffffff",
            fill2: "#727272",
            fill3: "#6E6D6D",
            fill4: "#3B3B3B",
            fill5: "#333333",
            fill6: "#303030",
            error: "#FC5D65",
            success: "#26D46D",
            shadow1: "0 2px 7px 0 rgba(255,255,255,0.10)",
        },
    },
    text: {
        Large: {
            display: {
                fontFamily: "NimbusSanExt-Bol",
                fontSize: 30,
                lineHeight: 30,
                textTransform: "uppercase",
            },
            uppercaseHeadline: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 16,
                lineHeight: 21,
                textTransform: "uppercase"
            },
            largeTitle: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 28,
                lineHeight: 36,
            },
            title1: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 22,
                lineHeight: 29,
            },
            title2: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 19,
                lineHeight: 25,
            },
            callout: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 19,
                lineHeight: 25,
            },
            headline: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 16,
                lineHeight: 21,
            },
            body: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 16,
                lineHeight: 21,
            },
            caption1: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 14,
                lineHeight: 18,
            },
            caption1Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 14,
                lineHeight: 18,
            },
            caption2: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 11,
                lineHeight: 14,
            },
            caption2Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 11,
                lineHeight: 14,
            },
        },
    },
}
