<template>
  <form class="create-infopanel" @submit.prevent="createNewInfo" :class="{ '--exceeded': newInfoCharacterCount > 150 }">
    <label for="new-info"><strong>New Info</strong> ({{ newInfoCharacterCount }}/150)</label>
    <textarea id="new-info" rows="4" v-model="state.newInfoContent"/>

    <div class="create-info-submit">
      <div class="create-infotype">
       
          <option :value="option.value" v-for="(option, index) in state.infoTypein" :key="index">
            {{ option.name }}
          </option>
       
      </div>

      <button>
        Add Infos
      </button>
    </div>
  </form>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: "CreateInfoPanel",
  setup(index2, postcont) {
    const state = reactive({ //With “reactive()” function you need to collect all properties in one object
      newInfoContent: '',
      selectedInfoType: 'New post',
    // upload images, but not ready yet.

    })

    const newInfoCharacterCount = computed(() => state.newInfoContent.length) //A computed property is used to declaratively describe a value that depends on other values. When you data-bind to a computed property inside the template, Vue knows when to update the DOM when any of the values depended upon by the computed property has changed

    function createNewInfo() {
      if (state.newInfoContent && state.selectedInfoType !== '') {
        postcont.emit('add-info', state.newInfoContent);
        state.newInfoContent = '';
      }
    }

    return {
      state,
      newInfoCharacterCount,
      createNewInfo
    }
  }
};
</script>

<style lang="scss" scoped>
.create-infopanel {
  margin-top: 20px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;

  textarea {
    border: 1px solid #DFE3E8;
    border-radius: 5px;
  }

  .create-info-submit {
    display: flex;
    justify-content: space-between;

    .create-infotype {
      padding: 10px 0;
    }

    button {
      padding: 5px 20px;
      margin: auto 0;
      border-radius: 5px;
      border: none;
      background-color: deeppink;
      color: white;
      font-weight: bold;
    }
  }

  &.--exceeded {
    color: red;
    border-color: red;

    .create-info-submit {
      button {
        background-color: red;
        color: white;
      }
    }
  }
}
</style>