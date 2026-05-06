---
layout: "../../layouts/BlogPost.astro"
title: "Kattis Competiton (I've Been Everywhere, Man)"
subtext: "Kattis Competiton (I've Been Everywhere, Man) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>
#include <map>
#include <string>

using namespace std;

class Everywhere
{
public:
    Everywhere(vector<string> lns)
    {
        lines = lns;
        getCaseCount();
        for (int i = 0; i < casecnt; i++)
        {
            readCase();
        }
    }
    vector<string> lines;
    int casecnt = 0;
    int index = 0;
    int citycount = 0;

    void getCaseCount()
    {
        casecnt = stoi(lines[index]);
        index++;
    }

    void readCase()
    {
        int citycount = stoi(lines[index]);
        vector<string> cities;
        map<string, bool> been;
        index++;

        for (int i = 0; i < citycount; i++)
        {
            if (index < lines.size())
            {
                if (!been[lines[index]])
                {
                    cities.push_back(lines[index]);
                    been[lines[index]] = true;
                }

                index++;
            }
        }
        citycount = cities.size();
        cout << citycount << endl;
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

    Everywhere ev(lines);
}
```
