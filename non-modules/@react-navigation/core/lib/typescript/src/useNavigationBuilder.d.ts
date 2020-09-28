import { DefaultRouterOptions, NavigationState, RouterFactory, PartialState } from '@react-navigation/routers';
import { DefaultNavigatorOptions, PrivateValueStore } from './types';
/**
 * Hook for building navigators.
 *
 * @param createRouter Factory method which returns router object.
 * @param options Options object containing `children` and additional options for the router.
 * @returns An object containing `state`, `navigation`, `descriptors` objects.
 */
export default function useNavigationBuilder<State extends NavigationState, RouterOptions extends DefaultRouterOptions, ScreenOptions extends {}, EventMap extends Record<string, any>>(createRouter: RouterFactory<State, any, RouterOptions>, options: DefaultNavigatorOptions<ScreenOptions> & RouterOptions): {
    state: State;
    navigation: {
        dispatch(action: Readonly<{
            type: string;
            payload?: object | undefined;
            source?: string | undefined;
            target?: string | undefined;
        }> | ((state: Readonly<{
            key: string;
            index: number;
            routeNames: string[];
            history?: unknown[] | undefined;
            routes: (Readonly<{
                key: string;
                name: string;
                params?: object | undefined;
            }> & {
                state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
            })[];
            type: string;
            stale: false;
        }>) => Readonly<{
            type: string;
            payload?: object | undefined;
            source?: string | undefined;
            target?: string | undefined;
        }>)): void;
        navigate<RouteName extends string>(...args: [RouteName] | [RouteName, object | undefined]): void;
        navigate<RouteName_1 extends string>(route: {
            key: string;
            params?: object | undefined;
        } | {
            name: RouteName_1;
            key?: string | undefined;
            params: object | undefined;
        }): void;
        reset(state: Readonly<{
            key: string;
            index: number;
            routeNames: string[];
            history?: unknown[] | undefined;
            routes: (Readonly<{
                key: string;
                name: string;
                params?: object | undefined;
            }> & {
                state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
            })[];
            type: string;
            stale: false;
        }> | PartialState<Readonly<{
            key: string;
            index: number;
            routeNames: string[];
            history?: unknown[] | undefined;
            routes: (Readonly<{
                key: string;
                name: string;
                params?: object | undefined;
            }> & {
                state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
            })[];
            type: string;
            stale: false;
        }>>): void;
        goBack(): void;
        isFocused(): boolean;
        canGoBack(): boolean;
        dangerouslyGetParent<T = import("./types").NavigationProp<Record<string, object | undefined>, string, Readonly<{
            key: string;
            index: number;
            routeNames: string[];
            history?: unknown[] | undefined;
            routes: (Readonly<{
                key: string;
                name: string;
                params?: object | undefined;
            }> & {
                state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
            })[];
            type: string;
            stale: false;
        }>, {}, {}> | undefined>(): T;
        dangerouslyGetState(): Readonly<{
            key: string;
            index: number;
            routeNames: string[];
            history?: unknown[] | undefined;
            routes: (Readonly<{
                key: string;
                name: string;
                params?: object | undefined;
            }> & {
                state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
            })[];
            type: string;
            stale: false;
        }>;
    } & PrivateValueStore<Record<string, object | undefined>, string, {}> & import("./types").EventEmitter<EventMap> & {
        setParams<RouteName_2 extends string>(params: object | undefined): void;
    } & {
        dispatch(action: Readonly<{
            type: string;
            payload?: object | undefined;
            source?: string | undefined;
            target?: string | undefined;
        }> | ((state: any) => Readonly<{
            type: string;
            payload?: object | undefined;
            source?: string | undefined;
            target?: string | undefined;
        }>)): void;
        navigate<RouteName_3 extends string>(...args: [RouteName_3] | [RouteName_3, object | undefined]): void;
        navigate<RouteName_4 extends string>(route: {
            key: string;
            params?: object | undefined;
        } | {
            name: RouteName_4;
            key?: string | undefined;
            params: object | undefined;
        }): void;
        reset(state: any): void;
        goBack(): void;
        isFocused(): boolean;
        canGoBack(): boolean;
        dangerouslyGetParent<T_1 = import("./types").NavigationProp<Record<string, object | undefined>, string, Readonly<{
            key: string;
            index: number;
            routeNames: string[];
            history?: unknown[] | undefined;
            routes: (Readonly<{
                key: string;
                name: string;
                params?: object | undefined;
            }> & {
                state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
            })[];
            type: string;
            stale: false;
        }>, {}, {}> | undefined>(): T_1;
        dangerouslyGetState(): any;
    } & {
        setParams(params: object | undefined): void;
        setOptions(options: Partial<any>): void;
    } & import("./types").EventConsumer<any> & PrivateValueStore<Record<string, object | undefined>, string, any>;
    descriptors: Record<string, import("./types").Descriptor<Record<string, object | undefined>, string, State, ScreenOptions, {}>>;
};
