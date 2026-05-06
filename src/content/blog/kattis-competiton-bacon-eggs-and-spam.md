---
layout: "../../layouts/BlogPost.astro"
title: "Kattis Competiton (Bacon, Eggs, and Spam)"
subtext: "Kattis Competiton (Bacon, Eggs, and Spam) written in C++"
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

class Diner
{
public:
    Diner(vector<string> lns)
    {
        lines = lns;
        while (index < lines.size())
        {
            readCase();
            printResults();
            orders.clear();
            menuItems.clear();
        }
    }
    vector<string> lines;
    map<string, vector<string>> orders;
    vector<string> menuItems;
    stringstream linereader;

    int index = 0;

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

    void printResults()
    {
        sort(menuItems.begin(), menuItems.end());
        for (string item : menuItems)
        {
            sort(orders[item].begin(), orders[item].end());

            cout << item << " ";
            for (string name : orders[item])
            {
                cout << name << " ";
            }
            cout << endl;
        }
        cout << endl;
    }

    void readCase()
    {
        int customercount = stoi(lines[index]);
        index++;
        vector<string> words;

        for (int i = 0; i < customercount; i++)
        {
            words = toWords(lines[index]);

            string name = words[0];

            for (int i = 1; i < words.size(); i++)
            {
                if (orders[words[i]].size() == 0)
                {
                    menuItems.push_back(words[i]);
                }
                orders[words[i]].push_back(name);
            }

            index++;
        }
    }
};

int main(int argc, char *argv[])
{
    string line;
    vector<string> lines = {
        "Alice bacon eggs spam",
        "Sue pancakes sausage ham",
        "David eggs spam",
        "1",
        "Bill diet-coke",
        "0",

    }; /*
          while (getline(cin, line))
          {
              lines.push_back(line);
          }
      */

    Diner ev(lines);
}
```
