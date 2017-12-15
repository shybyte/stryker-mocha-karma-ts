import {assert} from "chai";
import {addNatural, hello} from "../src/code";
import {subNatural} from "../src/sub";

describe('addNatural', function () {
  it('add 1 + 2', function () {
    assert.equal(addNatural(1, 2), 3);
  });

  it('add negative numbers', function () {
    assert.throws(function () {
      addNatural(-1, -1);
    })
  });
});

describe('hello', function () {
  it('can be executed', function () {
    assert.isString(hello('Yeahh'));
  });
});

describe('subNatural', function () {
  it('sub 0 - 0', function () {
    assert.equal(subNatural(0, 0), 0);
  });
});

