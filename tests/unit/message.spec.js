import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Message from '@/components/atoms/Message.vue';

describe('Message.vue', () => {
  it('renders props.message when passed', () => {
    const message = 'new message';
    const wrapper = shallowMount(Message, {
      propsData: { message },
    });
    expect(wrapper.text()).to.include(message);
  });
});
