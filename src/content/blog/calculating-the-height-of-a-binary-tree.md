---
layout: "../../layouts/BlogPost.astro"
title: "Calculating the Height of a Binary Tree"
subtext: "Calculating the Height of a Binary Tree written in C++"
sector: extras
date: "2022-01-01"
---

```cpp


struct Node
{
    Node(int value) : value(value){};
    int value;
    Node *left;
    Node *right;
};

int height(Node *cu);

int main(int argc, char *argv[])
{
    Node *head = new Node(0);
    Node *cu = head;

    for (int i = 1; i < 25; i++)
    {
        Node *tmp = new Node(i);
        cu->left = tmp;
        cu = cu->left;
    }

    cu = head;

    for (int i = 1; i < 90; i++)
    {
        Node *tmp = new Node(i);
        cu->right = tmp;
        cu = cu->right;
    }

    int ht = height(head);
    std::cout << "Calculating the Height of a Binary Tree Test" << std::endl;
    std::cout << ht << std::endl;
}

int height(Node *cu)
{
    if (cu == nullptr)
    {
        return 0;
    }
    else
    {
        return 1 + std::max(height(cu->left), height(cu->right));
    }
}

```
