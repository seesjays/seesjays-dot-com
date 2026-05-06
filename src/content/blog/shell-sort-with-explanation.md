---
layout: "../../layouts/BlogPost.astro"
title: "Shell Sort (With Explanation)"
subtext: "Shell Sort (With Explanation) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>

/*
ShellSort operates by running insertion sort on differently sized subarrays

n / 2
n / 4
n / 8
n / 16
*/

using namespace std;

class ShellSort
{
public:
    ShellSort(vector<int> x) : elements(x) {}
    void shellSort();

    vector<int> elements;
};

void ShellSort::shellSort()
{
    for (int interval = elements.size() / 2; interval > 0; interval /= 2)
    {
        for (int i = interval; i < elements.size(); i++)
        {
            int temp = elements[i];

            int j;
            for (j = i; j >= interval && elements[j - interval] > temp; j -= interval)
            {
                elements[j] = elements[j - interval];
            }

            elements[j] = temp;
        }
    }

}

int main(int argc, char *argv[])
{
    ShellSort sorter(nummies);

    cout << "Before Sort: [ " << endl;
    for (int i : nummies)
    {
        cout << i << ' ';
    }
    cout << "]" << endl
         << endl;

    sorter.shellSort();

    cout << "After Sort: [ " << endl;
    for (int i : sorter.elements)
    {
        cout << i << ' ';
    }
    cout << "]";
}

```
