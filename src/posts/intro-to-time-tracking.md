---
title: Intro to time tracking
description: "Overview of how to use metadata such as categories, projects, tags, etc., to describe your activities in productive and convenient way"
date: "2024-10-07"
tags:
  - productivity
  - clockify
  - time tracking
published: true
---

In 2022, I discovered the concept of time tracking and was immediately sold on its premise - a tool that objectively measures your productivity and forces your mind to be intentional with actions taken in the moment. In this post, I will assume you are already convinced by the benefits of time tracking; otherwise, you may listen to [Cortex podcast](https://www.relay.fm/cortex/44) to learn more (that's how I came across this idea).

I should clarify that I don't use automatic time tracking (which detects what site you visit or program you launch). I gave it a try and it produces data that isn't useful. It also contradicts the utility of time tracking as a tool in mindful decision-making.

## Beginner mistakes

After 2 months of getting used to time tracking, I decided to record my whole day: work, relaxation, and everything in between (except for night sleep). When doing that though, it's quite common to overdo:
You can't log every little detail, otherwise time tracking will become more important than the action itself, distracting you from things that matter. Moreover, it will become an unbearable chore that will discourage you from keeping this habit. Still, as a first instinct you want to do it, because if you are the kind of person that gets interested in time tracking, you want to record all the information you can. As with everything in life you have to strike a balance, data must be detailed enough to allow for the generation of useful reports but also easy to track.

Another aspect that makes time tracking difficult is the amount of options that most tools give you when it comes to describing your actions. Including but not limited to teams, categories, projects, tags, and descriptions. Over almost 3 years of my time tracking I changed my _taxonomy_ (classification structure) many times, ironing out the details. **That's why I would like to share my conclusions, which may help you avoid redesigning your system multiple times**

## Basics

My choice for time tracking is [Clockify](https://clockify.me/), as it has a generous free tier and all the features I need. All examples will be based on this application but these ideas should apply to other solutions as well.

Let's set some ground rules before discussing taxonomy:

- **Decide on one language:** I made the mistake of using English everywhere except for some descriptions. It slowed down the creation and search of entries by adding pointless questions, such as, "Did I write titles for movies in English or my native language?". Stick to one, even if it sometimes feels weird, consistency pays off.

- **Pick a color scheme:** An intuitive color system aids in interpreting charts by making you associate certain emotions with different colors. If you lack an idea where to start, my system uses a hue scale to assign meaning to entries: colder colors signify desired activities (work, programming, hobbies, etc.) while warmer signify suboptimal ones (gaming, browsing the internet, etc.). <br> <br> ![Example dashboard with my system](/images/intro-to-time-tracking/colors.png)

- **Start small:** at the beginning track only your most productive activities: work, side projects, etc. For many people that will be all they need to see a positive change that time tracking can bring into their lives. And if you decide to record more, the system described in this article is designed in a way that makes such transition smooth.

## Taxonomy

With ground rules set, let's dive into the details of setting up a classification system. Before that though, I have to explain how I use my time tracker so you can better understand my design decisions. My goal is to type 2 to 4 letters into the `description` box and select one of the suggested entries. Fortunately, this search takes all fields into account: `project`, `category`, `description`, and even `tags`. Yet, there is a limit of available suggestions (for Clockify it's the last 250 unique entries from the previous 60 days, which for me translates roughly to a week of data). After taking all of this into account, entries should be repeated as much as possible but also be distinguishable from each other for quick searching.

![Example of autocomplete](/images/intro-to-time-tracking/autocomplete.png)

### Project

Depending on workspace settings, `project` can also be called `location` or `job`. This is the most basic attribute for your entries, it sets the context of your actions and determines their **<span style="color: #ef4444">c</span><span style="color: #f97316">o</span><span style="color: #facc15">l</span><span style="color: #22c55e">o</span><span style="color: #22d3ee">r</span>**. Use only `projects` at the beginning, optionally `description` if you require more details. Skip `categories` and `tags` for now—`categories` can easily be added later, and `tags` are challenging to use correctly.

#### Example usage

```yaml
project: portfolio page
```

```yaml
project: movie
```

```yaml
project: personal
```

```yaml
project: meeting
```

### Description

A freeform field where you can write anything. It's best used to represent specific action as "what?" happened. Other taxonomy should describe circumstances like "where?", "why?" or "with whom?". `Description` is also a suitable place to put a task identifier if you use a task manager.

#### Example usage

```yaml
project: portfolio page
description: task-98
```

```yaml
project: movie
description: WALL-E
```

```yaml
project: personal
description: meditation
```

```yaml
project: meeting
description: pizza
```

#### Anti-patterns

<ul>
<li>

**Same action under different labels:** `Description` is the most common place to introduce the same action under different labels, because you can enter anything here. For example:

```yaml
project: must-do
description: chores
```

and

```yaml
project: must-do
description: cleaning
```

are the same thing! This rarely happens when entry occurs often, as autocomplete fills it for us. Otherwise, one possible solution is to create a `project` with that `description`

```yaml
project: chores
```

and if you want to associate this `project` with others as a "must-do" use `category` for that:

```yaml
category: must-do
project: chores
```

</li>

<li>

**Grouping with `description`:** Depending on your circumstances you may be tempted to do something like this:

```yaml
category: work
project: job-hunting
description: companyX:interview
```

```yaml
category: work
project: job-hunting
description: companyX:solving test
```

It's okay if used rarely for short-lived events, but I would discourage using it often. It's better to have predefined `projects` to choose from than trying to remember words used to define groups (companyX in this example). Especially if there is considerable time gap between usage of them, which increases the probability of making a mistake as autocomplete won't help.

</li>

<li>

**Using the same `description` in different `projects`:** I like to do this:

```yaml
category: work
project: companyX
description: management
```

```yaml
category: programming
project: harmonify
description: management
```

but there is a loss in convenience. Now, when you type `mana` into Clockify's input, you will get at least 2 options, and they are **not** sorted by which one was used most recently. Because of that, every time you enter this entry, you have to pause for a second to decide which suggestion to pick. And trust me, such microdecisions can wear you off quickly, so you may want to avoid this pattern.

</li>
</ul>

### Category

Depending on workspace settings, `category` can also be called `client` or `department`. This is the broadest descriptor of your actions, as it can contain multiple `projects`, which is useful to mark the common domain, for example:

```yaml
category: entertainment
project: movie
```

```yaml
category: entertainment
project: series
```

```yaml
category: entertainment
project: gaming
```

or

```yaml
category: work
project: company X
```

```yaml
category: work
project: company Y
```

For many entries `project` and `description` are sufficient to describe the necessary details. In such cases you have 2 options, leave the `project` with no `category` or create a `category` with the same name:

```yaml
category: programming
project: programming
description: portfolio page
```

I would suggest picking the second solution as in the future you may feel the need to move `description` to `project` and put more data in its place:

```yaml
category: programming
project: portfolio page
description: task-418
```

#### Example usage

```yaml
category: programming
project: portfolio page
description: task-98
```

```yaml
category: entertainment
project: movie
description: WALL-E
```

```yaml
category: personal
project: personal
description: meditation
```

```yaml
category: people
project: meeting
description: pizza
```

### Tags

These are in my opinion the most difficult to use. They allow for great granularity and can express almost any idea but quickly become annoying to manage. Just like `description`, they can be shared between activities from different `categories` and `projects` but have one unique feature: one entry can have multiple `tags` simultaneously.

This freedom makes them challenging to use - it's easy to omit or add them by accident. Add by accident? Yes, unfortunately, Clockify's autocomplete ignores `tags` - displays only the newest of multiple entries if `tags` are the only discriminant:

![How tags break autocomplete](/images/intro-to-time-tracking/autocomplete-tags.png)

Because of that using `tags` forces you to often correct autocomplete which is extremely annoying and is the reason why I almost don't use them.

#### Example usage

```yaml
category: entertainment
project: movie
description: WALL-E
tags: animated
```

If you intend to use many `tags`, especially from different domains, it's convenient to group them with naming convention for easier search. For example, `group/name` or `group:name`

```yaml
category: people
project: meeting
description: pizza
tags: people/jack, people/chris, people/eve
```

#### Anti-patterns

<ul>
<li>

**Using one `tag` per entry for given `category`:** For example

```yaml
project: entartainment
tags: movie
```

and

```yaml
project: entartainment
tags: series
```

should be replaced with

```yaml
category: entartainment
project: movie
```

and

```yaml
category: entartainment
project: series
```

This reasoning applies if these `tags` are exclusive (they can't occur at the same entry) and only this `project` uses them.

</li>

<li>

**Using same `tags` for given `project`:** Given such entry

```yaml
category: programming
project: portfolio page
tags: svelte, js, scss
```

doesn't data about used technologies exist already in the code repository? If these `tags` never change for a given `project` and this information is available somewhere else, they are only unnecessary clutter.

PS. If you are a developer and wish to have detailed and **automatic** tracking of time spent on programming check out [WakaTime](https://wakatime.com)

</li>
</ul>

## Summary

When designing such a system it is useful to think with one SOLID programming rule in mind, the open/closed principle, that states:

> software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification

In the time tracking context, I interpret it in the following way: entries should be open for adding more detail, without the need to edit existing entries to match the new standard. This is what you can hopefully achieve when using the design system described in this article. Just don't dwell on this idea at the beginning, this is the time where you should experiment and see what works for you, breaking stuff is part of the process at that point. Whether you are a beginner or an experienced time tracker I hope this post helped you in some way and wish you good luck in this endeavor!

If you have questions or wish to share your opinion, feel free to contact me. I would love to know your insights.
