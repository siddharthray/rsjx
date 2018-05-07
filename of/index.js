import Rx from "@reactivex/rxjs";

const ofObservable = Rx.Observable.of(
    1,2,3,'four',5,[],{},[1,2,3]
).subscribe(a => console.log(a));