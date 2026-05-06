---
layout: "../../layouts/BlogPost.astro"
title: "Queue (2 Stack Implementation (Enqueue))"
subtext: "Queue (2 Stack Implementation (Enqueue)) written in C++"
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

class Queue
{
public:
    void enqueue(int value);
    int dequeue();
    bool isEmpty();

private:
    Stack trueOrder;
    Stack tempOrder;
};

void Queue::enqueue(int value)
{
    while (!trueOrder.isEmpty())
    {
        tempOrder.push(trueOrder.pop());
    }

    trueOrder.push(value);

    while (!tempOrder.isEmpty())
    {
        trueOrder.push(tempOrder.pop());
    }
}

int Queue::dequeue()
{
    return trueOrder.pop();
}

bool Queue::isEmpty()
{
    return (trueOrder.isEmpty() && tempOrder.isEmpty());
}

int main(int argc, char *argv[])
{
    Queue test;
    for (int x : testVals)
    {
        test.enqueue(x);
    }

    std::cout << "Queue (2 Stack Implementation) Test" << std::endl;
    while (!test.isEmpty())
    {
        std::cout << test.dequeue() << std::endl;
    }

    return 0;
}

```
