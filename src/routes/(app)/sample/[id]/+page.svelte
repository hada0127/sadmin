<script lang="ts">
  import Field from '$components/atoms/Field.svelte';
  import Select from '$components/atoms/Select.svelte';
  import Input from '$components/atoms/Input.svelte';
  import Button from '$components/atoms/Button.svelte';
  import Toggle from '$components/atoms/Toggle.svelte';
  import Editor from '$components/atoms/Editor.svelte';

  import { pageTitle, pagePath } from '$store/layout/PageTitle';
  pageTitle.set('Sample Details');
  pagePath.set(
    `&gt; <a href="/sample/1">Sample</a> &gt; <a href="/sample/detail/1">Sample Details</a>`
  );

  import { page } from '$app/stores';
  let id = $page.params.id;
</script>

<div class="is-bordered">
  <div class="columns">
    <div class="column">
      <Field label="Title" required>
        <Input
          value="Stay in the middle! Like you a little! Don't want no riddle! (id:{id})"
          class="is-fullwidth"
        />
      </Field>
    </div>
  </div>
  <div class="columns">
    <div class="column is-3">
      <Field label="Name" required>
        <Input value="Minji" class="is-fullwidth" />
      </Field>
    </div>
    <div class="column is-3">
      <Field label="City">
        <Select>
          <option value="1">Seoul</option>
          <option value="2">Jeju</option>
        </Select>
      </Field>
    </div>
    <div class="column is-3">
      <Field label="E-mail">
        <Input value="minji@minji.com" class="is-fullwidth" />
      </Field>
    </div>
    <div class="column is-3">
      <Field label="Subscribe">
        <Toggle checked>Toggle</Toggle>
      </Field>
    </div>
  </div>

  <div class="columns">
    <div class="column">
      <Field label="Text" required>
        <Editor height="300" />
      </Field>
    </div>
  </div>
  <div class="columns">
    <div class="column is-3">
      <Field label="Regist Date">2022-12-27</Field>
    </div>
    <div class="column is-3">
      <Field label="Modify Date">2022-12-30</Field>
    </div>
  </div>
</div>
<div class="columns">
  <div class="column">
    <Button
      iconLeft="fas fa-list"
      on:click={() => {
        location.href = '/sample';
      }}>List</Button
    >
  </div>
  <div class="column has-text-right">
    <Button class="is-danger" iconLeft="fas fa-eraser">Delete</Button>
    <Button class="is-primary" iconLeft="fas fa-edit">Submit</Button>
  </div>
</div>

<style lang="scss"></style>
