import {assert} from "chai";
import {add, hello} from "../src/code";

describe('add', function () {
  it('add 1 + 2', function () {
    assert.equal(add(1, 2), 3);
  });

  // it('add null and null', function () {
  //   assert.throws(function () {
  //     add(null, undefined)
  //   })
  // });

  // it('add 1 and null', function () {
  //   assert.throws(function () {
  //     add(1, undefined)
  //   })
  // });

});

describe('hello', function () {
  it('can be executed', function () {
    assert.isString(hello('Yeahh'));
  });
});


