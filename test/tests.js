import stringToOperations from '../src/string-to-operations.js';

const test = QUnit.test;

test('add', function(assert) {
    const input = '3 + 3';
    const expected = 6;
    const result = stringToOperations(input);
    assert.equal(result, expected);
});