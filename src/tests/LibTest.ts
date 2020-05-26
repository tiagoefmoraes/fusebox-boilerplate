import * as assert from 'assert';
import { AccumulatorLibrary } from '../lib/AccumulatorLibrary';

describe('Accumulator Library', () => {

    it('can add 5 and 2', () => {
        let libraryInstance = new AccumulatorLibrary();
        libraryInstance.clear();
        libraryInstance.add(5);
        libraryInstance.add(2);
        assert.equal(libraryInstance.getValue(), 7);
    });
});
