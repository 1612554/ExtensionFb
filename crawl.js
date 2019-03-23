function parseHTML(html) {
    var t = document.createElement('template');
    t.innerHTML = html;
    return t.content.cloneNode(true);
}

function xml2string(node) {
    if (typeof(XMLSerializer) !== 'undefined') {
       var serializer = new XMLSerializer();
       return serializer.serializeToString(node);
    } else if (node.xml) {
       return node.xml;
    }
 }
 function findMatches(regex, str, matches = []) {
    const res = regex.exec(str)
    res && matches.push(res) && findMatches(regex, str, matches)
    return matches
 }

 function crawl() {
    var str = xml2string(parseHTML(document.documentElement.innerHTML));

    var list=findMatches(/\d{8,16}-2/g, str);
    let result = list.map(list => list[0].replace('-2',''));
    //console.log(result);

    return result;
 }

