---
layout: "../../layouts/BlogPost.astro"
title: "Priority Queue (Min Heap Implementation)"
subtext: "Priority Queue (Min Heap Implementation) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>



class MinHeap
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

void MinHeap::enqueue(int value)
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

int MinHeap::dequeue()
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

int MinHeap::peek()
{
    return elements[0];
}

bool MinHeap::isEmpty()
{
    return (elements.size() == 0);
}

/*
and swaps A with the smallest node in the set (min heap).
Then if a swap is made,
heapify is called on the new subtree A is a part of to make sure
A doesn't violate the heap property in its subtree
*/
void MinHeap::heapify(int index)
{
    int smallestPos = index;
    int leftNodePos = index * 2 + 1;
    int rightNodePos = index * 2 + 2;

    if (leftNodePos < elements.size() && elements[leftNodePos] < elements[smallestPos])
    {
        smallestPos = leftNodePos;
    }
    if (rightNodePos < elements.size() && elements[rightNodePos] < elements[smallestPos])
    {
        smallestPos = rightNodePos;
    }

    if (smallestPos != index)
    {
        int temp = elements[index];
        elements[index] = elements[smallestPos];
        elements[smallestPos] = temp;

        heapify(smallestPos);
    }
}

int main(int argc, char *argv[])
{
    MinHeap pq;

    for (int x : testVals)
    {
        pq.enqueue(x);
    }

    std::cout << "Priority Queue (Min Heap) Implementation Test" << std::endl;
    while (!pq.isEmpty())
    {
        std::cout << pq.dequeue() << std::endl;
    }
}
```
