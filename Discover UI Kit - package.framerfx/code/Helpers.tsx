//@ts-ignore
import { basisTheme } from "./BasisTheme"

// Helper funciton that finds key by Value
export function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value)
}

// Generating informative textStyle values for Properies Control
export const textOptionTitles = []
export const textStyleNames = Object.keys(basisTheme.text.Large)

for (let i = 0; i < textStyleNames.length; i++) {
    textOptionTitles.push(
        textStyleNames[i] +
            " ⊜" +
            basisTheme.text.Large[textStyleNames[i]].fontSize +
            ", ↕" +
            basisTheme.text.Large[textStyleNames[i]].lineHeight
    )
}

// Usage example:
//
// addPropertyControls(ListItem, {
//     lableFontStyle: {
//         type: ControlType.Enum,
//         defaultValue: "body",
//         options: Object.keys(basisTheme.text.Large),
//         optionTitles: textStyleLables,
//     },
// })

// Generating informative spacerName values for for Properies Control 'optionTitles'
export const spacerOptionTitles = []
const spacerNames = Object.keys(basisTheme.spacer)

for (let i = 0; i < spacerNames.length; i++) {
    spacerOptionTitles.push(
        spacerNames[i] + ", ↕" + basisTheme.spacer[spacerNames[i]]
    )
}

// Usage example:
//
// addPropertyControls(ListItem, {
//     lableFontStyle: {
//         type: ControlType.Enum,
//         defaultValue: "body",
//         options: Object.keys(basisTheme.spacer),
//         optionTitles: spacerOptionTitles,
//     },
// })
