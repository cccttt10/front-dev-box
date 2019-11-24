<template>
    <div class="search" @keyup.enter="startSearch">
        <el-input
            placeholder="Search something..."
            v-model="searchText"
            @change="modifyValue"
            class="input-with-select"
        >
            <el-select
                v-odel="searchType"
                slot="prepend"
                placeholder="Select search engine..."
            >
                <el-option
                    v-for="item in searchOptions"
                    :label="item.label"
                    :value="item.value"
                    :key="item.label"
                />
            </el-select>
            <el-button
                slot="append"
                icon="el-icon-search"
                @click="startSearch"
            />
        </el-input>
    </div>
</template>

<script>
import { searchOptions } from '~db/db';

export default {
    data() {
        return {
            searchText: '',
            oldSearchText: '',
            searchType: 0,
            searchOptions
        };
    },
    methods: {
        startSearch() {
            if (this.oldSearchText !== this.searchText) return false;
            const url = this.searchOptions[this.searchType].url;
            window.open(url + this.searchText);
            return true;
        },
        modifyValue() {
            this.oldSearchText = this.searchText;
        }
    }
};
</script>

<style lang="scss">
.search {
    text-align: center;
}

.input-with-select {
    .el-select {
        .el-input {
            width: 140px;
        }
    }
}
</style>
