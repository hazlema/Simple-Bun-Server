import { $ } from "bun";

let html = await (await fetch("https://google.com/")).text();

console.log(html);
