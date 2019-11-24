import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Banner from '~/components/Banner.vue';

const wrapper = shallowMount(Banner);

describe('Banner.vue', () => {
    it('Banner component exists', () => {
        // eslint-disable-next-line no-unused-expressions
        expect(Banner).to.exist;
    });

    it('Banner image exists', () => {
        expect(wrapper.find('.banner-image').exists());
    });
});
