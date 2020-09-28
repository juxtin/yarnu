
"use strict"

var path = require('path');
var dir = path.resolve(__dirname);

module.exports = function() {
  return {
    "rxjs/util/tryCatch": path.join(dir, "util/tryCatch.js"),
    "rxjs/util/toSubscriber": path.join(dir, "util/toSubscriber.js"),
    "rxjs/util/subscribeToResult": path.join(dir, "util/subscribeToResult.js"),
    "rxjs/util/root": path.join(dir, "util/root.js"),
    "rxjs/util/pipe": path.join(dir, "util/pipe.js"),
    "rxjs/util/not": path.join(dir, "util/not.js"),
    "rxjs/util/noop": path.join(dir, "util/noop.js"),
    "rxjs/util/isScheduler": path.join(dir, "util/isScheduler.js"),
    "rxjs/util/isPromise": path.join(dir, "util/isPromise.js"),
    "rxjs/util/isObject": path.join(dir, "util/isObject.js"),
    "rxjs/util/isNumeric": path.join(dir, "util/isNumeric.js"),
    "rxjs/util/isFunction": path.join(dir, "util/isFunction.js"),
    "rxjs/util/isDate": path.join(dir, "util/isDate.js"),
    "rxjs/util/isArrayLike": path.join(dir, "util/isArrayLike.js"),
    "rxjs/util/isArray": path.join(dir, "util/isArray.js"),
    "rxjs/util/identity": path.join(dir, "util/identity.js"),
    "rxjs/util/errorObject": path.join(dir, "util/errorObject.js"),
    "rxjs/util/assign": path.join(dir, "util/assign.js"),
    "rxjs/util/applyMixins": path.join(dir, "util/applyMixins.js"),
    "rxjs/util/UnsubscriptionError": path.join(dir, "util/UnsubscriptionError.js"),
    "rxjs/util/TimeoutError": path.join(dir, "util/TimeoutError.js"),
    "rxjs/util/Set": path.join(dir, "util/Set.js"),
    "rxjs/util/ObjectUnsubscribedError": path.join(dir, "util/ObjectUnsubscribedError.js"),
    "rxjs/util/MapPolyfill": path.join(dir, "util/MapPolyfill.js"),
    "rxjs/util/Map": path.join(dir, "util/Map.js"),
    "rxjs/util/Immediate": path.join(dir, "util/Immediate.js"),
    "rxjs/util/FastMap": path.join(dir, "util/FastMap.js"),
    "rxjs/util/EmptyError": path.join(dir, "util/EmptyError.js"),
    "rxjs/util/ArgumentOutOfRangeError": path.join(dir, "util/ArgumentOutOfRangeError.js"),
    "rxjs/util/AnimationFrame": path.join(dir, "util/AnimationFrame.js"),
    "rxjs/testing/TestScheduler": path.join(dir, "testing/TestScheduler.js"),
    "rxjs/testing/TestMessage": path.join(dir, "testing/TestMessage.js"),
    "rxjs/testing/SubscriptionLoggable": path.join(dir, "testing/SubscriptionLoggable.js"),
    "rxjs/testing/SubscriptionLog": path.join(dir, "testing/SubscriptionLog.js"),
    "rxjs/testing/HotObservable": path.join(dir, "testing/HotObservable.js"),
    "rxjs/testing/ColdObservable": path.join(dir, "testing/ColdObservable.js"),
    "rxjs/symbol/rxSubscriber": path.join(dir, "symbol/rxSubscriber.js"),
    "rxjs/symbol/observable": path.join(dir, "symbol/observable.js"),
    "rxjs/symbol/iterator": path.join(dir, "symbol/iterator.js"),
    "rxjs/scheduler/queue": path.join(dir, "scheduler/queue.js"),
    "rxjs/scheduler/async": path.join(dir, "scheduler/async.js"),
    "rxjs/scheduler/asap": path.join(dir, "scheduler/asap.js"),
    "rxjs/scheduler/animationFrame": path.join(dir, "scheduler/animationFrame.js"),
    "rxjs/scheduler/VirtualTimeScheduler": path.join(dir, "scheduler/VirtualTimeScheduler.js"),
    "rxjs/scheduler/QueueScheduler": path.join(dir, "scheduler/QueueScheduler.js"),
    "rxjs/scheduler/QueueAction": path.join(dir, "scheduler/QueueAction.js"),
    "rxjs/scheduler/AsyncScheduler": path.join(dir, "scheduler/AsyncScheduler.js"),
    "rxjs/scheduler/AsyncAction": path.join(dir, "scheduler/AsyncAction.js"),
    "rxjs/scheduler/AsapScheduler": path.join(dir, "scheduler/AsapScheduler.js"),
    "rxjs/scheduler/AsapAction": path.join(dir, "scheduler/AsapAction.js"),
    "rxjs/scheduler/AnimationFrameScheduler": path.join(dir, "scheduler/AnimationFrameScheduler.js"),
    "rxjs/scheduler/AnimationFrameAction": path.join(dir, "scheduler/AnimationFrameAction.js"),
    "rxjs/scheduler/Action": path.join(dir, "scheduler/Action.js"),
    "rxjs/operators/zipAll": path.join(dir, "operators/zipAll.js"),
    "rxjs/operators/zip": path.join(dir, "operators/zip.js"),
    "rxjs/operators/withLatestFrom": path.join(dir, "operators/withLatestFrom.js"),
    "rxjs/operators/windowWhen": path.join(dir, "operators/windowWhen.js"),
    "rxjs/operators/windowToggle": path.join(dir, "operators/windowToggle.js"),
    "rxjs/operators/windowTime": path.join(dir, "operators/windowTime.js"),
    "rxjs/operators/windowCount": path.join(dir, "operators/windowCount.js"),
    "rxjs/operators/window": path.join(dir, "operators/window.js"),
    "rxjs/operators/toArray": path.join(dir, "operators/toArray.js"),
    "rxjs/operators/timestamp": path.join(dir, "operators/timestamp.js"),
    "rxjs/operators/timeoutWith": path.join(dir, "operators/timeoutWith.js"),
    "rxjs/operators/timeout": path.join(dir, "operators/timeout.js"),
    "rxjs/operators/timeInterval": path.join(dir, "operators/timeInterval.js"),
    "rxjs/operators/throttleTime": path.join(dir, "operators/throttleTime.js"),
    "rxjs/operators/throttle": path.join(dir, "operators/throttle.js"),
    "rxjs/operators/tap": path.join(dir, "operators/tap.js"),
    "rxjs/operators/takeWhile": path.join(dir, "operators/takeWhile.js"),
    "rxjs/operators/takeUntil": path.join(dir, "operators/takeUntil.js"),
    "rxjs/operators/takeLast": path.join(dir, "operators/takeLast.js"),
    "rxjs/operators/take": path.join(dir, "operators/take.js"),
    "rxjs/operators/switchMapTo": path.join(dir, "operators/switchMapTo.js"),
    "rxjs/operators/switchMap": path.join(dir, "operators/switchMap.js"),
    "rxjs/operators/switchAll": path.join(dir, "operators/switchAll.js"),
    "rxjs/operators/subscribeOn": path.join(dir, "operators/subscribeOn.js"),
    "rxjs/operators/startWith": path.join(dir, "operators/startWith.js"),
    "rxjs/operators/skipWhile": path.join(dir, "operators/skipWhile.js"),
    "rxjs/operators/skipUntil": path.join(dir, "operators/skipUntil.js"),
    "rxjs/operators/skipLast": path.join(dir, "operators/skipLast.js"),
    "rxjs/operators/skip": path.join(dir, "operators/skip.js"),
    "rxjs/operators/single": path.join(dir, "operators/single.js"),
    "rxjs/operators/shareReplay": path.join(dir, "operators/shareReplay.js"),
    "rxjs/operators/share": path.join(dir, "operators/share.js"),
    "rxjs/operators/sequenceEqual": path.join(dir, "operators/sequenceEqual.js"),
    "rxjs/operators/scan": path.join(dir, "operators/scan.js"),
    "rxjs/operators/sampleTime": path.join(dir, "operators/sampleTime.js"),
    "rxjs/operators/sample": path.join(dir, "operators/sample.js"),
    "rxjs/operators/retryWhen": path.join(dir, "operators/retryWhen.js"),
    "rxjs/operators/retry": path.join(dir, "operators/retry.js"),
    "rxjs/operators/repeatWhen": path.join(dir, "operators/repeatWhen.js"),
    "rxjs/operators/repeat": path.join(dir, "operators/repeat.js"),
    "rxjs/operators/refCount": path.join(dir, "operators/refCount.js"),
    "rxjs/operators/reduce": path.join(dir, "operators/reduce.js"),
    "rxjs/operators/race": path.join(dir, "operators/race.js"),
    "rxjs/operators/publishReplay": path.join(dir, "operators/publishReplay.js"),
    "rxjs/operators/publishLast": path.join(dir, "operators/publishLast.js"),
    "rxjs/operators/publishBehavior": path.join(dir, "operators/publishBehavior.js"),
    "rxjs/operators/publish": path.join(dir, "operators/publish.js"),
    "rxjs/operators/pluck": path.join(dir, "operators/pluck.js"),
    "rxjs/operators/partition": path.join(dir, "operators/partition.js"),
    "rxjs/operators/pairwise": path.join(dir, "operators/pairwise.js"),
    "rxjs/operators/onErrorResumeNext": path.join(dir, "operators/onErrorResumeNext.js"),
    "rxjs/operators/observeOn": path.join(dir, "operators/observeOn.js"),
    "rxjs/operators/multicast": path.join(dir, "operators/multicast.js"),
    "rxjs/operators/min": path.join(dir, "operators/min.js"),
    "rxjs/operators/mergeScan": path.join(dir, "operators/mergeScan.js"),
    "rxjs/operators/mergeMapTo": path.join(dir, "operators/mergeMapTo.js"),
    "rxjs/operators/mergeMap": path.join(dir, "operators/mergeMap.js"),
    "rxjs/operators/mergeAll": path.join(dir, "operators/mergeAll.js"),
    "rxjs/operators/merge": path.join(dir, "operators/merge.js"),
    "rxjs/operators/max": path.join(dir, "operators/max.js"),
    "rxjs/operators/materialize": path.join(dir, "operators/materialize.js"),
    "rxjs/operators/mapTo": path.join(dir, "operators/mapTo.js"),
    "rxjs/operators/map": path.join(dir, "operators/map.js"),
    "rxjs/operators/last": path.join(dir, "operators/last.js"),
    "rxjs/operators/isEmpty": path.join(dir, "operators/isEmpty.js"),
    "rxjs/operators/ignoreElements": path.join(dir, "operators/ignoreElements.js"),
    "rxjs/operators/groupBy": path.join(dir, "operators/groupBy.js"),
    "rxjs/operators/first": path.join(dir, "operators/first.js"),
    "rxjs/operators/findIndex": path.join(dir, "operators/findIndex.js"),
    "rxjs/operators/find": path.join(dir, "operators/find.js"),
    "rxjs/operators/finalize": path.join(dir, "operators/finalize.js"),
    "rxjs/operators/filter": path.join(dir, "operators/filter.js"),
    "rxjs/operators/expand": path.join(dir, "operators/expand.js"),
    "rxjs/operators/exhaustMap": path.join(dir, "operators/exhaustMap.js"),
    "rxjs/operators/exhaust": path.join(dir, "operators/exhaust.js"),
    "rxjs/operators/every": path.join(dir, "operators/every.js"),
    "rxjs/operators/elementAt": path.join(dir, "operators/elementAt.js"),
    "rxjs/operators/distinctUntilKeyChanged": path.join(dir, "operators/distinctUntilKeyChanged.js"),
    "rxjs/operators/distinctUntilChanged": path.join(dir, "operators/distinctUntilChanged.js"),
    "rxjs/operators/distinct": path.join(dir, "operators/distinct.js"),
    "rxjs/operators/dematerialize": path.join(dir, "operators/dematerialize.js"),
    "rxjs/operators/delayWhen": path.join(dir, "operators/delayWhen.js"),
    "rxjs/operators/delay": path.join(dir, "operators/delay.js"),
    "rxjs/operators/defaultIfEmpty": path.join(dir, "operators/defaultIfEmpty.js"),
    "rxjs/operators/debounceTime": path.join(dir, "operators/debounceTime.js"),
    "rxjs/operators/debounce": path.join(dir, "operators/debounce.js"),
    "rxjs/operators/count": path.join(dir, "operators/count.js"),
    "rxjs/operators/concatMapTo": path.join(dir, "operators/concatMapTo.js"),
    "rxjs/operators/concatMap": path.join(dir, "operators/concatMap.js"),
    "rxjs/operators/concatAll": path.join(dir, "operators/concatAll.js"),
    "rxjs/operators/concat": path.join(dir, "operators/concat.js"),
    "rxjs/operators/combineLatest": path.join(dir, "operators/combineLatest.js"),
    "rxjs/operators/combineAll": path.join(dir, "operators/combineAll.js"),
    "rxjs/operators/catchError": path.join(dir, "operators/catchError.js"),
    "rxjs/operators/bufferWhen": path.join(dir, "operators/bufferWhen.js"),
    "rxjs/operators/bufferToggle": path.join(dir, "operators/bufferToggle.js"),
    "rxjs/operators/bufferTime": path.join(dir, "operators/bufferTime.js"),
    "rxjs/operators/bufferCount": path.join(dir, "operators/bufferCount.js"),
    "rxjs/operators/buffer": path.join(dir, "operators/buffer.js"),
    "rxjs/operators/auditTime": path.join(dir, "operators/auditTime.js"),
    "rxjs/operators/audit": path.join(dir, "operators/audit.js"),
    "rxjs/operators": path.join(dir, "operators.js"),
    "rxjs/operator/zipAll": path.join(dir, "operator/zipAll.js"),
    "rxjs/operator/zip": path.join(dir, "operator/zip.js"),
    "rxjs/operator/withLatestFrom": path.join(dir, "operator/withLatestFrom.js"),
    "rxjs/operator/windowWhen": path.join(dir, "operator/windowWhen.js"),
    "rxjs/operator/windowToggle": path.join(dir, "operator/windowToggle.js"),
    "rxjs/operator/windowTime": path.join(dir, "operator/windowTime.js"),
    "rxjs/operator/windowCount": path.join(dir, "operator/windowCount.js"),
    "rxjs/operator/window": path.join(dir, "operator/window.js"),
    "rxjs/operator/toPromise": path.join(dir, "operator/toPromise.js"),
    "rxjs/operator/toArray": path.join(dir, "operator/toArray.js"),
    "rxjs/operator/timestamp": path.join(dir, "operator/timestamp.js"),
    "rxjs/operator/timeoutWith": path.join(dir, "operator/timeoutWith.js"),
    "rxjs/operator/timeout": path.join(dir, "operator/timeout.js"),
    "rxjs/operator/timeInterval": path.join(dir, "operator/timeInterval.js"),
    "rxjs/operator/throttleTime": path.join(dir, "operator/throttleTime.js"),
    "rxjs/operator/throttle": path.join(dir, "operator/throttle.js"),
    "rxjs/operator/takeWhile": path.join(dir, "operator/takeWhile.js"),
    "rxjs/operator/takeUntil": path.join(dir, "operator/takeUntil.js"),
    "rxjs/operator/takeLast": path.join(dir, "operator/takeLast.js"),
    "rxjs/operator/take": path.join(dir, "operator/take.js"),
    "rxjs/operator/switchMapTo": path.join(dir, "operator/switchMapTo.js"),
    "rxjs/operator/switchMap": path.join(dir, "operator/switchMap.js"),
    "rxjs/operator/switch": path.join(dir, "operator/switch.js"),
    "rxjs/operator/subscribeOn": path.join(dir, "operator/subscribeOn.js"),
    "rxjs/operator/startWith": path.join(dir, "operator/startWith.js"),
    "rxjs/operator/skipWhile": path.join(dir, "operator/skipWhile.js"),
    "rxjs/operator/skipUntil": path.join(dir, "operator/skipUntil.js"),
    "rxjs/operator/skipLast": path.join(dir, "operator/skipLast.js"),
    "rxjs/operator/skip": path.join(dir, "operator/skip.js"),
    "rxjs/operator/single": path.join(dir, "operator/single.js"),
    "rxjs/operator/shareReplay": path.join(dir, "operator/shareReplay.js"),
    "rxjs/operator/share": path.join(dir, "operator/share.js"),
    "rxjs/operator/sequenceEqual": path.join(dir, "operator/sequenceEqual.js"),
    "rxjs/operator/scan": path.join(dir, "operator/scan.js"),
    "rxjs/operator/sampleTime": path.join(dir, "operator/sampleTime.js"),
    "rxjs/operator/sample": path.join(dir, "operator/sample.js"),
    "rxjs/operator/retryWhen": path.join(dir, "operator/retryWhen.js"),
    "rxjs/operator/retry": path.join(dir, "operator/retry.js"),
    "rxjs/operator/repeatWhen": path.join(dir, "operator/repeatWhen.js"),
    "rxjs/operator/repeat": path.join(dir, "operator/repeat.js"),
    "rxjs/operator/reduce": path.join(dir, "operator/reduce.js"),
    "rxjs/operator/race": path.join(dir, "operator/race.js"),
    "rxjs/operator/publishReplay": path.join(dir, "operator/publishReplay.js"),
    "rxjs/operator/publishLast": path.join(dir, "operator/publishLast.js"),
    "rxjs/operator/publishBehavior": path.join(dir, "operator/publishBehavior.js"),
    "rxjs/operator/publish": path.join(dir, "operator/publish.js"),
    "rxjs/operator/pluck": path.join(dir, "operator/pluck.js"),
    "rxjs/operator/partition": path.join(dir, "operator/partition.js"),
    "rxjs/operator/pairwise": path.join(dir, "operator/pairwise.js"),
    "rxjs/operator/onErrorResumeNext": path.join(dir, "operator/onErrorResumeNext.js"),
    "rxjs/operator/observeOn": path.join(dir, "operator/observeOn.js"),
    "rxjs/operator/multicast": path.join(dir, "operator/multicast.js"),
    "rxjs/operator/min": path.join(dir, "operator/min.js"),
    "rxjs/operator/mergeScan": path.join(dir, "operator/mergeScan.js"),
    "rxjs/operator/mergeMapTo": path.join(dir, "operator/mergeMapTo.js"),
    "rxjs/operator/mergeMap": path.join(dir, "operator/mergeMap.js"),
    "rxjs/operator/mergeAll": path.join(dir, "operator/mergeAll.js"),
    "rxjs/operator/merge": path.join(dir, "operator/merge.js"),
    "rxjs/operator/max": path.join(dir, "operator/max.js"),
    "rxjs/operator/materialize": path.join(dir, "operator/materialize.js"),
    "rxjs/operator/mapTo": path.join(dir, "operator/mapTo.js"),
    "rxjs/operator/map": path.join(dir, "operator/map.js"),
    "rxjs/operator/let": path.join(dir, "operator/let.js"),
    "rxjs/operator/last": path.join(dir, "operator/last.js"),
    "rxjs/operator/isEmpty": path.join(dir, "operator/isEmpty.js"),
    "rxjs/operator/ignoreElements": path.join(dir, "operator/ignoreElements.js"),
    "rxjs/operator/groupBy": path.join(dir, "operator/groupBy.js"),
    "rxjs/operator/first": path.join(dir, "operator/first.js"),
    "rxjs/operator/findIndex": path.join(dir, "operator/findIndex.js"),
    "rxjs/operator/find": path.join(dir, "operator/find.js"),
    "rxjs/operator/finally": path.join(dir, "operator/finally.js"),
    "rxjs/operator/filter": path.join(dir, "operator/filter.js"),
    "rxjs/operator/expand": path.join(dir, "operator/expand.js"),
    "rxjs/operator/exhaustMap": path.join(dir, "operator/exhaustMap.js"),
    "rxjs/operator/exhaust": path.join(dir, "operator/exhaust.js"),
    "rxjs/operator/every": path.join(dir, "operator/every.js"),
    "rxjs/operator/elementAt": path.join(dir, "operator/elementAt.js"),
    "rxjs/operator/do": path.join(dir, "operator/do.js"),
    "rxjs/operator/distinctUntilKeyChanged": path.join(dir, "operator/distinctUntilKeyChanged.js"),
    "rxjs/operator/distinctUntilChanged": path.join(dir, "operator/distinctUntilChanged.js"),
    "rxjs/operator/distinct": path.join(dir, "operator/distinct.js"),
    "rxjs/operator/dematerialize": path.join(dir, "operator/dematerialize.js"),
    "rxjs/operator/delayWhen": path.join(dir, "operator/delayWhen.js"),
    "rxjs/operator/delay": path.join(dir, "operator/delay.js"),
    "rxjs/operator/defaultIfEmpty": path.join(dir, "operator/defaultIfEmpty.js"),
    "rxjs/operator/debounceTime": path.join(dir, "operator/debounceTime.js"),
    "rxjs/operator/debounce": path.join(dir, "operator/debounce.js"),
    "rxjs/operator/count": path.join(dir, "operator/count.js"),
    "rxjs/operator/concatMapTo": path.join(dir, "operator/concatMapTo.js"),
    "rxjs/operator/concatMap": path.join(dir, "operator/concatMap.js"),
    "rxjs/operator/concatAll": path.join(dir, "operator/concatAll.js"),
    "rxjs/operator/concat": path.join(dir, "operator/concat.js"),
    "rxjs/operator/combineLatest": path.join(dir, "operator/combineLatest.js"),
    "rxjs/operator/combineAll": path.join(dir, "operator/combineAll.js"),
    "rxjs/operator/catch": path.join(dir, "operator/catch.js"),
    "rxjs/operator/bufferWhen": path.join(dir, "operator/bufferWhen.js"),
    "rxjs/operator/bufferToggle": path.join(dir, "operator/bufferToggle.js"),
    "rxjs/operator/bufferTime": path.join(dir, "operator/bufferTime.js"),
    "rxjs/operator/bufferCount": path.join(dir, "operator/bufferCount.js"),
    "rxjs/operator/buffer": path.join(dir, "operator/buffer.js"),
    "rxjs/operator/auditTime": path.join(dir, "operator/auditTime.js"),
    "rxjs/operator/audit": path.join(dir, "operator/audit.js"),
    "rxjs/observable/zip": path.join(dir, "observable/zip.js"),
    "rxjs/observable/using": path.join(dir, "observable/using.js"),
    "rxjs/observable/timer": path.join(dir, "observable/timer.js"),
    "rxjs/observable/throw": path.join(dir, "observable/throw.js"),
    "rxjs/observable/range": path.join(dir, "observable/range.js"),
    "rxjs/observable/race": path.join(dir, "observable/race.js"),
    "rxjs/observable/pairs": path.join(dir, "observable/pairs.js"),
    "rxjs/observable/onErrorResumeNext": path.join(dir, "observable/onErrorResumeNext.js"),
    "rxjs/observable/of": path.join(dir, "observable/of.js"),
    "rxjs/observable/never": path.join(dir, "observable/never.js"),
    "rxjs/observable/merge": path.join(dir, "observable/merge.js"),
    "rxjs/observable/interval": path.join(dir, "observable/interval.js"),
    "rxjs/observable/if": path.join(dir, "observable/if.js"),
    "rxjs/observable/generate": path.join(dir, "observable/generate.js"),
    "rxjs/observable/fromPromise": path.join(dir, "observable/fromPromise.js"),
    "rxjs/observable/fromEventPattern": path.join(dir, "observable/fromEventPattern.js"),
    "rxjs/observable/fromEvent": path.join(dir, "observable/fromEvent.js"),
    "rxjs/observable/from": path.join(dir, "observable/from.js"),
    "rxjs/observable/forkJoin": path.join(dir, "observable/forkJoin.js"),
    "rxjs/observable/empty": path.join(dir, "observable/empty.js"),
    "rxjs/observable/dom/webSocket": path.join(dir, "observable/dom/webSocket.js"),
    "rxjs/observable/dom/ajax": path.join(dir, "observable/dom/ajax.js"),
    "rxjs/observable/dom/WebSocketSubject": path.join(dir, "observable/dom/WebSocketSubject.js"),
    "rxjs/observable/dom/AjaxObservable": path.join(dir, "observable/dom/AjaxObservable.js"),
    "rxjs/observable/defer": path.join(dir, "observable/defer.js"),
    "rxjs/observable/concat": path.join(dir, "observable/concat.js"),
    "rxjs/observable/combineLatest": path.join(dir, "observable/combineLatest.js"),
    "rxjs/observable/bindNodeCallback": path.join(dir, "observable/bindNodeCallback.js"),
    "rxjs/observable/bindCallback": path.join(dir, "observable/bindCallback.js"),
    "rxjs/observable/UsingObservable": path.join(dir, "observable/UsingObservable.js"),
    "rxjs/observable/TimerObservable": path.join(dir, "observable/TimerObservable.js"),
    "rxjs/observable/SubscribeOnObservable": path.join(dir, "observable/SubscribeOnObservable.js"),
    "rxjs/observable/ScalarObservable": path.join(dir, "observable/ScalarObservable.js"),
    "rxjs/observable/RangeObservable": path.join(dir, "observable/RangeObservable.js"),
    "rxjs/observable/PromiseObservable": path.join(dir, "observable/PromiseObservable.js"),
    "rxjs/observable/PairsObservable": path.join(dir, "observable/PairsObservable.js"),
    "rxjs/observable/NeverObservable": path.join(dir, "observable/NeverObservable.js"),
    "rxjs/observable/IteratorObservable": path.join(dir, "observable/IteratorObservable.js"),
    "rxjs/observable/IntervalObservable": path.join(dir, "observable/IntervalObservable.js"),
    "rxjs/observable/IfObservable": path.join(dir, "observable/IfObservable.js"),
    "rxjs/observable/GenerateObservable": path.join(dir, "observable/GenerateObservable.js"),
    "rxjs/observable/FromObservable": path.join(dir, "observable/FromObservable.js"),
    "rxjs/observable/FromEventPatternObservable": path.join(dir, "observable/FromEventPatternObservable.js"),
    "rxjs/observable/FromEventObservable": path.join(dir, "observable/FromEventObservable.js"),
    "rxjs/observable/ForkJoinObservable": path.join(dir, "observable/ForkJoinObservable.js"),
    "rxjs/observable/ErrorObservable": path.join(dir, "observable/ErrorObservable.js"),
    "rxjs/observable/EmptyObservable": path.join(dir, "observable/EmptyObservable.js"),
    "rxjs/observable/DeferObservable": path.join(dir, "observable/DeferObservable.js"),
    "rxjs/observable/ConnectableObservable": path.join(dir, "observable/ConnectableObservable.js"),
    "rxjs/observable/BoundNodeCallbackObservable": path.join(dir, "observable/BoundNodeCallbackObservable.js"),
    "rxjs/observable/BoundCallbackObservable": path.join(dir, "observable/BoundCallbackObservable.js"),
    "rxjs/observable/ArrayObservable": path.join(dir, "observable/ArrayObservable.js"),
    "rxjs/observable/ArrayLikeObservable": path.join(dir, "observable/ArrayLikeObservable.js"),
    "rxjs/interfaces": path.join(dir, "interfaces.js"),
    "rxjs/add/operator/zipAll": path.join(dir, "add/operator/zipAll.js"),
    "rxjs/add/operator/zip": path.join(dir, "add/operator/zip.js"),
    "rxjs/add/operator/withLatestFrom": path.join(dir, "add/operator/withLatestFrom.js"),
    "rxjs/add/operator/windowWhen": path.join(dir, "add/operator/windowWhen.js"),
    "rxjs/add/operator/windowToggle": path.join(dir, "add/operator/windowToggle.js"),
    "rxjs/add/operator/windowTime": path.join(dir, "add/operator/windowTime.js"),
    "rxjs/add/operator/windowCount": path.join(dir, "add/operator/windowCount.js"),
    "rxjs/add/operator/window": path.join(dir, "add/operator/window.js"),
    "rxjs/add/operator/toPromise": path.join(dir, "add/operator/toPromise.js"),
    "rxjs/add/operator/toArray": path.join(dir, "add/operator/toArray.js"),
    "rxjs/add/operator/timestamp": path.join(dir, "add/operator/timestamp.js"),
    "rxjs/add/operator/timeoutWith": path.join(dir, "add/operator/timeoutWith.js"),
    "rxjs/add/operator/timeout": path.join(dir, "add/operator/timeout.js"),
    "rxjs/add/operator/timeInterval": path.join(dir, "add/operator/timeInterval.js"),
    "rxjs/add/operator/throttleTime": path.join(dir, "add/operator/throttleTime.js"),
    "rxjs/add/operator/throttle": path.join(dir, "add/operator/throttle.js"),
    "rxjs/add/operator/takeWhile": path.join(dir, "add/operator/takeWhile.js"),
    "rxjs/add/operator/takeUntil": path.join(dir, "add/operator/takeUntil.js"),
    "rxjs/add/operator/takeLast": path.join(dir, "add/operator/takeLast.js"),
    "rxjs/add/operator/take": path.join(dir, "add/operator/take.js"),
    "rxjs/add/operator/switchMapTo": path.join(dir, "add/operator/switchMapTo.js"),
    "rxjs/add/operator/switchMap": path.join(dir, "add/operator/switchMap.js"),
    "rxjs/add/operator/switch": path.join(dir, "add/operator/switch.js"),
    "rxjs/add/operator/subscribeOn": path.join(dir, "add/operator/subscribeOn.js"),
    "rxjs/add/operator/startWith": path.join(dir, "add/operator/startWith.js"),
    "rxjs/add/operator/skipWhile": path.join(dir, "add/operator/skipWhile.js"),
    "rxjs/add/operator/skipUntil": path.join(dir, "add/operator/skipUntil.js"),
    "rxjs/add/operator/skipLast": path.join(dir, "add/operator/skipLast.js"),
    "rxjs/add/operator/skip": path.join(dir, "add/operator/skip.js"),
    "rxjs/add/operator/single": path.join(dir, "add/operator/single.js"),
    "rxjs/add/operator/shareReplay": path.join(dir, "add/operator/shareReplay.js"),
    "rxjs/add/operator/share": path.join(dir, "add/operator/share.js"),
    "rxjs/add/operator/sequenceEqual": path.join(dir, "add/operator/sequenceEqual.js"),
    "rxjs/add/operator/scan": path.join(dir, "add/operator/scan.js"),
    "rxjs/add/operator/sampleTime": path.join(dir, "add/operator/sampleTime.js"),
    "rxjs/add/operator/sample": path.join(dir, "add/operator/sample.js"),
    "rxjs/add/operator/retryWhen": path.join(dir, "add/operator/retryWhen.js"),
    "rxjs/add/operator/retry": path.join(dir, "add/operator/retry.js"),
    "rxjs/add/operator/repeatWhen": path.join(dir, "add/operator/repeatWhen.js"),
    "rxjs/add/operator/repeat": path.join(dir, "add/operator/repeat.js"),
    "rxjs/add/operator/reduce": path.join(dir, "add/operator/reduce.js"),
    "rxjs/add/operator/race": path.join(dir, "add/operator/race.js"),
    "rxjs/add/operator/publishReplay": path.join(dir, "add/operator/publishReplay.js"),
    "rxjs/add/operator/publishLast": path.join(dir, "add/operator/publishLast.js"),
    "rxjs/add/operator/publishBehavior": path.join(dir, "add/operator/publishBehavior.js"),
    "rxjs/add/operator/publish": path.join(dir, "add/operator/publish.js"),
    "rxjs/add/operator/pluck": path.join(dir, "add/operator/pluck.js"),
    "rxjs/add/operator/partition": path.join(dir, "add/operator/partition.js"),
    "rxjs/add/operator/pairwise": path.join(dir, "add/operator/pairwise.js"),
    "rxjs/add/operator/onErrorResumeNext": path.join(dir, "add/operator/onErrorResumeNext.js"),
    "rxjs/add/operator/observeOn": path.join(dir, "add/operator/observeOn.js"),
    "rxjs/add/operator/multicast": path.join(dir, "add/operator/multicast.js"),
    "rxjs/add/operator/min": path.join(dir, "add/operator/min.js"),
    "rxjs/add/operator/mergeScan": path.join(dir, "add/operator/mergeScan.js"),
    "rxjs/add/operator/mergeMapTo": path.join(dir, "add/operator/mergeMapTo.js"),
    "rxjs/add/operator/mergeMap": path.join(dir, "add/operator/mergeMap.js"),
    "rxjs/add/operator/mergeAll": path.join(dir, "add/operator/mergeAll.js"),
    "rxjs/add/operator/merge": path.join(dir, "add/operator/merge.js"),
    "rxjs/add/operator/max": path.join(dir, "add/operator/max.js"),
    "rxjs/add/operator/materialize": path.join(dir, "add/operator/materialize.js"),
    "rxjs/add/operator/mapTo": path.join(dir, "add/operator/mapTo.js"),
    "rxjs/add/operator/map": path.join(dir, "add/operator/map.js"),
    "rxjs/add/operator/let": path.join(dir, "add/operator/let.js"),
    "rxjs/add/operator/last": path.join(dir, "add/operator/last.js"),
    "rxjs/add/operator/isEmpty": path.join(dir, "add/operator/isEmpty.js"),
    "rxjs/add/operator/ignoreElements": path.join(dir, "add/operator/ignoreElements.js"),
    "rxjs/add/operator/groupBy": path.join(dir, "add/operator/groupBy.js"),
    "rxjs/add/operator/first": path.join(dir, "add/operator/first.js"),
    "rxjs/add/operator/findIndex": path.join(dir, "add/operator/findIndex.js"),
    "rxjs/add/operator/find": path.join(dir, "add/operator/find.js"),
    "rxjs/add/operator/finally": path.join(dir, "add/operator/finally.js"),
    "rxjs/add/operator/filter": path.join(dir, "add/operator/filter.js"),
    "rxjs/add/operator/expand": path.join(dir, "add/operator/expand.js"),
    "rxjs/add/operator/exhaustMap": path.join(dir, "add/operator/exhaustMap.js"),
    "rxjs/add/operator/exhaust": path.join(dir, "add/operator/exhaust.js"),
    "rxjs/add/operator/every": path.join(dir, "add/operator/every.js"),
    "rxjs/add/operator/elementAt": path.join(dir, "add/operator/elementAt.js"),
    "rxjs/add/operator/do": path.join(dir, "add/operator/do.js"),
    "rxjs/add/operator/distinctUntilKeyChanged": path.join(dir, "add/operator/distinctUntilKeyChanged.js"),
    "rxjs/add/operator/distinctUntilChanged": path.join(dir, "add/operator/distinctUntilChanged.js"),
    "rxjs/add/operator/distinct": path.join(dir, "add/operator/distinct.js"),
    "rxjs/add/operator/dematerialize": path.join(dir, "add/operator/dematerialize.js"),
    "rxjs/add/operator/delayWhen": path.join(dir, "add/operator/delayWhen.js"),
    "rxjs/add/operator/delay": path.join(dir, "add/operator/delay.js"),
    "rxjs/add/operator/defaultIfEmpty": path.join(dir, "add/operator/defaultIfEmpty.js"),
    "rxjs/add/operator/debounceTime": path.join(dir, "add/operator/debounceTime.js"),
    "rxjs/add/operator/debounce": path.join(dir, "add/operator/debounce.js"),
    "rxjs/add/operator/count": path.join(dir, "add/operator/count.js"),
    "rxjs/add/operator/concatMapTo": path.join(dir, "add/operator/concatMapTo.js"),
    "rxjs/add/operator/concatMap": path.join(dir, "add/operator/concatMap.js"),
    "rxjs/add/operator/concatAll": path.join(dir, "add/operator/concatAll.js"),
    "rxjs/add/operator/concat": path.join(dir, "add/operator/concat.js"),
    "rxjs/add/operator/combineLatest": path.join(dir, "add/operator/combineLatest.js"),
    "rxjs/add/operator/combineAll": path.join(dir, "add/operator/combineAll.js"),
    "rxjs/add/operator/catch": path.join(dir, "add/operator/catch.js"),
    "rxjs/add/operator/bufferWhen": path.join(dir, "add/operator/bufferWhen.js"),
    "rxjs/add/operator/bufferToggle": path.join(dir, "add/operator/bufferToggle.js"),
    "rxjs/add/operator/bufferTime": path.join(dir, "add/operator/bufferTime.js"),
    "rxjs/add/operator/bufferCount": path.join(dir, "add/operator/bufferCount.js"),
    "rxjs/add/operator/buffer": path.join(dir, "add/operator/buffer.js"),
    "rxjs/add/operator/auditTime": path.join(dir, "add/operator/auditTime.js"),
    "rxjs/add/operator/audit": path.join(dir, "add/operator/audit.js"),
    "rxjs/add/observable/zip": path.join(dir, "add/observable/zip.js"),
    "rxjs/add/observable/using": path.join(dir, "add/observable/using.js"),
    "rxjs/add/observable/timer": path.join(dir, "add/observable/timer.js"),
    "rxjs/add/observable/throw": path.join(dir, "add/observable/throw.js"),
    "rxjs/add/observable/range": path.join(dir, "add/observable/range.js"),
    "rxjs/add/observable/race": path.join(dir, "add/observable/race.js"),
    "rxjs/add/observable/pairs": path.join(dir, "add/observable/pairs.js"),
    "rxjs/add/observable/onErrorResumeNext": path.join(dir, "add/observable/onErrorResumeNext.js"),
    "rxjs/add/observable/of": path.join(dir, "add/observable/of.js"),
    "rxjs/add/observable/never": path.join(dir, "add/observable/never.js"),
    "rxjs/add/observable/merge": path.join(dir, "add/observable/merge.js"),
    "rxjs/add/observable/interval": path.join(dir, "add/observable/interval.js"),
    "rxjs/add/observable/if": path.join(dir, "add/observable/if.js"),
    "rxjs/add/observable/generate": path.join(dir, "add/observable/generate.js"),
    "rxjs/add/observable/fromPromise": path.join(dir, "add/observable/fromPromise.js"),
    "rxjs/add/observable/fromEventPattern": path.join(dir, "add/observable/fromEventPattern.js"),
    "rxjs/add/observable/fromEvent": path.join(dir, "add/observable/fromEvent.js"),
    "rxjs/add/observable/from": path.join(dir, "add/observable/from.js"),
    "rxjs/add/observable/forkJoin": path.join(dir, "add/observable/forkJoin.js"),
    "rxjs/add/observable/empty": path.join(dir, "add/observable/empty.js"),
    "rxjs/add/observable/dom/webSocket": path.join(dir, "add/observable/dom/webSocket.js"),
    "rxjs/add/observable/dom/ajax": path.join(dir, "add/observable/dom/ajax.js"),
    "rxjs/add/observable/defer": path.join(dir, "add/observable/defer.js"),
    "rxjs/add/observable/concat": path.join(dir, "add/observable/concat.js"),
    "rxjs/add/observable/combineLatest": path.join(dir, "add/observable/combineLatest.js"),
    "rxjs/add/observable/bindNodeCallback": path.join(dir, "add/observable/bindNodeCallback.js"),
    "rxjs/add/observable/bindCallback": path.join(dir, "add/observable/bindCallback.js"),
    "rxjs/Subscription": path.join(dir, "Subscription.js"),
    "rxjs/Subscriber": path.join(dir, "Subscriber.js"),
    "rxjs/SubjectSubscription": path.join(dir, "SubjectSubscription.js"),
    "rxjs/Subject": path.join(dir, "Subject.js"),
    "rxjs/Scheduler": path.join(dir, "Scheduler.js"),
    "rxjs/Rx": path.join(dir, "Rx.js"),
    "rxjs/ReplaySubject": path.join(dir, "ReplaySubject.js"),
    "rxjs/OuterSubscriber": path.join(dir, "OuterSubscriber.js"),
    "rxjs/Operator": path.join(dir, "Operator.js"),
    "rxjs/Observer": path.join(dir, "Observer.js"),
    "rxjs/Observable": path.join(dir, "Observable.js"),
    "rxjs/Notification": path.join(dir, "Notification.js"),
    "rxjs/InnerSubscriber": path.join(dir, "InnerSubscriber.js"),
    "rxjs/BehaviorSubject": path.join(dir, "BehaviorSubject.js"),
    "rxjs/AsyncSubject": path.join(dir, "AsyncSubject.js")
};
}
