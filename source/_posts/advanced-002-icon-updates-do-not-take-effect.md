---
title: Advanced 002 - Icon updates do not take effect?
date: 2023-09-18 11:51:06
tags:
---

> As a developer of Icon Packer, I always build the same icon pack with different versions, sometime I add icons or adaptations, then I build the apk file again, finally I apply it to launcher.
> The question is that sometimes I can not find the latest updates on my launcher!

#### Why?
The issue is from launcher cache, the icon packs apk with different icons has the same package name, so the launcher thought you apply the same icon pack twice, and maybe it read configuration from launcher cache to enhance the performance.
(That's just my point of view)

#### How to solve this problem?
It's easy! There are some ways you can try:
1. Go to launcher settings, and find reboot/restart/fix launcher, then the icon pack effect should be the latest.
2. Choose another icon pack to apply, then reboot your launcher, apply the latest icon pack again.
3. Reboot your device!

I can not sure which way is best on your launcher, just have a try!