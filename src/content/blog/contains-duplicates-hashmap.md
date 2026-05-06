---
layout: "../../layouts/BlogPost.astro"
title: "Contains Duplicates (Hashmap)"
subtext: "Contains Duplicates (Hashmap) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>
#include <map>
#include <string>
#include <sstream>
#include <algorithm>
#include <queue>

bool containsDuplicates(std::vector<int> numbers)
{
    std::map<int, bool> entries;
    for (int x : numbers)
    {
        if (entries[x])
            return true;
        entries[x] = true;
    }
    return false;
}

int main(int argc, char *argv[])
{
    if (containsDuplicates(nums))
    {
        std::cout << "Found Dupe" << std::endl;
    }
    else
    {
        std::cout << "No Dupe" << std::endl;
    }

    if (containsDuplicates(nuNums))
    {
        std::cout << "Found Dupe" << std::endl;
    }
    else
    {
        std::cout << "No Dupe" << std::endl;
    }
}
```
