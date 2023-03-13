---
title: 'Custom Linux ISO'
cms_exclude: true
subtitle:

# Summary for listings and search engines
summary:

# This will show-up as a pop-up title
linktitle: 

# Link this post with a project
projects: []

# Date published
date: "2020-12-13T00:00:00Z"

# Date updated
lastmod: "2020-12-13T00:00:00Z"

# Book page type (do not modify).
type: 
# The `course` folder in the example above may be renamed. For example, we can rename it to `book` for writing a book, `docs` for software/project documentation, `notes` for creating a notebook, or `tutorials` for creating multi-page “how to” guides.

# This will enable Table of Content
toc: true

# Is this an unpublished draft?
draft: true

# Show this page in the Featured widget?
featured: false

# View.
#   1 = List
#   2 = Compact
#   3 = Card
view: 3

# Featured image
# Place an image named `featured.jpg/png` in this page's folder and customize its options here.
image:
  caption: # 'Image credit: []()' or Photo by ---- on ----
  focal_point: #smart
  placement: 2
  preview_only: false

authors:
- admin

tags:
- 

categories:
- 
---
This is part too of improving the shell experience. The idea is to set a number of ISOs ready to start a workflow in bioinformatics with minimal effort, low bloat and all the tools necessary to work.

One easy way to start would we to use Manjaro and go from there; for a even more customizable minimal GUI, we are chosing to run Arch Linux and use AwesomeWM.

For this exercise I chose An Apple...
Did an average Arch install using the script `archinstall`. Then we chose this setting...

In my case I got an special error described here https://www.reddit.com/r/archlinux/comments/w1pmlz/i_keep_getting_an_error_when_doing_archinstall/


https://www.debugpoint.com/archinstall-guide/
https://bbs.archlinux.org/viewtopic.php?id=226770

At the end was to run 
```bash
journalctl -u pacman-init.service -f
```
and then cut the process when...
Then is possible to run archinstall.
This will work as long as the device is connected through ethernet.


Needless to say that some internet connection must be made in order to install dependencies and troubleshoot.




Once Arch is booted it will prompt for user an password (if set), and will open a Text Console. Even if AwesomeWM was set, it won't start right away unless is told to do so.

```bash
startx
```

In my case Using an old Macbook Pro, it needed to install Broadcom dependencies for the wifi devices to be detected. 

First is to make sure that the devices exist an are detected:
```bash

```
https://wiki.archlinux.org/title/Network_configuration/Wireless



Broadcom and other starter dependencies can be enabled from RPM fusion. To enable RPM Fusion first these commands must be run for free and non-free dependencies.
https://rpmfusion.org/Configuration

```bash
sudo dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

First dnf need to be set. Since we are using Arch the default package manager is pacman:

```bash
sudo pacman -S dnf
```
Then we prompt for broadcom:

```bash
 sudo dnf install broadcom-wl
```


There is a problem with using AwesomeWM, is that is very minimal and sometimes errors come up from needing to install certain elements but the DE as KDE Plasma can work with some known elements. Maybe to an extend; to make Linux work on a older computer is needed to give to more robusts DE and get more complete responses to problems that can come in the way of installing everything that is needed. In conclusion Arch Linux could be too bare and acraping for answer may need a lot of knowledge.

https://bbs.archlinux.org/viewtopic.php?id=250224


https://www.reddit.com/r/archlinux/comments/irk5mz/waiting_for_iwd_to_start/

https://wiki.archlinux.org/title/broadcom_wireless

https://www.reddit.com/r/Fedora/comments/i3b6m5/is_rpm_fusion_similar_to_the_aur_in_arch_are_the/

```bash
sudo systemctl start iwd
```

https://www.reddit.com/r/archlinux/comments/va4s48/cant_connect_to_any_network_in_iwctl/

https://wiki.archlinux.org/title/Network_configuration/Wireless

https://www.youtube.com/watch?v=3zqITuprlL8


https://www.youtube.com/watch?v=IkI7nNxsh7I

The problem currently it seems that the device list is empty and that the services are not available. even if called with `systemctl start dhcp@SERVCE`, which in this case is enp2s0f0.

https://stackoverflow.com/questions/34501611/systemd-apparently-not-finding-service-file

As stated in this blog post maybe partition thing so going to try new installation with same partition



## Creating a custom ISO
Once the OS has been set the way we intent to; there are a couple of options to create current ISO.



https://forum.archlabslinux.com/t/wifi-not-working-in-kde-archlabs/4757/13








## Referencess