import { Observable, ObservableInput } from '../Observable';
import { IScheduler } from '../Scheduler';
export { concat as concatStatic } from '../observable/concat';
export declare function concat<T>(this: Observable<T>, scheduler?: IScheduler): Observable<T>;
export declare function concat<T, T2>(this: Observable<T>, v2: ObservableInput<T2>, scheduler?: IScheduler): Observable<T | T2>;
export declare function concat<T, T2, T3>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, scheduler?: IScheduler): Observable<T | T2 | T3>;
export declare function concat<T, T2, T3, T4>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, scheduler?: IScheduler): Observable<T | T2 | T3 | T4>;
export declare function concat<T, T2, T3, T4, T5>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, scheduler?: IScheduler): Observable<T | T2 | T3 | T4 | T5>;
export declare function concat<T, T2, T3, T4, T5, T6>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, scheduler?: IScheduler): Observable<T | T2 | T3 | T4 | T5 | T6>;
export declare function concat<T>(this: Observable<T>, ...observables: Array<ObservableInput<T> | IScheduler>): Observable<T>;
export declare function concat<T, R>(this: Observable<T>, ...observables: Array<ObservableInput<any> | IScheduler>): Observable<R>;
