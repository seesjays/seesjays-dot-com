---
layout: "../../layouts/BlogPost.astro"
title: "Sum Of Nodes in a Binary Tree"
subtext: "Sum Of Nodes in a Binary Tree written in C++"
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

int nodeCount(TreeNode *cu)
{
    if (cu == nullptr)
        return 0;
    return 1 + nodeCount(cu->left) + nodeCount(cu->right);
}

int getSum(TreeNode *cu)
{
    if (cu == nullptr)
        return 0;

    int left = getSum(cu->left);
    int right = getSum(cu->right);

    return left + right + cu->value;
}

int main(int argc, char *argv[])
{
    BinaryTree test;

    test.buildPerfectTree(40);

    std::cout << "sum: " << getSum(test.getRoot()) << std::endl;
    return 0;
}
```
