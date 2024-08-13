import { CreatePathCommandService } from "../services/create-path-command.service";
import BaseAsset from "./BaseAsset";
import Point from "./Point";

export default class ServerRoom extends BaseAsset {
    static override type = 'server-room'
    children: BaseAsset[];
    constructor(createPathService: CreatePathCommandService, id: string, shape: Point[], children: BaseAsset[]) {
        super(createPathService, id, shape);
        this._displayName = 'Server Room';
        this.children = children
    }
    public get type(): string {
        return ServerRoom.type;
    }
}