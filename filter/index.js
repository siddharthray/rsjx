import Rx from '@reactivex/rxjs';

var range = Rx.Observable
    // .range(1,9)
    .interval(500)
    .filter(n=> n%2 != 0)
    .subscribe(a=>console.log(a));

