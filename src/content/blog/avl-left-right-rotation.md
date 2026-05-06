---
layout: "../../layouts/BlogPost.astro"
title: "AVL (Left Right Rotation)"
subtext: "AVL (Left Right Rotation) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <string>
#include <vector>
#include <queue>

/*
    1
        2
=============
        2
*/

struct Node
{
    Node(int val) : value(val){};
    Node *left;
    Node *right;

    int value;
};

struct AVL
{
    Node *root;
};

Node *singleLeftRotation(Node *current)
{
    Node *newParent = current->right;

    current->right = newParent->left;
    newParent->left = current;

    return newParent;
}

Node *singleRightRotation(Node *current)
{
    Node *newParent = current->left;

    current->left = newParent->right;
    newParent->right = current;

    return newParent;
}

Node *leftRightRotation(Node *current)
{
    current->left = singleLeftRotation(current->left);
    return singleRightRotation(current);
}

void printLevelOrder(Node *node)
{
    std::queue<Node *> q;
    q.push(node);

    while (!q.empty())
    {
        int size = q.size();
        for (int i = 0; i < size; i++)
        {
            Node *cu = q.front();
            std::cout << cu->value << " ";

            q.pop();
            if (cu->left != nullptr)
                q.push(cu->left);
            if (cu->right != nullptr)
                q.push(cu->right);
        }
        std::cout << std::endl;
    }
}

int main(int argc, char *argv[])
{
    AVL avlTree;
    avlTree.root->left = new Node(1);
    avlTree.root->left->right = new Node(2);

    avlTree.root = leftRightRotation(avlTree.root);

    printLevelOrder(avlTree.root);
}

```
