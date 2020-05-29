import * as React from "react"
// @ts-ignore
// import { Frame, createData } from "framer"
// import { colors } from "./canvas"

// Teme configuration for BoB Basis
// https://farfetch.design/mobile/ui-kits/bob-basis/

// Shared across all components that consume the theme
// export const sharedThemeData = createData({
//     theme: "light", // At some point rename theme to mode
//     dynamicType: "Large",
// })

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
    spacerMapping: {
        l: "L",
        m: "M",
        sPlus: "SPlus",
        s: "S",
        xsPlus: "XSPlus",
        xs: "XS",
        xxs: "XXS",
        xxxs: "XXXS",
        none: 0,
    },
    colour: {
        light: {
            background: "#FFFFFF",
            text: "#222222",
            text2: "#949494",
            text3: "#FFFFFF",
            textHighlight: "#C4AA84",
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
            textHighlight: "#C4AA84",
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
        xSmall: {
            largeTitle: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 25,
                lineHeight: 33,
            },
            title1: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 19,
                lineHeight: 25,
            },
            title2: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 16,
                lineHeight: 21,
            },
            callout: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 16,
                lineHeight: 21,
            },
            headline: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 13,
                lineHeight: 17,
            },
            body: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 13,
                lineHeight: 17,
            },
            caption1: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 12,
                lineHeight: 15,
            },
            caption1Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 12,
                lineHeight: 15,
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
        Small: {
            largeTitle: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 26,
                lineHeight: 33,
            },
            title1: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 20,
                lineHeight: 26,
            },
            title2: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 17,
                lineHeight: 22,
            },
            callout: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 17,
                lineHeight: 22,
            },
            headline: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 14,
                lineHeight: 18,
            },
            body: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 14,
                lineHeight: 18,
            },
            caption1: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 12,
                lineHeight: 15,
            },
            caption1Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 12,
                lineHeight: 15,
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
        Medium: {
            largeTitle: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 27,
                lineHeight: 34,
            },
            title1: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 21,
                lineHeight: 27,
            },
            title2: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 18,
                lineHeight: 23,
            },
            callout: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 18,
                lineHeight: 23,
            },
            headline: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 15,
                lineHeight: 19,
            },
            body: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 15,
                lineHeight: 19,
            },
            caption1: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 13,
                lineHeight: 17,
            },
            caption1Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 13,
                lineHeight: 17,
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
        Large: {
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
        xLarge: {
            largeTitle: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 30,
                lineHeight: 39,
            },
            title1: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 24,
                lineHeight: 31,
            },
            title2: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 21,
                lineHeight: 27,
            },
            callout: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 21,
                lineHeight: 27,
            },
            headline: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 18,
                lineHeight: 23,
            },
            body: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 18,
                lineHeight: 23,
            },
            caption1: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 16,
                lineHeight: 21,
            },
            caption1Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 16,
                lineHeight: 21,
            },
            caption2: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 13,
                lineHeight: 17,
            },
            caption2Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 13,
                lineHeight: 17,
            },
        },
        xxLarge: {
            largeTitle: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 32,
                lineHeight: 41,
            },
            title1: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 26,
                lineHeight: 33,
            },
            title2: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 23,
                lineHeight: 30,
            },
            callout: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 23,
                lineHeight: 30,
            },
            headline: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 20,
                lineHeight: 26,
            },
            body: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 20,
                lineHeight: 26,
            },
            caption1: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 18,
                lineHeight: 23,
            },
            caption1Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 18,
                lineHeight: 23,
            },
            caption2: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 15,
                lineHeight: 19,
            },
            caption2Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 15,
                lineHeight: 19,
            },
        },
        xxxLarge: {
            largeTitle: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 34,
                lineHeight: 44,
            },
            title1: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 28,
                lineHeight: 36,
            },
            title2: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 25,
                lineHeight: 33,
            },
            callout: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 25,
                lineHeight: 33,
            },
            headline: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 22,
                lineHeight: 29,
            },
            body: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 22,
                lineHeight: 29,
            },
            caption1: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 20,
                lineHeight: 26,
            },
            caption1Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 20,
                lineHeight: 26,
            },
            caption2: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 16,
                lineHeight: 21,
            },
            caption2Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 16,
                lineHeight: 21,
            },
        },
        AX1: {
            largeTitle: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 36,
                lineHeight: 47,
            },
            title1: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 30,
                lineHeight: 39,
            },
            title2: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 27,
                lineHeight: 34,
            },
            callout: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 27,
                lineHeight: 34,
            },
            headline: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 24,
                lineHeight: 31,
            },
            body: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 24,
                lineHeight: 31,
            },
            caption1: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 22,
                lineHeight: 29,
            },
            caption1Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 22,
                lineHeight: 29,
            },
            caption2: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 19,
                lineHeight: 25,
            },
            caption2Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 19,
                lineHeight: 25,
            },
        },
        AX2: {
            largeTitle: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 40,
                lineHeight: 52,
            },
            title1: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 34,
                lineHeight: 44,
            },
            title2: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 31,
                lineHeight: 40,
            },
            callout: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 31,
                lineHeight: 40,
            },
            headline: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 28,
                lineHeight: 36,
            },
            body: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 28,
                lineHeight: 36,
            },
            caption1: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 26,
                lineHeight: 33,
            },
            caption1Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 26,
                lineHeight: 33,
            },
            caption2: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 23,
                lineHeight: 30,
            },
            caption2Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 23,
                lineHeight: 30,
            },
        },
        AX3: {
            largeTitle: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 44,
                lineHeight: 56,
            },
            title1: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 38,
                lineHeight: 49,
            },
            title2: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 35,
                lineHeight: 45,
            },
            callout: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 35,
                lineHeight: 45,
            },
            headline: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 32,
                lineHeight: 41,
            },
            body: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 32,
                lineHeight: 41,
            },
            caption1: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 30,
                lineHeight: 39,
            },
            caption1Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 30,
                lineHeight: 39,
            },
            caption2: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 27,
                lineHeight: 34,
            },
            caption2Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 27,
                lineHeight: 34,
            },
        },
        AX4: {
            largeTitle: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 49,
                lineHeight: 63,
            },
            title1: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 43,
                lineHeight: 55,
            },
            title2: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 40,
                lineHeight: 52,
            },
            callout: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 40,
                lineHeight: 52,
            },
            headline: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 37,
                lineHeight: 48,
            },
            body: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 37,
                lineHeight: 48,
            },
            caption1: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 35,
                lineHeight: 45,
            },
            caption1Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 35,
                lineHeight: 45,
            },
            caption2: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 32,
                lineHeight: 41,
            },
            caption2Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 32,
                lineHeight: 41,
            },
        },
        AX5: {
            largeTitle: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 54,
                lineHeight: 70,
            },
            title1: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 48,
                lineHeight: 62,
            },
            title2: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 45,
                lineHeight: 58,
            },
            callout: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 45,
                lineHeight: 58,
            },
            headline: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 42,
                lineHeight: 54,
            },
            body: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 42,
                lineHeight: 54,
            },
            caption1: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 40,
                lineHeight: 52,
            },
            caption1Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 40,
                lineHeight: 52,
            },
            caption2: {
                fontFamily: "FarfetchBasis-Regular",
                fontSize: 37,
                lineHeight: 48,
            },
            caption2Bold: {
                fontFamily: "FarfetchBasis-Bold",
                fontSize: 37,
                lineHeight: 48,
            },
        },
    },
}
