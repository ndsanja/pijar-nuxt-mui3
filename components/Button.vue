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

  ${color === 'primary' && `
  primary
  disabled:on-surface
  disabled:!bg-opacity-10
  on-primary-text
  disabled:on-surface-text
  disabled:!text-opacity-40`
  }
  ${color === 'secondary' && `
  secondary
  disabled:on-surface
  disabled:!bg-opacity-10
  on-secondary-text
  disabled:on-surface-text
  disabled:!text-opacity-40`
  }
  ${color === 'tertiary' && `
  tertiary
  disabled:on-surface
  disabled:!bg-opacity-10
  on-tertiary-text
  disabled:on-surface-text
  disabled:!text-opacity-40`
  }
  ${color === 'error' && `
  error
  disabled:on-surface
  disabled:!bg-opacity-10
  on-error-text
  disabled:on-surface-text
  disabled:!text-opacity-40`
  }
  
  `)">
    <span v-if="startIcon" class="pr-2 text-lg">{{ startIcon }}</span>
    <slot />
    <span v-if="endIcon" class="pl-2 text-lg">{{ endIcon }}</span>
  </button>
</template>