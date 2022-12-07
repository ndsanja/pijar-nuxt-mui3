<script setup lang="ts">

type Props = {
  variant?: 'filled' | 'tonal' | 'bordered' | 'text' | 'elevated'
  size?: 'small' | 'medium' | 'large' | 'extra-large'
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
  startIcon?: any
  endIcon?: any
}

const { variant, size, color, startIcon, endIcon } = withDefaults(defineProps<Props>(), {
  variant: 'filled',
  color: 'primary',
  size: 'medium'
})

</script>

<template>
  <button :class="tw(`
  h-10
  ${startIcon && `pl-4 pr-6`}
  ${endIcon && `pl-6 pr-4`}
  rounded-full
  label-large
  text-center
  align-middle
  disabled:opacity-20
  disabled:bg-md-sys-color-on-surface-light/[.12]
  dark:disabled:bg-md-sys-color-on-surface-dark/[.12]
  disabled:text-md-sys-color-on-surface-light/[.38]
  dark:disabled:text-md-sys-color-on-surface-dark/[.38]

  ${color === 'primary' && `
  bg-md-sys-color-primary-light
  dark:bg-md-sys-color-primary-dark
  text-md-sys-color-on-primary-light
  dark:text-md-sys-color-on-primary-dark
  `}
  ${color === 'secondary' && `
  bg-md-sys-color-secondary-light
  dark:bg-md-sys-color-secondary-dark
  text-md-sys-color-on-secondary-light
  dark:text-md-sys-color-on-secondary-dark
  `}
  ${color === 'tertiary' && `
  bg-md-sys-color-tertiary-light
  dark:bg-md-sys-color-tertiary-dark
  text-md-sys-color-on-tertiary-light
  dark:text-md-sys-color-on-tertiary-dark
  `}
  ${color === 'error' && `
  bg-md-sys-color-error-light
  dark:bg-md-sys-color-error-dark
  text-md-sys-color-on-error-light
  dark:text-md-sys-color-on-error-dark
  `}
  `)">
    <span v-if="startIcon" class="pr-2 text-lg">{{ startIcon }}</span>
    <slot />
    <span v-if="endIcon" class="pl-2 text-lg">{{ endIcon }}</span>
  </button>
</template>