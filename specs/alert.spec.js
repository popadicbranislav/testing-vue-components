import AlertMessage from "@/alert-message";
import { mount } from "@vue/test-utils";

jest.useFakeTimers();

describe("Lifecycle methods", () => {
  test("mounted assigns interval", () => {
    const wrapper = mount(AlertMessage);

    expect(wrapper.vm.interval).not.toBe(undefined);
  });

  test("counter works", () => {
    const wrapper = mount(AlertMessage);

    expect(wrapper.vm.counter).toBe(0);
    jest.advanceTimersByTime(1000);
    expect(wrapper.vm.counter).toBe(1);
    jest.advanceTimersByTime(1000);
    expect(wrapper.vm.counter).toBe(2);
  });

  test("instance get destroyed", () => {
    const beforeDestroySpy = jest.spyOn(AlertMessage, "beforeDestroy");
    const wrapper = mount(AlertMessage);

    wrapper.vm.counter = wrapper.vm.timer - 1;
    jest.advanceTimersByTime(1000);

    expect(beforeDestroySpy).toHaveBeenCalled();
  });
});
