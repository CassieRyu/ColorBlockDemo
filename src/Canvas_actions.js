
const Change_Color = "Change Color";
const Change_Height = "Change Height";
const Change_Width = "Change Width";


export function  updateColor(color) {
        return {
            type: Change_Color,
            value: color
        }
    }

export function updateHeight(height) {
        return {
            type: Change_Height,
            value: height
        }
    }

export function updateWidth(width) {
        return {
            type: Change_Width,
            value: width
        }
    }

