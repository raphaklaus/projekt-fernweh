export interface Sentence {
  text:string
  categories:Category[]
}

interface Category {
  name:string,
  value:number
}
