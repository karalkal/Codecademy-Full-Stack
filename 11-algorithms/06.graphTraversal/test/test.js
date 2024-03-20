console.log = function () { };
const { expect } = require('chai');
const rewire = require('rewire');
const Structured = require('structured');
const fs = require('fs');
const code = fs.readFileSync('breadthFirstTraversal.js', 'utf-8');

describe('breadthFirstTraversal', function () {
    it('should create a new Queue and set it to `visitQueue`', function () {
        const expected = function () {
            const breadthFirstTraversal = (start) => {
                const visitQueue = new Queue();
            }
        }

        const queueFound = Structured.match(code, expected);
        expect(queueFound !== false, 'Make sure you are creating a `visitQueue` variable and setting it to a new `Queue`').to.equal(true);
    })
})

describe('breadthFirstTraversal', function () {
    it('should enqueue `start` to the `visitQueue`', function () {
        const expected = function () {
            const breadthFirstTraversal = (start) => {
                visitQueue.enqueue(start)
            }
        }

        const enqueueFound = Structured.match(code, expected);
        expect(enqueueFound !== false, 'Make sure your `visitQueue` enqueues the `start` vertex').to.equal(true);
    })
})

describe('breadthFirstTraversal', function () {
    it('should run without errors', function () {
        let bft;
        try {
            const moduleImport = rewire('../breadthFirstTraversal.js');
            bft = moduleImport.__get__('breadthFirstTraversal');
        } catch (e) {
            expect(true, 'We\'re unable to find the `breadthFirstTraversal` function. Try checking your code for syntax errors.').to.equal(false);
        }

        expect(typeof bft === 'function', `Expected \`breadthFirstTraversal\` to be a function. Instead it is ${typeof bft}`).to.equal(true);

        bft({ data: 'testtesttest', edges: [] });
    })
});