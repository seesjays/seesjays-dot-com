---
layout: "../../layouts/BlogPost.astro"
title: "Length Between Two Characters"
subtext: "Length Between Two Characters written in C++"
sector: extras
date: "2022-01-01"
---

```cpp

std::size_t length_between_two(std::size_t a, std::size_t b)
{
    if (b < a)
        return 0;

    return b - a;
}

std::string text_between_two(std::string s, std::string a, std::string b)
{
    std::size_t aPos = s.find(a);
    std::size_t bPos = s.find(b);

    std::size_t length = length_between_two(aPos + a.length(), bPos);

    std::string sub = s.substr(aPos + a.length(), length);
    return sub;
}

int main(int argc, char *argv[])
{

    std::string betweenCurly = text_between_two(inputString, "(", ")");
    std::string betweenSquare = text_between_two(inputString, "[", "]");

    std::cout << "curly: " << betweenCurly << std::endl;
    std::cout << "square: " << betweenSquare << std::endl;
}

```
