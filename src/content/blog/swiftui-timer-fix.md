---
layout: "../../layouts/BlogPost.astro"
title: "How to keep a SwiftUI Timer publishing even when the UI updates"
date: "2023-04-24"
subtext: "Tick tock tick tock: SwiftUI’s timer needed a quick tweak."
sector: technical
hue: 9
---


I’m toying around with SwiftUI and recently needed a timer for a countdown-type thing. I followed the [common implementations](https://www.hackingwithswift.com/books/ios-swiftui/triggering-events-repeatedly-using-a-timer) I could find here and there saying to use Timer.publish + onReceive, but ran into one big issue:

Whenever the UI would update from user interaction, (this was an update-heavy application, with lots of typing involved), the timer wouldn’t publish for that instance of time. I haven’t looked too deep into this, but I reckon it’s because of @State related updates. I tried running the Timer on different runloops and all, but still found no success.

What I have looked into, however, is a solution: I found that it’s actually pretty easy to manage the logic for starting/stopping the timer yourself, and that using scheduledTimer doesn’t suffer the same UI update issues Timer.publish has.

```swift
import SwiftUI

struct TestView : View {
    @State private var timer: Timer?;
    @State private var timerStarted = false;
    @State private var counter = 0;
    
    var body : some View {
        VStack(spacing: 24) {
            Text("Wow! \(counter) seconds have passed! You're \(counter) seconds older!")
                .font(.title)
        }
        .onAppear() {
            startTimer();
        }
        .onDisappear {
            timerStarted = false;
            timer?.invalidate();
        }
    }
    
    private func startTimer() {
        timerStarted = true;
        
        timer = Timer.scheduledTimer(withTimeInterval: 1, repeats: true) { _ in
            if (timerStarted) {
                counter += 1;
            } else {
                timer?.invalidate();
                timerStarted = false;
            }
        }
    }
}
```


![What the view looks like: Some text with timers that increase each second.](/postImages/swiftui-timer-fix.md/viewText.png)

This is a really nice solution because it allowed me to define some additional logic and state changes in the timer func, which helped bunches with what I was developing.
