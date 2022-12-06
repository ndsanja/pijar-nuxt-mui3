<script setup lang="ts">
const { variant, size, color, startIcon, endIcon } = withDefaults(defineProps<{
  variant?: 'filled' | 'tonal' | 'bordered' | 'text' | 'elevated'
  size?: 'small' | 'medium' | 'large' | 'extra-large'
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
  startIcon?: any
  endIcon?: any
}>(), {
  variant: 'filled',
  color: 'primary',
  size: 'medium'
})
</script>

<template>
  <button :class="tw(`
  h-[40px]
  ${startIcon && `pl-[16px] pr-[24px]`}
  ${endIcon && `pl-[24px] pr-[16px]`}
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
    <span v-if="startIcon" class="pr-[8px] text-[18px]">{{ startIcon }}</span>
    <slot />
    <span v-if="endIcon" class="pl-[8px] text-[18px]">{{ endIcon }}</span>
  </button>
</template>