import { Request, Response } from 'express';

import AssetModel, { Asset } from '../models/asset';

class AssetController {
    public save(req: Request, res: Response) {
        const asset: Asset = new AssetModel({
            measure: req.body.measure
        });
        asset.save();
        res.send(req.body.measure);
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        const asset: Asset[] = await AssetModel.find();
        res.send(asset);
    }
}

export const assetController = new AssetController();