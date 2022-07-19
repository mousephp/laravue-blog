<template>
    <div>
        <app-library-breadcrumb-component></app-library-breadcrumb-component>
        <app-library-content-component></app-library-content-component>
    </div>
</template>

<script>
    import LibraryBreadcrumbComponent from '../../../components/pages/BreadcrumbComponent.vue';
    import LibraryContentComponent from './LibraryContentComponent.vue';

    export default {
        components:{
            appLibraryBreadcrumbComponent: LibraryBreadcrumbComponent,
            appLibraryContentComponent: LibraryContentComponent
        }
    }
</script>