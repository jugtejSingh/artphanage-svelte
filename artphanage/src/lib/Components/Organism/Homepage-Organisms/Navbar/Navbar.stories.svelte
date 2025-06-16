<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Navbar from './Navbar.svelte';

  const { Story } = defineMeta({
    title: 'Organism/Navbar',
    component: Navbar,
    tags: ['autodocs'],
  });
</script>

<Story name="Primary" args={{}} />

