---
layout: "../../layouts/BlogPost.astro"
title: "2D Array From String"
subtext: "2D Array From String written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <string>

int main(int argc, char *argv[])
{
    std::string matrStr = "12charstringhere";
    int size = 4;
    char **matrix = new char *[size];

    for (int i = 0; i < size; i++)
    {
        matrix[i] = new char[size];

        int charsRead = 0;
        for (int j = i * 4; charsRead < size; j++)
        {
            matrix[i][charsRead] = matrStr[i * 4 + charsRead];
            charsRead++;
        }
    }

    std::cout << "2D Array From String Test" << std::endl;
    for (int i = 0; i < size; i++)
    {
        for (int j = 0; j < size; j++)
        {
            std::cout << matrix[i][j] << " ";
        }

        std::cout << std::endl;
    }
}

```
