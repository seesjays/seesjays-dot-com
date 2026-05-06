---
layout: "../../layouts/BlogPost.astro"
title: "Priority Queue (Linked List Implementation)"
subtext: "Priority Queue (Linked List Implementation) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>


struct PrioQueueNode
{
    PrioQueueNode(int x) : value(x){};
    int value;
    PrioQueueNode *next;
};

class PriorityQueue
{
public:
    void enqueue(int value);
    int dequeue();
    int peek();
    bool isEmpty();

private:
    PrioQueueNode *front;
    int size = 0;
};

void PriorityQueue::enqueue(int value)
{
    PrioQueueNode *x = new PrioQueueNode(value);
    if (size == 0)
    {
        front = x;
    }
    else
    {
        if (value > front->value)
        {
            PrioQueueNode *newFront = x;
            newFront->next = front;
            front = newFront;
        }
        else
        {
            PrioQueueNode *cu = front;
            while (cu->next != nullptr && cu->next->value > value)
            {
                cu = cu->next;
            }

            x->next = cu->next;
            cu->next = x;
        }
    }

    size++;
}

int PriorityQueue::dequeue()
{
    int value = front->value;

    PrioQueueNode *nuFront = front->next;
    delete front;
    front = nuFront;
    size--;

    return value;
}

int PriorityQueue::peek()
{
    int value = front->value;
    return value;
}

bool PriorityQueue::isEmpty()
{
    return (size == 0);
}

int main(int argc, char *argv[])
{
    PriorityQueue pq;

    for (int x : testVals)
    {
        pq.enqueue(x);
    }

    std::cout << "Priority Queue (Linked List) Implementation Test" << std::endl;
    while (!pq.isEmpty())
    {
        std::cout << pq.dequeue() << std::endl;
    }
}
```
