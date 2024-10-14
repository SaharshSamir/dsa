//Interface for MinHeap
//1. Create a heap from a given array (Heapify).
//2. Push to heap 
//3. Get min element
//4. Delete from heap
//5. Peek heap


export default class MinHeap {
  public data: number[];

  constructor(data: number[] = []){
    this.data = data;
  } 

  private swap(data: number[], i: number, j: number){
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
  }

  private findSmallest(data: number[], i: number) {
    let smallest = i;
    const left = 2*i + 1;
    const right = 2*i + 2;

    if(left < data.length && data[left] < data[smallest]){
      smallest = left;
    }
    if(right < data.length && data[right] < data[smallest]){
      smallest = right;
    }

    return smallest;
  }

  private heapify_convert(data: number[], i: number): number[] {
    if(i < 0) return data;

    let smallest = this.findSmallest(data, i);

    if(smallest !== i){
      this.swap(data, i, smallest);
      return this.heapify_convert(data, smallest);
    } 

    return this.heapify_convert(data, i-1);
  }

  public heapify(data: number[]){
    const lastInternalNode = Math.floor(data.length/2) - 1;
    this.data = this.heapify_convert(data, lastInternalNode);
  }

  //since this is a MinHeap, this will sort the array in descending order
  public sort(){}
}

function main() {
  const arr = [6, 2, 11, 3, 8, 4, 0];
  const minHeap = new MinHeap();

  minHeap.heapify(arr);
  console.log('after heapify: ', minHeap.data);
}

main();
