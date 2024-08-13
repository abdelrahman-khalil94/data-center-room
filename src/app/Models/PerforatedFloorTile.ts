import { CreatePathCommandService } from "../services/create-path-command.service";
import BaseEquipment from "./BaseAsset";
import Point from "./Point";

export default class PerforatedFloorTile extends BaseEquipment {
    static override type = 'perforated-floor-tile'
    constructor(createPathService: CreatePathCommandService, id: string, shape: Point[]) {
        super(createPathService, id, shape);
        this._displayName = 'Perforated Floor Tile';
    }
    public get type(): string {
        return PerforatedFloorTile.type;
    }
    
}