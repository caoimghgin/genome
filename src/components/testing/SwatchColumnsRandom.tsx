import React from 'react';
import { SwatchColumn } from "./../SwatchColumn";
import { SwatchColumnLegend } from "../SwatchColumnLegend";
import Spectro from "./../../utilities/palettizer/spectro"

interface Props { }

export const SwatchColumnsRandom: React.FC<Props> = (props) => {

    const spectro = new Spectro();

    return (
        <div>
            <SwatchColumnLegend />
            
            {/* <SwatchColumn model={{ hexString: "#f5ee6b", semantic: "testing..." }} /> */}

            {/* <SwatchColumn model={{ hexString: "#4d5467", semantic: "600" }} />
            <SwatchColumn model={{ hexString: "#41485b", semantic: "700" }} />
            <SwatchColumn model={{ hexString: "#353c4f", semantic: "750" }} />
            <SwatchColumn model={{ hexString: "#2a3143", semantic: "800" }} />
            <SwatchColumn model={{ hexString: "#1f2637", semantic: "900" }} />
            <SwatchColumn model={{ hexString: "#141c2c", semantic: "950" }} />
            <SwatchColumn model={{ hexString: "#091122", semantic: "975" }} /> */}


            {/* WSJ Studies */}
            {/* <SwatchColumn model={{ hexString: "#816D4D", semantic: "GOLD" }} />
            <SwatchColumn model={{ hexString: "#E0E7FF", semantic: "blue10" }} />
            <SwatchColumn model={{ hexString: "#9AC7E2", semantic: "blue20" }} />
            <SwatchColumn model={{ hexString: "#66C7FF", semantic: "blue40" }} />
            <SwatchColumn model={{ hexString: "#87A4FC", semantic: "blue30" }} />
            <SwatchColumn model={{ hexString: "#0274B6", semantic: "blue50" }} />
            <SwatchColumn model={{ hexString: "#015483", semantic: "blue60" }} />
            <SwatchColumn model={{ hexString: "#2B4AAB", semantic: "blue70" }} />
            <SwatchColumn model={{ hexString: "#213A82", semantic: "blue80" }} />
            <SwatchColumn model={{ hexString: "#213A5F", semantic: "blue90" }} />
            <SwatchColumn model={{ hexString: "#192C48", semantic: "blue100" }} /> */}

            {/* <SwatchColumn model={{ hexString: spectro.generateRandomColor(null), semantic: "A" }} />
            <SwatchColumn model={{ hexString: spectro.generateRandomColor(null), semantic: "B" }} />
            <SwatchColumn model={{ hexString: spectro.generateRandomColor(null), semantic: "C" }} />
            <SwatchColumn model={{ hexString: spectro.generateRandomColor(null), semantic: "D" }} />
            <SwatchColumn model={{ hexString: spectro.generateRandomColor(null), semantic: "E" }} />
            <SwatchColumn model={{ hexString: spectro.generateRandomColor(null), semantic: "F" }} />
            <SwatchColumn model={{ hexString: spectro.generateRandomColor(null), semantic: "G" }} />
            <SwatchColumn model={{ hexString: spectro.generateRandomColor(null), semantic: "H" }} /> */}

            <SwatchColumn model={{ hexString: spectro.generateRandomColor(null),  semantic: "primary" }} />
            <SwatchColumn model={{ hexString: spectro.generateRandomColor(null),  semantic: "secondary" }} />
            <SwatchColumn model={{ hexString: spectro.generateRandomColor(null), semantic: "tertiary" }} />
            <SwatchColumn model={{ hexString: spectro.generateRandomColor(null),  semantic: "positive" }} />
            <SwatchColumn model={{ hexString: spectro.generateRandomColor(null),  semantic: "negative" }} />
            <SwatchColumn model={{ hexString: spectro.generateRandomColor(null),  semantic: "highlight" }} />
            <SwatchColumn model={{ hexString: spectro.generateRandomColor(null),  semantic: "info" }} />
            <SwatchColumn model={{ hexString: spectro.generateRandomColor(null),  semantic: "system" }} />
            <SwatchColumn model={{ hexString: spectro.generateRandomColor(null),  semantic: "neutral" }} />

        </div>
    )

}

export default SwatchColumnsRandom;