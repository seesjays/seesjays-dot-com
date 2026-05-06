---
layout: "../../layouts/BlogPost.astro"
title: "Merge Sort (Splitting)"
subtext: "Merge Sort (Splitting) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp


class Splitter
{
public:
    Splitter(int *elems, int arrSize)
    {
        elements = elems;
        size = arrSize;
    }
    void testSplit()
    {
        split(0, size - 1, 0);
    }

    void split(int leftInd, int rightInd, int level)
    {
        if (leftInd < rightInd)
        {
            int middleInd = leftInd + (rightInd - leftInd) / 2;

            std::cout << "LEVEL " << level << " L: " << leftInd << " R: " << rightInd << " M: " << middleInd << std::endl;

            std::cout << "LEVEL " << level << " ALL elements: " << std::endl;
            for (int i = leftInd; i <= rightInd; i++)
            {
                std::cout << elements[i] << " ";
            }
            std::cout << std::endl;

            std::cout << "level " << level << " left elements: " << std::endl;
            for (int i = leftInd; i <= middleInd; i++)
            {
                std::cout << elements[i] << " ";
            }
            std::cout << std::endl;
            std::cout << "level " << level << " right elements: " << std::endl;
            for (int i = middleInd + 1; i <= rightInd; i++)
            {
                std::cout << elements[i] << " ";
            }
            std::cout << std::endl;
            std::cout << std::endl;

            split(leftInd, middleInd, level + 1);
            split(middleInd + 1, rightInd, level + 1);
        }
    }

    int size;
    int *elements;
};

int main()
{

    Splitter splits(elements, sizeof(elements) / sizeof(int));
    splits.testSplit();
}
```
