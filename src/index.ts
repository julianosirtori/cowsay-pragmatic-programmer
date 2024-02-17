#!/usr/bin/env bun

import { printTipOfTheDay } from "@/tips/tipOfTheDay";
import { printRandomTip } from "@/tips/randomTip";

export async function main(){
  if(Bun.argv.includes('-d')){
    printTipOfTheDay()
    return
  }

  printRandomTip()
}

main()

