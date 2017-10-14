export default function getGroupedOperations(operations) {
  const arr = operations
    .slice()
    .map(convertOperationsToItem)
    .sort(compareObjects);
  let i = 1;
  while (arr[i] !== undefined) {
    if (isEqualDates(arr[i], arr[i - 1])) {
      addToDay(arr[i - 1], arr[i]);
      arr.splice(i, 1);
    } else i++;
  }
  return arr;
}


function isEqualDates(firstItem, secondItem) {
  if (Object.keys(firstItem)[0] === Object.keys(secondItem)[0]) {
    return true;
  } else return false;
}

function convertOperationsToItem(object) {
  let key = object.date;
  let item = {};
  item[key] = {
    operations: [],
    links: []
  };
  item[key].operations.push(object);
  object.links.forEach(link => {
    item[key].links.push(link);
  });
  return item;
}


function addToDay(previous, current) {
  currentItem = current[Object.keys(current)[0]];
  previousItem = previous[Object.keys(previous)[0]];
  currentItem.operations.forEach(operation => {
    previousItem.operations.push(operation);
  });
  currentItem.links.forEach(link => {
    if (!linkIsExist(previousItem.links, link))
      previousItem.links.push(link)
  });
}

function linkIsExist(previousLinksArray, linkForCompare) {
  const hrefArray = previousLinksArray
    .slice()
    .map(link => link.href);
  const currentHref = linkForCompare.href;
  if (hrefArray.indexOf(currentHref) === -1) return false;
  else return true;
}

function compareObjects(firstObj, secondObj) {
  return compareDates(Object.keys(firstObj)[0], Object.keys(secondObj)[0]);
}

function compareDates(firstDate, secondDate) {
  return new Date(secondDate) - new Date(firstDate);
}
