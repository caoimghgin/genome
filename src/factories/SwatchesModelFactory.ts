
import Spectro from "../utilities/palettizer-rfc-2/spectro"
import Palettizer from "../utilities/palettizer-rfc-2"
import { SwatchModel, LAB, HSV, LCH, ISwatchBase, ColorCheckerModel } from '../models'
import { weights } from '../constants'

const spectro = new Spectro();
const palettizer = new Palettizer(97, 0.30)

export function SwatchesModelFactory(model: ISwatchBase): SwatchModel[] {

    let result = []
    let swatchColumnModel = palettizer.createSwatchRow(model.hex)
    var hexValues = Object.values(swatchColumnModel);

    let colorChecker = spectro.getClosestColorCheckerName(model.hex)

    for (let i in hexValues) {
        let hex = hexValues[i]
        let swatch = new SwatchModel(hex)
        swatch.key =  model.semantic + "-" + weights[i]
        swatch.semantic = model.semantic 
        swatch.LAB = new LAB(spectro.getLabValue(swatch.hex))
        swatch.LCH = new LCH(spectro.getLchValue(swatch.hex))
        swatch.HSV = new HSV(spectro.getHsvValue(swatch.hex))
        swatch.name = model.semantic + "-" + weights[i]
        swatch.weight = weights[i]
        swatch.colorChecker = new ColorCheckerModel(colorChecker.name, colorChecker.dE)
        swatch.WCAG2 = spectro.getWCAG(hex)
        swatch.WCAG3 = spectro.getAPCA(hex)
        result.push(swatch)
    }

    return result

}