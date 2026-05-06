---
layout: "../../layouts/BlogPost.astro"
title: "Delete Values in Queue"
subtext: "Delete Values in Queue written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>
#include <queue>
#include <stdlib.h>
#include <stdlib.h>

void deleteOccurencesInQueue(std::queue<int> &q, int value)
{

    int size = q.size();
    int shifts = 0;
    while (shifts < size)
    {
        if (q.front() != value)
        {
            q.push(q.front());
        }

        q.pop();
        shifts++;
    }
}

int main(int argc, char *argv[])
{
    std::vector<int> values = {
        1,
        2,
        4,
        5,
        5,
        5,
        5,
        4,
        5,
        2,
        1,
    };

    std::queue<int> kyuu;

    for (int x : values)
    {
        kyuu.push(x);
    }

    deleteOccurencesInQueue(kyuu, 5);

    while (kyuu.size() > 0)
    {
        std::cout << kyuu.front() << " ";
        kyuu.pop();
    }

    return 0;
}
```
