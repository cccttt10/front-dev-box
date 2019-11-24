import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Main from '~/components/Main.vue';

const wrapper = mount(Main);

describe('Main.vue', () => {
    it('Main component exists', () => {
        // eslint-disable-next-line no-unused-expressions
        expect(Main).to.exist;
    });
    it('Prop types are correct', () => {
        expect(wrapper.vm.toolList.list).to.be.a('Array');
        expect(wrapper.vm.techList.list).to.be.a('Array');
        expect(wrapper.vm.specList.list).to.be.a('Array');
        expect(wrapper.vm.blogList.list).to.be.a('Array');
        expect(wrapper.vm.learningList.list).to.be.a('Array');
    });
    it('There are 5 titles', () => {
        const titleLength = wrapper.findAll('.common-panel-title').length;
        expect(titleLength).to.equal(5);
    });
});
