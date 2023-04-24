<template>
  <form class="form" action="">
    <base-tabs :tabs="tabs" :uniqueId="'form-tabs'" v-model="activeTabIndex">
      <template v-slot:tab1>
        <div>
          <div id="content1">
            <form-group centered>
              <template #label>Designation</template>
              <form-list>
                <form-list-item>
                  <select-input
                    sizeBig
                    :options="selectOptions"
                    v-model="selectedSelectOption"
                  />
                </form-list-item>
              </form-list>
            </form-group>

            <form-group centered>
              <template #label>Goal</template>
              <form-list>
                <form-list-item>
                  <currency-input />
                </form-list-item>
              </form-list>
            </form-group>

            <form-group>
              <template #label>Default Amount</template>
              <form-list>
                <form-list-item>
                  <radio-input
                    v-model="selectedRadio"
                    :options="radioOptions"
                    uniqueId="Radios1"
                  />
                </form-list-item>
              </form-list>
            </form-group>

            <form-group>
              <template #label>Border size</template>
              <form-list>
                <form-list-item>
                  <checkbox-input
                    v-model="selectedCheckboxes"
                    :options="checkboxOptions"
                    uniqueId="Checkboxes1"
                  />
                </form-list-item>
              </form-list>
            </form-group>

            <form-group>
              <template v-if="isDesktop" #label>Border size</template>
              <form-list>
                <form-list-item>
                  <RangeSlider
                    v-model="borderSize"
                    sizeNormal
                    :min="5"
                    :max="50"
                  >
                    <template v-if="isAdaptive" #tl> Border size </template>

                    <template v-if="isAdaptive" #tr
                      >{{ borderSize }}px
                    </template>

                    <template v-if="isDesktop" #mr>
                      {{ borderSize }}px
                    </template>
                  </RangeSlider>
                </form-list-item>
              </form-list>
            </form-group>

            <form-group>
              <template v-if="isDesktop" #label> Border radius </template>
              <form-list>
                <form-list-item>
                  <RangeSlider v-model="borderRadius" sizeNormal>
                    <template v-if="isAdaptive" #tl> Border radius </template>

                    <template v-if="isAdaptive" #tr>
                      {{ borderRadius }}px
                    </template>

                    <template v-if="isDesktop" #mr>
                      {{ borderRadius }}px
                    </template>
                  </RangeSlider>
                </form-list-item>
              </form-list>
            </form-group>
          </div>
        </div>
      </template>
      <template v-slot:tab2>
        <div>
          <div id="content2">
            <p>Это контент второй вкладки</p>
          </div>
        </div>
      </template>
      <template v-slot:tab3>
        <div>
          <div id="content3">
            <p>Это контент третьей вкладки</p>
          </div>
        </div>
      </template>
    </base-tabs>
  </form>
</template>

<script>
import { windowSize } from "../../mixins";

import BaseTabs from "../Tabs";
import SelectInput from "../Select";
import CurrencyInput from "../CurrencyInput";
import RadioInput from "../RadioInput";
import CheckboxInput from "../CheckboxInput";
import RangeSlider from "../RangeSlider";
import FormGroup from "../Form/FormGroup";
import FormList from "../Form/FormList";
import FormListItem from "../Form/FormListItem";

export default {
  name: "BaseForm",
  mixins: [windowSize],
  components: {
    BaseTabs,
    SelectInput,
    CurrencyInput,
    RadioInput,
    CheckboxInput,
    RangeSlider,
    FormGroup,
    FormList,
    FormListItem,
  },
  data() {
    return {
      borderSize: 10,
      borderRadius: 15,
      activeTabIndex: 0,
      tabs: [
        { title: "Вкладка 1", name: "tab1" },
        { title: "Вкладка 2", name: "tab2" },
        { title: "Вкладка 3", name: "tab3" },
        { title: "Вкладка 3", name: "tab4" },
        { title: "Вкладка 3", name: "tab5" },
        { title: "Вкладка 3", name: "tab6" },
        { title: "Вкладка 3", name: "tab7" },
        { title: "Вкладка 3", name: "tab8" },
        { title: "Вкладка 3", name: "tab9" },
        { title: "Вкладка 3", name: "tab10" },
        { title: "Вкладка 3", name: "tab11" },
        { title: "Вкладка 3", name: "tab12" },
        { title: "Вкладка 3", name: "tab13" },
      ],
      radioOptions: [
        {
          title: "Match Checkout Setting",
          value: "Match Checkout Setting",
          id: "radio1",
        },
        {
          title: "Customize",
          value: "Customize",
          id: "radio2",
        },
      ],
      selectedRadio: null,
      checkboxOptions: [
        {
          title: "Allow donor to change default currency",
          value: "Allow donor to change default currency",
          id: "checkbox1",
        },
      ],
      selectedCheckboxes: [],
      selectOptions: [
        {
          value: "Match Checkout Setting",
          title: "Match Checkout Setting",
        },
        {
          value: "Other option",
          title: "Other option",
        },
        {
          value: "what have i done?",
          title: "what have i done?",
        },
      ],
      selectedSelectOption: null,
    };
  },
};
</script>
