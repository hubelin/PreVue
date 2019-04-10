import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import HomeSidebar from '@/components/HomeSidebar.vue';
import Icons from '@/components/Icons.vue';

const localVue = createLocalVue();

localVue.use(Vuex);
describe('HomeSidebar.vue', () => {
  let actions;
  let store;
  beforeEach(() => {
    actions = {
      handleClick: jest.fn()
    };
    store = new Vuex.Store({
      actions
    });
  });
  it('contains an input field', () => {
    const onClose = jest.fn();
    const wrapper = shallowMount(HomeSidebar, {
      propsData: { onClose }
    });
  }),
    it('contains a button that clicks', () => {
      const test = jest.fn();
      const wrapper = shallowMount(HomeSidebar);
      wrapper.setMethods({
        test: test
      });
      wrapper.find('button').trigger('click');
      expect(test).toBeCalled();
    }),
    it('contains Icons', () => {
      const wrapper = shallowMount(HomeSidebar);
      expect(wrapper.contains(Icons));
    });

  it('button click calls store action "registerComponent" when clicked', () => {
    const wrapper = shallowMount(HomeSidebar, {
      store,
      localVue
    });

    const button = wrapper.find('button');
    button.trigger('click');

    expect(actions.handleClick).toHaveBeenCalled();
  });
});
