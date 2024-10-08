<script lang="ts">
  import { projects } from "$lib/projects";
  import { experience } from "$lib/experience";
  import { onMount } from "svelte";
  import { Timeline, Masonry, Project, Footer, Header } from "./+components";

  const visibleHeightToActiveSection = 100;
  let sections: (HTMLElement | undefined)[] = [];
  let activeSectionId: string | undefined;
  let windowInnerHeight: number;
  let projectsSection: HTMLElement;
  let experienceSection: HTMLElement;
  let contactSection: HTMLElement;

  onMount(() => {
    sections = [contactSection, experienceSection, projectsSection];
    activeSectionId = getActiveSection(sections)?.id;
  });

  function getActiveSection(sections: (HTMLElement | undefined)[]) {
    for (const section of sections) {
      if (!section) {
        continue;
      }

      const rect = section.getBoundingClientRect();

      if (rect.top + visibleHeightToActiveSection < windowInnerHeight) {
        return section;
      }
    }

    return null;
  }
</script>

<svelte:head>
  <title>Marcin Skic</title>
  <meta
    name="description"
    content="With 4 years of programming experience, which includes game and web development, along with a BSE in CS, I'm prepared to tackle a diverse range of projects."
  />
  <meta property="og:image" content="/images/previews/main.png" />
  <meta property="og:url" content="https://skic.me" />
</svelte:head>
<svelte:window
  bind:innerHeight={windowInnerHeight}
  on:scroll={() => {
    activeSectionId = getActiveSection(sections)?.id;
  }}
/>

<Header --font-size="4rem" {activeSectionId} />
<main>
  <section id="projects" class="projects" bind:this={projectsSection}>
    <Masonry list={projects} gap={8} let:item>
      <Project project={item} imageSlideDelay={Math.random() * 3000 - 1500} />
    </Masonry>
  </section>
  <section id="experience" class="experience" bind:this={experienceSection}>
    <Timeline experienceList={experience} />
  </section>
</main>
<Footer />

<style lang="scss">
  main {
    box-sizing: border-box;
    display: grid;
    flex: 1;
    flex-direction: column;

    width: 100%;
    margin: 0 auto;
  }

  section {
    scroll-margin-top: var(--nav-height);
  }

  .projects {
    padding: 0.5rem;
  }

  .experience {
    display: grid;
    place-items: center;
    padding-top: 6rem;
    margin-bottom: 5vh;
  }
</style>
