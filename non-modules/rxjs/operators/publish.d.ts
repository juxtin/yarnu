import { Observable } from '../Observable';
import { ConnectableObservable } from '../observable/ConnectableObservable';
import { MonoTypeOperatorFunction, OperatorFunction, UnaryFunction } from '../interfaces';
export declare function publish<T>(): UnaryFunction<Observable<T>, ConnectableObservable<T>>;
export declare function publish<T>(selector: MonoTypeOperatorFunction<T>): MonoTypeOperatorFunction<T>;
export declare function publish<T, R>(selector: OperatorFunction<T, R>): OperatorFunction<T, R>;
