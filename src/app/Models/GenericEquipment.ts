import { CreatePathCommandService } from "../services/create-path-command.service";
import BaseEquipment from "./BaseAsset";
import Point from "./Point";

export default class GenericEquipment extends BaseEquipment{
    static override type = 'generic-equipment'
    constructor(createPathService: CreatePathCommandService, id: string, shape: Point[]) {
        super(createPathService, id, shape);
        this._displayName = 'Generic Equipment';
    }
    public get type(): string {
        return GenericEquipment.type;
    }
    
}