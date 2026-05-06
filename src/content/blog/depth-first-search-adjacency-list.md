---
layout: "../../layouts/BlogPost.astro"
title: "Depth First Search (Adjacency List)"
subtext: "Depth First Search (Adjacency List) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>
#include <stack>
#include <map>
#include <string>
#include <sstream>
#include <algorithm>

struct Node
{
    Node(int val) : num(val){};
    int num;
    Node *next;
};

struct Graph
{
    Graph(int size);

    void addConnection(int nodeA, int nodeB);

    bool isConnected(int nodeA, int nodeB);
    std::vector<int> connections(int node);
    void DFS(int source);

    std::vector<Node *> graph;
};

Graph::Graph(int size)
{
    graph = std::vector<Node *>(size, nullptr);
}

void Graph::addConnection(int nodeA, int nodeB)
{
    Node *cu = graph[nodeA];
    if (cu == nullptr)
    {
        graph[nodeA] = new Node(nodeB);
    }
    else
    {
        while (cu->next != nullptr)
        {
            cu = cu->next;
        }
        cu->next = new Node(nodeB);
    }
}

bool Graph::isConnected(int nodeA, int nodeB)
{
    Node *cu = graph[nodeA];
    while (cu != nullptr)
    {
        if (cu->num == nodeB)
            return true;
        cu = cu->next;
    }
    return false;
}

void Graph::DFS(int source)
{
    std::stack<int> s;
    std::vector<bool> visited = std::vector<bool>(graph.size(), false);

    s.push(source);
    int nodeNum, next;
    Node *currentNode;

    while (!s.empty())
    {
        nodeNum = s.top();
        s.pop();
        if (!visited[nodeNum])
        {
            std::cout << nodeNum << " ";
            visited[nodeNum] = true;
        }

        currentNode = graph[nodeNum];
        while (currentNode != nullptr)
        {
            next = currentNode->num;

            if (!visited[next])
                s.push(next);

            currentNode = currentNode->next;
        }
    }

    std::cout << std::endl;
}

std::vector<int> Graph::connections(int node)
{
    std::vector<int> connects;

    Node *cu = graph[node];
    while (cu != nullptr)
    {
        connects.push_back(cu->num);
        cu = cu->next;
    }

    return connects;
}

int main(int argc, char *argv[])
{
    Graph adjmat(5);
    adjmat.addConnection(0, 1);
    adjmat.addConnection(0, 2);

    adjmat.addConnection(1, 0);
    adjmat.addConnection(1, 2);
    adjmat.addConnection(1, 4);

    adjmat.addConnection(2, 0);
    adjmat.addConnection(2, 1);


    adjmat.addConnection(4, 1);

    adjmat.DFS(0);
}
```
