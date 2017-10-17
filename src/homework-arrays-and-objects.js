
export default function getGroupedOperations(operations) {
return operations
  .reduce(function(obj, operation) {
    if (obj[operation.date] === undefined) {
      obj[operation.date] = {
        operations: [],
        links: []
      };
    }
    obj[operation.date].operations.push(operation);
    operation.links.forEach(link => {
      if (!isLinkExists(obj[operation.date].links, link))
        obj[operation.date].links.push(link)
    });
    return obj;
  }, {});
}

function isLinkExists(array, linkToCompare) {
  return !!array
    .find((link) => (link.href === linkToCompare.href))
}
