import { Request, Response } from 'express';

import { db } from '../database';
import { Asset } from '../models/Asset';

class AssetController {
    public async save(req: Request, res: Response): Promise<void> {
        const asset: Asset = {
            measure: req.body.measure
        };
        await db.ref('asset').push(asset).then(() => {
            res.send(asset);
        });
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        await db.ref('asset').once('value', (snapshot) => {
            const data = snapshot.val();            
            res.send(data)
        }).then((data) =>{
            console.log('successful');
        });
    }
}

export const assetController = new AssetController();