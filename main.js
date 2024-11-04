import * as fs from "node:fs"

const markdownFilePath = "/home/aneto/TEMP/markdown listing testing/SubFolder01/wikilinks-test.md"
const content = fs.readFileSync(markdownFilePath, "utf8")

function getWikiLinksInFile(content) {
  const regex = new RegExp('\\[\\[\\s*([^\\|\\]]+)\\s*(?:\\|[^\\]]+)?\\]\\]', 'g');
  const wikiLinks = content.match(regex);
  const wikiLinksWithoutAliasses = wikiLinks.map((wikiLink) => {
    if (wikiLink.includes("|")) {
      wikiLink = wikiLink.split("|")[0] + "]]"
      return wikiLink
    } else {
      return wikiLink
    }
  })
  return wikiLinksWithoutAliasses
}

console.log(getWikiLinksInFile(content))
