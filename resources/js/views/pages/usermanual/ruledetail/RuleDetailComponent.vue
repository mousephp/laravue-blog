<template>
    <div>
        <app-rule-detail-breadcrumb></app-rule-detail-breadcrumb>
        <app-rule-detail-content></app-rule-detail-content>
    </div>
</template>

<script>
    import RuleDetailBreadcrumb from '../../../../components/pages/BreadcrumbComponent.vue';
    import RuleDetailContent from './RuleDetailContent.vue';

    export default {
        components:{
            appRuleDetailBreadcrumb: RuleDetailBreadcrumb,
            appRuleDetailContent: RuleDetailContent
        }
    }
</script>