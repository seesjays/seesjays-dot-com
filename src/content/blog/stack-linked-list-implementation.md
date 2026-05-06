---
layout: "../../layouts/BlogPost.astro"
title: "Stack (Linked List Implementation)"
subtext: "Stack (Linked List Implementation) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>

struct Node
{
    Node(int v) : value(v) {}
    Node *next;
    int value;
};

class Stack
{
public:
    void push(int value);
    int pop();
    int peek();
    bool isEmpty();

private:
    int size = 0;
    Node *head = nullptr;
};

void Stack::push(int value)
{
    Node *x = new Node(value);
    if (head == nullptr)
    {
        head = x;
    }
    else
    {
        x->next = head;
        head = x;
    }
    size++;
}

int Stack::pop()
{
    int value = head->value;

    Node *nextHead = head->next;
    delete head;
    head = nextHead;
    size--;

    return value;
}

int Stack::peek()
{
    return head->value;
}

bool Stack::isEmpty()
{
    return (size == 0);
}

int main(int argc, char *argv[])
{
    Stack test;

    for (int x : testVec)
    {
        test.push(x);
    }

    std::cout << "Stack (Linked List) Implementation Test" << std::endl;
    while (!test.isEmpty())
    {
        std::cout << test.pop() << std::endl;
    }

    return 0;
}
```
