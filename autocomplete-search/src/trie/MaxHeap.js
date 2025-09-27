export class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(wordObj) {
    this.heap.push(wordObj);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];
      if (element.frequency <= parent.frequency) break;
      this.heap[parentIdx] = element;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown(0);
    }
    return max;
  }

  sinkDown(idx) {
    const length = this.heap.length;
    const element = this.heap[idx];
    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swap = null;

      if (leftIdx < length && this.heap[leftIdx].frequency > element.frequency) swap = leftIdx;
      if (rightIdx < length && this.heap[rightIdx].frequency > (swap === null ? element.frequency : this.heap[leftIdx].frequency)) swap = rightIdx;
      if (swap === null) break;

      this.heap[idx] = this.heap[swap];
      this.heap[swap] = element;
      idx = swap;
    }
  }

  topK(k) {
    return this.heap
      .sort((a, b) => b.frequency - a.frequency)
      .slice(0, k)
      .map((obj) => obj.word);
  }
}
