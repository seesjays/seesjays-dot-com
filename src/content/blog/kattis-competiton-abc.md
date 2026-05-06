---
layout: "../../layouts/BlogPost.astro"
title: "Kattis Competiton (ABC)"
subtext: "Kattis Competiton (ABC) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>
#include <map>
#include <string>
#include <sstream>
#include <algorithm>
#include <queue>

using namespace std;

class Alpha
{
public:
    Alpha(vector<string> lines)
    {
        this->lines = lines;
        getNumbers();
        properlyOrder();

        order = lines[1];
        outputOrder();
    }

    vector<string> lines;
    string order;
    vector<int> numbers;

    int a;
    int b;
    int c;
    int index = 0;

    void getNumbers()
    {
        vector<string> strnums = toWords(lines[0]);
        for (string strnum : strnums)
        {
            numbers.push_back(stoi(strnum));
        }
    }

    void properlyOrder()
    {
        priority_queue<int> q;
        for (int num : numbers)
        {
            q.push(num);
        }

        c = q.top();
        q.pop();
        b = q.top();
        q.pop();
        a = q.top();
        q.pop();
    }

    void outputOrder()
    {
        for (int i = 0; i < order.size(); i++)
        {
            if (order[i] == 'A')
            {
                cout << a << ' ';
            }
            if (order[i] == 'B')
            {
                cout << b << ' ';
            }
            if (order[i] == 'C')
            {
                cout << c << ' ';
            }
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
};

int main(int argc, char *argv[])
{
    string line;
    vector<string> lines;
    while (getline(cin, line))
    {
        lines.push_back(line);
    }

    Alpha bet(lines);
}
```
