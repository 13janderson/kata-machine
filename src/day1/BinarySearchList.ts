export default function bs_list(haystack: number[], needle: number): boolean {
  var lo = 0;
  var hi = haystack.length;

  do{
    var m = Math.floor(lo + (hi-lo) /2);
    var v = haystack[m];
    if (v == needle){
      return true
    }else if (v < needle){
      lo = m + 1;
    }else{
      hi = m;
    }
  }while(lo < hi);

  return false;

}

