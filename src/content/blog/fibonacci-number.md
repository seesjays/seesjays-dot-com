---
layout: "../../layouts/BlogPost.astro"
title: "Fibonacci Number"
subtext: "Fibonacci Number written in C++"
sector: extras
date: "2022-01-01"
---

```cpp

int fib(int n)
{
    if (n == 0)
    {
        return 0;
    }
    else if (n == 1)
    {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
}

int main()
{
    std::cout << fib(5) << '\n';
    std::cout << fib(8) << '\n';
    std::cout << fib(9) << '\n';
}
```
