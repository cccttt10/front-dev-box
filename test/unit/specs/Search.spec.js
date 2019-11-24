import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Search from '~/components/Search.vue';
/* eslint-disable no-unused-expressions */
const wrapper = shallowMount(Search);

const input = wrapper.find('.input-with-select');

describe('Search.vue', () => {
    it('Search component exists', () => {
        expect(Search).to.exist;
    });

    it('Searchtype has default value 0', () => {
        expect(wrapper.vm.searchType).to.equal(0);
    });

    it('Input box exists', () => {
        expect(input.exists()).to.equal(true);
    });

    it('Change event is fired', () => {
        input.trigger('change');
        expect(wrapper.vm.oldSearchText).to.equal(wrapper.vm.searchText);
    });

    it('startSearch event handler is triggered', () => {
        expect(wrapper.vm.startSearch()).to.be.true;
    });

    it('Abnormal search event does not trigger anything', () => {
        wrapper.vm.searchText = 1;
        wrapper.vm.oldSearchText = 2;
        expect(wrapper.vm.startSearch()).to.be.false;
    });
});
