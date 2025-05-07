export default function bubble_sort(arr: number[]): void {
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length-1-i; j++){
      if (arr[j] > arr[j+1]) swap(arr, j, j+1)
    }
  }

}

function swap(arr: number[], i: number, j:number){
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}
