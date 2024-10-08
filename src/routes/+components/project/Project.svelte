<script context="module" lang="ts">
  let toShow = 0;
</script>

<script lang="ts">
  import { technologies, type Project } from "$lib/projects";
  import { ImageSlider } from "../.";
  import github from "$lib/images/github.svg?raw";
  import { afterUpdate, onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { page } from "$app/stores";

  export let imageSlideDelay: number;
  export let project: Project;

  function showIfVisible() {
    if (scrolledTo) return;

    const rect = element.getBoundingClientRect();

    if (rect.top + visibleHeightToShow < windowInnerHeight) {
      scrolledTo = true;

      setTimeout(() => {
        visible = true;
        toShow -= 1;
      }, toShow * 150);

      toShow += 1;
    }
  }

  const duration = Math.random() * 2000 + 4000;
  /** Value in px */
  const visibleHeightToShow = 100;
  let scrolledTo = false;
  let visible = false;
  let imageSlider: any;
  let imageSliderHeight = 300;
  let element: HTMLDivElement;
  let windowInnerHeight: number;

  $: selected = $page.url.hash === `#${project.id}`;

  onMount(() => {
    imageSliderHeight = imageSlider.offsetWidth / project.imagesAspectRatio;
    showIfVisible();
  });

  afterUpdate(() => {
    if (imageSlider) {
      imageSliderHeight = imageSlider.offsetWidth / project.imagesAspectRatio;
    }
  });
</script>

<svelte:window
  on:scroll={() => {
    showIfVisible();
  }}
  bind:innerHeight={windowInnerHeight}
/>

{#key visible}
  <div
    id={project.id}
    class="project"
    class:project--active={selected}
    style:--visible={visible ? "visible" : "hidden"}
    in:fly={{ x: -200, duration: 800 }}
    bind:this={element}
  >
    <h3 class="project__title">{project.name}</h3>
    <div class="project__icons">
      {#if project.urls.yt}
        <a href={project.urls.yt} target="_blank" rel="noopener">
          <iconify-icon
            icon="mdi:youtube"
            class="project__icons__icon project__icons__icon--yt"
          />
        </a>
      {/if}
      {#if project.urls.github}
        <a
          class="project__icons__icon project__icons__icon--github"
          href={project.urls.github}
          target="_blank"
          rel="noopener"
        >
          {@html github}
        </a>
      {/if}
      {#if project.urls.site}
        <a href={project.urls.site} target="_blank" rel="author noopener">
          <iconify-icon icon="mdi:open-in-new" class="project__icons__icon" />
        </a>
      {/if}
    </div>
    <div
      class="project__images"
      style:--height="{imageSliderHeight}px"
      bind:this={imageSlider}
    >
      <ImageSlider
        --object-fit="cover"
        images={project.images}
        {duration}
        delay={imageSlideDelay}
      />
    </div>
    <div class="project__description">
      {project.description}
    </div>
    <div class="project__tech">
      {#each project.technologies as technology}
        <img
          class="project__tech__img"
          alt={technology}
          src={technologies[technology]}
        />
      {/each}
    </div>
  </div>
{/key}

<style lang="scss">
  .project {
    display: grid;
    grid-template:
      "title icons" 3rem
      "slider slider" 1fr
      "description description" auto
      "tech tech" auto / auto 1fr;
    gap: 10px;
    padding: 10px 20px 20px;
    color: white;
    visibility: var(--visible);
    background: var(--background);
    scroll-margin-top: calc(6rem + 0.5rem);

    &--active {
      box-shadow: 5px 5px 20px var(--color-theme-3);
    }

    &__title {
      align-self: center;
      margin: 0;
      font-size: 1.5rem;

      @media (max-width: 850px) {
        font-size: 1.3rem;
      }
    }

    &__icons {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-self: end;

      &__icon {
        font-size: 1.8rem;
        color: white;
        transition: color 0.5s;

        &:hover {
          color: var(--color-theme-1);
          transition: color 0.8s;
        }

        &--github {
          width: 2rem;
        }

        &--yt {
          font-size: 2.3rem;
        }
      }
    }

    &__images {
      grid-area: slider;

      height: var(--height);
      transition: height 0.5s;
    }

    &__description {
      grid-area: description;
      margin-top: 10px;
      font-size: 1.05rem;
    }

    &__tech {
      display: flex;
      flex-wrap: wrap;
      grid-area: tech;
      gap: 10px;
      align-items: end;
      align-self: end;
      height: fit-content;

      &__img {
        height: 30px;
      }
    }
  }
</style>
