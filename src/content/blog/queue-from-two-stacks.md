---
layout: "../../layouts/BlogPost.astro"
title: "Queue From Two Stacks"
subtext: "Queue From Two Stacks written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>
#include <stack>

using namespace std;





struct Node
{
    Node(int val) : value(val){};
    int value;
    Node *next = nullptr;
};

struct Queue
{
    void enqueue(int value);
    bool isEmpty();
    int dequeue();
    int front();

    stack<int> a;
    stack<int> b;
};

void Queue::enqueue(int value)
{
    while (!a.empty())
    {
        b.push(a.top());
        a.pop();
    }

    a.push(value);

    while (!b.empty())
    {
        a.push(b.top());
        b.pop();
    }
}

int Queue::dequeue()
{
    int toReturn = a.top();
    a.pop();

    return toReturn;
}

bool Queue::isEmpty()
{
    return (a.size() == 0 ? true : false);
}

int Queue::front()
{
    int front = a.top();
    return front;
}

int main(int argc, char *argv[])
{

    Queue q;

    for (int x : nummies)
    {
        q.enqueue(x);
    }

    while (!q.isEmpty())
    {
        cout << q.front() << endl;
        q.dequeue();
    }
}

```
