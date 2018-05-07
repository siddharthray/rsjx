import Rx from '@reactivex/rxjs';

// const ticker = Rx.Observable.interval(2000);
const stopWatch = Rx.Observable.timer(2000,1000);

stopWatch.subscribe(a=>console.log('A',a));
// setTimeout(()=>ticker.subscribe(a=>console.log('B',a)),1000);