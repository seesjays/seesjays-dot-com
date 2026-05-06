---
layout: "../../layouts/BlogPost.astro"
title: "Reverse A Stack"
subtext: "Reverse A Stack written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>
#include <stack>
#include <stdlib.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    std::stack<int> stackA;
    std::stack<int> stackB;

    for (int x : values)
    {
        stackA.push(x);
    }

    while (!stackA.empty())
    {
        stackB.push(stackA.top());
        stackA.pop();
    }

    std::cout << "B:" << std::endl;
    while (!stackB.empty())
    {
        std::cout << stackB.top() << " ";
        stackB.pop();
    }

    return 0;
}
```
