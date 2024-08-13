import { CreatePathCommandService } from "../services/create-path-command.service";
import BaseEquipment from "./BaseAsset";
import Point from "./Point";

export default class PDU extends BaseEquipment {
    static override type = 'pdu'
    constructor(createPathService: CreatePathCommandService, id: string, shape: Point[]) {
        super(createPathService, id, shape);
        this._displayName = 'PDU';
    }
    public get type(): string {
        return PDU.type;
    }
}