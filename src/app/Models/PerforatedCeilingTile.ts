import { CreatePathCommandService } from "../services/create-path-command.service";
import BaseEquipment from "./BaseAsset";
import Point from "./Point";

export default class PerforatedCeilingTile extends BaseEquipment {
    static override type = 'perforated-ceiling-tile'
    constructor(createPathService: CreatePathCommandService, id: string, shape: Point[]) {
        super(createPathService, id, shape);
        this._displayName = 'Perforated Ceiling Tile';
    }
    public get type(): string {
        return PerforatedCeilingTile.type;
    }
    
}