import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import ScrollToTop from '~/components/ScrollToTop.vue';
/* eslint-disable no-unused-expressions */

const wrapper = mount(ScrollToTop, {
    propsData: { scrollElement: document.body }
});

describe('ScrollToTop.vue', () => {
    it('ScrollToTop component exists', () => {
        expect(ScrollToTop).to.exist;
    });

    it('Button is rendered', () => {
        expect(wrapper.find('#scroll-to-top')).to.exist;
    });

    it('Can scroll to top', () => {
        wrapper.vm.scrollElement.pageYOffset = 160;
        wrapper.vm.$refs.topBtn.click();
        wrapper.vm.scrollToTop();
    });

    it('Scrollbar is hidden', () => {
        wrapper.vm.scrollElement.pageYOffset = -80;
        wrapper.vm.scrollToTop();
    });

    it('Component is destroyed', () => {
        wrapper.destroy();
    });
});
