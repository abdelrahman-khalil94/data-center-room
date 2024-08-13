import { Injectable } from '@angular/core';
import { Constants } from '../constatnts';
import Point from 'src/app/Models/Point';
import ServerRoomRawData from '../room-assets-data';

@Injectable({providedIn: 'root'})
export class CreatePathCommandService {
    constructor() { }
    create(shape: Point[]){
        const {width: roomWidth, depth: roomDepth} = ServerRoomRawData.roomData
        const scale = Math.max(...[roomWidth / Constants.availableWidth, roomDepth / Constants.availableDepth]);
        shape = shape.map(point => ({x: (point.x / scale), y: (point.y / scale)}));
        let path = `M${Math.round(shape[0].x)} ${Math.round(shape[0].y)}`;
        for (const point of shape.slice(1)) {
            path += `H${Math.round(point.x)}V${Math.round(point.y)}`;
        }

        return path + 'Z';
    }
    
}