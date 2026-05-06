---
layout: "../../layouts/BlogPost.astro"
title: "Kattis Competiton (Weak Vertices)"
subtext: "Kattis Competiton (Weak Vertices) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>
#include <map>
#include <string>
#include <sstream>
#include <algorithm>

using namespace std;

class Verts
{
public:
    Verts(vector<string> lines)
    {
        this->lines = lines;
        while (index < lines.size())
        {
            populateGraph();
            findWeaks(0);
            printResults();
            graph.clear();
            strongs.clear();
        }
    }

    vector<string> lines;
    vector<vector<int>> graph;
    vector<int> strongs;
    int index = 0;

    void populateGraph()
    {
        int nodeCount = stoi(lines[index]);

        index++;

        for (int i = 0; i < nodeCount; i++)
        {
            vector<int> row;
            vector<string> connections = toWords(lines[index]);
            for (int j = 0; j < nodeCount; j++)
            {
                if (connections[j] == "0")
                {
                    row.push_back(0);
                }
                else
                {
                    row.push_back(1);
                }
            }
            graph.push_back(row);

            index++;
        }
    }

    vector<string> toWords(string sentence)
    {
        stringstream streamer(sentence);

        vector<string> words;
        string word;
        while (getline(streamer, word, ' '))
        {
            words.push_back(word);
        }

        return words;
    }

    void findWeaks(int elm)
    {
        for (int i = 0; i < graph.size(); i++)
        {
            bool strong = false;
            for (int j = 0; j < graph[i].size() && strong == false; j++)
            {
                if (graph[i][j] == 1 && j != i)
                {
                    for (int k = 0; k < graph[i].size(); k++)
                    {
                        if (graph[i][k] == 1 && k != i && k != j)
                        {
                            if (graph[j][k] == 1)
                            {
                                strong = true;
                                strongs.push_back(i);
                                break;
                            }
                        }
                    }
                }
            }
        }
    }

    void printResults()
    {
        for (int i = 0; i < graph.size(); i++)
        {
            bool print = true;
            for (int j = 0; j < strongs.size(); j++)
            {
                if (strongs[j] == i)
                {
                    print = false;
                }
            }

            if (print)
            {
                cout << i << " ";
            }
        }

        cout << endl;
    }

    void readCase()
    {
    }
};

int main(int argc, char *argv[])
{
    string line;
    vector<string> lines;

    while (getline(cin, line))
    {
        lines.push_back(line);
    }

    Verts vert(lines);
}
```
