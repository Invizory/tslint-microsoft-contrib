/// <reference path="../typings/mocha.d.ts" />
/// <reference path="../typings/chai.d.ts" />

/* tslint:disable:quotemark */
import {TestHelper} from './TestHelper';

/**
 * Unit tests.
 */
describe('noDocumentWriteRule', () : void => {
    const RULE_NAME : string = 'no-document-write';

    it('should not produce violations ', () : void => {
        const inputFile : string = 'test-data/NoDocumentWrite/NoDocumentWritePassingTestInput.ts';
        TestHelper.assertViolations(RULE_NAME, inputFile, []);
    });

    it('should produce violations ', () : void => {
        const inputFile : string = 'test-data/NoDocumentWrite/NoDocumentWriteFailingTestInput.ts';
        TestHelper.assertViolations(RULE_NAME, inputFile, [
            {
                "failure": "Forbidden call to document.write",
                "name": "test-data/NoDocumentWrite/NoDocumentWriteFailingTestInput.ts",
                "ruleName": "no-document-write",
                "startPosition": { "line": 7, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.writeln",
                "name": "test-data/NoDocumentWrite/NoDocumentWriteFailingTestInput.ts",
                "ruleName": "no-document-write",
                "startPosition": { "line": 8, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.write",
                "name": "test-data/NoDocumentWrite/NoDocumentWriteFailingTestInput.ts",
                "ruleName": "no-document-write",
                "startPosition": { "line": 9, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.writeln",
                "name": "test-data/NoDocumentWrite/NoDocumentWriteFailingTestInput.ts",
                "ruleName": "no-document-write",
                "startPosition": { "line": 10, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.write",
                "name": "test-data/NoDocumentWrite/NoDocumentWriteFailingTestInput.ts",
                "ruleName": "no-document-write",
                "startPosition": { "line": 11, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.writeln",
                "name": "test-data/NoDocumentWrite/NoDocumentWriteFailingTestInput.ts",
                "ruleName": "no-document-write",
                "startPosition": { "line": 12, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.write",
                "name": "test-data/NoDocumentWrite/NoDocumentWriteFailingTestInput.ts",
                "ruleName": "no-document-write",
                "startPosition": { "line": 14, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.writeln",
                "name": "test-data/NoDocumentWrite/NoDocumentWriteFailingTestInput.ts",
                "ruleName": "no-document-write",
                "startPosition": { "line": 15, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.write",
                "name": "test-data/NoDocumentWrite/NoDocumentWriteFailingTestInput.ts",
                "ruleName": "no-document-write",
                "startPosition": { "line": 18, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.writeln",
                "name": "test-data/NoDocumentWrite/NoDocumentWriteFailingTestInput.ts",
                "ruleName": "no-document-write",
                "startPosition": { "line": 19, "character": 1 }
            }
        ]);
    });

});
/* tslint:enable:quotemark */
