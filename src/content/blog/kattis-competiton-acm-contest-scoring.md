---
layout: "../../layouts/BlogPost.astro"
title: "Kattis Competiton (ACM Contest Scoring)"
subtext: "Kattis Competiton (ACM Contest Scoring) written in C++"
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

class ACM
{
public:
    ACM(vector<string> lines)
    {
        this->lines = lines;
        processEntries();
        calculateScore();
    }

    int index = 0;
    int score = 0;

    vector<string> lines;
    vector<string> problems;
    map<string, bool> solved;
    map<string, int> penalties;
    map<string, int> times;

    void processEntries()
    {
        while (lines[index] != "-1" && index < lines.size())
        {
            string line = lines[index];
            vector<string> words = toWords(line);

            int time = stoi(words[0]);
            string question = words[1];
            bool correct = (words[2] == "right") ? true : false;

            if (!solved[question])
            {
                if (correct)
                {
                    times[question] = time;
                    solved[question] = true;
                }
                else
                {
                    penalties[question] += 20;
                }
            }

            index++;
        }
    }

    void calculateScore()
    {
        int solvedcnt = 0;
        for (auto const &x : solved)
        {
            if (x.second)
            {
                solvedcnt++;
                score += penalties[x.first];
                score += times[x.first];
            }
        }

        cout << solvedcnt << " " << score << endl;
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

    ACM contest(lines);
}
```
