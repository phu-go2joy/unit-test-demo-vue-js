import { mount } from '@vue/test-utils'
import App from "./../src/App.vue";

describe('App', () => {
  // Inspect the raw component options
  it('has data', () => {
    expect(typeof App.data).toBe('function')
  })
})
//   test('is a Vue instance', () => {
//     expect(wrapper.isVueInstance()).toBeTruthy()
//   })

describe('Mounted App', () => {
  const wrapper = mount(App);

    it("has a buttons", () => {
      expect(wrapper.contains("button")).toBe(true);
    });

    it('renders correctly with different data', async () => {
        wrapper.setData({ x1: 5, x2: 10 })
        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('10')
    })

    it('button click without correct sum', () => {
        expect(wrapper.vm.message).toBe("")
        const button = wrapper.find('button')
        button.trigger('click')
        expect(wrapper.vm.message).toBe('TRY AGAIN')
    })

    it('button click with correct sum', () => {
      wrapper.setData({ x1: 5, x2: 10 })
        wrapper.setData({ guess: "15" })
        const button = wrapper.find('button')
        button.trigger('click')
        expect(wrapper.vm.message).toBe('SUCCESS!')
    })
})
