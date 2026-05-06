---
layout: "../../layouts/BlogPost.astro"
title: "Stack (Array Implementation)"
subtext: "Stack (Array Implementation) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <string>
#include <vector>


class Stack
{
public:
    Stack(int maxSize);
    void push(int value);
    int pop();
    int top();
    bool isEmpty();
    bool isFull();

private:
    int *values;
    int maxSize;
    int cPos = -1;
};

Stack::Stack(int maxSize)
{
    values = new int[maxSize];
    maxSize = maxSize;
}

void Stack::push(int value)
{
    cPos++;
    values[cPos] = value;
};

int Stack::pop()
{
    int outVal = values[cPos];
    cPos--;
    return outVal;
};

int Stack::top()
{
    return values[cPos];
};

bool Stack::isEmpty()
{
    return (cPos == -1);
};

bool Stack::isFull()
{
    return (cPos == (maxSize - 1));
};

int main(int argc, char *argv[])
{
    Stack test(5);

    for (int x : testVec)
    {
        test.push(x);
    }

    std::cout << "Stack (Array Implementation) Test" << std::endl;
    while (!test.isEmpty())
    {
        std::cout << test.pop() << std::endl;
    }

    return 0;
}
```
