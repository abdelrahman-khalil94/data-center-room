import { CreatePathCommandService } from "../services/create-path-command.service";
import Point from "./Point";

export default abstract class BaseEquipment {
    protected _id: string;
    protected _mainPath: string;
    protected _basePath: string;
    protected _displayName: string = '';
    static type: string;

    constructor(private createPathService: CreatePathCommandService, id: string, shape: Point[]) {
        this._id = id;
        this._mainPath = this.createPathService.create(shape);
        this._basePath = this.createPathService.create(shape.slice(0, 2));
    }

    public get id(): string {
        return this._id;
    }

    public get mainPath(): string {
        return this._mainPath;
    }

    public get basePath(): string {
        return this._basePath;
    }

    public get displayName(): string {
        return this._displayName;
    }

    abstract get type(): string;
}
