---
layout: "../../layouts/BlogPost.astro"
title: "Selection Sort"
subtext: "Selection Sort written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>


/*
int temp = elements[i + 1];
elements[i + 1] = elements[i];
elements[i] = temp;
unChanged = false;
*/
using namespace std;

class SelectionSort
{
public:
    SelectionSort(vector<int> x) : elements(x) {}
    vector<int> sort();

private:
    vector<int> elements;
};

vector<int> SelectionSort::sort()
{
    for (int i = 0; i < elements.size() - 1; i++)
    {
        int smallestInd = i;

        for (int j = i + 1; j < elements.size(); j++)
        {
            if (elements[j] < elements[smallestInd])
            {
                smallestInd = j;
            }
        }

        if (smallestInd != i)
        {
            int temp = elements[i];
            elements[i] = elements[smallestInd];
            elements[smallestInd] = temp;
        }
    }

    return elements;
}

int main(int argc, char *argv[])
{
    SelectionSort sorter(nummies);

    cout << "Before Sort: [ " << endl;
    for (int i : nummies)
    {
        cout << i << ' ';
    }
    cout << "]" << endl
         << endl;

    nummies = sorter.sort();

    cout << "After Sort: [ " << endl;
    for (int i : nummies)
    {
        cout << i << ' ';
    }
    cout << "]";
}

```
