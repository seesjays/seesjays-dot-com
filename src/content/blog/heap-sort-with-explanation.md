---
layout: "../../layouts/BlogPost.astro"
title: "Heap Sort (With Explanation)"
subtext: "Heap Sort (With Explanation) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>

/*
max-heapify to get the biggest element at the front of array
swap element with element at rear (index decreasing)
max-heapify on all other elements
repeat
*/

using namespace std;

class Heap
{
public:
    Heap(vector<int> numbers) : elements(numbers){};
    void insert(int value);
    void heapsort();
    bool isEmpty();

    vector<int> elements;

private:
    void heapify(int index, int size);
};

void Heap::insert(int value)
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
            heapify(i, elements.size());
        }
    }
}

bool Heap::isEmpty()
{
    return (elements.size() == 0);
}

/*
and swaps A with the smallest node in the set (min heap).
Then if a swap is made,
heapify is called on the new subtree A is a part of to make sure
A doesn't violate the heap property in its subtree
*/
void Heap::heapify(int index, int size)
{
    int largestPos = index;
    int leftNodePos = index * 2 + 1;
    int rightNodePos = index * 2 + 2;

    if (leftNodePos < size && elements[leftNodePos] > elements[largestPos])
    {
        largestPos = leftNodePos;
    }
    if (rightNodePos < size && elements[rightNodePos] > elements[largestPos])
    {
        largestPos = rightNodePos;
    }

    if (largestPos != index)
    {
        int temp = elements[index];
        elements[index] = elements[largestPos];
        elements[largestPos] = temp;

        heapify(largestPos, size);
    }
}

void Heap::heapsort()
{
    for (int i = (elements.size() / 2) - 1; i >= 0; i--)
    {
        heapify(i, elements.size());
    }

    for (int i = elements.size() - 1; i >= 0; i--)
    {
        int temp = elements[0];
        elements[0] = elements[i];
        elements[i] = temp;

        heapify(0, i);
    }
}

int main(int argc, char *argv[])
{
    Heap sorter(nummies);

    cout << "Before Sort: [ " << endl;
    for (int i : nummies)
    {
        cout << i << ' ';
    }
    cout << "]" << endl
         << endl;

    sorter.heapsort();

    cout << "After Sort: [ " << endl;
    for (int i : sorter.elements)
    {
        cout << i << ' ';
    }
    cout << "]";
}

```
