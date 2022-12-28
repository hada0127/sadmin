<script lang="ts">
  import { page } from '$app/stores';
  import SearchBox from '$components/modules/SearchBox.svelte';
  import Pagination from '$components/atoms/Pagination.svelte';
  import Field from '$components/atoms/Field.svelte';
  import Select from '$components/atoms/Select.svelte';
  import Input from '$components/atoms/Input.svelte';
  import Button from '$components/atoms/Button.svelte';
  import { pageTitle, pagePath } from '$store/layout/PageTitle';
  pageTitle.set('Sample List');
  pagePath.set(`&gt; <a href="/sample">Sample List</a>`);

  //search
  let searchCity = $page.params.searchCity ? $page.params.searchCity : '1';
  let searchKeyword = $page.params.searchKeyword ? $page.params.searchKeyword : '';
  let searchReservation = $page.params.searchReservation ? $page.params.searchReservation : 'a';

  //paging
  let nowPage: number;
  let pageSize = 20;
  let totalArticles = 223;
  $: {
    nowPage = $page.url.searchParams.get('page')
      ? parseInt($page.url.searchParams.get('page') as string)
      : 1;
  }
</script>

<SearchBox>
  <div class="columns">
    <Field label="City" class="column is-3">
      <Select name="searchCity" bind:value={searchCity} class="is-fullwidth">
        <option value="1">Seoul</option>
        <option value="2">Jeju</option>
      </Select>
    </Field>
    <Field label="Keyword" class="column is-3">
      <Input
        name="searchKeyword"
        bind:value={searchKeyword}
        placeholder="Name, Hotel ..."
        class="is-fullwidth"
      />
    </Field>
    <Field label="Reservation" class="radio column is-3">
      <label>
        <input type="radio" name="searchReservation" bind:group={searchReservation} value="a" />
        Available
      </label>
      <label>
        <input type="radio" name="searchReservation" bind:group={searchReservation} value="u" />
        Unavailable
      </label>
    </Field>
  </div>
</SearchBox>
<table class="table is-fullwidth is-hoverable">
  <thead>
    <tr>
      <th class="has-text-centered">No</th>
      <th>Title</th>
      <th class="has-text-centered">Name</th>
      <th class="has-text-centered">Regist Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="has-text-centered">1</td>
      <td><a href="/sample/1">Stay in the middle! Like you a little! Don't want no riddle!</a></td>
      <td class="has-text-centered">Minji</td>
      <td class="has-text-centered"> 2022-12-27 </td>
    </tr>
    <tr>
      <td class="has-text-centered">2</td>
      <td><a href="/sample/2">Do you want somebody~ Like I want somebody</a></td>
      <td class="has-text-centered">Minji</td>
      <td class="has-text-centered"> 2022-12-28 </td>
    </tr>
    <tr>
      <td class="has-text-centered">3</td>
      <td><a href="/sample/3">Do you think about me now</a></td>
      <td class="has-text-centered">Minji</td>
      <td class="has-text-centered"> 2022-12-28 </td>
    </tr>
    <tr>
      <td class="has-text-centered">4</td>
      <td><a href="/sample/4">I want you so, want you, so say it ditto</a></td>
      <td class="has-text-centered">New Jeans</td>
      <td class="has-text-centered"> 2022-12-28 </td>
    </tr>
    <tr>
      <td class="has-text-centered">5</td>
      <td><a href="/sample/5">I just want you call my phone right now</a></td>
      <td class="has-text-centered">Minji</td>
      <td class="has-text-centered"> 2022-12-28 </td>
    </tr>
  </tbody>
</table>
<div class="has-text-right">
  <Button class="is-primary" iconLeft="fas fa-search">Regist</Button>
</div>
<Pagination bind:nowPage bind:pageSize bind:totalArticles />

<style lang="scss"></style>
