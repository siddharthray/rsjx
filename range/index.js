import Rx from "@reactivex/rxjs";

const rangeObservale = Rx.Observable.range(1, 15);

rangeObservale
    .subscribe(e => console.log(`Range emitted ${e}`));
