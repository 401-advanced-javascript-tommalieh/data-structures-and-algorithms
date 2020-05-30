'use-strict';

const LinkedList = require('../linked-list');

describe('Linked List', () => {
    it ('constructor', () => {
        const list = new LinkedList();
        expect(list.head).toBeNull();
    });

    it ('insert', () => {
        const list = new LinkedList();
        const frstVlu = 'first value';
        list.insert(frstVlu);
        expect(list.head.value).toEqual(frstVlu);
        const scndVlu = 'second value';
        list.insert(scndVlu);
        expect(list.head.value).toEqual(frstVlu);
        expect(list.head.next.value).toEqual(scndVlu);
        const fnlVlu = 'final value';
        list.insert(fnlVlu);
        expect(list.head.value).toEqual(frstVlu);
        expect(list.head.next.next.value).toEqual(fnlVlu);
    });

    it ('includes', () => {
        const list = new LinkedList();
        let includes = list.includes('Hello');
        expect(includes).toEqual(false);

        const frstVlu = 'first value';
        list.insert(frstVlu);
        const scndVlu = 'second value';
        list.insert(scndVlu);
        includes = list.includes(scndVlu);
        includes = list.includes(scndVlu)
        expect(includes).toEqual(true);

        includes = list.includes(frstVlu);
        expect(includes).toEqual(true);

        includes = list.includes(1);
        expect(includes).toEqual(false);
    })

    it ('toString', () => {
        const list = new LinkedList();
        let toString = list.toString();
        expect(toString).toEqual('NULL');

        const frstVlu = 'first value';
        list.insert(frstVlu);
        const scndVlu = 'second value';
        list.insert(scndVlu);
        toString = list.toString();
        expect(toString).toEqual('{first value} -> {second value} -> NULL');
    })

});