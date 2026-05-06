---
layout: "../../layouts/BlogPost.astro"
title: "Simple Stack"
subtext: "Simple Stack written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>

using namespace std;

struct Node
{
    Node(int val) : value(val){};
    int value;
    Node *next = nullptr;
};

struct Stack
{
    void push(int value);
    bool isEmpty();
    int pop();

    Node *head;
};

void Stack::push(int value)
{
    if (head == nullptr)
    {
        head = new Node(value);
    }
    else
    {
        Node *newHead = new Node(value);
        newHead->next = head;
        head = newHead;
    }
}

int Stack::pop()
{
    int toBeReturned = head->value;
    Node *oldHead = head;
    head = head->next;

    delete oldHead;
    oldHead = nullptr;

    return toBeReturned;
}

bool Stack::isEmpty()
{
    return (head == nullptr);
}

int main(int argc, char *argv[])
{

    Stack stk;

    for (int x : nummies)
    {
        stk.push(x);
    }

    while (!stk.isEmpty())
    {
        cout << stk.pop() << endl;
    }
}

```
