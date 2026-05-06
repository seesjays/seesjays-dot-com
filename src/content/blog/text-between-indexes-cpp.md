---
layout: "../../layouts/BlogPost.astro"
title: "How to get text between two indexes in C++"
date: "2022-10-06"
subtext: "Python and JS are so much more comfy for this kinda thing but we don’t get that comfort here"
sector: technical
hue: 207
---


A lot of my CS homework involves getting what lies between two characters, sometimes between two words.

For example, I needed to get the number in between the round brackets and all the text in between the square brackets of this string to do operations on them.

```
Add (0) [id:7583;username:eevee;score:92;grade:A]
```

The common "obvious" solution to this would be to get the indices of the characters that have the text you want in between them, and use `substring(charA, charB)`.

The issue with that approach is that C++ doesn’t use the *fun, simple* substring like JavaScript where you can use two indices as arguments. C++’s substring takes the starting indice and then the number of characters you want after that starting indice.

## Solution
The number of characters we want is just the distance between the two indices. I wrote two functions to calculate said distance and return the desired substring:

```cpp
#include <iostream>

std::size_t length_between_two(std::size_t a, std::size_t b)
{
    if (b < a) return 0;

    return b - a;
}

std::string text_between_two(std::string s, std::string a, std::string b)
{
    std::size_t aPos = s.find(a);
    std::size_t bPos = s.find(b);

    // The + a.length() is necessary here so we don't get the text that makes up a
    std::size_t length = length_between_two(aPos + a.length(), bPos);

    // See previous comment.
    std::string sub = s.substr(aPos + a.length(), length);
    return sub;
}

int main(int argc, char *argv[])
{
    std::string inputString = "Add (0) [id:7583;username:eevee;score:92;grade:A]";

    std::string betweenCurly = text_between_two(inputString, "(", ")");
    std::string betweenSquare = text_between_two(inputString, "[", "]");

    std::cout << "curly: " << betweenCurly << std::endl;
    // 0

    std::cout << "square: " << betweenSquare << std::endl;
    // id:7583;username:eevee;score:92;grade:A
}
```
