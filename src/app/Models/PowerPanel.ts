import { CreatePathCommandService } from "../services/create-path-command.service";
import BaseEquipment from "./BaseAsset";
import Point from "./Point";

export default class PowerPanel extends BaseEquipment {
    static override type = 'power-panel'
    installDate: Date
    positionTopLeftX: number
    positionTopLeftY: number
    width: number
    depth: number
    weight: number
    inputVoltage: number
    inputFrequency: number
    outputVoltage: number
    outputFrequency: number

    constructor(createPathService: CreatePathCommandService,
        id: string,
        shape: Point[],
        installDate: Date,
        positionTopLeftX: number,
        positionTopLeftY: number,
        width: number,
        depth: number,
        weight: number,
        inputVoltage: number,
        inputFrequency: number,
        outputVoltage: number,
        outputFrequency: number,
    ) {
        super(createPathService, id, shape);
        this._displayName = 'Power Panel';
        this.installDate = installDate;
        this.positionTopLeftX = positionTopLeftX;
        this.positionTopLeftY = positionTopLeftY;
        this.width = width;
        this.depth = depth;
        this.weight = weight;
        this.inputVoltage = inputVoltage;
        this.inputFrequency = inputFrequency;
        this.outputVoltage = outputVoltage;
        this.outputFrequency = outputFrequency;
    }
    public get type(): string {
        return PowerPanel.type;
    }

}