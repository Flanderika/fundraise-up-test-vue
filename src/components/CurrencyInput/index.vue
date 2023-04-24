<template>
  <div class="currency-input">
    <div class="currency-input__input input input--size-normal">
      <div class="input__wrap">
        <input class="input__field" type="text" />
      </div>
    </div>

    <div class="currency-input__select select select--size-small">
      <div class="select__wrap">
        <select class="select__input" name="currency-input">
          <option class="select__input-option" value="USD">USD</option>
          <option class="select__input-option" value="EUR">EUR</option>
          <option class="select__input-option" value="RUB">RUB</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrencyInput",
};
</script>
