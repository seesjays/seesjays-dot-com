---
layout: "../../layouts/BlogPost.astro"
title: "AVL (Insertion + Deletion)"
subtext: "AVL (Insertion + Deletion) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <string>
#include <vector>
#include <queue>

struct Node
{
    Node(int val) : value(val){};
    Node *left;
    Node *right;

    int value;
    int height;
};

class AVL
{
public:
    void add(int val);
    void remove(int val);

    Node *getRoot();

private:
    Node *root = nullptr;

    Node *singleLeftRotation(Node *current);
    Node *singleRightRotation(Node *current);
    Node *leftRightRotation(Node *current);
    Node *rightLeftRotation(Node *current);

    int getHeight(Node *current);
    int balanceFactor(Node *current);

    Node *insert(Node *parent, int val);

    Node *getInOrderSuccessor(Node *current);
    Node *deleteNode(Node *parent, int val);
};

void AVL::add(int value)
{
    root = insert(getRoot(), value);
}

void AVL::remove(int value)
{
    root = deleteNode(getRoot(), value);
}

Node *AVL::getRoot()
{
    return root;
}

Node *AVL::singleLeftRotation(Node *current)
{
    Node *newParent = current->right;

    current->right = newParent->left;
    newParent->left = current;

    current->height = std::max(getHeight(current->left), getHeight(current->right)) + 1;
    newParent->height = std::max(getHeight(newParent->left), getHeight(newParent->right)) + 1;

    return newParent;
}

Node *AVL::singleRightRotation(Node *current)
{
    Node *newParent = current->left;

    current->left = newParent->right;
    newParent->right = current;

    current->height = std::max(getHeight(current->left), getHeight(current->right)) + 1;
    newParent->height = std::max(getHeight(newParent->left), getHeight(newParent->right)) + 1;

    return newParent;
}

Node *AVL::leftRightRotation(Node *current)
{
    current->left = singleLeftRotation(current->left);
    return singleRightRotation(current);
}

Node *AVL::rightLeftRotation(Node *current)
{
    current->right = singleRightRotation(current->right);
    return singleLeftRotation(current);
}

int AVL::getHeight(Node *current)
{
    if (current == nullptr)
        return -1;
    return current->height;
}

int AVL::balanceFactor(Node *current)
{
    if (current == nullptr)
        return 0;
    return getHeight(current->left) - getHeight(current->right);
}

Node *AVL::insert(Node *parent, int value)
{
    if (parent == nullptr)
    {
        return new Node(value);
    }
    else if (value < parent->value)
    {
        parent->left = insert(parent->left, value);
        int bf = balanceFactor(parent);

        if (bf == 2)
        {
            if (value < parent->left->value)
            {
                /*
                    2
                1
                */
                std::cout << "single right" << std::endl;
                parent = singleRightRotation(parent);
            }
            else
            {
                /*
                        1
                    2
                */
                std::cout << "left right" << std::endl;
                parent = leftRightRotation(parent);
            }
        }
    }
    else if (value > parent->value)
    {
        parent->right = insert(parent->right, value);
        int bf = balanceFactor(parent);
        if (bf == -2)
        {
            if (value > parent->right->value)
            {
                /*
                1
                    2
                */
                std::cout << "single left" << std::endl;
                parent = singleLeftRotation(parent);
            }
            else
            {
                /*
                1
                2
                */
                std::cout << "right left" << std::endl;
                parent = rightLeftRotation(parent);
            }
        }
    }
    else
    {
        std::cout << "duplicate" << std::endl;
        return parent;
    }

    parent->height = std::max(getHeight(parent->left), getHeight(parent->right)) + 1;
    return parent;
}

Node *AVL::getInOrderSuccessor(Node *parent)
{
    if (parent->left != nullptr)
    {
        return getInOrderSuccessor(parent->left);
    }
    else
    {
        return parent;
    }
}

Node *AVL::deleteNode(Node *current, int val)
{
    if (current == nullptr)
    {
        return current;
    }

    if (val < current->value)
    {
        current->left = deleteNode(current->left, val);
    }
    else if (val > current->value)
    {
        current->right = deleteNode(current->right, val);
    }
    else
    {
        if ((current->left == nullptr) && (current->right == nullptr))
        {
            return nullptr;
        }
        else if (current->left != nullptr && current->right != nullptr)
        {
            Node *inOrderSuccessor = getInOrderSuccessor(current->right);
            current->value = inOrderSuccessor->value;
            current->right = deleteNode(current->right, current->value);
        }
        else if (current->left != nullptr)
        {
            current = current->left;
        }
        else if (current->right != nullptr)
        {
            current = current->right;
        }

        current->height = std::max(getHeight(current->left), getHeight(current->right)) + 1;
        int bf = balanceFactor(current);

        if (bf == 2)
        {
            if (current->value < current->left->value)
            {
                /*
                    2
                1
                */
                std::cout << "single right" << std::endl;
                return singleRightRotation(current);
            }
            else
            {
                /*
                        1
                    2
                */
                std::cout << "left right" << std::endl;
                return leftRightRotation(current);
            }
        }
        else if (bf == -2)
        {
            if (current->value > current->right->value)
            {
                /*
                1
                    2
                */
                std::cout << "single left" << std::endl;
                return singleLeftRotation(current);
            }
            else
            {
                /*
                1
                2
                */
                std::cout << "right left" << std::endl;
                return rightLeftRotation(current);
            }
        }
    }

    return current;
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
    avlTree.add(5);
    avlTree.add(6);
    avlTree.add(7);
    avlTree.add(2);
    avlTree.add(4);

    avlTree.remove(6);
    avlTree.remove(2);

    printLevelOrder(avlTree.getRoot());
}

```
