---
layout: "../../layouts/BlogPost.astro"
title: "Graph (Adjacency Matrix Initialization)"
subtext: "Graph (Adjacency Matrix Initialization) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>
#include <map>
#include <string>
#include <sstream>
#include <algorithm>

struct Graph
{
    Graph(std::vector<std::string> rws);

    bool isConnected(int nodeA, int nodeB);
    std::vector<int> connections(int node);

    std::vector<std::vector<int>> graph;
};

Graph::Graph(std::vector<std::string> rws)
{
    for (int i = 0; i < rws.size(); i++)
    {
        std::vector<int> row;

        for (int j = 0; j < rws[i].size(); j++)
        {
            if (rws[i][j] == '0')
            {
                row.push_back(0);
            }
            else if (rws[i][j] == '1')
            {
                row.push_back(1);
            }
        }
        graph.push_back(row);
    }
}

bool Graph::isConnected(int nodeA, int nodeB)
{
    return (graph[nodeA][nodeB] == 1);
}

std::vector<int> Graph::connections(int node)
{
    std::vector<int> connects;

    int indice = 0;

    for (int x : graph[node])
    {
        if (x == 1)
        {
            connects.push_back(indice);
        }
        indice++;
    }

    return connects;
}

int main(int argc, char *argv[])
{
    Graph adjmat(
        {
            "0 1 1 1 0",
            "1 0 1 0 1",
            "1 1 0 0 0",
            "1 0 0 0 1",
            "0 1 0 1 0",
        });

    for (int i = 0; i < 5; i++)
    {
        std::vector<int> connections = adjmat.connections(i);
        for (int x : connections)
        {
            std::cout << "node " << x << " is connected to node " << i << std::endl;
        }

        std::cout << std::endl;
    }
}
```
