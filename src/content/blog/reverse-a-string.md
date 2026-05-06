---
layout: "../../layouts/BlogPost.astro"
title: "Reverse A String"
subtext: "Reverse A String written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>
#include <iostream>
#include <string>

std::string stringRev(std::string input, int indy)
{
    if (indy == input.length() / 2)
    {
        return input;
    }

    char tmp = input[indy];
    input[indy] = input[input.length() - indy - 1];
    input[input.length() - indy - 1] = tmp;

    return stringRev(input, indy + 1);
}

int main(int argc, char *argv[])
{
    std::string test = "olleh";
    std::cout << test << std::endl;
    std::string tset = stringRev(test, 0);
    std::cout << tset << '\n'<< std::endl;

    test = "selppa";
    std::cout << test << std::endl;
    tset = stringRev(test, 0);
    std::cout << tset << '\n' << std::endl;

    test = "neve";
    std::cout << test << std::endl;
    tset = stringRev(test, 0);
    std::cout << tset << '\n'<< std::endl;

    test = "ddo";
    std::cout << test << std::endl;
    tset = stringRev(test, 0);
    std::cout << tset << '\n' << std::endl;
}
```
