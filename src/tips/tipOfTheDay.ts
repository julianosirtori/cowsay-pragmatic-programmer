import { cowsay } from "cowsayjs";
import { tips } from "@/tips/data.json";

const path = `${import.meta.dir}/store.json`;

type Store = {
  currentIndexTip: number,
  currentDay: string,
  tip?: string
}

export async function getTipOfTheDay(): Promise<Store>{
  const store = await getStore()
  const currentDay = new Date().toDateString();

  if(store.currentDay !== currentDay){
    store.currentIndexTip++
    if(store.currentIndexTip >= tips.length){
      store.currentIndexTip = 0
    }
    store.currentDay = new Date().toDateString()
  }
  
  store.tip = tips[store.currentIndexTip]
  saveStore(store)

  return store
}

export async function printTipOfTheDay(){
  const store = await getTipOfTheDay()
  const tipWithCow = cowsay(`${store.currentIndexTip + 1}. ${store.tip}`)  
  console.log(tipWithCow)
}

export async function getStore(): Promise<Store>{
  await initializeStore()
  const  file = Bun.file(path);
  const contents = await file.json();
  return contents
}

export async function saveStore(store: Store){
  await Bun.write(path, JSON.stringify(store, null, 2));
}

export async function initializeStore(){
  let file = Bun.file(path);

  if(!(await file.exists())){
    const store: Store = {
      currentDay: new Date().toDateString(),
      currentIndexTip: 0
    }

    await Bun.write(path, JSON.stringify(store));
  }
}