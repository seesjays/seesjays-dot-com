---
layout: "../../layouts/BlogPost.astro"
title: "Kattis Competiton (Roaming Romans)"
subtext: "Kattis Competiton (Roaming Romans) written in C++"
sector: extras
date: "2022-01-01"
---

```cpp
#include <vector>
#include <map>
#include <math.h>
#include <string>
#include <iomanip>

using namespace std;

class Romans
{
public:
    int convert(double engMi)
    {
        int convValue = engMi * (5280.0 / 4854.0) * 1000.0 + 0.5;
        return convValue;
    }
};

int main(int argc, char *argv[])
{
    string line;
    getline(cin, line);
    double engMiles = stod(line);

    Romans conv;
    cout << conv.convert(engMiles);
}
```
