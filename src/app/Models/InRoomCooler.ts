import { CreatePathCommandService } from "../services/create-path-command.service";
import BaseEquipment from "./BaseAsset";
import Point from "./Point";

export default class InRoomCooler extends BaseEquipment {
    static override type = 'in-room-cooler'
    constructor(createPathService: CreatePathCommandService, id: string, shape: Point[]) {
        super(createPathService, id, shape);
        this._displayName = 'In Room Cooler';
    }
    public get type(): string {
        return InRoomCooler.type;
    }

}