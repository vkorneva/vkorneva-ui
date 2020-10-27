# KvvBreadcrumbs

## Accepted values ​​in *props*

**breadcrumbs** - (*Array*):
  - **url** - (*String*)
  - **title** - (*String*)

## Example

```vue
<template>
    <div>
        <breadcrumbs-kvv :breadcrumbs="breadcrumbs">
        </breadcrumbs-kvv>
    </div>
</template>

<script>
import KvvBreadcrumbs from '~vkorneva-ui/src/components/kvv-breadcrumbs/KvvBreadcrumbs.vue';

export default {
    components: {
        KvvBreadcrumbs,    
    }
}
</script>
```
