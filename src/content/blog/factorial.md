---
layout: "../../layouts/BlogPost.astro"
title: "Factorial"
subtext: "Factorial written in C++"
sector: extras
date: "2022-01-01"
---

```cpp

int factorial(int num)
{
    if (num == 1)
    {
        return 1;
    }
    else
    {
        return num * factorial(num - 1);
    }
}

int main()
{
    std::cout << factorial(10) << '\n';
}
```
