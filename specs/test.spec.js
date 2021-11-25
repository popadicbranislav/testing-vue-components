import TestComponent from "@/test";
import List from "@/list";
import { mount } from "@vue/test-utils";

test("mount a Test component", () => {
  const wrapper = mount(TestComponent, {
    propsData: {
      value: "VueSchool",
    },
  });
  expect(wrapper).toMatchSnapshot();
});

test("list component", async () => {
  const wrapper = mount(List);
  const movies = wrapper.vm.marvelMovies;
  await wrapper.setData({ marvelMovies: [...movies, "Endgame"] });
  // await wrapper.setData({ marvelMovies: [] });

  expect(wrapper).toMatchSnapshot();
});
