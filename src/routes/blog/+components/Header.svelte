<script lang="ts">
  export let previousPage = {
    text: "Home",
    href: "/",
  };
  export let title = "Blog";
</script>

<header class="header">
  <nav>
    <ul class="links">
      <li>
        <a class="links__link" href={previousPage.href}>
          <iconify-icon icon="mdi:chevron-left" class="links__link__icon" />
          <span>{previousPage.text}</span>
        </a>
      </li>
    </ul>
  </nav>
  {#if title}
    <h1 class="title">{title}</h1>
  {/if}
</header>

<style lang="scss">
  .header {
    display: grid;
    grid-template-columns: 160px 1fr 160px;
    align-items: center;
    justify-self: center;
    width: 100%;
    max-width: 1400px;
    height: 4rem;
    margin-top: 0.5rem;
  }

  .links {
    padding-left: 1rem;
    list-style: none;

    &__link {
      display: flex;
      gap: 1px;
      align-items: center;
      font-size: 1.2rem;
      font-weight: 500;
      color: white;
      transition: color 0.2s;

      &__icon {
        margin-bottom: 2px;
        font-size: 1.5em;
      }

      &:hover {
        color: var(--color-theme-1);
      }
    }
  }

  .title {
    margin: 0;
  }
</style>
