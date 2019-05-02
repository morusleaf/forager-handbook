/**
 * Get parameter by name from URL.
 * @param  {string} paramName
 * @returns {string} Value of this parameter
 * @throws {URIError} paramName must exist
 * reference: {@link https://stackoverflow.com/questions/827368/using-the-get-parameter-of-a-url-in-javascript}
 * @author Jose Basilio
 */
function getQueryVariable(paramName) {
  let query = window.location.search.substring(1);
  let vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    if (pair[0] == paramName) {
      return pair[1];
    }
  }
  throw new URIError('Query name ' + paramName + ' not found');
}

/**
 * Class representing format error of a string.
 * @extends {Error}
 */
class FormatError extends Error {
  /**
   * @param {string} message 
   */
  constructor(message) {
    super(message);
    this.name = "FormatError";
  }
}

function getCategoryByName(categoryName) {
  switch (categoryName) {
    case "skill": return skills; break;
    case "item": return items; break;
    default: throw new ReferenceError(categoryName + " does not match any category");
  }
}

/**
 * Get corresponding record by name like #{item/steel} or #{struct}.
 * @param {string} name
 * @returns record
 * @throws {ReferenceError} name must exist in either category
 * @throws {FormatError} name must follow correct format
 */
function lookupName(name) {
  const namePattern = new RegExp('#{([^}]*)}');
  let matches = namePattern.exec(name);
  if (matches === null) throw new FormatError(name + " should follow format #{...}");
  let st = matches[1];

  const innerPattern = new RegExp('(.*)/(.*)');
  matches = innerPattern.exec(st);
  if (matches === null) { // category name
    return getCategoryByName(st);
  }
  else { // category name + element name
    let categoryName = matches[1];
    let elementName = matches[2];
    let category = getCategoryByName(categoryName);
    if (!(elementName in category)) {
      throw new ReferenceError(elementName + " does not exist in " + categoryName);
    }
    return category[elementName];
  }
}
/**
 * Covert each occurrence like #{item/steel} or #{struct} into href
 * @param  {string} st
 */
function unfoldMacro(st) {
  const pattern = new RegExp('#{[^}]*}');
  let head = "";
  let tail = st;
  let matches = pattern.exec(tail);
  while (matches !== null) {
    let object = lookupName(matches[0]);
    let matchIndex = matches.index;
    // update head, i.e., append everything before matched part + unfolded macro
    head += tail.substring(0, matchIndex) + object.href();
    // update tail, i.e., everything after the matched part
    let matchLength = matches[0].length;
    tail = tail.substring(matchIndex + matchLength);
    matches = pattern.exec(tail);
  }
  return head + tail;
}
