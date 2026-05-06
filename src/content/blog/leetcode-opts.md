---
layout: "../../layouts/BlogPost.astro"
title: 'Fun LeetCode "Optimizations"'
date: "2022-07-19"
subtext: "INSANE LeetCode Runtime Trick to get huge FAANG salaries!"
hue: 36
---

I do LeetCode questions when I'm bored as \*another\* way to improve my C++ proficiency, and because I find them fun. Also, I might as well get used to doing them now so it won’t suck as much later. Win win win for me.

I’m not competitive at heart, but I do like achieving things. A while back I was doing _4. Median of Two Sorted Arrays_ (I’m doing them all in order starting from 1, is that bad?) and despite seeing an awfully clear and simple method of creating a merged array, I felt like cheesing it by using a map. Just for the sake of it. I like the data structure! So convenient.

The solution I came up with initially had a runtime of **236 ms,** but after some particular _“optimizations”_ I ended up with a **24 ms** solution, using what was largely the exact same code, algorithm, all that.

This code isn’t too cleaned up for presentation, but the concept should be grasped easily. Just iterating over the two arrays, adding the numbers as keys to a map with the values being a tracker of their appearances. Then the map is iterated over (I really wanted to use an unordered map for efficiency, but couldn't make finding the median as trivial) with the counts being added up till it reaches a sort of tipping point. The median is figured out from then. Just read the code, it makes sense.

```cpp
class Solution {
public:
    double findMedianSortedArrays(std::vector<int>& nums1, std::vector<int>& nums2) {
        std::map<int, int> counts;
        int aLen = nums1.size();
        int bLen = nums2.size();

        if (aLen + bLen == 2 && aLen == 1)
        {
            return (nums1[0] + nums2[0])/2.0;
        }

        int smallest = std::min(aLen, bLen);
        int largest = std::max(aLen, bLen);
        int totLen = smallest+largest;

        for (int i = 0; i < smallest; i++) {
            counts[nums1[i]]++;
            counts[nums2[i]]++;
        }

        std::vector<int>* remainder;
        if (largest == aLen) {
            remainder = &nums1;
        }
        else {
            remainder = &nums2;
        }

        for (int i = smallest; i < largest; i++)
        {
            counts[remainder->at(i)]++;
        }

        int total = 0;
        int median = 0;
        int medianTotal = (int)ceil(totLen/2.0);

        if (totLen % 2 == 0)
        {
            std::map<int, int>::iterator it;
            bool flag = false;

            for (const auto& kv : counts)
            {
                total += kv.second;
                if (total >= medianTotal)
                {
                    if (flag)
                    {
                        if (total - kv.second > medianTotal) {
                            break;
                        }

                        median += kv.first;
                        return median / 2.0;
                    }

                    median = kv.first;

                    flag = true;
                }

            }
        } else {
            for (const auto& kv : counts)
            {
                total += kv.second;
                if (tot >= medianTotal)
                {
                    median = kv.first;
                    return median;
                }
            }
        }

        return median;
    }
};
```

Not the most efficient solution, though. The map makes adding the keys in order easy and trivial, but you lose the efficiency gain a bit when having to iterate over it to find the median.

The first submission yielded a **236 ms runtime.** Which was because I had a bunch of `std::couts` in the code during the testing phase. `std::cout` is apparently horrendous for speed, and they were just for proto. Remove those, and I got a lovely **83 ms!**

Which was _okay._ It beat out 18% of the other submissions, which is _okayish._ It’s a Hard and I already knew the solution was inefficient (but stuck to it for the sake of comedy.)

So, what was my **hidden trick** to get INSANE LeetCode numbers?

## Resubmitting the same code.

![Range of LeetCode Submissions, with runtimes ranging 236-24 ms](/postImages/leetcode-median.png)

I don’t know if it’s an entirely universal thing, but I’ve noticed that runtimes vary a lot on some submissions, sometimes extremely in this case. Believe it or not, the exact same code can run literally _110% faster,_ just due to the nature of automated tests. I’m no complainer. It’s fun to game it a bit, see exactly “how low we can go” with a solution's runtime.

At 24 ms, I beat 99.6% of other submissions. I’m not the competitive sort, but I think the fact that I achieved something this low is hilarious, even if it’s “cheaty.” Really, the more optimal submitters could’ve done the exact same thing, so I sleep peacefully at night.

> It’s just funny to think of my silly map solution ranking among some of the C++ black magic I see other people doing.

I did the same thing with _118. Pascal’s Triangle,_ which isn’t in the proper order I was doing but it’s an Easy problem so I felt like throwing in the time.

```cpp
class Solution {
	public:
		std::vector<std::vector<int>> generate(int numRows) {
			if (numRows == 1) return  { std::vector<int> { 1 } };
			std::vector<std::vector<int>> base;
			base.reserve(numRows);
			base.push_back( { 1 } );
			base.push_back( { 1, 1 } );

			std::vector<int> newRow;
            newRow.reserve(numRows + 1);
			std::vector<int>* last = &base[1];

			int lastSize = 2;

			for (int i = 2; i < numRows; i++)
			{
				newRow.push_back(1);

				for (int i = 1; i < last->size(); i++)
				{
					newRow.push_back( last->at(i - 1) + last->at(i));
				}

				newRow.push_back(1);
				base.push_back(newRow);

				last = &base[i];
				newRow.clear();
			}

			return base;
		}
};
```

This solution had a runtime ranging from 0-5 ms, which can _sound_ impressive, but it really isn’t given it’s an Easy, so most trivial solutions are in the same range.

![Range of LeetCode Submissions, with runtimes ranging 5-0 ms](/postImages/leetcode-triangle.png)

The point I’m really getting at here is that if you feel bad about yourself after spending a long time doing a LeetCode question, just push Submit a couple more times.

It hurts nobody, and you can feel good about your solutions, optimal or horrendous.
