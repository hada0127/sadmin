<script lang="ts">
  import { page } from '$app/stores';
  import SearchBox from '$components/modules/SearchBox.svelte';
  import Pagination from '$components/atoms/Pagination.svelte';
  import Field from '$components/atoms/Field.svelte';
  import Select from '$components/atoms/Select.svelte';
  import Input from '$components/atoms/Input.svelte';
  import { pageTitle, pagePath } from '$store/layout/PageTitle';
  pageTitle.set('Sample List');
  pagePath.set(`&gt; <a href="/sample">Sample List</a>`);

  let nowPage: number = $page.params.page ? parseInt($page.params.page) : 1;
  let searchCity = $page.params.searchCity ? $page.params.searchCity : '1';
  let searchKeyword = $page.params.searchKeyword ? $page.params.searchKeyword : '';
  let searchReservation = $page.params.searchReservation ? $page.params.searchReservation : 'a';
</script>

<h1>asdf</h1>
<h2>123asdf</h2>

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
<div>s</div>
<div>s</div>
<Pagination bind:page={nowPage} />

<style lang="scss"></style>
