#!/usr/bin/env node

import { cowsay } from "cowsayjs";
import { tips } from "@/data.json";

export function getRandomIndex() {
  return Math.floor(Math.random() * tips.length);
}

export function cowWithRandomTip(){
  const index = getRandomIndex()  
  const tip = `${index + 1}. ${tips[index]}`
  return cowsay(tip)  
}

export function main(){
  console.log(cowWithRandomTip());
}

main()

