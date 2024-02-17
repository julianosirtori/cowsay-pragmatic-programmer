import { cowsay } from "cowsayjs";
import { tips } from "@/tips/data.json";

export function getRandomIndex() {
  return Math.floor(Math.random() * tips.length);
}

export function cowWithRandomTip(){
  const index = getRandomIndex()  
  const tip = `${index + 1}. ${tips[index]}`
  return cowsay(tip)  
}

export function printRandomTip(){
  console.log(cowWithRandomTip())
}