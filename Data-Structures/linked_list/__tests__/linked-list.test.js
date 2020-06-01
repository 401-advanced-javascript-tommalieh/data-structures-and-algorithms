'use-strict';

const LinkedList = require('../linked-list');

describe('Linked List', () => {
  it ('constructor', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  it ('append', () => {
    const list = new LinkedList();
    const frstVlu = 'first value';
    list.append(frstVlu);
    expect(list.head.value).toEqual(frstVlu);
    expect(list.tail).toBeNull();
    const scndVlu = 'second value';
    list.append(scndVlu);
    expect(list.head.value).toEqual(frstVlu);
    expect(list.tail.value).toEqual(scndVlu);
    expect(list.head.next.value).toEqual(scndVlu);
    const fnlVlu = 'final value';
    list.append(fnlVlu);
    expect(list.head.value).toEqual(frstVlu);
    expect(list.tail.value).toEqual(fnlVlu);
    expect(list.head.next.next.value).toEqual(fnlVlu);
  });

  it ('includes', () => {
    const list = new LinkedList();
    let includes = list.includes('Hello');
    expect(includes).toEqual(false);

    const frstVlu = 'first value';
    list.append(frstVlu);
    const scndVlu = 'second value';
    list.append(scndVlu);
    includes = list.includes(scndVlu);
    includes = list.includes(scndVlu);
    expect(includes).toEqual(true);

    includes = list.includes(frstVlu);
    expect(includes).toEqual(true);

    includes = list.includes(1);
    expect(includes).toEqual(false);
  });

  it ('toString', () => {
    const list = new LinkedList();
    let toString = list.toString();
    expect(toString).toEqual('NULL');

    const frstVlu = 'first value';
    list.append(frstVlu);
    const scndVlu = 'second value';
    list.append(scndVlu);
    toString = list.toString();
    expect(toString).toEqual('{first value} -> {second value} -> NULL');
  });


  it ('insertBefore', () => {
    const list = new LinkedList();
    const frstNewVlu = 'first new value';
    const exstngVlu = 'existing value';
    list.insertBefore(exstngVlu, frstNewVlu);
    expect(list.head.value).toEqual(frstNewVlu);
    expect(list.tail).toBeNull();
    const frstVlu = 'first value';
    list.append(frstVlu);
    expect(list.head.value).toEqual(frstNewVlu);
    expect(list.tail.value).toEqual(frstVlu);
    const scndVlu = 'second value';
    list.append(scndVlu);
    expect(list.head.value).toEqual(frstNewVlu);
    expect(list.tail.value).toEqual(scndVlu);
    expect(list.head.next.value).toEqual(frstVlu);
    const fnlVlu = 'final value';
    list.append(fnlVlu);
    expect(list.head.value).toEqual(frstNewVlu);
    expect(list.tail.value).toEqual(fnlVlu);
    expect(list.head.next.next.value).toEqual(scndVlu);
    const newVlu = 'new value';
    list.insertBefore(scndVlu, newVlu);
    expect(list.head.value).toEqual(frstNewVlu);
    expect(list.tail.value).toEqual(fnlVlu);
    expect(list.head.next.next.value).toEqual(newVlu);
  });

  it ('insertAfter', () => {
    const list = new LinkedList();
    const frstNewVlu = 'first new value';
    const exstngVlu = 'existing value';
    list.insertAfter(exstngVlu, frstNewVlu);
    expect(list.head.value).toEqual(frstNewVlu);
    expect(list.tail).toBeNull();
    const frstVlu = 'first value';
    list.append(frstVlu);
    expect(list.head.value).toEqual(frstNewVlu);
    expect(list.tail.value).toEqual(frstVlu);
    const scndVlu = 'second value';
    list.append(scndVlu);
    expect(list.head.value).toEqual(frstNewVlu);
    expect(list.tail.value).toEqual(scndVlu);
    expect(list.head.next.value).toEqual(frstVlu);
    const fnlVlu = 'final value';
    list.append(fnlVlu);
    expect(list.head.value).toEqual(frstNewVlu);
    expect(list.tail.value).toEqual(fnlVlu);
    expect(list.head.next.next.value).toEqual(scndVlu);
    const newVlu = 'new value';
    list.insertAfter(frstVlu, newVlu);
    expect(list.head.value).toEqual(frstNewVlu);
    expect(list.tail.value).toEqual(fnlVlu);
    expect(list.head.next.next.value).toEqual(newVlu);
  });

  it ('kthkthFromEnd', () => {
    const list = new LinkedList();
    const frstVlu = 'first value';
    list.append(frstVlu);
    expect(list.head.value).toEqual(frstVlu);
    expect(list.tail).toBeNull();
    const scndVlu = 'second value';
    list.append(scndVlu);
    expect(list.head.value).toEqual(frstVlu);
    expect(list.tail.value).toEqual(scndVlu);
    expect(list.head.next.value).toEqual(scndVlu);
    const fnlVlu = 'final value';
    list.append(fnlVlu);
    // console.log(list);
    expect(list.tail.value).toEqual(fnlVlu);

    expect(list.kthFromEnd(0)).toEqual(fnlVlu);
    expect(list.kthFromEnd(1)).toEqual(scndVlu);
    expect(list.kthFromEnd(2)).toEqual(frstVlu);
    expect(list.kthFromEnd(3)).toBe(false);

  });

    

});