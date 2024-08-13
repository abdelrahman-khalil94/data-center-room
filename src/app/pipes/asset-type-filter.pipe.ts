import BaseAsset from 'src/app/Models/BaseAsset';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'assetTypeFilter'
})

export class AssetTypePipe implements PipeTransform {
    transform(items: BaseAsset[], type: string): BaseAsset[] {
        return items?.filter(x => x.type === type);
    }
}