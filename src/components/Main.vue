<template>
    <div>
        <block :data="toolList" type="toolList"></block>
        <block :data="techList" type="techList"></block>
        <block :data="specList" type="specList"></block>
        <block :data="blogList" type="blogList"></block>
        <block :data="learningList" type="learningList"></block>
    </div>
</template>

<script>
import { toolList, techList, specList, blogList, learningList } from '~/db/db';
import Block from '~/components/Block.vue';

export default {
    components: { Block },
    data() {
        return {
            toolList,
            techList,
            specList,
            blogList,
            learningList
        };
    }
};
</script>
