---
layout: "../../layouts/BlogPost.astro"
title: "Tree (Non-Random Generator (VALID BST))"
subtext: "Tree (Non-Random Generator (VALID BST)) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>
#include <queue>
#include <stdlib.h>
#include <stdlib.h>

struct TreeNode
{
    TreeNode(int v) : value(v){};
    TreeNode *left = nullptr;
    TreeNode *right = nullptr;
    int value;
};

class BinaryTree
{
public:
    TreeNode *buildPerfectTree(int starter);
    void add(TreeNode *parent, int diff);
    TreeNode *getRoot();

private:
    TreeNode *root = nullptr;
};

void BinaryTree::add(TreeNode *parent, int diff)
{
    int leftVal = parent->value - diff;
    int rightVal = parent->value + diff;

    if (leftVal == rightVal || diff == 1)
    {
        return;
    }

    parent->left = new TreeNode(leftVal);
    parent->right = new TreeNode(rightVal);

    add(parent->left, diff / 2);
    add(parent->right, diff / 2);
}

TreeNode *BinaryTree::buildPerfectTree(int starter)
{
    TreeNode *head = new TreeNode(starter);
    root = head;
    add(root, starter / 2);
    return getRoot();
}

TreeNode *BinaryTree::getRoot() { return root; }

void printLevelOrder(TreeNode *node)
{
    std::queue<TreeNode *> q;
    q.push(node);

    while (!q.empty())
    {
        int size = q.size();
        for (int i = 0; i < size; i++)
        {
            TreeNode *cu = q.front();
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
    BinaryTree test;

    std::cout << "Tree (Correct Generator) Test (Level Order Printing)" << std::endl;
    printLevelOrder(test.buildPerfectTree(100));
    return 0;
}
```
