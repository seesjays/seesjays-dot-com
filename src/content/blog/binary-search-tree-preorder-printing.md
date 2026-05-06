---
layout: "../../layouts/BlogPost.astro"
title: "Binary Search Tree (Preorder Printing)"
subtext: "Binary Search Tree (Preorder Printing) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>
#include <queue>


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
    void add(int value);
    TreeNode *getRoot();

private:
    TreeNode *root = nullptr;
};

void BinaryTree::add(int value)
{
    TreeNode *x = new TreeNode(value);
    if (root == nullptr)
    {
        root = x;
    }
    else
    {
        TreeNode *cu = root;
        while (true)
        {
            if (value < cu->value)
            {
                if (cu->left == nullptr)
                {
                    cu->left = x;
                    return;
                }
                cu = cu->left;
            }
            else if (value > cu->value)
            {
                if (cu->right == nullptr)
                {
                    cu->right = x;
                    return;
                }
                cu = cu->right;
            }
        }
    }
}

TreeNode *BinaryTree::getRoot() { return root; }

void printInOrder(TreeNode *node)
{
    if (node != nullptr)
    {
        std::cout << node->value << " ";
        printInOrder(node->left);
        printInOrder(node->right);
    }
}

int main(int argc, char *argv[])
{
    BinaryTree test;
    std::vector<int> testVals = {15, 10, 5, 20, 4, 8, 25};
    for (int x : testVals)
    {
        test.add(x);
    }

    std::cout << "Binary Search Tree Preorder Test" << std::endl;
    printInOrder(test.getRoot());

    return 0;
}
```
