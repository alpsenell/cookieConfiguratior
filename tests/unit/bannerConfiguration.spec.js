import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import BannerConfiguration from '@/components/molecules/BannerConfiguration';
import BaseToggleSwitch from '@/components/atoms/BaseToggleSwitch';

describe('BannerConfiguration.vue', () => {
  const buttonsOptions = [
    { text: 'Accept Button Display', value: 'acceptButtonDisplay', checked: false },
    { text: 'Reject Button Display', value: 'rejectButtonDisplay', checked: false },
    { text: 'Close Button Display', value: 'closeButtonDisplay', checked: false },
    { text: 'Close Button Rejects', value: 'closeButtonRejects', checked: false },
  ];
  const cookieTitle = 'Test';

  it('should render required props successfully', () => {
    const wrapper = shallowMount(BannerConfiguration, {
      propsData: { buttonsOptions, cookieTitle },
      stubs: { BaseToggleSwitch },
    });

    expect(wrapper.findComponent(BaseToggleSwitch)).to.exist;
    expect(wrapper.find('.a').element.value).to.equal(cookieTitle);
  });
});
