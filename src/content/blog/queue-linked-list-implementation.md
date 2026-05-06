---
layout: "../../layouts/BlogPost.astro"
title: "Queue (Linked List Implementation)"
subtext: "Queue (Linked List Implementation) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>


struct Node
{
    Node(int val)
    {
        value = val;
    }
    Node *next = nullptr;
    int value;
};

class Queue
{
public:
    void enqueue(int value);
    int dequeue();
    bool isEmpty();

private:
    int size = 0;
    int maxSize = -1;
    Node *front = nullptr;
    Node *back = nullptr;
};

void Queue::enqueue(int value)
{
    Node *tmp = new Node(value);

    if (front == nullptr)
    {
        front = back = tmp;
    }
    else
    {
        back->next = tmp;
        back = tmp;
    }

    size++;
}

int Queue::dequeue()
{
    int tempVal = front->value;
    Node *next = front->next;
    delete front;
    front = next;
    size--;

    if (front == nullptr)
    {
        back = nullptr;
    }

    return tempVal;
}

bool Queue::isEmpty()
{
    return (size == 0);
}

int main(int argc, char *argv[])
{
    Queue test;
    for (int x : testVals)
    {
        test.enqueue(x);
    }

    std::cout << "Queue (Linked List Implementation) Test" << std::endl;
    while (!test.isEmpty())
    {
        std::cout << test.dequeue() << std::endl;
    }

    return 0;
}

```
