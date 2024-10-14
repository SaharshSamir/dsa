//Interface for MinHeap
//1. Create a heap from a given array (Heapify).
//2. Push to heap 
//3. Get max element
//4. Delete from heap
//5. Peek heap


export default class MaxHeap {
  public data: number[];

  constructor(data: number[] = []){
    this.heapify(data);
  } 

  private swap(data: number[], i: number, j: number){
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
  }

  private isValidHeap(data: number[], i: number): boolean{
    let largest = data[i];
    let left = 2*i + 1;
    let right = 2*i + 2;

    if(left >= data.length && right >= data.length) return true; 

    if(data[left] > largest) {
      return false;
    }

    if(data[right] > largest) {
      return false;
    }

    return true;
  }

  private findLargest(data: number[], i: number) {
    let largest = i;
    const left = 2*i + 1;
    const right = 2*i + 2;

    if(left < data.length && data[left] > data[largest]){
      largest = left;
    }
    if(right < data.length && data[right] > data[largest]){
      largest = right;
    }

    return largest;
  }

  private heapify_convert(data: number[], i: number): number[] {
    if(i < 0) return data;

    let largest = this.findLargest(data, i);

    if(largest !== i){
      this.swap(data, i, largest);
      return this.heapify_convert(data, largest);
    } 

    return this.heapify_convert(data, i-1);
  }

  private repairHeap(data: number[], root: number): number {
    if(this.isValidHeap(data, root)) return root;
  
    let largest = this.findLargest(data, root);
    //swap the root with the largest of the children
    const temp = data[root];
    data[root] = data[largest];
    data[largest] = temp;

    return this.repairHeap(data, largest);

  }

  public heapify(data: number[]): number[]{
    const lastInternalNode = Math.floor(data.length/2) - 1;
    this.data = this.heapify_convert(data, lastInternalNode);
    return this.data;
  }

  public pop(){
    console.log('atleast once', this.data);
    let len = this.data.length;
    const popped = this.data[0];

    this.data[0] = this.data[len - 1];
    this.data.length = len - 1;
    
    this.repairHeap(this.data, 0);


    return popped;
  }

  //since this is a MinHeap, this will sort the array in descending order
  public sort(data: number[] = this.data): number[]{
    data = this.heapify(data);
    for(let i=0; i<data.length - i; i++){
    }
    return this.data;
  }
}

function main() {
  const arr = [6, 2, 11, 3, 8, 4, 0];
  const maxHeap = new MaxHeap(arr);

  console.log('MaxHeapified array: ', maxHeap.data);

}

main();
