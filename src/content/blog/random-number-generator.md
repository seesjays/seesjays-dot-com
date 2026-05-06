---
layout: "../../layouts/BlogPost.astro"
title: "Random Number Generator"
subtext: "Random Number Generator written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <stdlib.h>
#include <stdlib.h>


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

    std::cout << "Random Number Generator Test" << std::endl;

    for (int i = 0; i < 100; i++)
    {
        std::cout << jenny.GenerateBetweenInclusive(1, 10) << std::endl;
    }

    return 0;
}
```
