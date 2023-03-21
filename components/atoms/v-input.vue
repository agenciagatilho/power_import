<template>
  <span
    class="input-box"
    :id="'span_input_' + id"
  >
    <label :for="id">
      {{placeholder}}
    </label>
    <component
      :is="is(type)"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :name="id"
      :required="required"
      :autofocus="autofocus"
      :maxlength="maxlength"
      :minlength="minlength"
      :pattern="pattern"
      :readonly="readonly"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :autocorrect="autocorrect"
      :autocapitalize="autocapitalize"
      :spellcheck="spellcheck"
      :autosize="autosize"
      :rows="rows"
      :cols="cols"
      :title="patternMessage"
      :list="list"
      @input="masked"
      @change="change"
    >
      <option v-if="options" value="" hidden selected disabled>Selecione um {{placeholder}}</option>
      <option v-for="option in options" :key="option.name" :value="option.name" v-text="option.title" />
    </component>
  </span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'Test'
    },
    value: {
      type: String,
      default: null
    },
    id: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: true
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: null
    },
    minlength: {
      type: Number,
      default: null
    },
    pattern: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String,
      default: null
    },
    autocorrect: {
      type: String,
      default: null
    },
    autocapitalize: {
      type: String,
      default: null
    },
    spellcheck: {
      type: Boolean,
      default: null
    },
    autosize: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: null
    },
    cols: {
      type: Number,
      default: null
    },
    patternMessage: {
      type: String,
      default: null
    },
    mask: {
      type: String,
      default: null
    },
    list: {
      type: String,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      data_value: this.value || ''
    }
  },
  methods: {
    is (type) {
      switch (type) {
        case 'select': return 'select'
        case 'textarea': return 'textarea'
        default: return 'input'
      }
    },
    masked (e) {
      const mask = this.mask
      const value = e.target.value.replace(/\D/g, '')
      if (mask) {
        let i = 0; let m = 1
        const mountValues = []
        const regex = []

        mask.split('').forEach((item, index) => {
          if (item === '#') {
            i++
          } else {
            if (i > 0) {
              regex.push('(\\d{' + i + '})')
              mountValues.push('$' + m)
              m++
            }
            mountValues.push(item)
            i = 0
          }
          if (index === mask.length - 1) {
            if (i > 0) {
              regex.push('(\\d{' + i + '})')
              mountValues.push('$' + m)
            }
          }
        })

        let elementIndex = 0
        for (let i = 0; i < regex.length; i++) {
          elementIndex += parseInt(regex[i].replace(/[^1-9]/g, ''))

          if (value.length === elementIndex + 1) {
            const element = regex.splice(0, i + 1).join('').replaceAll('{', '{0,')
            const mask = mountValues.join('').split('$').splice(0, i + 2).join('$')

            e.target.value = e.target.value.replace(/[\D]/g, '').replace(new RegExp(element), mask)
          }
        }
        this.callback(e)
      }
    },
    callback (e) {
      this.$emit('input', e)
    },
    change (e) {
      this.$emit('change', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-box{
    @apply w-full flex bg-white rounded-10px border-2px border-white;
    color: #6F6F6F;

    label{ font-size: 0; @apply w-0 h-0 opacity-0; }

    input, textarea, select{
        @apply h-full w-full py-13px px-25px bg-transparent font-bold;
        font-size: 14px;
        line-height: 14px;
        &:focus{
            @apply outline-none;
        }
        &::placeholder{
            @apply text-$place font-normal;
        }
    }
}
</style>
