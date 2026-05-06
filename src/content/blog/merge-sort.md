---
layout: "../../layouts/BlogPost.astro"
title: "Merge Sort"
subtext: "Merge Sort written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>
#include <algorithm>
#include <stdlib.h>
#include <stdlib.h>


class MergeSort
{
public:
    MergeSort(std::vector<int> x);
    std::vector<int> mergesort();
    std::vector<int> mergesort_helper();

private:
    std::vector<int> elements;
};

MergeSort::MergeSort(std::vector<int> x)
{
    elements = x;
}

std::vector<int> MergeSort::mergesort()
{
    int selectionIndex;
    int shiftedValue;
    for (int i = 1; i < elements.size(); i++)
    {
        selectionIndex = i;
        shiftedValue = elements[i];
        while (selectionIndex > 0 && shiftedValue < elements[selectionIndex - 1])
        {
            elements[selectionIndex] = elements[selectionIndex - 1];
            selectionIndex--;
        }

        elements[selectionIndex] = shiftedValue;
    }

    return elements;
}

std::vector<int> MergeSort::mergesort_helper()
{
    int selectionIndex;
    int shiftedValue;
    for (int i = 1; i < elements.size(); i++)
    {
        selectionIndex = i;
        shiftedValue = elements[i];
        while (selectionIndex > 0 && shiftedValue < elements[selectionIndex - 1])
        {
            elements[selectionIndex] = elements[selectionIndex - 1];
            selectionIndex--;
        }

        elements[selectionIndex] = shiftedValue;
    }

    return elements;
}

class RandomGenerator
{
public:
    RandomGenerator(int seed = time(NULL));
    int GenerateInclusive(int high);
    int GenerateBetweenInclusive(int low, int high);
};

RandomGenerator::RandomGenerator(int seed)
{
    srand(seed);
}

int RandomGenerator::GenerateInclusive(int high)
{
    return rand() % high + 1;
}
int RandomGenerator::GenerateBetweenInclusive(int low, int high)
{
    return low + rand() % (high - low + 1);
}

int main(int argc, char *argv[])
{
    RandomGenerator jenny;
    std::vector<int> numbers;

    std::cout << "Merge Sort Test" << std::endl;

    int num;

    std::cout << "[ ";
    for (int i = 0; i < 100; i++)
    {
        num = jenny.GenerateInclusive(100);
        numbers.push_back(num);
        std::cout << num << " ";
    }
    std::cout << "]" << std::endl;

    MergeSort sorter(numbers);
    numbers = sorter.mergesort();

    std::cout << "Sorted: " << std::endl
              << "[ ";
    for (int i = 0; i < 100; i++)
    {
        std::cout << numbers[i] << " ";
    }
    std::cout << "]" << std::endl;

    if (std::is_sorted(numbers.begin(), numbers.end()))
    {
        std::cout << "SUCCESSFUL SORT!" << std::endl;
    }

    return 0;
}
```
