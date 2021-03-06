import Rx from '@reactivex/rxjs';

const fibonacciArray = [1,1,2,3,5,7,11,13];
const fibonacciPromise = new Promise(r=>r(fibonacciArray));
function * fibonacciGenerator () {
    let a =1, b =1;
    while (true) {
        let c = a + b;
        yield c;
        a = b;
        b = c;
    }
}

Rx.Observable.from(
    // fibonacciArray
    // fibonacciPromise
    fibonacciGenerator()
)
    .take(20)
    .subscribe(a=>console.log(a));
