// Recursive quick sort function
// Pre: Partition using a mipdoint pivot
// Recurse: quicksort from lo to pivot inclusive
//          quicksort from pivot+1 to hi inclusive
// Post: None

      
function qs(arr: number[], lo: number, hi: number): void{
  if(lo == hi){
    return 
  }

  let leftIndex = lo;
  let rightIndex = hi;

  // Do partitioning on arr within [lo, hi]
  const p = Math.floor(leftIndex + (rightIndex-leftIndex)/2);
  const pivot = arr[p]
  // console.log(`Pivot: ${pivot}.`)
  // lo or high can get as high as p
  while(true){
    const lowCanBeSwapped = arr[leftIndex] >= pivot
    const hiCanBeSwapped = arr[rightIndex] <= pivot

    // console.log(`arr[lo] = ${arr[lo]}, arr[hi] = ${arr[hi]}.`)


    // Swap low with hi if both can be swapped
    if (lowCanBeSwapped && hiCanBeSwapped){
      arr = swap(arr, leftIndex, rightIndex)
      // Move both pointers towards pivot
      leftIndex += 1
      rightIndex -= 1
    }

    if(!lowCanBeSwapped){
      // Move lo pointer
      leftIndex += 1
    }

    if(!hiCanBeSwapped){
      rightIndex -= 1
    }

    if (leftIndex > p || rightIndex < p){
      // console.log("Breaking")
      break
    }
  }

  // Call partition on the left side
  qs(arr, lo, p)
  qs(arr, p+1, hi)

}

function swap(arr: number[], src_idx: number, dst_idx: number): number[]{
  console.log(`Swapping ${arr[src_idx]} with ${arr[dst_idx]}.`)
  const tmp = arr[src_idx]
  arr[src_idx] = arr[dst_idx]
  arr[dst_idx] = tmp
  return arr
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1)
}
