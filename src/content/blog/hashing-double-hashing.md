---
layout: "../../layouts/BlogPost.astro"
title: "Hashing (Double Hashing)"
subtext: "Hashing (Double Hashing) written in C++"
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
    HashTable(int size, int hashPrime)
    {
        table = std::vector<int>(size, -1);
        this->hashPrime = hashPrime;
    }

    int hashPrime;

    int hash1(int key)
    {
        return key % table.size();
    }

    int hash2(int key)
    {
        return hashPrime - (key % hashPrime);
    }

    void insert(int value)
    {
        for (int i = 0; i < table.size(); i++)
        {
            int key = (hash1(value) + (i * hash2(value))) % table.size();
            if (table[key] == -1)
            {
                table[key] = value;
                break;
            }
        }
    }

    std::vector<int> table;
};

int main(int argc, char *argv[])
{
    HashTable tb(10, 7);

    for (int x : nums)
        tb.insert(x);
    for (int x : tb.table)
        std::cout << x << " ";
    return 0;
}
```
