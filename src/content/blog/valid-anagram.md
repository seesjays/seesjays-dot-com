---
layout: "../../layouts/BlogPost.astro"
title: "Valid Anagram"
subtext: "Valid Anagram written in C++"
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

bool validAnagram(std::string wordA, std::string wordB)
{
    std::map<char, int> wALetterCount;
    std::map<char, int> wBLetterCount;

    if (wordA.size() != wordB.size())
        return false;

    for (int i = 0; i < wordA.size(); i++)
    {
        wALetterCount[wordA[i]]++;
        wBLetterCount[wordB[i]]++;
    }

    for (int i = 0; i < wordA.size(); i++)
    {
        if (wALetterCount[wordA[i]] != wBLetterCount[wordA[i]])
        {
            return false;
        }
    }

    return true;
}

int main(int argc, char *argv[])
{
    if (validAnagram("listen", "silent"))
    {
        std::cout << "Anagram" << std::endl;
    }
    else
    {
        std::cout << "Not Anagram" << std::endl;
    }

    if (validAnagram("hello", "goodbye"))
    {
        std::cout << "Anagram" << std::endl;
    }
    else
    {
        std::cout << "Not Anagram" << std::endl;
    }
}
```
