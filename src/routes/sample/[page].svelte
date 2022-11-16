<script>
  import Layout from '@components/templates/Layout.svelte';
  import SearchBox from '@components/modules/SearchBox.svelte';
  import Pagination from '@components/atoms/Pagination.svelte';
  import Field from '@components/atoms/Field.svelte';
  import Select from '@components/atoms/Select.svelte';
  import Input from '@components/atoms/Input.svelte';
  import { params } from '@roxi/routify';

  let pageTitle = 'Sample List';
  let pagePath = `&gt; <a href="/sample">Sample List</a>`;

  let nowPage = $params.page ? $params.page : 1;
  let searchCity = $params.searchCity ? $params.searchCity : '1';
  let searchKeyword = $params.searchKeyword ? $params.searchKeyword : '';
  let searchReservation = $params.searchReservation
    ? $params.searchReservation
    : 'a';
</script>

<Layout {pageTitle} {pagePath}>
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
          <input
            type="radio"
            name="searchReservation"
            bind:group={searchReservation}
            value="a"
          />
          Available
        </label>
        <label>
          <input
            type="radio"
            name="searchReservation"
            bind:group={searchReservation}
            value="u"
          />
          Unavailable
        </label>
      </Field>
    </div>
  </SearchBox>
  <div slot="table">s</div>
  <div slot="buttonBox">s</div>
  <Pagination {nowPage} />
</Layout>

<style lang="scss"></style>
