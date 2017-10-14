import getGroupedOperations from '../src/homework-arrays-and-objects.js'

const operations = [{
  "date": "2017-07-31",
  "amount": "5422",
  "links": [{
    "name": "link1",
    "href": "http://google.com",
    "method": "GET"
  }]
}];

describe('get-grouped-operations', function() {
  it('should return correct array', function() {
    expect(getGroupedOperations(operations)).toBe(result);
  });
});


const result = [{
  "2017-07-31": {
    "operations": [{
      "date": "2017-07-31",
      "amount": "5422",
      "links": [{
        "name": "link1",
        "href": "http://google.com",
        "method": "GET"
      }]
    }],
    "links": [{
      "name": "link1",
      "href": "http://google.com",
      "method": "GET"
    }]
  }
}];
