---
layout: "../../layouts/BlogPost.astro"
title: "Insertion Sort"
subtext: "Insertion Sort written in C++"
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

class InsertionSort
{
public:
    InsertionSort(vector<int> x) : elements(x) {}
    vector<int> sort();

private:
    vector<int> elements;
};

vector<int> InsertionSort::sort()
{
    for (int i = 0; i < elements.size(); i++)
    {
        int selectionInd = i;
        int data = elements[selectionInd];

        while (selectionInd > 0 && elements[selectionInd - 1] > data)
        {
            elements[selectionInd] = elements[selectionInd - 1];
            selectionInd--;
        }

        elements[selectionInd] = data;
    }

    return elements;
}

int main(int argc, char *argv[])
{
    InsertionSort sorter(nummies);

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
