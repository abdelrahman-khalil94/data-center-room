import { CreatePathCommandService } from "../services/create-path-command.service";
import BaseEquipment from "./BaseAsset";
import Point from "./Point";

export default class Rack extends BaseEquipment {
    static override type = 'rack'
    constructor(createPathService: CreatePathCommandService, id: string, shape: Point[]) {
        super(createPathService, id, shape);
        this._displayName = 'Rack';
    }
    public get type(): string {
        return Rack.type;
    }
    
}