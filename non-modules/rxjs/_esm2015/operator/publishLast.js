import { publishLast as higherOrder } from '../operators/publishLast';
/**
 * @return {ConnectableObservable<T>}
 * @method publishLast
 * @owner Observable
 */
export function publishLast() {
    //TODO(benlesh): correct type-flow through here.
    return higherOrder()(this);
}
//# sourceMappingURL=publishLast.js.map