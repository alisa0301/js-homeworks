
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
      if (!linkIsExist(obj[operation.date].links, link))
        obj[operation.date].links.push(link)
    });
    return obj;
  }, {});
}

function linkIsExist(previousLinksArray, linkForCompare) {
  const hrefArray = previousLinksArray
    .slice()
    .map(link => link.href);
  const currentHref = linkForCompare.href;
  if (hrefArray.indexOf(currentHref) === -1) return false;
  else return true;
}
