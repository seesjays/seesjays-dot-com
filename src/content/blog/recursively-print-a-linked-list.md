---
layout: "../../layouts/BlogPost.astro"
title: "Recursively Print A Linked List"
subtext: "Recursively Print A Linked List written in C++"
sector: extras
date: "2022-01-01"
---

```cpp

struct Node
{
    Node(int v) : value(v) {}
    Node *next;
    int value;
};

class LinkedList
{
public:
    void push(int value);
    int pop();
    int peek();
    bool isEmpty();
    Node *head = nullptr;
    Node *tail = nullptr;

private:
    int size = 0;
};

void LinkedList::push(int value)
{
    Node *tmp = new Node(value);

    if (head == nullptr)
    {
        head = tail = tmp;
    }
    else
    {
        tail->next = tmp;
        tail = tmp;
    }

    size++;
}

void print_rec(Node *node)
{
    if (node == nullptr)
        return;
    std::cout << node->value << " " << std::endl;
    print_rec(node->next);
}

int main(int argc, char *argv[])
{
    LinkedList chain;
    chain.push(2);
    chain.push(4);
    chain.push(5);
    chain.push(200);
    chain.push(9);

    print_rec(chain.head);
}
```
