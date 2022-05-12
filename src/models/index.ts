import { Dictionary } from "lodash";
import Spectro from "../utilities/palettizer-rfc-2/spectro"

interface IMapModel {
    target: number;
    weight: string | undefined;
 }

export class MapModel {

    private _values: IMapModel[];

    constructor( values: IMapModel[]) {

        this._values = []
        this.values = values
    
    }

    public targets() {
        var result = this._values.map(function (x) { 
            return x.target
        });
        return result.reverse();
    }

    public weights() {
        var result = this._values.map(function (x) { 
            return x.weight
        });
        return result.reverse();
    }

    public set values(theValues: IMapModel[]) {
       
        var result = theValues.map(function (x) { 
            return ((x.weight == undefined) ? {"target": -1, "weight": x.weight} : {"target": x.target, "weight": x.weight} )
          });
          this._values = result
    }

    public get values() {
        return this._values;
    }
}

export class SwatchModel {
    id!: string
    column!: string
    row!: number
    name!: string
    hex!: string
    original?: SwatchModel
    weight!: string
    semantic!: string
    lightness!: number
    LAB!: LAB
    LCH!: LCH
    HSV!: HSV
    WCAG2!: number
    WCAG3!: number
    colorChecker!: ColorCheckerModel
    isUserDefined!: boolean
    l_target!: number

    constructor( hex: string, column: string) {
        var spectro = new Spectro()

        this.hex = hex
        this.column = column
        this.row = 0
        this.l_target = -1

        this.LAB = new LAB(spectro.getLabValue(hex))
        this.LCH = new LCH(spectro.getLchValue(hex))
        this.HSV = new HSV(spectro.getHsvValue(hex))
        this.colorChecker = spectro.getClosestColorCheckerName(hex)
        this.lightness = this.LAB.L
        this.WCAG2 = spectro.getWCAG(hex)
        this.WCAG3 = spectro.getAPCA(hex)
        this.isUserDefined = false
    }

}

export class ColorCheckerModel {
    name!: string
    dE!: number
    constructor(name: string, dE: number) {
        this.name = name
        this.dE = dE
    }
}

export class LAB {
    L: number
    a: number
    b: number
    constructor(Lab: number[]) {
        this.L = Lab[0]
        this.a = Lab[1]
        this.b = Lab[2]
    }
}

export class LCH {
    L: number
    C: number
    H: number
    constructor(LCH: number[]) {
        this.L = LCH[0]
        this.C = LCH[1]
        this.H = LCH[2]
    }
}

export class HSV {
    H: number
    S: number
    V: number
    constructor(HSV: number[]) {
        this.H = HSV[0]
        this.S = HSV[1]
        this.V = HSV[2]
    }
}

export interface ISwatchBase {
    hexString: string;
    semantic: string;
    columnName?: string;
}

export class ISwatchColorChecker {
    name?: String;
    dE?: number;
}
