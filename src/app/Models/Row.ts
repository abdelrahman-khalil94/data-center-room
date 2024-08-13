import { CreatePathCommandService } from "../services/create-path-command.service";
import BaseEquipment from "./BaseAsset";
import Point from "./Point";

export default class Row extends BaseEquipment {
    static override type = 'row'
    constructor(createPathService: CreatePathCommandService, id: string, shape: Point[]) {
        super(createPathService, id, shape);
        this._displayName = 'Row';
    }

    public get type(): string {
        return Row.type;
    }


    
    
}