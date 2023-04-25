<template>
  <div id="app">
    <div class="page">
      <header class="header">
        <card-sectioned footerBackground="gray" hasGutter>
          <template #cardBody>
            <h1 class="header__title">Donation</h1>
          </template>

          <template #cardFooter>
            <card-row>
              <card-col>
                <base-input
                  type="search"
                  placeholder="Search"
                  hasIcon="search"
                  sizeHuge
                />
              </card-col>
              <card-col>
                <select-input
                  isSimple
                  :options="selectOptions"
                  v-model="selectedSelectOption"
                />
              </card-col>
            </card-row>
          </template>
        </card-sectioned>
      </header>

      <main class="content">
        <div class="content__main">
          <card-sectioned footerBackground="gray" hasGutter>
            <template #cardBody>
              <card-row spaceBetween>
                <card-col>
                  <donation-info>
                    <template #title>
                      <text-with-icon iconPrepend="dollar" textSize="small">
                        Donation
                      </text-with-icon>
                    </template>
                  </donation-info>
                </card-col>

                <card-col>
                  <donation-id :value="donationId" />
                </card-col>
              </card-row>
            </template>

            <template #cardFooter>
              <card-row wrap>
                <card-details title="Status">
                  <template #cardDetailValue>
                    <text-with-icon iconPrepend="check-circle" colorGreen>
                      Succeeded
                    </text-with-icon>
                  </template>
                </card-details>

                <card-details title="Supporter">
                  <template #cardDetailValue>
                    <base-link url="#" label="Charlotte Ann" />
                  </template>
                </card-details>

                <card-details title="Campaign">
                  <template #cardDetailValue>
                    <base-link url="#" label="Heart walk" />
                  </template>
                </card-details>
              </card-row>
            </template>
          </card-sectioned>

          <card-sectioned footerBackground="yellow">
            <template #cardBody>
              <base-form />
            </template>

            <template #cardFooter>
              <buttons-list>
                <template>
                  <buttons-list-item>
                    <custom-button primary> Save Changes </custom-button>
                  </buttons-list-item>

                  <buttons-list-item>
                    <custom-button secondary> Cancel </custom-button>
                  </buttons-list-item>
                </template>
              </buttons-list>
            </template>
          </card-sectioned>
        </div>

        <aside class="content__aside">
          <aside-menu :menuItems="asideMenuItems" />
        </aside>
      </main>
    </div>
  </div>
</template>

<script>
import CardSectioned from "./components/Card";
import CardDetails from "./components/Card/CardDetails";
import CardRow from "./components/Card/CardRow";
import CardCol from "./components/Card/CardCol";
import SelectInput from "./components/Select";
import BaseInput from "./components/Input";
import BaseForm from "./components/Form";
import BaseLink from "./components/Link";
import TextWithIcon from "./components/TextWithIcon";
import DonationInfo from "./components/Donation/DonationInfo";
import DonationId from "./components/Donation/DonationId";
import AsideMenu from "./components/AsideMenu";
import CustomButton from "./components/Button";
import ButtonsList from "./components/Button/ButtonsList";
import ButtonsListItem from "./components/Button/ButtonsListItem";

export default {
  name: "App",
  components: {
    CardSectioned,
    CardDetails,
    CardRow,
    CardCol,
    SelectInput,
    BaseInput,
    BaseForm,
    BaseLink,
    TextWithIcon,
    DonationInfo,
    DonationId,
    AsideMenu,
    CustomButton,
    ButtonsList,
    ButtonsListItem,
  },
  data() {
    return {
      donationId: "TYNY694Y",
      selectOptions: [
        {
          value: "All statuses",
          title: "All statuses",
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
      asideMenuItems: [
        {
          label: "Change amount",
          icon: "repeat",
          id: "0",
        },
        {
          label: "Change payment method",
          icon: "wallet",
          id: "1",
        },
        {
          label: "Change date",
          icon: "calendar",
          id: "2",
        },
        {
          label: "Cancel recurring",
          icon: "x-circle",
          id: "3",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
