---
layout: "../../layouts/BlogPost.astro"
title: "Merge Sort (Merging)"
subtext: "Merge Sort (Merging) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp

class MergeSort
{
public:
    MergeSort(int *elems, int arrSize)
    {
        elements = elems;
        size = arrSize;
    }

    void merge(int left, int mid, int right)
    {
        int leftArraySize = mid - left + 1;
        int rightArraySize = right - mid;

        int leftArray[leftArraySize];
        int rightArray[rightArraySize];

        for (int i = 0; i < leftArraySize; i++)
        {
            leftArray[i] = elements[left + i];
        }
        for (int i = 0; i < rightArraySize; i++)
        {
            rightArray[i] = elements[mid + 1 + i];
        }

        int leftArrIndex = 0;
        int rightArrIndex = 0;
        int cmpArrIndex = left;

        while (leftArrIndex < leftArraySize && rightArrIndex < rightArraySize)
        {
            if (leftArray[leftArrIndex] <= rightArray[rightArrIndex])
            {
                elements[cmpArrIndex] = leftArray[leftArrIndex];
                leftArrIndex++;
            }
            else
            {
                elements[cmpArrIndex] = rightArray[rightArrIndex];
                rightArrIndex++;
            }
            cmpArrIndex++;
        }

        while (leftArrIndex < leftArraySize)
        {
            elements[cmpArrIndex] = leftArray[leftArrIndex];
            cmpArrIndex++;
            leftArrIndex++;
        }
        while (rightArrIndex < rightArraySize)
        {
            elements[cmpArrIndex] = rightArray[rightArrIndex];
            cmpArrIndex++;
            rightArrIndex++;
        }
    }

    void mergeSort(int leftInd, int rightInd)
    {
        if (leftInd < rightInd)
        {
            int middleInd = leftInd + (rightInd - leftInd) / 2;

            mergeSort(leftInd, middleInd);
            mergeSort(middleInd + 1, rightInd);
            merge(leftInd, middleInd, rightInd);
        }
    }

    int size;
    int *elements;
};

int main()
{

    MergeSort splits(elements, sizeof(elements) / sizeof(int));
    splits.mergeSort(0, sizeof(elements) / sizeof(int));

    for (int i = 0; i < sizeof(elements) / sizeof(int); i++)
    {
        std::cout << elements[i] << " ";
    }
}
```
