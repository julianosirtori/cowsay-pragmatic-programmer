#!/usr/bin/env node

import { say } from "cowsay";

import { tips } from "@/data/data.json";
import { getRandomInt } from "./utils/math";

export function getRandomTip() {
	return tips[getRandomInt(tips.length)];
}

export function cowsay(text: string) {
	const output = say({ text });
	return output;
}

export function printOnConsoleLog(){
	const output = cowsay(getRandomTip())	
	console.log(output);	
}
 
printOnConsoleLog()