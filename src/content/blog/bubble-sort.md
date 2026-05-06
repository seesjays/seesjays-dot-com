---
layout: "../../layouts/BlogPost.astro"
title: "Bubble Sort"
subtext: "Bubble Sort written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>

using namespace std;

class BubbleSort
{
public:
    BubbleSort(vector<int> x) : elements(x) {}
    vector<int> sort();

private:
    vector<int> elements;
};

vector<int> BubbleSort::sort()
{
    bool unChanged = false;

    while (!unChanged)
    {
        unChanged = true;
        for (int i = 0; i < elements.size() - 1; i++)
        {
            if (elements[i] > elements[i + 1])
            {
                int temp = elements[i + 1];
                elements[i + 1] = elements[i];
                elements[i] = temp;
                unChanged = false;
            }
        }
    }

    return elements;
}

int main(int argc, char *argv[])
{
    BubbleSort sorter(nummies);

    cout << "bubble sort test" << endl;

    cout << "Before Sort: [ " << endl;
    for (int i : nummies)
    {
        cout << i << ' ';
    }
    cout << "]" << endl << endl;

    nummies = sorter.sort();

    cout << "After Sort: [ " << endl;
    for (int i : nummies)
    {
        cout << i << ' ';
    }
    cout << "]";
}

```
