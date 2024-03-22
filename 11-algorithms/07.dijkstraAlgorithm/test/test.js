console.log = function () { };
const { expect, AssertionError } = require('chai');
const rewire = require('rewire');
const Structured = require('structured');
const fs = require('fs');
const code = fs.readFileSync('dijkstras.js', 'utf-8');

describe('', function () {
    it('', function () {
        // const decl
        const expectedConst = function () {
            const dijkstras = () => {
                const distances = {};
            };
        }

        const expectedVar = function () {
            const dijkstras = () => {
                var distances = {};
            };
        }

        const expectedLet = function () {
            const dijkstras = () => {
                let distances = {};
            };
        }

        const matchExpected = Structured.match(code, expectedConst) || Structured.match(code, expectedVar) || Structured.match(code, expectedLet);
        expect(matchExpected !== false, 'Check that a `distances` is created with `const` or `let` and set to an empty object.').to.equal(true);


        const expectedForEach = function () {
            const dijkstras = (graph) => {
                graph.vertices.forEach()
            };
        }

        const matchExpectedForEach = Structured.match(code, expectedForEach);
        expect(matchExpectedForEach !== false, 'Check that you are iterating through every vertex in the graph using `.forEach()`.').to.equal(true);


        const expectedSetArrow = function () {
            const dijkstras = (graph) => {
                graph.vertices.forEach(($vertex) => {
                    distances[$vertex.data] = Infinity;
                })
            };
        }

        const expectedSetFn = function () {
            const dijkstras = (graph) => {
                graph.vertices.forEach(function ($vertex) {
                    distances[$vertex.data] = Infinity;
                })
            };
        }

        const matchExpectedSet = Structured.match(code, expectedSetArrow) || Structured.match(code, expectedSetFn);
        expect(matchExpectedSet !== false, 'Check that you are setting `vertex.data` to `Infinity` in the `distances` object.').to.equal(true);


        let dijkstras;
        try {
            const moduleImport = rewire('../dijkstras.js');
            dijkstras = moduleImport.__get__('dijkstras');
        } catch (e) {
            expect(true, 'We encountered an error when running your code. Try checking the output for errors.').to.equal(false);
        }

        expect(typeof dijkstras === 'function', `Expected \`dijkstras\` to be a function. Instead it is ${typeof dijkstras}`).to.equal(true);
    })
});
