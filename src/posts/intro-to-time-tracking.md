---
title: Intro to time tracking
description: "Overview of how to use metadata like: category, project, tags, etc. to describe your activities in productive and convenient way"
date: "2024-10-07"
tags:
  - productivity
  - clockify
  - time tracking
published: true
read_time: 7min
---

In 2022, I discovered the concept of time tracking and was immediately sold on it's promise of a tool that objectively measures your productivity and forces your mind to be intentional with actions taken in the moment. In this post, I will assume you are already convinced by the benefits time tracking brings; otherwise, you may listen to [Cortex podcast](https://www.relay.fm/cortex/44) to learn more (that's how I came across this idea).

I should clarify that I don't use automatic time tracking (that detects what site you visit or program you launch). I gave it a try and it produces data that isn't useful. It also contradicts the utility of time tracking as a tool in mindful decision-making.

## Beginner mistakes

After 2 months of getting used to time tracking, I decided to record my whole day: work, relaxation, and everything in between (except for night sleep). However, when doing that, it's easy to overdo:
You can't log every little detail, otherwise time tracking will become more important than the action itself, distracting you from things that matter. Moreover, it will become an unbearable chore that will discourage you from keeping this habbit. Still, as a first instinct you want to do it, because if you are the kind of person that gets interested in time tracking, then you want to record all the information you can. As with everything in life you have to strike a balance, data must be detailed enough to allow for the generation of useful reports but also easy to track and structured in a way that prevents confusion (e.g. same action under different labels).

Another aspect that makes time tracking difficult at the beginning is the amount of options that most tools give you when it comes to how to describe your actions. Including but not limited to team, category, project, tags, description, and status (billable/non-billable). During almost 3 years of my time tracking I changed my _taxonomy_ (classification structure) multiple times, ironing out the details. **That's why I would like to share here my conclusions so you can avoid redesigning your system multiple times**

## Basics

My choice for time tracking is [Clockify](https://clockify.me/), as it has a very generous free tier and all the features that I need. All examples will be based on this application but these ideas should apply to other solutions as well.

Okay, so, before discussing taxonomy let's set some ground rules:

- **Decide on one language:** I made the mistake of using English everywhere except for some descriptions and it slowed down creation and search of entries by adding pointless questions, e.g., "Did I write titles for movies in English or my native language?". Stick to one, even if it sometimes feels weird, consistency pays off.

- **Pick a color scheme:** An intuitive color system aids in interpreting charts by making you associate certain emotions with different colors. If you lack an idea where to start, my system uses a hue scale to assign meaning to entries: colder colors mean desired activities (work, programming, hobbies, etc.) while warmer mean suboptimal ones (gaming, browsing the internet, etc.). <br> <br> ![Example dashboard with my system](/images/intro-to-time-tracking/colors.png)

- **Start small:** at the beginning track only your most productive time: work, side projects, etc. For many people that will be all they need to see positive change that time tracking can bring to their lives. And if you decide to record more, the guidance from this post should make the transition easy.

## Taxonomy

Ground rules set, here I will go into the details of setting up a classification system. However, before that, I have to explain how I use my time tracker so you can better understand my design decisions. My goal is to write 2 to 4 letters into the `description` box and select one of the suggested entries. Fortunately, this search takes into account all fields: `project`, `category`, `description`, and even `tags`. Yet, there is a limit of available suggestions (for Clockify it's last 250 unique entries from the previous 60 days, which for me translates roughly to a week of data). After taking all of this into account, entries should repeat as much as possible but also be distinguishable from each other for a quick search.

![Example of autocomplete](/images/intro-to-time-tracking/autocomplete.png)

### Project

Depending on workspace settings, `project` can also be called `location` or `job`. This is the most basic attribute for your entries, it sets the context of your actions and determines their **<span style="color: #ef4444">c</span><span style="color: #f97316">o</span><span style="color: #facc15">l</span><span style="color: #22c55e">o</span><span style="color: #22d3ee">r</span>**. Use only `project` at the beginning, optionally `description` if you require additional details. Skip `categories` and `tags` for now—`categories` can easily be added later, and `tags` can be challenging to use correctly.

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

A freeform field where you can write anything. It's best used to represent specific action as "what?" happened. Other taxonomy should describe circumstances like "where?", "why?" or "with whom?". Also `description` is a suitable place to put a task identifier if you use a task manager.

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

#### Antipatterns

<ul>
<li>

**Same action under a different label:** Because you can write anything it's the most common place to introduce the same action under different labels, e.g.

```yaml
project: must-do
description: chores
```

and

```yaml
project: must-do
description: cleaning
```

are the same thing! However, this happens rarely if this entry is used often as autocomplete fills it for us. Otherwise one possible solution is to create a `project` with that `description`

```yaml
project: chores
```

and if you want to associate this project with others as a "must-do" use `category` for that:

```yaml
category: must-do
project: chores
```

</li>

<li>

**Grouping with description:** Depending on your circumstances you may be tempted to do something like this:

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

It's okay if used rarely for short-lived events but I would discourage using it often, it's better to have predefined `projects` to choose from than to try to remember these, especially if there is big time gap between usage of specific groups, making it easier to introduce mistakes.

</li>
</ul>

### Category

Depending on workspace settings, `category` can also be called `client` or `department`. This is the broadest descriptor of your actions, as it can contain multiple `projects`, useful to mark the common domain, for example:

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

However, for many entries project and description are sufficient to describe all the details that you need. In such cases you have 2 options, leave the project with no category or create a category with the same name e.g.:

```yaml
category: programming
project: programming
description: portfolio page
```

I would suggest picking the second solution as in the future you may feel the need to move `description` to `project` and input more data in its place:

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

These are in my opinion the most difficult to use, they allow for great granularity and can express almost any idea but quickly become annoying to add to your entries. Same as `description` they can be shared between activities from different `categories` and `projects` but have one unique feature: one entry can have multiple `tags` simultaneously. However this freedom makes them challenging to use, it's easy to forget or add them by accident. By accident? Yes, unfortunately Clockify's autocomplete ignores `tags` so different entries are merged as one:

![How tags break autocomplete](/images/intro-to-time-tracking/autocomplete-tags.png)

Because of that using tags forces you to often correct autocomplete which is extremely annoying and is the reason why I almost don't use them.

#### Example usage

```yaml
category: entertainment
project: movie
description: WALL-E
tags: animated
```

If you intend to use many tags, especially from different domains, it's convenient to group them with naming convention for easier search e.g.: `group/name` or `group:name`

```yaml
category: people
project: meeting
description: pizza
tags: people/jack, people/chris, people/eve
```

#### Antipatterns

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

This reasoning applies if these tags are exclusive (they can't occur at the same entry) and only this `project` uses them.

</li>

<li>

**Using same `tags` for given `project`:** Given such entry

```yaml
category: programming
project: portfolio page
tags: svelte, js, scss
```

doesn't data about used technologies exist already in the code repository? If these `tags` never change for a given `project` and this information is available somewhere else, they are only unnecessary clutter.

PS. If you are a developer and wish to have detailed and **automatic** tracking of time spent on programming check out [Wakatime](https://wakatime.com)

</li>
</ul>

## Summary

When designing such a system it is useful to think with one SOLID programming rule in mind, the open/closed principle, that states:

> software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification

In the time tracking context, I interpret it in the following way: entries should be open for adding more detail, without the need to edit existing entries to match the new standard. This is what you can hopefully achieve when using design system described in this article. However, at the very beginning don't dwell on everything I've written, experiment and see what works for you.

If you have questions or wish to share your opinion, feel free to contact me. I would love to know your insights.
