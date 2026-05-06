---
layout: "../../layouts/BlogPost.astro"
title: "Merge Sort (with split diagram)"
subtext: "Merge Sort (with split diagram) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>

/*




*/

using namespace std;

class MergeSort
{
public:
    MergeSort(vector<int> x) : elements(x) {}
    void merge_sort(int left, int right);
    void merge(int left, int middle, int right);

    vector<int> elements;
};

void MergeSort::merge_sort(int left, int right)
{
    if (left < right)
    {
        int mid = left + (right - left) / 2;

        merge_sort(left, mid);
        merge_sort(mid + 1, right);
        merge(left, mid, right);
    }
}

void MergeSort::merge(int left, int middle, int right)
{
    int leftSubArrSize = middle - left + 1;
    int rightSubArrSize = right - middle;

    int leftSub[leftSubArrSize];
    int rightSub[rightSubArrSize];

    for (int i = 0; i < leftSubArrSize; i++)
    {
        leftSub[i] = elements[left + i];
    }

    for (int i = 0; i < rightSubArrSize; i++)
    {
        rightSub[i] = elements[middle + 1 + i];
    }

    int mainArrInd = left;
    int lArrInd = 0;
    int rArrInd = 0;

    while (lArrInd < leftSubArrSize && rArrInd < rightSubArrSize)
    {
        if (leftSub[lArrInd] < rightSub[rArrInd])
        {
            elements[mainArrInd] = leftSub[lArrInd];
            lArrInd++;
        }
        else
        {
            elements[mainArrInd] = rightSub[rArrInd];
            rArrInd++;
        }
        mainArrInd++;
    }

    while (lArrInd < leftSubArrSize)
    {
        elements[mainArrInd] = leftSub[lArrInd];
        lArrInd++;
        mainArrInd++;
    }

    while (rArrInd < rightSubArrSize)
    {
        elements[mainArrInd] = rightSub[rArrInd];
        rArrInd++;
        mainArrInd++;
    }
}

int main(int argc, char *argv[])
{
    MergeSort sorter(nummies);

    cout << "Before Sort: [ " << endl;
    for (int i : nummies)
    {
        cout << i << ' ';
    }
    cout << "]" << endl
         << endl;

    sorter.merge_sort(0, nummies.size() - 1);

    cout << "After Sort: [ " << endl;
    for (int i : sorter.elements)
    {
        cout << i << ' ';
    }
    cout << "]";
}

```
