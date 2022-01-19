/*
 * Replacer.js by mtripg6666tdr
 * This script replaces script and style tags in html file with jsdelivr url
 */
// @ts-check
const fs = require("fs");
const { exec } = require("child_process");
const htmlPaths = ["./index.html", "./about/index.html", "./works/index.html", "./social/index.html"];

exec("git log -n 1 --pretty=%H", (error,stdout,stderr) => {
  if(error) throw error||stderr;
  const hash = stdout.trim();
  htmlPaths.forEach(path => {
    fs.writeFileSync(path, (function(){
      return fs.readFileSync(path, {encoding:"utf-8"})
        .replace(/(href|src)="(.+?)"/g, (content) => {
          const url = content.match(/(href|src)="(?<url>.+)"/).groups["url"];
          if(!url.endsWith(".js") && !url.endsWith(".css")) return content;
          if(url.startsWith("/"))
            return content.replace(/"(?<url>.+)"/, () => `"https://cdn.jsdelivr.net/gh/mtripg6666tdr/mtripg6666tdr@${hash}${url}"`);
        });
    })(), {encoding:"utf-8"});
  })
});