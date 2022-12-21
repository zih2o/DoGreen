import { Request, Response } from 'express';
import { SubscribeRepository } from './subscribe.repository';

const subscribeRepository = new SubscribeRepository();

export class SubscribeController {
  async findMySubscription(req: Request, res: Response) {
    const currentAuthId = req.context.currentUser.authId;
    const subscribeInfo = await subscribeRepository.findSubscriptionByAuthId(currentAuthId);
    res.status(200).json(subscribeInfo);
  }

  async subscribeCategory(req: Request, res: Response) {
    const currentAuthId = req.context.currentUser.authId;
    const { categoryId } = req.params;
    await subscribeRepository.subscribeCategory(currentAuthId, categoryId);
    res.status(201).end();
  }

  async unsubscribeCategory(req: Request, res: Response) {
    const currentAuthId = req.context.currentUser.authId;
    const { categoryId } = req.params;
    await subscribeRepository.unsubscribeCategory(currentAuthId, categoryId);
    res.status(204).end();
  }
};
