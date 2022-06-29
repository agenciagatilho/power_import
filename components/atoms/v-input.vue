<template>
  <span
    class="input-box"
    :id="'span_input_' + id"
  >
    <label :for="id">{{ placeholder }}</label>
    <textarea
      v-if="type === 'textarea'"
      :id="id"
      :value="masked"
      :type="type"
      :name="id"
      :placeholder="placeholder"
      :required="required"
      @input="e=>value = e.target.value"
      :maxlength="maxlength"
      cols="30"
      :rows="rows"
    />
    <input
      v-else
      :id="id"
      :value="masked"
      :type="type"
      :name="id"
      :placeholder="placeholder"
      :required="required"
      @input="e=>value = e.target.value"
      :maxlength="maxlength"
      :minlength="minlength"
    >
  </span>
</template>

<script>

export default {
  props: {
    id: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: 100
    },
    minlength: {
      type: Number,
      default: 1
    },
    rows: {
      type: Number,
      default: 10
    },
    mask: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      value: ''
    }
  },
  computed: {
    masked () {
      const mask = this.mask
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
        return this.value.replace(new RegExp(regex.join('')), mountValues.join(''))
      }

      return this.value
    }
  }
}
</script>

<style lang="scss" scoped>
.input-box{
    @apply w-full flex bg-white rounded-10px border-2px border-white;
    color: #6F6F6F;

    label{ font-size: 0; @apply w-0 h-0 opacity-0; }

    input, textarea{
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
