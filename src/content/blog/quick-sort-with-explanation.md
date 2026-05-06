---
layout: "../../layouts/BlogPost.astro"
title: "Quick Sort (With Explanation)"
subtext: "Quick Sort (With Explanation) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <iostream>
#include <vector>

/*
select far right element for the pivot

within the elements to the left of the pivot, find a element smaller than the pivot value
find an element larger than the pivot value
swap those two until j reaches the pivot
the element after the smallest element on the last sort will be the new position for the pivot
swap the pivot element with that element. The pivot is now at the new pivot index.

quicksort the subarrays before and after the pivot index
 */

using namespace std;

class QuickSort
{
public:
    QuickSort(vector<int> x) : elements(x) {}
    void quick_sort(int left, int right);
    int partition(int left, int right);

    vector<int> elements;
};

void QuickSort::quick_sort(int left, int right)
{
    if (left < right)
    {
        int partitionIndex = partition(left, right);

        quick_sort(left, partitionIndex - 1);
        quick_sort(partitionIndex + 1, right);
    }
}

int QuickSort::partition(int left, int right)
{
    int pivotValue = elements[right];
    int replacementIndex = left - 1;

    for (int larger = left; larger < right; larger++)
    {
        if (elements[larger] <= pivotValue)
        {
            replacementIndex++;

            int temp = elements[larger];
            elements[larger] = elements[replacementIndex];
            elements[replacementIndex] = temp;
        }
    }

    replacementIndex++;

    int temp = elements[right];
    elements[right] = elements[replacementIndex];
    elements[replacementIndex] = temp;

    return replacementIndex;
}

int main(int argc, char *argv[])
{
    QuickSort sorter(nummies);

    cout << "Before Sort: [ " << endl;
    for (int i : nummies)
    {
        cout << i << ' ';
    }
    cout << "]" << endl
         << endl;

    sorter.quick_sort(0, nummies.size() - 1);

    cout << "After Sort: [ " << endl;
    for (int i : sorter.elements)
    {
        cout << i << ' ';
    }
    cout << "]";
}

```
