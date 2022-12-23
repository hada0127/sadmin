<script>
  import Input from '$components/atoms/Input.svelte';
  import Button from '$components/atoms/Button.svelte';
  import Field from '$components/atoms/Field.svelte';
  let userId = '';
  let userPassword = '';

  let passwordCheckResult = false;
  const passwordRegex = new RegExp(/^.{8,30}$/);
  const idRegex = new RegExp(/^[a-zA-Z][0-9a-zA-Z]{3,20}$/);
</script>

<div class="bg">
  <div class="wrap">
    <h1>System</h1>
    <Field label="User ID">
      <Input
        placeholder="Id"
        iconLeft="fas fa-id-card"
        match={idRegex}
        bind:value={userId}
        invalid="Alphabet, number, 4~20 characters"
        class="is-fullwidth"
      />
    </Field>
    <Field label="User Password">
      <Input
        type="password"
        placeholder="Password"
        iconLeft="fas fa-lock"
        match={passwordRegex}
        invalid="Please enter characters between 8 and 30 digits."
        class="is-fullwidth"
        bind:value={userPassword}
        bind:matchResult={passwordCheckResult}
      />
    </Field>
    <Button class="is-primary is-fullwidth">Sign In</Button>
  </div>
</div>

<style lang="scss">
  div.bg {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #fafafa;
    overflow: hidden;
  }
  div.wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    box-shadow: 1px 4px 8px 0px rgba(0, 0, 0, 0.05);
    padding: 40px;
    border-radius: 10px;
    background-color: #fff;
    h1 {
      text-align: center;
      font-size: 30px;
      font-weight: 700;
      padding-bottom: 20px;
    }
    div.field {
      height: 50px;
    }
  }
</style>
