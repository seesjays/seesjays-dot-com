---
layout: "../../layouts/BlogPost.astro"
title: "Breadth First Search (Adjacency Matrix)"
subtext: "Breadth First Search (Adjacency Matrix) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>
#include <queue>
#include <map>
#include <string>
#include <sstream>
#include <algorithm>

struct Graph
{
    Graph(std::vector<std::string> rws);

    bool isConnected(int nodeA, int nodeB);
    std::vector<int> connections(int node);
    void BFS(int source);

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

void Graph::BFS(int source)
{
    std::queue<int> q;
    std::vector<bool> visited = std::vector<bool>(graph.size(), false);

    q.push(source);

    while (!q.empty())
    {
        int currNode = q.front();
        q.pop();

        if (!visited[currNode])
        {
            std::cout << currNode << " ";
            visited[currNode] = true;
        }

        for (int connected : connections(currNode))
        {
            if (!visited[connected])
                q.push(connected);
        }
    }

    std::cout << std::endl;
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

    adjmat.BFS(0);
}
```
