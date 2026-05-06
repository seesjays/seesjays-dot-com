---
layout: "../../layouts/BlogPost.astro"
title: "Tree (Random Generator (NOT VALID BST))"
subtext: "Tree (Random Generator (NOT VALID BST)) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
/*
    Reason this is incorrect is because I was spitballing an algorithm
    for generating a random binary tree. The algorithm is wrong, but
    why waste all this code?
*/

#include <iostream>
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



class RandomGenerator
{
public:
    RandomGenerator(int seed = time(NULL));
    int GenerateInclusive(int high);
    int GenerateBetweenInclusive(int low, int high);
};

RandomGenerator::RandomGenerator(int seed)
{
    srand(seed);
}

int RandomGenerator::GenerateInclusive(int high)
{
    return rand() % high + 1;
}
int RandomGenerator::GenerateBetweenInclusive(int low, int high)
{
    return low + rand() % (high - low + 1);
}

void BuildRandomPerfectTree(RandomGenerator gen, TreeNode *root, int levels, int maxVal)
{
    if (root == nullptr)
    {
        TreeNode *head = new TreeNode(gen.GenerateInclusive(maxVal) / 2);
        root = head;
        BuildRandomPerfectTree(gen, root, levels - 1, maxVal);
    }
    else if (levels == 0)
    {
        return;
    }
    else
    {
        TreeNode *left = new TreeNode(gen.GenerateInclusive(maxVal));
        root->left = left;
        TreeNode *right = new TreeNode(gen.GenerateInclusive(maxVal));
        root->right = right;

        BuildRandomPerfectTree(gen, root->left, levels - 1, maxVal);
        BuildRandomPerfectTree(gen, root->right, levels - 1, maxVal);
    }
}

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
    RandomGenerator jenny;

    int max = 100;
    test.add(max / 2);

    BuildRandomPerfectTree(jenny, test.getRoot(), 2, max);

    std::cout << "Tree (Random Generator) Test (Level Order Printing)" << std::endl;
    printLevelOrder(test.getRoot());
    return 0;
}
```
