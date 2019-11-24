import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Navigation from '~/components/Navigation.vue';

const wrapper = mount(Navigation);

describe('Navigation.vue', () => {
    it('Navigation component exists', () => {
        // eslint-disable-next-line no-unused-expressions
        expect(Navigation).to.exist;
    });

    it('GitHub link is correct', () => {
        const linkHref = wrapper.find('.github').attributes().href;
        expect(linkHref).to.equal(
            'https://github.com/chuntonggao/front-dev-box'
        );
    });
});
