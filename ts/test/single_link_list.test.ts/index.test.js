import {describe, expect, test} from '@jest/globals';
import LinkList from '../../src/single_link_list/LinkList';

// test for single link list


describe('extra', () => {
    test('Addition of two number', function () {
        const first = [2,4,3];
        const second = [5,6,4];

        const linklist = new LinkList;
        const result = linklist.addNumber(first, second);

        expect(result).toBe([7,0,8])
    });
});