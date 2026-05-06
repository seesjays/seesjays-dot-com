---
layout: "../../layouts/BlogPost.astro"
title: "Priority Queue (Max Heap Implementation)"
subtext: "Priority Queue (Max Heap Implementation) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>



class MaxHeap
{
public:
    void enqueue(int value);
    int dequeue();
    int peek();
    bool isEmpty();

private:
    void heapify(int index);
    std::vector<int> elements;
};

void MaxHeap::enqueue(int value)
{
    if (elements.size() == 0)
    {
        elements.push_back(value);
    }
    else
    {
        elements.push_back(value);

        for (int i = (elements.size() / 2) - 1; i >= 0; i--)
        {
            heapify(i);
        }
    }
}

int MaxHeap::dequeue()
{
    int toBeReturned = elements[0];
    elements[0] = elements[elements.size() - 1];
    elements.pop_back();

    for (int i = (elements.size() / 2) - 1; i >= 0; i--)
    {
        heapify(i);
    }

    return toBeReturned;
}

int MaxHeap::peek()
{
    return elements[0];
}

bool MaxHeap::isEmpty()
{
    return (elements.size() == 0);
}

/*
and swaps A with the largest node in the set (max heap).
Then if a swap is made,
heapify is called on the new subtree A is a part of to make sure
A doesn't violate the heap property in its subtree
*/
void MaxHeap::heapify(int index)
{
    int largestPos = index;
    int leftNodePos = index * 2 + 1;
    int rightNodePos = index * 2 + 2;

    if (leftNodePos < elements.size() && elements[leftNodePos] > elements[largestPos])
    {
        largestPos = leftNodePos;
    }
    if (rightNodePos < elements.size() && elements[rightNodePos] > elements[largestPos])
    {
        largestPos = rightNodePos;
    }

    if (largestPos != index)
    {
        int temp = elements[index];
        elements[index] = elements[largestPos];
        elements[largestPos] = temp;

        heapify(largestPos);
    }
}

int main(int argc, char *argv[])
{
    MaxHeap pq;

    for (int x : testVals)
    {
        pq.enqueue(x);
    }

    std::cout << "Priority Queue (Max Heap) Implementation Test" << std::endl;
    while (!pq.isEmpty())
    {
        std::cout << pq.dequeue() << std::endl;
    }
}
```
