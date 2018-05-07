import Rx from '@reactivex/rxjs';

Rx.Observable
    .empty()
    .subscribe({
        complete:a=>console.log('COMPLETE',a),
        next:a=>console.log('EMMIT',a)
    });