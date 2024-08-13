import BaseAsset from 'src/app/Models/BaseAsset';
import { Component, OnInit } from '@angular/core';
import ServerRoom from './Models/ServerRoom';
import ServerRoomRawData from './room-assets-data';
import { AssetFactoryService } from './services/AssetFactory.service';
import { CreatePathCommandService } from './services/create-path-command.service';
import GenericEquipment from './Models/GenericEquipment';
import Row from './Models/Row';
import Rack from './Models/Rack';
import PowerPanel from './Models/PowerPanel';
import PerforatedCeilingTile from './Models/PerforatedCeilingTile';
import PDU from './Models/PDU';
import InRoomCooler from './Models/InRoomCooler';
import PerforatedFloorTile from './Models/PerforatedFloorTile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DCDemo';
  GenericEquipment = GenericEquipment;
  Row = Row;
  Rack = Rack;
  PowerPanel = PowerPanel
  PerforatedCeilingTile = PerforatedCeilingTile
  PerforatedFloorTile = PerforatedFloorTile
  PDU = PDU
  InRoomCooler = InRoomCooler
  selectedAsset: any;

  serverRoom: ServerRoom
  constructor(private assetFactory: AssetFactoryService, private createPathService: CreatePathCommandService){
    debugger
    const children = ServerRoomRawData.roomData.children.map(c => assetFactory.createAsset(c)).filter(x => x)  as BaseAsset[];
    this.serverRoom = new ServerRoom(createPathService, ServerRoomRawData.roomData.id, ServerRoomRawData.roomData.shape, children);
  }
  ngOnInit(): void {
  }

  onClickPowerPanel(id: string){
    this.selectedAsset = this.serverRoom.children.find(x => x.id === id)
  }

}
