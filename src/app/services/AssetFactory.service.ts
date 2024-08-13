import { Injectable } from '@angular/core';
import Row from '../Models/Row';
import Rack from '../Models/Rack';
import PDU from '../Models/PDU';
import PerforatedCeilingTile from '../Models/PerforatedCeilingTile';
import InRoomCooler from '../Models/InRoomCooler';
import GenericEquipment from '../Models/GenericEquipment';
import PowerPanel from '../Models/PowerPanel';
import { CreatePathCommandService } from './create-path-command.service';
import ServerRoom from '../Models/ServerRoom';
import BaseAsset from '../Models/BaseAsset';
import PerforatedFloorTile from '../Models/PerforatedFloorTile';

@Injectable({ providedIn: 'root' })
export class AssetFactoryService {
    constructor(private createPathService: CreatePathCommandService) {

    }
    createAsset(rawAsset: any): BaseAsset | null {
        // NOTE: registry pattern + factory pattern  combination is not used here as in real scenarios the constructor of each asset type will be different
        switch (rawAsset.type) {
            case Row.type:
                return new Row(this.createPathService, rawAsset.id, rawAsset.shape);
            case Rack.type:
                return new Rack(this.createPathService, rawAsset.id, rawAsset.shape);
            case PDU.type:
                return new PDU(this.createPathService, rawAsset.id, rawAsset.shape);
            case PerforatedCeilingTile.type:
                return new PerforatedCeilingTile(this.createPathService, rawAsset.id, rawAsset.shape);
            case PerforatedFloorTile.type:
                return new PerforatedFloorTile(this.createPathService, rawAsset.id, rawAsset.shape);
            case InRoomCooler.type:
                return new InRoomCooler(this.createPathService, rawAsset.id, rawAsset.shape);
            case GenericEquipment.type:
                return new GenericEquipment(this.createPathService, rawAsset.id, rawAsset.shape);
            case PowerPanel.type:
                return new PowerPanel(this.createPathService,
                    rawAsset.id,
                    rawAsset.shape,
                    new Date(rawAsset.installDate),
                    rawAsset.positionTopLeftX,
                    rawAsset.positionTopLeftY,
                    rawAsset.width,
                    rawAsset.depth,
                    rawAsset.weight,
                    rawAsset.powerProvider?.inputVoltage?.voltage,
                    rawAsset.powerProvider?.inputVoltage?.frequency,
                    rawAsset.powerProvider?.outputVoltage?.voltage,
                    rawAsset.powerProvider?.outputVoltage?.frequency,
                );
            default:
                console.log(`Unknown asset type: ${rawAsset.type}`);
                return null;
        }
    }

}