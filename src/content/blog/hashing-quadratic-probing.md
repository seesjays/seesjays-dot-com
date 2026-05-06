---
layout: "../../layouts/BlogPost.astro"
title: "Hashing (Quadratic Probing)"
subtext: "Hashing (Quadratic Probing) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>
#include <map>
#include <string>
#include <sstream>
#include <algorithm>

struct HashTable
{
    HashTable(int size)
    {
        table = std::vector<int>(size, -1);
    }
    void insert(int value)
    {
        int key = value % table.size();
        int spacer = 0;
        while (table[key] != -1 && spacer < table.size())
        {
            key = ((value % table.size()) + (spacer * spacer)) % table.size();
            spacer++;
        }

        table[key] = value;
    }

    std::vector<int> table;
};

int main(int argc, char *argv[])
{
    HashTable tb(7);
    std::vector<int> nums = {76, 40, 48, 5, 55};

    for (int x : nums)
        tb.insert(x);
    for (int x : tb.table)
        std::cout << x << " ";
    return 0;
}
```
