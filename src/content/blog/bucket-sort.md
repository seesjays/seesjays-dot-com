---
layout: "../../layouts/BlogPost.astro"
title: "Bucket Sort"
subtext: "Bucket Sort written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>

/*
Bucket Sort
*/

using namespace std;

class BucketSort
{
public:
    BucketSort(vector<int> x) : elements(x) {}
    void bucketSort();

    vector<int> elements;
};

void BucketSort::bucketSort()
{
    vector<int> b[elements.size()];

    for (int i = 0; i < elements.size(); i++)
    {
        b[bi].push_back(elements[i]);
    }

    for (int i = 0; i < elements.size(); i++)
        sort(b[i].begin(), b[i].end());

    int index = 0;
    for (int i = 0; i < elements.size(); i++)
        for (int j = 0; j < b[i].size(); j++)
            elements[index++] = b[i][j];
}

int main(int argc, char *argv[])
{
    BucketSort sorter(nummies);

    cout << "Before Sort: [ " << endl;
    for (int i : nummies)
    {
        cout << i << ' ';
    }
    cout << "]" << endl
         << endl;

    sorter.bucketSort();

    cout << "After Sort: [ " << endl;
    for (int i : sorter.elements)
    {
        cout << i << ' ';
    }
    cout << "]";
}

```
